/**
 * Custom JS – Ahmed Esam Portfolio
 * Clean version of Personal Template JS
 */

(function () {
  'use strict';

  /**
   * Helper: Select Element(s)
   */
  const select = (selector, all = false) => {
    selector = selector.trim();
    return all ? [...document.querySelectorAll(selector)] : document.querySelector(selector);
  };

  /**
   * Helper: Add Event Listener
   */
  const on = (event, selector, handler, all = false) => {
    let elements = select(selector, all);
    if (!elements) return;

    if (all) {
      elements.forEach((el) => el.addEventListener(event, handler));
    } else {
      elements.addEventListener(event, handler);
    }
  };

  /**
   * Mobile Navbar Toggle
   */
  on('click', '.mobile-nav-toggle', function () {
    const navbar = select('#navbar');
    navbar.classList.toggle('navbar-mobile');

    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
  });

  /**
   * Skills Progress Animation
   * Only when skills section enters view
   */
  const skillsContent = select('.skills-content');
  if (skillsContent) {
    new Waypoint({
      element: skillsContent,
      offset: '80%',
      handler: () => {
        const bars = select('.progress .progress-bar', true);
        bars.forEach((bar) => {
          const value = bar.getAttribute('aria-valuenow');
          bar.style.width = value + '%';
        });
      },
    });
  }

  /**
   * Testimonials Slider
   */
  if (select('.testimonials-slider')) {
    new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    });
  }

  /**
   * Portfolio Lightbox
   */
  if (select('.portfolio-lightbox', true).length) {
    GLightbox({
      selector: '.portfolio-lightbox',
    });
  }

  /**
   * Portfolio Details Lightbox (open HTML pages)
   */
  if (select('.portfolio-details-lightbox', true).length) {
    GLightbox({
      selector: '.portfolio-details-lightbox',
      width: '90%',
      height: '90vh',
    });
  }

  /**
   * Portfolio Details Slider (inside detail page)
   */
  if (select('.portfolio-details-slider')) {
    new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    });
  }

  /**
   * Counter Animation
   */
  new PureCounter();
})();
