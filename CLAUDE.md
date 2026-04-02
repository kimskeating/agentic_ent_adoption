# Agentic Enterprise Adoption with Agentforce — Project Guide

## Project Overview
Single-page web application (index.html) demonstrating how AI agents operate across a B2C telco enterprise. Built for Salesforce demo purposes with SLDS-inspired design.

## Architecture
- **Single HTML file** with embedded CSS and JS — no build tools, no dependencies, no frameworks
- All data is static JavaScript constants (agents, org tree, journeys, calculator, telemetry)
- Hosted on GitHub Pages: https://kimskeating.github.io/agentic_ent_adoption/
- Repo: https://github.com/kimskeating/agentic_ent_adoption

## 5 Tabs
1. **Customer Journeys** — Horizontal swimlane journey map with 8 stages
2. **Enterprise Agentic Functions** — Org chart with Service, Sales, Marketing hierarchies
3. **Value Calculator** — ROI business case builder with 3-year projections
4. **Agent Data Requirements** — Medallion architecture (Bronze/Silver/Gold) + per-agent data needs
5. **Agent Telemetry** — KPI definitions + live dashboard

## Key Conventions
- CSS class names are abbreviated for file size (e.g., `.tdb` = telemetry dashboard, `.bd` = badge, `.th` = tree header)
- Agent data stored in `const A = {}` with short keys (e.g., `A.careCopilot`, `A.billingResolution`)
- Org trees in `const O = {service:{...}, sales:{...}, marketing:{...}}`
- Journey data in `const J = [...]`
- Calculator roles in `const CR = {service:[...], sales:[...]}`
- Telemetry metrics in `const TEL = [...]`

## Agent Hierarchy Pattern
- **Orchestrator agents** (master) delegate to specialized **sub-agents**
- Care Orchestrator has 14 sub-agents under Frontline Care Rep
- Care Director Orchestrator serves the Director level
- Care Supervisor Orchestrator serves the Supervisor level
- Same pattern for Tech Support, Retention, Retail, Telesales

## Cross-Tab Navigation
- Journey map agent/role pills navigate to org chart (via `nA()` and `nR()`)
- Org chart agent cards have "Data" badge linking to data requirements tab (via `nD()`)
- Data tab agents link back to org chart (via `nA()`)
- Medallion architecture Silver layer cards link to org chart agents

## Responsive / Multi-Form-Factor Requirements
This app must work on all form factors. Follow these rules:

### Desktop (1024px+)
- Full horizontal journey map with all 8 stages visible (horizontal scroll)
- Org chart with full tree depth and connecting lines
- Calculator tables with all columns visible
- Data requirements in 3-column medallion layout
- Telemetry dashboard with 5-column KPI strip

### Tablet (768px - 1023px)
- Journey map scrolls horizontally (min-width enforced)
- Org chart works as-is (tree collapses naturally)
- Calculator tables may need horizontal scroll
- Medallion columns should stack if needed
- KPI strip wraps to 2 rows

### Mobile (< 768px)
- All grid layouts collapse to single column
- KPI strip wraps to 2-3 per row
- Tables get horizontal scroll wrappers
- Org chart tree indentation compresses
- Modal width goes to 95vw
- Touch-friendly: minimum 44px tap targets on all interactive elements
- Font sizes should not go below 12px for readability

### Current Media Queries
```css
@media (max-width: 900px) {
  /* Existing breakpoint — adjust as needed */
}
```

### Testing Checklist
- [ ] Chrome desktop (primary)
- [ ] Safari desktop (Mac users)
- [ ] Chrome mobile (Android)
- [ ] Safari mobile (iOS)
- [ ] iPad landscape
- [ ] iPad portrait
- [ ] Large monitor (1920px+)
- [ ] Presentation mode (projector, 1280x720 or 1920x1080)

## Design System (SLDS-inspired)
- Brand blue: `#0176d3`
- Global header: `#032d60`
- Agentforce purple: `#7526e5`
- Marketing pink: `#e3066a`
- Success: `#2e844a`
- Warning: `#dd7a01`
- Error: `#ea001e`
- Text: `#181818` / `#444444` / `#706e6b`
- Page background: `#f3f3f3`
- Card surface: `#ffffff`
- Borders: `#e5e5e5`
- Font: Salesforce Sans fallback stack

## Deployment
```bash
# From /Users/kimkeating/Salesforce/
git add index.html
git commit -m "description"
git push
# GitHub Pages auto-deploys from main branch
```

## Key Files
- `index.html` — the entire application
- `agent_tree_reference.md` — reference doc: agent/data/telemetry tree by role
- `B2C_Telco_Agentified_OrgChart.gs` — Google Sheets Apps Script version
- `CLAUDE.md` — this file

## Do NOT
- Add external dependencies (no React, no Chart.js, no D3)
- Split into multiple HTML files
- Change the single-file architecture
- Remove the error handler (`window.onerror`)
- Use pie/ring/donut charts (user preference: bar charts only)
- Use the word "Copilot" for master agents (use "Orchestrator")
- Put approval-based agents under Directors (they belong under Supervisors)
- Put operational agents under Directors (Directors get strategic/analytics agents)

## DO
- Keep all KPIs measured against explicit targets
- Show orchestrator agents in deep purple master pill style in journey map
- Show sub-agents indented under their orchestrator
- Order FTEs as Director → Supervisor → Frontline
- Source footnotes on the journey map
- Test on multiple screen sizes before pushing
- Use bar charts for all data visualization
