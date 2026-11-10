// Driftwood placeholder: menu toggle, reveal-on-scroll, subtle header shrink.
(function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    items.forEach(function (el, i) { el.style.transitionDelay = (i % 4) * 90 + 'ms'; io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-in'); });
  }

  var form = document.querySelector('.nl-form');
  if (form) {
    form.addEventListener('submit', function () {
      var btn = form.querySelector('button');
      if (btn) { btn.textContent = 'Thanks'; }
    });
  }
})();
