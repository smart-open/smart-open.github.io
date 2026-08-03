/* Article List - Infinite Scroll & Search */
(function() {
  'use strict';

  var BATCH_SIZE = 21;

  var grid = document.getElementById('articlesGrid');
  var searchInput = document.getElementById('searchInput');
  var resultCount = document.getElementById('searchResultCount');
  var emptyState = document.getElementById('articlesEmpty');
  var loader = document.getElementById('articlesLoader');
  var sentinel = document.getElementById('loadSentinel');
  var endHint = document.getElementById('articlesEnd');

  if (!grid || typeof ARTICLES_DATA === 'undefined') return;

  var state = {
    allArticles: [],
    filtered: [],
    displayCount: 0,
    currentQuery: '',
    isLoading: false,
    chunkCount: 1,
    hasMoreChunks: true,
    allChunksLoaded: false
  };

  function sortByDateDesc(arr) {
    return arr.slice().sort(function(a, b) {
      return new Date(b.date) - new Date(a.date);
    });
  }

  function mergeChunk(data) {
    if (!data || !Array.isArray(data)) return;
    state.allArticles = state.allArticles.concat(sortByDateDesc(data));
    state.allArticles.sort(function(a, b) {
      return new Date(b.date) - new Date(a.date);
    });
  }

  function loadNextChunk() {
    if (!state.hasMoreChunks || state.isLoading) return Promise.resolve(false);
    state.isLoading = true;
    showLoader();
    var nextIndex = state.chunkCount + 1;
    return new Promise(function(resolve) {
      var script = document.createElement('script');
      script.src = 'articles-data-' + nextIndex + '.js';
      script.onload = function() {
        var chunkData = window['ARTICLES_DATA_' + nextIndex];
        if (chunkData && Array.isArray(chunkData)) {
          mergeChunk(chunkData);
          state.chunkCount = nextIndex;
          state.filtered = state.currentQuery ? filterArticles(state.currentQuery) : state.allArticles;
        } else {
          state.hasMoreChunks = false;
          state.allChunksLoaded = true;
        }
        state.isLoading = false;
        hideLoader();
        resolve(true);
      };
      script.onerror = function() {
        state.hasMoreChunks = false;
        state.allChunksLoaded = true;
        state.isLoading = false;
        hideLoader();
        resolve(false);
      };
      document.head.appendChild(script);
    });
  }

  function loadAllChunks() {
    if (state.allChunksLoaded) return Promise.resolve();
    return loadNextChunk().then(function(loaded) {
      if (loaded && state.hasMoreChunks) return loadAllChunks();
    });
  }

  function filterArticles(query) {
    if (!query || !query.trim()) return state.allArticles;
    var q = query.trim().toLowerCase();
    var scored = [];
    for (var i = 0; i < state.allArticles.length; i++) {
      var a = state.allArticles[i];
      var titleHit = a.title.toLowerCase().indexOf(q) !== -1;
      var excerptHit = a.excerpt.toLowerCase().indexOf(q) !== -1;
      var tagsHit = a.tags.some(function(t) { return t.toLowerCase().indexOf(q) !== -1; });
      if (titleHit || excerptHit || tagsHit) {
        var score = (titleHit ? 3 : 0) + (tagsHit ? 2 : 0) + (excerptHit ? 1 : 0);
        scored.push({ a: a, s: score });
      }
    }
    scored.sort(function(x, y) { return y.s - x.s; });
    return scored.map(function(x) { return x.a; });
  }

  function escapeHtml(text) {
    var d = document.createElement('div');
    d.textContent = text;
    return d.innerHTML;
  }

  function escapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function highlight(text, query) {
    var escaped = escapeHtml(text);
    if (!query || !query.trim()) return escaped;
    return escaped.replace(new RegExp('(' + escapeRegExp(query.trim()) + ')', 'gi'), '<mark>$1</mark>');
  }

  function renderCard(article) {
    return '<a href="' + article.detailUrl + '" class="article-card">' +
      '<h3 class="article-card-title">' + highlight(article.title, state.currentQuery) + '</h3>' +
      '<p class="article-card-excerpt">' + highlight(article.excerpt, state.currentQuery) + '</p>' +
      '<div class="article-card-footer">' +
      '<span class="article-date">' + article.date + '</span>' +
      '<span class="article-read">阅读全文 &#8599;</span>' +
      '</div>' +
      '<div class="article-card-tags">' +
      article.tags.map(function(t) { return '<span class="article-tag">' + escapeHtml(t) + '</span>'; }).join('') +
      '</div></a>';
  }

  function renderBatch() {
    var end = Math.min(state.displayCount + BATCH_SIZE, state.filtered.length);
    if (state.displayCount >= end) return;
    var html = '';
    for (var i = state.displayCount; i < end; i++) {
      html += renderCard(state.filtered[i]);
    }
    grid.insertAdjacentHTML('beforeend', html);
    state.displayCount = end;
    updateUI();
  }

  function loadMore() {
    if (state.isLoading) return;
    if (state.displayCount >= state.filtered.length) {
      if (state.hasMoreChunks) {
        loadNextChunk().then(function() {
          if (state.displayCount < state.filtered.length) {
            renderBatch();
          } else if (state.hasMoreChunks) {
            loadMore();
          } else {
            showEnd();
          }
        });
      } else {
        showEnd();
      }
      return;
    }
    renderBatch();
  }

  function showLoader() { if (loader) loader.style.display = 'flex'; }
  function hideLoader() { if (loader) loader.style.display = 'none'; }
  function showEnd() { if (endHint) endHint.style.display = 'block'; }
  function hideEnd() { if (endHint) endHint.style.display = 'none'; }

  function updateUI() {
    if (state.filtered.length > 0) {
      emptyState.style.display = 'none';
      grid.style.display = '';
      if (state.displayCount >= state.filtered.length && !state.hasMoreChunks) {
        showEnd();
      } else {
        hideEnd();
      }
    } else {
      grid.innerHTML = '';
      grid.style.display = 'none';
      emptyState.style.display = 'block';
      hideEnd();
    }
    var count = state.currentQuery ? state.filtered.length : state.allArticles.length;
    resultCount.textContent = state.currentQuery ? '找到 ' + count + ' 篇文章' : '共 ' + count + ' 篇文章';
  }

  function resetAndRender() {
    state.displayCount = 0;
    grid.innerHTML = '';
    hideEnd();
    if (state.filtered.length > 0) {
      renderBatch();
    } else {
      updateUI();
    }
  }

  function handleSearch() {
    state.currentQuery = searchInput.value;
    if (state.currentQuery && state.hasMoreChunks) {
      showLoader();
      loadAllChunks().then(function() {
        state.filtered = filterArticles(state.currentQuery);
        resetAndRender();
      });
    } else {
      state.filtered = filterArticles(state.currentQuery);
      resetAndRender();
    }
  }

  var debounceTimer;
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

  if (sentinel && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      if (entries[0].isIntersecting) loadMore();
    }, { rootMargin: '300px' });
    observer.observe(sentinel);
  }

  function createRocketButton() {
    var btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.setAttribute('aria-label', '返回顶部');
    btn.setAttribute('title', '发射回顶部');
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent);"><g transform="rotate(-45 12 12)"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></g></svg>';
    document.body.appendChild(btn);
    var LAUNCH_MS = 850;
    var ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking && !btn.classList.contains('launching')) {
        requestAnimationFrame(function() {
          btn.classList.toggle('visible', window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
    btn.addEventListener('click', function() {
      if (btn.classList.contains('launching')) return;
      btn.classList.add('launching');
      btn.classList.remove('visible');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(function() { btn.classList.remove('launching'); }, LAUNCH_MS + 50);
    });
  }

  mergeChunk(ARTICLES_DATA);
  state.filtered = state.allArticles;
  createRocketButton();
  resetAndRender();
})();
