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
  const camel = 'weapons';
  const navKey = 'nav_' + camel;
  const descKey = 'page_' + camel + '_description';
  return {
    title: `${t(navKey)} | ${t('site_title')}`,
    description: t.has(descKey) ? t(descKey) : t('site_description'),
    alternates: {
      canonical: `${SITE_URL}/weapons`,
      languages: {
        'en': `${SITE_URL}/weapons`,
        'ja': `${SITE_URL}/ja/weapons`,
        'de': `${SITE_URL}/de/weapons`,
        'ko': `${SITE_URL}/ko/weapons`,
        'x-default': `${SITE_URL}/weapons`,
      },
    },
  };
}

export default async function WeaponsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validLocale = routing.locales.includes(locale as Locale) ? (locale as Locale) : routing.defaultLocale;
  setRequestLocale(validLocale);

  const allContent = await getAllContent('weapons', validLocale);
  const articles = allContent.map(item => ({ slug: item.slug, metadata: item.metadata }));

  return <CategoryPage catKey="weapons" articles={articles} />;
}