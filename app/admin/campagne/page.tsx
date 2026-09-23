'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Save } from 'lucide-react';
import type { Campaign, SiteData } from '@/lib/site-data';

const blank: Campaign = { title: '', description: '', target: 0, raised: 0, active: false };
export default function CampaignAdmin() {
  const [data,setData]=useState<SiteData|null>(null);
  const [message,setMessage]=useState('');
  const [saving,setSaving]=useState(false);
  useEffect(()=>{fetch('/api/admin/data',{cache:'no-store'}).then(async res=>{if(res.ok)setData(await res.json());else setMessage('Connectez-vous dans l’administration pour modifier la campagne.')} )},[]);
  const campaign=data?.campaign||blank;
  function change(key:keyof Campaign,value:string|number|boolean){if(!data)return;setData({...data,campaign:{...campaign,[key]:value}})}
  async function save(){if(!data)return;setSaving(true);const res=await fetch('/api/admin/data',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});setSaving(false);setMessage(res.ok?'Campagne enregistrée.':'Enregistrement impossible.');}
  return <main className="campaign-admin"><Link href="/admin"><ArrowLeft size={17}/> Retour aux contenus</Link><h1>Campagne prioritaire</h1>{data?<><p>Cette campagne apparaît sur l’accueil uniquement lorsqu’elle est activée.</p><div className="campaign-admin-form"><label>Nom de la campagne<input value={campaign.title} onChange={e=>change('title',e.target.value)}/></label><label>Description<textarea rows={5} value={campaign.description} onChange={e=>change('description',e.target.value)}/></label><div><label>Objectif (€)<input type="number" min="0" value={campaign.target} onChange={e=>change('target',Number(e.target.value))}/></label><label>Collecté (€)<input type="number" min="0" value={campaign.raised} onChange={e=>change('raised',Number(e.target.value))}/></label></div><label className="campaign-check"><input type="checkbox" checked={campaign.active} onChange={e=>change('active',e.target.checked)}/>Afficher sur le site</label><button className="button button-primary" onClick={save} disabled={saving}><Save size={17}/>{saving?'Enregistrement...':'Enregistrer'}</button></div></>:<p>{message||'Chargement...'}</p>}{data&&message&&<p role="status">{message}</p>}</main>;
}
