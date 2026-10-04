'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, BriefcaseBusiness, ChevronDown, ChevronLeft, ChevronRight, Globe2, Heart, HeartPulse, Leaf, Menu, Plus, Search, ShieldCheck, Sparkles, Star, Play, UsersRound, X, TrendingUp, CheckCircle2, Compass } from 'lucide-react';
import { actions, pages, translations } from '@/lib/content';
import type { SiteData } from '@/lib/site-data';
import { PageBody } from './PageBody';

const mainNavItems = [
  { label: 'À propos', path: 'qui-sommes-nous' },
  { label: 'Programmes', path: 'nos-actions' },
  { label: 'Devenir partenaire', path: 'contact' },
  { label: 'Presse & Actualités', path: 'actualites' },
];

const iconMap = { BookOpen, HeartPulse, BriefcaseBusiness, UsersRound, Sparkles, Leaf };
const sections = [
  { label: 'PAAD', items: [['Qui sommes-nous', 'qui-sommes-nous'], ['Notre histoire', 'notre-histoire'], ['Mission & vision', 'mission-vision'], ['Notre équipe', 'equipe'], ['Gouvernance', 'gouvernance'], ['Partenaires', 'partenaires']] },
  { label: 'Nos actions', items: [['Éducation', 'actions/education'], ['Développement économique', 'actions/developpement-economique'], ['Nos projets', 'projets'], ['Impact', 'impact']] },
  { label: 'Nous soutenir', items: [['Faire un don', 'faire-un-don'], ['Devenir bénévole', 'devenir-benevole'], ['Devenir partenaire', 'devenir-partenaire'], ['Nous contacter', 'contact']] },
  { label: 'Ressources', items: [['Actualités', 'actualites'], ['Rapports & publications', 'rapports'], ['FAQ', 'faq'], ['Contact', 'contact']] },
];

export function Header({ lang }: { lang: 'fr' | 'en' | 'es' }) {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [openMobileAcc, setOpenMobileAcc] = useState<string | null>('about');
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const t = translations[lang];
  const href = (path: string) => `/${lang}/${path}`;

  const mainNav = [
    {
      label: 'À propos',
      path: 'qui-sommes-nous',
      key: 'about',
      items: [
        ['Qui sommes-nous', 'qui-sommes-nous'],
        ['Notre équipe', 'equipe'],
        ['Gouvernance', 'gouvernance'],
        ['Partenaires', 'partenaires'],
      ],
    },
    {
      label: 'Programmes',
      path: 'nos-actions',
      key: 'programmes',
      items: [
        ['Éducation', 'actions/education'],
        ['Développement économique', 'actions/developpement-economique'],
        ['Bourses d’études', 'actions/education'],
        ['Formations techniques', 'actions/developpement-economique'],
      ],
    },
    {
      label: 'Devenir partenaire',
      path: 'contact',
      key: 'partenaire',
      items: [
        ['Proposer un partenariat', 'contact'],
        ['Partenaires de terrain', 'partenaires'],
        ['Devenir bénévole', 'contact'],
        ['Mécénat d’entreprise', 'contact'],
      ],
    },
  ];

  const megaMenuData: Record<string, {
    card1: { title: string; path: string; img: string; alt: string };
    card2: { title: string; path: string; img: string; alt: string };
    sideTitle: string;
    sideLinks: [string, string][];
  }> = {
    programmes: {
      card1: {
        title: 'Bourses & Écoles',
        path: 'actions/education',
        img: '/images/haiti-student-classroom.jpg',
        alt: 'Élèves et bourses d’études en Haïti',
      },
      card2: {
        title: 'Formations & Autonomie',
        path: 'actions/developpement-economique',
        img: '/images/haiti-tech-workshop.jpg',
        alt: 'Formations professionnelles et techniques',
      },
      sideTitle: 'DOMAINES PRIORITAIRES',
      sideLinks: [
        ['Éducation & Bourses', 'actions/education'],
        ['Digital Lab & Technologies', 'actions/education'],
        ['Formations techniques', 'actions/developpement-economique'],
        ['Entrepreneuriat local', 'actions/developpement-economique'],
      ],
    },
    about: {
      card1: {
        title: 'Faire ensemble',
        path: 'qui-sommes-nous',
        img: '/images/community-haiti.webp',
        alt: 'Faire ensemble',
      },
      card2: {
        title: 'Nos zones d’action',
        path: 'qui-sommes-nous',
        img: '/images/workshop-haiti.webp',
        alt: 'Nos zones d’action',
      },
      sideTitle: 'NOTRE DÉMARCHE',
      sideLinks: [
        ['Notre démarche participative', 'qui-sommes-nous'],
        ['Nos zones d’action', 'qui-sommes-nous'],
      ],
    },
    edu: {
      card1: {
        title: 'Bourses & Écoles',
        path: 'actions/education',
        img: '/images/haiti-student-classroom.jpg',
        alt: 'Élèves et bourses d’études en Haïti',
      },
      card2: {
        title: 'Digital Lab',
        path: 'actions/education',
        img: '/images/haiti-digital-class.jpg',
        alt: 'Classe numérique et informatique',
      },
      sideTitle: 'PROGRAMMES ÉDUCATIFS',
      sideLinks: [
        ['Retour à l’école', 'actions/education'],
        ['Soutien scolaire renforcé', 'actions/education'],
        ['Bourses d’excellence', 'actions/education'],
        ['Laboratoires numériques', 'actions/education'],
      ],
    },
    eco: {
      card1: {
        title: 'Formations techniques',
        path: 'actions/developpement-economique',
        img: '/images/haiti-tech-workshop.jpg',
        alt: 'Formations professionnelles et techniques',
      },
      card2: {
        title: 'Entrepreneuriat local',
        path: 'actions/developpement-economique',
        img: '/images/workshop.webp',
        alt: 'Ateliers et développement local',
      },
      sideTitle: 'AUTONOMIE ÉCONOMIQUE',
      sideLinks: [
        ['Entrepreneuriat local', 'actions/developpement-economique'],
        ['Formations techniques certifiantes', 'actions/developpement-economique'],
        ['Micro-projets d’autonomie', 'actions/developpement-economique'],
        ['Énergies renouvelables & solaire', 'actions/developpement-economique'],
      ],
    },
    partenaire: {
      card1: {
        title: 'Agir ensemble',
        path: 'contact',
        img: '/images/workshop-haiti.webp',
        alt: 'Partenariats et coopération en Haïti',
      },
      card2: {
        title: 'Nos partenaires',
        path: 'partenaires',
        img: '/images/community-haiti.webp',
        alt: 'Partenaires et réseaux PAAD',
      },
      sideTitle: 'COOPÉRATION & ALLIANCES',
      sideLinks: [
        ['Proposer un partenariat', 'contact'],
        ['Partenaires de terrain', 'partenaires'],
        ['Devenir bénévole', 'contact'],
        ['Mécénat d’entreprise', 'contact'],
      ],
    },
    impact: {
      card1: {
        title: 'Récits du terrain',
        path: 'actualites',
        img: '/images/haiti-cinematic-hero.jpg',
        alt: 'Témoignages et récits du terrain',
      },
      card2: {
        title: 'Rapports annuels',
        path: 'rapports',
        img: '/images/community-haiti.webp',
        alt: 'Rapports financiers et transparence',
      },
      sideTitle: 'MESURE & TRANSPARENCE',
      sideLinks: [
        ['Rapports annuels certifiés', 'rapports'],
        ['Témoignages du terrain', 'actualites'],
        ['Transparence & Éthique', 'rapports'],
        ['Indicateurs de progrès', 'impact'],
      ],
    },
    actualites: {
      card1: {
        title: 'Dernières actualités',
        path: 'actualites',
        img: '/images/haiti-cinematic-hero.jpg',
        alt: 'Actualités et actions de terrain PAAD',
      },
      card2: {
        title: 'Communiqués & Presse',
        path: 'actualites',
        img: '/images/community-haiti.webp',
        alt: 'Espace presse et médias',
      },
      sideTitle: 'ACTUALITÉS & MÉDIAS',
      sideLinks: [
        ['Toutes les actualités', 'actualites'],
        ['Communiqués de presse', 'actualites'],
        ['Rapports & publications', 'rapports'],
        ['Contact presse', 'contact'],
      ],
    },
  };

  const handleSearch = () => {
    const q = prompt('Rechercher sur PAAD (projets, actualités, domaines) :');
    if (q) location.href = href('projets');
  };

  return (
    <header className="ocean-header site-header">
      {/* NIVEAU 1 : Barre Blanche Supérieure (Style The Ocean Cleanup) */}
      <div className="ocean-top-bar">
        {/* Bloc Logo Cyan Gauche */}
        <Link href={`/${lang}`} className="ocean-logo-badge" aria-label="PAAD, accueil">
          <Image src="/images/paad-emblem.webp" alt="Logo PAAD" className="ocean-logo-emblem" width={36} height={36} />
          <span className="ocean-logo-text">PAAD</span>
        </Link>

        {/* Navigation Principale Majeure */}
        <nav className="ocean-nav-strip" aria-label="Navigation principale">
          {mainNav.map((item) => {
            const isOpen = activeMenu === item.key;
            const mega = megaMenuData[item.key];
            return (
              <div
                key={item.key}
                className={`ocean-nav-item ${mega ? 'has-mega' : ''}`}
                onMouseEnter={() => setActiveMenu(item.key)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={href(item.path)}
                  className="ocean-nav-anchor"
                  onClick={(e) => {
                    setActiveMenu(null);
                    (e.currentTarget as HTMLElement).blur();
                  }}
                >
                  <span>{item.label}</span>
                  <ChevronDown size={13} strokeWidth={2.6} className="ocean-caret-icon" />
                </Link>

                {/* MEGA-DROPDOWN THE OCEAN CLEANUP */}
                {mega && isOpen && (
                  <div
                    className="ocean-mega-dropdown is-open"
                    onMouseEnter={() => setActiveMenu(item.key)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <div className="wrap ocean-mega-inner">
                      {/* Carte Visuelle 1 */}
                      <Link
                        href={href(mega.card1.path)}
                        className="ocean-mega-card"
                        onClick={() => setActiveMenu(null)}
                      >
                        <Image
                          src={mega.card1.img}
                          alt={mega.card1.alt}
                          fill
                          sizes="35vw"
                          className="ocean-mega-card-img"
                        />
                        <div className="ocean-mega-card-overlay" />
                        <div className="ocean-mega-card-dock">
                          <span className="ocean-mega-circle-btn">
                            <ArrowRight size={18} strokeWidth={2.6} />
                          </span>
                          <span className="ocean-mega-card-title">{mega.card1.title}</span>
                        </div>
                      </Link>

                      {/* Carte Visuelle 2 */}
                      <Link
                        href={href(mega.card2.path)}
                        className="ocean-mega-card"
                        onClick={() => setActiveMenu(null)}
                      >
                        <Image
                          src={mega.card2.img}
                          alt={mega.card2.alt}
                          fill
                          sizes="35vw"
                          className="ocean-mega-card-img"
                        />
                        <div className="ocean-mega-card-overlay" />
                        <div className="ocean-mega-card-dock">
                          <span className="ocean-mega-circle-btn">
                            <ArrowRight size={18} strokeWidth={2.6} />
                          </span>
                          <span className="ocean-mega-card-title">{mega.card2.title}</span>
                        </div>
                      </Link>

                      {/* Colonne Droite : Liens sous en-tête */}
                      <div className="ocean-mega-col-side">
                        <div className="ocean-mega-side-header">
                          <span className="ocean-mega-side-title">{mega.sideTitle}</span>
                        </div>
                        <div className="ocean-mega-side-links">
                          {mega.sideLinks.map(([subLabel, subPath]) => (
                            <Link
                              key={subLabel}
                              href={href(subPath)}
                              className="ocean-mega-side-link"
                              onClick={() => setActiveMenu(null)}
                            >
                              {subLabel}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Actions Droite : Recherche, Langue & Burger */}
        <div className="ocean-top-actions">
          <button
            type="button"
            className="ocean-top-search-btn"
            aria-label="Rechercher"
            onClick={handleSearch}
          >
            <Search size={22} strokeWidth={2.4} />
          </button>

          <div className="ocean-lang-select">
            <Globe2 size={15} />
            <select
              aria-label="Langue"
              value={lang}
              onChange={(e) => {
                location.href = `/${e.target.value}${
                  location.pathname.replace(/^\/(fr|en|es)/, '') || ''
                }`;
              }}
            >
              <option value="fr">FR</option>
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>
          </div>

          <button
            type="button"
            className="ocean-mobile-burger"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Déroulant Mobile avec Accordéons, Cartes Visuelles et Liens Fléchés */}
      {open && (
        <nav className="ocean-mobile-drawer" aria-label="Navigation mobile">
          {mainNav.map((item) => {
            const isOpen = openMobileAcc === item.key;
            const mega = megaMenuData[item.key];
            const displayLabel = item.key === 'about' ? 'À propos de nous' : item.label;

            return (
              <div key={item.key} className={`mobile-acc-item ${isOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="mobile-acc-trigger"
                  onClick={() => setOpenMobileAcc(isOpen ? null : item.key)}
                  aria-expanded={isOpen}
                >
                  <span>{displayLabel}</span>
                  <ChevronDown size={18} strokeWidth={2.4} />
                </button>

                {mega && isOpen && (
                  <div className="mobile-acc-panel">
                    {/* Grille de 2 cartes photos avec bouton rond flèche */}
                    <div className="mobile-acc-cards">
                      <Link
                        href={href(mega.card1.path)}
                        className="mobile-acc-card"
                        onClick={() => setOpen(false)}
                      >
                        <Image
                          src={mega.card1.img}
                          alt={mega.card1.alt}
                          fill
                          sizes="(max-width: 600px) 50vw, 200px"
                          className="mobile-acc-card-img"
                        />
                        <div className="mobile-acc-card-overlay"></div>
                        <div className="mobile-acc-card-dock">
                          <span className="mobile-acc-card-title">{mega.card1.title}</span>
                          <span className="mobile-acc-circle-btn">
                            <ArrowRight size={14} strokeWidth={2.8} />
                          </span>
                        </div>
                      </Link>

                      <Link
                        href={href(mega.card2.path)}
                        className="mobile-acc-card"
                        onClick={() => setOpen(false)}
                      >
                        <Image
                          src={mega.card2.img}
                          alt={mega.card2.alt}
                          fill
                          sizes="(max-width: 600px) 50vw, 200px"
                          className="mobile-acc-card-img"
                        />
                        <div className="mobile-acc-card-overlay"></div>
                        <div className="mobile-acc-card-dock">
                          <span className="mobile-acc-card-title">{mega.card2.title}</span>
                          <span className="mobile-acc-circle-btn">
                            <ArrowRight size={14} strokeWidth={2.8} />
                          </span>
                        </div>
                      </Link>
                    </div>

                    {/* Titre de section avec séparateur fin */}
                    <div className="mobile-acc-section-header">
                      <span className="mobile-acc-section-title">{mega.sideTitle}</span>
                    </div>

                    {/* Liste des liens avec flèche ↗ */}
                    <div className="mobile-acc-links">
                      {mega.sideLinks.map(([subLabel, subPath]) => (
                        <Link
                          key={subLabel}
                          href={href(subPath)}
                          className="mobile-acc-link"
                          onClick={() => setOpen(false)}
                        >
                          <span>{subLabel}</span>
                          <ArrowUpRight size={18} strokeWidth={2.4} />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Accordéon Presse & Actualités dans le même style que les précédents */}
          {(() => {
            const isPressOpen = openMobileAcc === 'actualites';
            const pressMega = megaMenuData.actualites;
            return (
              <div className={`mobile-acc-item ${isPressOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="mobile-acc-trigger"
                  onClick={() => setOpenMobileAcc(isPressOpen ? null : 'actualites')}
                  aria-expanded={isPressOpen}
                >
                  <span>Presse &amp; Actualités</span>
                  <ChevronDown size={18} strokeWidth={2.4} />
                </button>

                {pressMega && isPressOpen && (
                  <div className="mobile-acc-panel">
                    <div className="mobile-acc-cards">
                      <Link
                        href={href(pressMega.card1.path)}
                        className="mobile-acc-card"
                        onClick={() => setOpen(false)}
                      >
                        <Image
                          src={pressMega.card1.img}
                          alt={pressMega.card1.alt}
                          fill
                          sizes="(max-width: 600px) 50vw, 200px"
                          className="mobile-acc-card-img"
                        />
                        <div className="mobile-acc-card-overlay"></div>
                        <div className="mobile-acc-card-dock">
                          <span className="mobile-acc-card-title">{pressMega.card1.title}</span>
                          <span className="mobile-acc-circle-btn">
                            <ArrowRight size={14} strokeWidth={2.8} />
                          </span>
                        </div>
                      </Link>

                      <Link
                        href={href(pressMega.card2.path)}
                        className="mobile-acc-card"
                        onClick={() => setOpen(false)}
                      >
                        <Image
                          src={pressMega.card2.img}
                          alt={pressMega.card2.alt}
                          fill
                          sizes="(max-width: 600px) 50vw, 200px"
                          className="mobile-acc-card-img"
                        />
                        <div className="mobile-acc-card-overlay"></div>
                        <div className="mobile-acc-card-dock">
                          <span className="mobile-acc-card-title">{pressMega.card2.title}</span>
                          <span className="mobile-acc-circle-btn">
                            <ArrowRight size={14} strokeWidth={2.8} />
                          </span>
                        </div>
                      </Link>
                    </div>

                    <div className="mobile-acc-section-header">
                      <span className="mobile-acc-section-title">{pressMega.sideTitle}</span>
                    </div>

                    <div className="mobile-acc-links">
                      {pressMega.sideLinks.map(([subLabel, subPath]) => (
                        <Link
                          key={subLabel}
                          href={href(subPath)}
                          className="mobile-acc-link"
                          onClick={() => setOpen(false)}
                        >
                          <span>{subLabel}</span>
                          <ArrowUpRight size={18} strokeWidth={2.4} />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })()}

          {/* Bouton Rectangulaire Signature Don */}
          <Link
            href={href('faire-un-don')}
            className="ocean-drawer-donate-btn"
            onClick={() => setOpen(false)}
          >
            FAITES UN DON MAINTENANT
          </Link>
        </nav>
      )}
    </header>
  );
}


export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="scroll-to-top-btn"
      aria-label="Remonter en haut de la page"
      title="Remonter en haut"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 15-6-6-6 6"/>
      </svg>
    </button>
  );
}

export function Footer({ lang }: { lang: 'fr' | 'en' | 'es' }) {
  const href = (path: string) => `/${lang}/${path}`;
  return <>
    <footer className="footer" style={{ background: 'var(--purple-dark)', color: '#FAF8FB', borderTop: 'none' }}>
      <div className="wrap footer-callout">
        <div>
          <span>Construire la suite</span>
          <h2>Agissons aujourd’hui pour ouvrir de nouvelles possibilités en Haïti.</h2>
        </div>
        <div className="footer-callout-actions">
          <Link href={href('faire-un-don')}>Faire un don <Heart size={17}/></Link>
          <Link href={href('contact')}>Nous contacter <ArrowRight size={17}/></Link>
        </div>
      </div>
      <div className="wrap mockup-footer-top">
        <div className="mockup-footer-brand">
          <Link className="ocean-logo-badge footer-menu-logo" href={`/${lang}`} aria-label="PAAD, accueil">
            <Image src="/images/paad-emblem-white-trans.png" alt="Logo PAAD" className="ocean-logo-emblem" width={40} height={40}/>
            <span className="ocean-logo-text">PAAD</span>
          </Link>
          <p>Passerelle d’Actions pour l’Autonomie et le Développement. Agir avec les communautés en Haïti pour un avenir durable.</p>
          <span className="mockup-social-label">Suivez-nous</span>
          <div className="mockup-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mockup-social-btn" aria-label="Facebook">f</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mockup-social-btn" aria-label="X / Twitter">𝕏</a>
            <a href="https://www.instagram.com/paad_developpement/" target="_blank" rel="noopener noreferrer" className="mockup-social-btn" aria-label="Instagram PAAD Développement">ig</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mockup-social-btn" aria-label="LinkedIn">in</a>
          </div>
        </div>
        <div className="mockup-footer-col">
          <h4>PAAD</h4>
          <Link href={href('qui-sommes-nous')}>Qui sommes-nous</Link>
          <Link href={href('equipe')}>Notre équipe</Link>
          <Link href={href('gouvernance')}>Gouvernance</Link>
          <Link href={href('partenaires')}>Partenaires</Link>
        </div>
        <div className="mockup-footer-col">
          <h4>Nos actions</h4>
          <Link href={href('actions/education')}>Éducation</Link>
          <Link href={href('actions/developpement-economique')}>Développement économique</Link>
          <Link href={href('projets')}>Nos projets</Link>
          <Link href={href('impact')}>Impact</Link>
        </div>
        <div className="mockup-footer-col">
          <h4>Nous soutenir</h4>
          <Link href={href('faire-un-don')}>Faire un don</Link>
          <Link href={href('devenir-benevole')}>Devenir bénévole</Link>
          <Link href={href('devenir-partenaire')}>Devenir partenaire</Link>
        </div>
        <div className="mockup-footer-col">
          <h4>Ressources</h4>
          <Link href={href('actualites')}>Actualités</Link>
          <Link href={href('rapports')}>Rapports</Link>
          <Link href={href('faq')}>FAQ</Link>
          <Link href={href('contact')}>Contact</Link>
        </div>
      </div>
      <div className="wrap footer-wordmark" aria-hidden="true">
        <svg viewBox="0 0 1000 310" focusable="false">
          <text x="0" y="280" textLength="1000" lengthAdjust="spacingAndGlyphs">PAAD</text>
        </svg>
      </div>
      <div className="wrap mockup-footer-bottom">
        <span>© {new Date().getFullYear()} PAAD. Tous droits réservés.</span>
        <div className="mockup-footer-links">
          <Link href={href('mentions-legales')}>Mentions légales</Link>
          <Link href={href('confidentialite')}>Confidentialité</Link>
          <Link href={href('cookies')}>Cookies</Link>
          <Link href={href('conditions-de-don')}>Conditions de don</Link>
        </div>
      </div>
    </footer>
    <ScrollToTop />
  </>;
}

function Eyebrow({ children }: { children: React.ReactNode }) { return <span className="eyebrow"><span className="eyebrow-line"/>{children}</span>; }

function AnimatedCounter({ end, suffix = '', duration = 1800 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(end);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      hasAnimated.current = true;
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();
          setCount(0);
          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (startTime === null) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(easeOut * end));

            if (progress < 1) {
              frame = window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };

          frame = window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.05, rootMargin: '60px 0px 60px 0px' }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [end, duration]);

  const formatted = count.toLocaleString('fr-FR');

  return (
    <span ref={ref} className="stat-number">
      {formatted}{suffix}
    </span>
  );
}

export function Home({ lang, data }: { lang: 'fr' | 'en' | 'es'; data: SiteData }) {
  const t = translations[lang];
  const href = (path: string) => `/${lang}/${path}`;
  const [firstNameInput, setFirstNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [newsSent, setNewsSent] = useState(false);
  const newsTrackRef = useRef<HTMLDivElement>(null);

  const scrollNewsTrack = (dir: number) => {
    if (newsTrackRef.current) {
      newsTrackRef.current.scrollBy({ left: dir * 344, behavior: 'smooth' });
    }
  };

  // Les visuels présentent les principaux obstacles auxquels PAAD répond.
  const spotlightSlides = [
    {
      id: 'acces-ecole',
      image: '/images/haiti-student-classroom.jpg',
      alt: "L’accès et le maintien à l’école restent fragiles pour de nombreux enfants",
      stickerText: 'ENJEU',
      stickerSub: 'ÉCOLE',
      stickerClass: 'sticker-amber',
      action: 'Accès à l’éducation',
    },
    {
      id: 'formation-metier',
      image: '/images/haiti-tech-workshop.jpg',
      alt: 'Les formations qualifiantes demeurent difficiles d’accès pour une partie de la jeunesse',
      stickerText: 'ENJEU',
      stickerSub: 'MÉTIER',
      stickerClass: 'sticker-orange',
      action: 'Formation et employabilité',
    },
    {
      id: 'fracture-numerique',
      image: '/images/haiti-digital-class.jpg',
      alt: 'Le manque d’équipements et de compétences numériques limite l’accès aux opportunités',
      stickerText: 'ENJEU',
      stickerSub: 'NUMÉRIQUE',
      stickerClass: 'sticker-cyan',
      action: 'Compétences numériques',
    },
    {
      id: 'autonomie-economique',
      image: '/images/community-haiti.webp',
      alt: 'La précarité freine la création d’activités et l’autonomie économique des communautés',
      stickerText: 'ENJEU',
      stickerSub: 'AUTONOMIE',
      stickerClass: 'sticker-amber',
      action: 'Développement économique',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const activeSlide = spotlightSlides[currentSlide];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + spotlightSlides.length) % spotlightSlides.length);
  };
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % spotlightSlides.length);
  };


  // Hero slides data & timer
  const heroSlides = [
    { src: '/images/haiti-cinematic-hero.jpg', alt: "Jeunesse et espoir en Haïti, éducation et avenir" },
    { src: '/images/haiti-student-classroom.jpg', alt: "Enfants apprenant dans une salle de classe en Haïti" },
    { src: '/images/haiti-tech-workshop.jpg', alt: "Jeunes adultes en formation technique et solaire en Haïti" },
    { src: '/images/hero-child-education.jpg', alt: "Enfant souriant avec son cahier d'école en Haïti" },
    { src: '/images/haiti-digital-class.jpg', alt: "Apprentissage du numérique et technologies au PAAD Digital Lab" },
  ];
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const cycleHero = (dir: number) => {
    setHeroIndex((prev) => (prev + dir + heroSlides.length) % heroSlides.length);
  };



  const allianceTypes = [
    { label: 'ONG & Associations', tag: 'Alliance solidaire', Icon: UsersRound },
    { label: 'Entreprises solidaires', tag: 'Mécénat & RSE', Icon: BriefcaseBusiness },
    { label: 'Universités & Écoles', tag: 'Pôles d’excellence', Icon: BookOpen },
    { label: 'Réseaux de la diaspora', tag: 'Mobilisation mondiale', Icon: Globe2 },
    { label: 'Collectivités territoriales', tag: 'Action publique locale', Icon: ShieldCheck },
    { label: 'Bailleurs & Fondations', tag: 'Financements d’impact', Icon: Sparkles },
  ];


  const operationalPrograms = [
    {
      title: 'Retour à l’école',
      desc: 'Prise en charge des frais de scolarité, cantines et kits complets pour réintégrer les enfants durablement.',
      image: '/images/haiti-student-classroom.jpg',
      path: 'actions/education',
    },
    {
      title: 'Solaire & Métiers techniques',
      desc: 'Cycles intensifs de formation pratique (électricité, solaire, maintenance) directement valorisables.',
      image: '/images/haiti-tech-workshop.jpg',
      path: 'actions/developpement-economique',
    },
    {
      title: 'PAAD Digital Lab',
      desc: 'Initiation à l’informatique, bureautique et compétences numériques pour le travail moderne.',
      image: '/images/haiti-digital-class.jpg',
      path: 'projets',
    },
    {
      title: 'PAAD Entrepreneurs',
      desc: 'Mentorat en gestion, outillage et appui au développement de micro-entreprises locales viables.',
      image: '/images/workshop-haiti.webp',
      path: 'actions/developpement-economique',
    },
    {
      title: 'PAAD Femmes & Épargne',
      desc: 'Autonomie financière, ateliers d’épargne solidaire et soutien aux activités marchandes locales.',
      image: '/images/community-haiti.webp',
      path: 'projets',
    },
    {
      title: 'PAAD Tremplin Emploi',
      desc: 'Accompagnement individuel, stages pratiques et passerelles vers les entreprises partenaires.',
      image: '/images/workshop.webp',
      path: 'projets',
    },
  ];

  // News Slider
  const latestNews = [
    {
      id: 'news-1',
      category: 'Éducation',
      date: '10 avril 2025',
      title: 'PAAD célèbre sa 350e bourse scolaire et l’extension de ses cantines',
      excerpt: 'Grâce à la mobilisation de nos partenaires, 350 élèves bénéficient désormais d’un soutien éducatif et nutritionnel complet.',
      image: '/images/haiti-student-classroom.jpg',
      path: 'actualites',
    },
    {
      id: 'news-2',
      category: 'Autonomie solaire',
      date: '9 mars 2025',
      title: 'Des fonds débloqués pour déployer 12 nouvelles micro-centrales solaires',
      excerpt: 'Un nouveau jalon franchi pour apporter une alimentation énergétique propre aux écoles et centres de santé partenaires.',
      image: '/images/haiti-tech-workshop.jpg',
      path: 'actualites',
    },
    {
      id: 'news-3',
      category: 'Formation numérique',
      date: '17 février 2025',
      title: 'Des programmes de formation au numérique adaptés à la mise à l’échelle',
      excerpt: 'Lancement du Digital Lab pour doter les jeunes diplômés des compétences techniques requises par le marché de l’emploi.',
      image: '/images/haiti-digital-class.jpg',
      path: 'actualites',
    },
    {
      id: 'news-4',
      category: 'Entrepreneuriat',
      date: '6 février 2025',
      title: 'Comment l’épargne solidaire redéfinit l’autonomie des femmes dans l’Artibonite',
      excerpt: 'Les groupements d’épargne communautaires permettent à plus de 140 femmes d’amorcer des activités génératrices de revenus pérennes.',
      image: '/images/community-haiti.webp',
      path: 'actualites',
    },
    {
      id: 'news-5',
      category: 'Transparence & impact',
      date: '18 janvier 2025',
      title: 'Rapport annuel 2024 : 92 % des ressources directement allouées aux bénéficiaires',
      excerpt: 'Consultez la synthèse financière de nos actions, nos enseignements de terrain et nos priorités stratégiques pour 2025-2027.',
      image: '/images/haiti-cinematic-hero.jpg',
      path: 'actualites',
    },
  ];

  const testimonials = [
    {
      id: 'fabiola',
      image: '/images/haiti-student-classroom.jpg',
      alt: "Fabiola en classe d'école primaire en Haïti",
      quote: "Avec l'accompagnement de PAAD dans notre école, un grand changement s'est opéré dans ma vie et celle de ma famille. J'ai pu recevoir mes manuels, un uniforme neuf et deux repas chauds chaque jour en classe. J'adore le calcul et la lecture. Avant, j'avais peur de devoir quitter l'école faute de moyens, mais aujourd'hui je me sens protégée et je rêve de devenir médecin pour soigner les gens de mon quartier.",
      name: "Fabiola, 9 ans",
      role: "Boursière du programme d’accès et maintien scolaire · Port-au-Prince",
    },
    {
      id: 'jean-baptiste',
      image: '/images/haiti-tech-workshop.jpg',
      alt: "Jean-Baptiste en atelier de formation solaire",
      quote: "La formation technique en énergie solaire dispensée par PAAD m’a donné des compétences professionnelles rares et valorisées. Aujourd’hui, j’interviens sur des installations autonomes et des chantiers d'électrification dans tout le département du Nord. J'ai même pu ouvrir mon propre atelier et je forme à mon tour deux jeunes apprentis de ma communauté.",
      name: "Jean-Baptiste Louissaint, 28 ans",
      role: "Artisan électricien certifié · Filière Énergie Solaire PAAD, Cap-Haïtien",
    },
    {
      id: 'mireille-esther',
      image: '/images/haiti-digital-class.jpg',
      alt: "Apprenantes en bureautique et technologies numériques",
      quote: "L'ouverture du Digital Lab a été une formidable opportunité pour nous. Nous y avons appris la bureautique avancée, les bases du développement web et le travail collaboratif en ligne. Ce programme nous a sorties de l'isolement en nous donnant des compétences concrètes et la confiance indispensable pour décrocher nos premiers contrats.",
      name: "Mireille (21 ans) & Esther (19 ans)",
      role: "Diplômées du laboratoire de compétences numériques · Delmas",
    },
    {
      id: 'communaute',
      image: '/images/community-haiti.webp',
      alt: "Femmes d'une coopérative solidaire en Haïti",
      quote: "Grâce au fonds d'amorçage solidaire et au tutorat de gestion apporté par PAAD, notre groupement de femmes a pu structurer une micro-activité de transformation agroalimentaire locale. Nous ne subissons plus la précarité au jour le jour : nous générons des revenus stables qui garantissent la scolarité de nos enfants et la dignité de notre village.",
      name: "Marie-Rose Pierre, 39 ans",
      role: "Responsable de coopérative communautaire · Artibonite",
    },
    {
      id: 'nadege',
      image: '/images/haiti-mother-child-donate.jpg',
      alt: "Mère et son enfant soutenus par le programme d'aide",
      quote: "Quand les temps sont devenus particulièrement difficiles, le programme d'aide nutritionnelle et d'accompagnement familial de PAAD a été une véritable bouée de sauvetage. Savoir que mon fils grandit en bonne santé et qu'il aura une place assurée à la maternelle me redonne l'espoir et la force d'avancer.",
      name: "Nadège & son fils Peterson (5 ans)",
      role: "Famille accompagnée par le pôle d'aide d'urgence et nutrition · Cité Soleil",
    },
  ];

  const [currentStoryIdx, setCurrentStoryIdx] = useState(0);
  const activeStory = testimonials[currentStoryIdx];

  const handlePrevStory = () => {
    setCurrentStoryIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const handleNextStory = () => {
    setCurrentStoryIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput) {
      setNewsSent(true);
      const recipient = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
      if (recipient) {
        location.href = `mailto:${recipient}?subject=${encodeURIComponent('Inscription newsletter PAAD')}&body=${encodeURIComponent(`Bonjour, je souhaite m'inscrire aux actualités de PAAD :\nPrénom : ${firstNameInput}\nEmail : ${emailInput}`)}`;
      }
    }
  };

  return <>
    {/* 2. HERO PRINCIPAL AVEC DÉFILEMENT D'IMAGES (ESTHÉTIQUE THE OCEAN CLEANUP / PAAD) */}
    <section className="ocean-style-hero" id="hero">
      {/* Photos panoramiques en carrousel défilant */}
      <div className="ocean-hero-bg-wrapper">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`ocean-hero-slide ${idx === heroIndex ? 'active' : ''}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={idx === 0}
              sizes="100vw"
              className="ocean-hero-bg-image"
            />
          </div>
        ))}
        <div className="ocean-hero-scrim" aria-hidden="true" />
      </div>

      {/* Contenu éditorial aligné sur le hero À propos */}
      <div
        className="ocean-hero-content-wrap home-hero-left-layout"
        style={{ width: '100%', maxWidth: 'none', margin: 0 }}
      >
        <div className="ocean-hero-inner home-milestone-inner">
          <span className="home-milestone-kicker">PAAD · Haïti</span>
          <h1 className="ocean-hero-title">
            Agir aujourd’hui.<br />
            Bâtir l’avenir d’Haïti.
          </h1>
          <p className="home-milestone-lead">Nous agissons avec les communautés pour faciliter l’accès à l’éducation, développer les compétences et créer des chemins durables vers l’autonomie.</p>
          <div className="home-milestone-actions">
            <Link
              href={href('faire-un-don')}
              className="hero-donate-btn"
              style={{
                backgroundColor: '#71106f',
                color: '#ffffff',
                border: 'none',
                borderRadius: 0,
                fontFamily: "'Manrope', Arial, sans-serif",
                fontSize: '14.5px',
                fontWeight: 800,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                minHeight: '52px',
                padding: '0 32px',
                boxShadow: '0 4px 18px rgba(113, 16, 111, 0.45)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                textDecoration: 'none',
              }}
            >
              FAITES UN DON MAINTENANT
            </Link>
            <a href="#programmes" className="hero-secondary-btn">
              Découvrir nos actions <ArrowRight size={17}/>
            </a>
          </div>
        </div>
      </div>

      {/* Tirets indicateurs de défilement du Hero (centrés en bas, sans flèches) */}
      <div className="ocean-hero-controls">
        <div className="ocean-hero-dots">
          {heroSlides.map((_, idx) => (
            <button key={idx} type="button" className={`ocean-hero-dot ${idx === heroIndex ? 'active' : ''}`} onClick={() => setHeroIndex(idx)} aria-label={`Photo ${idx + 1}`}/>
          ))}
        </div>
      </div>
    </section>


    {/* 2.5 SPOTLIGHT TERRAIN AVEC CARROUSEL INTERACTIF (SANS FOND SUR LE TEXTE + FLÈCHES) */}
    {/* 2.5 SECTION TERRAIN : SUR LE TERRAIN EN HAÏTI AVEC BOUTON EN HAUT À DROITE DU CARROUSEL */}
    <section className="section-klabu-spotlight" id="terrain">
      <div className="wrap">
        <div className="klabu-spotlight-row klabu-spotlight-unified">
          {/* Colonne Gauche : Titre et texte éditorial haute portée */}
          <div className="spotlight-text-side">
            <span className="klabu-spotlight-eyebrow">Sur le terrain en Haïti</span>
            <h2 className="spotlight-main-title">
              L'énergie d'apprendre, la dignité de construire son avenir.
            </h2>
            <div className="terrain-editorial-copy">
              <p className="terrain-lead">
                Des millions d&apos;enfants et de jeunes en Haïti font aujourd&apos;hui face à une précarité qui freine leur élan, tandis que l&apos;urgence éducative continue de s&apos;aggraver.
              </p>
              <p className="spotlight-editorial-text">
                Le manque d&apos;accès à l&apos;école et aux métiers d&apos;avenir fragilise les familles et l&apos;autonomie des communautés. Des salles de classe aux ateliers techniques solaires et numériques, PAAD déploie des réponses concrètes pour réintégrer durablement les enfants et transmettre aux jeunes des compétences utiles. Cette mission d&apos;émancipation exige une action immédiate et continue.
              </p>
            </div>

            <div className="problem-focus" aria-label="Les deux dimensions de la problématique">
              <div><BookOpen size={20}/><span><strong>Éducation</strong>Apprendre et développer des compétences utiles.</span></div>
              <div><BriefcaseBusiness size={20}/><span><strong>Économie</strong>Accéder à l’emploi, entreprendre et générer des revenus.</span></div>
            </div>
          </div>

          {/* Colonne Droite : Photo du carrousel avec commandes EN BAS AU CENTRE */}
          <div className="klabu-spotlight-media spotlight-carousel-media">
            <div className="klabu-media-frame spotlight-carousel-frame">
              <Image
                key={activeSlide.id}
                src={activeSlide.image}
                alt={activeSlide.alt}
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
                className="klabu-media-img spotlight-fade-in"
              />

              {/* Badge sticker de coin Klabu style */}
              <div className={`klabu-sticker-badge ${activeSlide.stickerClass}`}>
                <span>{activeSlide.stickerText}</span>
                <strong>{activeSlide.stickerSub}</strong>
              </div>

              {/* Bandeau d'information sur la photo */}
              <div className="spotlight-media-caption">
                <span className="caption-tag">{activeSlide.action}</span>
                <span className="caption-text">{activeSlide.alt}</span>
              </div>
            </div>

            {/* Commandes du carrousel en bas au centre sous la photo */}
            <div className="spotlight-carousel-bottom-bar">
              <div className="spotlight-carousel-controls">
                <button
                  type="button"
                  className="spotlight-arrow-btn"
                  onClick={handlePrevSlide}
                  aria-label="Photo précédente"
                  title="Photo précédente"
                >
                  <ArrowLeft size={18} strokeWidth={2.4} />
                </button>

                <div className="spotlight-slide-indicator">
                  <span className="indicator-current">0{currentSlide + 1}</span>
                  <span className="indicator-sep">/</span>
                  <span className="indicator-total">0{spotlightSlides.length}</span>
                </div>

                <button
                  type="button"
                  className="spotlight-arrow-btn"
                  onClick={handleNextSlide}
                  aria-label="Photo suivante"
                  title="Photo suivante"
                >
                  <ArrowRight size={18} strokeWidth={2.4} />
                </button>

                {/* Puces de navigation */}
                <div className="spotlight-dots">
                  {spotlightSlides.map((slide, i) => (
                    <button
                      key={slide.id}
                      type="button"
                      className={`spotlight-dot ${i === currentSlide ? 'is-active' : ''}`}
                      onClick={() => setCurrentSlide(i)}
                      aria-label={`Aller à la photo ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    {/* 2.6 NOTRE OBJECTIF — CONTINUITE EDITORIALE DU SPOTLIGHT TERRAIN */}
    <section className="section-klabu-spotlight section-objective-spotlight" id="notre-objectif">
      <div className="wrap">
        <div className="klabu-spotlight-row klabu-spotlight-unified objective-spotlight-row">
          <div className="klabu-spotlight-media objective-spotlight-media">
            <div className="klabu-media-frame spotlight-carousel-frame">
              <Image
                src="/images/haiti-tech-workshop.jpg"
                alt="Jeunes participant à une formation technique en Haïti"
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
                className="klabu-media-img"
              />
              <div className="objective-photo-mark" aria-hidden="true">
                <Compass size={25} strokeWidth={1.8}/>
              </div>
              <div className="spotlight-media-caption">
                <span className="caption-tag">Cap vers l’autonomie</span>
                <span className="caption-text">Apprendre, se former et entreprendre en Haïti</span>
              </div>
            </div>
          </div>

          <div className="spotlight-text-side objective-text-side">
            <span className="klabu-spotlight-eyebrow">Notre objectif</span>
            <h2 className="spotlight-main-title">
              Transformer chaque apprentissage en possibilité d’avenir.
            </h2>
            <p className="spotlight-editorial-text">
              PAAD veut permettre aux enfants, aux jeunes et aux adultes d’acquérir les savoirs et les compétences qui ouvrent la voie à l’emploi, à l’entrepreneuriat et à une autonomie durable. Notre objectif est de construire avec les communautés un parcours continu : accéder à une éducation de qualité, développer un métier, créer une activité et participer pleinement au développement local.
            </p>
            <div className="objective-priorities" aria-label="Priorités de notre objectif">
              <span>Apprendre</span>
              <span>Se former</span>
              <span>Entreprendre</span>
            </div>
            <Link className="objective-link" href={href('mission-vision')}>
              Découvrir notre mission <ArrowRight size={17}/>
            </Link>
          </div>
        </div>
      </div>
    </section>


    {/* 3. NOS DEUX DOMAINES D'ACTION (STYLE EXACT THE OCEAN CLEANUP SPLIT PANELS) */}
    <section className="section-ocean-duo-pillars" id="domaines">
      <div className="wrap ocean-duo-header">
        <span className="ocean-duo-eyebrow">Axes stratégiques</span>
        <h2 className="ocean-duo-heading">3 axes stratégiques pour agir</h2>
        <p className="ocean-duo-sub">
          L’éducation libère le potentiel. L’économie locale et le renforcement communautaire transforment ce potentiel en autonomie durable.
        </p>
      </div>

      {/* Grille 3 colonnes panoramique */}
      <div className="ocean-duo-grid">
        {/* PANNEAU 1 : ÉDUCATION */}
        <div className="ocean-duo-panel">
          <div className="ocean-duo-bg">
            <Image
              src="/images/haiti-student-classroom.jpg"
              alt="Éducation et scolarisation des enfants en Haïti"
              fill
              sizes="(max-width: 900px) 100vw, 33vw"
              className="ocean-duo-img"
            />
            <div className="ocean-duo-scrim" />
          </div>
          <div className="ocean-duo-content">
            <span className="ocean-duo-index">01 · Éducation</span>
            <h3 className="ocean-duo-title">
              <span className="wt-light">DÉVELOPPER</span><br />
              <span className="wt-bold">L'ÉDUCATION</span>
            </h3>
            <p className="ocean-duo-text">
              Bourses scolaires, fournitures, formation continue des instituteurs et cantines scolaires pour garantir un apprentissage digne et durable à chaque enfant en Haïti.
            </p>
            <Link href={href('actions/education')} className="ocean-duo-btn">
              Découvrir nos actions <ArrowRight size={17}/>
            </Link>
          </div>
        </div>

        {/* PANNEAU 2 : DÉVELOPPEMENT ÉCONOMIQUE */}
        <div className="ocean-duo-panel">
          <div className="ocean-duo-bg">
            <Image
              src="/images/haiti-tech-workshop.jpg"
              alt="Atelier technique et autonomie économique en Haïti"
              fill
              sizes="(max-width: 900px) 100vw, 33vw"
              className="ocean-duo-img"
            />
            <div className="ocean-duo-scrim" />
          </div>
          <div className="ocean-duo-content">
            <span className="ocean-duo-index">02 · Autonomie</span>
            <h3 className="ocean-duo-title">
              <span className="wt-light">DÉVELOPPEMENT</span><br />
              <span className="wt-bold">ÉCONOMIQUE</span>
            </h3>
            <p className="ocean-duo-text">
              Formations techniques qualifiantes aux métiers d’avenir, soutien à l’entrepreneuriat des jeunes et amorçage d&apos;ateliers pérennes pour bâtir une autonomie locale.
            </p>
            <Link href={href('actions/developpement-economique')} className="ocean-duo-btn">
              Découvrir nos actions <ArrowRight size={17}/>
            </Link>
          </div>
        </div>

        {/* PANNEAU 3 : DÉVELOPPEMENT COMMUNAUTAIRE */}
        <div className="ocean-duo-panel">
          <div className="ocean-duo-bg">
            <Image
              src="/images/community-haiti.webp"
              alt="Développement et autonomie communautaire en Haïti"
              fill
              sizes="(max-width: 900px) 100vw, 33vw"
              className="ocean-duo-img"
            />
            <div className="ocean-duo-scrim" />
          </div>
          <div className="ocean-duo-content">
            <span className="ocean-duo-index">03 · Communauté</span>
            <h3 className="ocean-duo-title">
              <span className="wt-light">DÉVELOPPEMENT</span><br />
              <span className="wt-bold">COMMUNAUTAIRE</span>
            </h3>
            <p className="ocean-duo-text">
              Accompagnement d’initiatives de proximité, autonomie énergétique et projets collectifs pour pérenniser l’impact au cœur des territoires haïtiens.
            </p>
            <Link href="/#programmes" className="ocean-duo-btn">
              Découvrir nos actions <ArrowRight size={17}/>
            </Link>
          </div>
        </div>
      </div>
    </section>





    {/* 5. PROJET PRIORITAIRE : APPLICATION CONCRETE DES PROGRAMMES */}
    <section className="section-priority-project" id="urgence">
      <div className="wrap">
        <div className="priority-project-card">
          <div className="priority-photo-side">
            <Image
              src="/images/haiti-student-classroom.jpg"
              alt="Enfants dans une salle de classe en Haïti"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <div className="priority-photo-badge">
              <Sparkles size={13} style={{ display: 'inline', verticalAlign: '-1px', marginRight: '5px' }} />
              Ouverture prévue · Septembre 2027
            </div>
          </div>

          <div className="priority-content-side">
            <span className="priority-kicker">Projet prioritaire</span>
            <h2 className="priority-title">Construire une école pour les enfants privés d’un accès proche à l’éducation.</h2>
            <p className="priority-text" style={{ marginBottom: '22px' }}>
              PAAD prépare la construction d’une école destinée en priorité aux enfants de familles déplacées, aux enfants qui ne peuvent actuellement pas être scolarisés et à ceux qui doivent parcourir de très longues distances pour rejoindre une classe. Le projet vise à leur offrir, dès septembre 2027, un environnement d’apprentissage accessible, sûr et durable.
            </p>

            <div className="priority-progress-box">
              <div className="school-project-status">
                <div>
                  <span>Échéance</span>
                  <strong>Septembre 2027</strong>
                </div>
                <div>
                  <span>Statut</span>
                  <strong>Phase de préparation</strong>
                </div>
              </div>
              <p className="school-project-note">Le budget, le site d’implantation et le calendrier des travaux seront publiés après leur validation.</p>
              <Link className="button-priority-cta" href={href('faire-un-don')}>
                Je soutiens ce projet <ArrowRight size={17}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>


    {/* 6. CHIFFRES D'IMPACT (SOLIDARITÉS INTERNATIONAL STYLE) */}
    <section className="section-impact-stats" id="impact">
      <div className="wrap">
        <div className="impact-stats-header">
          <span className="impact-eyebrow">
            Mesure &amp; Évaluation
          </span>
          <h2>Notre impact en chiffres</h2>
          <p className="impact-intro">
            Des indicateurs concrets suivis et documentés au plus près des réalités de terrain.
          </p>
        </div>

        <div className="impact-stats-grid">
          <div className="impact-stat-item">
            <AnimatedCounter end={1250} suffix="+" duration={1500}/>
            <span className="stat-label">enfants accompagnés vers l’école</span>
          </div>
          <div className="impact-stat-item">
            <AnimatedCounter end={480} suffix="+" duration={1650}/>
            <span className="stat-label">jeunes formés à un métier</span>
          </div>
          <div className="impact-stat-item">
            <AnimatedCounter end={120} suffix="+" duration={1800}/>
            <span className="stat-label">entrepreneurs et micro-activités soutenus</span>
          </div>
          <div className="impact-stat-item">
            <AnimatedCounter end={18} suffix="" duration={1950}/>
            <span className="stat-label">projets communautaires réalisés</span>
          </div>
          <div className="impact-stat-item">
            <AnimatedCounter end={25} suffix="+" duration={2100}/>
            <span className="stat-label">partenaires et écoles mobilisés</span>
          </div>
        </div>

        <div className="impact-stats-footer">
          <Link className="button-pill-glass" href={href('programmes')}>
            Découvrir notre impact détaillé <ArrowRight size={16}/>
          </Link>
        </div>
      </div>
    </section>


    {/* 8. HISTOIRES ET TÉMOIGNAGES (STYLE CARROUSEL CITATIONS THE OCEAN CLEANUP) */}
    {/* 8. HISTOIRES ET TÉMOIGNAGES (STYLE WORLD VISION / PAAD AVEC PHOTO + CITATION + BOUTONS CIRCULAIRES) */}
    <section className="section-ocean-quotes" id="histoires">
      <div className="wrap">
        <div className="ocean-quotes-header-row">
          <div className="ocean-quotes-title-side">
            <span className="ocean-quotes-eyebrow">Récits de vie &amp; Témoignages</span>
            <h2 className="ocean-quotes-heading">
              Derrière chaque projet, une histoire
            </h2>
            <p className="ocean-quotes-subheading">
              Découvrez la voix de ceux qui réinventent leur avenir avec dignité grâce à vos dons et aux actions de terrain de PAAD.
            </p>
          </div>
        </div>

        {/* Grand bloc témoignage style photo gauche + citation droite (exact style capture) */}
        <div className="paad-testimonial-showcase">
          <div className="paad-testimonial-card">
            {/* Colonne gauche : Photo du bénéficiaire */}
            <div className="paad-testimonial-media">
              <Image
                key={activeStory.id}
                src={activeStory.image}
                alt={activeStory.alt}
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                className="paad-testimonial-img"
              />
            </div>

            {/* Colonne droite : Citation, Auteur et Boutons de navigation circulaires */}
            <div className="paad-testimonial-body">
              <div className="paad-testimonial-quote-wrap">
                <span className="paad-testimonial-quote-mark" aria-hidden="true">“</span>
                <p className="paad-testimonial-text">
                  {activeStory.quote}
                </p>
              </div>

              <div className="paad-testimonial-footer">
                <div className="paad-testimonial-author-block">
                  <h3 className="paad-testimonial-author-name">{activeStory.name}</h3>
                  <p className="paad-testimonial-author-role">{activeStory.role}</p>
                </div>

                {/* Boutons circulaires violet PAAD en bas à droite (exact style capture) */}
                <div className="paad-testimonial-nav">
                  <button
                    type="button"
                    className="paad-testimonial-btn"
                    onClick={handlePrevStory}
                    aria-label="Témoignage précédent"
                    title="Précédent"
                  >
                    <ChevronLeft size={22} strokeWidth={2.4} />
                  </button>
                  <div className="spotlight-slide-indicator">
                    <span className="indicator-current">0{currentStoryIdx + 1}</span>
                    <span className="indicator-sep">/</span>
                    <span className="indicator-total">0{testimonials.length}</span>
                  </div>
                  <button
                    type="button"
                    className="paad-testimonial-btn"
                    onClick={handleNextStory}
                    aria-label="Témoignage suivant"
                    title="Suivant"
                  >
                    <ChevronRight size={22} strokeWidth={2.4} />
                  </button>
                  <div className="paad-testimonial-dots">
                    {testimonials.map((t, idx) => (
                      <button key={t.id} type="button" className={`paad-testimonial-dot ${idx === currentStoryIdx ? 'active' : ''}`} onClick={() => setCurrentStoryIdx(idx)} aria-label={`Afficher le témoignage de ${t.name}`}/>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>





    {/* Actualités : style Blog Carousel avec colonne intro à gauche et cartes horizontales */}
    <section className="news-blog-section" id="actualites" aria-labelledby="news-heading">
      <div className="wrap news-blog-container">
        {/* Colonne gauche : Titre, description, lien et flèches de navigation */}
        <div className="news-blog-intro">
          <span className="news-blog-eyebrow">Actualités</span>
          <h2 id="news-heading" className="news-blog-heading">
            Nouveaux articles
          </h2>
          <p className="news-blog-desc">
            Explorez nos dernières nouvelles, initiatives de terrain, avancées éducatives et réflexions pour le développement durable en Haïti.
          </p>
          <Link href={href('actualites')} className="news-blog-more-link">
            Voir plus <ArrowRight size={16} aria-hidden="true" />
          </Link>

          <div className="news-blog-nav-row">
            <button
              type="button"
              className="news-blog-nav-btn"
              onClick={() => scrollNewsTrack(-1)}
              aria-label="Articles précédents"
            >
              <ArrowLeft size={19} />
            </button>
            <button
              type="button"
              className="news-blog-nav-btn"
              onClick={() => scrollNewsTrack(1)}
              aria-label="Articles suivants"
            >
              <ArrowRight size={19} />
            </button>
          </div>
        </div>

        {/* Colonne droite : Rail horizontal de cartes d'articles */}
        <div className="news-blog-track-wrap">
          <div className="news-blog-track" ref={newsTrackRef}>
            {latestNews.map((news) => (
              <article className="news-blog-card" key={news.id}>
                <Link href={href(news.path)} className="news-blog-card-img-wrap">
                  <Image src={news.image} alt={news.title} fill sizes="(max-width: 768px) 80vw, 320px" />
                </Link>
                <div className="news-blog-card-body">
                  <span className="news-blog-card-category">{news.category}</span>
                  <h3 className="news-blog-card-title">
                    <Link href={href(news.path)}>{news.title}</Link>
                  </h3>
                  <p className="news-blog-card-excerpt">{news.excerpt}</p>
                  <Link href={href(news.path)} className="news-blog-card-read">
                    Lire plus <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* 13. ALLIANCES (STYLE THE OCEAN CLEANUP) */}
    <section className="section-partners" id="partenaires">
      <div className="wrap">
        <h2 className="ocean-alliances-title">
          Alliances
        </h2>
        <p className="ocean-alliances-subtitle">
          Ils avancent avec nous
        </p>

        <div className="ocean-alliances-grid">
          {/* 1. ONG & Associations */}
          <div className="ocean-alliance-logo-item">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <div className="logo-text">
              <span className="logo-main">ONG &amp; ASSOCIATIONS</span>
              <span className="logo-tag">Alliance Solidaire</span>
            </div>
          </div>

          {/* 2. Entreprises solidaires */}
          <div className="ocean-alliance-logo-item">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
            <div className="logo-text">
              <span className="logo-main">ENTREPRISES SOLIDAIRES</span>
              <span className="logo-tag">Mécénat &amp; RSE</span>
            </div>
          </div>

          {/* 3. Universités & Écoles */}
          <div className="ocean-alliance-logo-item">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/>
            </svg>
            <div className="logo-text">
              <span className="logo-main">UNIVERSITÉS &amp; ÉCOLES</span>
              <span className="logo-tag">Pôles d'Excellence</span>
            </div>
          </div>

          {/* 4. Réseaux de la Diaspora */}
          <div className="ocean-alliance-logo-item">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
            </svg>
            <div className="logo-text">
              <span className="logo-main">RÉSEAUX DE LA DIASPORA</span>
              <span className="logo-tag">Mobilisation Mondiale</span>
            </div>
          </div>

          {/* 5. Collectivités territoriales */}
          <div className="ocean-alliance-logo-item">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
            </svg>
            <div className="logo-text">
              <span className="logo-main">COLLECTIVITÉS TERRITORIALES</span>
              <span className="logo-tag">Action Publique Locale</span>
            </div>
          </div>

          {/* 6. Bailleurs & Fondations */}
          <div className="ocean-alliance-logo-item">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
            </svg>
            <div className="logo-text">
              <span className="logo-main">BAILLEURS &amp; FONDATIONS</span>
              <span className="logo-tag">Financements d'Impact</span>
            </div>
          </div>
          {allianceTypes.map(({ label, tag, Icon }) => (
            <div className="ocean-alliance-logo-item" key={`loop-${label}`} aria-hidden="true">
              <Icon size={34} strokeWidth={2.2}/>
              <div className="logo-text">
                <span className="logo-main">{label}</span>
                <span className="logo-tag">{tag}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="ocean-alliances-desc">
          ONG, entreprises, universités, associations, collectivités et réseaux de la diaspora : nous sommes honorés de compter sur des partenaires engagés pour soutenir durablement les communautés en Haïti.
        </p>

        <Link href={href('partenaires')} className="ocean-alliances-btn">
          VOIR TOUS NOS PARTENAIRES
        </Link>
      </div>
    </section>


    {/* 12. NEWSLETTER : RESTER ENGAGE APRES AVOIR DECOUVERT LES ACTIONS */}
    <section className="section-newsletter" id="newsletter">
      <div className="wrap">
        <div className="newsletter-inner-box">
          <Eyebrow>Restons connectés</Eyebrow>
          <h2 className="newsletter-title">
            S’informer, c’est déjà agir
          </h2>
          <p className="newsletter-copy">
            Recevez les actualités de PAAD, les avancées de nos projets et les témoignages du terrain.
          </p>

          {newsSent ? (
            <div className="newsletter-success">
              ✓ Merci pour votre inscription !
            </div>
          ) : (
            <form className="newsletter-form-row" onSubmit={handleNewsletterSubmit}>
              <input
                type="text"
                className="newsletter-input"
                placeholder="Votre prénom"
                value={firstNameInput}
                onChange={e => setFirstNameInput(e.target.value)}
                required
                aria-label="Prénom"
              />
              <input
                type="email"
                className="newsletter-input"
                placeholder="Votre adresse email"
                value={emailInput}
                onChange={e => setEmailInput(e.target.value)}
                required
                aria-label="Email"
              />
              <button type="submit" className="newsletter-submit-btn">
                Je m’inscris <ArrowRight size={18}/>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>


  </>;
}


export function ContentPage({ lang, slug, data }: { lang: 'fr' | 'en' | 'es'; slug: string; data: SiteData }) {
  const page = pages[slug];
  if (!page) return null;
  if (page.type === 'donate') return <DonationForm lang={lang}/>;
  if (page.type === 'contact') return <ContactForm topic={page.kicker} lang={lang}/>;
  if (slug === 'qui-sommes-nous') return <AboutPage lang={lang} data={data}/>;
  return <><section className="page-hero"><div className="wrap"><Eyebrow>{page.kicker}</Eyebrow><h1>{page.title}</h1><p>{page.text}</p></div></section><div className="page-body wrap">
    {page.type !== 'contact' && <PageBody lang={lang} slug={slug} data={data}/>} 
  </div><section className="page-cta"><div className="wrap"><h2>Construisons la suite ensemble.</h2><Link className="button button-light" href={`/${lang}/contact`}>Prendre contact <ArrowRight size={17}/></Link></div></section></>;
}

export function AboutPage({ lang }: { lang: 'fr' | 'en' | 'es'; data: SiteData }) {
  const href = (path: string) => `/${lang}/${path}`;

  const priorities = [
    ['01', 'Éducation', 'Améliorer l’accès à l’apprentissage, soutenir les écoles et développer les compétences des enfants et des jeunes.'],
    ['02', 'Développement économique', 'Renforcer la formation professionnelle, l’employabilité, l’entrepreneuriat et les activités génératrices de revenus.'],
    ['03', 'Développement communautaire', 'Accompagner des initiatives locales qui renforcent durablement les capacités et l’autonomie des communautés.']
  ];

  return <main className="about-new">
    <section className="about-new-hero">
      <Image src="/images/haiti-cinematic-hero.jpg" alt="Jeunes Haïtiens dans leur communauté" fill priority sizes="100vw"/>
      <div className="about-new-hero-shade"/>
      <div className="wrap about-new-hero-copy"><span>À propos de PAAD</span><h1>Nous sommes PAAD.</h1><p>Nous agissons pour renforcer l’éducation, créer des opportunités économiques et accompagner durablement les communautés en Haïti.</p><div><Link href="/#programmes">Découvrir nos actions <ArrowRight size={17}/></Link><Link href={href('faire-un-don')}>Nous soutenir <ArrowRight size={17}/></Link></div></div>
    </section>

    {/* SECTION : LES ORIGINES */}
    <section className="section-origins" id="origines">
      <div className="wrap">
        <div className="origins-grid">
          <div className="origins-sticky-title">
            <span className="origins-eyebrow">LES ORIGINES</span>
            <h2 className="origins-title">
              Comment nous<br />
              avons commencé.
            </h2>
            <div className="origins-date-block"><span className="origins-year">2020</span><span className="origins-date-label">Le début de notre engagement</span></div>
          </div>

          <div className="origins-content">
            <h3 className="origins-subtitle">
              Une rencontre. Une prise de conscience.<br />
              Un engagement pour Haïti.
            </h3>
            <div className="origins-text">
              <p>
                En 2020, au cœur des crises et des réalités quotidiennes vécues par les communautés en Haïti, <strong>Renel ROSENE</strong>, <strong>Renald ROSENE</strong> et <strong>Esther Gladelle TOUSSAINT</strong> ont fait un constat lucide : l’urgence humanitaire ponctuelle, bien qu’indispensable, ne permet pas aux familles de sortir de la précarité si elle ne s’adosse pas à une véritable passerelle vers l’autonomie.
              </p>
              <p>
                Portés par une profonde conviction et la volonté d’offrir aux enfants et aux familles les moyens de construire leur propre avenir avec fierté et dignité, ils ont décidé d’unir leurs compétences de terrain, en éducation, en logistique et en accompagnement communautaire. C’est de cet engagement partagé qu’est née la <strong>Passerelle d’Actions pour l’Autonomie et le Développement (PAAD)</strong>.
              </p>
              <p>
                Dès ses premières actions, PAAD s’est engagée sur deux piliers indissociables : l’accès à une éducation de qualité et pérenne pour les plus jeunes, ainsi que la formation technique, l’accès à l’énergie propre et le soutien économique direct pour les jeunes et les mères de famille.
              </p>
              <p>
                Aujourd’hui, entourée d’écoles partenaires, d’artisans et d’équipes engagées sur place, PAAD poursuit cette mission en bâtissant des projets concrets, mesurables et durables, ancrés au plus près des besoins réels des territoires haïtiens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* SECTION : LES PERSONNES DERRIÈRE LA MISSION */}
    <section className="section-team-mission" id="equipe">
      <div className="wrap">
        <div className="team-mission-head">
          <div className="team-mission-head-left">
            <span className="team-mission-eyebrow">LES PERSONNES DERRIÈRE LA MISSION</span>
            <h2 className="team-mission-title">
              Une équipe engagée<br />
              pour Haïti.
            </h2>
          </div>
          <div className="team-mission-head-right">
            <p className="team-mission-lead">
              Des parcours complémentaires en développement, éducation, finance et politiques publiques, au service d’une même vision.
            </p>
          </div>
        </div>

        <div className="team-mission-grid">
          {/* 1. Renel ROSENE */}
          <article className="team-mission-card">
            <div className="team-mission-photo-wrap">
              <Image src="/images/team-renel-rosene-portrait.jpg" alt="Renel ROSENE" fill sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" style={{ objectFit: 'cover' }} priority />
            </div>
            <span className="team-mission-role">DIRECTION STRATÉGIQUE</span>
            <h3 className="team-mission-name">Renel ROSENE</h3>
            <details className="team-mission-footer"><summary className="team-mission-btn"><span>Découvrir son parcours</span><span className="team-mission-plus" aria-hidden="true">+</span></summary><div className="team-mission-bio">Titulaire d'un master en droit des affaires et d'un MBA spécialisé en marketing digital, data et intelligence artificielle, Renel allie rigueur juridique et expertise technologique de pointe. Fort d'un parcours solide entre conseil en acquisition numérique, innovation et automatisation, il impulse la vision stratégique de PAAD. Sa maîtrise des leviers digitaux, sa vision prospective et son sens de l'impact mesurable font de lui le moteur idéal pour concevoir des trajectoires durables, structurées et adaptées aux défis d'environnements complexes.</div></details>
          </article>

          {/* 2. Renald ROSENE */}
          <article className="team-mission-card">
            <div className="team-mission-photo-wrap">
              <Image src="/images/team-renald-rosene.jpg" alt="Renald ROSENE" fill sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
            </div>
            <span className="team-mission-role">OPÉRATIONS &amp; TERRAIN</span>
            <h3 className="team-mission-name">Renald ROSENE</h3>
            <details className="team-mission-footer"><summary className="team-mission-btn"><span>Découvrir son parcours</span><span className="team-mission-plus" aria-hidden="true">+</span></summary><div className="team-mission-bio">Photographe et entrepreneur, Renald ancre son action au plus près des réalités concrètes et humaines. Au contact direct des communautés et des équipes locales, il pilote le déploiement opérationnel, la logistique terrain, le soutien aux cantines scolaires et le suivi de proximité des ateliers techniques. Son regard affûté, son sens pratique et son engagement de terrain font de lui un acteur indispensable pour traduire les objectifs de PAAD en résultats tangibles et durables au quotidien.</div></details>
          </article>

          {/* 3. Esther Gladelle TOUSSAINT */}
          <article className="team-mission-card">
            <div className="team-mission-photo-wrap">
              <Image src="/images/team-esther-toussaint.jpg" alt="Esther Gladelle TOUSSAINT" fill sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
            </div>
            <span className="team-mission-role">ÉDUCATION &amp; BOURSES</span>
            <h3 className="team-mission-name">Esther Gladelle TOUSSAINT</h3>
            <details className="team-mission-footer"><summary className="team-mission-btn"><span>Découvrir son parcours</span><span className="team-mission-plus" aria-hidden="true">+</span></summary><div className="team-mission-bio">Actuellement étudiante en deuxième année de psychologie et directrice générale d'Atizana Lakay, une entreprise dédiée aux soins cosmétiques, Esther allie sensibilité humaine et fibre entrepreneuriale. Forte de son expérience à la tête d'une structure engagée et de son intérêt profond pour le développement individuel, elle pilote avec engagement le pôle éducatif de PAAD. Sa créativité, son écoute et son leadership pragmatique font d'elle un pilier essentiel pour concevoir des initiatives pédagogiques adaptées et inspirer les générations futures face aux défis du terrain.</div></details>
          </article>
        </div>
      </div>
    </section>

    {/* SECTION : NOTRE CONVICTION / POURQUOI NOUS AGISSONS */}
    <section className="section-conviction" id="pourquoi">
      <div className="wrap conviction-grid">
        {/* Colonne Gauche : Conviction */}
        <div className="conviction-content">
          <span className="conviction-eyebrow">NOTRE CONVICTION</span>
          <h2 className="conviction-title">Des défis majeurs nécessitent des solutions durables.</h2>

          <div className="conviction-quote">
            <span className="conviction-quote-tag">Engagement de terrain</span>
            <blockquote className="conviction-quote-text">
              « Le potentiel existe. Notre rôle est de contribuer à créer les conditions pour qu’il puisse se développer. »
            </blockquote>
          </div>

          <div className="conviction-paragraphs">
            <p>L’accès limité à une éducation de qualité fragilise les parcours dès l’enfance.</p>
            <p>Le manque de formation et d’opportunités freine l’accès à l’emploi et à l’autonomie.</p>
            <p>De nombreuses initiatives locales manquent encore des ressources nécessaires pour durer.</p>
          </div>

          <div className="conviction-action">
            <Link href="/#programmes" className="conviction-link">
              En savoir plus sur nos actions <span className="conviction-arrow">↗</span>
            </Link>
          </div>
        </div>

        {/* Colonne Droite : Carte Médias */}
        <div className="conviction-card-wrap">
          <div className="conviction-card">
            <div className="conviction-card-header">
              <span className="conviction-card-label">DÉCOUVRIR EN IMAGES</span>
              <span className="conviction-card-badge">
                <Play size={10} fill="currentColor" />
                VIDÉO
              </span>
            </div>

            <div className="conviction-video-frame">
              <Image
                src="/images/haiti-cinematic-hero.jpg"
                alt="Présentation des actions de terrain de PAAD en Haïti"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="conviction-video-poster"
              />
              <div className="conviction-video-scrim" />
              <Link href="/media.html" className="conviction-play-btn" aria-label="Découvrir les vidéos PAAD">
                <Play size={22} fill="currentColor" />
              </Link>
              <div className="conviction-video-badge-btm">PAAD · Reportage terrain</div>
            </div>

            <div className="conviction-video-caption">
              <Link href="/media.html" className="conviction-caption-link">
                Voir nos vidéos et galeries de terrain <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="conviction-card-banner">
              <span className="conviction-banner-tag">PAAD · HAÏTI</span>
              <h3 className="conviction-banner-title">Une vision commune. Un avenir à construire ensemble.</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="about-new-priorities"><div className="wrap"><div className="about-new-heading"><span className="about-new-label">Nos priorités</span><h2>Trois leviers pour agir dans la durée.</h2><p>Une action cohérente, de l’apprentissage à l’autonomie économique et communautaire.</p></div><div className="about-new-priority-grid">{priorities.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

    <section className="about-new-vision"><Image src="/images/community-haiti.webp" alt="Communauté réunie en Haïti" fill sizes="100vw"/><div/><div className="wrap"><span>Notre vision</span><h2>Construire des communautés capables de créer elles-mêmes leur avenir.</h2><p>PAAD défend un développement durable fondé sur l’éducation, l’autonomie économique et la participation locale.</p></div></section>
  </main>;
}

function LegacyAboutPage({ lang, data }: { lang: 'fr' | 'en' | 'es'; data: SiteData }) {
  const href = (path: string) => `/${lang}/${path}`;

  return (
    <>
      {/* 1. HERO MONUMENTAL */}
      <section className="about-hero" id="top">
        <div className="about-hero-bg">
          <Image
            src="/images/haiti-cinematic-hero.jpg"
            alt="Jeunesse haïtienne et communauté PAAD"
            fill
            sizes="100vw"
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className="about-hero-scrim" />
        </div>
        <div className="wrap about-hero-content">
          <span className="about-hero-kicker">
            <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: 'var(--purple-hover)' }} />
            Organisation non gouvernementale · Haïti
          </span>
          <h1 className="about-hero-title">
            Bâtir l’avenir avec et pour les communautés d’Haïti.
          </h1>
          <p className="about-hero-lead">
            Créée en 2024, la <strong>Passerelle d’Actions pour l’Autonomie et le Développement (PAAD)</strong> est une organisation laïque, indépendante et à but non lucratif basée à Port-au-Prince. Notre mission : transformer l’urgence éducative et économique en autonomie pérenne, directement sur le terrain.
          </p>

          <div className="about-facts-strip">
            <div className="about-fact-item">
              <span>Création</span>
              <strong>2024</strong>
            </div>
            <div className="about-fact-item">
              <span>Présence</span>
              <strong>100% Terrain</strong>
            </div>
            <div className="about-fact-item">
              <span>Siège social</span>
              <strong>Port-au-Prince</strong>
            </div>
            <div className="about-fact-item">
              <span>Piliers d’action</span>
              <strong>Éducation &amp; Autonomie</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION HISTOIRE ET FONDATION */}
      <section className="section-history" id="histoire">
        <div className="wrap">
          <div className="klabu-spotlight-row klabu-spotlight-unified">
            <div className="spotlight-text-side">
              <span className="klabu-spotlight-eyebrow">Notre histoire</span>
              <h2 className="spotlight-main-title">
                Trois fondateurs, une conviction partagée.
              </h2>
              <div className="terrain-editorial-copy">
                <p className="terrain-lead">
                  Face aux défis majeurs auxquels fait face la société haïtienne, nous avons refusé la résignation et le fatalisme. Le développement pérenne ne s’importe pas de l’extérieur : il grandit avec les talents et l’énergie des Haïtiens eux-mêmes.
                </p>
                <p className="spotlight-editorial-text">
                  En 2024, <strong>Renel Rosene</strong>, <strong>Renald Rosene</strong> et <strong>Esther Gladelle Toussaint</strong> unissent leurs expériences du terrain associatif, de l’éducation et de l’ingénierie pour fonder PAAD. Leur boussole : rompre avec l’assistanat d’urgence sans lendemain pour concevoir des programmes durables qui renforcent directement l’autonomie des enfants, des jeunes et des femmes.
                </p>
              </div>

              <div className="problem-focus" aria-label="Nos principes d'action">
                <div>
                  <BookOpen size={20} />
                  <span><strong>Écouter avant d’agir</strong>Chaque projet naît d’un dialogue authentique avec les familles et les écoles.</span>
                </div>
                <div>
                  <UsersRound size={20} />
                  <span><strong>Co-construire avec le terrain</strong>Nous formons et outillons les acteurs locaux pour pérenniser chaque avancée.</span>
                </div>
              </div>
            </div>

            <div className="klabu-spotlight-media spotlight-carousel-media">
              <div className="klabu-media-frame spotlight-carousel-frame">
                <Image
                  src="/images/haiti-student-classroom.jpg"
                  alt="Enfants apprenant en Haïti avec les bourses PAAD"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className="klabu-sticker-badge sticker-amber">
                  <span>PAAD</span>
                  <strong>FONDATION</strong>
                </div>
                <div className="spotlight-media-caption">
                  <span className="caption-tag">ANCRAGE LOCAL</span>
                  <span className="caption-text">Port-au-Prince · L’éducation au centre de chaque décision</span>
                </div>
              </div>
            </div>
          </div>

          {/* Les Fondateurs */}
          <div className="founders-grid" id="equipe">
            <div className="founder-card">
              <span className="founder-index">01 · Cofondateur</span>
              <h3 className="founder-name">Renel Rosene</h3>
              <p className="founder-role">Direction Stratégique &amp; Développement</p>
              <p className="founder-bio">
                Engagé de longue date pour l’émancipation des jeunes en Haïti, il pilote les orientations stratégiques, les partenariats institutionnels et l’extension des programmes éducatifs et techniques de PAAD.
              </p>
            </div>

            <div className="founder-card">
              <span className="founder-index">02 · Cofondateur</span>
              <h3 className="founder-name">Renald Rosene</h3>
              <p className="founder-role">Opérations &amp; Déploiement Terrain</p>
              <p className="founder-bio">
                Au contact quotidien des communautés et des équipes locales, il coordonne la logistique des cantines scolaires, la livraison des fournitures et le bon déroulement des ateliers d’apprentissage.
              </p>
            </div>

            <div className="founder-card">
              <span className="founder-index">03 · Cofondatrice</span>
              <h3 className="founder-name">Esther Gladelle Toussaint</h3>
              <p className="founder-role">Programmes Pédagogiques &amp; Bourses</p>
              <p className="founder-bio">
                Spécialiste de l’accompagnement éducatif et de la pédagogie, elle veille à la sélection rigoureuse des boursiers, au suivi scolaire personnalisé et au soutien des enseignants partenaires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION MISSION & VISION */}
      <section className="section-ocean-duo-pillars" id="mission">
        <div className="wrap ocean-duo-header">
          <span className="ocean-duo-eyebrow">Cap stratégique</span>
          <h2 className="ocean-duo-heading">Notre Mission &amp; Notre Vision</h2>
          <p className="ocean-duo-sub">
            L’éducation ouvre l’esprit et donne des repères. L’autonomie économique convertit ce potentiel en dignité concrète et en liberté pour les familles.
          </p>
        </div>

        <div className="ocean-duo-grid">
          <div className="ocean-duo-panel">
            <div className="ocean-duo-bg">
              <Image
                src="/images/hero-child-education.jpg"
                alt="Enfant souriant avec son cahier d'école en Haïti"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
              <div className="ocean-duo-scrim" />
            </div>
            <div className="ocean-duo-content">
              <span className="ocean-duo-index">01 · Mission</span>
              <h3 className="ocean-duo-title">
                <span className="wt-light">DÉVELOPPER</span><br />
                <span className="wt-bold">L'ÉDUCATION</span>
              </h3>
              <p className="ocean-duo-text">
                Garantir à chaque enfant en Haïti un parcours d’apprentissage complet, digne et continu : bourses d’études annuelles, manuels scolaires neufs, repas chauds quotidiens et formation certifiée des instituteurs.
              </p>
              <Link href={href('actions/education')} className="ocean-duo-btn">
                Découvrir nos actions éducatives <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="ocean-duo-panel">
            <div className="ocean-duo-bg">
              <Image
                src="/images/haiti-tech-workshop.jpg"
                alt="Atelier technique et autonomie économique en Haïti"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
              <div className="ocean-duo-scrim" />
            </div>
            <div className="ocean-duo-content">
              <span className="ocean-duo-index">02 · Vision</span>
              <h3 className="ocean-duo-title">
                <span className="wt-light">CONSTRUIRE</span><br />
                <span className="wt-bold">L'AUTONOMIE</span>
              </h3>
              <p className="ocean-duo-text">
                Bâtir un Haïti autonome où la jeunesse dispose des compétences concrètes pour les métiers d’avenir (énergie solaire, numérique, artisanat qualifié) et où les femmes créent leurs propres micro-entreprises pérennes.
              </p>
              <Link href={href('actions/developpement-economique')} className="ocean-duo-btn">
                Découvrir nos filières d’avenir <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION VALEURS */}
      <section className="section-values" id="valeurs">
        <div className="wrap">
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
            <Eyebrow>Nos repères</Eyebrow>
            <h2 style={{ fontFamily: 'Manrope, Arial, sans-serif', fontSize: 'clamp(28px, 3.4vw, 44px)', fontWeight: 800, color: 'var(--purple-dark)', margin: '8px 0 16px' }}>
              Des principes inébranlables qui guident nos actes
            </h2>
            <p style={{ fontSize: '16.5px', color: '#5c5260', lineHeight: 1.6, margin: 0 }}>
              Chaque euro collecté, chaque décision opérationnelle et chaque partenariat conclu respecte strictement nos quatre engagements fondamentaux.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><ShieldCheck size={26} /></div>
              <h3>Intégrité &amp; Transparence</h3>
              <p>Gestion documentée, traçabilité intégrale des fonds et publication de rapports réguliers vérifiés pour honorer la confiance de nos donateurs et partenaires.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Compass size={26} /></div>
              <h3>Ancrage &amp; Proximité</h3>
              <p>Aucun programme n’est décrété d’en haut : nous travaillons main dans la main avec les directeurs d’école, les comités de parents et les artisans sur le sol haïtien.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><TrendingUp size={26} /></div>
              <h3>Autonomie Durable</h3>
              <p>Nous concevons des projets qui génèrent de la valeur locale et des revenus pérennes afin d’affranchir durablement les bénéficiaires de l’aide humanitaire d’urgence.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Heart size={26} /></div>
              <h3>Solidarité &amp; Dignité</h3>
              <p>Une approche rigoureusement laïque et apolitique, au service de tous les enfants sans distinction d’origine, de religion ou de condition sociale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CHIFFRES D'IMPACT */}
      <section className="section-impact-stats" id="impact">
        <div className="wrap">
          <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 54px' }}>
            <span style={{ color: '#d8bedb', fontSize: 12, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Notre engagement vérifié</span>
            <h2 style={{ fontFamily: 'Manrope, Arial, sans-serif', fontSize: 'clamp(30px, 3.5vw, 46px)', fontWeight: 800, color: '#ffffff', margin: '8px 0 14px' }}>
              Des résultats concrets sur le terrain
            </h2>
            <p style={{ color: '#e2d6e4', fontSize: 16, lineHeight: 1.6, margin: 0 }}>
              Chaque avancée est mesurée et documentée au plus près des écoles et des ateliers en Haïti.
            </p>
          </div>

          <div className="impact-stats-grid">
            <div className="impact-stat-card">
              <span className="impact-stat-number">1 250+</span>
              <span className="impact-stat-label">Enfants scolarisés &amp; soutenus</span>
              <p className="impact-stat-sub">Bourses scolaires complètes et accès aux cantines quotidiennes.</p>
            </div>
            <div className="impact-stat-card">
              <span className="impact-stat-number">480+</span>
              <span className="impact-stat-label">Jeunes formés aux métiers utiles</span>
              <p className="impact-stat-sub">Initiation au numérique, énergie solaire et maintenance technique.</p>
            </div>
            <div className="impact-stat-card">
              <span className="impact-stat-number">100%</span>
              <span className="impact-stat-label">Allocation directe terrain</span>
              <p className="impact-stat-sub">Chaque euro de don est investi au bénéfice direct des actions en Haïti.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION FINAL */}
      <section className="page-cta">
        <div className="wrap">
          <h2>Agissons aujourd’hui pour ouvrir de nouvelles possibilités en Haïti.</h2>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 24 }}>
            <Link className="button button-primary" href={href('faire-un-don')}>
              Faire un don <Heart size={17} />
            </Link>
            <Link className="button button-light" href={href('contact')}>
              Prendre contact <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function DonationForm({ lang = 'fr' }: { lang?: string }) {
  const [amount, setAmount] = useState(50);
  const [other, setOther] = useState('');
  const [frequency, setFrequency] = useState<'ponctuel'|'mensuel'>('ponctuel');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [updates, setUpdates] = useState(false);
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@paad-haiti.org';
  const effectiveAmount = other || amount;
  const mailSubject = 'Intention de don';
  const mailBody = `Bonjour, je souhaite soutenir PAAD à hauteur de ${effectiveAmount} € (${frequency}).\n\nNom : ${firstName} ${lastName}\nEmail : ${donorEmail}\nTéléphone : ${phone || 'Non renseigné'}\nDon anonyme : ${anonymous ? 'Oui' : 'Non'}\nActualités PAAD : ${updates ? 'Oui' : 'Non'}.`;
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

  return (
    <section className="donation-screen">
      <div className="donation-visual">
        <Image src="/images/haiti-student-classroom.jpg" alt="Écolière dans sa salle de classe en Haïti" fill priority sizes="50vw"/>
        <div className="donation-visual-shade"/>
        <Link href={`/${lang}`} className="donation-brand"><Image src="/images/paad-emblem-white-trans.png" alt="Logo PAAD" width={44} height={44}/><strong>PAAD</strong></Link>
        <div className="donation-visual-copy"><span>UN DON, UNE POSSIBILITÉ</span><p>Votre soutien accompagne l’éducation, les compétences et l’autonomie économique en Haïti.</p></div>
      </div>

      <div className="donation-panel" tabIndex={0} aria-label="Formulaire de don, faites défiler pour voir toutes les étapes">
        <div className="donation-form-inner">
          <span className="donation-kicker">Soutenir PAAD</span>
          <h1>Faites un don</h1>
          <p className="donation-lead">Choisissez la forme de votre soutien. Le paiement en ligne sera activé après validation du dispositif officiel de collecte.</p>

        <div className="donation-frequency" role="group" aria-label="Fréquence du don">
          <button
            type="button"
            className={frequency === 'ponctuel' ? 'active' : ''}
            onClick={() => setFrequency('ponctuel')}
          >
            Une fois
          </button>
          <button
            type="button"
            className={frequency === 'mensuel' ? 'active' : ''}
            onClick={() => setFrequency('mensuel')}
          >
            Mensuel
          </button>
        </div>

        <fieldset className="donation-block"><legend>Montant du don</legend>

        <div className="donation-amounts">
          {[20, 50, 100, 250].map((n) => (
            <button
              key={n}
              type="button"
              className={amount === n && !other ? 'active' : ''}
              onClick={() => {
                setAmount(n);
                setOther('');
              }}
            >
              {n} €
            </button>
          ))}
        </div>

          <div className="donation-custom">
            <label htmlFor="customAmount">Autre montant</label>
            <input
              id="customAmount"
              type="number"
              min="1"
              value={other}
              onChange={(e) => {
                setOther(e.target.value);
                setAmount(0);
              }}
              placeholder="Montant en euros"
            />
          </div>
        </fieldset>

        <fieldset className="donation-block"><legend>Vos informations</legend>
          <div className="donation-fields two"><label>Prénom<input required value={firstName} onChange={e=>setFirstName(e.target.value)} /></label><label>Nom<input required value={lastName} onChange={e=>setLastName(e.target.value)} /></label></div>
          <div className="donation-fields"><label>Adresse email<input required type="email" value={donorEmail} onChange={e=>setDonorEmail(e.target.value)} /></label><label>Téléphone <small>facultatif</small><input type="tel" value={phone} onChange={e=>setPhone(e.target.value)} /></label></div>
          <label className="donation-check"><input type="checkbox" checked={anonymous} onChange={e=>setAnonymous(e.target.checked)}/><span>Je souhaite que mon soutien reste anonyme.</span></label>
        </fieldset>

        <fieldset className="donation-block"><legend>Restons en contact</legend>
          <p>Recevez les nouvelles des projets soutenus et les publications de PAAD. Vous pourrez modifier ce choix à tout moment.</p>
          <label className="donation-check"><input type="checkbox" checked={updates} onChange={e=>setUpdates(e.target.checked)}/><span>Je souhaite recevoir les actualités de PAAD.</span></label>
        </fieldset>

        <div className="donation-summary"><span>Votre intention de don</span><strong>{effectiveAmount || 0} € · {frequency === 'ponctuel' ? 'une fois' : 'par mois'}</strong></div>
        <a className="donation-submit" href={mailtoUrl}>Contacter PAAD pour donner <ArrowRight size={19}/></a>
        <p className="donation-legal">Aucun paiement n’est débité sur ce site. Votre logiciel de messagerie préparera une demande sécurisée à l’équipe PAAD.</p>
        </div>
      </div>
    </section>
  );
}

function ContactForm({ topic, lang = 'fr' }: { topic: string; lang?: string }) {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [subject,setSubject]=useState(topic || 'Prise de contact');
  const [message,setMessage]=useState('');
  const recipient = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@paad-haiti.org';
  const mail = `mailto:${recipient}?subject=${encodeURIComponent(`${subject} - ${name}`)}&body=${encodeURIComponent(`${message}\n\nNom : ${name}\nEmail : ${email}`)}`;

  return <section className="contact-screen">
    <div className="contact-visual">
      <Image src="/images/haiti-digital-class.jpg" alt="Jeunes en apprentissage avec PAAD en Haïti" fill priority sizes="50vw"/>
      <div className="contact-visual-shade"/>
      <Link href={`/${lang}`} className="contact-brand"><Image src="/images/paad-emblem-white-trans.png" alt="Logo PAAD" width={44} height={44}/><strong>PAAD</strong></Link>
      <div className="contact-visual-content">
        <h2>Construisons ensemble un avenir durable pour Haïti.</h2>
        <p>Partagez votre projet, vos idées ou votre souhait de partenariat.</p>
        <dl>
          <div><dt>Siège</dt><dd>Port-au-Prince, Haïti</dd></div>
          <div><dt>E-mail</dt><dd>{recipient}</dd></div>
          <div><dt>Réponse</dt><dd>Sous 72 heures ouvrées</dd></div>
        </dl>
      </div>
    </div>
    <div className="contact-panel" tabIndex={0} aria-label="Formulaire de contact">
      <div className="contact-form-inner">
        <span className="contact-kicker">Prendre contact</span>
        <h1>Écrivez à l’équipe PAAD</h1>
        <p>Présentez-nous votre demande. Notre équipe vous répondra dans les meilleurs délais.</p>
        <form onSubmit={e=>{e.preventDefault();location.href=mail}}>
          <div className="contact-fields two">
            <label>Votre nom complet<input required value={name} onChange={e=>setName(e.target.value)} placeholder="Ex. Jean Dupont"/></label>
            <label>Adresse e-mail<input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="nom@exemple.org"/></label>
          </div>
          <div className="contact-fields">
            <label>Sujet<select required value={subject} onChange={e=>setSubject(e.target.value)}><option>Prise de contact</option><option>Partenariat</option><option>Bénévolat</option><option>Soutien financier / Don</option><option>Presse &amp; Médias</option></select></label>
            <label>Votre message<textarea required rows={7} value={message} onChange={e=>setMessage(e.target.value)} placeholder="Expliquez votre projet, votre question ou votre proposition..."/></label>
          </div>
          <button className="contact-submit" type="submit">Préparer le message <ArrowRight size={18}/></button>
          <p className="contact-legal">L’envoi ouvre votre logiciel de messagerie. PAAD utilise vos informations uniquement pour répondre à votre demande.</p>
        </form>
      </div>
    </div>
  </section>;
}
