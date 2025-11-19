# <span data-lang="en">Capstone Project - Bootcamp AI</span><span data-lang="fr">Projet Capstone - Bootcamp IA</span>
**ID:** 3173  
**<span data-lang="en">Type</span><span data-lang="fr">Type</span>:** Task  
**Status:** New  
**<span data-lang="en">Priority</span><span data-lang="fr">Priorité</span>:** 2  

## <span data-lang="en">Description</span><span data-lang="fr">Description</span>
<span data-lang="en">Full-Stack Modular Application with Documentation and Testing.</span><span data-lang="fr">Application Full-Stack Modulaire avec Documentation et Tests.</span>

**<span data-lang="en">Objective</span><span data-lang="fr">Objectif</span>:**
<span data-lang="en">Build a full-stack financial dashboard web application with:</span><span data-lang="fr">Construire une application web de tableau de bord financier full-stack avec :</span>
- <span data-lang="en">A modular ReactJS frontend (4–5 pages) following SOLID principles.</span><span data-lang="fr">Un frontend ReactJS modulaire (4-5 pages) suivant les principes SOLID.</span>
- <span data-lang="en">A backend exposing RESTful API endpoints (Swagger/OpenAPI compliant).</span><span data-lang="fr">Un backend exposant des endpoints API RESTful (conformes Swagger/OpenAPI).</span>
- <span data-lang="en">Complete documentation including diagrams and workflows.</span><span data-lang="fr">Documentation complète incluant diagrammes et flux de travail.</span>
- <span data-lang="en">Create and automate tests for critical functionalities.</span><span data-lang="fr">Créer et automatiser des tests pour les fonctionnalités critiques.</span>

### <span data-lang="en">Example prompt:</span><span data-lang="fr">Exemple de prompt :</span>
```
<span data-lang="en">You are a software engineer tasked with creating a financial dashboard application for user management and transactions.</span><span data-lang="fr">Vous êtes un ingénieur logiciel chargé de créer une application de tableau de bord financier pour la gestion des utilisateurs et des transactions.</span>
<span data-lang="en">The system must allow user registration, login, password change, and display a transaction dashboard.</span><span data-lang="fr">Le système doit permettre l'inscription des utilisateurs, la connexion, le changement de mot de passe et l'affichage d'un tableau de bord des transactions.</span>

<span data-lang="en">Requirements:</span><span data-lang="fr">Exigences :</span>

Frontend:
1. <span data-lang="en">Use React functional components with hooks.</span><span data-lang="fr">Utilisez des composants fonctionnels React avec hooks.</span>
2. <span data-lang="en">Apply SOLID principles:</span><span data-lang="fr">Appliquez les principes SOLID :</span>
- SRP: <span data-lang="en">Separate UI, logic, and services.</span><span data-lang="fr">Séparez l'interface utilisateur, la logique et les services.</span>
- OCP: <span data-lang="en">Reusable components (e.g., `<InputField>`, `<FormButton>`).</span><span data-lang="fr">Composants réutilisables (par ex., `<InputField>`, `<FormButton>`).</span>
- DIP: <span data-lang="en">UI depends on abstractions via hooks/context.</span><span data-lang="fr">L'interface utilisateur dépend d'abstractions via hooks/context.</span>
3. <span data-lang="en">Implement at least 5 screens:</span><span data-lang="fr">Implémentez au moins 5 écrans :</span>
- **<span data-lang="en">Landing Page</span><span data-lang="fr">Page d'accueil</span>**: <span data-lang="en">Navigation to Register/Login.</span><span data-lang="fr">Navigation vers Inscription/Connexion.</span>
- **<span data-lang="en">Register Page</span><span data-lang="fr">Page d'inscription</span>**: <span data-lang="en">Form with validation; POST `/api/register`.</span><span data-lang="fr">Formulaire avec validation; POST `/api/register`.</span>
- **<span data-lang="en">Login Page</span><span data-lang="fr">Page de connexion</span>**: <span data-lang="en">Form with validation; POST `/api/login`.</span><span data-lang="fr">Formulaire avec validation; POST `/api/login`.</span>
- **<span data-lang="en">Dashboard Page</span><span data-lang="fr">Page du tableau de bord</span>**: <span data-lang="en">Display transactions; search by vendor/category/tags; GET `/api/userdetails`.</span><span data-lang="fr">Afficher les transactions; rechercher par fournisseur/catégorie/tags; GET `/api/userdetails`.</span>
- **<span data-lang="en">Change Password Page</span><span data-lang="fr">Page de changement de mot de passe</span>**: <span data-lang="en">Form; POST `/api/changepassword`.</span><span data-lang="fr">Formulaire; POST `/api/changepassword`.</span>

Backend:
- <span data-lang="en">Implement REST API endpoints:</span><span data-lang="fr">Implémentez des endpoints API REST :</span>
  - POST `/api/register`
  - POST `/api/login`
  - POST `/api/changepassword`
  - GET `/api/userdetails`
  - GET `/api/userdetails/{transactionId}`
  - <span data-lang="en">Use OpenAPI 3.0 for API documentation.</span><span data-lang="fr">Utilisez OpenAPI 3.0 pour la documentation API.</span>

<span data-lang="en">Documentation:</span><span data-lang="fr">Documentation :</span>
- <span data-lang="en">Create Markdown documentation with:</span><span data-lang="fr">Créez une documentation Markdown avec :</span>
  - <span data-lang="en">Navigation flow diagram (Mermaid)</span><span data-lang="fr">Diagramme de flux de navigation (Mermaid)</span>
  - <span data-lang="en">Sequence diagram for login and dashboard processes</span><span data-lang="fr">Diagramme de séquence pour les processus de connexion et de tableau de bord</span>
  - <span data-lang="en">Main use cases and use case diagram</span><span data-lang="fr">Principaux cas d'utilisation et diagramme de cas d'utilisation</span>
  - <span data-lang="en">ERD for database structure</span><span data-lang="fr">ERD pour la structure de base de données</span>
  - <span data-lang="en">Explanation of how diagrams relate to requirements</span><span data-lang="fr">Explication de la façon dont les diagrammes se rapportent aux exigences</span>

<span data-lang="en">Testing:</span><span data-lang="fr">Tests :</span>
- <span data-lang="en">Generate:</span><span data-lang="fr">Générez :</span>
  - <span data-lang="en">Functional and integration test cases</span><span data-lang="fr">Cas de test fonctionnels et d'intégration</span>
  - <span data-lang="en">BDD scenarios (Given-When-Then)</span><span data-lang="fr">Scénarios BDD (Given-When-Then)</span>
  - <span data-lang="en">Cypress automation scripts for main flows (login, register, dashboard)</span><span data-lang="fr">Scripts d'automatisation Cypress pour les flux principaux (connexion, inscription, tableau de bord)</span>
- <span data-lang="en">Include best practices:</span><span data-lang="fr">Incluez les meilleures pratiques :</span>
  - Page Object Model
  - <span data-lang="en">Reusable commands</span><span data-lang="fr">Commandes réutilisables</span>
  - <span data-lang="en">Comments and clear structure</span><span data-lang="fr">Commentaires et structure claire</span>

<span data-lang="en">Deliverables:</span><span data-lang="fr">Livrables :</span>
- <span data-lang="en">ReactJS frontend with routing and state management</span><span data-lang="fr">Frontend ReactJS avec routage et gestion d'état</span>
- <span data-lang="en">Backend API with Swagger documentation</span><span data-lang="fr">API Backend avec documentation Swagger</span>
- <span data-lang="en">Markdown documentation with diagrams and workflows</span><span data-lang="fr">Documentation Markdown avec diagrammes et flux de travail</span>
- <span data-lang="en">Documented test cases and automated scripts with Cypress and explanation of execution steps</span><span data-lang="fr">Cas de test documentés et scripts automatisés avec Cypress et explication des étapes d'exécution</span>
```

## Notes
- <span data-lang="en">Created</span><span data-lang="fr">Créé</span>: 2025-11-13
- <span data-lang="en">Last Changed</span><span data-lang="fr">Dernière modification</span>: 2025-11-18
