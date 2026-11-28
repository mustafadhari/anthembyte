# Avasa Design: website design plan

Two separate proposals for one site, each with its own look:

- **Design A (static):** `public/avasa/index.html`. Light, editorial and colourful, after the Nestora reference. Motion is limited to hover and press feedback.
- **Design B (scroll-animated):** `public/avasa/scroll.html`. Warm mustard and walnut, after the Furnio and Kavian references, with GSAP scroll motion.

Neither is a shop: there is no cart and there are no prices. Every product leads to a quote request.

The first taste-skill draft is kept at `public/avasa/index-v1.html` for comparison.

## The brief, as the client's files give it

- **What it is:** a furniture maker in Chennai that builds chairs, beds, cabinets and wardrobes, tables, sofas and benches to order, plus a cane chair line and a children's range.
- **What is customisable:** "Sizes, fabric & wood color Customizable" appears on every catalogue item.
- **Material we have:**
  - 38 WhatsApp photos: 23 product shots on white, 5 taken on the workshop floor, and 10 of children's furniture.
  - The chairs catalogue (12 designs) and the cane catalogue (15 designs, transparent cut-outs).
  - The logo: a gold A on purple.
- **Contacts (from the catalogue):** S.No. 93, 2C, 200 Feet Radial Road, Old Pallavaram, Chennai 600117 · 99655 66552 · avasadesign9@gmail.com · avasadesign.in
- **Main action:** Request a quote, which opens WhatsApp with the request filled in, or email as a fallback.
- **Not given (left out, never invented):** prices, lead times, wood species, client names, reviews, years in business, hours.

## Design A: static (Nestora reference)

**Look:**
- **Page:** off-white with a faint marble texture (an inline SVG noise filter, no image file).
- **Ink:** deep green-black #17251c.
- **Buttons:** sage #5f7f55.
- **Tile colours:** cyan #62d4ef, orange #f6873a, lime #d6f27e, pink #f8cfd3 and yellow #f4ec6a, set behind the client's products. The products are cut out with rembg and spill over the tile edges.

**Type:** Instrument Serif for the headlines, which have a small product image set inside the line ("Made [chair] to Order"). Manrope for text and for the mixed bold/light uppercase headings ("**BUILT TO** YOUR SIZE, **ONE PIECE AT A** TIME.").

**Motion:** hover and press only. Nav and text links draw their underline, arrows nudge, cards lift, and buttons press. Nothing animates on load or on scroll.

| # | Section | What it says | Pictures |
|---|---|---|---|
| 1 | Hero | "Made [chair] to Order" with "Chairs, beds, wardrobes, tables and sofas, built in Chennai to your size, wood colour and fabric." Get a quote and WhatsApp links. | Honey cane armchair on cyan, oval-back chair on orange |
| 2 | One piece at a time | "BUILT TO YOUR SIZE, ONE PIECE AT A TIME." with the cane catalogue in a corner frame | Spindle settee set; "Cane, your way" tub chair in a pink circle; lime tile with the rocking horse, "Children's furniture, from the same workshop" |
| 3 | Live with | "FURNITURE YOU CAN LIVE WITH" + "Carved [chair] details for every room" | Cabinet, a cane weave tile on orange, the chairs catalogue |
| 4 | Cane | "Cane chairs in 15 designs" | Cane armchair in a yellow circle, "YOUR WOOD, YOUR FABRIC, EVERY ROOM", green armchair on lime, "Upholstered in your fabric" |
| 5 | Pieces | "Pieces from our workshop": four cards (bed, settee, cane console, side table) with an "Enquire" link instead of a price | Cut-outs on white cards; clicking a card pre-selects that piece in the form |
| 6 | Workshop | "Frame, finish [chair] and upholstery, in one workshop" + three steps | Brass-stud close-up on yellow, captain's chair with "Green leather" and "Turned wooden legs" pins |
| 7 | Quote | "Tell us what you want built": form (name, phone, piece, details), sent on WhatsApp or by email | Bench on a pink tile with "FURNITURE MADE IN CHENNAI", address, phone, email |

## Design B (scroll-animated)

Built at `public/avasa/scroll.html`, with its own look:

- **Palette:** a mustard frame around a cream sheet, with walnut for the wordmark and dark cards.
- **Type:** DM Serif Display, chosen in `public/avasa/fonts.html`, with Outfit for text.
- **Layout:** a Furnio-style "AVASA" hero, Kavian-style bento cards, a cane list and a walnut quote card.

The kids and workshop pieces are cut-outs on warm tiles. It uses GSAP 3.15 and ScrollTrigger, copied from the project's `node_modules` into `public/avasa/js/` (no CDN).

| Where | What moves |
|---|---|
| Hero, on load | The AVASA letters rise one by one, the frame opens upward, the chair lifts up into the name, and then the caption, thumbnails and badge arrive. |
| Hero, on scroll (desktop) | Pinned for 75% of a screen. The letters spread apart and fade, the frame widens to the sheet's edges and loses its corners, the chair comes forward, and the caption and badge fade out. |
| Marquee (new) | A strip of "Chairs · Beds · Wardrobes · Tables · Sofas · Cane furniture · Children's furniture" with the logo mark between items. It runs on its own, speeds up with scroll velocity and reverses when you scroll up. |
| Range | The heading fills in word by word. The cards rise in batches and their photos settle from a slight zoom. |
| Cane | The lounge chair drifts against the moving weave (parallax). The list rows slide in. |
| Workshop (desktop) | Pinned for two screens. Each of the three steps lights up in turn and wipes in its own photo (armchair → studs → tub chair), with a progress bar under the steps. |
| Children's (tablet and up) | Pinned while 8 photos run sideways through the mustard band (five more of the client's kids photos were added). On a phone it is a swipe row. |
| Quote | The walnut card grows into place, and the "Let's build / your piece." lines rise out of masks. |
| Footer | "Avasa Design" rises letter by letter. |

- **Phone:** no pinned sections. It keeps the hero entrance, the marquee, the cards, the parallax and the reveals.
- **Reduced motion:** nothing animates and nothing is hidden, and the kids row becomes swipeable.

## What the client should supply

- Room photographs of finished pieces. Both designs currently rely on cut-outs.
- A clean workshop shoot. The current workshop shots are phone snapshots.
- The logo as SVG.
- Wood species, lead times, the delivery area, and any client names they can show.

## Housekeeping before deploying

- `public/avasa/assets/` (the taste-skill kit, about 37 MB) is only used by `index-v1.html`. Delete both together once v1 is no longer needed, along with `fonts.html`.
- Several older images in `public/avasa/img/` are no longer used by A or B (for example `range-*.webp`, `kids-*.webp` and `workshop-tub-chair*.webp`). Prune them before deploying.
- Delete `public/avasa/.taste-skill/` (about 53 MB of checker state and a browser profile). It sits under `public/` and would otherwise be committed and served.
