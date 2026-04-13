

## Michael Dittmann – Gitarrenbau Website

A single-page, luxury-feel website for a German luthier with i18next translations (DE/EN), modal-based legal pages, and elegant placeholder images.

### Design System
- **Palette**: Warm whites (#FAF9F7, #F5F0EB), charcoal (#1A1A1A), warm gray (#6B6560), accent gold (#C4A97D)
- **Typography**: Serif headings (Playfair Display), clean sans-serif body (Inter)
- **Spacing**: Generous whitespace, large section padding, image-dominant layouts
- **Vibe**: A. Lange & Söhne inspired — minimal, calm, luxurious

### Translation (i18next)
- DE (default) + EN support with language switcher in header
- All text content in translation JSON files
- Simple DE/EN toggle button in navigation

### Sections (single page, anchor navigation)
1. **Hero** — Full-width image placeholder, name, statement, subtle scroll indicator
2. **Philosophie** — Short poetic text about sound, material, intention
3. **Über mich** — Portrait placeholder, warm personal introduction
4. **Bauweise** — Tonewood, construction, sound development in clean cards
5. **Instrumente** — 3 guitar showcases with large image placeholders, descriptions, "Anfrage zu diesem Instrument" buttons
6. **Ablauf** — How to inquire, try guitars, reduce hesitation
7. **Kontakt** — "Termin zur Anspielprobe vereinbaren" CTA, email, phone, simple form
8. **Instagram** — Minimal grid of placeholder posts
9. **Footer** — Name, contact, anchor nav, language switcher, Impressum & Datenschutz modal links

### Legal (Modal Dialogs)
- **Impressum** — German law-compliant structure with placeholders
- **Datenschutz** — GDPR-compliant privacy policy with placeholders
- Both open as clean modal dialogs from footer links

### Key files to create/modify
- `src/i18n/` — i18next config + DE/EN translation files
- `src/pages/Index.tsx` — Complete single-page layout with all 9 sections
- `src/components/` — Header, Hero, Philosophy, About, Construction, Guitars, Process, Contact, Instagram, Footer, LegalModal
- `src/index.css` — Updated design tokens (warm palette)
- Install: `i18next`, `react-i18next`

