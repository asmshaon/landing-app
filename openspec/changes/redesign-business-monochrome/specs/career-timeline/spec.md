## Purpose

Shows the full work history as a compact chronological timeline, so that recruiters can see the breadth and continuity of 16+ years of experience at a glance.

## ADDED Requirements

### Requirement: Complete engagement timeline
The page SHALL include an experience section, reached from the navigation as "Experience", that lists every engagement in the shareable inventory (2009 to present) in reverse chronological order by start date. The inventory's two E-POS sections (the platform, and its SaaS website and onboarding) describe one engagement and SHALL be shown as a single entry, giving 17 entries.

#### Scenario: Timeline contents
- **WHEN** a visitor opens the Experience section
- **THEN** 17 entries are listed, the first starting May 2026 ("present") and the last starting January 2009

### Requirement: Entry content
Each timeline entry SHALL show the date range, a one-line anonymous description of the business, the role title, and the engagement type (remote contractor, part-time remote contractor, or full-time on-site in Dhaka). Entries SHALL NOT name clients.

#### Scenario: Reading an entry
- **WHEN** a visitor reads any timeline entry
- **THEN** it shows the dates, the business description, the role and the engagement type, and no client name

### Requirement: Link to case study
Timeline entries for engagements that also appear as case studies SHALL be visibly linked to their case study.

#### Scenario: Jump to case study
- **WHEN** a visitor activates the case-study link on the car-rental timeline entry
- **THEN** the page scrolls to the car-rental case study

### Requirement: Compact, responsive presentation
The timeline SHALL use text, rules and spacing only, with no logos or colored markers, and SHALL be readable at phone width without horizontal scrolling in both themes.

#### Scenario: Phone width
- **WHEN** the Experience section is viewed at 375px wide
- **THEN** the dates stack above each entry's text and no horizontal scrolling occurs
