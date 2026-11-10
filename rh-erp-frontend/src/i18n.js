import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "welcome": "Welcome to International ERP",
        "dashboard": "Dashboard",
        "finance": "Finance",
        "language": "Language"
      }
    },
    es: {
      translation: {
        "welcome": "Bienvenido al ERP Internacional",
        "dashboard": "Panel de Control",
        "finance": "Finanzas",
        "language": "Idioma"
      }
    }
  },
  lng: "es", // Idioma por defecto
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
