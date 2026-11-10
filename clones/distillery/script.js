/* Copper Heron Distilling Co. (placeholder). Vanilla JS, no dependencies. */
(function () {
  'use strict';

  var store = {
    get: function (k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* private mode */ } }
  };
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Age gate ---------- */
  var gate = document.getElementById('ageGate');
  var news = document.getElementById('newsPop');
  var newsTimer = null;

  function openNewsletter(delay) {
    if (!news || store.get('copper-news-dismissed') === '1') return;
    clearTimeout(newsTimer);
    newsTimer = setTimeout(function () {
      news.hidden = false;
      var first = news.querySelector('input');
      if (first) setTimeout(function () { first.focus({ preventScroll: true }); }, 50);
    }, delay);
  }

  function closeNewsletter() {
    if (!news) return;
    news.hidden = true;
    store.set('copper-news-dismissed', '1');
  }

  function passGate() {
    store.set('copper-age-ok', '1');
    gate.classList.add('is-closing');
    setTimeout(function () { gate.hidden = true; }, 650);
    openNewsletter(2200);
  }

  if (gate) {
    if (store.get('copper-age-ok') === '1') {
      gate.hidden = true;
      openNewsletter(1200);
    } else {
      document.documentElement.style.overflow = 'hidden';
      var inner = gate.querySelector('[data-gate-step="ask"]');
      var focusable = gate.querySelectorAll('button');
      if (focusable[1]) setTimeout(function () { focusable[1].focus({ preventScroll: true }); }, 100);
    }

    gate.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-gate]');
      if (!btn) return;
      var action = btn.getAttribute('data-gate');
      var ask = gate.querySelector('[data-gate-step="ask"]');
      var no = gate.querySelector('[data-gate-step="no"]');
      if (action === 'yes') {
        document.documentElement.style.overflow = '';
        passGate();
      } else if (action === 'no') {
        ask.hidden = true; no.hidden = false;
        no.querySelector('button').focus({ preventScroll: true });
      } else if (action === 'back') {
        no.hidden = true; ask.hidden = false;
        gate.querySelector('[data-gate="no"]').focus({ preventScroll: true });
      }
    });

    /* Dismissible: Escape returns to the question, or leaves the no-screen. */
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape' || gate.hidden) return;
      var no = gate.querySelector('[data-gate-step="no"]');
      if (!no.hidden) { no.hidden = true; gate.querySelector('[data-gate-step="ask"]').hidden = false; }
    });
  }

  /* ---------- Newsletter popup ---------- */
  if (news) {
    news.addEventListener('click', function (e) {
      if (e.target.closest('[data-news-close]')) closeNewsletter();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !news.hidden) closeNewsletter();
    });
    var newsForm = news.querySelector('[data-news-form]');
    if (newsForm) newsForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = news.querySelector('[data-news-msg]');
      msg.textContent = 'Thanks. Your 10% code is on its way.';
      store.set('copper-news-dismissed', '1');
      setTimeout(closeNewsletter, 1800);
    });
  }
  var footForm = document.querySelector('[data-news-form-footer]');
  if (footForm) footForm.addEventListener('submit', function (e) {
    e.preventDefault();
    footForm.querySelector('input').value = '';
    footForm.querySelector('input').placeholder = 'Thanks for joining';
  });

  /* ---------- Header: sticky + hide on scroll-up ---------- */
  var header = document.getElementById('siteHeader');
  var lastY = window.scrollY;
  var ticking = false;
  function onScroll() {
    var y = window.scrollY;
    var threshold = 140;
    if (y > threshold) {
      header.classList.add('is-sticky');
      header.classList.toggle('is-hidden-up', y > lastY + 4 && y > 600);
    } else {
      header.classList.remove('is-sticky', 'is-hidden-up');
    }
    lastY = y;
    var toTop = document.querySelector('[data-to-top]');
    if (toTop) toTop.hidden = y < 700;
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  /* ---------- Drawer ---------- */
  var toggle = document.querySelector('.menu-toggle');
  var drawer = document.getElementById('drawer');
  var scrim = document.querySelector('[data-drawer-close]');
  function setDrawer(open) {
    drawer.classList.toggle('is-open', open);
    scrim.classList.toggle('is-on', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  toggle.addEventListener('click', function () { setDrawer(toggle.getAttribute('aria-expanded') !== 'true'); });
  scrim.addEventListener('click', function () { setDrawer(false); });
  drawer.addEventListener('click', function (e) { if (e.target.closest('a')) setDrawer(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setDrawer(false); });

  /* ---------- Hero slideshow ---------- */
  var heroSlides = Array.prototype.slice.call(document.querySelectorAll('.hero .slide'));
  var heroIndex = 0;
  var heroCount = document.querySelector('[data-count-now]');
  var heroTimer = null;

  function showHero(i) {
    heroIndex = (i + heroSlides.length) % heroSlides.length;
    heroSlides.forEach(function (s, k) {
      var on = k === heroIndex;
      s.classList.toggle('is-active', on);
      s.setAttribute('aria-hidden', String(!on));
    });
    if (heroCount) heroCount.textContent = String(heroIndex + 1);
    restartHero();
  }
  function restartHero() {
    clearInterval(heroTimer);
    if (!reduceMotion) heroTimer = setInterval(function () { showHero(heroIndex + 1); }, 7000);
  }
  var heroPrev = document.querySelector('[data-hero-prev]');
  var heroNext = document.querySelector('[data-hero-next]');
  if (heroPrev) heroPrev.addEventListener('click', function () { showHero(heroIndex - 1); });
  if (heroNext) heroNext.addEventListener('click', function () { showHero(heroIndex + 1); });
  restartHero();

  /* ---------- Product slider (gins) ---------- */
  var GINS = [
    { name: 'Harbour Dry Gin', tag: 'Crisp, zesty and clean.', liquid: '#E3EEE8', label: '#2D4A4F', cap: '#C99A5B' },
    { name: 'Blue Pea Reserve', tag: 'Aromatic, floral and delicate.', liquid: '#2A3F73', label: '#1E2D52', cap: '#C99A5B' },
    { name: 'Ember Pink Gin', tag: 'Warm, bold and spiced.', liquid: '#D9826B', label: '#7A2B2B', cap: '#D4AE6F' },
    { name: 'Midnight Proof', tag: 'Crisp, dynamic and balanced.', liquid: '#2A2446', label: '#14182E', cap: '#C99A5B' },
    { name: 'Jasmine Dusk', tag: 'Bright, fragrant and floral.', liquid: '#E9D89A', label: '#3B6E57', cap: '#D4AE6F' },
    { name: 'Hawthorn Berry', tag: 'Fruity, tart and tangy.', liquid: '#B33A3A', label: '#5A1F2A', cap: '#C99A5B' },
    { name: 'Oak Rested Gin', tag: 'Smooth, elegant and sophisticated.', liquid: '#C48A3C', label: '#2F2418', cap: '#D4AE6F' }
  ];
  var NS = 'http://www.w3.org/2000/svg';
  var NSXLINK = 'http://www.w3.org/1999/xlink';
  var track = document.querySelector('[data-gin-track]');
  var ginIndex = 0;
  var ginEls = [];

  function perView() {
    return window.matchMedia('(min-width: 990px)').matches ? 3 : 1;
  }

  if (track) {
    GINS.forEach(function (g, k) {
      var wrap = document.createElement('div');
      wrap.className = 'gin';
      wrap.setAttribute('role', 'button');
      wrap.setAttribute('tabindex', '0');
      wrap.setAttribute('aria-label', g.name);
      wrap.style.opacity = '';
      var svg = document.createElementNS(NS, 'svg');
      svg.setAttribute('viewBox', '0 0 120 300');
      svg.setAttribute('aria-hidden', 'true');
      var use = document.createElementNS(NS, 'use');
      use.setAttribute('href', '#bottle');
      use.setAttributeNS(NSXLINK, 'xlink:href', '#bottle');
      use.setAttribute('width', '120');
      use.setAttribute('height', '300');
      use.setAttribute('style', '--liquid:' + g.liquid + ';--label:' + g.label + ';--cap:' + g.cap);
      svg.appendChild(use);
      wrap.appendChild(svg);
      wrap.addEventListener('click', function () { goGin(k); });
      wrap.addEventListener('keydown', function (e) { if (e.key === 'Enter') goGin(k); });
      track.appendChild(wrap);
      ginEls.push(wrap);
    });

    var nameEl = document.querySelector('[data-gin-name]');
    var tagEl = document.querySelector('[data-gin-tag]');
    var countEl = document.querySelector('[data-gin-count]');
    var linkEl = document.querySelector('[data-gin-link]');

    function layoutGins() {
      track.style.setProperty('--per', perView());
      track.style.setProperty('--c', perView() === 3 ? 1 : 0);
      track.style.setProperty('--i', ginIndex);
    }

    function goGin(i) {
      ginIndex = (i + GINS.length) % GINS.length;
      ginEls.forEach(function (el, k) { el.classList.toggle('is-active', k === ginIndex); });
      layoutGins();
      var g = GINS[ginIndex];
      nameEl.textContent = g.name;
      tagEl.textContent = g.tag;
      countEl.textContent = String(ginIndex + 1);
      linkEl.setAttribute('aria-label', 'Learn more about ' + g.name);
    }

    document.querySelector('[data-gin-prev]').addEventListener('click', function () { goGin(ginIndex - 1); });
    document.querySelector('[data-gin-next]').addEventListener('click', function () { goGin(ginIndex + 1); });
    window.addEventListener('resize', layoutGins);

    /* swipe */
    var sx = null;
    track.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', function (e) {
      if (sx === null) return;
      var dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 40) goGin(ginIndex + (dx < 0 ? 1 : -1));
      sx = null;
    });

    goGin(0);
    ginEls[0].style.transition = 'none';
    requestAnimationFrame(function () { ginEls[0].style.transition = ''; });
  }

  /* ---------- Stamp progress bar ---------- */
  var stamps = document.querySelector('[data-stamps]');
  var progress = document.querySelector('.progress span');
  if (stamps && progress) {
    var updateProgress = function () {
      var max = stamps.scrollWidth - stamps.clientWidth;
      var ratio = max > 0 ? stamps.scrollLeft / max : 0;
      var w = 50;
      progress.style.left = (ratio * (100 - w)) + '%';
      progress.style.width = w + '%';
    };
    stamps.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  /* ---------- Back to top ---------- */
  var toTop = document.querySelector('[data-to-top]');
  if (toTop) {
    toTop.hidden = true;
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }

  /* ---------- Scroll reveals ---------- */
  var revealTargets = document.querySelectorAll(
    '.about > *, .experiences__head > *, .stamp, .social__handle, .social .btn, .tile, .footer__col, .footer__bottom, .gins__info'
  );
  var revealed = [];
  revealTargets.forEach(function (el, k) {
    el.classList.add('reveal');
    el.style.setProperty('--d', ((k % 6) * 90) + 'ms');
    revealed.push(el);
  });
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px 0px 0px', threshold: 0.05 });
    revealed.forEach(function (el) { io.observe(el); });
  } else {
    revealed.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------- Band: gentle parallax on the art ---------- */
  var band = document.querySelector('.band__art');
  if (band && !reduceMotion) {
    window.addEventListener('scroll', function () {
      var r = band.parentNode.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      var p = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
      band.style.transform = 'translate3d(0,' + (p * -30).toFixed(1) + 'px,0) scale(1.06)';
    }, { passive: true });
  }
})();
