# Site PAAD

Site Next.js du Programme d'Actions et d'Aide pour le Développement.

## Démarrage

```bash
npm install
npm run dev -- --hostname 127.0.0.1 --port 3100
```

Site : `http://127.0.0.1:3100/fr`  
Administration : `http://127.0.0.1:3100/admin`

Le mot de passe local est défini dans `.env.local` avec `PAAD_ADMIN_PASSWORD`. Ce fichier n'est pas versionné. Modifiez ce mot de passe avant de partager l'accès à d'autres personnes.

## Contenus

L'administration permet de créer, modifier et publier des projets, pays, actualités, témoignages, rapports, partenaires, chiffres d'impact et une campagne prioritaire. Les données sont enregistrées dans `data/site.json`. Les images importées sont placées dans `public/uploads`.

Les informations concernant la mission, les fondateurs, le siège et l'adresse de contact proviennent du document `PAAD.doc` trouvé sur le Bureau. Aucun chiffre d'impact ou projet précis n'a été inventé. Les deux photographies affichées sont des illustrations générées, pas des images de programmes PAAD.

## Avant publication

- L'emblème de l'en-tête et du pied de page a été isolé de l'image transmise dans la conversation. Pour une fidélité parfaite, remplacer cet extrait par le fichier source officiel du logo lorsqu'il sera disponible.
- Faire relire les contenus et renseigner les projets, rapports, chiffres et partenaires vérifiés.
- Traduire les pages de contenu en anglais et en espagnol. La navigation et la couverture sont déjà traduites.
- Connecter le don à un compte de paiement officiel. Aucun paiement n'est encaissé actuellement.
- Connecter les formulaires et la newsletter à un service d'envoi choisi par PAAD. Le contact actuel ouvre le logiciel de messagerie.
- Pour un hébergement sans disque persistant, remplacer le stockage JSON local par une base de données ou un CMS hébergé.
- Compléter les mentions légales et la politique de confidentialité avec les informations juridiques validées.

`NEXT_PUBLIC_SITE_URL` définit l'URL canonique du site et `NEXT_PUBLIC_CONTACT_EMAIL` l'adresse de contact utilisée dans les formulaires.
