(function () {
  'use strict';

  // Dismiss announcement bar (remembered for this viewer only).
  var announce = document.querySelector('.announce');
  var closeBtn = document.querySelector('.announce-close');
  if (closeBtn && announce) {
    closeBtn.addEventListener('click', function () { announce.classList.add('is-hidden'); });
  }

  // Header shadow after scroll.
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle.
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('mainnav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
      nav.classList.toggle('is-open', !open);
    });
  }

  // Scroll reveals.
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && items.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Newsletter (placeholder: no network call).
  var form = document.querySelector('.newsletter');
  if (form) {
    form.addEventListener('submit', function () {
      var input = form.querySelector('input');
      if (input && input.value) {
        input.value = '';
        input.placeholder = 'Thank you (placeholder)';
      }
    });
  }
})();
