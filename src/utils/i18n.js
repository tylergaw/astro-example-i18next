import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en, es, fr } from "../locales";

// We export the lang for use in html attributes, css, logic, etc.
export const lang = process.env.LANGUAGE || "en";

// NOTE: Add all new locales to this object
const locales = { en, es, fr };

/*
  NOTE: This isn't necessary if you want to have namespaces in locale files
  We don't want to have to store namespace keys in the locale files since we're
  not relying on them. But, i18next needs to have at least the default namespace
  as a key. Here, we're munging the local objects a bit to make sure they all
  have the required {ns}.translation key (eg, en.translation = {...})
*/
const resources = Object.entries(locales).reduce((obj, entry) => {
  const [ns, translation] = entry;
  obj[ns] = { translation };
  return obj;
}, {});

i18n.use(initReactI18next).init({
  lng: lang,
  debug: true,
  fallbackLng: "en",
  // Since we're not using namespaces, we turn these off
  keySeparator: false,
  nsSeparator: false,
  interpolation: {
    escapeValue: false,
  },
  resources,
});

export default i18n;
