import { NextResponse } from 'next/server';
import { isAdmin } from '@/lib/admin-auth';
import { getSiteData, saveSiteData, type SiteData } from '@/lib/site-data';

export const dynamic = 'force-dynamic';
const keys = ['projects','countries','articles','stories','reports','partners','metrics'] as const;
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
function valid(data: SiteData) {
  if (!data || typeof data !== 'object' || !keys.every(k => Array.isArray(data[k]))) return false;
  for (const key of ['projects','countries','articles'] as const) {
    const slugs = data[key].map(item => item.slug);
    if (slugs.some(slug => typeof slug !== 'string' || !slugPattern.test(slug)) || new Set(slugs).size !== slugs.length) return false;
  }
  return true;
}
export async function GET() {
  if (!await isAdmin()) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  return NextResponse.json(await getSiteData());
}
export async function PUT(request: Request) {
  if (!await isAdmin()) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  const data = await request.json().catch(() => null) as SiteData | null;
  if (!data || !valid(data)) return NextResponse.json({ error: 'Données invalides. Vérifiez les identifiants des fiches.' }, { status: 400 });
  await saveSiteData(data);
  return NextResponse.json({ ok: true });
}
