/**
 * 批量获取 GitHub favorites 并重新计算 5 星评分
 * 权重: favorites 70%, 内容完整度 10%, 内容差异 10%, URL可访问 10%
 */
const fs = require('fs');
const https = require('https');

const DATA_PATH = '../js/data.js';
const CACHE_PATH = './github-stars-cache.json';
const TOKEN = process.env.GITHUB_TOKEN || '';

// ========== 1. 读取数据 ==========
const src = fs.readFileSync(DATA_PATH, 'utf8');
eval(src.replace('const categories = ', 'var categories = '));

// ========== 2. 统计组织数量 ==========
const orgCount = {};
categories.forEach(cat => cat.subcategories.forEach(sub => sub.skills.forEach(sk => {
  try {
    if (sk.url && sk.url.includes('github.com')) {
      const m = sk.url.match(/github\.com\/([^\/]+)/i);
      if (m) {
        const org = m[1].toLowerCase();
        orgCount[org] = (orgCount[org] || 0) + 1;
      }
    }
  } catch(e) {}
})));

// ========== 3. 提取 Unique GitHub 仓库 ==========
const repoMap = new Map(); // owner/repo -> [{skillRef}]
const skillToRepo = new Map(); // skill.id -> owner/repo

categories.forEach(cat => cat.subcategories.forEach(sub => {
  sub.skills.forEach(skill => {
    if (!skill.url) return;
    const m = skill.url.match(/github\.com\/([^\/]+)\/([^\/\s]+)/i);
    if (m) {
      const owner = m[1].toLowerCase();
      const repo = m[2].toLowerCase().replace(/\.git$/, '');
      const key = `${owner}/${repo}`;
      if (!repoMap.has(key)) repoMap.set(key, []);
      repoMap.get(key).push(skill);
      skillToRepo.set(skill.id, key);
    }
  });
}));

const uniqueRepos = Array.from(repoMap.keys());
console.log(`Total skills: ${categories.reduce((a,c) => a + c.subcategories.reduce((a2,s) => a2 + s.skills.length, 0), 0)}`);
console.log(`Unique GitHub repos: ${uniqueRepos.length}`);

// ========== 4. 加载缓存 ==========
let cache = {};
if (fs.existsSync(CACHE_PATH)) {
  try {
    cache = JSON.parse(fs.readFileSync(CACHE_PATH, 'utf8'));
    console.log(`Loaded cache with ${Object.keys(cache).length} entries`);
  } catch(e) {
    console.log('Cache load failed, starting fresh');
  }
}

// ========== 5. GitHub API 获取 Stars ==========
function fetchStarCount(owner, repo) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: `/repos/${owner}/${repo}`,
      method: 'GET',
      headers: {
        'User-Agent': 'ai-skill-nav',
        'Accept': 'application/vnd.github.v3+json',
        ...(TOKEN ? { 'Authorization': `Bearer ${TOKEN}` } : {})
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            const json = JSON.parse(data);
            resolve({ stars: json.stargazers_count || 0, status: 200 });
          } catch(e) {
            resolve({ stars: null, status: res.statusCode, error: 'parse error' });
          }
        } else if (res.statusCode === 404) {
          resolve({ stars: null, status: 404, error: 'not found' });
        } else if (res.statusCode === 403) {
          const remaining = res.headers['x-ratelimit-remaining'];
          const reset = res.headers['x-ratelimit-reset'];
          resolve({ stars: null, status: 403, error: 'rate limit', remaining, reset });
        } else {
          resolve({ stars: null, status: res.statusCode, error: `http ${res.statusCode}` });
        }
      });
    });

    req.on('error', (err) => {
      resolve({ stars: null, status: 0, error: err.message });
    });

    req.setTimeout(15000, () => {
      req.destroy();
      resolve({ stars: null, status: 0, error: 'timeout' });
    });

    req.end();
  });
}

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function batchFetchStars() {
  const results = {};
  let apiSuccess = 0;
  let apiFail = 0;
  let rateLimited = false;
  const delayMs = TOKEN ? 300 : 1200; // 有token 300ms, 无token 1200ms (避免60/hr限制)

  for (let i = 0; i < uniqueRepos.length; i++) {
    const repo = uniqueRepos[i];

    // 优先使用缓存
    if (cache[repo] !== undefined) {
      results[repo] = cache[repo];
      continue;
    }

    // 如果已经被 rate limit 且没有token，跳过剩余全部
    if (rateLimited && !TOKEN) {
      results[repo] = null;
      continue;
    }

    const [owner, repoName] = repo.split('/');
    const result = await fetchStarCount(owner, repoName);

    if (result.status === 200) {
      results[repo] = result.stars;
      cache[repo] = result.stars;
      apiSuccess++;
    } else if (result.status === 403 && result.error === 'rate limit') {
      rateLimited = true;
      results[repo] = null;
      apiFail++;
      if (!TOKEN) {
        console.log(`  Rate limited (no token). Skipping remaining ${uniqueRepos.length - i - 1} repos.`);
        // 剩余全部跳过
        for (let j = i + 1; j < uniqueRepos.length; j++) {
          if (cache[uniqueRepos[j]] !== undefined) {
            results[uniqueRepos[j]] = cache[uniqueRepos[j]];
          } else {
            results[uniqueRepos[j]] = null;
          }
        }
        break;
      } else {
        // 有token但被限流，等待重置
        const resetTime = result.reset ? parseInt(result.reset) * 1000 : Date.now() + 60000;
        const waitMs = Math.max(resetTime - Date.now() + 5000, 60000);
        console.log(`  Rate limited. Waiting ${Math.round(waitMs/1000)}s...`);
        await sleep(waitMs);
        // 重试当前
        i--;
        continue;
      }
    } else {
      results[repo] = null;
      apiFail++;
    }

    if ((i + 1) % 10 === 0) {
      console.log(`  Progress: ${i + 1}/${uniqueRepos.length} (success: ${apiSuccess}, fail: ${apiFail})`);
    }

    await sleep(delayMs);
  }

  // 保存缓存
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2), 'utf8');
  console.log(`\nAPI results: success=${apiSuccess}, fail=${apiFail}`);
  console.log(`Cache saved to ${CACHE_PATH}`);
  return results;
}

// ========== 6. 估算回退逻辑 ==========
const topCorps = new Set([
  'microsoft','google','amazon','meta','apple','apache','pytorch','hashicorp','snyk'
]);
const knownCommunities = new Set([
  'anthropics','huggingface','vercel','supabase','cloudflare','denoland','flutter',
  'automattic','n8n-io','getsentry','storybookjs','posthog','browser-use','openhands',
  'trailofbits','react','sveltejs','vuejs-ai','langgenius','langflow-ai',
  'openinterpreter','nextlevelbuilder','netdata','oven-b','zed-industries','expo',
  'home-assistant','tursodatabase','clickhouse','ant-design','materialdesigninxaml',
  'civitai','leanprover','zenml-io','getzep','netease-youdao','larksuite',
  'significant-gravitas','yaoapp','lobehub','google-gemini','qwenlm','bytedance',
  'microsoftdocs','google-labs-code','remotion-dev','prowler-cloud','wordpress'
]);

function estimateFavorites(owner, orgCountVal, summary, description) {
  let base = 5;
  const orgL = (owner || '').toLowerCase();
  if (topCorps.has(orgL)) base = 100;
  else if (knownCommunities.has(orgL)) base = 50;
  else if (orgCountVal >= 30) base = 30;
  else if (orgCountVal >= 10) base = 15;

  // 内容完整度微调 0-20
  let bonus = 0;
  const totalLen = (summary || '').length + (description || '').length;
  if (totalLen > 80) bonus = 20;
  else if (totalLen > 40) bonus = 10;

  return base + bonus;
}

// ========== 7. 评分函数 ==========
function scoreDiff(summary, description) {
  const s = (summary || '').trim();
  const d = (description || '').trim();
  if (!s || !d) return 0;
  if (d.toLowerCase().includes(s.toLowerCase())) {
    const ratio = s.length / d.length;
    if (ratio > 0.8) return 20;
    if (ratio > 0.5) return 50;
    return 70;
  }
  const sWords = new Set(s.toLowerCase().split(/\s+/).filter(w => w.length > 2));
  const dWords = new Set(d.toLowerCase().split(/\s+/).filter(w => w.length > 2));
  if (sWords.size === 0 || dWords.size === 0) return 0;
  let overlap = 0;
  sWords.forEach(w => { if (dWords.has(w)) overlap++; });
  const overlapRatio = overlap / sWords.size;
  if (overlapRatio > 0.5) return 50;
  return 100;
}

function scoreCompleteness(summary, description) {
  let comp = 0;
  if ((summary || '').length >= 10) comp += 30;
  if ((summary || '').length >= 50) comp += 20;
  if ((description || '').length >= 20) comp += 30;
  if ((description || '').length >= 100) comp += 20;
  return comp;
}

function scoreUrl(url) {
  return url && url.startsWith('http') ? 100 : 0;
}

function to5Stars(total) {
  if (total >= 85) return 5;
  if (total >= 70) return 4;
  if (total >= 55) return 3;
  if (total >= 35) return 2;
  return 1;
}

// ========== 8. 主流程 ==========
(async () => {
  console.log('=== Step 1: Fetching GitHub stars ===');
  const repoStars = await batchFetchStars();

  console.log('\n=== Step 2: Assigning favorites & calculating stars ===');

  // 先计算所有 favorites 值
  let totalSkills = 0;
  let apiCount = 0;
  let estimateCount = 0;

  categories.forEach(cat => cat.subcategories.forEach(sub => {
    sub.skills.forEach(skill => {
      totalSkills++;
      const repo = skillToRepo.get(skill.id);
      let fav = 0;

      if (repo && repoStars[repo] !== null && repoStars[repo] !== undefined) {
        fav = repoStars[repo];
        apiCount++;
      } else {
        // 估算
        const m = skill.url ? skill.url.match(/github\.com\/([^\/]+)/i) : null;
        const owner = m ? m[1] : '';
        const orgCountVal = orgCount[(owner || '').toLowerCase()] || 0;
        fav = estimateFavorites(owner, orgCountVal, skill.summary, skill.description);
        estimateCount++;
      }

      skill.favorites = fav;
    });
  }));

  console.log(`Assigned favorites: API=${apiCount}, Estimated=${estimateCount}`);

  // 计算 max favorites 用于对数缩放
  const allFavs = [];
  categories.forEach(cat => cat.subcategories.forEach(sub => {
    sub.skills.forEach(s => allFavs.push(s.favorites || 0));
  }));
  const maxFav = Math.max(...allFavs, 1);
  console.log(`Max favorites in dataset: ${maxFav}`);

  // 重新计算 stars
  const oldDist = {};
  const newDist = {};

  categories.forEach(cat => cat.subcategories.forEach(sub => {
    sub.skills.forEach(skill => {
      oldDist[skill.stars] = (oldDist[skill.stars] || 0) + 1;

      const fav = skill.favorites || 0;
      const favoritesScore = (Math.log10(fav + 1) / Math.log10(maxFav + 1)) * 100;
      const completenessScore = scoreCompleteness(skill.summary, skill.description);
      const diffScore = scoreDiff(skill.summary, skill.description);
      const urlScore = scoreUrl(skill.url);

      const total = favoritesScore * 0.70 + completenessScore * 0.10 + diffScore * 0.10 + urlScore * 0.10;
      const ns = to5Stars(total);

      skill.stars = ns;
      newDist[ns] = (newDist[ns] || 0) + 1;
    });
  }));

  console.log('\nOld stars distribution:', JSON.stringify(oldDist));
  console.log('New stars distribution:', JSON.stringify(newDist));

  console.log('\n=== Step 3: Writing data.js ===');

  // 紧凑序列化
  function serializeString(s) {
    return `"${s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r')}"`;
  }

  function serializeSkill(skill) {
    return `{ id: ${serializeString(skill.id)}, cnName: ${serializeString(skill.cnName)}, enName: ${serializeString(skill.enName)}, icon: ${serializeString(skill.icon)}, summary: ${serializeString(skill.summary || '')}, description: ${serializeString(skill.description || '')}, url: ${serializeString(skill.url || '')}, favorites: ${skill.favorites}, stars: ${skill.stars} }`;
  }

  function serializeSubcategory(sub) {
    const skillsStr = sub.skills.map(serializeSkill).join(',\n        ');
    return `{\n      id: ${serializeString(sub.id)},\n      name: ${serializeString(sub.name)},\n      skills: [\n        ${skillsStr}\n      ]\n    }`;
  }

  function serializeCategory(cat) {
    const subsStr = cat.subcategories.map(serializeSubcategory).join(',\n    ');
    return `{\n    id: ${serializeString(cat.id)},\n    name: ${serializeString(cat.name)},\n    subcategories: [\n    ${subsStr}\n    ]\n  }`;
  }

  const catsStr = categories.map(serializeCategory).join(',\n');
  const output = `const categories = [\n${catsStr}\n];\n`;

  fs.writeFileSync(DATA_PATH, output, 'utf8');
  console.log(`File written: ${DATA_PATH}`);
  console.log(`File size: ${(fs.statSync(DATA_PATH).size / 1024).toFixed(0)} KB`);

  // 同步 data-processed.js
  fs.writeFileSync('../js/data-processed.js', output, 'utf8');
  console.log(`File written: ../js/data-processed.js`);

  // 验证
  console.log('\n=== Step 4: Verification ===');
  eval(fs.readFileSync(DATA_PATH, 'utf8').replace('const categories = ', 'var categories = '));

  let verifyTotal = 0;
  const verifyDist = {};
  let verifyFavMin = Infinity;
  let verifyFavMax = -Infinity;
  let verifyFavSum = 0;
  const allFavorites = [];

  categories.forEach(cat => cat.subcategories.forEach(sub => {
    sub.skills.forEach(sk => {
      verifyTotal++;
      verifyDist[sk.stars] = (verifyDist[sk.stars] || 0) + 1;
      const f = sk.favorites || 0;
      verifyFavMin = Math.min(verifyFavMin, f);
      verifyFavMax = Math.max(verifyFavMax, f);
      verifyFavSum += f;
      allFavorites.push(f);
    });
  }));

  allFavorites.sort((a, b) => a - b);
  const median = allFavorites[Math.floor(allFavorites.length / 2)];

  console.log(`Total skills: ${verifyTotal}`);
  console.log(`Stars distribution:`, JSON.stringify(verifyDist));
  console.log(`Favorites - min: ${verifyFavMin}, max: ${verifyFavMax}, median: ${median}, mean: ${(verifyFavSum / verifyTotal).toFixed(1)}`);

  // 抽样 highest/lowest
  const sortedByFav = [];
  categories.forEach(cat => cat.subcategories.forEach(sub => {
    sub.skills.forEach(sk => sortedByFav.push({ name: sk.cnName, fav: sk.favorites, stars: sk.stars }));
  }));
  sortedByFav.sort((a, b) => b.fav - a.fav);
  console.log('\nTop 5 by favorites:');
  sortedByFav.slice(0, 5).forEach(s => console.log(`  ${s.name}: ${s.fav} (stars=${s.stars})`));
  console.log('Bottom 5 by favorites:');
  sortedByFav.slice(-5).forEach(s => console.log(`  ${s.name}: ${s.fav} (stars=${s.stars})`));

  console.log('\n=== Done ===');
})();
