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
      'Agent 逆向工程工具 <strong>rea</strong> 连续三周霸榜、累计突破 32 万 stars，并带动 <strong>ghidra</strong> 重新上榜；' +
      '<strong>anthropics/claude-plugins-official</strong> 与 <strong>cursor/plugins</strong> 同期冲榜，官方插件入口密集开张。' +
      '<strong>mattpocock/skills</strong> 在 skills.sh Top10 独占六席，<strong>obra/superpowers</strong> 以 301.8K+ Stars 成为首个破 30 万的 Skill 集合仓库。';
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
