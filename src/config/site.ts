import { routing, type Locale } from '@/i18n/routing';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://no-more-room-in-hell-2.xyz';
export const SITE_NAME = 'No More Room in Hell 2 Wiki';
export const HERO_IMAGE = '/images/hero.webp';
export const LOGO_IMAGE = '/logo.svg';
export const TWITTER_HANDLE = 'nmrih';
export const GA_TRACKING_ID = 'G-6FSH7VJ5B9';
export const SLUG_PREFIX = 'No-More-Room-In-Hell-2-';

export const EXTERNAL_LINKS = {
  steam: 'https://store.steampowered.com/app/292000/No_More_Room_in_Hell_2/',
  website: 'https://www.nmrih2.com',
  discord: 'https://discord.gg/nmrih',
  youtube: 'https://www.youtube.com/@NoMoreRoomInHellMod',
  twitter: 'https://x.com/nmrih',
  facebook: 'https://www.facebook.com/nmrih',
  playstation: 'https://store.playstation.com/concept/10019078',
  xbox: 'https://www.xbox.com/games/store/no-more-room-in-hell-2/9pf1q2f7jm9g',
  reddit: 'https://www.reddit.com/r/NoMoreRoomInHell2/',
} as const;

export function absoluteUrl(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function localizedPath(locale: Locale | string, path = '/') {
  const normalized = path === '' ? '/' : path.startsWith('/') ? path : `/${path}`;
  if (locale === routing.defaultLocale) {
    return normalized === '/' ? '/' : normalized;
  }
  return normalized === '/' ? `/${locale}` : `/${locale}${normalized}`;
}
