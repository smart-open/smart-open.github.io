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
      '本周最大黑马是 <strong>storytold/craft-anything</strong>：rea 团队新作「让 Agent 理解任意软件并动手复刻」，上线九天冲到 28.3k stars；' +
      '<strong>deepseek-ai/dsh-superagent-prototype</strong> 代表大模型厂商亲自下场做超级智能体，<strong>cloudflare/security-audit-skill</strong> 周增 21.5k 成涨星王。' +
      'Skills 生态：<strong>find-skills</strong> 以 4.3M 安装量断层领先，<strong>heygen-com/hyperframes</strong> 四席瓜分 Top10，<strong>janestreet/agent_skills</strong> 上线一周即上榜。';
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
