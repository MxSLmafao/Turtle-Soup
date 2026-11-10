// Ember & Oak design study: header shadow on scroll, dropdowns, mobile menu.
(function () {
  'use strict';
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  var items = Array.prototype.slice.call(document.querySelectorAll('.has-sub'));
  var mq = window.matchMedia('(max-width: 767px)');

  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 4);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function setItem(item, open) {
    item.classList.toggle('open', open);
    var link = item.querySelector(':scope > .nav-link');
    if (link) link.setAttribute('aria-expanded', String(open));
  }

  function closeAll(except) {
    items.forEach(function (item) { if (item !== except) setItem(item, false); });
  }

  items.forEach(function (item) {
    var link = item.querySelector(':scope > .nav-link');
    link.addEventListener('click', function (e) {
      // Desktop: the link is a placeholder anchor, so keep the page still and toggle the panel.
      // Mobile: same behaviour, which keeps the stacked panel open.
      e.preventDefault();
      var open = !item.classList.contains('open');
      closeAll(item);
      setItem(item, open);
    });
  });

  document.addEventListener('click', function (e) {
    if (!header.contains(e.target)) closeAll(null);
  });

  function setMenu(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.style.overflow = open && mq.matches ? 'hidden' : '';
  }

  toggle.addEventListener('click', function () {
    setMenu(!nav.classList.contains('open'));
  });

  // Links in the menu close it on mobile (placeholder anchors).
  nav.querySelectorAll('.sub a, .nav-item > .nav-link:not([aria-haspopup])').forEach(function (a) {
    a.addEventListener('click', function () { if (mq.matches) setMenu(false); });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      setMenu(false);
      closeAll(null);
      toggle.focus();
    }
  });

  function resetForWidth() {
    if (!mq.matches) {
      setMenu(false);
    }
    closeAll(null);
  }
  if (mq.addEventListener) mq.addEventListener('change', resetForWidth);
  else if (mq.addListener) mq.addListener(resetForWidth);
})();
