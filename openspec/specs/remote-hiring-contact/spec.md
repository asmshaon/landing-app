# remote-hiring-contact Specification

## Purpose
Defines how the landing page speaks to remote employers and long-term contract clients, what it highlights as evidence, and how visitors get in touch, with no freelance-marketplace framing.

## Requirements

### Requirement: Remote availability statement
The page SHALL state that the engineer is open to remote roles, both full-time and long-term contract. It SHALL NOT state availability "for new projects".

#### Scenario: Hero availability
- **WHEN** a visitor reads the hero
- **THEN** an availability line states openness to remote full-time roles or long-term contracts

### Requirement: No Upwork references
The page SHALL NOT contain any Upwork link, Upwork badge or status, Upwork hours, Job Success Score, or "Upwork Client"/"Verified Review" attribution.

#### Scenario: Upwork-free page
- **WHEN** the rendered page text and links are searched for "Upwork", "upwork.com", "Job Success" and "Top Rated"
- **THEN** no matches are found

### Requirement: Contact is the only call to action
The hero, the navigation bar and the contact call-to-action area SHALL offer Contact as the only call to action, leading to the on-page contact section. The page SHALL NOT show "Hire Me", "Get a Quote" or "Book a Call" actions, and SHALL NOT link to external scheduling pages.

#### Scenario: Hero call to action
- **WHEN** a visitor views the hero
- **THEN** the only action button is Contact, and activating it brings the contact section into view

#### Scenario: Navigation call to action
- **WHEN** a visitor views the navigation bar or opens the mobile menu
- **THEN** any call-to-action button reads Contact, and no "Hire Me" label appears anywhere in the navigation

#### Scenario: Contact section actions
- **WHEN** a visitor reaches the contact call-to-action area
- **THEN** no Hire Me, Get a Quote or Book a Call buttons are shown, and the contact form remains available

### Requirement: Employer-facing copy
Section headings and intros SHALL address hiring teams and long-term engagements rather than project buyers. This includes the countries strip, the services intro, the "why work with me" heading, the testimonials heading and the contact call-to-action copy.

#### Scenario: Countries strip
- **WHEN** a visitor reads the countries strip
- **THEN** it describes remote work with teams across those countries rather than "trusted by clients"

#### Scenario: Contact call-to-action copy
- **WHEN** a visitor reads the contact call-to-action heading and intro
- **THEN** the copy invites contact about a remote role or long-term contract and does not ask "Have a project in mind?"

### Requirement: Highlighted evidence
Apart from the projects, the only highlighted statistic SHALL be years of experience (15+). Marketplace-derived statistics SHALL NOT be displayed.

#### Scenario: Hero stats
- **WHEN** a visitor views the hero stats on a large screen
- **THEN** only the years-of-experience statistic is shown

#### Scenario: Testimonials section layout
- **WHEN** a visitor views the testimonials section
- **THEN** no statistics column is shown, and the testimonials use the full section width

### Requirement: Client testimonials
The three existing testimonials SHALL remain, attributed as "Client" and without marketplace verification labels. Their text SHALL be unchanged except for removing the phrase "on Upwork" from the testimonial that contains it; no other wording may change.

#### Scenario: Testimonial attribution
- **WHEN** a visitor reads a testimonial's attribution
- **THEN** it reads "Client" and makes no reference to Upwork or "Verified Review"

#### Scenario: Marketplace phrase trimmed from quote
- **WHEN** a visitor reads the testimonial that previously said "one of the best developers I've ever worked with on Upwork"
- **THEN** it reads "one of the best developers I've ever worked with" and the rest of the quote is unchanged

### Requirement: Retained contact channels
The contact form, email, WhatsApp, location map, and LinkedIn, GitHub and X links SHALL remain available. The page SHALL NOT add a working-hours overlap statement or a CV download.

#### Scenario: Contact form still works
- **WHEN** a visitor submits the contact form with valid name, email, subject and message
- **THEN** the message is sent and a success status is shown, as before this change
