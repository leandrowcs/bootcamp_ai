# Atelier 2 - DEMO Cas de Test et Automatisation
**ID:** 3171  
**Type:** Task  
**Status:** New  
**Priority:** 2  

## Description
**Objective:** Show how AI can generate test cases from code or requirements. And after can generate the automation scripts too.

### 4.1 Generate test cases

#### Example prompt:
```
You are a QA engineer specialized in automation.
Based on the following [instructions or code or JIRA documentation or Workflow].
Generate:
- Functional or E2E test cases
- BDD structure (Given-When-Then)
Create a document .md with all test cases generated.

Output format:
Test Case: <Test ##> - <Test Case Title>
Description: <Test Case Description>
Steps:
  1. Action: <Step description>
     * Expected Result: <Step result>
  2. ...
```

#### A. Instructions
```
The application must allow employees to log in, view their work schedule, and request time off. Managers can approve or reject time-off requests.
```

#### B. Code
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

#### C. JIRA documentation
```
As an employee, I want to view my weekly schedule so that I can plan my tasks accordingly.
Acceptance Criteria:
- Display schedule for the current week.
- Highlight holidays and approved time-off.
```

#### D. Workflow
```
Employee logs in → Views schedule → Requests time off → Manager approves/rejects → System updates schedule.
```

### 4.2 Generate automated scripts

#### Example prompt:
```
You are a QA engineer specialized in automation.
Based on the test cases written in the file [filename.md], generate:
- Automation code scripts using Cypress in JavaScript
- A simple automation script implementing the main test cases
- Documentation explaining:
    * How the automation code is organized
    * Best practices applied (e.g., Page Object Model, reusable commands)
    * How to execute the tests locally and integrate them into a CI/CD pipeline
Include comments in the code for clarity.
```

## Acceptance Criteria
- Not specified

## Notes
- Created: 2025-11-13
- Last Changed: 2025-11-17
