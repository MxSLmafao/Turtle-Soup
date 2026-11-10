(function () {
  'use strict';

  // Header: shadow once scrolled
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  var burger = document.querySelector('.burger');
  var menu = document.getElementById('mobile-menu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!open));
      burger.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
      menu.hidden = open;
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'Open menu');
        menu.hidden = true;
      });
    });
  }

  // Carousels: arrow buttons scroll their target track by one card
  document.querySelectorAll('[data-target]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var track = document.getElementById(btn.getAttribute('data-target'));
      if (!track) return;
      var dir = Number(btn.getAttribute('data-dir')) || 1;
      var card = track.firstElementChild;
      var step = card ? card.getBoundingClientRect().width + 24 : track.clientWidth * 0.8;
      if (track.id === 'review-track') {
        var items = Array.prototype.slice.call(track.children).filter(function (el) {
          return getComputedStyle(el).display !== 'none';
        });
        step = items[0] ? items[0].getBoundingClientRect().width + 24 : step;
      }
      track.scrollBy({ left: dir * step, behavior: 'smooth' });
    });
  });

  // Reveal on scroll
  var revealEls = document.querySelectorAll('.card, .band .container > h2, .chefs-intro, .stat, .pillars > div, .metric');
  revealEls.forEach(function (el) { el.classList.add('reveal'); });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-in'); });
  }
})();
