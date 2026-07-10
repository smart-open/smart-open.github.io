/* ========================================
   Typewriter Effect
   ======================================== */

(function() {
  'use strict';

  const el = document.getElementById('typewriter');
  if (!el) return;

  const phrases = [
    '构建高性能系统',
    '开源工具作者',
    '全栈开发工程师'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let pauseEnd = 0;

  function getTypingSpeed() {
    // Slight irregularity for human feel
    return 80 + Math.random() * 60;
  }

  function tick() {
    if (window.prefersReducedMotion) {
      el.textContent = phrases[0];
      return;
    }

    const phrase = phrases[phraseIndex];
    const now = Date.now();

    if (pauseEnd > now) {
      setTimeout(tick, 50);
      return;
    }

    if (isDeleting) {
      charIndex--;
      el.textContent = phrase.slice(0, charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        pauseEnd = now + 300;
      }
      setTimeout(tick, 40);
    } else {
      charIndex++;
      el.textContent = phrase.slice(0, charIndex);
      if (charIndex === phrase.length) {
        isDeleting = true;
        pauseEnd = now + 2000;
      }
      setTimeout(tick, getTypingSpeed());
    }
  }

  // Start after a brief delay
  setTimeout(tick, 800);

})();
