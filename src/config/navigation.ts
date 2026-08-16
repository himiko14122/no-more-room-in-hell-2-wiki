import {
  BookOpen, Skull, Map, Heart, Users, Zap, BarChart3, Gamepad2, Clock,
  Crosshair, type LucideIcon,
} from 'lucide-react';

export const NAVIGATION_CONFIG = [
  { key: 'home', labelKey: 'nav_home', path: '/', icon: BookOpen, showInHeader: false, showInSidebar: true, showInFooter: false, sitemap: true, priority: 1, changeFrequency: 'daily' },
  { key: 'guides', labelKey: 'nav_guides', path: '/guides', icon: BookOpen, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'weapons', labelKey: 'nav_weapons', path: '/weapons', icon: Crosshair, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'zombies', labelKey: 'nav_zombies', path: '/zombies', icon: Skull, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'maps', labelKey: 'nav_maps', path: '/maps', icon: Map, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'survival', labelKey: 'nav_survival', path: '/survival', icon: Heart, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'responders', labelKey: 'nav_responders', path: '/responders', icon: Users, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'skills', labelKey: 'nav_skills', path: '/skills', icon: Zap, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'tier-list', labelKey: 'nav_tierList', path: '/tier-list', icon: BarChart3, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'multiplayer', labelKey: 'nav_multiplayer', path: '/multiplayer', icon: Gamepad2, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'updates', labelKey: 'nav_updates', path: '/updates', icon: Clock, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'about', labelKey: 'nav_about', path: '/about', icon: BookOpen, showInHeader: false, showInSidebar: false, showInFooter: true, sitemap: true, priority: 0.7, changeFrequency: 'monthly' },
  { key: 'sitemap', labelKey: 'nav_sitemap', path: '/sitemap', icon: BookOpen, showInHeader: false, showInSidebar: false, showInFooter: true, sitemap: false, priority: 0.5, changeFrequency: 'monthly' },
  { key: 'privacy-policy', labelKey: 'nav_privacyPolicy', path: '/privacy-policy', icon: BookOpen, showInHeader: false, showInSidebar: false, showInFooter: true, sitemap: true, priority: 0.4, changeFrequency: 'yearly' },
  { key: 'terms-of-service', labelKey: 'nav_termsOfService', path: '/terms-of-service', icon: BookOpen, showInHeader: false, showInSidebar: false, showInFooter: true, sitemap: true, priority: 0.4, changeFrequency: 'yearly' },
] as const;

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => 'isContentType' in item && item.isContentType).map((item) => item.key);

export const CONTENT_TYPES_WITH_DEDICATED_PAGES = new Set(CONTENT_TYPES);

export type NavigationItem = (typeof NAVIGATION_CONFIG)[number];
export type ContentType = (typeof CONTENT_TYPES)[number];

export function isContentType(value: string): value is ContentType {
  return CONTENT_TYPES.includes(value as ContentType);
}

export function getNavigationItem(path: string) {
  const normalized = path === '' ? '/' : path.startsWith('/') ? path : `/${path}`;
  return NAVIGATION_CONFIG.find((item) => item.path === normalized || item.key === path);
}

export const CONTENT_DIR_NAMES: Record<ContentType | string, string> = {
  'guides': 'guides',
  'weapons': 'weapons',
  'zombies': 'zombies',
  'maps': 'maps',
  'survival': 'survival',
  'responders': 'responders',
  'skills': 'skills',
  'tier-list': 'tier-list',
  'multiplayer': 'multiplayer',
  'updates': 'updates',
} as Record<ContentType, string>;

export function getContentDir(contentType: ContentType): string {
  return CONTENT_DIR_NAMES[contentType] || contentType;
}

export const GUIDE_CATEGORIES: Record<string, { emoji: string; order: number }> = {
  'guides':       { emoji: '📖', order: 1 },
  'weapons':      { emoji: '🔫', order: 2 },
  'zombies':      { emoji: '🧟', order: 3 },
  'maps':         { emoji: '🗺️', order: 4 },
  'survival':     { emoji: '🩸', order: 5 },
  'responders':   { emoji: '👥', order: 6 },
  'skills':       { emoji: '⚡', order: 7 },
  'tier-list':    { emoji: '📊', order: 8 },
  'multiplayer':  { emoji: '🎮', order: 9 },
  'updates':      { emoji: '🔄', order: 10 },
};

export const CATEGORY_ORDER = Object.entries(GUIDE_CATEGORIES)
  .sort(([, a], [, b]) => a.order - b.order)
  .map(([key]) => key);

export const CATEGORY_AFFINITY: Record<string, string[]> = {
  'guides':       ['weapons', 'zombies', 'skills'],
  'weapons':      ['tier-list', 'zombies', 'survival'],
  'zombies':      ['weapons', 'survival', 'maps'],
  'maps':         ['zombies', 'survival', 'responders'],
  'survival':     ['zombies', 'responders', 'skills'],
  'responders':   ['skills', 'survival', 'weapons'],
  'skills':       ['responders', 'weapons', 'tier-list'],
  'tier-list':    ['weapons', 'skills', 'zombies'],
  'multiplayer':  ['responders', 'survival', 'updates'],
  'updates':      ['maps', 'multiplayer', 'tier-list'],
};