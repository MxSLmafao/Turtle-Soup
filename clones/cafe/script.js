/* Tidewater Coffee Roasters - placeholder design study. Plain JS, no dependencies. */
(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.add('js');

  var reduceMotion = false;
  try { reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { /* ignore */ }

  /* Sticky header: add a hairline and shadow once the page scrolls */
  var header = document.getElementById('siteHeader');
  function onScroll() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mobile / full menu toggle */
  var menuBtn = document.getElementById('menuBtn');
  var menu = document.getElementById('mobileMenu');
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', function () {
      var open = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!open));
      menu.hidden = open;
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menuBtn.setAttribute('aria-expanded', 'false');
        menu.hidden = true;
      });
    });
  }

  /* Feature carousel: image + text panel, dot navigation, gentle autoplay */
  var carousel = document.querySelector('[data-carousel]');
  if (carousel) {
    var section = carousel.closest('.feature-carousel');
    var slides = Array.prototype.slice.call(carousel.querySelectorAll('.slide'));
    var texts = Array.prototype.slice.call(section.querySelectorAll('.slide-text'));
    var dots = Array.prototype.slice.call(section.querySelectorAll('.dot'));
    var current = 0;
    var timer = null;

    function show(i) {
      current = (i + slides.length) % slides.length;
      slides.forEach(function (s, n) { s.classList.toggle('is-active', n === current); });
      texts.forEach(function (t, n) { t.classList.toggle('is-active', n === current); });
      dots.forEach(function (d, n) {
        d.classList.toggle('is-active', n === current);
        d.setAttribute('aria-selected', String(n === current));
      });
    }
    function start() {
      if (reduceMotion || timer) return;
      timer = setInterval(function () { show(current + 1); }, 6000);
    }
    function stop() { clearInterval(timer); timer = null; }

    dots.forEach(function (d, n) {
      d.addEventListener('click', function () { show(n); stop(); start(); });
    });
    section.addEventListener('mouseenter', stop);
    section.addEventListener('mouseleave', start);
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stop(); else start();
    });
    show(0);
    start();
  }

  /* Scroll reveal for cards and product tiles */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* Placeholder newsletter forms: no network call, just a friendly confirmation */
  document.querySelectorAll('form.signup').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input');
      if (input && input.value) {
        input.value = '';
        input.placeholder = 'Thanks, you are on the list (sample)';
      }
    });
  });
})();
