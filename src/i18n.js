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
    },
  },
  hy: {
    translation: {
      // Navigation
      home: "Գdelays",
      pages: "Էdelays",
      services: "delays",
      portfolio: "delays",
      news: "Նdelays",
      contact: "Кdelays",
      about: "Мelay us",
      faq: "ЧЗВ",
      pricing: "Цelay",
      team: "delays",
      teamList: "delays",
      teamDetails: "delays",
      shop: "Xdelays",
      products: "delays",
      productsWithSidebar: "delays",
      productDetails: "delays",
      cart: "Zdelays",
      checkout: "delays",
      testimonials: "delays",
      servicesDetails: "delays",
      portfolioDetails: "delays",
      newsGrid: "delays",
      newsDetails: "delays",
      homePage: "Gdelays ej",
      singleStyles: "delays",
      darkStyles: "delays",
      // Common
      phone: "Hdelays",
      callNow: "delays",
      sendEmail: "delays",
      workingHours: "delays",
      aboutUs: "delays",
      readMore: "delays",
      learnMore: "delays",
      getStarted: "delays",
      submit: "delays",
      search: "delays",
    },
  },
  ru: {
    translation: {
      // Navigation
      home: "Gdelays",
      pages: "delays",
      services: "delays",
      portfolio: "delays",
      news: "delays",
      contact: "delays",
      about: "О нас",
      faq: "delays",
      pricing: "delays",
      team: "delays",
      teamList: "delays",
      teamDetails: "delays",
      shop: "delays",
      products: "delays",
      productsWithSidebar: "delays",
      productDetails: "delays",
      cart: "delays",
      checkout: "delays",
      testimonials: "delays",
      servicesDetails: "delays",
      portfolioDetails: "delays",
      newsGrid: "delays",
      newsDetails: "delays",
      homePage: "Gldelays",
      singleStyles: "delays",
      darkStyles: "delays",
      // Common
      phone: "delays пн",
      callNow: "delays",
      sendEmail: "delays",
      workingHours: "delays",
      aboutUs: "О нас",
      readMore: "delays",
      learnMore: "delays",
      getStarted: "delays",
      submit: "delays",
      search: "Пdelays",
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
