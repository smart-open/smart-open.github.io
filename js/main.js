(function() {
  'use strict';

  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  const nav = document.getElementById('nav');
  let lastScrollY = window.scrollY;

  function updateNavStyle() {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScrollY = currentScrollY;
  }

  if (nav) {
    window.addEventListener('scroll', updateNavStyle, { passive: true });
    updateNavStyle();
  }

  const heroVideo = document.getElementById('heroVideo');
  if (heroVideo) {
    heroVideo.addEventListener('loadeddata', () => {
      heroVideo.classList.add('loaded');
    });
    heroVideo.addEventListener('error', () => {
      heroVideo.style.display = 'none';
    });
  }

  const buildDateEl = document.getElementById('buildDate');
  if (buildDateEl) {
    const now = new Date();
    buildDateEl.textContent = now.toISOString().split('T')[0];
  }

  window.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Active nav link highlighting via IntersectionObserver */
  const navLinkMap = {};
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#') && href.length > 1) {
      const section = document.querySelector(href);
      if (section) {
        navLinkMap[href] = link;
      }
    }
  });

  const observedSections = Object.keys(navLinkMap).map(h => document.querySelector(h)).filter(Boolean);

  if (observedSections.length > 0) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const link = navLinkMap['#' + entry.target.id];
          if (!link) return;
          if (entry.isIntersecting) {
            Object.values(navLinkMap).forEach(l => l.classList.remove('active'));
            link.classList.add('active');
          }
        });
      },
      {
        rootMargin: '-40% 0% -50% 0%',
        threshold: 0
      }
    );
    observedSections.forEach(s => navObserver.observe(s));
  }

})();