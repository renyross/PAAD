import { NextResponse } from 'next/server';
import { isAdmin } from '@/lib/admin-auth';
import { mkdir, writeFile } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import path from 'node:path';

const extensions: Record<string,string> = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/avif': 'avif' };
export async function POST(request: Request) {
  if (!await isAdmin()) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  const form = await request.formData();
  const image = form.get('image');
  if (!(image instanceof File) || !extensions[image.type] || image.size > 5 * 1024 * 1024) return NextResponse.json({ error: 'Choisissez une image JPG, PNG, WebP ou AVIF de moins de 5 Mo.' }, { status: 400 });
  const filename = `${randomUUID()}.${extensions[image.type]}`;
  const folder = path.join(process.cwd(), 'public', 'uploads');
  await mkdir(folder, { recursive: true });
  await writeFile(path.join(folder, filename), Buffer.from(await image.arrayBuffer()));
  return NextResponse.json({ path: `/uploads/${filename}` });
}
