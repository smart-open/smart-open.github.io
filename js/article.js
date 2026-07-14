document.addEventListener('DOMContentLoaded', () => {
  generateToc();
  setupScrollHighlight();
  renderArticleNav();
  createRocketButton();
});

function renderArticleNav() {
  const nav = document.getElementById('articleNav');
  if (!nav) return;

  const data = window.ARTICLES_DATA;
  if (!data || !Array.isArray(data)) return;

  // Sort by date descending (newest first)
  const sorted = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Match current article by URL
  const currentPath = window.location.pathname;
  const currentIndex = sorted.findIndex(item => currentPath.includes(item.id));
  if (currentIndex === -1) return;

  const prev = sorted[currentIndex + 1]; // older article
  const next = sorted[currentIndex - 1]; // newer article

  let html = '';

  if (prev) {
    html += `<a href="./${prev.id}.html" class="article-nav-prev">
      <span class="article-nav-label">上一篇</span>
      <span class="article-nav-title">${prev.title}</span>
    </a>`;
  } else {
    html += `<div class="article-nav-prev" style="opacity:0.4;pointer-events:none;">
      <span class="article-nav-label">上一篇</span>
      <span class="article-nav-title">没有了</span>
    </div>`;
  }

  if (next) {
    html += `<a href="./${next.id}.html" class="article-nav-next">
      <span class="article-nav-label">下一篇</span>
      <span class="article-nav-title">${next.title}</span>
    </a>`;
  } else {
    html += `<div class="article-nav-next" style="opacity:0.4;pointer-events:none;text-align:right;align-items:flex-end;">
      <span class="article-nav-label">下一篇</span>
      <span class="article-nav-title">没有了</span>
    </div>`;
  }

  nav.innerHTML = html;
}

function generateToc() {
  const toc = document.getElementById('articleToc');
  if (!toc) return;

  const headings = document.querySelectorAll('article h2, article h3');
  if (headings.length === 0) return;

  const tocItems = [];
  headings.forEach(heading => {
    const id = heading.getAttribute('id');
    const text = heading.textContent;
    const level = heading.tagName === 'H2' ? 1 : 2;

    if (id && text) {
      tocItems.push({ id, text, level });
    }
  });

  tocItems.forEach(item => {
    const a = document.createElement('a');
    a.href = `#${item.id}`;
    a.textContent = item.text;
    if (item.level === 2) {
      a.style.paddingLeft = '1rem';
    }
    toc.appendChild(a);
  });
}

function setupScrollHighlight() {
  const headings = document.querySelectorAll('article h2, article h3');
  const tocLinks = document.querySelectorAll('.article-toc a');
  
  if (headings.length === 0 || tocLinks.length === 0) return;

  // Only auto-scroll TOC on desktop where sidebar is sticky
  const isDesktop = () => window.innerWidth > 1024;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const link = document.querySelector(`.article-toc a[href="#${id}"]`);
        
        if (link && entry.isIntersecting) {
            tocLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
          }
      });
    },
    {
      rootMargin: '-20% 0% -30% 0%',
      threshold: 0.1
    }
  );

  headings.forEach(heading => {
    observer.observe(heading);
  });
}

function createRocketButton() {
  const btn = document.createElement('button');
  btn.className = 'rocket-top-btn';
  btn.setAttribute('aria-label', '返回顶部');
  btn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2.5c0 0-7 4.5-7 11.5 0 2.5 1.5 4.5 3 5.5l1-4.5c0.5-2 1.5-3 3-3s2.5 1 3 3l1 4.5c1.5-1 3-3 3-5.5 0-7-7-11.5-7-11.5z"/>
      <path d="M12 7v3"/>
      <circle cx="12" cy="11" r="0.8" fill="currentColor" stroke="none"/>
      <path d="M8 22l4-3 4 3"/>
    </svg>
  `;
  document.body.appendChild(btn);

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 400) {
          btn.classList.add('visible');
        } else {
          btn.classList.remove('visible');
        }
        ticking = false;
      });
      ticking = true;
    }
  });
}