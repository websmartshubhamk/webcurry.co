# Webcurry.co Redesign (Next.js)

Architecture-first Next.js (app router) build with full-width layout, mega menu, chat/WhatsApp CTAs, popups, sliders, and interactive tools.

## Stack
- Next.js 16 (app router), TypeScript
- Custom styling via CSS variables
- Components: mega menu header, carousel slider, popup offer, ROI calculator tool

## Run
```bash
npm install
npm run dev
```

## Pages
- `/` Home with hero, services, slider, popup, tools preview
- `/services`, `/portfolio`, `/blog`, `/tools`, `/contact`
- Legal placeholders: `/(legal)/privacy`, `/(legal)/terms`
- 404 via `not-found.tsx`

## Notes
- WhatsApp CTA wired via header/footer + buttons.
- Popup auto-appears after a short delay; carousel auto-rotates with controls.
- Contact form is static; integrate with email/CRM as needed.
