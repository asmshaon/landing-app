## Purpose

Defines how the technical stack is shown on the landing page: a restrained typographic treatment grouped by context, which reads as part of the personal brand rather than a grid of logos.

## ADDED Requirements

### Requirement: Grouped stack section
The page SHALL include a stack section placed after the services section and before the featured projects section. It SHALL list the stack in labeled groups: Backend, Frontend, Data, Infrastructure and Exploring. The "Exploring" group SHALL carry the AI technologies, and its label SHALL make clear these are not yet delivered experience.

#### Scenario: Stack groups and contents
- **WHEN** a visitor scrolls past the services section
- **THEN** they see a stack section containing these groups:
  - Backend: PHP / Laravel, Python / FastAPI, TypeScript / Node.js / NestJS / Express.js
  - Frontend: Next.js / React
  - Data: MySQL / PostgreSQL / MongoDB, Redis / Elasticsearch / OpenSearch
  - Infrastructure: AWS / Docker / RabbitMQ / SQS
  - Exploring: LLM APIs / RAG / Agents / MCP

### Requirement: Typographic treatment only
The stack SHALL be rendered with text, typography, spacing and subtle separators only. It SHALL NOT use technology logos, per-technology icons, or individually colored badges or pills.

#### Scenario: No logos or colored badges
- **WHEN** the stack section is inspected
- **THEN** it contains no technology logo images or icons, and no technology name has its own colored background or badge

### Requirement: Plain-text project tech lists
Each featured project's technology list SHALL use the same restrained typographic style, as slash-separated plain text, instead of individual tag pills.

#### Scenario: Project technologies
- **WHEN** a visitor views a featured project card
- **THEN** its technologies appear as one line of slash-separated text without per-technology badges

### Requirement: Theme and viewport support
The stack section SHALL be legible in both light and dark themes and SHALL reflow at phone width without horizontal scrolling.

#### Scenario: Dark and light themes
- **WHEN** the theme is toggled between dark and light
- **THEN** group labels, technology text and separators remain clearly legible in both

#### Scenario: Phone width
- **WHEN** the page is viewed at about 375px wide
- **THEN** group labels stack above their technologies and no horizontal scrolling occurs
