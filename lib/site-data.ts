import 'server-only';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

export type Project = { slug: string; title: string; summary: string; body: string; country: string; region: string; domain: string; status: 'En cours' | 'Terminé' | 'À financer'; image?: string; published: boolean };
export type Country = { slug: string; name: string; summary: string; body: string; domains: string[]; projectCount?: number; beneficiaries?: number; published: boolean };
export type Article = { slug: string; title: string; summary: string; body: string; date: string; category: string; image?: string; published: boolean };
export type Story = { name: string; place: string; programme: string; quote: string; image?: string; published: boolean };
export type Report = { title: string; type: string; year: string; url: string; published: boolean };
export type Partner = { name: string; url?: string; logo?: string; published: boolean };
export type Metric = { label: string; value: string; source: string; published: boolean };
export type Campaign = { title: string; description: string; target: number; raised: number; active: boolean };
export type SiteData = { projects: Project[]; countries: Country[]; articles: Article[]; stories: Story[]; reports: Report[]; partners: Partner[]; metrics: Metric[]; campaign: Campaign | null };

const file = path.join(process.cwd(), 'data', 'site.json');
export const emptyData: SiteData = { projects: [], countries: [], articles: [], stories: [], reports: [], partners: [], metrics: [], campaign: null };

export async function getSiteData(): Promise<SiteData> {
  try {
    const stored = JSON.parse(await readFile(file, 'utf8')) as Partial<SiteData>;
    return { ...emptyData, ...stored };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return emptyData;
    throw error;
  }
}

export async function saveSiteData(data: SiteData) {
  await writeFile(file, JSON.stringify(data, null, 2) + '\n', 'utf8');
}
