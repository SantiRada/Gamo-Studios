import en from './lang/en.json';
import es from './lang/es.json';
import it from './lang/it.json';
import fr from './lang/fr.json';
import de from './lang/de.json';
import ja from './lang/ja.json';
import zh from './lang/zh.json';
import ar from './lang/ar.json';
import arg from './lang/arg.json';

type TranslationKeys = keyof typeof en;

export type Lang = 'en' | 'es' | 'it' | 'fr' | 'de' | 'ja' | 'zh' | 'ar' | 'arg';

const allTranslations = { en , es, it, fr, de, ja, zh, ar, arg };

function getCurrentLang(): Lang {
  if (typeof window !== 'undefined') {
    const lang = localStorage.getItem('lang');
    if (lang && Object.keys(allTranslations).includes(lang)) {
      return lang as Lang;
    }
  }
  return 'es';
}

export const t = (key: TranslationKeys): string => {
  const lang = getCurrentLang();
  return allTranslations[lang][key] || key;
};
