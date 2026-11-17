/* =====================================================================
   SHOP CONTENT — edit ONLY this object to reuse the site for another shop.
   Everything visible on the page (both languages) comes from here.
   See README.md for details.
   ===================================================================== */
const SHOP = {
  name: "MUUNS Cakes and Bakery",
  siteUrl: "https://tanish0212.github.io/muuns-cakes-demo/",

  phoneDisplay: "+971 56 740 2246",
  phoneHref: "tel:+971567402246",
  phoneIntl: "+971567402246",
  whatsappNumber: "971567402246",   // digits only, used for https://wa.me/<number>

  directionsUrl: "https://www.google.com/maps/search/?api=1&query=MUUNS+Cakes+and+Bakery+Bur+Dubai",
  reviewsUrl: "https://www.google.com/maps/search/?api=1&query=MUUNS+Cakes+and+Bakery+Bur+Dubai",
  mapEmbedUrl: "https://maps.google.com/maps?q=MUUNS%20Cakes%20and%20Bakery%2C%20Khalid%20Bin%20Al%20Waleed%20Rd%2C%20Bur%20Dubai&output=embed",

  // Used by structured data (search engines).
  address: {
    street: "Building 4, Khalid Bin Al Waleed Rd, near York International Hotel, Al Souq Al Kabeer, Bur Dubai",
    city: "Dubai",
    country: "AE",
  },

  // Opening hours in the shop's local time, 24h "HH:MM".
  // Index 0 = Sunday … 6 = Saturday. Use null for a closed day.
  // A closing time earlier than the opening time means "after midnight" (00:30 = 12:30 AM next day).
  timeZone: "Asia/Dubai",
  hours: [
    ["10:00", "00:30"], // Sunday
    ["10:00", "00:30"], // Monday
    ["10:00", "00:30"], // Tuesday
    ["10:00", "00:30"], // Wednesday
    ["10:00", "00:30"], // Thursday
    ["10:00", "00:30"], // Friday
    ["10:00", "00:30"], // Saturday
  ],
  // How the hours are grouped in the table (days use the same 0–6 numbering).
  hoursGroups: [
    { days: [0, 1, 2, 3, 4, 5, 6], key: "daily" },
  ],

  rating: { value: "4.7", count: "1,083" },

  showDemoBanner: true,          // set to false to remove the demo banner
  credit: "Tanish",              // footer "Website by ..." credit

  // Single-image slots. To use a real photo, put it in /images and change the path
  // (and the alt text). Portrait 4:5 photos fit best.
  images: {
    hero: {
      src: "images/hero-cake.svg",
      en: "Line illustration of a three-tier cake on a cake stand",
      ar: "رسم خطي لكعكة من ثلاث طبقات على حامل كيك",
    },
    made: {
      src: "images/cupcake.svg",
      en: "Line illustration of a cupcake with a cherry on top",
      ar: "رسم خطي لكب كيك تعلوه حبة كرز",
    },
    delivery: {
      src: "images/gift-box.svg",
      en: "Line illustration of a cake box tied with a ribbon",
      ar: "رسم خطي لعلبة كيك مربوطة بشريط",
    },
  },

  // "Our cakes" cards. `image` is the illustration / photo for that card.
  cakes: [
    {
      image: "images/birthday-cake.svg",
      en: { name: "Birthday cakes", desc: "Custom birthday cakes made to the design, colours and theme you choose.", alt: "Line illustration of a birthday cake with candles", ask: "a birthday cake" },
      ar: { name: "كيك أعياد الميلاد", desc: "كيك أعياد ميلاد حسب الطلب، بالتصميم والألوان والفكرة التي تختارها.", alt: "رسم خطي لكعكة عيد ميلاد مع شموع", ask: "كيك عيد ميلاد" },
    },
    {
      image: "images/tiered-cake.svg",
      en: { name: "Wedding & multi-tier cakes", desc: "Multi-tier cakes for weddings, anniversaries and special occasions.", alt: "Line illustration of a three-tier wedding cake with rings on top", ask: "a wedding or multi-tier cake" },
      ar: { name: "كيك الأعراس والطبقات", desc: "كيك متعدد الطبقات للأعراس والذكريات السنوية والمناسبات الخاصة.", alt: "رسم خطي لكعكة عرس من ثلاث طبقات تعلوها خاتمان", ask: "كيك عرس أو كيك متعدد الطبقات" },
    },
    {
      image: "images/piping-bag.svg",
      en: { name: "Theme cakes", desc: "Fully decorated theme cakes, recreated from your idea or a reference picture.", alt: "Line illustration of a piping bag decorating a cake", ask: "a theme cake" },
      ar: { name: "كيك بأفكار خاصة", desc: "كيك مزيّن بالكامل حسب الفكرة التي تريدها، أو مطابق لصورة ترسلها لنا.", alt: "رسم خطي لكيس تزيين يزيّن كعكة", ask: "كيك بفكرة خاصة" },
    },
    {
      image: "images/photo-cake.svg",
      en: { name: "Photo print cakes", desc: "Cakes printed with the photo of your choice.", alt: "Line illustration of a rectangular cake with a printed photo on top", ask: "a photo print cake" },
      ar: { name: "كيك بالصور", desc: "كيك مطبوع عليه الصورة التي تختارها.", alt: "رسم خطي لكعكة مستطيلة مطبوع عليها صورة", ask: "كيك بالصورة" },
    },
    {
      image: "images/shaped-cake.svg",
      en: { name: "Shaped & moulded cakes", desc: "Cakes shaped and moulded into the design you have in mind.", alt: "Line illustration of a heart-shaped cake topped with berries", ask: "a shaped cake" },
      ar: { name: "كيك بأشكال مجسّمة", desc: "كيك مشكّل ومجسّم على هيئة التصميم الذي في ذهنك.", alt: "رسم خطي لكعكة على شكل قلب تعلوها حبات توت", ask: "كيك بشكل مجسّم" },
    },
    {
      image: "images/cake-slice.svg",
      en: { name: "Cheesecakes, fruit & chocolate", desc: "Cheesecakes, fruit cakes and chocolate cakes for any occasion.", alt: "Line illustration of a layered cake slice with a strawberry on top", ask: "a cheesecake, fruit cake or chocolate cake" },
      ar: { name: "تشيز كيك وفواكه وشوكولاتة", desc: "تشيز كيك، وكيك الفواكه، وكيك الشوكولاتة لكل المناسبات.", alt: "رسم خطي لقطعة كيك بطبقات تعلوها حبة فراولة", ask: "تشيز كيك أو كيك فواكه أو شوكولاتة" },
    },
  ],

  // "Made your way" options (icon ids come from the sprite in index.html).
  options: [
    { icon: "i-noegg", en: "Eggless", ar: "بدون بيض" },
    { icon: "i-egg", en: "With eggs", ar: "بالبيض" },
    { icon: "i-leaf", en: "Vegan", ar: "نباتي" },
  ],

  // Cake gallery. Each tile is ONE file: drop a real photo in /images and change `src`.
  // `size`: "tall" spans two rows, "wide" spans two columns (wide screens only), "" is a normal square tile.
  gallery: [
    { src: "images/tiered-cake.svg", size: "tall", tone: "blush", en: "Wedding cakes", ar: "كيك الأعراس" },
    { src: "images/birthday-cake.svg", size: "", tone: "latte", en: "Birthday cakes", ar: "كيك أعياد الميلاد" },
    { src: "images/photo-cake.svg", size: "", tone: "caramel", en: "Photo print cakes", ar: "كيك بالصور" },
    { src: "images/piping-bag.svg", size: "tall", tone: "latte", en: "Theme cakes", ar: "كيك بأفكار خاصة" },
    { src: "images/shaped-cake.svg", size: "", tone: "caramel", en: "Shaped cakes", ar: "كيك بأشكال مجسّمة" },
    { src: "images/cake-slice.svg", size: "", tone: "blush", en: "Chocolate cakes", ar: "كيك الشوكولاتة" },
    { src: "images/hero-cake.svg", size: "wide", tone: "blush", en: "Multi-tier cakes", ar: "كيك متعدد الطبقات" },
    { src: "images/whisk.svg", size: "wide", tone: "latte", en: "Eggless & vegan", ar: "بدون بيض ونباتي" },
  ],

  // Real Google reviews — shown in English in both languages.
  reviews: [
    "I recently ordered an anniversary cake from MUUNS Cakes, and it was a lovely experience. The cake looked beautiful, tasted fresh, and was perfectly made for our special occasion.",
    "I sent over a reference image and very specific instructions and they replicated it perfectly.",
    "The cake was not only beautiful but also incredibly fresh, soft, and delicious.",
  ],

  text: {
    en: {
      pageTitle: "MUUNS Cakes and Bakery · Custom cakes in Bur Dubai",
      metaDescription: "Custom cakes for birthdays, weddings and special occasions in Bur Dubai. Eggless, with eggs or vegan. Send a reference picture and we recreate the design. Delivery across Dubai. Rated 4.7 on Google.",
      skip: "Skip to content",
      demoBanner: "Demo preview – made for MUUNS Cakes and Bakery. Not the official website yet.",
      brandSub: "Cakes & Bakery · Bur Dubai",
      brandSubShort: "Cakes & Bakery",
      navLabel: "Main",
      navCakes: "Cakes",
      navOrder: "How to order",
      navGallery: "Gallery",
      navReviews: "Reviews",
      navVisit: "Visit",
      langLabel: "Language",
      waMessage: "Hi MUUNS, I found you on your website and I'd like to order a custom cake.",
      waMessageAbout: "Hi MUUNS, I found you on your website and I'd like to ask about {service}.",
      waAria: "Message MUUNS Cakes and Bakery on WhatsApp",
      waCta: "Message us on WhatsApp",
      waShort: "WhatsApp",
      callCta: "Call us",
      callShort: "Call",
      directions: "Get Directions",
      newTab: "(opens in a new tab)",

      heroEyebrow: "Custom cake studio · Bur Dubai",
      heroTitle: ["Your idea,", "baked into a cake."],
      heroSub: "Custom cakes for birthdays, weddings and every special occasion. Send us a reference picture and we'll recreate the design, delivered across Dubai.",
      heroCta: "Send us your idea",
      ratingLine: "{rating} on Google · {count} reviews",
      chipPhoto: "Send a picture, we recreate it",
      chipDelivery: "Delivery across Dubai",

      statusOpen: "Open now · until {time}",
      statusOpensToday: "Closed now · opens today at {time}",
      statusOpensTomorrow: "Closed now · opens tomorrow at {time}",
      statusOpensLater: "Closed now · opens {day} at {time}",
      am: "AM",
      pm: "PM",
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      today: "Today",

      stripAria: "Quick facts",
      stripHoursLabel: "Open every day",
      stripDeliveryLabel: "Delivery",
      stripDelivery: "Across Dubai",
      stripMadeLabel: "Made your way",
      stripMade: "Eggless, with eggs or vegan",
      stripRatingLabel: "Google rating",
      stripRating: "{rating} / 5 · {count} reviews",
      groups: { daily: "Every day" },

      cakesKicker: "Our cakes",
      cakesTitle: "A cake for every celebration.",
      cakesIntro: "Every cake is made to order, designed around your occasion, your theme and your picture.",
      quoteCta: "Ask for a quote",
      quoteNote: "Prices aren't listed online. Message us on WhatsApp for a quote.",

      orderKicker: "How to order",
      orderTitle: "Three easy steps to your cake.",
      steps: [
        { title: "Send us your idea", text: "Message us on WhatsApp with your idea or a reference picture of the cake you'd like." },
        { title: "We confirm the details", text: "We confirm the design, size and price with you before we start." },
        { title: "Pick up or delivery", text: "Collect your cake from our shop in Bur Dubai, or get it delivered across Dubai." },
      ],
      orderCta: "Send your idea on WhatsApp",
      orderNote: "Have a picture of a cake you love? Send it and we'll recreate the design.",

      madeKicker: "Made your way",
      madeTitle: "Eggless, with eggs, or vegan.",
      madeText: "Tell us how you'd like your cake made and we'll bake it that way.",
      deliveryKicker: "Delivery",
      deliveryTitle: "Delivered across Dubai.",
      deliveryText: "Get your cake delivered, or pick it up from our shop in Bur Dubai. We're open every day until 12:30 AM.",

      galleryKicker: "Cake gallery",
      galleryTitle: "Made with love, made to order.",
      galleryIntro: "Birthdays, weddings, themes and photo cakes. Seen a design you love? Send us the picture.",

      reviewsKicker: "Reviews",
      reviewsTitle: "Loved across Dubai.",
      basedOn: "{count} reviews on Google",
      reviewLabel: "Google review",
      readMore: "Read more on Google",

      visitKicker: "Visit",
      visitTitle: "Find us in Bur Dubai.",
      addressLabel: "Address",
      addressLines: ["Building 4, Khalid Bin Al Waleed Rd", "Near York International Hotel", "Al Souq Al Kabeer, Bur Dubai, Dubai"],
      hoursLabel: "Opening hours",
      hoursNote: "Open late, until 12:30 AM (past midnight).",
      phoneLabel: "Phone & WhatsApp",
      mapTitle: "Map showing MUUNS Cakes and Bakery in Bur Dubai",

      ctaTitle: "Have a cake in mind?",
      ctaSub: "Send us your idea or a reference picture on WhatsApp, and we'll take it from there.",

      footerTag: "Custom cakes for every occasion, in Bur Dubai. Delivery across Dubai.",
      footerContact: "Contact",
      credit: "Website by {credit}",
    },
    ar: {
      pageTitle: "MUUNS للكيك والمخبوزات · كيك حسب الطلب في بر دبي",
      metaDescription: "كيك حسب الطلب لأعياد الميلاد والأعراس والمناسبات الخاصة في بر دبي. بدون بيض أو بالبيض أو نباتي. أرسل صورة مرجعية ونصنع التصميم نفسه. توصيل في جميع أنحاء دبي. تقييم 4.7 على جوجل.",
      skip: "انتقل إلى المحتوى",
      demoBanner: "نسخة تجريبية – صُممت خصيصًا لـ MUUNS للكيك والمخبوزات. ليست الموقع الرسمي بعد.",
      brandSub: "للكيك والمخبوزات · بر دبي",
      brandSubShort: "للكيك والمخبوزات",
      navLabel: "القائمة الرئيسية",
      navCakes: "الكيك",
      navOrder: "طريقة الطلب",
      navGallery: "المعرض",
      navReviews: "التقييمات",
      navVisit: "الموقع",
      langLabel: "اللغة",
      waMessage: "مرحبًا MUUNS، وجدتكم عبر موقعكم الإلكتروني وأودّ طلب كيك حسب الطلب.",
      waMessageAbout: "مرحبًا MUUNS، وجدتكم عبر موقعكم الإلكتروني وأودّ الاستفسار عن {service}.",
      waAria: "راسل MUUNS للكيك والمخبوزات عبر واتساب",
      waCta: "راسلنا عبر واتساب",
      waShort: "واتساب",
      callCta: "اتصل بنا",
      callShort: "اتصال",
      directions: "احصل على الاتجاهات",
      newTab: "(يفتح في نافذة جديدة)",

      heroEyebrow: "استوديو كيك حسب الطلب · بر دبي",
      heroTitle: ["فكرتك،", "نخبزها كعكة."],
      heroSub: "كيك حسب الطلب لأعياد الميلاد والأعراس وكل مناسبة خاصة. أرسل لنا صورة مرجعية ونصنع لك التصميم نفسه، مع التوصيل في جميع أنحاء دبي.",
      heroCta: "أرسل لنا فكرتك",
      ratingLine: "{rating} على جوجل · {count} تقييمًا",
      chipPhoto: "أرسل صورة ونصنعها لك",
      chipDelivery: "توصيل في جميع أنحاء دبي",

      statusOpen: "مفتوح الآن · حتى {time}",
      statusOpensToday: "مغلق الآن · يفتح اليوم الساعة {time}",
      statusOpensTomorrow: "مغلق الآن · يفتح غدًا الساعة {time}",
      statusOpensLater: "مغلق الآن · يفتح يوم {day} الساعة {time}",
      am: "صباحًا",
      pm: "مساءً",
      days: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
      today: "اليوم",

      stripAria: "معلومات سريعة",
      stripHoursLabel: "مفتوح يوميًا",
      stripDeliveryLabel: "التوصيل",
      stripDelivery: "في جميع أنحاء دبي",
      stripMadeLabel: "على طريقتك",
      stripMade: "بدون بيض أو بالبيض أو نباتي",
      stripRatingLabel: "التقييم على جوجل",
      stripRating: "{rating} من 5 · {count} تقييمًا",
      groups: { daily: "يوميًا" },

      cakesKicker: "الكيك لدينا",
      cakesTitle: "كعكة لكل مناسبة.",
      cakesIntro: "كل كعكة تُصنع حسب الطلب، وتُصمَّم وفق مناسبتك وفكرتك والصورة التي ترسلها.",
      quoteCta: "اطلب السعر",
      quoteNote: "الأسعار غير معروضة على الموقع. راسلنا عبر واتساب لمعرفة السعر.",

      orderKicker: "طريقة الطلب",
      orderTitle: "ثلاث خطوات سهلة لكعكتك.",
      steps: [
        { title: "أرسل لنا فكرتك", text: "راسلنا عبر واتساب بفكرتك أو بصورة مرجعية للكعكة التي تريدها." },
        { title: "نؤكد التفاصيل", text: "نؤكد معك التصميم والحجم والسعر قبل أن نبدأ." },
        { title: "استلام أو توصيل", text: "استلم كعكتك من محلنا في بر دبي، أو اطلب توصيلها في جميع أنحاء دبي." },
      ],
      orderCta: "أرسل فكرتك عبر واتساب",
      orderNote: "لديك صورة لكعكة أعجبتك؟ أرسلها ونصنع لك التصميم نفسه.",

      madeKicker: "على طريقتك",
      madeTitle: "بدون بيض، أو بالبيض، أو نباتي.",
      madeText: "أخبرنا كيف تريد كعكتك ونخبزها لك بهذه الطريقة.",
      deliveryKicker: "التوصيل",
      deliveryTitle: "نوصّل في جميع أنحاء دبي.",
      deliveryText: "اطلب توصيل كعكتك، أو استلمها من محلنا في بر دبي. نفتح يوميًا حتى 12:30 بعد منتصف الليل.",

      galleryKicker: "معرض الكيك",
      galleryTitle: "تُصنع بحب، وحسب الطلب.",
      galleryIntro: "أعياد ميلاد، وأعراس، وأفكار خاصة، وكيك بالصور. رأيت تصميمًا أعجبك؟ أرسل لنا الصورة.",

      reviewsKicker: "التقييمات",
      reviewsTitle: "محبوبة في أنحاء دبي.",
      basedOn: "{count} تقييمًا على جوجل",
      reviewLabel: "تقييم من جوجل",
      readMore: "اقرأ المزيد على جوجل",

      visitKicker: "زورونا",
      visitTitle: "تجدنا في بر دبي.",
      addressLabel: "العنوان",
      addressLines: ["المبنى 4، شارع خالد بن الوليد", "بالقرب من فندق يورك إنترناشونال", "السوق الكبير، بر دبي، دبي"],
      hoursLabel: "ساعات العمل",
      hoursNote: "نفتح حتى ساعة متأخرة، حتى 12:30 بعد منتصف الليل.",
      phoneLabel: "الهاتف وواتساب",
      mapTitle: "خريطة توضح موقع MUUNS للكيك والمخبوزات في بر دبي",

      ctaTitle: "لديك كعكة في بالك؟",
      ctaSub: "أرسل لنا فكرتك أو صورة مرجعية عبر واتساب، ونتولى الباقي.",

      footerTag: "كيك حسب الطلب لكل مناسبة، في بر دبي. توصيل في جميع أنحاء دبي.",
      footerContact: "تواصل معنا",
      credit: "تصميم الموقع: {credit}",
    },
  },
};

/* =====================================================================
   SITE LOGIC — no need to edit below this line.
   ===================================================================== */
(function () {
  "use strict";

  const LANG_KEY = "site-lang";
  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let lang = "en";

  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "en" || saved === "ar") lang = saved;
  } catch (e) { /* storage unavailable — default to English */ }

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const t = () => SHOP.text[lang];

  function fmt(str, extra) {
    let out = String(str)
      .replace(/\{rating\}/g, SHOP.rating.value)
      .replace(/\{count\}/g, SHOP.rating.count)
      .replace(/\{credit\}/g, SHOP.credit)
      .replace(/\{name\}/g, SHOP.name);
    if (extra) for (const [k, v] of Object.entries(extra)) out = out.split("{" + k + "}").join(v);
    return out;
  }

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      for (const [k, v] of Object.entries(attrs)) {
        if (v === null || v === undefined || v === false) continue;
        if (k === "class") node.className = v;
        else if (k === "text") node.textContent = v;
        else node.setAttribute(k, v === true ? "" : v);
      }
    }
    (children || []).forEach((c) => node.append(c));
    return node;
  }

  function icon(id, size, cls) {
    const s = el("span", { class: cls || "icon", "aria-hidden": "true" });
    const n = size || 20;
    s.innerHTML = '<svg viewBox="0 0 24 24" width="' + n + '" height="' + n + '"><use href="#' + id + '"/></svg>';
    return s;
  }

  function stars(value) {
    const wrap = el("span", { class: "stars", "aria-hidden": "true" });
    const v = parseFloat(value);
    for (let i = 0; i < 5; i++) {
      const fill = Math.max(0, Math.min(1, v - i));            // 4.7 → last star 70 % filled
      const id = "sg" + Math.random().toString(36).slice(2, 8);
      wrap.insertAdjacentHTML("beforeend",
        '<svg viewBox="0 0 20 20" width="16" height="16"><defs><linearGradient id="' + id + '"' +
        (root.dir === "rtl" ? ' x1="1" x2="0"' : "") + '><stop offset="' + fill + '" stop-color="currentColor"/>' +
        '<stop offset="' + fill + '" stop-color="currentColor" stop-opacity="0"/></linearGradient></defs>' +
        '<path d="M10 1.8l2.5 5.3 5.8.7-4.3 4 1.1 5.7L10 14.7l-5.1 2.8L6 11.8 1.7 7.8l5.8-.7Z" fill="url(#' + id + ')" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>');
    }
    return wrap;
  }

  const ltr = (text) => el("span", { dir: "ltr", class: "ltr", text });

  /* ---------- WhatsApp links ---------- */
  function waUrl(service) {
    const tx = t();
    const msg = service ? fmt(tx.waMessageAbout, { service }) : tx.waMessage;
    return "https://wa.me/" + SHOP.whatsappNumber + "?text=" + encodeURIComponent(msg);
  }

  /* ---------- Hours + open / closed badge (shop time zone, handles past-midnight closing) ---------- */
  const toMin = (hhmm) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };

  function timeLabel(hhmm) {
    const tx = t();
    const [h, m] = hhmm.split(":").map(Number);
    const h12 = h % 12 === 0 ? 12 : h % 12;
    return h12 + (m ? ":" + String(m).padStart(2, "0") : "") + " " + (h < 12 ? tx.am : tx.pm);
  }

  // [openMin, closeMin] for a day; closeMin > 1440 when the shop closes after midnight.
  function windowFor(day) {
    const h = SHOP.hours[day];
    if (!h) return null;
    const o = toMin(h[0]);
    let c = toMin(h[1]);
    if (c <= o) c += 1440;
    return [o, c];
  }

  function nowInShopTZ() {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: SHOP.timeZone, weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23",
    }).formatToParts(window.__NOW__ || new Date());
    const get = (type) => parts.find((p) => p.type === type).value;
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
    return { day, min: (Number(get("hour")) % 24) * 60 + Number(get("minute")) };
  }

  function shopStatus() {
    const now = nowInShopTZ();
    const yDay = (now.day + 6) % 7;
    const y = windowFor(yDay);
    if (y && y[1] > 1440 && now.min < y[1] - 1440) {
      return { open: true, key: "statusOpen", time: SHOP.hours[yDay][1], day: yDay };
    }
    const w = windowFor(now.day);
    if (w && now.min >= w[0] && now.min < w[1]) {
      return { open: true, key: "statusOpen", time: SHOP.hours[now.day][1], day: now.day };
    }
    if (w && now.min < w[0]) {
      return { open: false, key: "statusOpensToday", time: SHOP.hours[now.day][0], day: now.day };
    }
    for (let i = 1; i <= 7; i++) {
      const d = (now.day + i) % 7;
      if (SHOP.hours[d]) {
        return { open: false, key: i === 1 ? "statusOpensTomorrow" : "statusOpensLater", time: SHOP.hours[d][0], day: d };
      }
    }
    return { open: false, key: "statusOpensToday", time: "00:00", day: now.day };
  }

  function rangeLabel(day) {
    const h = SHOP.hours[day];
    return timeLabel(h[0]) + " – " + timeLabel(h[1]);
  }
  const ltrIfEn = (text) => (lang === "ar" ? document.createTextNode(text) : ltr(text));

  // Which group the "business day" belongs to (before closing time after midnight = still yesterday).
  function businessDay() {
    const now = nowInShopTZ();
    const yDay = (now.day + 6) % 7;
    const y = windowFor(yDay);
    return (y && y[1] > 1440 && now.min < y[1] - 1440) ? yDay : now.day;
  }

  function renderStatus() {
    const tx = t();
    const s = shopStatus();
    const text = fmt(tx[s.key], { time: timeLabel(s.time), day: tx.days[s.day] });
    $$(".js-status").forEach((node) => {
      node.dataset.state = s.open ? "open" : "closed";
      $(".status-text", node).textContent = text;
    });
    const today = businessDay();
    $$(".js-hours tr").forEach((row) => {
      const isToday = row.dataset.days.split(",").map(Number).includes(today);
      row.classList.toggle("is-today", isToday && SHOP.hoursGroups.length > 1);
      const flag = $(".today-flag", row);
      if (flag) flag.hidden = !(isToday && SHOP.hoursGroups.length > 1);
    });
  }

  function renderHours() {
    const tx = t();
    $(".js-hours").replaceChildren(el("tbody", null, SHOP.hoursGroups.map((g) => el("tr", { "data-days": g.days.join(",") }, [
      el("th", { scope: "row" }, [
        document.createTextNode(tx.groups[g.key] + " "),
        el("span", { class: "today-flag", text: tx.today, hidden: true }),
      ]),
      el("td", null, [ltrIfEn(rangeLabel(g.days[0]))]),
    ]))));
    const first = SHOP.hoursGroups[0];
    $(".js-strip-hours").replaceChildren(ltrIfEn(rangeLabel(first.days[0])));
    $(".js-footer-hours").replaceChildren(...SHOP.hoursGroups.map((g) =>
      el("span", { class: "block" }, [document.createTextNode(tx.groups[g.key] + " · "), ltrIfEn(rangeLabel(g.days[0]))])));
  }

  /* ---------- Render ---------- */
  function renderText() {
    const tx = t();
    $$("[data-t]").forEach((node) => { if (typeof tx[node.dataset.t] === "string") node.textContent = fmt(tx[node.dataset.t]); });
    $$("[data-shop]").forEach((node) => { node.textContent = SHOP[node.dataset.shop]; });
    $$("[data-t-aria]").forEach((node) => { node.setAttribute("aria-label", fmt(tx[node.dataset.tAria])); });

    $$(".js-tel").forEach((a) => { a.href = SHOP.phoneHref; });
    $$(".js-wa").forEach((a) => { a.href = waUrl(); a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-dir").forEach((a) => { a.href = SHOP.directionsUrl; a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-reviews").forEach((a) => { a.href = SHOP.reviewsUrl; a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-newtab").forEach((n) => { n.textContent = " " + tx.newTab; });
    $$(".js-phone").forEach((n) => { n.replaceChildren(ltr(SHOP.phoneDisplay)); });

    document.title = tx.pageTitle;
    const md = $('meta[name="description"]');
    if (md) md.setAttribute("content", tx.metaDescription);

    const banner = $(".demo-banner");
    if (banner) banner.hidden = !SHOP.showDemoBanner;

    // Hero headline: one line per entry, last line in the accent style.
    $(".js-hero-title").replaceChildren(...tx.heroTitle.map((line, i) =>
      el("span", { class: "line" + (i === tx.heroTitle.length - 1 ? " accent" : ""), style: "--i:" + i, text: line + " " })));

    // Rating
    $$(".js-rating").forEach((a) => {
      a.replaceChildren(stars(SHOP.rating.value), el("span", { text: fmt(tx.ratingLine) }), el("span", { class: "visually-hidden js-newtab", text: " " + tx.newTab }));
    });
    $$(".js-stars").forEach((n) => n.replaceChildren(stars(SHOP.rating.value)));
    $$(".js-score").forEach((n) => { n.textContent = SHOP.rating.value; });

    // Single image slots
    $$(".js-img").forEach((img) => {
      const slot = SHOP.images[img.dataset.img];
      if (img.getAttribute("src") !== slot.src) img.src = slot.src;
      img.alt = slot[lang];
    });

    // Cakes
    $(".js-cakes").replaceChildren(...SHOP.cakes.map((c, i) => el("li", { class: "cake reveal", style: "--d:" + (i % 3) * 80 + "ms" }, [
      el("div", { class: "cake-media" }, [
        el("img", { src: c.image, alt: c[lang].alt, width: 400, height: 500, loading: "lazy", decoding: "async" }),
      ]),
      el("div", { class: "cake-body" }, [
        el("span", { class: "cake-num", "aria-hidden": "true", text: String(i + 1).padStart(2, "0") }),
        el("h3", { class: "cake-name", text: c[lang].name }),
        el("p", { class: "cake-desc", text: c[lang].desc }),
        el("a", { class: "cake-link", href: waUrl(c[lang].ask), target: "_blank", rel: "noopener" }, [
          el("span", { text: tx.quoteCta }),
          el("span", { class: "visually-hidden", text: " – " + c[lang].name + " " + tx.newTab }),
          icon("i-arrow", 18, "icon flip"),
        ]),
      ]),
    ])));

    // Steps
    const stepIcons = ["i-wa", "i-check", "i-bag"];
    $(".js-steps").replaceChildren(...tx.steps.map((s, i) => el("li", { class: "step reveal", style: "--d:" + i * 100 + "ms" }, [
      el("div", { class: "step-mark" }, [icon(stepIcons[i], 26, "step-icon"), el("span", { class: "step-num", text: String(i + 1) })]),
      el("h3", { text: s.title }),
      el("p", { text: s.text }),
    ])));

    // Made-your-way options
    $(".js-options").replaceChildren(...SHOP.options.map((o) => el("li", null, [icon(o.icon, 22, "opt-icon"), el("span", { text: o[lang] })])));

    // Gallery
    $(".js-gallery").replaceChildren(...SHOP.gallery.map((g, i) => el("li", {
      class: "tile reveal tone-" + g.tone + (g.size ? " is-" + g.size : ""), style: "--d:" + (i % 4) * 70 + "ms",
    }, [
      el("figure", null, [
        el("img", { src: g.src, alt: g[lang], width: 400, height: 500, loading: "lazy", decoding: "async" }),
        el("figcaption", { text: g[lang] }),
      ]),
    ])));

    // Reviews (kept in English — real quotes)
    $(".js-reviews-list").replaceChildren(...SHOP.reviews.map((r, i) => el("li", { class: "review reveal", style: "--d:" + i * 90 + "ms" }, [
      el("figure", null, [
        quoteMark(),
        el("blockquote", { lang: "en", dir: "ltr" }, [el("p", { text: r })]),
        el("figcaption", null, [googleG(), el("span", { text: tx.reviewLabel })]),
      ]),
    ])));

    // Address
    $$(".js-address").forEach((n) => n.replaceChildren(...tx.addressLines.map((l) => el("span", { text: l }))));

    renderHours();

    const map = $(".js-map");
    if (!map.getAttribute("src")) map.setAttribute("src", SHOP.mapEmbedUrl);
    map.title = tx.mapTitle;

    $(".js-year").textContent = new Date().getFullYear();
    $$("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));

    renderStatus();
    observeReveals();
  }

  function quoteMark() {
    const s = el("span", { class: "quote-mark", "aria-hidden": "true" });
    s.innerHTML = '<svg viewBox="0 0 48 36" width="34" height="26"><path fill="currentColor" d="M0 36V22.4C0 9.6 6.2 2.2 18.6 0l2 4.6C13.8 6.6 10.6 10.4 10.2 16H19v20Zm27 0V22.4C27 9.6 33.2 2.2 45.6 0l2 4.6C40.8 6.6 37.6 10.4 37.2 16H46v20Z"/></svg>';
    return s;
  }

  function googleG() {
    const s = el("span", { class: "g-mark", "aria-hidden": "true" });
    s.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16"><path fill="#4285F4" d="M22.6 12.2c0-.8-.1-1.5-.2-2.2H12v4.2h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-1.9 3.3-4.8 3.3-8Z"/><path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.8c-1 .7-2.2 1.1-3.7 1.1-2.9 0-5.3-1.9-6.2-4.5H2.1v2.8A11 11 0 0 0 12 23Z"/><path fill="#FBBC05" d="M5.8 14.1a6.6 6.6 0 0 1 0-4.2V7.1H2.1a11 11 0 0 0 0 9.8l3.7-2.8Z"/><path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.6l3.2-3.2A11 11 0 0 0 2.1 7.1l3.7 2.8C6.7 7.3 9.1 5.4 12 5.4Z"/></svg>';
    return s;
  }

  function applyLang(next, persist) {
    lang = next;
    root.lang = next;
    root.dir = next === "ar" ? "rtl" : "ltr";
    renderText();
    if (persist) { try { localStorage.setItem(LANG_KEY, next); } catch (e) { /* ignore */ } }
  }

  /* ---------- Structured data (built from SHOP) ---------- */
  function addJsonLd() {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const data = {
      "@context": "https://schema.org",
      "@type": "Bakery",
      name: SHOP.name,
      url: SHOP.siteUrl,
      image: SHOP.siteUrl + "images/og-image.png",
      logo: SHOP.siteUrl + "images/logo.svg",
      telephone: SHOP.phoneIntl,
      address: {
        "@type": "PostalAddress",
        streetAddress: SHOP.address.street,
        addressLocality: SHOP.address.city,
        addressCountry: SHOP.address.country,
      },
      hasMap: SHOP.directionsUrl,
      areaServed: "Dubai",
      openingHoursSpecification: SHOP.hoursGroups.map((g) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: g.days.map((d) => dayNames[d]),
        opens: SHOP.hours[g.days[0]][0],
        closes: SHOP.hours[g.days[0]][1],
      })),
      aggregateRating: { "@type": "AggregateRating", ratingValue: SHOP.rating.value, bestRating: "5", reviewCount: String(SHOP.rating.count).replace(/\D/g, "") },
      makesOffer: SHOP.cakes.map((c) => ({ "@type": "Offer", itemOffered: { "@type": "Product", name: c.en.name } })),
    };
    document.head.append(el("script", { type: "application/ld+json", text: JSON.stringify(data) }));
  }

  /* ---------- Motion: reveal on scroll ---------- */
  let io = null;
  function observeReveals() {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      $$(".reveal").forEach((n) => n.classList.add("is-in"));
      return;
    }
    if (!io) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    }
    $$(".reveal:not(.is-in)").forEach((n) => io.observe(n));
  }

  /* ---------- Sticky header compacts on scroll ---------- */
  const header = $(".site-header");
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { header.classList.toggle("is-compact", window.scrollY > 24); ticking = false; });
  }

  /* ---------- Init ---------- */
  if (!reduceMotion) root.classList.add("motion");
  applyLang(lang, false);
  addJsonLd();
  $$("[data-lang]").forEach((b) => b.addEventListener("click", () => { if (b.dataset.lang !== lang) applyLang(b.dataset.lang, true); }));
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  setInterval(renderStatus, 60 * 1000);
})();
