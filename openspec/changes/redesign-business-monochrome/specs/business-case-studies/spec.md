## Purpose

Presents the engineer's strongest engagements as short, plain-language business case studies that recruiters and non-technical readers can follow, with every claim traceable to the career inventory.

## ADDED Requirements

### Requirement: Case studies section
The page SHALL include a case studies section, reached from the navigation as "Work", that presents exactly these six engagements, newest first:
- in-venue food ordering for events and food trucks (US)
- a legal-tech product for searching contract exhibits from SEC filings (US)
- a regulated-retail E-POS, delivery and inventory platform (US)
- a cruise and escorted-tour retailer (US)
- a consumer and merchant e-wallet with a marketplace (Singapore)
- a car-rental comparison and booking platform (Australia)

#### Scenario: Visitor opens Work
- **WHEN** a visitor activates the "Work" navigation link
- **THEN** the case studies section scrolls into view and shows the six engagements listed above

### Requirement: Business-first structure
Each case study SHALL show, in plain language: the business described anonymously, the date range, the problem the business had, what was delivered, the outcome, and the engineer's role (for example sole engineer, led a team of N, or main contributor). The problem, delivery and outcome text SHALL NOT depend on technical vocabulary to make sense.

#### Scenario: Reading a case study
- **WHEN** a non-technical visitor reads any case study
- **THEN** they can identify the business, the problem, what was delivered, the outcome and the engineer's role without reading any technology names

### Requirement: Anonymized clients
Case studies SHALL describe clients by business type and country only. They SHALL NOT show client names, client logos, client website links or screenshots of client products.

#### Scenario: No client identification
- **WHEN** the case studies section's text, links and images are inspected
- **THEN** no client company name, client domain, client logo or product screenshot is present

### Requirement: Traceable figures only
Every number or measurable claim in a case study SHALL appear in the shareable career inventory. A figure the inventory marks as reported by the engineer MAY be shown, but only with the same meaning as in the inventory. Figures not found in the inventory, such as "40% faster loads" or "99.9% uptime", SHALL NOT appear.

#### Scenario: Unsupported figures removed
- **WHEN** the page text is searched for "40%" and "99.9%"
- **THEN** no matches are found

#### Scenario: Supported figure shown
- **WHEN** a visitor reads the car-rental case study
- **THEN** any volume figure matches the inventory (4M+ rentals across 5 countries with 10+ suppliers) and nothing larger

### Requirement: Technology as a secondary footnote
A case study MAY end with a single muted line of technology names. That line SHALL be visually secondary to the business content, SHALL NOT use logos, icons or colored badges, and SHALL NOT list more than six items.

#### Scenario: Footnote hierarchy
- **WHEN** a case study with a technology line is viewed
- **THEN** the technology line appears after the outcome, in smaller muted text, as plain text of six items or fewer

### Requirement: Responsive layout
The case studies SHALL be readable at phone width (about 375px) without horizontal scrolling, in both themes.

#### Scenario: Phone width
- **WHEN** the case studies are viewed at 375px wide
- **THEN** each case study's content stacks in a single column and no horizontal scrolling occurs
