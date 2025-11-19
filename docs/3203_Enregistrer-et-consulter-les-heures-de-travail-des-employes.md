# <span data-lang="en">Record and View Employee Work Hours</span><span data-lang="fr">Enregistrer et consulter les heures de travail des employés</span>

## <span data-lang="en">Description</span><span data-lang="fr">Description</span>

<span data-lang="en">As an HR administrator, I want to be able to record the hours worked by each employee and view a detailed report, in order to ensure effective time and payroll management.</span>
<span data-lang="fr">En tant qu'administrateur RH, je veux pouvoir enregistrer les heures travaillées par chaque employé et consulter un rapport détaillé, afin d'assurer une gestion efficace du temps et de la paie.</span>

## <span data-lang="en">Acceptance Criteria</span><span data-lang="fr">Critères d'acceptation</span>

- <span data-lang="en">It is possible to add worked hours for a specific employee (date, start time, end time).</span><span data-lang="fr">Il est possible d'ajouter les heures travaillées pour un employé spécifique (date, heure de début, heure de fin).</span>
- <span data-lang="en">The system validates that the entered hours do not exceed 24 hours per day.</span><span data-lang="fr">Le système valide que les heures saisies ne dépassent pas 24 heures par jour.</span>
- <span data-lang="en">A weekly report can be generated for each employee, including total hours.</span><span data-lang="fr">Un rapport hebdomadaire peut être généré pour chaque employé, incluant le total des heures.</span>
- <span data-lang="en">Data must be accessible only to authorized users (administrators and managers).</span><span data-lang="fr">Les données doivent être accessibles uniquement aux utilisateurs autorisés (administrateurs et gestionnaires).</span>
- <span data-lang="en">Overtime (>40 hours/week) must be identified in the report.</span><span data-lang="fr">Les heures supplémentaires (>40 heures/semaine) doivent être identifiées dans le rapport.</span>

## <span data-lang="en">Business Rules</span><span data-lang="fr">Règles de gestion</span>

- <span data-lang="en">Employees cannot modify their own hours.</span><span data-lang="fr">Les employés ne peuvent pas modifier leurs propres heures.</span>
- <span data-lang="en">Hours must be recorded in 24h format (HH:MM).</span><span data-lang="fr">Les heures doivent être enregistrées en format 24h (HH:MM).</span>
- <span data-lang="en">Reports must be exportable in PDF and CSV formats.</span><span data-lang="fr">Les rapports doivent être exportables en format PDF et CSV.</span>

## Notes
- **ID:** 3203
- **<span data-lang="en">Type</span><span data-lang="fr">Type</span>:** Feature
- **Status:** New
- **<span data-lang="en">Priority</span><span data-lang="fr">Priorité</span>:** 2
- Tags: demo, rapport, rh, temps_de_travail
- <span data-lang="en">Created</span><span data-lang="fr">Créé</span>: 2025-11-14
- <span data-lang="en">Last Changed</span><span data-lang="fr">Dernière modification</span>: 2025-11-18
