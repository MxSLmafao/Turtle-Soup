/* Quillmere Kitchen - placeholder design study. Plain JS, no dependencies. */
(function () {
  'use strict';

  // Sample catalogue (invented copy). Food parts reference the shared SVG sprite in index.html.
  var CATALOGUE = {
    pass: [
      { title: 'Sunrise Grain Bowl', desc: 'Herbed chicken, brown rice, roasted carrot and a sesame dressing.', kcal: 381, parts: ['rice', 'protein', 'carrots', 'greens'], tint: '#fbe9f2', tag: 'i-leaf' },
      { title: 'Tofu Garden', desc: 'Crisp tofu, cauliflower rice, rainbow veg and a light teriyaki glaze.', kcal: 420, parts: ['tofu', 'broccoli', 'carrots', 'greens'], tint: '#e9f5e7', tag: 'i-leaf', keto: true, macros: [28, 22, 50] },
      { title: 'Steak and Greens', desc: 'Lean beef, roasted onion, egg and fresh strawberries over noodles.', kcal: 530, parts: ['protein', 'egg', 'berries', 'rice'], tint: '#fbeee6', tag: 'i-fork' },
      { title: 'Salmon Salad Plate', desc: 'Oven-baked salmon, sweetcorn, kale, lemon and a dill yoghurt cup.', kcal: 306, parts: ['salmon', 'greens', 'carrots', 'egg'], tint: '#e8f0fb', tag: 'i-leaf' }
    ],
    restaurant: [
      { title: 'Harvest Rice Plate', desc: 'Warm grains, roasted vegetables and a choice of protein from the grill.', kcal: 470, parts: ['rice', 'protein', 'broccoli', 'carrots'], tint: '#fbe9f2', tag: 'i-fork' },
      { title: 'Fresh Tofu Bowl', desc: 'Silken tofu, quinoa, avocado and a citrus miso dressing.', kcal: 390, parts: ['tofu', 'greens', 'fruit'], tint: '#e9f5e7', tag: 'i-leaf' },
      { title: 'Berry Salmon Bowl', desc: 'Salmon fillet, berry compote, wild rice and crunchy seeds.', kcal: 510, parts: ['salmon', 'berries', 'rice'], tint: '#fbeee6', tag: 'i-fork' },
      { title: 'Garden Egg Bowl', desc: 'Free-range egg, charred greens, fruit and a herb sauce.', kcal: 360, parts: ['egg', 'greens', 'fruit'], tint: '#fdf6dc', tag: 'i-leaf' }
    ],
    vending: [
      { title: 'Chicken Protein Box', desc: 'Grilled chicken, edamame, boiled egg and a cucumber salad.', kcal: 340, parts: ['protein', 'egg', 'greens'], tint: '#fbe9f2', tag: 'i-fork' },
      { title: 'Oat and Date Snack', desc: 'Baked oat bar with dates, seeds and a dash of cinnamon.', kcal: 210, parts: ['fruit', 'rice'], tint: '#fdf6dc', tag: 'i-leaf' },
      { title: 'Green Press Juice', desc: 'Cold-pressed apple, spinach and ginger in a 300 ml bottle.', kcal: 120, parts: ['greens', 'fruit'], tint: '#e9f5e7', tag: 'i-leaf' },
      { title: 'Berry Yoghurt Cup', desc: 'Thick yoghurt, mixed berries and toasted granola.', kcal: 180, parts: ['berries', 'rice'], tint: '#fbeee6', tag: 'i-fork' }
    ],
    catering: [
      { title: 'Team Lunch Platter', desc: 'Assorted bowls for 10 to 20 people, labelled for dietary needs.', kcal: 430, parts: ['rice', 'protein', 'greens', 'carrots'], tint: '#e9f5e7', tag: 'i-people' },
      { title: 'Workshop Snack Box', desc: 'Fruit, egg cups and oat bars packed for a half-day session.', kcal: 260, parts: ['fruit', 'egg', 'rice'], tint: '#fdf6dc', tag: 'i-bag' },
      { title: 'Town Hall Buffet', desc: 'Warm mains and salads with a self-serve set-up and staff support.', kcal: 470, parts: ['salmon', 'rice', 'greens', 'berries'], tint: '#fbe9f2', tag: 'i-people' },
      { title: 'Meeting Lunch Trays', desc: 'Plated trays with a sauce cup and a seasonal fruit cup.', kcal: 390, parts: ['tofu', 'greens', 'fruit'], tint: '#e8f0fb', tag: 'i-bag' }
    ],
    learning: [
      { title: 'Knife Skills Session', desc: 'Two-hour hands-on class in knife work and vegetable prep.', kcal: 0, parts: ['carrots', 'greens', 'fruit'], tint: '#e9f5e7', tag: 'i-leaf' },
      { title: 'Balanced Plate Workshop', desc: 'Build a plate with the right ratio of protein, carbs and veg.', kcal: 0, parts: ['rice', 'protein', 'broccoli'], tint: '#fbe9f2', tag: 'i-fork' },
      { title: 'Batch Cooking Basics', desc: 'Plan, shop and cook five meals in one afternoon.', kcal: 0, parts: ['rice', 'tofu', 'greens'], tint: '#fdf6dc', tag: 'i-clock' },
      { title: 'Stock and Sauce Lab', desc: 'Make three house sauces and learn how to store them safely.', kcal: 0, parts: ['berries', 'fruit', 'carrots'], tint: '#fbeee6', tag: 'i-leaf' }
    ]
  };

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  // Each card gets a slightly different offset so repeated parts do not look copy-pasted.
  function traySvg(parts, seed, label) {
    var dx = ((seed * 7) % 9) - 4;
    var dy = ((seed * 5) % 7) - 3;
    var uses = parts.map(function (p, i) {
      var x = ((i * 13 + seed * 3) % 11) - 5;
      return '<use href="#' + p + '" transform="translate(' + (x * 0.6) + ',' + ((i % 2) * 2) + ')"/>';
    }).join('');
    return '<svg viewBox="0 0 200 140" role="img" aria-label="' + escapeHtml(label) + ' (sample illustration)"><g transform="translate(' + dx + ',' + dy + ')">' +
      '<use href="#tray"/>' + uses + '<use href="#sauce"/></g></svg>';
  }

  function mealCard(meal, index) {
    var kcal = meal.kcal
      ? '<span class="kcal"><span>' + meal.kcal + '<small>Cal / serving</small></span></span>'
      : '';
    var ribbon = meal.keto
      ? '<span class="ribbon" aria-hidden="true"><span>Keto</span></span>'
      : '';
    var macros = meal.macros
      ? '<span class="macros" aria-hidden="true"><span class="m-p">Protein ' + meal.macros[0] + '%</span><br><span class="m-c">Carbs ' + meal.macros[1] + '%</span><br><span class="m-f">Fats ' + meal.macros[2] + '%</span></span>'
      : '';
    return '<article class="meal" style="--tint:' + meal.tint + ';animation-delay:' + (index * 70) + 'ms">' +
      '<div class="meal-media">' + ribbon + macros + kcal +
      traySvg(meal.parts, index + 1, meal.title) +
      '<svg class="meal-tag" viewBox="0 0 24 24" aria-hidden="true"><use href="#' + meal.tag + '"/></svg>' +
      '</div>' +
      '<div class="meal-body"><h3>' + escapeHtml(meal.title) + '</h3><p>' + escapeHtml(meal.desc) + '</p></div>' +
      '</article>';
  }

  function renderCategory(cat) {
    var grid = document.getElementById('meal-grid');
    if (!grid || !CATALOGUE[cat]) return;
    grid.innerHTML = CATALOGUE[cat].map(mealCard).join('');
    grid.setAttribute('data-cat', cat);
  }

  function initFilters() {
    var chips = document.querySelectorAll('.filter-row .chip[data-cat]');
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) {
          c.classList.remove('is-active');
          c.setAttribute('aria-selected', 'false');
        });
        chip.classList.add('is-active');
        chip.setAttribute('aria-selected', 'true');
        renderCategory(chip.getAttribute('data-cat'));
      });
    });
    renderCategory('pass');
  }

  function initHeader() {
    var header = document.querySelector('.site-header');
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function initMenu() {
    var toggle = document.querySelector('.menu-toggle');
    var nav = document.getElementById('primary-nav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      nav.classList.toggle('is-open', open);
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
        nav.classList.remove('is-open');
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        toggle.click();
        toggle.focus();
      }
    });
  }

  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el, i) {
      if (!el.hasAttribute('data-delay') && el.parentElement) {
        var siblings = Array.prototype.indexOf.call(el.parentElement.children, el);
        if (siblings > 0 && siblings < 4) el.setAttribute('data-delay', String(siblings));
      }
      io.observe(el);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initHeader();
    initMenu();
    initFilters();
    initReveal();
  });
})();
