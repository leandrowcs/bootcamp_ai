# <span data-lang="en">Workshop 2 - DEMO Test Cases and Automation</span><span data-lang="fr">Atelier 2 - DEMO Cas de Test et Automatisation</span>
**ID:** 3171  
**<span data-lang="en">Type</span><span data-lang="fr">Type</span>:** Task  
**Status:** New  
**<span data-lang="en">Priority</span><span data-lang="fr">Priorité</span>:** 2  

## <span data-lang="en">Description</span><span data-lang="fr">Description</span>
**<span data-lang="en">Objective</span><span data-lang="fr">Objectif</span>:** <span data-lang="en">Show how AI can generate test cases from code or requirements. And after can generate the automation scripts too.</span><span data-lang="fr">Montrer comment l'IA peut générer des cas de test à partir de code ou d'exigences. Et ensuite peut aussi générer les scripts d'automatisation.</span>

### <span data-lang="en">4.1 Generate test cases</span><span data-lang="fr">4.1 Générer des cas de test</span>

#### <span data-lang="en">Example prompt:</span><span data-lang="fr">Exemple de prompt :</span>
```
You are a QA engineer specialized in automation.
Based on the following [instructions or code or JIRA documentation or Workflow].
Generate:
- <span data-lang="en">Functional or E2E test cases</span><span data-lang="fr">Cas de test fonctionnels ou E2E</span>
- BDD structure (Given-When-Then)
<span data-lang="en">Create a document .md with all test cases generated.</span><span data-lang="fr">Créez un document .md avec tous les cas de test générés.</span>

<span data-lang="en">Output format:</span><span data-lang="fr">Format de sortie :</span>
Test Case: <Test ##> - <Test Case Title>
Description: <Test Case Description>
Steps:
  1. Action: <Step description>
     * Expected Result: <Step result>
  2. ...
```

#### <span data-lang="en">A. Instructions</span><span data-lang="fr">A. Instructions</span>
```
<span data-lang="en">The application must allow employees to log in, view their work schedule, and request time off. Managers can approve or reject time-off requests.</span><span data-lang="fr">L'application doit permettre aux employés de se connecter, de consulter leur horaire de travail et de demander des congés. Les gestionnaires peuvent approuver ou rejeter les demandes de congé.</span>
```

#### <span data-lang="en">B. Code</span><span data-lang="fr">B. Code</span>
```javascript
// Simple Express.js API for Employee Schedule Management
const express = require('express');
const app = express();
app.use(express.json());

let employees = [
  { id: 1, name: 'Alice', schedule: ['Mon 9-17', 'Tue 9-17'], password: '1234' },
  { id: 2, name: 'Bob', schedule: ['Wed 9-17', 'Thu 9-17'], password: 'abcd' }
];

// Login endpoint
app.post('/login', (req, res) => {
  const { name, password } = req.body;
  const user = employees.find(e => e.name === name && e.password === password);
  if (user) {
    res.json({ message: 'Login successful', userId: user.id });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Get schedule endpoint
app.get('/schedule/:id', (req, res) => {
  const user = employees.find(e => e.id === parseInt(req.params.id));
  if (user) {
    res.json({ schedule: user.schedule });
  } else {
    res.status(404).json({ message: 'Employee not found' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

#### <span data-lang="en">C. JIRA documentation</span><span data-lang="fr">C. Documentation JIRA</span>
```
<span data-lang="en">As an employee, I want to view my weekly schedule so that I can plan my tasks accordingly.</span><span data-lang="fr">En tant qu'employé, je veux consulter mon horaire hebdomadaire afin de pouvoir planifier mes tâches en conséquence.</span>
<span data-lang="en">Acceptance Criteria:</span><span data-lang="fr">Critères d'acceptation :</span>
- <span data-lang="en">Display schedule for the current week.</span><span data-lang="fr">Afficher l'horaire pour la semaine en cours.</span>
- <span data-lang="en">Highlight holidays and approved time-off.</span><span data-lang="fr">Mettre en évidence les jours fériés et les congés approuvés.</span>
```

#### <span data-lang="en">D. Workflow</span><span data-lang="fr">D. Flux de travail</span>
```
<span data-lang="en">Employee logs in → Views schedule → Requests time off → Manager approves/rejects → System updates schedule.</span><span data-lang="fr">L'employé se connecte → Consulte l'horaire → Demande un congé → Le gestionnaire approuve/rejette → Le système met à jour l'horaire.</span>
```

### <span data-lang="en">4.2 Generate automated scripts</span><span data-lang="fr">4.2 Générer des scripts automatisés</span>

#### <span data-lang="en">Example prompt:</span><span data-lang="fr">Exemple de prompt :</span>
```
<span data-lang="en">You are a QA engineer specialized in automation.</span><span data-lang="fr">Vous êtes un ingénieur QA spécialisé en automatisation.</span>
<span data-lang="en">Based on the test cases written in the file [filename.md], generate:</span><span data-lang="fr">Basé sur les cas de test écrits dans le fichier [filename.md], générez :</span>
- <span data-lang="en">Automation code scripts using Cypress in JavaScript</span><span data-lang="fr">Scripts de code d'automatisation utilisant Cypress en JavaScript</span>
- <span data-lang="en">A simple automation script implementing the main test cases</span><span data-lang="fr">Un script d'automatisation simple implémentant les principaux cas de test</span>
- <span data-lang="en">Documentation explaining:</span><span data-lang="fr">Documentation expliquant :</span>
    * <span data-lang="en">How the automation code is organized</span><span data-lang="fr">Comment le code d'automatisation est organisé</span>
    * <span data-lang="en">Best practices applied (e.g., Page Object Model, reusable commands)</span><span data-lang="fr">Meilleures pratiques appliquées (par exemple, Page Object Model, commandes réutilisables)</span>
    * <span data-lang="en">How to execute the tests locally and integrate them into a CI/CD pipeline</span><span data-lang="fr">Comment exécuter les tests localement et les intégrer dans un pipeline CI/CD</span>
<span data-lang="en">Include comments in the code for clarity.</span><span data-lang="fr">Incluez des commentaires dans le code pour plus de clarté.</span>
```

## Notes
- <span data-lang="en">Created</span><span data-lang="fr">Créé</span>: 2025-11-13
- <span data-lang="en">Last Changed</span><span data-lang="fr">Dernière modification</span>: 2025-11-17
