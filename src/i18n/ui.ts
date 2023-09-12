import china from "./locales/zh-cn";
import en from "./locales/en";

export const languages = {
  en: 'EN',
  "zh-cn": '中文',
};

export const defaultLang = 'en';

export const ui = {
  en: en,
  "zh-cn": china,
} as const;

export const showDefaultLang = false;

export const routes = {
  en: {
    'pricing': 'pricing',
    'about': 'about',
    'blog': 'blog',
    'contact': 'contact',
  },
  "zh-cn": {
    'pricing': 'pricing',
    'about': 'about',
    'blog': 'blog',
    'contact': 'contact',
  },
}