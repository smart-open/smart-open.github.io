document.addEventListener('DOMContentLoaded', () => {
  generateToc();
  setupScrollHighlight();
});

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
        
        if (link) {
          if (entry.isIntersecting) {
            tocLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Auto-scroll TOC link into view on desktop (sticky sidebar)
            // Scroll only within the sidebar container, not the whole page
            if (isDesktop()) {
              const sidebarSection = document.querySelector('.sidebar-section');
              const toc = document.getElementById('articleToc');
              if (sidebarSection && toc) {
                const tocRect = toc.getBoundingClientRect();
                const linkRect = link.getBoundingClientRect();
                const sidebarRect = sidebarSection.getBoundingClientRect();
                const relativeTop = linkRect.top - sidebarRect.top;
                if (relativeTop < 0 || relativeTop > sidebarRect.height - linkRect.height) {
                  toc.scrollTop = link.offsetTop - toc.clientHeight / 2 + link.clientHeight / 2;
                }
              }
            }
          }
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