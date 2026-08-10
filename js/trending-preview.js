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
      'MCP 和 Skills 生态持续高速增长。Skill 生态中 <strong>find-skills</strong> 以 ~190 万安装量稳居第一，' +
      '<strong>superpowers</strong> 以 252K+ Stars 领跑 Skill 集合仓库。';
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
