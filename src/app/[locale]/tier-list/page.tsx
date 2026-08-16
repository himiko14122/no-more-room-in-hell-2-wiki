import { setRequestLocale, getTranslations } from 'next-intl/server';
import { routing, type Locale } from '@/i18n/routing';
import { SITE_URL } from '@/config/site';
import { getAllContent } from '@/lib/content';
import CategoryPage from '@/components/CategoryPage';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = routing.locales.includes(locale as Locale) ? (locale as Locale) : routing.defaultLocale;
  setRequestLocale(validLocale);
  const t = await getTranslations();
  const navKey = t.has('nav_tierList') ? 'nav_tierList' : 'nav_home';
  return {
    title: `${t(navKey)} | ${t('site_title')}`,
    description: t.has('page_tierList_description') ? t('page_tierList_description') : t('site_description'),
    alternates: {
      canonical: `${SITE_URL}/tier-list`,
      languages: {
        'en': `${SITE_URL}/tier-list`,
        'ja': `${SITE_URL}/ja/tier-list`,
        'de': `${SITE_URL}/de/tier-list`,
        'ko': `${SITE_URL}/ko/tier-list`,
        'x-default': `${SITE_URL}/tier-list`,
      },
    },
  };
}

export default async function TierListPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validLocale = routing.locales.includes(locale as Locale) ? (locale as Locale) : routing.defaultLocale;
  setRequestLocale(validLocale);

  const allContent = await getAllContent('tier-list', validLocale);
  const articles = allContent.map(item => ({ slug: item.slug, metadata: item.metadata }));

  return <CategoryPage catKey="tier-list" articles={articles} />;
}
