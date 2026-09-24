# professional-positioning Specification

## Purpose
Defines how the landing page presents the engineer's professional identity: a senior full-stack software engineer with 15+ years of production experience, who is actively moving into AI engineering. Claims must match shipped experience.

## Requirements

### Requirement: Full-stack-led headline
The page's primary headline SHALL position the engineer as a senior full-stack engineer who builds production systems that scale. It SHALL NOT claim AI as the engineer's primary identity or specialism.

#### Scenario: Visitor lands on the page
- **WHEN** a visitor loads the page
- **THEN** the first headline they see describes a senior full-stack engineer building production systems, with no claim of AI expertise

### Requirement: Experience supporting line
Directly below the headline, the page SHALL present full-stack engineering experience as the supporting message. It SHALL name PHP/Laravel, Python/FastAPI, TypeScript and Next.js, and state 15+ years of experience. It MAY state that the engineer is currently learning AI engineering, phrased as current study rather than delivered work.

#### Scenario: Supporting message names core languages
- **WHEN** a visitor reads the text directly below the headline
- **THEN** it names PHP/Laravel, Python/FastAPI and TypeScript and states 15+ years of experience

#### Scenario: Supporting message visible on mobile
- **WHEN** the page is viewed at phone width, where decorative stat cards may be hidden
- **THEN** the 15+ years of experience is still stated in the visible hero text

### Requirement: Consistent job title
The page SHALL use one consistent professional title, "Senior Full-Stack Software Engineer", across the browser title/metadata and the navigation brand subtitle, and the hero SHALL be consistent with it. The page SHALL NOT present the engineer with an architect job title, and SHALL NOT use conflicting titles such as "Full-Stack Engineer" alongside "Senior Software Engineer".

#### Scenario: Title consistency
- **WHEN** the browser tab title, navigation subtitle and hero are compared
- **THEN** they present the same professional title, "Senior Full-Stack Software Engineer", and no architect title appears

### Requirement: Python and FastAPI as first-class backend
Wherever the page lists backend capabilities, Python and FastAPI SHALL appear as backend technologies alongside PHP/Laravel and Node.js. They SHALL NOT appear only in AI-related context.

#### Scenario: Backend listing includes Python
- **WHEN** a visitor reads the backend capabilities or the backend stack group
- **THEN** Python/FastAPI is listed there together with PHP/Laravel

### Requirement: AI presented as a learning area only
The engineer's AI experience is side projects and self-study, with no production AI delivery. The page SHALL therefore present AI only as an area being learned. It SHALL NOT offer AI as a service, SHALL NOT list AI capabilities among things the engineer delivers, and SHALL NOT describe the engineer as an ML researcher or data scientist.

#### Scenario: No AI service offering
- **WHEN** a visitor views the services section
- **THEN** no AI or automation service card is shown, and the services are backend, frontend and infrastructure work

#### Scenario: AI wording is study, not delivery
- **WHEN** any AI mention on the page is read
- **THEN** it is phrased as learning, exploring or currently building skills, never as delivered client work, and no AI metrics or AI outcomes are claimed

### Requirement: Projects presented as production systems
The featured projects section SHALL show the existing three projects (Car Booking Engine first) and frame them as production systems, not deliverables built for clients.

#### Scenario: Projects intro wording
- **WHEN** a visitor reads the projects section heading and intro
- **THEN** the copy refers to production systems and does not describe the work as "built for clients"

### Requirement: No AI-tooling value proposition
The "why work with me" values SHALL NOT include a value about using AI tools to speed up development. Its slot SHALL present remote-work ownership and reliability instead.

#### Scenario: Values content
- **WHEN** a visitor reads the "why work with me" values
- **THEN** no value is about AI-assisted development, and one value covers remote ownership and reliability
