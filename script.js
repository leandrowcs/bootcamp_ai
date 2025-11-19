const docs = {
  epic: [
    { id: '3202', title: 'DEMO', file: 'docs/3202_DEMO.md' }
  ],
  feature: [
    { id: '3203', title: 'Enregistrer et consulter les heures de travail des employés', file: 'docs/3203_Enregistrer-et-consulter-les-heures-de-travail-des-employes.md' }
  ],
  userStories: [
    { id: '3204', title: 'Ajouter les heures travaillées pour un employé', file: 'docs/3204_Ajouter-les-heures-travaillees-pour-un-employe.md' },
    { id: '3206', title: 'Consulter le rapport hebdomadaire des heures travaillées', file: 'docs/3206_Consulter-le-rapport-hebdomadaire-des-heures-travaillees.md' }
  ],
  workshops: [
    { id: '3167', title: 'Atelier 1 - Calculatrice BASIC', file: 'docs/3167_Atelier-1-Calculatrice-BASIC.md' },
    { id: '3168', title: 'Atelier 1 - Image Mockup', file: 'docs/3168_Atelier-1-Image-Mockup.md' },
    { id: '3169', title: 'Atelier 2 - DEMO Documentation Mermaid', file: 'docs/3169_Atelier-2-DEMO-Documentation-Mermaid.md' },
    { id: '3170', title: 'Atelier 2 - DEMO MCP', file: 'docs/3170_Atelier-2-DEMO-MCP.md' },
    { id: '3171', title: 'Atelier 2 - DEMO Cas de Test et Automatisation', file: 'docs/3171_Atelier-2-DEMO-Cas-de-Test-et-Automatisation.md' },
    { id: '3172', title: 'Atelier 2 - DEMO Modernisation d\'application', file: 'docs/3172_Atelier-2-DEMO-Modernisation-d-application.md' }
  ],
  capstone: [
    { id: '3173', title: 'Capstone Project - Bootcamp AI', file: 'docs/3173_Capstone-Project-Bootcamp-AI.md' }
  ]
};

const categories = {
  epic: { en: 'Epic', fr: 'Epic' },
  feature: { en: 'Features', fr: 'Fonctionnalités' },
  userStories: { en: 'User Stories', fr: 'Histoires Utilisateur' },
  workshops: { en: 'Workshops', fr: 'Ateliers' },
  capstone: { en: 'Capstone Project', fr: 'Projet Capstone' }
};

function initNavigation() {
  const nav = document.getElementById('navigation');
  nav.innerHTML = '';

  Object.entries(docs).forEach(([key, items]) => {
    const section = document.createElement('div');
    section.className = 'nav-section';

    const title = document.createElement('div');
    title.className = 'nav-section-title';
    const lang = document.body.classList.contains('lang-fr') ? 'fr' : 'en';
    title.textContent = categories[key][lang];
    section.appendChild(title);

    const ul = document.createElement('ul');
    items.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = item.title;
      a.dataset.file = item.file;
      a.onclick = (e) => {
        e.preventDefault();
        loadDocument(a.dataset.file, a);
      };
      li.appendChild(a);
      ul.appendChild(li);
    });

    section.appendChild(ul);
    nav.appendChild(section);
  });
}

function loadDocument(filePath, linkElement) {
  const loading = document.getElementById('loading');
  const welcome = document.getElementById('welcome');
  const content = document.getElementById('content');

  // Update active link
  document.querySelectorAll('a[data-file]').forEach(a => a.classList.remove('active'));
  linkElement.classList.add('active');

  if (loading) loading.classList.add('active');
  if (welcome) welcome.style.display = 'none';

  // Use root URL for GitHub Pages
  const baseUrl = window.location.pathname.includes('/bootcamp_ai') ? '/bootcamp_ai/' : '/';
  const fullPath = baseUrl + filePath;

  console.log('Loading:', fullPath);

  fetch(fullPath)
    .then(response => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.text();
    })
    .then(markdown => {
      const html = marked.parse(markdown);
      content.innerHTML = html;
      if (loading) loading.classList.remove('active');

      if (window.mermaid) {
        mermaid.contentLoaded();
      }
    })
    .catch(error => {
      console.error('Error:', error);
      content.innerHTML = `<p style="color: red;"><span data-lang="en">Error loading document:</span><span data-lang="fr">Erreur lors du chargement du document :</span> ${error.message}</p>`;
      if (loading) loading.classList.remove('active');
    });
}

function toggleLanguage() {
  document.body.classList.toggle('lang-fr');
  localStorage.setItem('preferredLanguage', document.body.classList.contains('lang-fr') ? 'fr' : 'en');
  initNavigation();
}

document.addEventListener('DOMContentLoaded', function() {
  const saved = localStorage.getItem('preferredLanguage');
  if (saved === 'fr') {
    document.body.classList.add('lang-fr');
  }

  initNavigation();
});
