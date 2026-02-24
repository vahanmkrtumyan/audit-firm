import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      home: "Home",
      pages: "Pages",
      services: "Services",
      portfolio: "Portfolio",
      news: "News",
      contact: "Contact",
      about: "About",
      faq: "FAQ",
      pricing: "Pricing",
      team: "Team",
      teamList: "Team List",
      teamDetails: "Team Details",
      shop: "Shop",
      products: "Products",
      productsWithSidebar: "Products with Sidebar",
      productDetails: "Product Details",
      cart: "Cart",
      checkout: "Checkout",
      testimonials: "Testimonials",
      servicesDetails: "Services Details",
      portfolioDetails: "Portfolio Details",
      newsGrid: "News Grid",
      newsDetails: "News Details",
      homePage: "Home page",
      singleStyles: "Single Styles",
      darkStyles: "Dark Styles",
      // Common
      phone: "Phone",
      callNow: "Call Now",
      sendEmail: "Send Email",
      workingHours: "Working Hours",
      aboutUs: "About Us",
      readMore: "Read More",
      learnMore: "Learn More",
      getStarted: "Get Started",
      submit: "Submit",
      search: "Search",
      readyToDiscover: "Ready to Discover More? Contact Us Today!",
      location: "Location",
      locationText: "Gyulbenkyan Street, Building 27, Area 5/1",
      contact: "Contact",
      audit: "Audit & Assurance",
      accounting: "Accounting & Taxation",
      financial: "Financial & Managerial Analysis",
      businessConsulting: "Business Consulting & Comprehensive Services",
      legal: "Legal Support",
      training: "Organization of Professional Courses"
    },
  },
  hy: {
    translation: {
      // Navigation
      home: "Գլխավոր",
      pages: "Էջեր",
      services: "Ծառայություններ",
      portfolio: "Պորտֆոլիո",
      news: "Նորություններ",
      contact: "Կապ",
      about: "Մեր մասին",
      faq: "Հաճախ տրվող հարցեր",
      pricing: "Գնային քայլեր",
      team: "Թիմ",
      teamList: "Թիմի ցուցակ",
      teamDetails: "Թիմի մանրամասներ",
      shop: "Խանութ",
      products: "Ապրանքներ",
      productsWithSidebar: "Ապրանքներ կողմնակի վահանակով",
      productDetails: "Ապրանքի մանրամասներ",
      cart: "Զամբյուղ",
      checkout: "Առաքման պրոցես",
      testimonials: "Կարծիքներ",
      servicesDetails: "Ծառայությունների մանրամասներ",
      portfolioDetails: "Պորտֆոլիոյի մանրամասներ",
      newsGrid: "Նորությունների ցանկ",
      newsDetails: "Նորությունների մանրամասներ",
      homePage: "Գլխավոր էջ",
      singleStyles: "Միակ ստիլներ",
      darkStyles: "Մութ ստիլներ",
      // Common
      phone: "Հեռախոս",
      callNow: "Զանգել հիմա",
      sendEmail: "Ուղղել էլ. փոստ",
      workingHours: "Աշխատանքային ժամեր",
      aboutUs: "Մեր մասին",
      readMore: "Կարդալ ավելին",
      learnMore: "Իմանալ ավելին",
      getStarted: "Սկսել",
      submit: "Ուղարկել",
      search: "Որոնել",
      readyToDiscover: "Պատրա՞ստ եք բացահայտել ավելին։ Կապվե՛ք մեզ հետ այսօր։",
      location: "Հասցե",
      locationText: "Գյուլբենկյան փողոց, 27 շենք, 5/1 տարածք",
      contact: "Կապ",
      audit: "Աուդիտ և հավաստիացում",
      accounting: "Հաշվապահական և հարկային հաշվառում",
      financial: "Ֆինանսական և կառավարչական վերլուծություն",
      businessConsulting: "Բիզնես խորհրդատվություն և համալիր սպասարկում",
      legal: "Իրավաբանական ուղեկցում",
      training: "Մասնագիտական դասընթացների կազմակերպում"
    },
  },
  ru: {
    translation: {
      // Navigation
      home: "Главная7",
      pages: "Страницы",
      services: "Услуги",
      portfolio: "Портфолио",
      news: "Новости",
      contact: "Контакты",
      about: "О нас",
      faq: "ЧЗВ",
      pricing: "Цены",
      team: "Команда",
      teamList: "Список команды",
      teamDetails: "Детали команды",
      shop: "Магазин",
      products: "Продукты",
      productsWithSidebar: "Продукты с боковой панелью",
      productDetails: "Детали продукта",
      cart: "Корзина",
      checkout: "Оформление заказа",
      testimonials: "Отзывы",
      servicesDetails: "Детали услуг",
      portfolioDetails: "Детали портфолио",
      newsGrid: "Сетка новостей",
      newsDetails: "Детали новости",
      homePage: "Главная страница",
      singleStyles: "Одиночные стили",
      darkStyles: "Темные стили1",
      // Common
      phone: "Телефон",
      callNow: "Позвонить сейчас",
      sendEmail: "Отправить электронное письмо",
      workingHours: "Рабочие часы",
      aboutUs: "О нас",
      readMore: "Читать далее",
      learnMore: "Узнать больше",
      getStarted: "Начать",
      submit: "Отправить",
      search: "Поиск",
      contact: "Контакт",
      readyToDiscover: "Готовы узнать больше? Свяжитесь с нами сегодня!",
      location: "Местоположение",
      locationText: "Улица Гюльбенкян, здание 27, площадь 5/1",
      audit: "Аудит и обеспечение достоверности",
      accounting: "Бухгалтерский и налоговый учет",
      financial: "Финансовый и управленческий анализ",
      businessConsulting: "Бизнес-консалтинг и комплексное обслуживание",
      legal: "Юридическое сопровождение",
      training: "Организация профессиональных курсов"
    },
  },
};

// Get saved language or default to Armenian
const savedLanguage =
  typeof window !== "undefined"
    ? localStorage.getItem("i18nextLng") || "hy"
    : "hy";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
  detection: {
    order: ["localStorage", "navigator"],
    caches: ["localStorage"],
  },
});

// Save language preference when it changes
i18n.on("languageChanged", (lng) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("i18nextLng", lng);
    document.documentElement.lang = lng;
  }
});

export default i18n;
