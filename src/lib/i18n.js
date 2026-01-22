import ro from "@/locales/ro.json";
import en from "@/locales/en.json";

const translations = {
  ro,
  en,
};

export const getLang = () => {
  if (typeof window === "undefined") return "ro";
  return localStorage.getItem("lang") || "ro";
};

export const t = (key) => {
  const lang = getLang();
  return key.split(".").reduce((obj, k) => obj?.[k], translations[lang]);
};
