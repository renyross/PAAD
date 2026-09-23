import 'server-only';
import { createHmac, timingSafeEqual } from 'node:crypto';
import { cookies } from 'next/headers';

const password = process.env.PAAD_ADMIN_PASSWORD;
function token() { return password ? createHmac('sha256', password).update('paad-admin-session-v1').digest('hex') : ''; }
export async function isAdmin() {
  if (!password) return false;
  const value = (await cookies()).get('paad_admin')?.value || '';
  const expected = token();
  if (value.length !== expected.length) return false;
  return timingSafeEqual(Buffer.from(value), Buffer.from(expected));
}
export function validPassword(value: string) {
  if (!password) return false;
  const supplied = Buffer.from(value);
  const expected = Buffer.from(password);
  return supplied.length === expected.length && timingSafeEqual(supplied, expected);
}
export function sessionToken() { return token(); }
