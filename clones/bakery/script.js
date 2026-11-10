/* Lantern Row Bakehouse: design study clone. Plain JS, no dependencies. */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Header: shadow once scrolled, mobile nav toggle */
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var onScroll = function () {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 4);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (toggle && header) {
    toggle.addEventListener('click', function () {
      var open = !header.classList.contains('nav-open');
      header.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    document.querySelectorAll('.nav__list a').forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  /* Rails: arrow buttons scroll by one card (plus gap) */
  document.querySelectorAll('.rail-wrap').forEach(function (wrap) {
    var rail = wrap.querySelector('[data-rail]');
    if (!rail) return;
    var buttons = wrap.querySelectorAll('.arrow[data-dir]');
    var step = function (dir) {
      var card = rail.firstElementChild;
      var gap = parseFloat(getComputedStyle(rail).columnGap) || 40;
      var amount = card ? card.getBoundingClientRect().width + gap : rail.clientWidth * 0.8;
      rail.scrollBy({ left: dir * amount, behavior: reduceMotion ? 'auto' : 'smooth' });
    };
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        step(parseInt(btn.getAttribute('data-dir'), 10));
      });
    });
    var update = function () {
      var max = rail.scrollWidth - rail.clientWidth - 2;
      if (buttons[0]) buttons[0].disabled = rail.scrollLeft <= 2;
      if (buttons[1]) buttons[1].disabled = rail.scrollLeft >= max;
    };
    rail.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  });


  /* Reviews: cycle the three sample quotes with the existing arrow buttons */
  var reviewItems = document.querySelectorAll('[data-review]');
  var reviewBtns = document.querySelectorAll('[data-review-dir]');
  var reviewIndex = 0;
  if (reviewItems.length > 1) {
    var showReview = function (i) {
      reviewIndex = (i + reviewItems.length) % reviewItems.length;
      reviewItems.forEach(function (el, n) { el.hidden = n !== reviewIndex; });
    };
    reviewBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        showReview(reviewIndex + parseInt(btn.getAttribute('data-review-dir'), 10));
      });
    });
  }

  /* Scroll reveal */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* Newsletter: stop the placeholder form from navigating */
  var form = document.querySelector('.newsletter');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      if (btn) btn.textContent = 'Thanks, you are on the list';
      form.reset();
    });
  }
})();
