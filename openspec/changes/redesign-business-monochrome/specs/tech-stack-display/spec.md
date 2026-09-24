## MODIFIED Requirements

### Requirement: Typographic treatment only
Any technology names shown on the page SHALL be rendered as plain text using typography and spacing only. They SHALL NOT use technology logos, per-technology icons, or individually colored badges or pills.

#### Scenario: No logos or colored badges
- **WHEN** any place on the page that shows technology names is inspected
- **THEN** it contains no technology logo images or icons, and no technology name has its own colored background or badge

### Requirement: Plain-text project tech lists
Where a case study shows technologies, they SHALL appear as a single muted line of slash-separated plain text that is visually secondary to the business content, instead of individual tag pills.

#### Scenario: Project technologies
- **WHEN** a visitor views a case study that lists technologies
- **THEN** the technologies appear as one muted line of slash-separated text after the outcome, without per-technology badges

## REMOVED Requirements

### Requirement: Grouped stack section
**Reason**: The site is aimed at recruiters and non-technical readers, so a dedicated skills and stack section is removed.
**Migration**: The page has no stack section. Any technology names appear only in the case-study footnotes.

### Requirement: Theme and viewport support
**Reason**: This requirement applied only to the removed stack section.
**Migration**: Theme support for all sections is covered by `monochrome-visual-theme`, and phone-width layout for case studies by `business-case-studies`.
