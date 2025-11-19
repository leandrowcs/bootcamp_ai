# <span data-lang="en">Capstone Project - Bootcamp AI</span><span data-lang="fr">Projet Capstone - Bootcamp IA</span>

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
You are a software engineer tasked with creating a financial dashboard application for user management and transactions.
The system must allow user registration, login, password change, and display a transaction dashboard.

Requirements:

Frontend:
1. Use React functional components with hooks.
2. Apply SOLID principles:
- SRP: Separate UI, logic, and services.
- OCP: Reusable components (e.g., `<InputField>`, `<FormButton>`).
- DIP: UI depends on abstractions via hooks/context.
3. Implement at least 5 screens:
- **Landing Page**: Navigation to Register/Login.
- **Register Page**: Form with validation; POST `/api/register`.
- **Login Page**: Form with validation; POST `/api/login`.
- **Dashboard Page**: Display transactions; search by vendor/category/tags; GET `/api/userdetails`.
- **Change Password Page**: Form; POST `/api/changepassword`.

Backend:
- Implement REST API endpoints:
  - POST `/api/register`
  - POST `/api/login`
  - POST `/api/changepassword`
  - GET `/api/userdetails`
  - GET `/api/userdetails/{transactionId}`
  - Use OpenAPI 3.0 for API documentation.

Documentation:
- Create Markdown documentation with:
  - Navigation flow diagram (Mermaid)
  - Sequence diagram for login and dashboard processes
  - Main use cases and use case diagram
  - ERD for database structure
  - Explanation of how diagrams relate to requirements

Testing:
- Generate:
  - Functional and integration test cases
  - BDD scenarios (Given-When-Then)
  - Cypress automation scripts for main flows (login, register, dashboard)
- Include best practices:
  - Page Object Model
  - Reusable commands
  - Comments and clear structure

Deliverables:
- ReactJS frontend with routing and state management
- Backend API with Swagger documentation
- Markdown documentation with diagrams and workflows
- Documented test cases and automated scripts with Cypress and explanation of execution steps
```

## Notes
- **ID:** 3173
- **<span data-lang="en">Type</span><span data-lang="fr">Type</span>:** Task
- **Status:** New
- **<span data-lang="en">Priority</span><span data-lang="fr">Priorité</span>:** 2
- <span data-lang="en">Created</span><span data-lang="fr">Créé</span>: 2025-11-13
- <span data-lang="en">Last Changed</span><span data-lang="fr">Dernière modification</span>: 2025-11-18
