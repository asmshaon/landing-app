## MODIFIED Requirements

### Requirement: Employer-facing copy
Section headings and intros SHALL address hiring teams, recruiters and long-term engagements rather than project buyers, and SHALL use plain business language focused on the value the engineer brings and the problems they solve. This covers the countries strip, the "What I Do" intro, the case studies and experience intros, the "why work with me" heading, the testimonials heading and the call-to-action section copy.

#### Scenario: Countries strip
- **WHEN** a visitor reads the countries strip
- **THEN** it describes remote work with teams across those countries rather than "trusted by clients"

#### Scenario: Contact call-to-action copy
- **WHEN** a visitor reads the call-to-action section heading and intro
- **THEN** the copy invites them to describe a problem or goal they want solved, does not ask "Have a project in mind?", and does not state the engineer's availability or the employment types they want

#### Scenario: Plain-language intros
- **WHEN** a visitor reads the intros of the "What I Do", Work and Experience sections
- **THEN** they contain no programming language, framework or tool names

### Requirement: Highlighted evidence
Highlighted statistics SHALL be limited to years of experience (16+) and business figures that appear in the shareable career inventory, shown with the same meaning they have there, such as 4M+ rentals handled on the car-rental platform. There SHALL be no more than three highlighted statistics. Marketplace-derived statistics SHALL NOT be displayed.

#### Scenario: Hero stats
- **WHEN** a visitor views the hero
- **THEN** it highlights at most three statistics, one of which is 16+ years of experience, and each can be traced to the inventory

#### Scenario: Testimonials section layout
- **WHEN** a visitor views the testimonials section
- **THEN** no statistics column is shown, and the testimonials use the full section width

### Requirement: Contact is the only call to action
The hero, the navigation bar and the call-to-action section SHALL offer a single call to action, with an inviting conversational label such as "Let's talk", that leads to the on-page message form. The bare word "Contact" SHALL NOT be used as a button or navigation label. The page SHALL NOT show "Hire Me", "Get a Quote" or "Book a Call" actions, and SHALL NOT link to external scheduling pages.

#### Scenario: Hero call to action
- **WHEN** a visitor views the hero
- **THEN** the only action button has the conversational label, and activating it brings the message form into view

#### Scenario: Navigation call to action
- **WHEN** a visitor views the navigation bar or opens the mobile menu
- **THEN** the call-to-action uses the same conversational label, and neither "Contact" nor "Hire Me" appears as a label

#### Scenario: Contact section actions
- **WHEN** a visitor reaches the call-to-action section
- **THEN** no Hire Me, Get a Quote or Book a Call buttons are shown, and the message form is available

### Requirement: Retained contact channels
The message form SHALL be the only way to reach the engineer directly from the page. The page SHALL NOT display an email address, phone number or WhatsApp number or link, and SHALL NOT embed a location map. The LinkedIn, GitHub and X profile links SHALL remain. The page SHALL NOT add a working-hours overlap statement or a CV download.

#### Scenario: Contact form still works
- **WHEN** a visitor submits the form with a valid name, email, subject and message
- **THEN** the message is sent and a success status is shown, as before this change

#### Scenario: No direct contact details
- **WHEN** the rendered page text and links are searched for the engineer's email address, "mailto:", "tel:", "wa.me", "WhatsApp" and a map embed
- **THEN** no matches are found

## REMOVED Requirements

### Requirement: Remote availability statement
**Reason**: An availability line ("open to remote roles, full-time or long-term contract") speaks about what the engineer wants instead of the value they bring. The owner asked for value-first positioning.
**Migration**: The hero drops the availability line. The call-to-action copy invites visitors to describe a problem instead.
