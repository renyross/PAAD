class PaadResourceHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header class="ocean-header site-header">
      <div class="ocean-top-bar">
        <a class="ocean-logo-badge" href="./index.html" aria-label="PAAD, accueil"><img src="./public/images/paad-emblem.webp" alt="Logo PAAD" class="ocean-logo-emblem" width="36" height="36"><span class="ocean-logo-text">PAAD</span></a>
        <nav class="ocean-nav-strip" aria-label="Navigation principale">
          <div class="ocean-nav-item"><a href="./index.html#domaines" class="ocean-nav-anchor"><span>Éducation</span></a></div>
          <div class="ocean-nav-item"><a href="./index.html#domaines" class="ocean-nav-anchor"><span>Développement économique</span></a></div>
          <div class="ocean-nav-item"><a href="./index.html#programmes" class="ocean-nav-anchor"><span>Nos projets</span></a></div>
          <div class="ocean-nav-item"><a href="./index.html#impact" class="ocean-nav-anchor"><span>Impact</span></a></div>
        </nav>
        <div class="ocean-top-actions"><a class="ocean-top-search-btn" href="./faq.html" aria-label="Rechercher"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></a><div class="ocean-lang-select"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/></svg><select aria-label="Langue"><option>FR</option><option>EN</option><option>ES</option></select></div><button class="ocean-mobile-burger" type="button" aria-label="Ouvrir le menu" aria-expanded="false"><svg class="menu-open" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg><svg class="menu-close" style="display:none" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg></button></div>
      </div>
      <div class="ocean-sub-bar"><div class="ocean-sub-nav"><a href="./contact.html#formulaire" class="ocean-sub-link">Devenir partenaire</a><div class="ocean-sub-dropdown"><span class="ocean-sub-link ocean-sub-dropdown-trigger"><span>À propos</span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m6 9 6 6 6-6"/></svg></span><div class="ocean-sub-dropdown-menu"><a href="./qui-sommes-nous.html" class="ocean-sub-dropdown-item">À propos de nous</a><a href="./etapes-cles.html" class="ocean-sub-dropdown-item">Étapes clés</a><a href="./faq.html" class="ocean-sub-dropdown-item">FAQ</a><a href="./contact.html" class="ocean-sub-dropdown-item">Contact</a></div></div><div class="ocean-sub-dropdown"><span class="ocean-sub-link ocean-sub-dropdown-trigger"><span>Presse &amp; Actualités</span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m6 9 6 6 6-6"/></svg></span><div class="ocean-sub-dropdown-menu"><a href="./actualites.html" class="ocean-sub-dropdown-item">Actualités</a><a href="./communiques.html" class="ocean-sub-dropdown-item">Communiqués de presse</a><a href="./rapports.html" class="ocean-sub-dropdown-item">Rapports &amp; Publications</a><a href="./media.html" class="ocean-sub-dropdown-item">Espace média</a></div></div></div><a href="./contact.html" class="ocean-sub-donate-btn">FAITES UN DON MAINTENANT</a></div>
      <nav class="ocean-mobile-drawer mobile-nav" aria-label="Navigation mobile" style="display:none"><a href="./qui-sommes-nous.html">À propos de nous</a><a href="./etapes-cles.html">Étapes clés</a><a href="./faq.html">FAQ</a><a href="./contact.html">Contact</a><a href="./index.html#domaines">Éducation</a><a href="./index.html#domaines">Développement économique</a><a href="./index.html#programmes">Nos projets</a><a href="./index.html#impact">Impact</a><a href="./actualites.html">Actualités</a><a href="./contact.html" class="ocean-drawer-donate-btn">FAITES UN DON MAINTENANT</a></nav>
    </header>`;
    const button = this.querySelector('.ocean-mobile-burger');
    const drawer = this.querySelector('.ocean-mobile-drawer');
    const openIcon = this.querySelector('.menu-open');
    const closeIcon = this.querySelector('.menu-close');
    button?.addEventListener('click', () => {
      const open = drawer.style.display === 'flex';
      drawer.style.display = open ? 'none' : 'flex';
      button.setAttribute('aria-expanded', String(!open));
      openIcon.style.display = open ? 'block' : 'none';
      closeIcon.style.display = open ? 'none' : 'block';
    });
  }
}
class PaadResourceTabs extends HTMLElement {
  connectedCallback() {
    const active = document.body.dataset.page || '';
    const items = [['actualites.html','Actualités','actualites'],['communiques.html','Communiqués de presse','communiques'],['rapports.html','Rapports & publications','rapports'],['media.html','Espace média','media']];
    this.innerHTML = `<nav class="resource-tabs" aria-label="Sections presse et actualités"><div class="wrap">${items.map(([href,label,key])=>`<a class="${active===key?'active':''}" href="./${href}">${label}</a>`).join('')}</div></nav>`;
  }
}
class PaadResourceFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer class="footer" style="background:var(--purple-dark);color:#FAF8FB;border-top:none"><div class="wrap footer-callout"><div><span>Construire la suite</span><h2>Agissons aujourd’hui pour ouvrir de nouvelles possibilités en Haïti.</h2></div><div class="footer-callout-actions"><a href="./contact.html">Faire un don <span aria-hidden="true">♡</span></a><a href="./contact.html">Nous contacter <span aria-hidden="true">→</span></a></div></div><div class="wrap mockup-footer-top"><div class="mockup-footer-brand"><a class="ocean-logo-badge footer-menu-logo" href="./index.html"><img src="./public/images/paad-emblem-white-trans.png" alt="Logo PAAD" class="ocean-logo-emblem" width="40" height="40"><span class="ocean-logo-text">PAAD</span></a><p>Programme d’Actions et d’Aide pour le Développement. Agir avec les communautés en Haïti pour un avenir durable.</p><span class="mockup-social-label">Suivez-nous</span><div class="mockup-social-icons"><a href="#" class="mockup-social-btn" aria-label="Facebook">f</a><a href="#" class="mockup-social-btn" aria-label="X / Twitter">𝕏</a><a href="https://www.instagram.com/paad_developpement/" target="_blank" rel="noopener noreferrer" class="mockup-social-btn" aria-label="Instagram">ig</a><a href="#" class="mockup-social-btn" aria-label="LinkedIn">in</a></div></div><div class="mockup-footer-col"><h4>PAAD</h4><a href="./qui-sommes-nous.html">Qui sommes-nous</a><a href="./etapes-cles.html">Étapes clés</a><a href="./faq.html">FAQ</a><a href="./contact.html">Contact</a></div><div class="mockup-footer-col"><h4>Nos actions</h4><a href="./index.html#domaines">Éducation</a><a href="./index.html#domaines">Développement économique</a><a href="./index.html#programmes">Nos projets</a><a href="./index.html#impact">Impact</a></div><div class="mockup-footer-col"><h4>Ressources</h4><a href="./actualites.html">Actualités</a><a href="./communiques.html">Communiqués</a><a href="./rapports.html">Rapports</a><a href="./media.html">Espace média</a></div></div><div class="wrap mockup-footer-bottom"><span>© 2026 PAAD. Tous droits réservés.</span><div class="mockup-footer-links"><a href="./contact.html">Mentions légales</a><a href="./contact.html">Confidentialité</a><a href="./contact.html">Contact</a></div></div></footer>`;
  }
}
customElements.define('paad-resource-header', PaadResourceHeader);
customElements.define('paad-resource-tabs', PaadResourceTabs);
customElements.define('paad-resource-footer', PaadResourceFooter);
