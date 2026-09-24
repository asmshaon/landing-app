## MODIFIED Requirements

### Requirement: Full-stack-led headline
The page's primary headline SHALL say, in plain business language, that the engineer builds reliable software systems that solve business problems. It SHALL NOT tie the engineer to one industry or domain, SHALL NOT name programming languages or frameworks, and SHALL NOT claim AI as the engineer's primary identity or specialism.

#### Scenario: Visitor lands on the page
- **WHEN** a visitor loads the page
- **THEN** the first headline they see is about building systems that solve business problems, and it names no industry, no technology and no AI expertise

### Requirement: Experience supporting line
Directly below the headline, the page SHALL state 16+ years of experience and describe the kinds of systems the engineer designs, builds and leads, naming at least payments, point of sale and SaaS platforms. It SHALL NOT limit the engineer to the industries of past clients, SHALL NOT list programming languages, frameworks or tools, and SHALL NOT mention AI.

#### Scenario: Supporting message names core languages
- **WHEN** a visitor reads the text directly below the headline
- **THEN** it states 16+ years of experience and names kinds of systems (including payments, point of sale and SaaS), and contains no language, framework or tool names

#### Scenario: Supporting message visible on mobile
- **WHEN** the page is viewed at phone width, where decorative stat cards may be hidden
- **THEN** the 16+ years of experience is still stated in the visible hero text

### Requirement: AI presented as a learning area only
The engineer's AI experience is side projects and self-study, with no production AI delivery. The page SHALL therefore present AI, if it is mentioned at all, only as an area being learned. It SHALL NOT offer AI as a service, SHALL NOT list AI among the outcomes the engineer delivers, and SHALL NOT describe the engineer as an ML researcher or data scientist.

#### Scenario: No AI service offering
- **WHEN** a visitor views the "What I Do" section
- **THEN** no AI or automation outcome area is shown

#### Scenario: AI wording is study, not delivery
- **WHEN** any AI mention on the page is read
- **THEN** it is phrased as learning, exploring or currently building skills, never as delivered client work, and no AI metrics or AI outcomes are claimed

## ADDED Requirements

### Requirement: Industries built for
The hero SHALL show a short list, between four and six items, of industries the engineer builds systems for. It SHALL include retail and point of sale, and the other items SHALL be growing industries where the engineer's system experience applies, such as fintech and payments, e-commerce and marketplaces, SaaS, and logistics. The list SHALL be labeled as industries the engineer builds for, not as past clients, and SHALL NOT include AI.

#### Scenario: Industries line
- **WHEN** a visitor reads the hero
- **THEN** they see four to six industries including retail and point of sale, under a label that presents them as industries the engineer builds for rather than clients served

### Requirement: Business outcome areas
A "What I Do" section, placed where the services section was, SHALL present what the engineer delivers as business outcome areas in plain language rather than engineering disciplines. It SHALL have between four and six areas, covering at least: bookings and payments, connecting many suppliers or partners into one product, modernizing legacy systems, and leading small engineering teams. Each area SHALL be supported by at least one case study or timeline entry. Area titles SHALL NOT be technology or discipline names such as "Backend Engineering", "Frontend Development" or "DevOps".

#### Scenario: Outcome areas shown
- **WHEN** a visitor views the "What I Do" section
- **THEN** they see four to six outcome areas with business titles, and no area is titled after a technical discipline or technology

## REMOVED Requirements

### Requirement: Python and FastAPI as first-class backend
**Reason**: The site no longer lists backend capabilities by technology, and the inventory has no Python/FastAPI engagement to support it.
**Migration**: None. Technology appears only in the case-study footnotes, which are defined by `business-case-studies`.

### Requirement: Projects presented as production systems
**Reason**: The three project cards are replaced by anonymized business case studies.
**Migration**: See `business-case-studies` for the replacement section and its requirements.
