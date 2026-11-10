/* Hollis & Crane Butchery - placeholder behaviour (no frameworks) */
(function () {
  'use strict';

  // ---- Hero slider -------------------------------------------------------
  var slider = document.getElementById('slider');
  if (slider) {
    var slides = Array.prototype.slice.call(slider.querySelectorAll('.slide'));
    var dotsWrap = document.getElementById('dots');
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
    var index = 0;
    var timer = null;
    var DELAY = 6000;

    slides.forEach(function (_, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', 'Show slide ' + (i + 1));
      b.addEventListener('click', function () { go(i); restart(); });
      dotsWrap.appendChild(b);
    });
    var dots = Array.prototype.slice.call(dotsWrap.querySelectorAll('button'));

    function go(i) {
      var n = slides.length;
      index = (i + n) % n;
      slides.forEach(function (s, k) {
        s.classList.toggle('is-active', k === index);
        s.classList.toggle('is-prev', k < index);
        s.setAttribute('aria-hidden', k === index ? 'false' : 'true');
      });
      dots.forEach(function (d, k) { d.classList.toggle('on', k === index); });
    }
    function next() { go(index + 1); }
    function prev() { go(index - 1); }
    function start() { stop(); timer = setInterval(next, DELAY); }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    function restart() { if (!reduceMotion) start(); }

    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    prevBtn.addEventListener('click', function () { prev(); restart(); });
    nextBtn.addEventListener('click', function () { next(); restart(); });
    slider.addEventListener('mouseenter', stop);
    slider.addEventListener('mouseleave', restart);
    slider.addEventListener('focusin', stop);
    slider.addEventListener('focusout', restart);

    // Touch swipe
    var startX = null;
    slider.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
    slider.addEventListener('touchend', function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) { dx < 0 ? next() : prev(); restart(); }
      startX = null;
    });

    go(0);
    restart();
  }

  // ---- Scroll reveal -----------------------------------------------------
  var reveals = document.querySelectorAll('.reveal');
  var productCards = document.querySelectorAll('.product');
  productCards.forEach(function (p, i) { p.classList.add('reveal'); p.style.setProperty('--i', i); });
  reveals = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // ---- Sticky header shadow ---------------------------------------------
  var header = document.getElementById('siteHeader');
  function onScroll() {
    if (!header) return;
    header.classList.toggle('is-stuck', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---- Mobile menu -------------------------------------------------------
  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
      nav.classList.toggle('open', !open);
    });
  }

  // ---- Add to cart -------------------------------------------------------
  var countEl = document.getElementById('cartCount');
  var toastEl = document.getElementById('toast');
  var count = 0;
  var toastTimer = null;

  function showToast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('show'); }, 2000);
  }

  document.querySelectorAll('[data-add]').forEach(function (btn) {
    var original = btn.textContent;
    btn.addEventListener('click', function () {
      var card = btn.closest('.product');
      var qty = 1;
      var units = card && card.querySelector('select');
      if (units) qty = parseInt(units.value, 10) || 1;
      count += qty;
      if (countEl) {
        countEl.textContent = count;
        countEl.classList.add('bump');
        setTimeout(function () { countEl.classList.remove('bump'); }, 280);
      }
      btn.textContent = 'Added';
      btn.classList.add('added');
      showToast('Added ' + qty + ' to your cart (sample)');
      setTimeout(function () {
        btn.textContent = original;
        btn.classList.remove('added');
      }, 1400);
    });
  });

  // Close mobile nav when a link is picked
  if (nav) {
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        if (toggle && window.innerWidth <= 768) {
          toggle.setAttribute('aria-expanded', 'false');
          nav.classList.remove('open');
        }
      });
    });
  }
})();
