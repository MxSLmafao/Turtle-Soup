(function () {
  'use strict';

  // Mobile menu toggle
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      if (open) hidePromo();
    });
  }

  // Promo popup: dismiss on close button or backdrop click
  var promo = document.getElementById('promo');
  function hidePromo() {
    if (!promo) return;
    promo.classList.remove('active');
    document.body.classList.remove('fix');
  }
  if (promo) {
    document.body.classList.add('fix');
    document.body.style.overflow = 'hidden';
    var closeBtn = promo.querySelector('.pop-close');
    if (closeBtn) closeBtn.addEventListener('click', function () {
      hidePromo();
      document.body.style.overflow = '';
    });
    promo.addEventListener('click', function (e) {
      if (e.target === promo) {
        hidePromo();
        document.body.style.overflow = '';
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && promo.classList.contains('active')) {
        hidePromo();
        document.body.style.overflow = '';
      }
    });
  }

  // Light reveal for footer blocks, only when supported
  var blocks = document.querySelectorAll('.footer-main .contact-block, .footer-main .social-col, .footer-main .group-links');
  if ('IntersectionObserver' in window && blocks.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.15 });
    blocks.forEach(function (el, i) {
      el.classList.add('reveal');
      el.style.transitionDelay = (i * 80) + 'ms';
      io.observe(el);
    });
  }
})();
