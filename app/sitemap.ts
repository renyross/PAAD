import type { MetadataRoute } from 'next';
import { pages } from '@/lib/content';
import { getSiteData } from '@/lib/site-data';
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const data = await getSiteData();
  const records = [
    ...data.projects.filter(item => item.published).map(item => `projets/${item.slug}`),
    ...data.countries.filter(item => item.published).map(item => `pays/${item.slug}`),
    ...data.articles.filter(item => item.published).map(item => `actualites/${item.slug}`),
  ];
  return ['fr', 'en', 'es'].flatMap(lang => ['', ...Object.keys(pages), ...records].map(route => ({ url: `${base}/${lang}${route ? `/${route}` : ''}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: route ? 0.6 : 1 })));
}
