(function () {
  "use strict";

  var CFG = window.CONFIG;
  var MENU = window.MENU;

  /* ---------------- i18n ---------------- */
  var T = {
    ru: {
      cart: "Корзина", heroTitle: "Ужин для всей семьи точно к вашему времени",
      heroSub: "Кандыагаш · ежедневно " + CFG.open + "-" + CFG.close,
      toMenu: "Смотреть меню", search: "Поиск: филадельфия, пепперони…",
      nothing: "Ничего не нашли. Попробуйте другое название.",
      reviews: "Отзывы гостей", tagline: "Пицца · Роллы · Доставка", workDaily: "Работаем ежедневно",
      reviewsNote: "Настоящие отзывы наших гостей на 2GIS", leaveReview: "Оставить отзыв в 2GIS",
      allReviews: "Все отзывы", heroReviews: "Что говорят гости", reviewsChip: "★ Отзывы",
      qAddress: "Адрес и график", qWrite: "Написать в WhatsApp", qCall: "Позвонить", toBusiness: "Для компаний",
      iAddress: "Адрес", iHours: "Часы работы", iDelivery: "Доставка", iPickup: "Самовывоз",
      iDeliveryText: "По всему Кандыагашу. Стоимость зависит от района, её уточнит оператор.",
      iPickupText: "Заберите заказ сами по адресу кафе. Напишем, когда будет готов.",
      iMap: "Открыть на карте 2GIS", iDaily: "Ежедневно", waHello: "Здравствуйте! Хочу сделать заказ.",
      photoNote: "Фото блюд могут немного отличаться от подачи: оформление зависит от упаковки, а ингредиенты и граммовка всегда те же.",
      bizTitle: "Для компаний", bizNote: "Обеды для коллективов, фуршеты и поставки в магазины. Скачайте предложение или напишите нам.",
      bizPdf: "Скачать предложение (PDF)", bizWrite: "Обсудить в WhatsApp", bizChip: "Для компаний", prev: "Назад", next: "Вперёд",
      heroKicker: "Доставка суши, роллов и пиццы", heroPromise: "минут к названному времени · готовим на открытой кухне",
      promosTitle: "Акции", faqTitle: "Частые вопросы", faqChip: "Вопросы",
      lunchTitle: "Бизнес-ланчи", lunchSub: "Выгодные наборы на обед: экономия до 2 350 ₸.", lunchOnly: "Только по будням",
      moreVariants: "ещё варианты", inCart: "Уже в корзине",
      sWaTitle: "Пишите в WhatsApp", sWaFast: "Отвечаем за 5 минут, даже в час пик", sWaHow: "Можно прислать геометку, и курьер не будет звонить",
      sCallTitle: "Позвоните нам", liveText: "Смотрите, как готовят ваш заказ", fContacts: "Контакты", fSocial: "Мы в соцсетях",
      lunchNow: "Доступно сейчас", lunchLater: "Сейчас недоступно, ждём вас в пн-чт", save: "Выгода",
      navMenu: "Меню", navPromos: "Акции", navAbout: "О нас", navReviews: "Отзывы", navBiz: "Для компаний", navFaq: "Вопросы",
      ts1: "с 2022 года", ts2: "открытая кухня", ts3: "100% халяль", ts4: "эфиры в TikTok", aboutTrust: "Почему нам доверяют семьи",
      stepsTitle: "Корзина → WhatsApp → ужин у двери", stepsNote: "Без регистрации и приложений.",
      step1t: "Соберите корзину", step1d: "Выберите блюда или комбо на компанию.",
      step2t: "Назовите время и адрес", step2d: "Пришлите геометку в WhatsApp, и курьер не будет звонить.",
      step3t: "Оплатите счёт и ждите", step3d: "Пришлём счёт Kaspi или Halyk. Привезём ±10 минут к вашему времени.",
      trustTitle: "Почему нам доверяют семьи", trustNote: "Нам нечего прятать, поэтому кухня открыта.",
      tr1t: "Видно, как готовят ваш заказ", tr1d: "Открытая кухня и прямые эфиры в TikTok по пятницам и воскресеньям в 19:00. Заказы называем по имени.",
      tr2t: "Халяль и чистота", tr2d: "Все продукты халяльные. Униформа, перчатки и кепки видно в каждом эфире.",
      tr3t: "Саше есть только у нас", tr3d: "Фирменное блюдо, за которым приходят со всего города.",
      tr4t: "Хозяин сам на кухне", tr4d: "Азамат лично выходит на смены и отвечает за каждую коробку.",
      aboutKicker: "О нас", aboutTitle: "Делаем Кандыагаш вкуснее", aboutLead: "каждый день, каждым заказом",
      aboutP1: "Adele это уютное кафе на Жастык 44. Мы открылись 28 сентября 2022 года и хотим, чтобы за вкусными суши и пиццей не нужно было ехать в Актобе.",
      aboutP2: "Готовим как для своей семьи: из свежих продуктов, без экономии на начинке. Наше главное правило «Для своих»: перед тем как отдать заказ, спрашиваем себя, отдали бы мы его своей маме или ребёнку. Если нет, переделываем.",
      fact1: "с 2022 года", fact2: "2 зала · 25 мест", fact3: "открытая кухня", fact4: "100% халяль",
      aboutFounders: "Кто за этим стоит", capTeam: "Наша команда",
      foundersText: "Азамат и Гульнур основали Adele. Азамат отвечает за вкус и стандарты качества и сам выходит на смены. Гульнур ведёт закупки и поставщиков, поэтому продукты всегда свежие, а цены честные.",
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
      sent: "Открываем WhatsApp, нажмите «Отправить» в чате", clear: "Очистить корзину",
      langBtn: "ҚАЗ", langAria: "Қазақ тіліне ауысу"
    },
    kk: {
      cart: "Себет", heroTitle: "Бүкіл отбасыңызға кешкі ас дәл сіз айтқан уақытқа",
      heroSub: "Қандыағаш · күн сайын " + CFG.open + "-" + CFG.close,
      toMenu: "Мәзірді қарау", search: "Іздеу: филадельфия, пепперони…",
      nothing: "Ештеңе табылмады. Басқа атауды көріңіз.",
      reviews: "Қонақтардың пікірлері", tagline: "Пицца · Роллдар · Жеткізу", workDaily: "Күн сайын жұмыс істейміз",
      reviewsNote: "Қонақтарымыздың 2GIS-тегі шынайы пікірлері", leaveReview: "2GIS-те пікір қалдыру",
      allReviews: "Барлық пікірлер", heroReviews: "Қонақтар не дейді", reviewsChip: "★ Пікірлер",
      qAddress: "Мекенжай мен кесте", qWrite: "WhatsApp-қа жазу", qCall: "Қоңырау шалу", toBusiness: "Компанияларға",
      iAddress: "Мекенжай", iHours: "Жұмыс уақыты", iDelivery: "Жеткізу", iPickup: "Өзім алып кетемін",
      iDeliveryText: "Бүкіл Қандыағаш бойынша. Құны ауданға байланысты, оны оператор нақтылайды.",
      iPickupText: "Тапсырысты кафеден өзіңіз алып кете аласыз. Дайын болғанда жазамыз.",
      iMap: "2GIS картасынан ашу", iDaily: "Күн сайын", waHello: "Сәлеметсіз бе! Тапсырыс бергім келеді.",
      photoNote: "Тағам суреттері берілуінен сәл өзгеше болуы мүмкін: безендіру қаптамаға байланысты, ал құрамы мен салмағы әрқашан бірдей.",
      bizTitle: "Компанияларға", bizNote: "Ұжымға түскі ас, фуршет және дүкендерге жеткізу. Ұсынысты жүктеп алыңыз немесе бізге жазыңыз.",
      bizPdf: "Ұсынысты жүктеу (PDF)", bizWrite: "WhatsApp-та талқылау", bizChip: "Компанияларға", prev: "Артқа", next: "Алға",
      heroKicker: "Суши, ролл және пицца жеткізу", heroPromise: "минут дәлдікпен айтқан уақытқа · ашық ас үйде дайындаймыз",
      promosTitle: "Акциялар", faqTitle: "Жиі қойылатын сұрақтар", faqChip: "Сұрақтар",
      lunchTitle: "Бизнес-ланчтар", lunchSub: "Түскі асқа тиімді жиынтықтар: 2 350 ₸-ге дейін үнем.", lunchOnly: "Тек жұмыс күндері",
      moreVariants: "басқа нұсқалар", inCart: "Себетте бар",
      sWaTitle: "WhatsApp-қа жазыңыз", sWaFast: "5 минутта жауап береміз, қарбалас уақытта да", sWaHow: "Геолокация жіберсеңіз, курьер қоңырау шалмайды",
      sCallTitle: "Бізге қоңырау шалыңыз", liveText: "Тапсырысыңыздың қалай дайындалатынын көріңіз", fContacts: "Байланыс", fSocial: "Әлеуметтік желілер",
      lunchNow: "Қазір қолжетімді", lunchLater: "Қазір қолжетімсіз, Дс-Бс күтеміз", save: "Үнем",
      navMenu: "Мәзір", navPromos: "Акциялар", navAbout: "Біз туралы", navReviews: "Пікірлер", navBiz: "Компанияларға", navFaq: "Сұрақтар",
      ts1: "2022 жылдан бері", ts2: "ашық ас үй", ts3: "100% халал", ts4: "TikTok-та эфир", aboutTrust: "Отбасылар бізге неге сенеді",
      stepsTitle: "Себет → WhatsApp → кешкі ас есігіңізде", stepsNote: "Тіркелусіз және қосымшасыз.",
      step1t: "Себетті толтырыңыз", step1d: "Тағамдарды немесе компанияға комбо таңдаңыз.",
      step2t: "Уақыт пен мекенжайды жазыңыз", step2d: "WhatsApp-қа геолокация жіберіңіз, курьер қоңырау шалмайды.",
      step3t: "Шотты төлеп, күтіңіз", step3d: "Kaspi немесе Halyk шотын жібереміз. Айтқан уақытыңызға ±10 минутта жеткіземіз.",
      trustTitle: "Отбасылар бізге неге сенеді", trustNote: "Бізде жасыратын ештеңе жоқ, сондықтан ас үй ашық.",
      tr1t: "Тапсырысыңыздың қалай дайындалатыны көрінеді", tr1d: "Ашық ас үй және жұма мен жексенбі 19:00-де TikTok-тағы тікелей эфирлер. Тапсырыстарды атымен атаймыз.",
      tr2t: "Халал және тазалық", tr2d: "Барлық өнім халал. Форма, қолғап, кепка әр эфирде көрінеді.",
      tr3t: "Саше тек бізде", tr3d: "Бүкіл қаладан іздеп келетін фирмалық тағам.",
      tr4t: "Иесі өзі ас үйде", tr4d: "Азамат ауысымға өзі шығып, әр қорап үшін жауап береді.",
      aboutKicker: "Біз туралы", aboutTitle: "Қандыағашты дәмдірек етеміз", aboutLead: "күн сайын, әр тапсырыспен",
      aboutP1: "Adele Жастық 44-тегі жайлы кафе. Біз 2022 жылдың 28 қыркүйегінде ашылдық және дәмді суши мен пицца үшін Ақтөбеге барудың қажеті болмасын деп тырысамыз.",
      aboutP2: "Өз отбасымызға дайындағандай дайындаймыз: балғын өнімдерден, салмасын үнемдемей. Басты ережеміз «Өзімізге»: тапсырысты берер алдында өзімізден сұраймыз: мұны анама не балама берер ме едім? Жоқ болса, қайта жасаймыз.",
      fact1: "2022 жылдан бері", fact2: "2 зал · 25 орын", fact3: "ашық ас үй", fact4: "100% халал",
      aboutFounders: "Мұның артында кім тұр", capTeam: "Біздің команда",
      foundersText: "Азамат пен Гүлнұр Adele-дің негізін қалаған. Азамат дәм мен сапа стандарттарына жауап береді және ауысымға өзі шығады. Гүлнұр сатып алу мен жеткізушілерді басқарады, сондықтан өнім әрқашан балғын, баға әділ.",
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
      sent: "WhatsApp ашылуда, чатта «Жіберу» түймесін басыңыз", clear: "Себетті тазалау",
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
    var old = !it.v && it.old > price ? '<s class="price-old">' + money(it.old) + "</s>" : "";
    return '<span class="price">' + money(price) + old + "</span>" + ctrl;
  }

  function cardHtml(it, icon) {
    var media = it.img
      ? (it.fit === "contain" ? '<img class="bg" src="' + esc(it.img) + '" alt="" aria-hidden="true" loading="lazy">' : "") +
        '<img class="main" src="' + esc(it.img) + '" alt="' + esc(name(it)) + '"' +
          (it.zoom ? ' style="transform:scale(' + Number(it.zoom) + ')"' : "") + ' loading="lazy" decoding="async">'
      : '<div class="ph">' + ICONS[icon || "roll"] + "</div>";
    // На карточке только фото, название и цена. Описание и варианты открываются в окне блюда.
    var sel = it.v ? (state.sel[it.id] || 0) : null;
    var varNote = it.v && it.v.length > 1 ? '<p class="card__var">' + esc(vlabel(it.v[sel])) + " · " + esc(t("moreVariants")) + "</p>" : "";
    return '<article class="card" data-id="' + it.id + '">' +
      '<button type="button" class="card__open" data-open aria-label="' + esc(name(it)) + '">' +
        '<div class="card__media' + (it.fit === "contain" ? " is-contain" : "") + (it.shape ? " card__media--" + it.shape : "") + '">' + media +
          (it.old > it.p ? '<span class="save-badge">' + esc(t("save")) + " " + money(it.old - it.p) + "</span>" : "") + "</div>" +
      "</button>" +
      '<div class="card__body">' +
        '<h3 class="card__name" data-open>' + esc(name(it)) + "</h3>" +
        varNote +
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

  /* Business lunch: banner with schedule and "available now" status (Kazakhstan time, UTC+5) */
  function lunchOpenNow() {
    var kz = new Date(Date.now() + 5 * 3600 * 1000);
    var day = kz.getUTCDay(), min = kz.getUTCHours() * 60 + kz.getUTCMinutes();
    return day >= 1 && day <= 4 && min >= 11 * 60 && min < 16 * 60;
  }
  function lunchHeadHtml(note) {
    var open = lunchOpenNow();
    return '<div class="lunch-head">' +
      '<div class="lunch-head__text"><h2 class="cat__title">' + esc(t("lunchTitle")) + "</h2>" +
      "<p>" + esc(t("lunchSub")) + "</p></div>" +
      '<div class="lunch-head__time">' +
        '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M12 7v5l3 2"/></svg>' +
        '<span><b>' + esc(t("lunchOnly")) + "</b><small>" + esc(note || "") + "</small></span></div>" +
      '<span class="lunch-head__status' + (open ? " is-open" : "") + '">' + esc(open ? t("lunchNow") : t("lunchLater")) + "</span>" +
      "</div>";
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
      var note = state.lang === "kk" && cat.notek ? cat.notek : cat.note;
      var head = cat.id === "lunch" ? lunchHeadHtml(note) :
        '<h2 class="cat__title">' + esc(name(cat)) + "</h2>" + (note ? '<p class="cat__note">' + esc(note) + "</p>" : "");
      html += '<section class="cat' + (cat.id === "lunch" ? " cat--lunch" : "") + '" id="cat-' + cat.id + '">' + head +
        gridsHtml(items, cat.icon) + "</section>";
    });
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
    var it = ITEMS[id];
    $(".card__foot", card).innerHTML = cardFootHtml(it);
    var vn = $(".card__var", card);
    if (vn && it.v) vn.textContent = vlabel(it.v[state.sel[id] || 0]) + " · " + t("moreVariants");
  }

  menuEl.addEventListener("click", function (e) {
    var card = e.target.closest(".card"); if (!card) return;
    var id = card.getAttribute("data-id"), it = ITEMS[id];
    var act = e.target.closest("[data-act]");
    if (act) {
      var k = keyOf(id, it.v ? (state.sel[id] || 0) : null);
      changeQty(k, act.getAttribute("data-act") === "inc" ? 1 : -1, true);
      return;
    }
    if (e.target.closest("[data-open]")) openDish(id);
  });

  /* ---------------- dish sheet (как в Glovo) ---------------- */
  var dish = { id: null, vi: null, qty: 1 }, dishLastFocus = null;
  function dishPrice() { var it = ITEMS[dish.id]; return it.v ? it.v[dish.vi].p : it.p; }
  function renderDish() {
    var it = ITEMS[dish.id], d = desc(it), price = dishPrice();
    $("#dishImg").src = it.img || ""; $("#dishImg").alt = name(it); $("#dishImg").hidden = !it.img;
    $("#dishName").textContent = name(it);
    $("#dishDesc").textContent = d; $("#dishDesc").hidden = !d;
    var old = !it.v && it.old > price ? it.old : 0;
    $("#dishPrice").innerHTML = money(price) + (old ? ' <s>' + money(old) + "</s>" : "");
    $("#dishSave").hidden = !old; if (old) $("#dishSave").textContent = t("save") + " " + money(old - price);
    $("#dishVariants").hidden = !it.v;
    $("#dishVariants").innerHTML = it.v ? it.v.map(function (v, i) {
      return '<button type="button" class="dish-var' + (i === dish.vi ? " is-active" : "") + '" data-vi="' + i + '">' +
        "<span>" + esc(vlabel(v)) + "</span><b>" + money(v.p) + "</b></button>";
    }).join("") : "";
    $("#dishQty").textContent = dish.qty;
    $("#dishMinus").disabled = dish.qty <= 1;
    $("#dishAddLabel").textContent = t("add") + " · " + money(price * dish.qty);
    var inCart = state.cart[keyOf(dish.id, dish.vi)] || 0;
    $("#dishInCart").hidden = !inCart; if (inCart) $("#dishInCart").textContent = t("inCart") + ": " + inCart;
  }
  function openDish(id) {
    var it = ITEMS[id];
    dish = { id: id, vi: it.v ? (state.sel[id] || 0) : null, qty: 1 };
    renderDish();
    dishLastFocus = document.activeElement;
    $("#dishOverlay").hidden = false; $("#dishSheet").classList.add("is-open");
    $("#dishSheet").setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden";
    $("#dishSheet .dish__scroll").scrollTop = 0;
    setTimeout(function () { $("#dishClose").focus(); }, 50);
  }
  function closeDish() {
    if (!dish.id) return;
    $("#dishOverlay").hidden = true; $("#dishSheet").classList.remove("is-open");
    $("#dishSheet").setAttribute("aria-hidden", "true"); document.body.style.overflow = "";
    dish.id = null; if (dishLastFocus) dishLastFocus.focus();
  }
  $("#dishClose").addEventListener("click", closeDish);
  $("#dishOverlay").addEventListener("click", closeDish);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && dish.id) closeDish(); });
  $("#dishVariants").addEventListener("click", function (e) {
    var b = e.target.closest("[data-vi]"); if (!b) return;
    dish.vi = Number(b.getAttribute("data-vi")); renderDish();
  });
  $("#dishMinus").addEventListener("click", function () { if (dish.qty > 1) { dish.qty--; renderDish(); } });
  $("#dishPlus").addEventListener("click", function () { if (dish.qty < 99) { dish.qty++; renderDish(); } });
  $("#dishAdd").addEventListener("click", function () {
    var id = dish.id, it = ITEMS[id], k = keyOf(id, dish.vi), q = dish.qty;
    if (it.v) state.sel[id] = dish.vi;
    state.cart[k] = Math.min((state.cart[k] || 0) + q, 99);
    save("cart", state.cart);
    closeDish(); refreshCard(id); renderCart(); toast(t("added"));
    var b = $("#cartBtn"); b.classList.remove("bump"); void b.offsetWidth; b.classList.add("bump");
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
      return n + ". " + l.item.n + (l.variant ? " (" + l.variant.l + ")" : "") + " × " + l.qty + " = " + money(l.price * l.qty).replace(/ /g, " ");
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
    var fo = $("#footerOpen"); if (fo) { fo.textContent = el.textContent; fo.className = "footer__open " + (isOpen ? "open" : "closed"); }
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

  /* ---------------- promos ---------------- */
  function renderPromos() {
    var today = new Date(Date.now() + 5 * 3600 * 1000).toISOString().slice(0, 10); // дата в Казахстане
    var list = (CFG.promos || []).filter(function (p) { return !p.until || p.until >= today; });
    $("#promos").hidden = !list.length;
    var lang = state.lang;
    $("#promoList").innerHTML = list.map(function (p) {
      var href = p.wa ? "https://wa.me/" + CFG.whatsapp + "?text=" + encodeURIComponent(p.wa) : (p.href || "#menu");
      return '<a class="promo" href="' + esc(href) + '"' + (p.wa ? ' target="_blank" rel="noopener"' : "") + ">" +
        '<div class="promo__media">' +
          (p.img ? '<img class="promo__img" src="' + esc(p.img) + '" alt="" loading="lazy" decoding="async">' : "") +
          '<span class="promo__tag">' + esc(p.tag[lang]) + "</span></div>" +
        '<div class="promo__body"><h3>' + esc(p.title[lang]) + "</h3><p>" + esc(p.text[lang]) + "</p>" +
        '<span class="promo__cta">' + esc(p.cta[lang]) + ' <span aria-hidden="true">→</span></span>' +
        "</div></a>";
    }).join("");
  }

  /* ---------------- FAQ ---------------- */
  function renderFaq() {
    var list = CFG.faq || [];
    $("#faq").hidden = !list.length;
    var lang = state.lang;
    $("#faqList").innerHTML = list.map(function (f) {
      return '<details class="faq__item"><summary>' + esc(f.q[lang]) + '<span class="faq__plus" aria-hidden="true"></span></summary>' +
        "<p>" + esc(f.a[lang]) + "</p></details>";
    }).join("");
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
      // если браузер не анимирует прокрутку - сдвигаем сразу
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
    fillInfo(); renderStatus(); renderMenu(); renderCart(); renderBusiness(); renderPromos(); renderFaq();
  }
  $("#langBtn").addEventListener("click", function () {
    state.lang = state.lang === "ru" ? "kk" : "ru"; save("lang", state.lang); applyLang();
  });

  /* ---------------- contact cards and stories ---------------- */
  // Drawn illustrations (own SVG, no third-party images)
  var ART = {
    pin: '<svg viewBox="0 0 200 170" aria-hidden="true"><defs>' +
      '<radialGradient id="gPin" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="#ff8a6b"/><stop offset=".45" stop-color="#e2412b"/><stop offset="1" stop-color="#8e1c12"/></radialGradient>' +
      '<radialGradient id="gClk" cx="35%" cy="30%" r="80%"><stop offset="0" stop-color="#ff7a5c"/><stop offset=".5" stop-color="#d63a26"/><stop offset="1" stop-color="#7d170e"/></radialGradient>' +
      '<radialGradient id="gFace" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#e9e2dc"/></radialGradient>' +
      '<radialGradient id="gSh" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#000" stop-opacity=".55"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient></defs>' +
      '<ellipse cx="96" cy="150" rx="78" ry="12" fill="url(#gSh)"/>' +
      '<circle cx="138" cy="98" r="40" fill="url(#gClk)"/><circle cx="138" cy="98" r="31" fill="url(#gFace)"/>' +
      '<g stroke="#b3271a" stroke-width="2.4" stroke-linecap="round"><path d="M138 72v4M138 120v4M112 98h4M160 98h4"/></g>' +
      '<path d="M138 98V80M138 98l13 8" stroke="#1d1b19" stroke-width="4.2" stroke-linecap="round"/><circle cx="138" cy="98" r="4" fill="#d63a26"/>' +
      '<path d="M70 20c-25 0-44 19-44 43 0 32 44 78 44 78s44-46 44-78c0-24-19-43-44-43z" fill="url(#gPin)"/>' +
      '<circle cx="70" cy="62" r="16" fill="#fff"/><circle cx="70" cy="62" r="7" fill="#d63a26"/>' +
      '<path d="M45 42c6-9 15-14 25-14" stroke="#fff" stroke-opacity=".55" stroke-width="5" stroke-linecap="round" fill="none"/></svg>',
    chat: '<svg viewBox="0 0 200 170" aria-hidden="true"><defs>' +
      '<radialGradient id="gWa" cx="35%" cy="30%" r="80%"><stop offset="0" stop-color="#7bf0a6"/><stop offset=".5" stop-color="#25c463"/><stop offset="1" stop-color="#0f7a3a"/></radialGradient>' +
      '<radialGradient id="gRd" cx="35%" cy="30%" r="80%"><stop offset="0" stop-color="#ff8a6b"/><stop offset=".5" stop-color="#e2412b"/><stop offset="1" stop-color="#8e1c12"/></radialGradient>' +
      '<radialGradient id="gSh2" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#000" stop-opacity=".55"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient></defs>' +
      '<ellipse cx="100" cy="152" rx="74" ry="11" fill="url(#gSh2)"/>' +
      '<path d="M120 34h44a18 18 0 0 1 18 18v26a18 18 0 0 1-18 18h-8l-14 14v-14h-22a18 18 0 0 1-18-18V52a18 18 0 0 1 18-18z" fill="url(#gRd)"/>' +
      '<circle cx="128" cy="65" r="5.5" fill="#fff"/><circle cx="143" cy="65" r="5.5" fill="#fff"/><circle cx="158" cy="65" r="5.5" fill="#fff"/>' +
      '<circle cx="76" cy="92" r="52" fill="url(#gWa)"/><path d="M38 140l8-26" stroke="#25c463" stroke-width="16" stroke-linecap="round"/>' +
      '<path d="M76 58a34 34 0 0 0-29 51l-5 17 18-5a34 34 0 1 0 16-63z" fill="none" stroke="#fff" stroke-width="5"/>' +
      '<path d="M64 76c-2 0-4 2-4 6 0 6 5 13 10 18s12 9 17 9c4 0 7-2 7-5l-1-4-8-4-4 3c-4-2-8-6-10-10l3-4-4-8z" fill="#fff"/>' +
      '<path d="M48 64c6-8 14-12 22-13" stroke="#fff" stroke-opacity=".5" stroke-width="5" stroke-linecap="round" fill="none"/></svg>',
    phone: '<svg viewBox="0 0 200 170" aria-hidden="true"><defs>' +
      '<linearGradient id="gPh" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff7a5c"/><stop offset=".55" stop-color="#d63a26"/><stop offset="1" stop-color="#7d170e"/></linearGradient>' +
      '<linearGradient id="gScr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a3330"/><stop offset="1" stop-color="#14110f"/></linearGradient>' +
      '<radialGradient id="gSh3" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#000" stop-opacity=".55"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient></defs>' +
      '<ellipse cx="96" cy="152" rx="70" ry="11" fill="url(#gSh3)"/>' +
      '<g transform="rotate(-14 96 86)"><rect x="62" y="18" width="70" height="132" rx="16" fill="url(#gPh)"/>' +
      '<rect x="69" y="30" width="56" height="104" rx="9" fill="url(#gScr)"/>' +
      '<circle cx="97" cy="76" r="18" fill="#25c463"/><path d="M90 69c-1 0-2 1-2 3 0 4 3 8 6 11s7 6 10 6c2 0 4-1 4-3l-1-3-5-2-2 2c-3-1-5-4-6-6l2-2-2-5z" fill="#fff"/>' +
      '<rect x="80" y="110" width="34" height="8" rx="4" fill="#d63a26"/><rect x="88" y="23" width="18" height="3" rx="1.5" fill="#7d170e"/></g>' +
      '<g fill="none" stroke="#ff7a5c" stroke-width="5" stroke-linecap="round"><path d="M150 52a26 26 0 0 1 0 36"/><path d="M162 40a42 42 0 0 1 0 60" stroke-opacity=".6"/><path d="M40 60a26 26 0 0 0 0 36" stroke-opacity=".6"/></g></svg>'
  };
  $$("[data-art]").forEach(function (el) { el.innerHTML = ART[el.getAttribute("data-art")]; });

  function addrText() { return CFG.address ? CFG.address[state.lang] : CFG.city[state.lang]; }
  function hoursText() { return t("iDaily") + ", " + CFG.open + "-" + CFG.close; }
  function waHref() { return "https://wa.me/" + CFG.whatsapp + "?text=" + encodeURIComponent(t("waHello")); }
  function stories() {
    return [
      { art: "pin", title: t("qAddress"), lines: [addrText(), hoursText(), t("iDeliveryText")], btn: t("iMap"), href: CFG.map || CFG.twogis, ext: true },
      { art: "chat", title: t("sWaTitle"), lines: [CFG.phoneLabel, t("sWaFast"), t("sWaHow")], btn: t("qWrite"), href: waHref(), ext: true },
      { art: "phone", title: t("sCallTitle"), lines: [CFG.phoneLabel, hoursText()], btn: t("qCall"), href: "tel:" + CFG.phone, ext: false }
    ];
  }
  function fillInfo() {
    $("#navWa").href = waHref();
    $("#navAddr").textContent = addrText();
    $("#navHours").textContent = hoursText();
  }

  var sto = { i: 0, timer: null, start: 0, open: false, lastFocus: null };
  var STORY_MS = 7000;
  function showStory(i) {
    var list = stories();
    if (i < 0) i = 0;
    if (i >= list.length) { closeStory(); return; }
    sto.i = i;
    var s = list[i];
    $("#storyArt").innerHTML = ART[s.art];
    $("#storyTitle").textContent = s.title;
    $("#storyLines").innerHTML = s.lines.map(function (l, k) { return "<p" + (k === 0 ? ' class="is-main"' : "") + ">" + esc(l) + "</p>"; }).join("");
    var btn = $("#storyBtn"); btn.textContent = s.btn; btn.href = s.href || "#";
    if (s.ext) { btn.target = "_blank"; btn.rel = "noopener"; } else { btn.removeAttribute("target"); }
    $("#storyBars").innerHTML = list.map(function (_, k) {
      return '<span class="story__bar' + (k < i ? " is-done" : "") + '"><i' + (k === i ? ' class="is-run"' : "") + "></i></span>";
    }).join("");
    $("#story").classList.remove("is-anim"); void $("#story").offsetWidth; $("#story").classList.add("is-anim");
    clearTimeout(sto.timer);
    sto.timer = setTimeout(function () { showStory(sto.i + 1); }, STORY_MS);
  }
  function openStory(i) {
    sto.lastFocus = document.activeElement; sto.open = true;
    $("#story").hidden = false; document.body.style.overflow = "hidden";
    requestAnimationFrame(function () { $("#story").classList.add("is-open"); });
    showStory(i);
    setTimeout(function () { $("#storyClose").focus(); }, 60);
  }
  function closeStory() {
    if (!sto.open) return;
    sto.open = false; clearTimeout(sto.timer);
    $("#story").classList.remove("is-open"); document.body.style.overflow = "";
    setTimeout(function () { if (!sto.open) $("#story").hidden = true; }, 250);
    if (sto.lastFocus) sto.lastFocus.focus();
  }
  $$("[data-story]").forEach(function (b) {
    b.addEventListener("click", function () { openStory(Number(b.getAttribute("data-story"))); });
  });
  $("#storyClose").addEventListener("click", closeStory);
  $("#storyPrev").addEventListener("click", function () { showStory(sto.i - 1); });
  $("#storyNext").addEventListener("click", function () { showStory(sto.i + 1); });
  $("#story").addEventListener("click", function (e) { if (e.target === $("#story")) closeStory(); });
  $("#storyBtn").addEventListener("click", function () { clearTimeout(sto.timer); });
  document.addEventListener("keydown", function (e) {
    if (!sto.open) return;
    if (e.key === "Escape") closeStory();
    if (e.key === "ArrowRight") showStory(sto.i + 1);
    if (e.key === "ArrowLeft") showStory(sto.i - 1);
  });
  // свайп влево/вправо
  var sx = null;
  $("#story").addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; }, { passive: true });
  $("#story").addEventListener("touchend", function (e) {
    if (sx == null) return; var dx = e.changedTouches[0].clientX - sx; sx = null;
    if (Math.abs(dx) > 50) showStory(st.i + (dx < 0 ? 1 : -1));
  });

  /* ---------------- site menu (phone) ---------------- */
  var navOpenState = false;
  function setNav(open) {
    navOpenState = open;
    $("#sideNav").classList.toggle("is-open", open);
    $("#sideNav").setAttribute("aria-hidden", open ? "false" : "true");
    $("#navOpen").setAttribute("aria-expanded", open ? "true" : "false");
    $("#navOverlay").hidden = !open;
    document.body.style.overflow = open ? "hidden" : "";
    if (open) setTimeout(function () { $("#navClose").focus(); }, 50);
  }
  $("#navOpen").addEventListener("click", function () { setNav(true); });
  $("#navClose").addEventListener("click", function () { setNav(false); });
  $("#navOverlay").addEventListener("click", function () { setNav(false); });
  $$(".sidenav__links a").forEach(function (a) { a.addEventListener("click", function () { setNav(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && navOpenState) setNav(false); });
  $("#navCall").textContent = CFG.phoneLabel; $("#navCall").href = "tel:" + CFG.phone;
  $("#navIg").href = CFG.instagram; $("#navTt").href = CFG.tiktok; $("#navGis").href = CFG.map || CFG.twogis || "#";

  // контакты в подвале
  $("#footerPhoneNum").textContent = CFG.phoneLabel; $("#footerPhone").href = "tel:" + CFG.phone;
  $("#footerWaNum").textContent = "WhatsApp"; $("#footerWa").href = "https://wa.me/" + CFG.whatsapp;
  $("#liveLink").href = CFG.tiktok;
  $("#footerHours").textContent = CFG.open + "-" + CFG.close;
  $("#igLink").href = CFG.instagram; $("#ttLink").href = CFG.tiktok;
  $("#year").textContent = new Date().getFullYear();

  syncForm();
  applyLang();
  renderReviews();
  setInterval(renderStatus, 60000);
})();
