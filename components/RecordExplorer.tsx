'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Search, X } from 'lucide-react';
import type { Article, Project } from '@/lib/site-data';

type Props = { kind: 'projects'; records: Project[]; lang: string } | { kind: 'articles'; records: Article[]; lang: string };

export function RecordExplorer(props: Props) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const options = useMemo(() => Array.from(new Set(props.records.map(item => props.kind === 'projects' ? (item as Project).status : (item as Article).category))), [props]);
  const matches = useMemo(() => {
    const term = query.trim().toLocaleLowerCase('fr');
    return props.records.filter(item => {
      const group = props.kind === 'projects' ? (item as Project).status : (item as Article).category;
      const haystack = [item.title, item.summary, props.kind === 'projects' ? (item as Project).country : (item as Article).category].join(' ').toLocaleLowerCase('fr');
      return (category === 'all' || group === category) && (!term || haystack.includes(term));
    });
  }, [props, query, category]);
  const base = props.kind === 'projects' ? 'projets' : 'actualites';
  return <div className="record-explorer">
    <div className="explorer-toolbar"><label className="explorer-search"><Search size={18}/><span className="sr-only">Rechercher</span><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder={props.kind === 'projects' ? 'Rechercher un projet' : 'Rechercher une actualité'}/></label><label className="explorer-select"><span className="sr-only">Filtrer</span><select value={category} onChange={event => setCategory(event.target.value)}><option value="all">{props.kind === 'projects' ? 'Tous les statuts' : 'Toutes les catégories'}</option>{options.map(option => <option key={option} value={option}>{option}</option>)}</select></label><span className="explorer-count">{matches.length} résultat{matches.length > 1 ? 's' : ''}</span></div>
    {matches.length ? <div className="record-grid">{matches.map(item => <Link className="record-card" href={`/${props.lang}/${base}/${item.slug}`} key={item.slug}><div className="record-image"><Image src={item.image || (props.kind === 'projects' ? '/images/workshop-haiti.webp' : '/images/community-haiti.webp')} alt="" fill sizes="(max-width: 700px) 100vw, 33vw"/></div><div><span>{props.kind === 'projects' ? `${(item as Project).country} · ${(item as Project).status}` : `${(item as Article).category} · ${(item as Article).date}`}</span><h3>{item.title}</h3><p>{item.summary}</p><strong>{props.kind === 'projects' ? 'Découvrir le projet' : 'Lire l’article'} <ArrowUpRight size={16}/></strong></div></Link>)}</div> : <div className="explorer-empty"><h3>Aucun résultat pour cette recherche.</h3><p>Essayez un autre mot ou réinitialisez les filtres.</p><button onClick={() => { setQuery(''); setCategory('all'); }}><X size={16}/> Effacer les filtres</button></div>}
  </div>;
}
