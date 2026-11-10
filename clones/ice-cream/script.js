/* Fernhollow Gelato Co. - placeholder design study. Vanilla JS, no dependencies. */
(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');

  var header = document.getElementById('siteHeader');
  var announce = document.querySelector('.announcement');

  /* Header goes solid once the page scrolls past the announcement bar */
  function onScroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    var threshold = announce ? announce.offsetHeight : 34;
    if (header) header.classList.toggle('is-solid', y > threshold);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mobile menu */
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('mobileMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = !menu.classList.contains('is-open');
      menu.classList.toggle('is-open', open);
      menu.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        menu.classList.remove('is-open');
        menu.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* Hero slideshow */
  var slides = Array.prototype.slice.call(document.querySelectorAll('.hero .slide'));
  var dots = Array.prototype.slice.call(document.querySelectorAll('.hero-dots button'));
  var current = 0;
  var timer = null;

  function go(i) {
    if (!slides.length) return;
    current = (i + slides.length) % slides.length;
    slides.forEach(function (s, idx) { s.classList.toggle('is-active', idx === current); });
    dots.forEach(function (d, idx) { d.classList.toggle('is-active', idx === current); });
  }
  function start() {
    stop();
    timer = window.setInterval(function () { go(current + 1); }, 5200);
  }
  function stop() { if (timer) { window.clearInterval(timer); timer = null; } }

  dots.forEach(function (d) {
    d.addEventListener('click', function () {
      go(parseInt(d.getAttribute('data-go'), 10));
      start();
    });
  });
  var hero = document.querySelector('.hero');
  if (hero) {
    hero.addEventListener('mouseenter', stop);
    hero.addEventListener('mouseleave', start);
  }
  if (slides.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) start();

  /* Product carousel arrows (other rows are native scroll-snap) */
  var arrows = Array.prototype.slice.call(document.querySelectorAll('.arrow[data-target]'));
  arrows.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var row = document.getElementById(btn.getAttribute('data-target'));
      if (!row) return;
      var dir = parseInt(btn.getAttribute('data-dir'), 10);
      var card = row.firstElementChild;
      var step = card ? card.getBoundingClientRect().width + 14 : 300;
      row.scrollBy({ left: dir * step, behavior: 'smooth' });
    });
  });

  /* Scroll reveal */
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }
})();
