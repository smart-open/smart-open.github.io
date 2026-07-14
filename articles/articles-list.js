/* ========================================
   Article List - Pagination & Search
   ======================================== */

(function() {
  'use strict';

  var PAGE_SIZE = 20;
  var currentPage = 1;
  var currentQuery = '';
  var filteredArticles = [];

  var grid = document.getElementById('articlesGrid');
  var pagination = document.getElementById('articlesPagination');
  var searchInput = document.getElementById('searchInput');
  var resultCount = document.getElementById('searchResultCount');
  var emptyState = document.getElementById('articlesEmpty');

  if (!grid || typeof ARTICLES_DATA === 'undefined') return;

  var allArticles = ARTICLES_DATA.slice().sort(function(a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  function filterArticles(query) {
    if (!query || !query.trim()) return allArticles;
    var q = query.trim().toLowerCase();
    return allArticles.filter(function(article) {
      var titleMatch = article.title.toLowerCase().indexOf(q) !== -1;
      var excerptMatch = article.excerpt.toLowerCase().indexOf(q) !== -1;
      var tagsMatch = article.tags.some(function(tag) { return tag.toLowerCase().indexOf(q) !== -1; });
      return titleMatch || excerptMatch || tagsMatch;
    });
  }

  var debounceTimer;
  function handleSearch() {
    currentQuery = searchInput.value;
    currentPage = 1;
    render();
  }

  searchInput.addEventListener('input', function() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(handleSearch, 300);
  });

  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      searchInput.value = '';
      handleSearch();
      searchInput.blur();
    }
  });

  function renderCards(articles) {
    grid.innerHTML = articles.map(function(article) {
      return '<a href="' + article.detailUrl + '" class="article-card">' +
        '<h3 class="article-card-title">' + article.title + '</h3>' +
        '<p class="article-card-excerpt">' + article.excerpt + '</p>' +
        '<div class="article-card-footer">' +
        '<span class="article-date">' + article.date + '</span>' +
        '<span class="article-read">阅读全文 &#8599;</span>' +
        '</div>' +
        '<div class="article-card-tags">' +
        article.tags.map(function(tag) { return '<span class="article-tag">' + tag + '</span>'; }).join('') +
        '</div></a>';
    }).join('');
  }

  function renderPagination(totalPages) {
    if (totalPages <= 1) {
      pagination.innerHTML = '';
      return;
    }

    var html = '';
    html += '<button class="page-btn" data-page="' + (currentPage - 1) + '"' + (currentPage === 1 ? ' disabled' : '') + '>&#8592; 上一页</button>';

    var maxVisiblePages = 7;
    var startPage = Math.max(1, currentPage - 2);
    var endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      html += '<button class="page-btn" data-page="1">1</button>';
      if (startPage > 2) html += '<span class="page-ellipsis">...</span>';
    }

    for (var i = startPage; i <= endPage; i++) {
      html += '<button class="page-btn' + (i === currentPage ? ' active' : '') + '" data-page="' + i + '">' + i + '</button>';
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) html += '<span class="page-ellipsis">...</span>';
      html += '<button class="page-btn" data-page="' + totalPages + '">' + totalPages + '</button>';
    }

    html += '<button class="page-btn" data-page="' + (currentPage + 1) + '"' + (currentPage === totalPages ? ' disabled' : '') + '>下一页 &#8594;</button>';

    pagination.innerHTML = html;

    pagination.querySelectorAll('.page-btn[data-page]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var page = parseInt(btn.dataset.page);
        if (page >= 1 && page <= totalPages && page !== currentPage) {
          currentPage = page;
          render();
          window.scrollTo({ top: grid.offsetTop - 80, behavior: 'smooth' });
        }
      });
    });
  }

  function render() {
    filteredArticles = filterArticles(currentQuery);
    var totalPages = Math.ceil(filteredArticles.length / PAGE_SIZE);

    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    var start = (currentPage - 1) * PAGE_SIZE;
    var pageArticles = filteredArticles.slice(start, start + PAGE_SIZE);

    if (pageArticles.length > 0) {
      renderCards(pageArticles);
      emptyState.style.display = 'none';
      grid.style.display = 'grid';
    } else {
      grid.innerHTML = '';
      grid.style.display = 'none';
      emptyState.style.display = 'block';
    }

    renderPagination(totalPages);

    if (currentQuery) {
      resultCount.textContent = '找到 ' + filteredArticles.length + ' 篇文章';
    } else {
      resultCount.textContent = '共 ' + filteredArticles.length + ' 篇文章';
    }
  }

  filteredArticles = allArticles;
  render();

})();
