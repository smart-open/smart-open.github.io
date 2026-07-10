/* ========================================
   Main Initialization
   ======================================== */

(function() {
  'use strict';

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    // Close nav on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // Build date
  const buildDateEl = document.getElementById('buildDate');
  if (buildDateEl) {
    const now = new Date();
    buildDateEl.textContent = now.toISOString().split('T')[0];
  }

  // Reduced motion check
  window.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

})();
