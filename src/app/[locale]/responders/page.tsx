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
  const camel = 'responders';
  const navKey = 'nav_' + camel;
  const descKey = 'page_' + camel + '_description';
  return {
    title: `${t(navKey)} | ${t('site_title')}`,
    description: t.has(descKey) ? t(descKey) : t('site_description'),
    alternates: {
      canonical: `${SITE_URL}/responders`,
      languages: {
        'en': `${SITE_URL}/responders`,
        'ja': `${SITE_URL}/ja/responders`,
        'de': `${SITE_URL}/de/responders`,
        'ko': `${SITE_URL}/ko/responders`,
        'x-default': `${SITE_URL}/responders`,
      },
    },
  };
}

export default async function RespondersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validLocale = routing.locales.includes(locale as Locale) ? (locale as Locale) : routing.defaultLocale;
  setRequestLocale(validLocale);

  const allContent = await getAllContent('responders', validLocale);
  const articles = allContent.map(item => ({ slug: item.slug, metadata: item.metadata }));

  return <CategoryPage catKey="responders" articles={articles} />;
}