(function() {
  const searchInput = document.getElementById('searchInput');
  const mainContent = document.getElementById('mainContent');
  const emptyState = document.getElementById('emptyState');

  if (!searchInput || !mainContent) return;

  let debounceTimer;

  function debounce(fn, delay) {
    return function(...args) {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  function handleSearch() {
    const query = searchInput.value;
    if (window.renderApp) {
      window.renderApp(query);
    }
  }

  const debouncedSearch = debounce(handleSearch, 300);

  searchInput.addEventListener('input', debouncedSearch);

  // Handle Escape key to clear search
  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      searchInput.value = '';
      handleSearch();
      searchInput.blur();
    }
  });

  // Bind sidebar reset button
  const sidebarReset = document.getElementById('sidebarReset');
  if (sidebarReset && window.handleResetFilter) {
    sidebarReset.addEventListener('click', function() {
      window.handleResetFilter();
    });
  }

  // Initial render
  if (window.renderApp) {
    window.renderApp('');
  }

  // Initialize sidebar
  if (window.renderSidebar) {
    window.renderSidebar();
  }
})();
