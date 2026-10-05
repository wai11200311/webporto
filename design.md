# DESIGN.md --- Nawal AI Nurrahman Portfolio

> **Project:** Personal Portfolio + CV Website\
> **Reference:** Lanterne Architectes\
> **Primary goal:** Present Nawal as a multimedia designer/content
> creator through a visual, editorial, project-first portfolio.

------------------------------------------------------------------------

## 1. Design Direction

### Core concept

**"Visual stories, designed with purpose."**

The website should feel like a creative studio portfolio rather than a
conventional online CV. The CV information remains available, but the
main experience is driven by selected work, visual storytelling, and
concise context.

### Reference analysis: Lanterne Architectes

The Lanterne website uses a clear project-first hierarchy:

1.  Minimal navigation
2.  Strong introductory statement
3.  Selected projects presented visually
4.  Expertise/services
5.  About / working philosophy
6.  Contact CTA

Its homepage avoids a dense résumé layout and instead communicates
identity through large imagery, short editorial copy, categories, and
repeated project discovery. citeturn0view0turn0search1

Individual project pages expand this pattern into a case-study format:
project title, category, location/date or metadata, contributors,
descriptive narrative, and a large image sequence.
citeturn0search5turn0search6

### What to adopt

-   Project-first storytelling
-   Large visual media
-   Strong typography and whitespace
-   Editorial composition
-   Short, confident copy
-   Category labels
-   Dedicated case-study pages
-   Clear final CTA

### What to change for Nawal

Do **not** copy Lanterne's architecture, text, branding, or visual
identity literally. Adapt its information architecture to a multimedia
student/creative portfolio.

Nawal's version should be:

-   More energetic and contemporary
-   More digital/creative than architectural
-   More focused on graphic design, video, social media, photography,
    and multimedia
-   Personal rather than studio-oriented
-   Designed around actual project evidence

------------------------------------------------------------------------

# 2. Target Audience

Primary:

-   Recruiters
-   Internship supervisors
-   Creative agencies
-   Social media / content teams
-   Graphic design clients
-   Campus organizations
-   Potential collaborators

Secondary:

-   Lecturers
-   Fellow creatives
-   UMKM/community project partners

### User needs

Visitors should understand within 10--20 seconds:

-   Who Nawal is
-   What Nawal does
-   What skills Nawal has
-   What projects Nawal has worked on
-   What tools Nawal uses
-   How to contact Nawal
-   Where to download/view the CV

------------------------------------------------------------------------

# 3. Brand Positioning

## Personal brand

**NAWAL AI NURRAHMAN**

### Positioning statement

> Multimedia designer and content creator focused on visual design,
> video editing, social media content, and creative digital
> communication.

This is derived from the CV profile, which identifies interests in
graphic design, video editing, social media content, social media
management, branding, and promotional video editing.
fileciteturn0file0L5-L9

### Personality

-   Creative
-   Clean
-   Confident
-   Young
-   Collaborative
-   Detail-oriented
-   Digital
-   Approachable

Avoid:

-   Overly corporate
-   Generic "developer portfolio" aesthetics
-   Excessive gradients
-   Too many UI cards
-   Dense résumé blocks on the homepage

------------------------------------------------------------------------

# 4. Information Architecture

``` text
HOME
│
├── Selected Work
│   ├── Project Detail
│   ├── Project Detail
│   └── Project Detail
│
├── About
│   ├── Profile
│   ├── Education
│   ├── Experience
│   ├── Organization
│   ├── Skills
│   ├── Certifications
│   └── Achievements
│
├── CV
│   └── View / Download CV
│
└── Contact
    ├── Email
    ├── LinkedIn
    └── Portfolio / Social links
```

### Recommended navigation

Desktop:

``` text
NAWAL                    WORK   ABOUT   CV   CONTACT
```

Mobile:

``` text
NAWAL AI N.
                         ☰
```

Navigation should remain minimal, similar to the compact
project-oriented navigation used by Lanterne. citeturn0view0

------------------------------------------------------------------------

# 5. Homepage UX

## Section 01 --- Hero

### Layout

Large editorial hero.

Left:

``` text
NAWAL AI NURRAHMAN

MULTIMEDIA DESIGNER
& CONTENT CREATOR

I turn ideas into visual experiences
through design, video and digital content.

[ VIEW MY WORK ]
```

Right:

-   Portrait/photo
-   Or selected project visual
-   Optional subtle motion

Alternative visual treatment:

Use a full-width image with typography over negative space.

### UX goal

Immediately communicate identity and creative discipline.

### Interaction

-   CTA scrolls to Selected Work
-   Image has subtle hover/motion effect
-   Avoid heavy intro animation

------------------------------------------------------------------------

# 6. Section 02 --- Selected Work

Heading:

``` text
SELECTED
WORK
```

Subheading:

``` text
A selection of visual projects, content,
branding and multimedia work.
```

### Project grid

Use an editorial asymmetric grid instead of equal cards.

Example:

``` text
┌───────────────────────────────┐
│                               │
│        LARGE PROJECT          │
│        DESA WISATA            │
│                               │
└───────────────────────────────┘

┌──────────────┐ ┌───────────────┐
│              │ │               │
│ VIDEO        │ │ BRANDING      │
│ CONTENT      │ │ / DESIGN      │
│              │ │               │
└──────────────┘ └───────────────┘
```

Each item contains:

``` text
CATEGORY
PROJECT TITLE
YEAR
```

No long descriptions on the grid.

### Initial project categories

Based on the CV:

1.  **Desa Wisata Cilanang**
    -   Promotion
    -   Branding
    -   Graphic Design
    -   Documentation Video
2.  **PT Alfahira Mediana Sentosa**
    -   Social Media
    -   Content
    -   Video Editing
    -   Affiliate Content
3.  **Kominfo Politeknik**
    -   Visual Design
    -   Poster
    -   Feed
    -   Story
    -   Campus Branding
4.  **FFPI / Festival Kampus Berdampak**
    -   Video Editing
    -   Event / Campaign Content
5.  **Personal / Academic Multimedia Projects**
    -   Graphic Design
    -   Photography
    -   Video
    -   3D / Multimedia

The CV confirms the Cilanang project involved leading the promotion
team, creating UMKM stickers and banners, and producing/editing
documentation video. fileciteturn0file0L19-L24

------------------------------------------------------------------------

# 7. Project Detail UX

The project page should be the most important reusable component.

## Structure

``` text
[ CATEGORY ]

PROJECT TITLE

Short project statement

[ HERO IMAGE / VIDEO ]
```

Then:

``` text
ROLE              YEAR
TEAM              CATEGORY
TOOLS             OUTPUT
```

Follow with:

``` text
01 — CONTEXT

What was the project?

02 — MY ROLE

What did Nawal contribute?

03 — PROCESS

Sketch → Design → Production → Final

04 — RESULT

What was delivered?

[ IMAGE / VIDEO GALLERY ]
```

### Example: Desa Wisata Cilanang

``` text
DESA WISATA CILANANG

Promotion & Visual Communication

July — August 2025
Role: Promotion Team Lead

I led the promotion team in developing visual
materials to support UMKM branding and tourism
promotion in Cilanang, Bandung Barat.

OUTPUT
• UMKM sticker design
• UMKM banner design
• Documentation video
• Video editing
```

------------------------------------------------------------------------

# 8. About Page

Lanterne uses its About section to explain not only who the team is but
also its working philosophy and values. citeturn0search8

For Nawal, convert this into a personal creative profile.

## Hero

``` text
ABOUT ME

I create visual work that helps ideas
communicate clearly.
```

## Profile

Use the CV profile as the factual foundation:

D4 Teknologi Rekayasa Multimedia Grafis student at Politeknik Haji Anwar
Sanusi, with interests and experience in graphic design, video editing,
social media content, branding, and digital promotion.
fileciteturn0file0L5-L12

## Timeline

``` text
2024 — NOW
D4 TRMG
Politeknik Haji Anwar Sanusi

2025 — 2026
BEM / Kominfo

2025
Desa Wisata Cilanang

2026
PT Alfahira Mediana Sentosa
```

------------------------------------------------------------------------

# 9. Experience Section

Use a vertical editorial timeline.

``` text
2026
PT ALFAHIRA MEDIANA SENTOSA
Intern — Social Media & Content

2025–2026
BEM POLITEKNIK HAJI ANWAR SANUSI
Secretary General

2025–2026
KOMINFO POLITEKNIK
Design Team

2025
DESA WISATA CILANANG
Promotion Team Lead

2021–2022
OSIS SMAS HARAPAN CIPONGKOR
Chairperson
```

The CV supports these roles and responsibilities, including social media
management, TikTok affiliate content, video editing, organization
administration, design publication, and team leadership.
fileciteturn0file0L13-L46

------------------------------------------------------------------------

# 10. Skills UX

Avoid traditional percentage bars such as:

``` text
Photoshop 90%
Canva 95%
```

They are subjective and visually generic.

Instead use grouped capabilities.

## DESIGN

``` text
Graphic Design
Canva
CorelDRAW
Adobe Photoshop
Figma
```

## VIDEO

``` text
Video Editing
CapCut
Adobe Premiere Pro
```

## PHOTOGRAPHY

``` text
Composition
Lighting
DSLR / Smartphone
Photoshop
Lightroom
```

## MULTIMEDIA

``` text
Media Asset Management
File Export
Microsoft Office
Google Workspace
```

These tool groups follow the CV's stated skill categories.
fileciteturn0file0L47-L51

------------------------------------------------------------------------

# 11. Certifications & Achievements

Use compact editorial lists instead of large cards.

### Certifications

Include:

-   Internship Certificate --- PT Alfahira Mediana Sentosa
-   FFPI 2025 --- Editor
-   Festival 2025 --- Kampus Berdampak --- Editor
-   Micro Mentor --- Digital Marketing Research
-   DIGIMON Cakrawala University
-   Micro Mentor --- Smart Financial Planning
-   Micro Mentor --- Cybersecurity Training for MSMEs
-   Micro Mentor --- Mindful Saving

Source: CV certification section. fileciteturn0file0L52-L61

### Achievements

Feature selected achievements prominently:

``` text
01
JUARA 1
Kyorugi Pemula U-48
2021

02
JUARA 1
Individu Pemula Putri
2022

03
JUARA 3
Senior Individu Putri
2023

04
JUARA 2
Senior Putri U46
2024

05
JUARA 1
Ganda Campuran
Pekan Olahraga Mahasiswa
2025
```

These achievements are listed in the CV. fileciteturn0file0L62-L67

------------------------------------------------------------------------

# 12. CV Page

The CV should not simply repeat the homepage.

### Layout

``` text
CURRICULUM VITAE

NAWAL AI NURRAHMAN

Profile
Education
Experience
Projects
Organization
Skills
Certifications
Achievements

[ VIEW CV PDF ]
[ DOWNLOAD CV ]
```

### UX principle

Homepage = **creative proof**

CV page = **professional verification**

------------------------------------------------------------------------

# 13. Contact CTA

Use a strong but simple final section.

``` text
HAVE A PROJECT
IN MIND?

Let's create something meaningful.

[ LET'S TALK ]
```

Contact details from CV:

``` text
Bandung Barat, Indonesia
+62 858-6485-5510
nwal.ainurrahman@gmail.com
```

fileciteturn0file0L2-L4

Add:

-   LinkedIn
-   Portfolio
-   Instagram, if relevant

Do not expose unnecessary personal information beyond what is
intentionally published.

------------------------------------------------------------------------

# 14. Visual System

## Color direction

Recommended base:

``` text
Background       #F5F3EE
Primary Text     #111111
Secondary Text   #6B6B6B
Accent           #D9FF3F
Border           #D8D6CF
```

### Principle

Use mostly neutral colors with **one recognizable accent**.

The accent can be used for:

-   Hover state
-   Small labels
-   CTA
-   Active navigation
-   Project category
-   Micro-interactions

Do not make every section colorful.

------------------------------------------------------------------------

# 15. Typography

Recommended pairing:

### Display

``` text
Space Grotesk
```

or

``` text
DM Sans
```

### Body

``` text
Inter
```

### Typography hierarchy

``` text
H1
72–96px desktop
42–52px mobile

H2
48–64px desktop
34–40px mobile

H3
24–32px

Body
16–18px
Line-height: 1.5–1.7

Metadata
12–14px
Uppercase
Letter spacing: 0.08–0.12em
```

The large editorial heading approach is inspired by Lanterne's use of
concise, prominent statements and section titles. citeturn0view0

------------------------------------------------------------------------

# 16. Grid System

Desktop:

``` text
12-column grid
Max width: 1440px
Side margin: 5vw
Gap: 24px
```

Tablet:

``` text
8 columns
Margin: 32px
Gap: 20px
```

Mobile:

``` text
4 columns
Margin: 20px
Gap: 12–16px
```

Use generous vertical spacing.

Recommended section spacing:

``` text
Desktop: 120–180px
Mobile: 80–100px
```

------------------------------------------------------------------------

# 17. Image Direction

Images should be the primary storytelling element.

### Project cards

Use:

-   4:3
-   3:2
-   16:9
-   Occasional portrait

Avoid putting every image into identical 1:1 cards.

### Project detail

Use a mixture of:

``` text
Full-width hero
Large image
Two-column gallery
Full-width image
Video
Detail crop
```

This creates the editorial rhythm found in Lanterne's project pages,
where imagery and project narrative alternate rather than relying on a
conventional card-heavy layout. citeturn0search5turn0search6

------------------------------------------------------------------------

# 18. Motion / Interaction

Motion should feel premium and subtle.

## Page load

-   Text fade/translate 10--20px
-   Images reveal with clipping
-   Duration: 500--800ms
-   Ease-out

## Hover

Project:

``` text
Image scale: 1.03
Cursor: custom / arrow
Title shifts: 4–8px
```

Navigation:

``` text
Underline / accent reveal
```

## Scroll

Optional:

-   Slight parallax on hero imagery
-   Image reveal
-   Section fade-in

Avoid:

-   Excessive 3D effects
-   Full-screen loaders
-   Long intro animations
-   Constant cursor effects
-   Motion that reduces accessibility

------------------------------------------------------------------------

# 19. Responsive Behavior

## Desktop

Project grid can use asymmetric composition.

## Tablet

Reduce image scale and typography.

## Mobile

Everything becomes a vertical editorial sequence:

``` text
Hero
↓
Selected Work
↓
Project
↓
Project
↓
Project
↓
About
↓
Experience
↓
Skills
↓
CV
↓
Contact
```

Navigation becomes hamburger/menu.

Project pages prioritize:

``` text
Title
Hero
Role / Year
Description
Gallery
Process
Result
```

------------------------------------------------------------------------

# 20. Accessibility

Required:

-   Semantic HTML
-   Proper heading hierarchy
-   Alt text for project images
-   Keyboard navigation
-   Visible focus states
-   Sufficient text contrast
-   `prefers-reduced-motion`
-   Buttons must have accessible labels
-   Do not communicate information through color alone

------------------------------------------------------------------------

# 21. SEO Structure

## Homepage

``` html
<title>Nawal Ai Nurrahman — Multimedia Designer & Content Creator</title>

<meta
  name="description"
  content="Portfolio of Nawal Ai Nurrahman, a multimedia designer and content creator focused on graphic design, video editing, social media content and digital communication."
/>
```

## Project pages

``` text
/[work]/desa-wisata-cilanang
/[work]/alfahira-social-media
/[work]/kominfo-design
```

Use descriptive page titles and Open Graph images for sharing.

------------------------------------------------------------------------

# 22. Recommended URL Structure

``` text
/
 /work
 /work/desa-wisata-cilanang
 /work/alfahira-social-media
 /work/kominfo-design
 /work/ffpi-kampus-berdampak
 /about
 /cv
 /contact
```

------------------------------------------------------------------------

# 23. Component Architecture

Recommended reusable components:

``` text
App
├── Navbar
├── PageTransition
├── Hero
├── SectionHeader
├── ProjectGrid
│   └── ProjectCard
├── ProjectMeta
├── ProjectGallery
├── ProjectProcess
├── ExperienceTimeline
├── SkillsList
├── CertificationList
├── AchievementList
├── CVDownload
├── ContactCTA
└── Footer
```

### Data-driven project model

``` ts
type Project = {
  slug: string
  title: string
  category: string[]
  year: string
  role: string
  description: string
  thumbnail: string
  heroImage: string
  gallery: string[]
  tools: string[]
  responsibilities: string[]
  outcome?: string
}
```

This allows new portfolio projects to be added without rebuilding the
page structure.

------------------------------------------------------------------------

# 24. Suggested Tech Stack

For a modern implementation:

``` text
Framework: Next.js
Language: TypeScript
Styling: Tailwind CSS
Animation: Framer Motion
Icons: Lucide
Fonts: Google Fonts / self-hosted
Images: Next/Image
Deployment: Vercel
```

If the goal is simpler:

``` text
HTML
CSS
JavaScript
GSAP
```

The architecture should remain content-driven regardless of the
implementation stack.

------------------------------------------------------------------------

# 25. Content Model

Create project content separately from UI.

``` text
content/
├── projects/
│   ├── cilanang.md
│   ├── alfahira.md
│   ├── kominfo.md
│   └── ffpi.md
│
├── about.md
└── cv.md
```

This makes the portfolio easier to maintain.

------------------------------------------------------------------------

# 26. First Portfolio Projects

Prioritize projects that demonstrate employable creative skills.

## Priority 01

### Desa Wisata Cilanang

Why:

-   Leadership
-   Branding
-   Graphic design
-   UMKM communication
-   Video documentation

## Priority 02

### PT Alfahira Mediana Sentosa

Why:

-   Real professional experience
-   Social media
-   TikTok
-   Affiliate content
-   Advertising video
-   Fundraising content

The CV records this as an internship in Social Media & Content from
August--September 2026. fileciteturn0file0L13-L18

## Priority 03

### Kominfo Politeknik

Why:

-   Consistent design work
-   Campus branding
-   Publication design
-   Collaboration

## Priority 04

### FFPI / Kampus Berdampak

Why:

-   Video editing
-   Campaign/event communication

## Priority 05

### Personal / Academic Multimedia

Use this section to demonstrate:

-   Photography
-   Video
-   3D
-   Motion
-   Experimental design

------------------------------------------------------------------------

# 27. UX Flow

``` text
LANDING
   ↓
IDENTITY
   ↓
SELECTED WORK
   ↓
OPEN PROJECT
   ↓
CASE STUDY
   ↓
OTHER PROJECTS
   ↓
ABOUT
   ↓
EXPERIENCE / SKILLS
   ↓
CV
   ↓
CONTACT
```

The most important conversion path is:

``` text
Hero
→ Work
→ Case Study
→ CV
→ Contact
```

------------------------------------------------------------------------

# 28. Homepage Wireframe

``` text
┌──────────────────────────────────────────────┐
│ NAWAL                 WORK ABOUT CV CONTACT │
├──────────────────────────────────────────────┤
│                                              │
│ MULTIMEDIA                                  │
│ DESIGNER                                    │
│ & CONTENT CREATOR             [PHOTO]       │
│                                              │
│ I turn ideas into visual experiences...     │
│                                              │
│ [ VIEW MY WORK ]                             │
│                                              │
├──────────────────────────────────────────────┤
│                                              │
│ SELECTED                                     │
│ WORK                                         │
│                                              │
│ ┌────────────────────────────────────────┐   │
│ │                                        │   │
│ │       DESA WISATA CILANANG            │   │
│ │                                        │   │
│ └────────────────────────────────────────┘   │
│                                              │
│ ┌──────────────────┐ ┌───────────────────┐   │
│ │ ALFAHIRA         │ │ KOMINFO           │   │
│ │ SOCIAL CONTENT   │ │ VISUAL DESIGN     │   │
│ └──────────────────┘ └───────────────────┘   │
│                                              │
├──────────────────────────────────────────────┤
│ ABOUT ME                                     │
│                                              │
│ Short personal statement + portrait          │
│                                              │
├──────────────────────────────────────────────┤
│ EXPERIENCE                                   │
│                                              │
│ 2026  Alfahira                               │
│ 2025  Cilanang                               │
│ 2025  Kominfo                                │
│ 2025  BEM                                    │
│                                              │
├──────────────────────────────────────────────┤
│ SKILLS                                       │
│ Design / Video / Photography / Multimedia    │
├──────────────────────────────────────────────┤
│ ACHIEVEMENTS                                 │
│ 01  02  03  04  05                           │
├──────────────────────────────────────────────┤
│                                              │
│ HAVE A PROJECT IN MIND?                      │
│                                              │
│ [ LET'S TALK ]                               │
│                                              │
└──────────────────────────────────────────────┘
```

------------------------------------------------------------------------

# 29. Design Principles

### 01 --- Show, don't only tell

Portfolio work should carry more visual weight than résumé text.

### 02 --- Every project needs context

Do not show an image without explaining:

-   Problem
-   Role
-   Process
-   Output

### 03 --- Keep the interface quiet

The UI should frame the work, not compete with it.

### 04 --- Make the CV accessible

Recruiters should reach the CV within one click.

### 05 --- Make the portfolio memorable

Use a distinctive accent color, typography, editorial grid, and subtle
interaction system.

### 06 --- Prioritize evidence

Whenever possible, show actual:

-   Design output
-   Video
-   Social media content
-   Photography
-   Before/after
-   Process
-   Final result

------------------------------------------------------------------------

# 30. Final Creative Direction

The final website should feel like:

> **A digital creative studio built around one person.**

Not:

> "A student CV placed on a website."

The Lanterne reference is strongest as an **information architecture and
editorial storytelling reference**: identity → selected work → expertise
→ about → contact. citeturn0view0turn0search8

For Nawal, the final experience becomes:

``` text
PERSON
    ↓
WORK
    ↓
PROCESS
    ↓
SKILLS
    ↓
EXPERIENCE
    ↓
CREDIBILITY
    ↓
CONTACT
```

The website should communicate that Nawal is not only someone who knows
design software, but someone who can **turn an idea, brief, or
communication problem into a finished visual output.**
