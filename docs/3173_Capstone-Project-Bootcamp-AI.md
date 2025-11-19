# Capstone Project - Bootcamp AI
**ID:** 3173  
**Type:** Task  
**Status:** New  
**Priority:** 2  

## Description
Full-Stack Modular Application with Documentation and Testing.

**Objective:**
Build a full-stack financial dashboard web application with:
- A modular ReactJS frontend (4–5 pages) following SOLID principles.
- A backend exposing RESTful API endpoints (Swagger/OpenAPI compliant).
- Complete documentation including diagrams and workflows.
- Create and automate tests for critical functionalities.

### Example prompt:
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
- Created: 2025-11-13
- Last Changed: 2025-11-18
