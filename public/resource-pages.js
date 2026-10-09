class PaadResourceHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header class="ocean-header site-header">
      <!-- NIVEAU 1 : Barre Blanche Supérieure -->
      <div class="ocean-top-bar">
        <!-- Bloc Logo Violet Gauche -->
        <a class="ocean-logo-badge" href="./index.html" aria-label="PAAD, accueil">
          <img src="./public/images/paad-emblem.webp" alt="Logo PAAD" class="ocean-logo-emblem" width="36" height="36">
          <span class="ocean-logo-text">PAAD</span>
        </a>

        <!-- Navigation Principale Majeure -->
        <nav class="ocean-nav-strip" aria-label="Navigation principale">
          <!-- À PROPOS -->
          <div class="ocean-nav-item has-mega">
            <a href="./qui-sommes-nous.html" class="ocean-nav-anchor">
              <span>À propos</span>
              <svg class="ocean-caret-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="m6 9 6 6 6-6"/></svg>
            </a>
            <div class="ocean-mega-dropdown">
              <div class="wrap ocean-mega-inner">
                <a href="./qui-sommes-nous.html" class="ocean-mega-card">
                  <img src="./public/images/community-haiti.webp" alt="Notre mission en Haïti" class="ocean-mega-card-img">
                  <div class="ocean-mega-card-overlay"></div>
                  <div class="ocean-mega-card-dock">
                    <span class="ocean-mega-circle-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </span>
                    <span class="ocean-mega-card-title">Notre mission</span>
                  </div>
                </a>
                <a href="./qui-sommes-nous.html#equipe" class="ocean-mega-card">
                  <img src="./public/images/haiti-cinematic-hero.jpg" alt="Notre équipe et communauté" class="ocean-mega-card-img">
                  <div class="ocean-mega-card-overlay"></div>
                  <div class="ocean-mega-card-dock">
                    <span class="ocean-mega-circle-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </span>
                    <span class="ocean-mega-card-title">Notre équipe</span>
                  </div>
                </a>
                <div class="ocean-mega-col-side">
                  <div class="ocean-mega-side-header">
                    <span class="ocean-mega-side-title">DÉCOUVRIR PAAD</span>
                  </div>
                  <div class="ocean-mega-side-links">
                    <a href="./qui-sommes-nous.html" class="ocean-mega-side-link">Qui sommes-nous</a>
                    <a href="./qui-sommes-nous.html#origines" class="ocean-mega-side-link">Nos origines &amp; histoire</a>
                    <a href="./qui-sommes-nous.html#valeurs" class="ocean-mega-side-link">Nos valeurs</a>
                    <a href="./faq.html" class="ocean-mega-side-link">Foire aux questions (FAQ)</a>
                    <a href="./contact.html" class="ocean-mega-side-link">Nous contacter</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- PROGRAMMES -->
          <div class="ocean-nav-item has-mega">
            <a href="./index.html#domaines" class="ocean-nav-anchor">
              <span>Programmes</span>
              <svg class="ocean-caret-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="m6 9 6 6 6-6"/></svg>
            </a>
            <div class="ocean-mega-dropdown">
              <div class="wrap ocean-mega-inner">
                <a href="./index.html#domaines" class="ocean-mega-card">
                  <img src="./public/images/haiti-student-classroom.jpg" alt="Bourses & Écoles en Haïti" class="ocean-mega-card-img">
                  <div class="ocean-mega-card-overlay"></div>
                  <div class="ocean-mega-card-dock">
                    <span class="ocean-mega-circle-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </span>
                    <span class="ocean-mega-card-title">Bourses &amp; Écoles</span>
                  </div>
                </a>
                <a href="./index.html#domaines" class="ocean-mega-card">
                  <img src="./public/images/haiti-tech-workshop.jpg" alt="Formations professionnelles en Haïti" class="ocean-mega-card-img">
                  <div class="ocean-mega-card-overlay"></div>
                  <div class="ocean-mega-card-dock">
                    <span class="ocean-mega-circle-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </span>
                    <span class="ocean-mega-card-title">Formations &amp; Autonomie</span>
                  </div>
                </a>
                <div class="ocean-mega-col-side">
                  <div class="ocean-mega-side-header">
                    <span class="ocean-mega-side-title">DOMAINES PRIORITAIRES</span>
                  </div>
                  <div class="ocean-mega-side-links">
                    <a href="./index.html#domaines" class="ocean-mega-side-link">Éducation &amp; Bourses d’excellence</a>
                    <a href="./index.html#domaines" class="ocean-mega-side-link">Digital Lab &amp; Technologies</a>
                    <a href="./index.html#domaines" class="ocean-mega-side-link">Formations professionnelles certifiantes</a>
                    <a href="./index.html#domaines" class="ocean-mega-side-link">Entrepreneuriat local &amp; Artisanat</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- DEVENIR PARTENAIRE -->
          <div class="ocean-nav-item has-mega">
            <a href="./devenir-partenaire.html" class="ocean-nav-anchor">
              <span>Devenir partenaire</span>
              <svg class="ocean-caret-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="m6 9 6 6 6-6"/></svg>
            </a>
            <div class="ocean-mega-dropdown">
              <div class="wrap ocean-mega-inner">
                <a href="./devenir-partenaire.html" class="ocean-mega-card">
                  <img src="./public/images/workshop-haiti.webp" alt="Partenariats et coopération en Haïti" class="ocean-mega-card-img">
                  <div class="ocean-mega-card-overlay"></div>
                  <div class="ocean-mega-card-dock">
                    <span class="ocean-mega-circle-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </span>
                    <span class="ocean-mega-card-title">Bailleurs & Partenaires</span>
                  </div>
                </a>
                <a href="./qui-sommes-nous.html#valeurs" class="ocean-mega-card">
                  <img src="./public/images/community-haiti.webp" alt="Nos partenaires et réseaux" class="ocean-mega-card-img">
                  <div class="ocean-mega-card-overlay"></div>
                  <div class="ocean-mega-card-dock">
                    <span class="ocean-mega-circle-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </span>
                    <span class="ocean-mega-card-title">Nos partenaires</span>
                  </div>
                </a>
                <div class="ocean-mega-col-side">
                  <div class="ocean-mega-side-header">
                    <span class="ocean-mega-side-title">COOPÉRATION &amp; ALLIANCES</span>
                  </div>
                  <div class="ocean-mega-side-links">
                    <a href="./contact.html" class="ocean-mega-side-link">Proposer un partenariat</a>
                    <a href="./qui-sommes-nous.html#valeurs" class="ocean-mega-side-link">Partenaires de terrain</a>
                    <a href="./contact.html#formulaire" class="ocean-mega-side-link">Devenir bénévole</a>
                    <a href="./contact.html" class="ocean-mega-side-link">Mécénat d’entreprise</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <!-- Actions Droite : Recherche & Langue -->
        <div class="ocean-top-actions">
          <button type="button" class="ocean-top-search-btn" aria-label="Rechercher">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>

          <div class="ocean-lang-select">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
            <select aria-label="Langue" id="lang-select">
              <option value="fr" selected>FR</option>
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>
          </div>

          <button class="ocean-mobile-burger" type="button" aria-label="Ouvrir le menu" aria-expanded="false">
            <svg class="menu-open" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            <svg class="menu-close" style="display:none;" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
      </div>

      <!-- NAVIGATION MOBILE AVEC ACCORDÉONS, CARTES ET LIENS FLÉCHÉS -->
      <nav class="ocean-mobile-drawer mobile-nav" aria-label="Navigation mobile" style="display:none;">
        <!-- 1. ACCORDÉON : À PROPOS -->
        <div class="mobile-acc-item is-open" data-acc="about">
          <button type="button" class="mobile-acc-trigger">
            <span>À propos de nous</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <div class="mobile-acc-panel">
            <div class="mobile-acc-cards">
              <a href="./qui-sommes-nous.html" class="mobile-acc-card">
                <img src="./public/images/community-haiti.webp" alt="Faire ensemble" class="mobile-acc-card-img">
                <div class="mobile-acc-card-overlay"></div>
                <div class="mobile-acc-card-dock">
                  <span class="mobile-acc-card-title">Faire ensemble</span>
                  <span class="mobile-acc-circle-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </div>
              </a>
              <a href="./qui-sommes-nous.html#valeurs" class="mobile-acc-card">
                <img src="./public/images/workshop-haiti.webp" alt="Nos zones d’action" class="mobile-acc-card-img">
                <div class="mobile-acc-card-overlay"></div>
                <div class="mobile-acc-card-dock">
                  <span class="mobile-acc-card-title">Nos zones d’action</span>
                  <span class="mobile-acc-circle-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </div>
              </a>
            </div>

            <div class="mobile-acc-section-header">
              <span class="mobile-acc-section-title">NOTRE DÉMARCHE</span>
            </div>

            <div class="mobile-acc-links">
              <a href="./qui-sommes-nous.html" class="mobile-acc-link">
                <span>Notre démarche participative</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </a>
              <a href="./qui-sommes-nous.html#valeurs" class="mobile-acc-link">
                <span>Nos zones d’action</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </a>
            </div>
          </div>
        </div>

        <!-- 2. ACCORDÉON : PROGRAMMES -->
        <div class="mobile-acc-item" data-acc="programmes">
          <button type="button" class="mobile-acc-trigger">
            <span>Programmes</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <div class="mobile-acc-panel">
            <div class="mobile-acc-cards">
              <a href="./index.html#domaines" class="mobile-acc-card">
                <img src="./public/images/haiti-student-classroom.jpg" alt="Bourses & Écoles" class="mobile-acc-card-img">
                <div class="mobile-acc-card-overlay"></div>
                <div class="mobile-acc-card-dock">
                  <span class="mobile-acc-card-title">Bourses &amp; Écoles</span>
                  <span class="mobile-acc-circle-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </div>
              </a>
              <a href="./index.html#domaines" class="mobile-acc-card">
                <img src="./public/images/haiti-tech-workshop.jpg" alt="Formations techniques" class="mobile-acc-card-img">
                <div class="mobile-acc-card-overlay"></div>
                <div class="mobile-acc-card-dock">
                  <span class="mobile-acc-card-title">Formations &amp; Autonomie</span>
                  <span class="mobile-acc-circle-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </div>
              </a>
            </div>

            <div class="mobile-acc-section-header">
              <span class="mobile-acc-section-title">DOMAINES D'INTERVENTION</span>
            </div>

            <div class="mobile-acc-links">
              <a href="./index.html#domaines" class="mobile-acc-link">
                <span>Éducation &amp; Bourses d’excellence</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </a>
              <a href="./index.html#domaines" class="mobile-acc-link">
                <span>Digital Lab &amp; Technologies</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </a>
              <a href="./index.html#domaines" class="mobile-acc-link">
                <span>Formations professionnelles certifiantes</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </a>
              <a href="./index.html#domaines" class="mobile-acc-link">
                <span>Entrepreneuriat local &amp; Artisanat</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </a>
            </div>
          </div>
        </div>

        <!-- 3. ACCORDÉON : DEVENIR PARTENAIRE -->
        <div class="mobile-acc-item" data-acc="partenaire">
          <button type="button" class="mobile-acc-trigger">
            <span>Devenir partenaire</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <div class="mobile-acc-panel">
            <div class="mobile-acc-cards">
              <a href="./devenir-partenaire.html" class="mobile-acc-card">
                <img src="./public/images/workshop-haiti.webp" alt="Agir ensemble" class="mobile-acc-card-img">
                <div class="mobile-acc-card-overlay"></div>
                <div class="mobile-acc-card-dock">
                  <span class="mobile-acc-card-title">Bailleurs & Partenaires</span>
                  <span class="mobile-acc-circle-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </div>
              </a>
              <a href="./qui-sommes-nous.html#valeurs" class="mobile-acc-card">
                <img src="./public/images/community-haiti.webp" alt="Nos partenaires" class="mobile-acc-card-img">
                <div class="mobile-acc-card-overlay"></div>
                <div class="mobile-acc-card-dock">
                  <span class="mobile-acc-card-title">Nos partenaires</span>
                  <span class="mobile-acc-circle-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </div>
              </a>
            </div>

            <div class="mobile-acc-section-header">
              <span class="mobile-acc-section-title">COOPÉRATION &amp; ALLIANCES</span>
            </div>

            <div class="mobile-acc-links">
              <a href="./contact.html" class="mobile-acc-link">
                <span>Proposer un partenariat</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </a>
              <a href="./qui-sommes-nous.html#valeurs" class="mobile-acc-link">
                <span>Partenaires de terrain</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </a>
              <a href="./contact.html#formulaire" class="mobile-acc-link">
                <span>Devenir bénévole</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </a>
            </div>
          </div>
        </div>

        <!-- 4. ACCORDÉON : PRESSE & ACTUALITÉS -->
        <div class="mobile-acc-item" data-acc="actualites">
          <button type="button" class="mobile-acc-trigger">
            <span>Presse &amp; Actualités</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <div class="mobile-acc-panel">
            <div class="mobile-acc-cards">
              <a href="./actualites.html" class="mobile-acc-card">
                <img src="./public/images/haiti-cinematic-hero.jpg" alt="Dernières actualités" class="mobile-acc-card-img">
                <div class="mobile-acc-card-overlay"></div>
                <div class="mobile-acc-card-dock">
                  <span class="mobile-acc-card-title">Dernières actualités</span>
                  <span class="mobile-acc-circle-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </div>
              </a>
              <a href="./actualites.html" class="mobile-acc-card">
                <img src="./public/images/community-haiti.webp" alt="Communiqués & Presse" class="mobile-acc-card-img">
                <div class="mobile-acc-card-overlay"></div>
                <div class="mobile-acc-card-dock">
                  <span class="mobile-acc-card-title">Communiqués &amp; Presse</span>
                  <span class="mobile-acc-circle-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </div>
              </a>
            </div>

            <div class="mobile-acc-section-header">
              <span class="mobile-acc-section-title">ACTUALITÉS &amp; MÉDIAS</span>
            </div>

            <div class="mobile-acc-links">
              <a href="./actualites.html" class="mobile-acc-link">
                <span>Toutes les actualités</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </a>
              <a href="./actualites.html" class="mobile-acc-link">
                <span>Communiqués de presse</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </a>
              <a href="./actualites.html" class="mobile-acc-link">
                <span>Rapports &amp; publications</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </a>
              <a href="./contact.html" class="mobile-acc-link">
                <span>Contact presse</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </a>
            </div>
          </div>
        </div>

        <a href="./contact.html" class="ocean-drawer-donate-btn">FAITES UN DON MAINTENANT</a>
      </nav>
    </header>`;

    const button = this.querySelector('.ocean-mobile-burger');
    const drawer = this.querySelector('.ocean-mobile-drawer');
    const openIcon = this.querySelector('.menu-open');
    const closeIcon = this.querySelector('.menu-close');
    const searchBtn = this.querySelector('.ocean-top-search-btn');

    button?.addEventListener('click', () => {
      const open = drawer.style.display === 'flex';
      drawer.style.display = open ? 'none' : 'flex';
      button.setAttribute('aria-expanded', String(!open));
      if (openIcon) openIcon.style.display = open ? 'block' : 'none';
      if (closeIcon) closeIcon.style.display = open ? 'none' : 'block';
    });

    searchBtn?.addEventListener('click', () => {
      const q = prompt('Rechercher sur PAAD :');
      if (q) {
        alert('Résultats pour "' + q + '" : vous pouvez consulter nos programmes et actualités.');
        window.location.href = './actualites.html';
      }
    });

    this.querySelectorAll('.mobile-acc-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const item = trigger.closest('.mobile-acc-item');
        const wasOpen = item.classList.contains('is-open');
        drawer.querySelectorAll('.mobile-acc-item').forEach(el => el.classList.remove('is-open'));
        if (!wasOpen) item.classList.add('is-open');
      });
    });
  }
}
class PaadResourceTabs extends HTMLElement {
  connectedCallback() {
    const active = document.body.dataset.page || '';
    const items = [['actualites.html','Actualités','actualites'],['rapports.html','Rapports & publications','rapports'],['media.html','Espace média','media']];
    this.innerHTML = `<nav class="resource-tabs" aria-label="Sections presse et actualités"><div class="wrap">${items.map(([href,label,key])=>`<a class="${active===key?'active':''}" href="./${href}">${label}</a>`).join('')}</div></nav>`;
  }
}
class PaadAboutTabs extends HTMLElement {
  connectedCallback() {
    const active = document.body.dataset.aboutPage || '';
    const items = [['qui-sommes-nous.html','À propos de nous','about'],['faq.html','FAQ','faq'],['contact.html','Contact','contact']];
    this.innerHTML = `<nav class="resource-tabs about-page-tabs" aria-label="Pages À propos"><div class="wrap">${items.map(([href,label,key])=>`<a class="${active===key?'active':''}" href="./${href}">${label}</a>`).join('')}</div></nav>`;
  }
}
class PaadResourceFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer class="footer" style="background:var(--purple-dark);color:#FAF8FB;border-top:none"><div class="wrap footer-callout"><div><span>Construire la suite</span><h2>Agissons aujourd’hui pour ouvrir de nouvelles possibilités en Haïti.</h2></div><div class="footer-callout-actions"><a href="./contact.html">Faire un don <span aria-hidden="true">♡</span></a><a href="./contact.html">Nous contacter <span aria-hidden="true">→</span></a></div></div><div class="wrap mockup-footer-top"><div class="mockup-footer-brand"><a class="ocean-logo-badge footer-menu-logo" href="./index.html"><img src="./public/images/paad-emblem-white-trans.png" alt="Logo PAAD" class="ocean-logo-emblem" width="40" height="40"><span class="ocean-logo-text">PAAD</span></a><p>Passerelle d’Actions pour l’Autonomie et le Développement. Agir avec les communautés en Haïti pour un avenir durable.</p><span class="mockup-social-label">Suivez-nous</span><div class="mockup-social-icons"><a href="#" class="mockup-social-btn" aria-label="Facebook">f</a><a href="#" class="mockup-social-btn" aria-label="X / Twitter">𝕏</a><a href="https://www.instagram.com/paad_developpement/" target="_blank" rel="noopener noreferrer" class="mockup-social-btn" aria-label="Instagram">ig</a><a href="#" class="mockup-social-btn" aria-label="LinkedIn">in</a></div></div><div class="mockup-footer-col"><h4>PAAD</h4><a href="./qui-sommes-nous.html">Qui sommes-nous</a><a href="./faq.html">FAQ</a><a href="./contact.html">Contact</a></div><div class="mockup-footer-col"><h4>Nos actions</h4><a href="./index.html#domaines">Éducation</a><a href="./index.html#domaines">Développement économique</a><a href="./index.html#programmes">Nos projets</a><a href="./index.html#impact">Impact</a></div><div class="mockup-footer-col"><h4>Ressources</h4><a href="./actualites.html">Actualités</a><a href="./rapports.html">Rapports</a><a href="./media.html">Espace média</a><a href="./conditions-utilisation.html">Conditions d’utilisation</a></div></div><div class="wrap mockup-footer-bottom"><span>© 2026 PAAD. Tous droits réservés.</span><div class="mockup-footer-links"><a href="./conditions-utilisation.html">Conditions d’utilisation</a><a href="./contact.html">Mentions légales</a><a href="./contact.html">Confidentialité</a><a href="./contact.html">Contact</a></div></div></footer><button type="button" class="scroll-to-top-btn" aria-label="Remonter en haut de la page" title="Remonter en haut" style="display:none;"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg></button>`;

    const scrollBtn = this.querySelector('.scroll-to-top-btn');
    if (scrollBtn) {
      window.addEventListener('scroll', () => {
        scrollBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
      }, { passive: true });
      scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }
}
customElements.define('paad-resource-header', PaadResourceHeader);
customElements.define('paad-resource-tabs', PaadResourceTabs);
customElements.define('paad-about-tabs', PaadAboutTabs);
customElements.define('paad-resource-footer', PaadResourceFooter);
