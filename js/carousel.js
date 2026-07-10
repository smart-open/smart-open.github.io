/* ========================================
   Hero Carousel
   ======================================== */

(function() {
  'use strict';

  const carousel = document.getElementById('heroCarousel');
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.carousel-slide');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const progressBar = document.getElementById('carouselProgress');

  let current = 0;
  const total = slides.length;
  const intervalMs = 8000;
  let autoTimer = null;
  let isHovering = false;

  function updateSlide(index, direction) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active', 'prev', 'scanning');
      if (i === index) {
        slide.classList.add('active', 'scanning');
        setTimeout(() => slide.classList.remove('scanning'), 600);
      } else if (direction === 'next' && i < index) {
        slide.classList.add('prev');
      } else if (direction === 'prev' && i > index) {
        slide.classList.add('prev');
      }
    });

    if (progressBar) {
      progressBar.style.width = ((index + 1) / total * 100) + '%';
    }
  }

  function goTo(index, direction) {
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
    current = index;
    updateSlide(current, direction || 'next');
    resetAuto();
  }

  function next() {
    goTo(current + 1, 'next');
  }

  function prev() {
    goTo(current - 1, 'prev');
  }

  function startAuto() {
    if (autoTimer) clearInterval(autoTimer);
    autoTimer = setInterval(() => {
      if (!isHovering) next();
    }, intervalMs);
  }

  function resetAuto() {
    if (autoTimer) clearInterval(autoTimer);
    startAuto();
  }

  // Event listeners
  if (prevBtn) prevBtn.addEventListener('click', prev);
  if (nextBtn) nextBtn.addEventListener('click', next);

  carousel.addEventListener('mouseenter', () => { isHovering = true; });
  carousel.addEventListener('mouseleave', () => { isHovering = false; });

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });

  // Touch swipe
  let touchStartX = 0;
  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  carousel.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
  }, { passive: true });

  // Init
  updateSlide(current, 'next');
  startAuto();

})();
