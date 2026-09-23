import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: { default: 'PAAD | Agir aujourd’hui. Construire demain.', template: '%s | PAAD' },
  description: 'PAAD, Programme d’Actions et d’Aide pour le Développement. Des initiatives conçues avec les communautés pour un développement durable.',
  openGraph: { type: 'website', locale: 'fr_FR', siteName: 'PAAD', images: ['/images/community-haiti.webp'] },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fr"><body>{children}</body></html>;
}
