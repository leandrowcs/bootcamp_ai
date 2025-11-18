# Enregistrer et consulter les heures de travail des employés
**ID:** 3203  
**Type:** Feature  
**Status:** New  
**Priority:** 2  

## Description
En tant qu'administrateur RH, je veux pouvoir enregistrer les heures travaillées par chaque employé et consulter un rapport détaillé, afin d'assurer une gestion efficace du temps et de la paie.

**Critères d'acceptation:**
- Il est possible d'ajouter les heures travaillées pour un employé spécifique (date, heure de début, heure de fin).
- Le système valide que les heures saisies ne dépassent pas 24 heures par jour.
- Un rapport hebdomadaire peut être généré pour chaque employé, incluant le total des heures.
- Les données doivent être accessibles uniquement aux utilisateurs autorisés (administrateurs et gestionnaires).
- Les heures supplémentaires (>40 heures/semaine) doivent être identifiées dans le rapport.

**Règles de gestion:**
- Les employés ne peuvent pas modifier leurs propres heures.
- Les heures doivent être enregistrées en format 24h (HH:MM).
- Les rapports doivent être exportables en format PDF et CSV.

## Acceptance Criteria
- Il est possible d'ajouter les heures travaillées pour un employé spécifique (date, heure de début, heure de fin)
- Le système valide que les heures saisies ne dépassent pas 24 heures par jour
- Un rapport hebdomadaire peut être généré pour chaque employé, incluant le total des heures
- Les données doivent être accessibles uniquement aux utilisateurs autorisés (administrateurs et gestionnaires)
- Les heures supplémentaires (>40 heures/semaine) doivent être identifiées dans le rapport

## Notes
- Tags: demo, rapport, rh, temps_de_travail
- Business Rules:
  - Les employés ne peuvent pas modifier leurs propres heures
  - Les heures doivent être enregistrées en format 24h (HH:MM)
  - Les rapports doivent être exportables en format PDF et CSV
- Created: 2025-11-14
- Last Changed: 2025-11-17
