// Lantern Lane Hawker Co. - design study clone (placeholder behaviour only)
(function () {
  'use strict';

  // Mobile menu open/close
  var toggle = document.querySelector('.menu-toggle');
  var mobile = document.querySelector('.mobile-menu');
  var closeBtn = mobile && mobile.querySelector('.close');

  function setMenu(open) {
    if (!mobile) return;
    mobile.classList.toggle('open', open);
    mobile.setAttribute('aria-hidden', open ? 'false' : 'true');
    if (toggle) toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (toggle) toggle.addEventListener('click', function () { setMenu(true); });
  if (closeBtn) closeBtn.addEventListener('click', function () { setMenu(false); });
  if (mobile) mobile.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') setMenu(false);
  });

  // Dropdown toggle for touch / keyboard
  var ddBtn = document.querySelector('.has-dropdown > button');
  if (ddBtn) {
    ddBtn.addEventListener('click', function () {
      var open = ddBtn.getAttribute('aria-expanded') === 'true';
      ddBtn.setAttribute('aria-expanded', open ? 'false' : 'true');
    });
  }

  // Hero slideshow
  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  var dots = Array.prototype.slice.call(document.querySelectorAll('.hero-dots .dot'));
  var current = 0;

  function show(i) {
    if (!slides.length) return;
    current = (i + slides.length) % slides.length;
    slides.forEach(function (s, idx) { s.classList.toggle('is-active', idx === current); });
    dots.forEach(function (d, idx) { d.classList.toggle('is-active', idx === current); });
  }
  dots.forEach(function (d, idx) { d.addEventListener('click', function () { show(idx); reset(); }); });

  var timer = null;
  function reset() {
    if (timer) clearInterval(timer);
    if (slides.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      timer = setInterval(function () { show(current + 1); }, 6000);
    }
  }
  reset();

  // Scroll reveal for .animation-element
  var items = Array.prototype.slice.call(document.querySelectorAll('.animation-element'));
  function check() {
    var vh = window.innerHeight;
    items.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.bottom >= 0 && r.top <= vh) el.classList.add('in-view');
    });
  }
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in-view'); io.unobserve(en.target); }
      });
    }, { threshold: 0.01 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    window.addEventListener('scroll', check, { passive: true });
    check();
  }

  // Smooth scroll for the in-page scroll cue
  var cue = document.querySelector('.scroll-cue');
  if (cue) cue.addEventListener('click', function () {
    var target = document.getElementById('content');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
})();

// Newsletter placeholder: no backend, just stop the page from reloading.
(function () {
  var form = document.querySelector('.signup-form');
  if (form) form.addEventListener('submit', function (e) { e.preventDefault(); });
})();
