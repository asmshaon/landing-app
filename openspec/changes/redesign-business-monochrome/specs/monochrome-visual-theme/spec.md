## Purpose

Defines the site's visual identity: a calm monochrome palette of black, white and neutral ash greys, light by default with a dark alternative. It suits a business and recruiter audience rather than a developer-template look.

## ADDED Requirements

### Requirement: Monochrome palette
All site UI SHALL use only black, white and neutral (unsaturated) ash greys. This covers backgrounds, text, borders, buttons, links, icons, focus rings, the scroll progress bar, the scrollbar, rating stars and form status messages. The page SHALL NOT use chromatic accent colors (for example violet, blue, green, orange or yellow), colored gradients or colored glow effects.

#### Scenario: No chromatic UI color
- **WHEN** the rendered page's computed text, background, border and fill colors are inspected in either theme
- **THEN** every color is a neutral grey, black or white, with no hue saturation

#### Scenario: No gradients or glows
- **WHEN** the page is viewed in either theme
- **THEN** no section shows a colored gradient background, gradient text or blurred colored glow shapes

### Requirement: Light theme by default, dark available
A first-time visitor with no stored theme preference SHALL see the light (white/ash) theme. The theme toggle SHALL switch to a dark (black/ash) theme and back, and the chosen theme SHALL persist across reloads.

#### Scenario: First visit
- **WHEN** a visitor with no stored theme preference opens the page
- **THEN** the page renders in the light theme

#### Scenario: Toggle to dark
- **WHEN** the visitor activates the theme toggle and reloads the page
- **THEN** the page renders in the dark theme after the reload

### Requirement: Every section supports both themes
Every section SHALL follow the active theme, except that the footer MAY stay black in both themes as a deliberate closing band. No section SHALL keep light text on a dark background while the light theme is active, unless it is that footer band.

#### Scenario: Light theme sections
- **WHEN** the light theme is active and the visitor scrolls from the hero to the contact section
- **THEN** each of those sections renders with a white or light-ash background and dark text

### Requirement: Legible contrast
Body text SHALL have a contrast ratio of at least 4.5:1 against its background in both themes, and large headings at least 3:1. Muted ash text used for metadata SHALL still meet 4.5:1.

#### Scenario: Muted text contrast
- **WHEN** the muted metadata text (dates, roles, footnotes) is measured in either theme
- **THEN** its contrast ratio against its background is at least 4.5:1

### Requirement: Greyscale portrait
The profile photo SHALL be shown in greyscale in both themes.

#### Scenario: Hero photo
- **WHEN** the hero photo is visible
- **THEN** it renders without color
