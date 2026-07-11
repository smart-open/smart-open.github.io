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
            
            // Only scroll the TOC link into view on desktop (sticky sidebar)
            // On mobile the sidebar is static and scrollIntoView moves the whole page
            if (isDesktop()) {
              link.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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