/* ========================================
   Scroll Animations (GSAP + ScrollTrigger)
   ======================================== */

(function() {
  'use strict';

  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn('GSAP or ScrollTrigger not loaded');
    // Fallback: reveal all immediately
    document.querySelectorAll('.reveal-up, .stagger-children').forEach(el => {
      el.classList.add('revealed');
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // ----------------------------------------
  // Section title reveals
  // ----------------------------------------
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    const title = section.querySelector('.section-title');
    const body = section.querySelector('.about-body, .timeline, .projects-list, .services-list, .contact-body');

    if (title) {
      gsap.fromTo(title,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    if (body) {
      gsap.fromTo(body,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: body,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  });

  // ----------------------------------------
  // Timeline: line draw + node activation
  // ----------------------------------------
  const timeline = document.getElementById('timeline');
  const timelineFill = document.getElementById('timelineFill');

  if (timeline && timelineFill) {
    const items = timeline.querySelectorAll('.timeline-item');
    const nodes = timeline.querySelectorAll('.timeline-node');

    // Line draw animation tied to scroll
    ScrollTrigger.create({
      trigger: timeline,
      start: 'top 70%',
      end: 'bottom 40%',
      scrub: 0.5,
      onUpdate: (self) => {
        timelineFill.style.height = (self.progress * 100) + '%';
      }
    });

    // Node activation
    items.forEach((item, index) => {
      const node = nodes[index];
      if (!node) return;

      ScrollTrigger.create({
        trigger: item,
        start: 'top 65%',
        onEnter: () => node.classList.add('active'),
        onLeaveBack: () => node.classList.remove('active')
      });

      // Content reveal
      const content = item.querySelector('.timeline-content');
      if (content) {
        gsap.fromTo(content,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 75%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    });
  }

  // ----------------------------------------
  // Project items stagger
  // ----------------------------------------
  const projectList = document.querySelector('.projects-list');
  if (projectList) {
    const items = projectList.querySelectorAll('.project-item');
    gsap.fromTo(items,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: projectList,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // ----------------------------------------
  // Service items stagger
  // ----------------------------------------
  const serviceList = document.querySelector('.services-list');
  if (serviceList) {
    const items = serviceList.querySelectorAll('.service-item');
    gsap.fromTo(items,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: serviceList,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // ----------------------------------------
  // Contact links stagger
  // ----------------------------------------
  const contactLinks = document.querySelector('.contact-links');
  if (contactLinks) {
    const items = contactLinks.querySelectorAll('.contact-link');
    gsap.fromTo(items,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contactLinks,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // ----------------------------------------
  // Skill tags stagger
  // ----------------------------------------
  const skillTags = document.querySelector('.skill-tags');
  if (skillTags) {
    const tags = skillTags.querySelectorAll('.tag');
    gsap.fromTo(tags,
      { y: 12, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.06,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: skillTags,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

})();
