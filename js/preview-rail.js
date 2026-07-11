(function() {
  'use strict';

  const rail = document.getElementById('previewRail');
  const railStops = document.getElementById('railStops');
  const railFill = document.getElementById('railFill');
  const railTrack = document.querySelector('.rail-track');
  if (!rail || !railStops || !railFill) return;

  // Collect sections with nav targets
  const sections = [];
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#') && href.length > 1) {
      const el = document.querySelector(href);
      if (el) {
        sections.push({
          id: href.slice(1),
          label: link.textContent.trim(),
          element: el
        });
      }
    }
  });

  if (sections.length === 0) return;

  // Dynamically read track height (50vh in CSS)
  function getTrackHeight() {
    return railTrack ? railTrack.offsetHeight : window.innerHeight * 0.5;
  }

  const stopCount = sections.length;
  let stopEls = null;

  function buildStops() {
    // Clear existing stops
    railStops.innerHTML = '';
    const trackHeight = getTrackHeight();

    sections.forEach((sec, i) => {
      const pos = stopCount === 1 ? 0.5 : i / (stopCount - 1);
      const topPx = pos * trackHeight;

      const stop = document.createElement('div');
      stop.className = 'rail-stop';
      stop.style.top = topPx + 'px';
      stop.setAttribute('data-target', sec.id);
      stop.setAttribute('role', 'button');
      stop.setAttribute('aria-label', '跳转到 ' + sec.label);
      stop.setAttribute('tabindex', '0');

      const label = document.createElement('span');
      label.className = 'rail-stop-label';
      label.textContent = sec.label;
      stop.appendChild(label);

      // Click to scroll
      stop.addEventListener('click', () => {
        sec.element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });

      // Keyboard support
      stop.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          sec.element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });

      railStops.appendChild(stop);
    });

    stopEls = railStops.querySelectorAll('.rail-stop');
  }

  buildStops();

  // Rebuild stops on resize (track height changes with viewport)
  let resizeTimer = null;
  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      buildStops();
      updateRail();
    }, 200);
  }

  // Track scroll progress and active section
  let ticking = false;

  function updateRail() {
    ticking = false;

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (docHeight <= 0) return;

    const progress = Math.min(scrollTop / docHeight, 1);
    railFill.style.height = (progress * 100) + '%';

    // Determine active section
    const viewportCenter = scrollTop + window.innerHeight / 2;
    let activeIndex = 0;
    let minDistance = Infinity;

    sections.forEach((sec, i) => {
      const rect = sec.element.getBoundingClientRect();
      const absTop = rect.top + scrollTop;
      const absBottom = rect.bottom + scrollTop;
      const sectionCenter = (absTop + absBottom) / 2;
      const distance = Math.abs(viewportCenter - sectionCenter);

      if (distance < minDistance) {
        minDistance = distance;
        activeIndex = i;
      }
    });

    if (stopEls) {
      stopEls.forEach((el, i) => {
        if (i === activeIndex) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });
    }
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(updateRail);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize);

  // Initial update
  updateRail();

})();
