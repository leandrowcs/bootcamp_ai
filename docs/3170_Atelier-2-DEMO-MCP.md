# Atelier 2 - DEMO MCP
**ID:** 3170  
**Type:** Task  
**Status:** New  
**Priority:** 2  

## Description
**Objective:** Demonstrate how AI can generate code to integrate with management tools.

### Configuration du serveur MCP

#### 2.1. Installer Azure CLI (si non installé)
- Demandez les accès administratifs si nécessaire.
- Exécutez la commande suivante dans PowerShell:
```
winget install Microsoft.AzureCLI
```

#### 2.2. Installer les extensions nécessaires dans VS Code
- Azure MCP Server → Installez via le Marketplace.
- Redémarrez VS Code s'il était ouvert pendant l'installation de l'Azure CLI.
- Azure Developer CLI → Installez également depuis le Marketplace.
- Azure DevOps MCP → Installez via "Browse" dans la section MCP.

#### 2.3. Connexion à Azure
Connectez-vous à Azure avec votre compte CGI:
```
az login
az login --allow-no-subscriptions (juste s'il disent d'exécuter cette commande après avoir exécuter 'az login')
```
Lorsqu'il demande de choisir une subscription, appuyez simplement sur Entrée.

#### 2.4. Connexion à Azure DevOps
```
az extension add --name azure-devops
az devops login
```
Lorsqu'il demande un token, allez sur Azure DevOps > User Settings > Personal Access Token > New Token

#### 2.5. Configuration du fichier MCP Server
Remplacer le fichier de configuration par ceci:
```json
{
  "servers": {
    "azure-devops": {
      "command": "npx",
      "args": ["-y", "@azure-devops/mcp", "moncentre"]
    }
  },
  "inputs": [
    {
      "id": "ado_org",
      "type": "promptString",
      "description": "Azure DevOps organization name (e.g. 'contoso')",
      "password": false
    }
  ]
}
```

Emplacement des configurations de VS Code pour permettre la communication entre Azure Devops et Copilot:
File > Preferences > Settings > search for: mcp > Check **chat.mcp.assisted.nuget** option

### Prompt to List All Tickets in Azure DevOps
```
You are an assistant specialized in Azure DevOps data extraction.
Your task is to retrieve and list all work items (tickets) from the specified project.
Follow these instructions:

1. **Scope**:
   - Include all work items: User Stories, Bugs, Tasks, Epics.
   - Cover all states: New, Active, Resolved, Closed.
   - Include items from all iterations/sprints.

2. **Output Requirements**:
   - Display the following fields for each ticket:
     - ID
     - Title
     - Work Item Type
     - State
     - Assigned To
     - Tags
     - Iteration Path
   - Sort the list by ID in ascending order.

3. **Response Format**:
   - Use Markdown.
   - Present the data in a table with columns: `ID | Title | Type | State | Assigned To | Tags | Iteration`.

4. **Additional Notes**:
   - If the project has more than 100 tickets, provide the first 100 and indicate that the list is truncated.
   - Do not summarize; list the raw data clearly.

Project Name: BootcampAI
```

## Notes
- Created: 2025-11-13
- Last Changed: 2025-11-14
