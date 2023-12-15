import { ui, defaultLang, showDefaultLang, routes } from './ui';
import { languages } from './ui'; // Adjust this import according to your actual file structure

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

// Implementing the logic similar to getLocalizedPathname
export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    if (path.startsWith(`/${l}`) || (l === defaultLang && !pathNameStartsWithLanguage(path))) {
      return path;
    }

    const availableLanguages = Object.keys(languages).join('|');
    const regex = new RegExp(`^\/(${availableLanguages})`);
    return path.replace(regex, `/${l}`);
  }
}

function pathNameStartsWithLanguage(pathname: string) {
  return Object.keys(languages).some(lang => pathname.startsWith(`/${lang}`));
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = url.pathname;
  const parts = pathname.split('/');
  const path = parts.pop() || parts.pop(); // Ensure we get the last valid part of the path

  if (path === undefined) {
    return undefined;
  }

  const currentLang = getLangFromUrl(url);

  if (defaultLang === currentLang) {
    return routes[path] !== undefined ? routes[path] : undefined;
  }

  const getKeyByValue = (obj: Record<string, string>, value: string): string | undefined => {
    return Object.keys(obj).find(key => obj[key] === value);
  };

  const reversedKey = getKeyByValue(routes[currentLang], path);

  return reversedKey !== undefined ? reversedKey : undefined;
}
