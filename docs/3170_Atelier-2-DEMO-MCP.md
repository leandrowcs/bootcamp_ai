# <span data-lang="en">Workshop 2 - DEMO MCP</span><span data-lang="fr">Atelier 2 - DEMO MCP</span>
**ID:** 3170  
**<span data-lang="en">Type</span><span data-lang="fr">Type</span>:** Task  
**Status:** New  
**<span data-lang="en">Priority</span><span data-lang="fr">Priorité</span>:** 2  

## <span data-lang="en">Description</span><span data-lang="fr">Description</span>
**<span data-lang="en">Objective</span><span data-lang="fr">Objectif</span>:** <span data-lang="en">Demonstrate how AI can generate code to integrate with management tools.</span><span data-lang="fr">Démontrer comment l'IA peut générer du code pour s'intégrer avec des outils de gestion.</span>

### <span data-lang="en">MCP Server Configuration</span><span data-lang="fr">Configuration du serveur MCP</span>

#### <span data-lang="en">2.1. Install Azure CLI (if not installed)</span><span data-lang="fr">2.1. Installer Azure CLI (si non installé)</span>
- <span data-lang="en">Request administrative access if necessary.</span><span data-lang="fr">Demandez les accès administratifs si nécessaire.</span>
- <span data-lang="en">Run the following command in PowerShell:</span><span data-lang="fr">Exécutez la commande suivante dans PowerShell:</span>
```
winget install Microsoft.AzureCLI
```

#### <span data-lang="en">2.2. Install necessary extensions in VS Code</span><span data-lang="fr">2.2. Installer les extensions nécessaires dans VS Code</span>
- Azure MCP Server → <span data-lang="en">Install via the Marketplace.</span><span data-lang="fr">Installez via le Marketplace.</span>
- <span data-lang="en">Restart VS Code if it was open during Azure CLI installation.</span><span data-lang="fr">Redémarrez VS Code s'il était ouvert pendant l'installation de l'Azure CLI.</span>
- Azure Developer CLI → <span data-lang="en">Also install from the Marketplace.</span><span data-lang="fr">Installez également depuis le Marketplace.</span>
- Azure DevOps MCP → <span data-lang="en">Install via "Browse" in the MCP section.</span><span data-lang="fr">Installez via "Browse" dans la section MCP.</span>

#### <span data-lang="en">2.3. Connect to Azure</span><span data-lang="fr">2.3. Connexion à Azure</span>
<span data-lang="en">Connect to Azure with your CGI account:</span><span data-lang="fr">Connectez-vous à Azure avec votre compte CGI:</span>
```
az login
az login --allow-no-subscriptions (juste s'il disent d'exécuter cette commande après avoir exécuter 'az login')
```
<span data-lang="en">When prompted to choose a subscription, simply press Enter.</span><span data-lang="fr">Lorsqu'il demande de choisir une subscription, appuyez simplement sur Entrée.</span>

#### <span data-lang="en">2.4. Connect to Azure DevOps</span><span data-lang="fr">2.4. Connexion à Azure DevOps</span>
```
az extension add --name azure-devops
az devops login
```
<span data-lang="en">When prompted for a token, go to Azure DevOps > User Settings > Personal Access Token > New Token</span><span data-lang="fr">Lorsqu'il demande un token, allez sur Azure DevOps > User Settings > Personal Access Token > New Token</span>

#### <span data-lang="en">2.5. MCP Server Configuration File</span><span data-lang="fr">2.5. Configuration du fichier MCP Server</span>
<span data-lang="en">Replace the configuration file with this:</span><span data-lang="fr">Remplacer le fichier de configuration par ceci:</span>
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

4. **<span data-lang="en">Additional Notes</span><span data-lang="fr">Notes Supplémentaires</span>**:
   - <span data-lang="en">If the project has more than 100 tickets, provide the first 100 and indicate that the list is truncated.</span><span data-lang="fr">Si le projet a plus de 100 tickets, fournissez les 100 premiers et indiquez que la liste est tronquée.</span>
   - <span data-lang="en">Do not summarize; list the raw data clearly.</span><span data-lang="fr">Ne pas résumer; lister les données brutes clairement.</span>

Project Name: BootcampAI
```

## Notes
- <span data-lang="en">Created</span><span data-lang="fr">Créé</span>: 2025-11-13
- <span data-lang="en">Last Changed</span><span data-lang="fr">Dernière modification</span>: 2025-11-18
