## Purpose

Makes the home page read one idea at a time: each viewport presents a single message in large type, revealed by scroll-driven motion, without losing content for visitors on phones or with reduced motion.

## ADDED Requirements

### Requirement: One idea per viewport
The home page SHALL be composed of scenes, each at least the height of the viewport on screens `lg` and wider, and each presenting a single idea under one heading. While a scene's main content is in view, no other scene's heading SHALL be visible in the same viewport at a 1440×900 window. The scene order SHALL be: hero, proof statistics, countries, industries, "What I Do", work intro, the six case studies, "Why teams work with me", the three testimonials, the closing call to action, then the footer.

#### Scenario: Scrolling the page at desktop size
- **WHEN** a visitor at a 1440×900 window scrolls so any scene's heading sits in the middle of the screen
- **THEN** that is the only scene heading visible on screen

#### Scenario: Hero holds a single message
- **WHEN** the page first loads
- **THEN** the first viewport shows only the navigation, the headline, the supporting line and the portrait, with no statistics, industry list or country list

### Requirement: Large type scale
Scene headings SHALL be markedly larger than before: at least 3rem on phones and at least 4.5rem at `lg` and wider, set in the display serif. The hero headline SHALL be the largest text on the page. Body text in scenes SHALL be at least 1.125rem.

#### Scenario: Heading size at desktop
- **WHEN** a scene heading is inspected at a 1440px-wide window
- **THEN** its computed font size is at least 72px

### Requirement: Sequential statements
The three highlighted statistics and the five "Why teams work with me" values SHALL each be presented one item at a time, each item filling the screen in turn as the visitor scrolls down, in their existing order. Every item SHALL be reachable by scrolling alone.

#### Scenario: Stepping through the statistics
- **WHEN** a visitor scrolls steadily through the proof scene
- **THEN** "16+", then "4M+", then "40+" each fill the screen in turn, never two at full visibility together

### Requirement: Outcome areas on a track
The five "What I Do" outcome areas SHALL be shown as large cards in a single horizontal row. At `lg` and wider, scrolling down SHALL move the row horizontally until the last card is shown. Below `lg`, the row SHALL be swipeable horizontally with each card snapping into place, without the page itself scrolling horizontally.

#### Scenario: Desktop track
- **WHEN** a visitor at 1440px scrolls down through the "What I Do" scene
- **THEN** the cards slide left until the fifth card is fully visible, then the page continues down

#### Scenario: Phone carousel
- **WHEN** a visitor at 375px swipes the "What I Do" cards
- **THEN** the cards move one at a time and the page has no horizontal scrollbar

### Requirement: Focused case studies
Each case study SHALL occupy its own scene showing the title, when/where/role, the problem and the outcome. The "What I delivered" list SHALL be behind a disclosure labeled "See what I delivered" that the visitor can open and close by keyboard or pointer. Case study copy, figures, tech lines and element ids SHALL be unchanged.

#### Scenario: Opening the delivery list
- **WHEN** a visitor activates "See what I delivered" on a case study
- **THEN** the full delivered list for that case study is shown, and activating it again hides it

#### Scenario: Deep link still works
- **WHEN** a visitor opens `/#car-rental`
- **THEN** the page scrolls to the car-rental case study

### Requirement: One testimonial per scene
Each of the three testimonials SHALL occupy its own scene in large serif type, with wording unchanged.

#### Scenario: Reading a testimonial
- **WHEN** a visitor scrolls to a testimonial at 1440×900
- **THEN** only that quote is visible

### Requirement: Scroll-revealed motion
Scene content SHALL fade and rise into place as it enters the viewport, and the hero SHALL ease out (fade and scale down slightly) as the visitor scrolls past it. Motion SHALL animate only opacity and transform, and SHALL NOT use color, gradients or glows.

#### Scenario: Content entering view
- **WHEN** a scene scrolls into view for the first time
- **THEN** its heading and text animate from slightly lower and transparent to their resting position

### Requirement: Reduced motion and no-JS fallback
When the visitor's system requests reduced motion, the page SHALL show all content without scroll-linked animation: pinned sequences become a plain vertical list of their items and the horizontal track becomes the swipeable row. Before client JavaScript runs, all scene text SHALL be present in the HTML.

#### Scenario: Reduced motion
- **WHEN** a visitor with "reduce motion" enabled scrolls the page
- **THEN** every statistic, value, outcome area, case study and testimonial is readable without any animation playing

### Requirement: Themes and phone width
All scenes SHALL follow the light and dark themes with the monochrome palette, alternating between the white and ash background of the active theme instead of using divider lines. At 375px wide the page SHALL NOT scroll horizontally.

#### Scenario: Dark theme
- **WHEN** a visitor switches to the dark theme and scrolls the page
- **THEN** every scene uses the dark background pair and light ink text
