import { NextResponse } from 'next/server';
import { sessionToken, validPassword } from '@/lib/admin-auth';

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  if (!validPassword(String(body.password || ''))) return NextResponse.json({ error: 'Mot de passe incorrect ou administration non configurée.' }, { status: 401 });
  const response = NextResponse.json({ ok: true });
  response.cookies.set('paad_admin', sessionToken(), { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict', path: '/', maxAge: 60 * 60 * 24 * 7 });
  return response;
}
export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.delete('paad_admin');
  return response;
}
