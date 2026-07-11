(function() {
  var CHUNK_COUNT = 40;
  var MAX_CONCURRENT = 6; // 浏览器并发限制（同域名HTTP/1.1一般6个）

  function setLoadProgress(pct, detail) {
    var bar = document.getElementById('loadingBarFill');
    var txt = document.getElementById('loadingText');
    if (bar) bar.style.width = pct + '%';
    if (txt) txt.textContent = '正在加载 Skill 数据... ' + pct + '%' + (detail ? ' (' + detail + ')' : '');
  }

  function loadScript(src) {
    return new Promise(function(resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = function() { reject(new Error('Failed to load: ' + src)); };
      document.head.appendChild(s);
    });
  }

  // 并行加载所有分片（控制并发数）
  function loadAllChunks() {
    var urls = [];
    for (var i = 0; i < CHUNK_COUNT; i++) {
      urls.push('js/data-chunk-' + i + '.js');
    }
    var completed = 0;
    var total = urls.length;

    return new Promise(function(resolve, reject) {
      var idx = 0;

      function next() {
        if (idx >= urls.length) {
          if (completed === total) resolve();
          return;
        }
        var url = urls[idx++];
        loadScript(url).then(function() {
          completed++;
          var pct = Math.round(10 + (completed / total) * 85); // 10% ~ 95%
          setLoadProgress(pct, completed + '/' + total);
          next();
        }).catch(function(e) {
          console.error(e);
          completed++;
          next();
        });
        // 启动下一个（如果并发数未满）
      }

      // 启动 MAX_CONCURRENT 个并发
      var startCount = Math.min(MAX_CONCURRENT, urls.length);
      for (var i = 0; i < startCount; i++) {
        next();
      }
    });
  }

  // 数据合并与索引构建
  function mergeAndIndex() {
    var A = Array.prototype.concat.apply([],
      Array.from({length: CHUNK_COUNT}, function(_, i) { return window['dataChunk' + i] || []; })
    );

    // URL 还原
    A.forEach(function(sk) {
      if (sk.url && sk.url.charAt(0) === 'p') {
        var idx = sk.url.indexOf(':');
        if (idx > 0) {
          var key = sk.url.substring(0, idx);
          var rest = sk.url.substring(idx + 1);
          sk.url = (URL_P[key] || '') + rest;
        }
      }
    });

    // 建立索引
    var index = new Map();
    A.forEach(function(sk) {
      var key = sk.c + '-' + sk.s;
      if (!index.has(key)) index.set(key, []);
      index.get(key).push(sk);
    });

    // 构建嵌套 categories
    window.categories = schema.categories.map(function(cat) {
      return {
        id: String(cat.id),
        name: cat.name,
        subcategories: cat.subcategories.map(function(sub) {
          var key = cat.id + '-' + sub.id;
          return {
            id: String(sub.id),
            name: sub.name,
            parentCatId: String(cat.id),
            skills: index.get(key) || []
          };
        })
      };
    });

    window.allSkills = A;

    // 预构建搜索索引：预计算小写字段，避免搜索时重复 toLowerCase
    var searchIndex = new Array(A.length);
    for (var si = 0; si < A.length; si++) {
      var sk = A[si];
      searchIndex[si] = {
        idx: si,
        enL: (sk.enName || '').toLowerCase(),
        cnL: (sk.cnName || '').toLowerCase(),
        sumL: (sk.summary || '').toLowerCase(),
        descL: (sk.description || '').toLowerCase(),
        stars: sk.stars || 0
      };
    }
    window._searchIndex = searchIndex;

    var catMap = new Map();
    schema.categories.forEach(function(cat) {
      cat.subcategories.forEach(function(sub) {
        catMap.set(cat.id + '-' + sub.id, { catName: cat.name, subName: sub.name });
      });
    });
    window.categoryMap = catMap;
  }

  // 加载渲染和搜索脚本
  function loadRenderScripts() {
    return Promise.all([
      loadScript('js/render.js'),
      loadScript('js/search.js')
    ]);
  }

  // 隐藏 loading overlay
  function hideOverlay() {
    setLoadProgress(100);
    var overlay = document.getElementById('loadingOverlay');
    if (overlay) {
      overlay.style.opacity = '0';
      setTimeout(function() { overlay.style.display = 'none'; }, 300);
    }
  }

  // 主流程
  setLoadProgress(10, '准备中...');

  loadAllChunks()
    .then(function() {
      setLoadProgress(95, '合并数据...');
      mergeAndIndex();
      return loadRenderScripts();
    })
    .then(function() {
      hideOverlay();
    })
    .catch(function(e) {
      console.error('数据加载失败:', e);
      setLoadProgress(0, '加载失败');
    });
})();
