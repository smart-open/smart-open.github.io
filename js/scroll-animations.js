(function() {
  'use strict';

  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn('GSAP or ScrollTrigger not loaded');
    document.querySelectorAll('.reveal-up, .stagger-children').forEach(el => {
      el.classList.add('revealed');
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    const title = section.querySelector('.section-title');
    const body = section.querySelector('.about-body, .timeline, .projects-list, .services-list, .contact-body, .skills-container');

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

  const timeline = document.getElementById('timeline');
  const timelineFill = document.getElementById('timelineFill');

  if (timeline && timelineFill) {
    const items = timeline.querySelectorAll('.timeline-item');
    const nodes = timeline.querySelectorAll('.timeline-node');

    ScrollTrigger.create({
      trigger: timeline,
      start: 'top 70%',
      end: 'bottom 40%',
      scrub: 0.5,
      onUpdate: (self) => {
        timelineFill.style.height = (self.progress * 100) + '%';
      }
    });

    items.forEach((item, index) => {
      const node = nodes[index];
      if (!node) return;

      ScrollTrigger.create({
        trigger: item,
        start: 'top 65%',
        onEnter: () => node.classList.add('active'),
        onLeaveBack: () => node.classList.remove('active')
      });

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

  const projectGrids = document.querySelectorAll('.projects-grid');
  projectGrids.forEach(grid => {
    const cards = grid.querySelectorAll('.project-card');
    gsap.fromTo(cards,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: grid,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  const skillCategories = document.querySelectorAll('.skill-category');
  skillCategories.forEach(category => {
    const tags = category.querySelectorAll('.tag');
    gsap.fromTo(tags,
      { y: 12, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.06,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: category,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

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

  const aboutStats = document.querySelector('.about-stats');
  if (aboutStats) {
    const items = aboutStats.querySelectorAll('.stat-item');
    gsap.fromTo(items,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: aboutStats,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    /* CountUp animation for stat values */
    const statValues = aboutStats.querySelectorAll('.stat-value[data-count]');
    statValues.forEach(el => {
      const target = parseInt(el.getAttribute('data-count'), 10);
      const suffix = el.getAttribute('data-suffix') || '';
      const obj = { val: 0 };

      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            val: target,
            duration: 1.5,
            ease: 'power2.out',
            onUpdate: () => {
              el.textContent = Math.floor(obj.val) + suffix;
            }
          });
        }
      });
    });
  }

  /* Articles cards stagger + view more link */
  const articlesGrid = document.querySelector('.section-articles .articles-grid');
  if (articlesGrid) {
    const cards = articlesGrid.querySelectorAll('.article-card');
    gsap.fromTo(cards,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: articlesGrid,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    const moreLink = document.querySelector('.articles-more');
    if (moreLink) {
      gsap.fromTo(moreLink,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: moreLink,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  }

})();