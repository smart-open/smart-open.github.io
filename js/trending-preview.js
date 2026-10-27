/* ========================================
   Trending Preview - Homepage Section
   Renders Top 3 weekly projects + insight
   from trending/trending-data.js
   ======================================== */
(function() {
  'use strict';

  if (typeof TRENDING_DATA === 'undefined') return;

  var data = TRENDING_DATA;

  /* --- Render weekly insight (same logic as trending/index.html) --- */
  var insightEl = document.getElementById('trendingInsight');
  if (insightEl) {
    var aiCount = data.weekly.filter(function(item) {
      return item.desc.indexOf('AI') !== -1 ||
             item.desc.indexOf('Agent') !== -1 ||
             item.desc.indexOf('MCP') !== -1;
    }).length;
    var pct = Math.round(aiCount / data.weekly.length * 100);
    insightEl.innerHTML =
      '<strong>本周观察</strong>：GitHub Trending 中 AI/Agent 相关项目占比约 <strong>' + pct + '%</strong>，' +
      '本周几乎全榜皆 Agent：开源编码 Agent <strong>opencode</strong> 重回榜首，<strong>orca</strong>（Agent 舰队）与 <strong>graphify</strong>（代码库知识图谱）补齐调度与理解两块拼图；' +
      '<strong>andrej-karpathy-skills</strong> 单个 CLAUDE.md 文件冲上 22 万 star 诠释「少即是多」，<strong>cloudflare/security-audit-skill</strong> 周增 16.5k 登顶涨星王。' +
      'Skills 双雄并立：<strong>mattpocock/skills</strong>（304.2K+）逼近 <strong>obra/superpowers</strong>（305.7K+），双双破 30 万，<strong>find-skills</strong> 以 4.1M 安装量断层领先。';
  }

  /* --- Render Top 3 weekly projects --- */
  var listEl = document.getElementById('trendingTopList');
  if (listEl) {
    var top3 = data.weekly.slice(0, 3);
    top3.forEach(function(item) {
      var card = document.createElement('a');
      card.className = 'trending-item';
      card.href = item.url;
      card.target = '_blank';
      card.rel = 'noopener';
      card.innerHTML =
        '<div class="trending-item-header">' +
          '<span class="trending-item-rank">#' + item.rank + '</span>' +
          '<span class="trending-item-name">' + item.name + '</span>' +
        '</div>' +
        '<p class="trending-item-desc">' + item.desc + '</p>' +
        '<div class="trending-item-footer">' +
          '<span class="trending-item-lang">' + item.lang + '</span>' +
          '<span class="trending-item-stars">' + (item.stars ? item.stars + ' \u2B50' : '-') + '</span>' +
        '</div>';
      listEl.appendChild(card);
    });
  }
})();
