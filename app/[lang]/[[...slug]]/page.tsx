import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ContentPage, Footer, Header, Home } from '@/components/Site';
import { RecordPage } from '@/components/PageBody';
import { RevealObserver } from '@/components/RevealObserver';
import { pages } from '@/lib/content';
import { getSiteData } from '@/lib/site-data';

type Props = { params: Promise<{ lang: string; slug?: string[] }> };
export const dynamic = 'force-dynamic';
function findRecord(key: string, data: Awaited<ReturnType<typeof getSiteData>>) {
  const [section, slug] = key.split('/');
  if (!slug) return null;
  if (section === 'projets') { const record = data.projects.find(item => item.slug === slug && item.published); return record && { kind: 'project' as const, record }; }
  if (section === 'pays') { const record = data.countries.find(item => item.slug === slug && item.published); return record && { kind: 'country' as const, record }; }
  if (section === 'actualites') { const record = data.articles.find(item => item.slug === slug && item.published); return record && { kind: 'article' as const, record }; }
  return null;
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const key = slug?.join('/') || '';
  const page = pages[key];
  const item = page ? null : findRecord(key, await getSiteData());
  const suffix = key ? `/${key}` : '';
  return {
    title: page?.title || (item ? ('title' in item.record ? item.record.title : item.record.name) : 'Agir aujourd’hui. Construire demain.'),
    description: page?.text || item?.record.summary || 'PAAD accompagne les communautés dans des programmes de développement durable.',
    alternates: { canonical: `/${lang}${suffix}`, languages: { fr: `/fr${suffix}`, en: `/en${suffix}`, es: `/es${suffix}` } },
  };
}
export default async function SitePage({ params }: Props) {
  const { lang, slug } = await params;
  if (!['fr','en','es'].includes(lang)) notFound();
  const key = slug?.join('/') || '';
  const data = await getSiteData();
  const item = findRecord(key, data);
  if (key && !pages[key] && !item) notFound();
  const locale = lang as 'fr'|'en'|'es';
  const schema = { '@context': 'https://schema.org', '@type': 'NGO', name: 'PAAD', alternateName: 'Programme d’Actions et d’Aide pour le Développement', description: 'Organisation haïtienne à but non lucratif engagée dans l’éducation et le développement économique.', email: 'contact@paad-haiti.org', address: { '@type': 'PostalAddress', addressLocality: 'Port-au-Prince', addressCountry: 'HT' } };
  return <><a className="skip-link" href="#main">Aller au contenu</a><Header lang={locale}/><main id="main">{item ? <RecordPage lang={locale} kind={item.kind} record={item.record}/> : key ? <ContentPage lang={locale} slug={key} data={data}/> : <Home lang={locale} data={data}/>}</main><RevealObserver/><Footer lang={locale}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/></>;
}
