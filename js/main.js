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

})();