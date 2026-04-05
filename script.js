// Үш тілге арналған аудармалар объектісі
const translations = {

  ru: {
    title: 'Привет, я <span style="color:#f97316">Zhanuzak</span> 👋',
    'about-text': 'Я frontend разработчик и создаю современные сайты.',

    // Навигация
    navAbout: 'Обо мне',
    navServices: 'Услуги',
    navSkills: 'Навыки',
    navProjects: 'Проекты',
    navReviews: 'Отзывы',
    navContact: 'Контакты',

    // Заголовки разделов
    secAbout: 'Обо мне',
    secServices: 'Услуги и цены',
    secSkills: 'Навыки',
    secProjects: 'Проекты',
    secReviews: 'Отзывы клиентов',
    secContact: 'Контакты',

    // Кнопки
    btnCV: 'Скачать CV',
    btnTg: 'Telegram',

    // Статистика
    statProjects: 'Проектов',
    statClients: 'Клиентов',
    statYears: 'Год опыта',

    // Услуга 1
    srv1Title: 'Landing Page',
    srv1Desc: 'Одностраничный сайт для бизнеса или продукта',
    srv1Price: 'от 30 000 тг',
    srv1Days: '3–5 дней',

    // Услуга 2
    srv2Title: 'Сайт-визитка',
    srv2Desc: 'Многостраничный сайт с разделами и контактами',
    srv2Price: 'от 50 000 тг',
    srv2Days: '5–7 дней',

    // Услуга 3
    srv3Title: 'Верстка по макету',
    srv3Desc: 'Точная верстка по Figma-макету заказчика',
    srv3Price: 'от 20 000 тг',
    srv3Days: '2–4 дня',

    // Проекты
    descPS: 'Фриланс платформа с авторизацией, лентой заказов и чатом.',
    descLand: 'Сайт для практики и обучения программированию.',
    descPort: 'Этот сайт — моё портфолио.',
    live: 'Live сайт',

    // Отзывы
    rev1Text: '"Сайт сделал быстро и качественно. Всё точно по макету, остался очень доволен!"',
    rev1Job: 'Владелец кафе',
    rev2Text: '"Отличная работа! Адаптивный дизайн работает на всех устройствах. Рекомендую!"',
    rev2Job: 'Интернет-магазин',
    rev3Text: '"Сделал лендинг за 4 дня. Вносил правки без лишних вопросов. Буду обращаться ещё!"',
    rev3Job: 'Фитнес-тренер',

    // Контакты
    ctTitle: 'Готов к работе',
    ctSub: 'Напишите мне — отвечу быстро!',
  },

  en: {
    title: 'Hi, I\'m <span style="color:#f97316">Zhanuzak</span> 👋',
    'about-text': 'I am a frontend developer creating modern websites.',

    navAbout: 'About',
    navServices: 'Services',
    navSkills: 'Skills',
    navProjects: 'Projects',
    navReviews: 'Reviews',
    navContact: 'Contact',

    secAbout: 'About me',
    secServices: 'Services & Pricing',
    secSkills: 'Skills',
    secProjects: 'Projects',
    secReviews: 'Client Reviews',
    secContact: 'Contact',

    btnCV: 'Download CV',
    btnTg: 'Telegram',

    statProjects: 'Projects',
    statClients: 'Clients',
    statYears: 'Year exp.',

    srv1Title: 'Landing Page',
    srv1Desc: 'One-page website for business or product',
    srv1Price: 'from $70',
    srv1Days: '3–5 days',

    srv2Title: 'Business Website',
    srv2Desc: 'Multi-page site with sections and contacts',
    srv2Price: 'from $120',
    srv2Days: '5–7 days',

    srv3Title: 'Figma to HTML',
    srv3Desc: 'Pixel-perfect markup from your Figma design',
    srv3Price: 'from $50',
    srv3Days: '2–4 days',

    descPS: 'Freelance platform with auth, job feed and chat.',
    descLand: 'Site for coding practice and learning.',
    descPort: 'This site — my portfolio.',
    live: 'Live site',

    rev1Text: '"Fast and high-quality work. Everything matched the design perfectly!"',
    rev1Job: 'Cafe owner',
    rev2Text: '"Great job! Responsive design works on all devices. Highly recommend!"',
    rev2Job: 'Online store',
    rev3Text: '"Built the landing in 4 days. Made edits without any fuss. Will come back!"',
    rev3Job: 'Fitness trainer',

    ctTitle: 'Open to work',
    ctSub: 'Message me — I reply fast!',
  },

  kz: {
    title: 'Сәлем, мен <span style="color:#f97316">Zhanuzak</span> 👋',
    'about-text': 'Мен заманауи сайттар жасайтын frontend әзірлеушімін.',

    navAbout: 'Мен туралы',
    navServices: 'Қызметтер',
    navSkills: 'Дағдылар',
    navProjects: 'Жобалар',
    navReviews: 'Пікірлер',
    navContact: 'Байланыс',

    secAbout: 'Мен туралы',
    secServices: 'Қызметтер және бағалар',
    secSkills: 'Дағдылар',
    secProjects: 'Жобалар',
    secReviews: 'Клиент пікірлері',
    secContact: 'Байланыс',

    btnCV: 'CV жүктеу',
    btnTg: 'Telegram',

    statProjects: 'Жоба',
    statClients: 'Клиент',
    statYears: 'Жыл тәжіриб.',

    srv1Title: 'Landing Page',
    srv1Desc: 'Бизнес немесе өнім үшін бір беттік сайт',
    srv1Price: '30 000 тг-дан',
    srv1Days: '3–5 күн',

    srv2Title: 'Визитка сайт',
    srv2Desc: 'Бөлімдері мен байланысы бар көп беттік сайт',
    srv2Price: '50 000 тг-дан',
    srv2Days: '5–7 күн',

    srv3Title: 'Макет бойынша верстка',
    srv3Desc: 'Figma макеті бойынша дәл верстка',
    srv3Price: '20 000 тг-дан',
    srv3Days: '2–4 күн',

    descPS: 'Авторизациямен, тапсырыс лентасымен және чатпен фриланс платформасы.',
    descLand: 'Бағдарламалауды үйрену үшін сайт.',
    descPort: 'Бұл сайт — менің портфолиом.',
    live: 'Live сайт',

    rev1Text: '"Жылдам және сапалы жасады. Макетке дәлме-дәл, өте риза болдым!"',
    rev1Job: 'Кафе иесі',
    rev2Text: '"Керемет жұмыс! Адаптивті дизайн барлық құрылғыда жұмыс істейді!"',
    rev2Job: 'Интернет-дүкен',
    rev3Text: '"4 күнде лендинг жасады. Түзетулерді сұрақсыз енгізді. Қайта жүгінемін!"',
    rev3Job: 'Фитнес жаттықтырушы',

    ctTitle: 'Жұмысқа дайынмын',
    ctSub: 'Маған жазыңыз — жылдам жауап беремін!',
  }

};


// Тіл ауыстыру функциясы
function setLang(lang) {
  const d = translations[lang];

  // Тақырыпты ауыстырамыз (innerHTML — ішінде <span> бар)
  document.getElementById('title').innerHTML = d['title'];

  // Сипаттаманы ауыстырамыз (textContent — жай мәтін)
  document.getElementById('about-text').textContent = d['about-text'];

  // data-t атрибуты бар барлық элементтерді тауып мәтінін ауыстырамыз
  document.querySelectorAll('[data-t]').forEach(function(el) {
    var key = el.getAttribute('data-t');
    if (d[key]) el.textContent = d[key];
  });

  // Белсенді тіл батырмасын белгілейміз
  document.querySelectorAll('.lang-btns button').forEach(function(btn) {
    btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
  });
}


// Telegram ашу функциясы
function contact() {
  window.open('https://t.me/zhanuzak', '_blank');
}
