/* Hearthline Kitchen clone: small, dependency-free behaviour layer. */
(function () {
  'use strict';

  var doc = document;

  /* Announcement dismiss */
  var announce = doc.querySelector('.announce');
  var closeBtn = doc.querySelector('.announce__close');
  if (announce && closeBtn) {
    closeBtn.addEventListener('click', function () {
      announce.classList.add('is-hidden');
    });
  }

  /* Header: solid bar once the page scrolls past the hero */
  var header = doc.querySelector('.site-header');
  var onScroll = function () {
    if (!header) return;
    var past = window.scrollY > 500;
    header.classList.toggle('is-scrolled', past);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mobile menu */
  var toggle = doc.querySelector('.menu-toggle');
  if (header && toggle) {
    toggle.addEventListener('click', function () {
      var open = !header.classList.contains('is-open');
      header.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    doc.querySelectorAll('.primary-nav a').forEach(function (a) {
      a.addEventListener('click', function () {
        header.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  /* Testimonial carousel: auto-advance, dots, swipe */
  var carousel = doc.querySelector('[data-carousel]');
  if (carousel) {
    var slides = Array.prototype.slice.call(carousel.querySelectorAll('.testimonial'));
    var dots = Array.prototype.slice.call(carousel.querySelectorAll('.carousel__dots button'));
    var index = 0;
    var timer = null;
    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var show = function (i) {
      index = (i + slides.length) % slides.length;
      slides.forEach(function (s, n) { s.classList.toggle('is-active', n === index); });
      dots.forEach(function (d, n) {
        d.classList.toggle('is-active', n === index);
        d.setAttribute('aria-selected', String(n === index));
      });
    };
    var start = function () {
      if (reduced) return;
      stop();
      timer = window.setInterval(function () { show(index + 1); }, 6000);
    };
    var stop = function () { if (timer) window.clearInterval(timer); timer = null; };

    dots.forEach(function (d, n) {
      d.addEventListener('click', function () { show(n); start(); });
    });

    carousel.addEventListener('mouseenter', stop);
    carousel.addEventListener('mouseleave', start);

    var startX = null;
    carousel.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
    carousel.addEventListener('touchend', function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) { show(index + (dx < 0 ? 1 : -1)); start(); }
      startX = null;
    });

    show(0);
    start();
  }

  /* Newsletter (placeholder: no email is sent) */
  var form = doc.querySelector('[data-newsletter]');
  var note = doc.querySelector('[data-newsletter-note]');
  if (form && note) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { note.textContent = 'Please enter a valid email address.'; return; }
      note.textContent = 'Thanks. This demo form does not send email.';
      form.reset();
    });
  }

  /* Scroll reveal */
  var revealTargets = doc.querySelectorAll('.products__grid .product, .testimonials__inner, .banner__copy, .site-footer__inner');
  revealTargets.forEach(function (el) { el.classList.add('reveal'); });
  if ('IntersectionObserver' in window && revealTargets.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
