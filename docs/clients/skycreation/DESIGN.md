---
name: Sky Creation
description: Founder-led interior design and execution studio, Navi Mumbai and Thane. Finished rooms lead, the name crosses into the photograph.
colors:
  bg: "#f1f1ef"
  bg-2: "#e7e7e4"
  paper: "#fbfbfa"
  white: "#ffffff"
  ink: "#0d0d0d"
  ink-2: "#4b4b48"
  ink-3: "#61615d"
  band: "#454543"
  band-ink: "#d9d9d5"
  line: "rgba(13,13,13,.12)"
  error: "#b3261e"
typography:
  display:
    fontFamily: "Archivo, General Sans, system-ui, sans-serif"
    fontSize: "clamp(4rem, 11.6vw, 14rem)"
    fontWeight: 800
    lineHeight: 0.78
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 100"
  headline:
    fontFamily: "Archivo, General Sans, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 4.6vw, 3.8rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 78"
  title:
    fontFamily: "Archivo, General Sans, system-ui, sans-serif"
    fontSize: "clamp(1.2rem, 1.7vw, 1.45rem)"
    fontWeight: 600
    lineHeight: 1.15
  numeral:
    fontFamily: "Archivo, General Sans, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.2vw, 2.7rem)"
    fontWeight: 600
    lineHeight: 1
  body:
    fontFamily: "General Sans, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label-action:
    fontFamily: "Archivo, General Sans, system-ui, sans-serif"
    fontSize: "0.88rem"
    fontWeight: 500
    letterSpacing: "0.06em"
  label:
    fontFamily: "General Sans, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 400
    letterSpacing: "0.1em"
rounded:
  frame: "14px"
  control: "8px"
  pill: "30px"
  round: "50%"
spacing:
  gutter: "clamp(16px, 4vw, 64px)"
  section: "clamp(88px, 11vw, 150px)"
  grid-gap: "clamp(14px, 2vw, 28px)"
  row: "18px"
  row-lg: "24px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.label-action}"
    rounded: "{rounded.control}"
    padding: "8px 8px 8px 20px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "#262624"
  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.label-action}"
    rounded: "{rounded.control}"
    padding: "8px 8px 8px 20px"
    height: "48px"
  button-light-hover:
    backgroundColor: "{colors.paper}"
  input-field:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "13px 14px"
  input-field-focus:
    backgroundColor: "{colors.white}"
  photo-frame:
    backgroundColor: "{colors.bg-2}"
    rounded: "{rounded.frame}"
  tag-pill:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "5px 10px"
  review-card:
    backgroundColor: "rgba(255,255,255,.06)"
    textColor: "{colors.bg}"
    rounded: "{rounded.frame}"
    padding: "clamp(22px, 2.4vw, 32px)"
  lead-form:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.frame}"
    padding: "clamp(22px, 3vw, 40px)"
---

# Design System: Sky Creation

## Overview

**Creative North Star: "The Studio Portfolio"**

Sky Creation reads like an architecture studio's portfolio: a quiet light-gray ground, very large black uppercase type, and finished rooms shown big inside softly rounded frames. The world follows one source, the user-pinned reference at `/Users/mustafadhariwala/demo2/.impeccable/refs/user-reference.png` (an architecture-studio landing page: light gray, a bold black wordmark crossing the hero image, large rounded photos, an angled dark band). The one adaptation: interiors have no cutout silhouette, so the reference's cut-out building becomes a rounded photo frame, and the wordmark flips from black to white where it passes over the photograph.

The photographs carry the page. Everything else (gray neutrals, one black, thin hairlines) steps back so the rooms read as the proof. Density is generous: sections breathe on 88 to 150px of vertical padding, lists are hairline-ruled rather than boxed, and there is no accent hue at all. Motion is slow and continuous, tied to scroll, never a show of its own.

Two earlier directions (a shop-drawing concept and a darkroom concept) were rejected by the user as gimmicky. This brand does not wear concept costumes.

**Key Characteristics:**
- Achromatic palette: warm-neutral grays plus one near-black; no accent color.
- Archivo uppercase display at two widths (normal for the wordmark, trimmed to 78 for section heads) over General Sans body.
- Large photos in 14px rounded frames; photos dominate every section they appear in.
- An angled dark gray band is the one geometric gesture.
- Slow, scroll-scrubbed motion; content is visible without JavaScript.

## Colors

A restrained, achromatic system: light warm-gray ground, near-black ink, and one mid-dark gray band. Color comes from the photographs, never from the UI.

### Primary
- **Studio Black** (ink): all display and headline type, primary buttons, focus outlines, the process progress bar, text selection, and the footer ground. It is the only "accent"; its weight does the work a brand color would.

### Neutral
- **Gallery Gray** (bg): the page ground and the solid nav/mobile bar tint. Also the resting fill of form inputs, so fields read as recessed into a white form card.
- **Frame Gray** (bg-2): the fill behind photo frames while images load.
- **Paper** (paper): the process section ground and the light-button hover; one step lighter than the page to separate a section without a border.
- **White** (white): button-arrow discs, light buttons, tag pills on photos, the lead form card, focused inputs, and the wordmark where it crosses the photograph.
- **Graphite** (ink-2): body copy, nav links at rest, secondary paragraphs. 7.7:1 on Gallery Gray.
- **Stone** (ink-3): metadata (locations in the project list, step numbers, contact-row labels, "Call us"). Darkened to #61615d so it passes AA (above 4.5:1) on both Paper and Gallery Gray.
- **Band Slate** (band): the angled band under the hero and the reviews section ground.
- **Band Mist** (band-ink): body text on Band Slate (6.8:1).
- **Hairline** (line): every rule, list divider, step-grid border, pill outline and the nav's solid-state underline.

### Status
- **Error Red** (error): invalid field border and inline error message in the form. Used for nothing else.

### Named Rules
**The Rooms Bring The Color Rule.** The interface stays achromatic. Wood, marble and lighting in the photographs are the only color on the page; never add a UI accent hue.

**The Three Dark Grounds Rule.** Dark surfaces appear in exactly three roles: the angled band, the reviews section (both Band Slate), and the footer (Studio Black). The page ground is always Gallery Gray; there is no dark mode.

## Typography

**Display Font:** Archivo variable, self-hosted (`fonts/Archivo-var.woff2`, weight 100 to 900, width 62 to 125%), falling back to General Sans then system-ui
**Body Font:** General Sans (Fontshare, 400/500/600), falling back to system-ui

**Character:** A heavy grotesque at studio scale against a soft, humanist-leaning body sans. Archivo is set uppercase and tight for anything that names; General Sans carries everything that explains.

### Hierarchy
- **Display** (800, width 100, uppercase, clamp(4rem, 11.6vw, 14rem), line-height 0.78): the "SKY CREATION" wordmark only, across the hero baseline and repeated at slightly smaller size (clamp(3rem, 10.6vw, 13rem), line-height 0.8) as the footer sign-off. Never wraps on desktop.
- **Headline** (800, width 78, uppercase, clamp(2.1rem, 4.6vw, 3.8rem), line-height 0.98, balanced wrap): every section head. Short, declarative, often broken into stacked lines.
- **Title** (600, clamp(1.2rem, 1.7vw, 1.45rem), line-height 1.15, sentence case): step names, service names, photo captions, form heading.
- **Numeral** (600, clamp(2rem, 3.2vw, 2.7rem), line-height 1): the three About stats.
- **Body** (400, 16px, line-height 1.6): paragraphs, capped at 40 to 46ch in intros.
- **Action label** (Archivo 500, 0.85 to 0.88rem, 0.06em tracking, uppercase): buttons, text links, mobile bar actions.
- **Label** (General Sans, 0.72 to 0.75rem, 0.1em tracking, uppercase): category pills, placeholder tags, contact-row labels, footer column heads.

### Named Rules
**The Two Widths Rule.** Archivo's width axis has two settings: 100 for the wordmark, 78 for section heads. Nothing narrower; the 78 cut is a trim, not a compressed poster face.

**The Uppercase Is For Naming Rule.** Uppercase belongs to the wordmark, section heads, buttons and small category labels. Titles, body and quotes stay sentence case.

## Layout

A full-bleed page held by one fluid gutter (clamp(16px, 4vw, 64px)) on both sides. Sections are separated by large vertical padding (clamp(88px, 11vw, 150px)) and by ground changes (Gallery Gray, Paper, Band Slate), not by boxes.

Grids are asymmetric two-column splits (roughly 0.8fr / 1.2fr or 0.9fr / 1.1fr: heading or photo left, ruled list right) and a 12-column photo grid with alternating 7/5 and 5/7 spans, closing on a 6/6 pair. Grid gaps are clamp(14px, 2vw, 28px). Lists (projects, services, contact routes, the 8 steps) are hairline-ruled rows with 18 to 24px vertical padding.

The hero is a composed stage: a narrow intro (max 290px) top-left, the photo spanning from 34vw to the right gutter, and the wordmark across the bottom running behind and through the photo.

Responsive: at 1100px the nav links collapse and the stats move under the collage. At 820px everything stacks to one column, the hero becomes intro, photo (4:4.4), then the wordmark overlapping the photo's bottom edge, the band's angle softens (12% instead of 30%), the process grid drops to two columns, and a fixed bottom bar with Call and WhatsApp appears so every mobile viewport keeps a way to reach the studio. Below 560px the form goes single-column.

## Elevation & Depth

Flat by default. Depth comes from ground changes, overlap, and photographs, not from shadows. Shadows exist only as soft, low-opacity, downward-offset ambient falloff, and only on a few elements that physically sit on top of something else.

### Shadow Vocabulary
- **Overlap shadow** (`box-shadow: 0 20px 40px -24px rgba(0,0,0,.5)`): the small inset frame that overlaps the large photo in the About collage.
- **Card lift** (`box-shadow: 0 30px 60px -40px rgba(0,0,0,.35)`): the white lead form floating on Gallery Gray.
- **Disc lift** (`box-shadow: 0 2px 8px rgba(0,0,0,.08)`): the overlapping white disc in the nav call control.
- **Hairline edge** (`box-shadow: inset 0 0 0 1px var(--line)` / `0 1px 0 var(--line)`): light buttons, the solid nav and mobile bar edges.

### Named Rules
**The Only When Overlapping Rule.** A shadow is allowed only where one surface physically overlaps another. Section blocks, list rows and photo tiles in a grid stay flat.

## Shapes

Two radii carry the system: 14px for anything that frames content (photos, the hero frame, review cards, the form card) and 8px for anything you operate (buttons, inputs, mobile bar actions). Pills (30px) hold category tags; circles hold the button arrows, nav call discs, review initials and social icons.

The one hard-edged geometry is the angled band: a parallelogram clip (top edge falling 30% to the right, bottom edge falling 30% from the left on desktop, 12% on mobile) that cuts up into the hero by 34px. A thick pale ring sits behind the About collage, echoing the reference's oversized background glyph.

**The Frame Not Box Rule.** Photos are always large and always in a 14px frame with the image filling it edge to edge (object-fit cover). No borders, mats or small thumbnails.

## Components

### Buttons
Solid, quiet, with one moving part: the arrow disc.
- **Shape:** gently rounded rectangle (8px), minimum height 48px, asymmetric padding (8px 8px 8px 20px) so the arrow disc sits flush at the right.
- **Primary:** Studio Black fill, white uppercase action label, a 32px white circle at the end holding an ink arrow.
- **Hover / Focus:** fill lifts to #262624 and the arrow disc rotates -45 degrees over 0.45s on the house ease; focus is a 2px ink outline at 3px offset.
- **Light:** white fill with a 1px inset hairline, the disc inverted to ink; hovers to Paper.
- **Text link:** uppercase action label with a 1.5px ink underline and a small diagonal arrow that nudges up-right on hover.

### Chips
- **Style:** pill (30px), Label type. On photos: white fill, ink text. In lists: transparent with a hairline outline and Graphite text.
- **Use:** project category only (Residential, Commercial), and the temporary "Placeholder photo" tag.

### Cards / Containers
- **Corner Style:** 14px.
- **Review card:** 6% white wash over Band Slate, text in Gallery Gray, quote at 1.05 to 1.18rem, cite with a 40px initial disc. Min height 250px on desktop.
- **Lead form:** white card with the Card lift shadow, padding clamp(22px, 3vw, 40px).
- **Photo tile:** flat, Frame Gray behind the image, a 45% bottom gradient to rgba(0,0,0,.55) under a white caption (title left, category pill right).

### Inputs / Fields
- **Style:** Gallery Gray fill inside the white form, transparent 1px border, 8px radius, 13px 14px padding, label above in 0.82rem 500.
- **Focus:** border turns Studio Black and fill turns white.
- **Error:** Error Red border and a plain-language message below the field.

### Navigation
- **Style:** fixed, transparent over the hero; after 40px of scroll it becomes Gallery Gray at 88% with a 10px backdrop blur and a hairline underline. Logo plus "SKY CREATION" in Archivo 800 at left, links in 0.92rem Graphite turning ink on hover/current, a call control at right (two overlapping 36px discs plus "Call us" and the number).
- **Mobile:** links hide at 1100px, the call control at 820px; the fixed bottom bar (Call light, WhatsApp dark) takes over.

### Hero Wordmark (signature)
The "SKY CREATION" wordmark sits across the hero baseline in black on gray, and a white copy, clipped to the photo frame, aligns exactly over it, so the name appears to cross from the page into the room. The white copy carries a soft 30px text-shadow at 18% black for legibility on bright photos. On load: the image settles from 1.18 scale over 2.6s while the frame opens from an inset clip over 2.2s, then the words rise in; on scroll the photo drifts down and the wordmark slides 6% left.

### Process Steps (signature)
Eight steps in a 4-column hairline grid (2 columns on mobile), each with a small Stone numeral, a Title and a short line. A 2px ink bar draws across the top of each step in sequence as the grid scrolls through.

### Motion
One house ease (`cubic-bezier(.16,1,.3,1)`) for state transitions (0.2 to 0.45s). Scroll motion is GSAP ScrollTrigger with scrub 1.2 to 1.6: photo frames open from `inset(14% 8% 14% 8% round 14px)` while the image settles from 1.18 to 1 scale; parallax of plus or minus 6% on marked images; the band's project marquee advances with scroll; stats count up once over 2s; the footer wordmark slides in. Content is visible by default: no opacity-0 entrances on scroll, and everything is static under reduced motion or without JavaScript.

## Do's and Don'ts

### Do:
- **Do** let a real, finished room fill the largest area of any section it appears in, framed at 14px.
- **Do** keep the UI achromatic: Gallery Gray, Paper, Band Slate, Studio Black and white only.
- **Do** set section heads in Archivo 800 uppercase at width 78, and reserve width 100 at display size for the wordmark.
- **Do** separate content with hairlines (rgba(13,13,13,.12)) and ground changes rather than boxes.
- **Do** keep motion slow and scrubbed to scroll (scrub 1.2 to 1.6, one ~2.5s hero entrance) and leave all content visible by default.
- **Do** keep a call or WhatsApp action reachable in every viewport (the fixed mobile bar below 820px).
- **Do** label any stock or missing image visibly as a placeholder until the client's photo replaces it.

### Don't:
- **Don't** dress the brand in a concept costume (shop drawings, blueprint lines, darkroom or film devices); both were rejected by the user as gimmicky.
- **Don't** use a warm amber accent or a dark, techy palette as the page ground.
- **Don't** use compressed poster faces or marker/handwritten display faces; Archivo at width 78 is the narrowest the type goes.
- **Don't** show photos small or boxed (thumbnails, bordered mats, tiny grids); rooms are shown large.
- **Don't** fade content in from opacity 0 on scroll.
- **Don't** add a shadow to anything that is not overlapping another surface.
- **Don't** add small uppercase eyebrow labels above section heads; the reference has them, this build does not, and section heads stand alone.
