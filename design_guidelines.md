# Design Guidelines: Full-Stack Developer Portfolio

## Design Approach

**Selected Approach:** Reference-Based with System Foundations
Drawing inspiration from Linear's sophisticated typography and Vercel's refined minimalism, combined with Stripe's restrained elegance. This creates a portfolio that demonstrates technical excellence through design execution.

**Core Principles:**
- Precision over decoration
- Hierarchy through typography and spacing
- Content-first with strategic visual moments
- Professional sophistication balanced with personality

## Typography System

**Font Families (Google Fonts):**
- Primary: 'Inter' (400, 500, 600, 700) - All UI text, body copy
- Display: 'Space Grotesk' (500, 700) - Hero headlines, section titles

**Hierarchy:**
- Hero Headline: 4xl to 6xl (64-72px desktop), bold, Space Grotesk
- Section Titles: 3xl to 4xl (36-48px), medium weight, Space Grotesk
- Subsection Titles: xl to 2xl (24-30px), semibold, Inter
- Body Text: base to lg (16-18px), regular, Inter
- Labels/Metadata: sm (14px), medium, Inter
- Code Snippets: 'JetBrains Mono' (monospace) for tech tags

## Layout System

**Spacing Scale:** Tailwind units 2, 4, 6, 8, 12, 16, 20, 24, 32
- Micro spacing (internal components): 2, 4, 6
- Component spacing: 8, 12, 16
- Section spacing: 20, 24, 32

**Container Strategy:**
- Full-width sections with inner max-w-7xl mx-auto px-6
- Content max-width: max-w-6xl for text-heavy sections
- Reading width: max-w-3xl for About Me bio

**Grid Systems:**
- Projects: 2-column grid (md:grid-cols-2) with gap-8
- Skills: 3-4 column grid (md:grid-cols-3 lg:grid-cols-4) with gap-6
- Responsive: All grids collapse to single column on mobile

## Page Structure & Components

### Navigation Header
- Fixed/sticky navigation with backdrop blur effect
- Horizontal layout with logo/name left, nav links right
- Height: h-16 to h-20
- Nav links with subtle underline on hover
- Include "Resume/CV" download button with primary styling
- Social icons (GitHub, LinkedIn, Email) in header on desktop

### Hero Section
- Height: 80-90vh for impactful entry
- Two-column layout (lg:grid-cols-2)
- Left: Large headline introducing role and specialty, subheading with value proposition, primary CTA ("View Projects") and secondary CTA ("Contact Me")
- Right: Professional headshot or abstract geometric illustration
- Add subtle "Scroll to explore" indicator at bottom

### About Me Section
- Vertical spacing: py-20 to py-24
- Grid layout: 2-column (lg:grid-cols-3) with 2:1 ratio
- Left (2 cols): Professional bio (2-3 paragraphs), current role/availability status, personal interests/approach statement
- Right (1 col): Professional photo, key stats cards (Years Experience, Projects Completed, Technologies Mastered)
- Include downloadable resume CTA

### Projects Section
- Vertical spacing: py-24 to py-32
- Section title with subtitle explaining project selection
- Featured project (first): Full-width card with large preview image, detailed description, prominent tech stack display, dual CTAs (Live Demo + GitHub)
- Additional projects: 2-column grid of project cards
- Each card: Project thumbnail/screenshot, title and brief description, tech stack badges, hover state revealing links
- Minimum 4-6 project cards total

### Skills Section  
- Vertical spacing: py-20 to py-24
- Categorized skill display: Frontend, Backend, Tools & DevOps, Other
- Each category in card format
- Skills displayed as pills/badges with technology names
- Proficiency indicated through visual weight (not bars)
- Icon integration from Heroicons or similar for categories

### Contact Section
- Vertical spacing: py-24 to py-32
- Two-column layout (lg:grid-cols-2) with gap-12
- Left: Contact form with Name, Email, Subject, Message fields, primary submit button, form validation states
- Right: Contact information display (email, location, availability), social media links with icons, "Open to opportunities" statement, estimated response time indicator
- Add subtle encouraging copy about collaboration

### Footer
- Multi-column layout (md:grid-cols-3)
- Column 1: Brief tagline/mission, social media icons
- Column 2: Quick navigation links
- Column 3: Newsletter signup (optional engagement tool), copyright and credits
- Vertical padding: py-12

## Component Library

**Buttons:**
- Primary: Prominent size (px-6 py-3), medium font weight, rounded-lg
- Secondary: Outlined variant, same padding
- Text links: Inline with subtle underline animation
- All buttons: transition-all duration-200 for smooth interactions

**Cards:**
- Project Cards: Rounded-2xl, subtle border, padding p-6, hover transform scale-[1.02]
- Skill Cards: Rounded-xl, padding p-6, organized content hierarchy
- Stat Cards: Compact, rounded-lg, p-4, centered content

**Forms:**
- Input fields: Rounded-lg, px-4 py-3, border with focus states
- Textarea: Minimum h-32 for message field
- Labels: Above inputs, text-sm font-medium, mb-2
- Error states: Border emphasis with error text below
- Focus rings: Prominent but tasteful focus indicators

**Badges/Pills:**
- Tech stack tags: Rounded-full px-3 py-1, text-sm
- Grouped with gap-2 flex-wrap
- Consistent across project cards and skills section

**Icons:**
- Library: Heroicons (outline for navigation, solid for emphasis)
- Size: w-5 h-5 for inline, w-6 h-6 for standalone
- Social icons: w-6 h-6, subtle hover state

## Images

**Hero Section:**
- Professional headshot or abstract developer-themed illustration
- Dimensions: 600x600px minimum, high quality
- Treatment: Subtle rounded corners (rounded-2xl) or circular for headshot

**About Me:**
- Secondary professional photo, candid or workspace setting
- Dimensions: 400x500px portrait orientation

**Project Thumbnails:**
- Screenshots of live projects or mockups
- Dimensions: 800x500px (16:10 aspect ratio)
- Each project requires unique, representative image
- Ensure images show actual project interfaces

**Placement Strategy:**
- Images enhance content, never decorative filler
- All images have proper aspect ratios maintained
- Lazy loading for performance

## Animations

**Strategic Use Only:**
- Page scroll: Subtle fade-in on section entry (intersection observer)
- Project cards: Gentle hover elevation (transform translateY(-4px))
- Navigation: Smooth underline slide on link hover
- Form: Input focus state transitions
- NO scroll-triggered complex animations
- NO parallax effects
- NO loading spinners unless truly necessary

## Accessibility Standards

- All interactive elements: Minimum 44x44px touch targets
- Form inputs: Clear labels, ARIA attributes, error announcements
- Keyboard navigation: Visible focus states throughout, logical tab order
- Color contrast: WCAG AA minimum for all text
- Alt text: Descriptive for all images, especially project screenshots
- Semantic HTML: Proper heading hierarchy (h1 → h2 → h3)

## Responsive Breakpoints

- Mobile: Base styles (< 768px) - Single column, stacked sections
- Tablet: md (768px) - 2 column grids begin
- Desktop: lg (1024px) - Full 3-4 column layouts, sidebar nav options
- Large: xl (1280px) - Maximum container widths activate

This portfolio demonstrates technical excellence through restrained, sophisticated design that puts work and skills forward while maintaining modern aesthetics and professional polish.