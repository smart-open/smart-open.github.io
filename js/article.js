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
  btn.className = 'back-to-top';
  btn.setAttribute('aria-label', '返回顶部');
  btn.setAttribute('title', '发射回顶部');
  btn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent);">
      <g transform="rotate(-45 12 12)">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
      </g>
    </svg>
  `;
  document.body.appendChild(btn);

  const LAUNCH_MS = 850;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking && !btn.classList.contains('launching')) {
      requestAnimationFrame(() => {
        btn.classList.toggle('visible', window.scrollY > 400);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    if (btn.classList.contains('launching')) return;
    btn.classList.add('launching');
    btn.classList.remove('visible');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      btn.classList.remove('launching');
    }, LAUNCH_MS + 50);
  });
}