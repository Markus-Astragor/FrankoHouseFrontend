import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enNs1 from "./locales/en/ns1.json";
import uaNs1 from "./locales/ua/ns1.json";

i18n

  .use(initReactI18next)

  .init({
    debug: true,
    fallbackLng: "en",
    lng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          ns1: enNs1,
        },
      },
      ua: {
        translation: {
          ns1: uaNs1,
        },
      },
    },
  });

export default i18n;
