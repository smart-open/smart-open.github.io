/* ========================================
   Hero Canvas Particle Animation
   ======================================== */

(function() {
  'use strict';

  const canvas = document.getElementById('heroParticles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const heroSection = document.getElementById('hero');
  if (!heroSection) return;

  const CONFIG = {
    particleCountDesktop: 80,
    particleCountMobile: 25,
    minRadius: 1,
    maxRadius: 3,
    connectionDistance: 130,
    particleColor: 'rgba(0, 240, 255, 0.3)',
    mouseInfluenceRadius: 180,
    speed: 0.3
  };

  let particles = [];
  let mouse = { x: null, y: null };
  let animationId = null;
  let isMobile = window.innerWidth <= 768;

  class Particle {
    constructor(width, height) {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * CONFIG.speed;
      this.vy = (Math.random() - 0.5) * CONFIG.speed;
      this.baseRadius = CONFIG.minRadius + Math.random() * (CONFIG.maxRadius - CONFIG.minRadius);
      this.radius = this.baseRadius;
    }

    update(width, height) {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      if (mouse.x !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONFIG.mouseInfluenceRadius) {
          const force = (CONFIG.mouseInfluenceRadius - dist) / CONFIG.mouseInfluenceRadius;
          this.radius = this.baseRadius + force * 2;
          this.x += dx * 0.005 * force;
          this.y += dy * 0.005 * force;
        } else {
          this.radius = this.baseRadius;
        }
      } else {
        this.radius = this.baseRadius;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, Math.max(0.1, this.radius), 0, Math.PI * 2);
      ctx.fillStyle = CONFIG.particleColor;
      ctx.fill();
    }
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONFIG.connectionDistance) {
          const opacity = 1 - dist / CONFIG.connectionDistance;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = 'rgba(0, 240, 255, ' + (opacity * 0.15) + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      if (mouse.x !== null) {
        const dx = particles[i].x - mouse.x;
        const dy = particles[i].y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONFIG.mouseInfluenceRadius) {
          const opacity = 1 - dist / CONFIG.mouseInfluenceRadius;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = 'rgba(0, 240, 255, ' + (opacity * 0.3) + ')';
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
  }

  function initParticles() {
    isMobile = window.innerWidth <= 768;
    const count = isMobile ? CONFIG.particleCountMobile : CONFIG.particleCountDesktop;
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push(new Particle(canvas.width, canvas.height));
    }
  }

  function resize() {
    const rect = heroSection.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    initParticles();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(function(p) { p.update(canvas.width, canvas.height); });
    drawConnections();
    particles.forEach(function(p) { p.draw(); });
    animationId = requestAnimationFrame(animate);
  }

  /* Events */
  heroSection.addEventListener('mousemove', function(e) {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  heroSection.addEventListener('mouseleave', function() {
    mouse.x = null;
    mouse.y = null;
  });

  heroSection.addEventListener('touchmove', function(e) {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.touches[0].clientX - rect.left;
    mouse.y = e.touches[0].clientY - rect.top;
  }, { passive: true });

  heroSection.addEventListener('touchend', function() {
    mouse.x = null;
    mouse.y = null;
  });

  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 200);
  });

  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    } else {
      if (!animationId && !window.prefersReducedMotion) {
        animate();
      }
    }
  });

  /* Init */
  resize();

  if (window.prefersReducedMotion) {
    particles.forEach(function(p) { p.draw(); });
    drawConnections();
  } else {
    animate();
  }

})();
