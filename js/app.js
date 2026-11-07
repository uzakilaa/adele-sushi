(function () {
  "use strict";

  var CFG = window.CONFIG;
  var MENU = window.MENU;

  /* ---------------- i18n ---------------- */
  var T = {
    ru: {
      cart: "Корзина", heroTitle: "Доставка суши, роллов и пиццы",
      heroSub: "Кандыагаш · ежедневно " + CFG.open + "–" + CFG.close,
      toMenu: "Смотреть меню", search: "Поиск: филадельфия, пепперони…",
      nothing: "Ничего не нашли. Попробуйте другое название.",
      reviews: "Отзывы гостей", tagline: "Пицца · Роллы · Доставка", workDaily: "Работаем ежедневно",
      reviewsNote: "Настоящие отзывы наших гостей на 2GIS", leaveReview: "Оставить отзыв в 2GIS",
      allReviews: "Все отзывы", heroReviews: "Что говорят гости", reviewsChip: "★ Отзывы",
      qAddress: "Адрес и график", qWrite: "Написать в WhatsApp", qCall: "Позвонить", toBusiness: "Для компаний",
      iAddress: "Адрес", iHours: "Часы работы", iDelivery: "Доставка", iPickup: "Самовывоз",
      iDeliveryText: "По всему Кандыагашу. Стоимость зависит от района — уточнит оператор.",
      iPickupText: "Заберите заказ сами по адресу кафе — напишем, когда будет готов.",
      iMap: "Открыть на карте 2GIS", iDaily: "Ежедневно", waHello: "Здравствуйте! Хочу сделать заказ.",
      photoNote: "Фото блюд могут немного отличаться от подачи: оформление зависит от упаковки, а ингредиенты и граммовка всегда те же.",
      bizTitle: "Для компаний", bizNote: "Обеды для коллективов, фуршеты и поставки в магазины. Скачайте предложение или напишите нам.",
      bizPdf: "Скачать предложение (PDF)", bizWrite: "Обсудить в WhatsApp", bizChip: "Для компаний", prev: "Назад", next: "Вперёд",
      yourOrder: "Ваш заказ", cartEmpty: "Корзина пока пустая. Добавьте что-нибудь вкусное из меню.",
      delivery: "Доставка", pickup: "Самовывоз", name: "Имя", phone: "Телефон",
      address: "Адрес доставки", addressPh: "Улица, дом, квартира / подъезд",
      payment: "Оплата", cash: "Наличные", kaspi: "Kaspi перевод",
      change: "Сдача с суммы", changePh: "Например, 10 000",
      comment: "Комментарий", commentPh: "Без лука, приборы на 3 человек…",
      total: "Итого", deliveryNote: "Оператор в WhatsApp уточнит стоимость доставки и время и пришлёт счёт на оплату Kaspi или Halyk.",
      sendWa: "Оформить в WhatsApp", add: "В корзину", added: "Добавлено в корзину",
      open: "Открыто до " + CFG.close, closed: "Сейчас закрыто · принимаем заказы с " + CFG.open,
      errName: "Укажите имя", errPhone: "Укажите номер телефона полностью", errAddr: "Укажите адрес доставки",
      sent: "Открываем WhatsApp — нажмите «Отправить» в чате", clear: "Очистить корзину",
      langBtn: "ҚАЗ", langAria: "Қазақ тіліне ауысу"
    },
    kk: {
      cart: "Себет", heroTitle: "Суши, ролл және пицца жеткізу",
      heroSub: "Қандыағаш · күн сайын " + CFG.open + "–" + CFG.close,
      toMenu: "Мәзірді қарау", search: "Іздеу: филадельфия, пепперони…",
      nothing: "Ештеңе табылмады. Басқа атауды көріңіз.",
      reviews: "Қонақтардың пікірлері", tagline: "Пицца · Роллдар · Жеткізу", workDaily: "Күн сайын жұмыс істейміз",
      reviewsNote: "Қонақтарымыздың 2GIS-тегі шынайы пікірлері", leaveReview: "2GIS-те пікір қалдыру",
      allReviews: "Барлық пікірлер", heroReviews: "Қонақтар не дейді", reviewsChip: "★ Пікірлер",
      qAddress: "Мекенжай мен кесте", qWrite: "WhatsApp-қа жазу", qCall: "Қоңырау шалу", toBusiness: "Компанияларға",
      iAddress: "Мекенжай", iHours: "Жұмыс уақыты", iDelivery: "Жеткізу", iPickup: "Өзім алып кетемін",
      iDeliveryText: "Бүкіл Қандыағаш бойынша. Құны ауданға байланысты — оператор нақтылайды.",
      iPickupText: "Тапсырысты кафеден өзіңіз алып кете аласыз — дайын болғанда жазамыз.",
      iMap: "2GIS картасынан ашу", iDaily: "Күн сайын", waHello: "Сәлеметсіз бе! Тапсырыс бергім келеді.",
      photoNote: "Тағам суреттері берілуінен сәл өзгеше болуы мүмкін: безендіру қаптамаға байланысты, ал құрамы мен салмағы әрқашан бірдей.",
      bizTitle: "Компанияларға", bizNote: "Ұжымға түскі ас, фуршет және дүкендерге жеткізу. Ұсынысты жүктеп алыңыз немесе бізге жазыңыз.",
      bizPdf: "Ұсынысты жүктеу (PDF)", bizWrite: "WhatsApp-та талқылау", bizChip: "Компанияларға", prev: "Артқа", next: "Алға",
      yourOrder: "Сіздің тапсырысыңыз", cartEmpty: "Себет әзірге бос. Мәзірден дәмді бірдеңе қосыңыз.",
      delivery: "Жеткізу", pickup: "Өзім алып кетемін", name: "Атыңыз", phone: "Телефон",
      address: "Жеткізу мекенжайы", addressPh: "Көше, үй, пәтер / кіреберіс",
      payment: "Төлем", cash: "Қолма-қол", kaspi: "Kaspi аударым",
      change: "Қай сомадан қайтарым", changePh: "Мысалы, 10 000",
      comment: "Түсініктеме", commentPh: "Пиязсыз, 3 адамға құрал…",
      total: "Барлығы", deliveryNote: "Оператор WhatsApp-та жеткізу құны мен уақытын нақтылап, Kaspi немесе Halyk арқылы төлем шотын жібереді.",
      sendWa: "WhatsApp арқылы рәсімдеу", add: "Себетке", added: "Себетке қосылды",
      open: CFG.close + " дейін ашық", closed: "Қазір жабық · тапсырыстар " + CFG.open + "-ден қабылданады",
      errName: "Атыңызды жазыңыз", errPhone: "Телефон нөмірін толық жазыңыз", errAddr: "Жеткізу мекенжайын жазыңыз",
      sent: "WhatsApp ашылуда — чатта «Жіберу» түймесін басыңыз", clear: "Себетті тазалау",
      langBtn: "РУС", langAria: "Переключить на русский"
    }
  };

  /* ---------------- storage (safe) ---------------- */
  function load(key, def) {
    try { var v = localStorage.getItem("adele_" + key); return v ? JSON.parse(v) : def; } catch (e) { return def; }
  }
  function save(key, val) {
    try { localStorage.setItem("adele_" + key, JSON.stringify(val)); } catch (e) { /* ignore */ }
  }

  var state = {
    lang: load("lang", "ru") === "kk" ? "kk" : "ru",
    cart: load("cart", {}),      // { "itemId|variantIndex": qty }
    sel: {},                      // выбранный вариант в карточке: { itemId: index }
    query: ""
  };

  /* ---------------- helpers ---------------- */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function t(k) { return T[state.lang][k] || T.ru[k] || k; }
  function money(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₸"; }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function name(o) { return state.lang === "kk" && o.nk ? o.nk : o.n; }
  function desc(o) { return state.lang === "kk" && o.dk ? o.dk : (o.d || ""); }
  function vlabel(v) { return state.lang === "kk" && v.lk ? v.lk : v.l; }
  function norm(s) { return String(s || "").toLowerCase().replace(/ё/g, "е"); }

  var ITEMS = {};
  MENU.forEach(function (cat) {
    cat.items.forEach(function (it) { it._cat = cat; ITEMS[it.id] = it; });
  });

  function keyOf(id, vi) { return id + "|" + (vi == null ? -1 : vi); }
  function parseKey(k) {
    var p = k.split("|"); var it = ITEMS[p[0]]; var vi = Number(p[1]);
    if (!it) return null;
    var v = vi >= 0 && it.v ? it.v[vi] : null;
    if (vi >= 0 && !v) return null;
    return { item: it, vi: vi, variant: v, price: v ? v.p : it.p };
  }
  // убираем из корзины позиции, которых больше нет в меню
  Object.keys(state.cart).forEach(function (k) {
    var r = parseKey(k);
    if (!r || r.item.hidden || !(state.cart[k] > 0)) delete state.cart[k];
  });

  /* ---------------- icons (заглушки вместо фото) ---------------- */
  var ICONS = {
    roll: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="32" cy="24" rx="20" ry="9"/><path d="M12 24v14c0 5 9 9 20 9s20-4 20-9V24"/><ellipse cx="32" cy="24" rx="12" ry="5"/><circle cx="32" cy="24" r="3" fill="currentColor"/></svg>',
    maki: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="22" cy="26" rx="12" ry="5"/><path d="M10 26v12c0 3 5 5 12 5s12-2 12-5V26"/><ellipse cx="42" cy="34" rx="12" ry="5"/><path d="M30 34v10c0 3 5 5 12 5s12-2 12-5V34"/><circle cx="22" cy="26" r="2.5" fill="currentColor"/><circle cx="42" cy="34" r="2.5" fill="currentColor"/></svg>',
    set: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="22" width="52" height="28" rx="6"/><circle cx="20" cy="36" r="7"/><circle cx="36" cy="36" r="7"/><circle cx="50" cy="36" r="4"/><path d="M14 14l40 6M14 9l40 11"/></svg>',
    baked: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 30c0-6 9-11 20-11s20 5 20 11"/><path d="M10 30h44v10c0 5-10 9-22 9s-22-4-22-9z"/><path d="M26 8c2 3-2 5 0 8M34 6c2 3-2 5 0 8M42 9c2 3-2 5 0 7"/></svg>',
    tempura: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="34" r="16"/><circle cx="32" cy="34" r="7"/><path d="M14 22l-4-4M50 22l4-4M32 14V9M18 48l-4 4M46 48l4 4"/></svg>',
    pizza: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M8 16c15-8 33-8 48 0L32 58z"/><path d="M12 22c13-6 27-6 40 0"/><circle cx="26" cy="30" r="3"/><circle cx="38" cy="32" r="3"/><circle cx="32" cy="43" r="3"/></svg>',
    combo: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="24" width="44" height="30" rx="4"/><path d="M6 18h52v8H6zM32 18v36"/><path d="M32 18c-4-8-14-10-14-4s10 4 14 4c4 0 14 2 14-4s-10-4-14 4z"/></svg>',
    fries: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M16 26h32l-4 30H20z"/><path d="M22 26V8M28 26V5M34 26V7M40 26V10M44 26V14"/><path d="M24 40c4 3 12 3 16 0"/></svg>',
    waffle: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="14" width="44" height="36" rx="6"/><path d="M10 26h44M10 38h44M24 14v36M40 14v36"/></svg>',
    star: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M32 8l6 16 16 6-16 6-6 16-6-16-16-6 16-6z"/><path d="M50 8l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/></svg>'
  };

  /* ---------------- render menu ---------------- */
  var menuEl = $("#menu"), catsEl = $("#catsInner");

  function cardFootHtml(it) {
    var vi = it.v ? (state.sel[it.id] || 0) : null;
    var price = it.v ? it.v[vi].p : it.p;
    var q = state.cart[keyOf(it.id, vi)] || 0;
    var ctrl = q > 0
      ? '<div class="qty"><button type="button" data-act="dec" aria-label="−">−</button><span>' + q + '</span><button type="button" data-act="inc" aria-label="+">+</button></div>'
      : '<button type="button" class="add-btn" data-act="inc" aria-label="' + esc(t("add")) + '">+<span class="add-btn__text"> ' + esc(t("add")) + '</span></button>';
    return '<span class="price">' + money(price) + "</span>" + ctrl;
  }

  function cardHtml(it, icon) {
    var media = it.img
      ? (it.fit === "contain" ? '<img class="bg" src="' + esc(it.img) + '" alt="" aria-hidden="true" loading="lazy">' : "") +
        '<img class="main" src="' + esc(it.img) + '" alt="' + esc(name(it)) + '"' +
          (it.zoom ? ' style="transform:scale(' + Number(it.zoom) + ')"' : "") + ' loading="lazy" decoding="async">'
      : '<div class="ph">' + ICONS[icon || "roll"] + "</div>";
    var variants = "";
    if (it.v) {
      var sel = state.sel[it.id] || 0;
      variants = '<div class="variants">' + it.v.map(function (v, i) {
        return '<button type="button" class="variant' + (i === sel ? " is-active" : "") + '" data-vi="' + i + '">' + esc(vlabel(v)) + "</button>";
      }).join("") + "</div>";
    }
    var d = desc(it);
    return '<article class="card" data-id="' + it.id + '">' +
      '<div class="card__media' + (it.fit === "contain" ? " is-contain" : "") + (it.shape ? " card__media--" + it.shape : "") + '">' + media + "</div>" +
      '<div class="card__body">' +
        '<h3 class="card__name">' + esc(name(it)) + "</h3>" +
        (d ? '<p class="card__desc">' + esc(d) + "</p>" : "") +
        variants +
        '<div class="card__foot">' + cardFootHtml(it) + "</div>" +
      "</div></article>";
  }

  /* Items whose photos share a shape (tall / square / wide) get their own grid,
     so every card in a row has the same photo frame and no empty side bars. */
  function gridsHtml(items, icon) {
    var order = [], groups = {};
    items.forEach(function (it) {
      var s = it.shape || "";
      if (!groups[s]) { groups[s] = []; order.push(s); }
      groups[s].push(it);
    });
    return order.map(function (s) {
      return '<div class="grid' + (s ? " grid--" + s : "") + '">' +
        groups[s].map(function (it) { return cardHtml(it, icon); }).join("") + "</div>";
    }).join("");
  }

  function matches(it) {
    if (!state.query) return true;
    var hay = norm([it.n, it.nk, it.d, it.dk].concat((it.v || []).map(function (v) { return v.l + " " + (v.lk || ""); })).join(" "));
    return hay.indexOf(state.query) !== -1;
  }

  function renderMenu() {
    var html = "", chips = "", any = false;
    MENU.forEach(function (cat) {
      var items = cat.items.filter(function (it) { return !it.hidden && matches(it); });
      if (!items.length) return;
      any = true;
      chips += '<a class="chip" href="#cat-' + cat.id + '" data-cat="' + cat.id + '">' +
        (cat.thumb
          ? '<span class="chip__ico chip__ico--photo" aria-hidden="true"><img src="' + esc(cat.thumb) + '" alt="" width="32" height="32" decoding="async"></span>'
          : '<span class="chip__ico" aria-hidden="true">' + (ICONS[cat.icon] || "") + "</span>") +
        esc(name(cat)) + "</a>";
      html += '<section class="cat" id="cat-' + cat.id + '"><h2 class="cat__title">' + esc(name(cat)) + "</h2>" +
        gridsHtml(items, cat.icon) + "</section>";
    });
    if ((CFG.business || []).length) chips += '<a class="chip chip--biz" href="#business">' + esc(t("bizChip")) + "</a>";
    if (hasGuestReviews()) chips += '<a class="chip chip--reviews" href="#reviews">' + esc(t("reviewsChip")) + "</a>";
    menuEl.innerHTML = html;
    catsEl.innerHTML = chips;
    $("#emptySearch").hidden = any;
    observeCats();
    observeReveal();
    // чипы «въезжают» только при первой загрузке, а не при каждом поиске
    if (!catsEl.classList.contains("no-intro")) setTimeout(function () { catsEl.classList.add("no-intro"); }, 900);
  }

  /* Cards fade up as they scroll into view */
  var revealIo = null;
  function observeReveal() {
    if (!("IntersectionObserver" in window)) return;
    if (revealIo) revealIo.disconnect();
    revealIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); revealIo.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -40px 0px" });
    $$(".card, .biz-card", document).forEach(function (c, i) {
      if (c.classList.contains("is-in")) return;
      c.classList.add("reveal");
      c.style.setProperty("--d", (i % 4) * 70 + "ms");
      revealIo.observe(c);
    });
  }

  function refreshCard(id) {
    var card = menuEl.querySelector('.card[data-id="' + id + '"]');
    if (!card) return;
    $(".card__foot", card).innerHTML = cardFootHtml(ITEMS[id]);
    var sel = state.sel[id] || 0;
    $$(".variant", card).forEach(function (b, i) { b.classList.toggle("is-active", i === sel); });
  }

  menuEl.addEventListener("click", function (e) {
    var card = e.target.closest(".card"); if (!card) return;
    var id = card.getAttribute("data-id"), it = ITEMS[id];
    var vb = e.target.closest(".variant");
    if (vb) { state.sel[id] = Number(vb.getAttribute("data-vi")); refreshCard(id); return; }
    var act = e.target.closest("[data-act]"); if (!act) return;
    var k = keyOf(id, it.v ? (state.sel[id] || 0) : null);
    changeQty(k, act.getAttribute("data-act") === "inc" ? 1 : -1, true);
  });

  /* ---------------- cart ---------------- */
  function cartLines() {
    return Object.keys(state.cart).map(function (k) {
      var r = parseKey(k); if (!r) return null;
      r.key = k; r.qty = state.cart[k]; return r;
    }).filter(Boolean);
  }
  function cartTotal() { return cartLines().reduce(function (s, l) { return s + l.price * l.qty; }, 0); }
  function cartCount() { return cartLines().reduce(function (s, l) { return s + l.qty; }, 0); }

  function changeQty(k, delta, fromMenu) {
    var q = (state.cart[k] || 0) + delta;
    if (q <= 0) delete state.cart[k]; else state.cart[k] = Math.min(q, 99);
    save("cart", state.cart);
    if (fromMenu && delta > 0 && q === 1) toast(t("added"));
    refreshCard(k.split("|")[0]);
    renderCart();
    if (delta > 0) { var b = $("#cartBtn"); b.classList.remove("bump"); void b.offsetWidth; b.classList.add("bump"); }
  }

  function renderCart() {
    var lines = cartLines(), count = cartCount(), total = cartTotal();
    $("#cartCount").textContent = count; $("#cartCount").hidden = count === 0;
    $("#cartBarCount").textContent = count; $("#cartBarSum").textContent = money(total);
    $("#cartBar").hidden = count === 0 || drawerOpen;
    $("#cartTotal").textContent = money(total);
    $("#cartEmpty").hidden = count > 0;
    $("#orderForm").hidden = count === 0;
    $("#drawerFoot").hidden = count === 0;
    $("#cartItems").innerHTML = lines.map(function (l) {
      return '<div class="line" data-key="' + esc(l.key) + '">' +
        '<div><div class="line__name">' + esc(name(l.item)) + "</div>" +
        (l.variant ? '<div class="line__var">' + esc(vlabel(l.variant)) + "</div>" : "") + "</div>" +
        '<div class="line__price">' + money(l.price * l.qty) + "</div>" +
        '<div class="qty"><button type="button" data-act="dec" aria-label="−">−</button><span>' + l.qty + '</span><button type="button" data-act="inc" aria-label="+">+</button></div>' +
        "</div>";
    }).join("") + (count ? '<p class="clear-row"><button type="button" class="clear-btn" id="clearCart">' +
      '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3"/></svg>' +
      esc(t("clear")) + "</button></p>" : "");
  }

  $("#cartItems").addEventListener("click", function (e) {
    if (e.target.closest("#clearCart")) {
      var ids = Object.keys(state.cart).map(function (k) { return k.split("|")[0]; });
      state.cart = {}; save("cart", state.cart); ids.forEach(refreshCard); renderCart(); return;
    }
    var act = e.target.closest("[data-act]"); if (!act) return;
    var line = e.target.closest(".line");
    changeQty(line.getAttribute("data-key"), act.getAttribute("data-act") === "inc" ? 1 : -1, false);
  });

  /* drawer */
  var drawerOpen = false, lastFocus = null;
  function openDrawer() {
    drawerOpen = true; lastFocus = document.activeElement;
    $("#overlay").hidden = false; $("#drawer").classList.add("is-open");
    $("#drawer").setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden";
    $("#toast").classList.remove("show"); $("#cartBar").hidden = true; setTimeout(function () { $("#drawerClose").focus(); }, 50);
  }
  function closeDrawer() {
    drawerOpen = false;
    $("#overlay").hidden = true; $("#drawer").classList.remove("is-open");
    $("#drawer").setAttribute("aria-hidden", "true"); document.body.style.overflow = "";
    renderCart(); if (lastFocus) lastFocus.focus();
  }
  $("#cartBtn").addEventListener("click", openDrawer);
  $("#cartBar").addEventListener("click", openDrawer);
  $("#drawerClose").addEventListener("click", closeDrawer);
  $("#overlay").addEventListener("click", closeDrawer);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && drawerOpen) closeDrawer(); });

  /* ---------------- order form ---------------- */
  var form = $("#orderForm");
  var saved = load("form", {});
  ["name", "phone", "address"].forEach(function (f) { if (saved[f]) form.elements[f].value = saved[f]; });
  if (saved.type) $$('input[name="type"]', form).forEach(function (r) { r.checked = r.value === saved.type; });

  function syncForm() {
    var isDelivery = form.elements.type.value === "delivery";
    $("#addrField").hidden = !isDelivery;
  }
  form.addEventListener("change", syncForm);

  function formatPhone(raw) {
    var d = raw.replace(/\D/g, "");
    if (d[0] === "8") d = "7" + d.slice(1);
    if (d && d[0] !== "7") d = "7" + d;
    d = d.slice(0, 11);
    var out = "+7";
    if (d.length > 1) out += " " + d.slice(1, 4);
    if (d.length > 4) out += " " + d.slice(4, 7);
    if (d.length > 7) out += " " + d.slice(7, 9);
    if (d.length > 9) out += " " + d.slice(9, 11);
    return d.length ? out : "";
  }
  form.elements.phone.addEventListener("input", function (e) {
    var el = e.target; el.value = formatPhone(el.value); el.classList.remove("invalid");
  });
  ["name", "address"].forEach(function (f) {
    form.elements[f].addEventListener("input", function () { form.elements[f].classList.remove("invalid"); });
  });

  function buildMessage(data) {
    var L = cartLines(), n = 0;
    var rows = L.map(function (l) {
      n++;
      return n + ". " + l.item.n + (l.variant ? " (" + l.variant.l + ")" : "") + " × " + l.qty + " — " + money(l.price * l.qty).replace(/ /g, " ");
    });
    var msg = [
      "Здравствуйте! Заказ с сайта Adele Sushi",
      "",
      rows.join("\n"),
      "",
      "Итого: " + money(cartTotal()).replace(/ /g, " ") + (data.type === "delivery" ? " (без учёта доставки)" : ""),
      "",
      "Способ: " + (data.type === "delivery" ? "Доставка" : "Самовывоз")
    ];
    if (data.type === "delivery") msg.push("Адрес: " + data.address);
    msg.push("Имя: " + data.name);
    msg.push("Телефон: " + data.phone);
    if (data.comment) msg.push("Комментарий: " + data.comment);
    if (state.lang === "kk") msg.push("Язык клиента: казахский");
    return msg.join("\n");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var el = form.elements, err = null, bad = null;
    var data = {
      type: el.type.value, name: el.name.value.trim(), phone: el.phone.value.trim(),
      address: el.address.value.trim(), comment: el.comment.value.trim()
    };
    $$(".invalid", form).forEach(function (x) { x.classList.remove("invalid"); });
    if (!data.name) { err = t("errName"); bad = el.name; }
    else if (data.phone.replace(/\D/g, "").length !== 11) { err = t("errPhone"); bad = el.phone; }
    else if (data.type === "delivery" && data.address.length < 3) { err = t("errAddr"); bad = el.address; }
    var errEl = $("#formError");
    if (err) {
      errEl.textContent = err; errEl.hidden = false; bad.classList.add("invalid"); bad.focus(); return;
    }
    errEl.hidden = true;
    save("form", { name: data.name, phone: data.phone, address: data.address, type: data.type });

    var url = "https://wa.me/" + CFG.whatsapp + "?text=" + encodeURIComponent(buildMessage(data));
    toast(t("sent"));
    var w = window.open(url, "_blank");
    if (!w) window.location.href = url;
  });

  /* ---------------- open status ---------------- */
  function toMin(hm) { var p = hm.split(":"); return Number(p[0]) * 60 + Number(p[1]); }
  function renderStatus() {
    var now = new Date();
    var kz = (now.getUTCHours() * 60 + now.getUTCMinutes() + 5 * 60) % 1440; // Казахстан UTC+5
    var o = toMin(CFG.open), c = toMin(CFG.close);
    var isOpen = c > o ? kz >= o && kz < c : kz >= o || kz < c;
    var el = $("#openStatus");
    el.textContent = isOpen ? t("open") : t("closed");
    el.className = "hero__status " + (isOpen ? "open" : "closed");
  }

  /* ---------------- scroll spy for chips ---------------- */
  var io = null;
  function setActiveChip(id) {
    var chip = null;
    $$(".chip", catsEl).forEach(function (c) {
      var on = c.getAttribute("data-cat") === id; c.classList.toggle("is-active", on); if (on) chip = c;
    });
    if (chip) {
      var target = chip.offsetLeft - (catsEl.clientWidth - chip.offsetWidth) / 2;
      catsEl.scrollTo({ left: target, behavior: "smooth" });
    }
  }
  function observeCats() {
    if (io) io.disconnect();
    if (!("IntersectionObserver" in window)) return;
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) setActiveChip(en.target.id.replace("cat-", ""));
      });
    }, { rootMargin: "-140px 0px -60% 0px" });
    $$(".cat", menuEl).forEach(function (s) { io.observe(s); });
  }

  /* ---------------- search ---------------- */
  var st;
  $("#search").addEventListener("input", function (e) {
    clearTimeout(st);
    st = setTimeout(function () { state.query = norm(e.target.value.trim()); renderMenu(); }, 120);
  });

  /* ---------------- reviews ---------------- */
  function hasGuestReviews() { return (CFG.guestReviews || []).length > 0; }

  function renderReviews() {
    var guests = CFG.guestReviews || [];
    var ids = (CFG.reviews || []).filter(Boolean);
    if (!guests.length && !ids.length) return;

    if (guests.length) {
      $("#guestReviews").innerHTML = guests.map(function (r) {
        var initial = String(r.name || "?").trim().charAt(0).toUpperCase();
        return '<figure class="rv">' +
          '<div class="rv__stars" aria-label="5/5">★★★★★</div>' +
          '<blockquote class="rv__text">' + esc(r.text) + "</blockquote>" +
          '<figcaption class="rv__who"><span class="rv__ava" aria-hidden="true">' + esc(initial) + "</span>" +
            '<span><b>' + esc(r.name) + "</b><small>" + esc(r.date || "") + " · 2GIS</small></span></figcaption>" +
          "</figure>";
      }).join("");
      $("#heroReviews").hidden = false;
    }
    if (CFG.twogis) {
      $("#rvLeave").href = CFG.twogis; $("#rvAll").href = CFG.twogis; $("#reviewsCtas").hidden = false;
      $("#gisLink").href = CFG.twogis; $("#gisLink").hidden = false;
    }
    if (ids.length) {
      $("#reviewsGrid").innerHTML = ids.map(function (id) {
        return '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '" title="Отзыв" loading="lazy" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>';
      }).join("");
    }
    $("#reviews").hidden = false;
    if (guests.length) setupCarousel(); // после показа раздела, иначе ширина ленты = 0
  }

  /* ---------------- business offers ---------------- */
  function renderBusiness() {
    var list = CFG.business || [];
    $("#business").hidden = !list.length;
    if (!list.length) return;
    var lang = state.lang, phone = CFG.b2bWhatsapp || CFG.whatsapp;
    $("#bizGrid").innerHTML = list.map(function (b) {
      var wa = "https://wa.me/" + phone + "?text=" + encodeURIComponent(b.wa || "");
      return '<article class="biz-card">' +
        '<div class="biz-card__media"><img src="' + esc(b.img) + '" alt="" loading="lazy" decoding="async">' +
          '<span class="biz-card__tag">' + esc(b.title[lang]) + "</span></div>" +
        '<div class="biz-card__body">' +
          '<h3 class="biz-card__lead">' + esc(b.lead[lang]) + "</h3>" +
          '<p class="biz-card__text">' + esc(b.text[lang]) + "</p>" +
          '<div class="biz-card__ctas">' +
            '<a class="btn btn--primary" href="' + esc(b.pdf) + '" target="_blank" rel="noopener" download>' +
              '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 4v11m0 0-4-4m4 4 4-4M5 19h14"/></svg>' +
              esc(t("bizPdf")) + "</a>" +
            '<a class="btn btn--ghost" href="' + esc(wa) + '" target="_blank" rel="noopener">' + esc(t("bizWrite")) + "</a>" +
          "</div></div></article>";
    }).join("");
    observeReveal();
  }

  /* Reviews carousel: one row, arrows scroll by one card */
  function setupCarousel() {
    var list = $("#guestReviews"), prev = $("#rvPrev"), next = $("#rvNext");
    function step() {
      var card = list.querySelector(".rv");
      return card ? card.getBoundingClientRect().width + 12 : list.clientWidth;
    }
    function update() {
      var max = list.scrollWidth - list.clientWidth - 2;
      prev.disabled = list.scrollLeft <= 2;
      next.disabled = list.scrollLeft >= max;
    }
    function go(dir) {
      var from = list.scrollLeft, target = from + dir * step();
      list.scrollTo({ left: target, behavior: "smooth" });
      // если браузер не анимирует прокрутку — сдвигаем сразу
      setTimeout(function () {
        if (Math.abs(list.scrollLeft - from) < 2) { list.style.scrollBehavior = "auto"; list.scrollLeft = target; list.style.scrollBehavior = ""; update(); }
      }, 450);
    }
    prev.addEventListener("click", function () { go(-1); });
    next.addEventListener("click", function () { go(1); });
    list.addEventListener("scroll", function () { window.requestAnimationFrame(update); }, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("load", update);
    update();
  }

  /* ---------------- toast ---------------- */
  var tt;
  function toast(msg) {
    var el = $("#toast"); el.textContent = msg; el.classList.add("show");
    clearTimeout(tt); tt = setTimeout(function () { el.classList.remove("show"); }, 2200);
  }

  /* ---------------- static texts / language ---------------- */
  function applyLang() {
    document.documentElement.lang = state.lang === "kk" ? "kk" : "ru";
    $$("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    $$("[data-i18n-ph]").forEach(function (el) { el.placeholder = t(el.getAttribute("data-i18n-ph")); });
    var lb = $("#langBtn"); lb.textContent = t("langBtn"); lb.setAttribute("aria-label", t("langAria"));
    $("#footerCity").textContent = CFG.address ? CFG.address[state.lang] : CFG.city[state.lang];
    fillInfo(); renderStatus(); renderMenu(); renderCart(); renderBusiness();
  }
  $("#langBtn").addEventListener("click", function () {
    state.lang = state.lang === "ru" ? "kk" : "ru"; save("lang", state.lang); applyLang();
  });

  /* ---------------- address & hours dialog ---------------- */
  var infoDlg = $("#infoDlg");
  function fillInfo() {
    $("#infoAddr").textContent = CFG.address ? CFG.address[state.lang] : CFG.city[state.lang];
    $("#infoHours").textContent = t("iDaily") + ", " + CFG.open + "–" + CFG.close;
    $("#quickWa").href = "https://wa.me/" + CFG.whatsapp + "?text=" + encodeURIComponent(t("waHello"));
  }
  $("#infoOpen").addEventListener("click", function () {
    fillInfo();
    if (infoDlg.showModal) infoDlg.showModal(); else infoDlg.setAttribute("open", "");
  });
  $("#infoClose").addEventListener("click", function () { infoDlg.close ? infoDlg.close() : infoDlg.removeAttribute("open"); });
  infoDlg.addEventListener("click", function (e) { if (e.target === infoDlg && infoDlg.close) infoDlg.close(); });
  $("#infoMap").href = CFG.map || CFG.twogis || "#";
  $("#infoCall").textContent = CFG.phoneLabel; $("#infoCall").href = "tel:" + CFG.phone;

  // контакты из конфига
  $("#heroCall").href = "tel:" + CFG.phone;
  $("#footerPhone").textContent = CFG.phoneLabel; $("#footerPhone").href = "tel:" + CFG.phone;
  $("#footerHours").textContent = CFG.open + "–" + CFG.close;
  $("#igLink").href = CFG.instagram; $("#ttLink").href = CFG.tiktok;
  $("#year").textContent = new Date().getFullYear();

  syncForm();
  applyLang();
  renderReviews();
  setInterval(renderStatus, 60000);
})();
