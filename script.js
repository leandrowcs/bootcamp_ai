const docs = {
  workshops: [
    { id: '3167', titleEn: 'Workshop 1 - BASIC Calculator', titleFr: 'Atelier 1 - Calculatrice BASIC', file: 'docs/3167_Atelier-1-Calculatrice-BASIC.md' },
    { id: '3168', titleEn: 'Workshop 1 - Image Mockup', titleFr: 'Atelier 1 - Image Mockup', file: 'docs/3168_Atelier-1-Image-Mockup.md' },
    { id: '3169', titleEn: 'Workshop 2 - DEMO Mermaid Documentation', titleFr: 'Atelier 2 - DEMO Documentation Mermaid', file: 'docs/3169_Atelier-2-DEMO-Documentation-Mermaid.md' },
    { id: '3170', titleEn: 'Workshop 2 - DEMO MCP', titleFr: 'Atelier 2 - DEMO MCP', file: 'docs/3170_Atelier-2-DEMO-MCP.md' },
    { id: '3171', titleEn: 'Workshop 2 - DEMO Test Cases and Automation', titleFr: 'Atelier 2 - DEMO Cas de Test et Automatisation', file: 'docs/3171_Atelier-2-DEMO-Cas-de-Test-et-Automatisation.md' },
    { id: '3172', titleEn: 'Workshop 2 - DEMO Application Modernization', titleFr: 'Atelier 2 - DEMO Modernisation d\'application', file: 'docs/3172_Atelier-2-DEMO-Modernisation-d-application.md' }
  ],
  capstone: [
    { id: '3173', titleEn: 'Capstone Project - Bootcamp AI', titleFr: 'Projet Capstone - Bootcamp AI', file: 'docs/3173_Capstone-Project-Bootcamp-AI.md' }
  ],
  azureProject: {
    epic: [
      { id: '3202', titleEn: 'DEMO', titleFr: 'DEMO', file: 'docs/3202_DEMO.md' }
    ],
    feature: [
      { id: '3203', titleEn: 'Record and View Employee Work Hours', titleFr: 'Enregistrer et consulter les heures de travail des employés', file: 'docs/3203_Enregistrer-et-consulter-les-heures-de-travail-des-employes.md' }
    ],
    userStories: [
      { id: '3204', titleEn: 'Add Worked Hours for Employee', titleFr: 'Ajouter les heures travaillées pour un employé', file: 'docs/3204_Ajouter-les-heures-travaillees-pour-un-employe.md' },
      { id: '3206', titleEn: 'View Weekly Work Hours Report', titleFr: 'Consulter le rapport hebdomadaire des heures travaillées', file: 'docs/3206_Consulter-le-rapport-hebdomadaire-des-heures-travaillees.md' }
    ]
  }
};

const categories = {
  workshops: { en: 'Workshops', fr: 'Ateliers' },
  capstone: { en: 'Capstone Project', fr: 'Projet Capstone' },
  azureProject: { en: 'Azure DEMO Project', fr: 'Projet DEMO Azure' },
  epic: { en: 'Epic', fr: 'Epic' },
  feature: { en: 'Features', fr: 'Fonctionnalités' },
  userStories: { en: 'User Stories', fr: 'Histoires Utilisateur' }
};

function initNavigation() {
  const nav = document.getElementById('navigation');
  nav.innerHTML = '';
  const lang = document.body.classList.contains('lang-fr') ? 'fr' : 'en';

  Object.entries(docs).forEach(([key, items]) => {
    const section = document.createElement('div');
    section.className = 'nav-section';

    const title = document.createElement('div');
    title.className = 'nav-section-title';
    title.textContent = categories[key][lang];
    section.appendChild(title);

    // Check if this is Azure Project with nested structure
    if (key === 'azureProject') {
      // Create subsections for epic, feature, userStories
      ['epic', 'feature', 'userStories'].forEach(subKey => {
        if (items[subKey] && items[subKey].length > 0) {
          const subTitle = document.createElement('div');
          subTitle.className = 'nav-subsection-title';
          subTitle.textContent = categories[subKey][lang];
          section.appendChild(subTitle);

          const ul = document.createElement('ul');
          items[subKey].forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            const titleLang = document.body.classList.contains('lang-fr') ? 'Fr' : 'En';
            a.textContent = item[`title${titleLang}`];
            a.dataset.file = item.file;
            a.onclick = (e) => {
              e.preventDefault();
              loadDocument(a.dataset.file, a);
            };
            li.appendChild(a);
            ul.appendChild(li);
          });
          section.appendChild(ul);
        }
      });
    } else {
      // Regular section with direct items
      const ul = document.createElement('ul');
      items.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        const titleLang = document.body.classList.contains('lang-fr') ? 'Fr' : 'En';
        a.textContent = item[`title${titleLang}`];
        a.dataset.file = item.file;
        a.onclick = (e) => {
          e.preventDefault();
          loadDocument(a.dataset.file, a);
        };
        li.appendChild(a);
        ul.appendChild(li);
      });
      section.appendChild(ul);
    }

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

      // Wrap example prompt sections in collapsible details
      wrapPromptBlocks();

      // Apply current language class to content spans
      applyLanguageToContent();

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

function wrapPromptBlocks() {
  const content = document.getElementById('content');
  if (!content) return;
  const headings = content.querySelectorAll('h3, h4');
  const keywords = [
    'Example prompt',
    'Exemple de prompt',
    'Suggested supplementary prompt',
    'Prompt supplémentaire suggéré'
  ];

  headings.forEach(h => {
    const inner = h.innerHTML;
    if (!keywords.some(k => inner.includes(k))) return;
    let codeBlock = h.nextElementSibling;
    // Skip non <pre> siblings (e.g., blank paragraphs)
    while (codeBlock && codeBlock.tagName && codeBlock.tagName.toLowerCase() !== 'pre') {
      codeBlock = codeBlock.nextElementSibling;
    }
    if (!codeBlock || codeBlock.tagName.toLowerCase() !== 'pre') return;

    const details = document.createElement('details');
    details.className = 'prompt-block';
    const summary = document.createElement('summary');
    // Remove trailing colon(s) but keep bilingual spans
    summary.innerHTML = inner.replace(/(:\s*)?<\/span>/g, '</span>').replace(/:\s*$/,'');
    details.appendChild(summary);
    details.appendChild(codeBlock.cloneNode(true));
    codeBlock.remove();
    h.replaceWith(details);
  });
}

function applyLanguageToContent() {
  const isFrench = document.body.classList.contains('lang-fr');
  const content = document.getElementById('content');
  
  if (content) {
    const enSpans = content.querySelectorAll('[data-lang="en"]');
    const frSpans = content.querySelectorAll('[data-lang="fr"]');
    
    enSpans.forEach(span => {
      span.style.display = isFrench ? 'none' : 'inline';
    });
    
    frSpans.forEach(span => {
      span.style.display = isFrench ? 'inline' : 'none';
    });
  }
}

function toggleLanguage() {
  const activeLink = document.querySelector('a[data-file].active');
  const activeFile = activeLink ? activeLink.dataset.file : null;
  
  document.body.classList.toggle('lang-fr');
  const isFrench = document.body.classList.contains('lang-fr');
  localStorage.setItem('preferredLanguage', isFrench ? 'fr' : 'en');
  
  // Update language button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-lang-btn="${isFrench ? 'fr' : 'en'}"]`).classList.add('active');
  
  // Apply language to currently loaded content
  applyLanguageToContent();
  
  initNavigation();
  
  // Restore active menu item
  if (activeFile) {
    const newActiveLink = document.querySelector(`a[data-file="${activeFile}"]`);
    if (newActiveLink) {
      newActiveLink.classList.add('active');
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const saved = localStorage.getItem('preferredLanguage');
  const isFrench = saved === 'fr';
  
  if (isFrench) {
    document.body.classList.add('lang-fr');
  }
  
  // Set initial language button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-lang-btn="${isFrench ? 'fr' : 'en'}"]`).classList.add('active');

  initNavigation();
});
