# Shilling & Smith, P.C. — Website

A responsive static website for Shilling & Smith, P.C., Attorneys at Law (Carmel, NY). It follows the approved ivory, navy, and gold homepage direction and the six-page and practice-area concepts from the build handoff.

There's no build step and there are no dependencies. Every page is plain HTML that shares one stylesheet and one small script, so the site can be hosted anywhere that serves static files (GitHub Pages, Netlify, Cloudflare Pages, S3, or shared hosting).

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home |
| `about.html` | About the Firm |
| `attorneys.html` | Attorneys (placeholder profiles) |
| `practice-areas.html` | Practice Areas overview |
| `real-estate.html` | Real Estate |
| `land-use-planning.html` | Land Use and Planning |
| `estate-law.html` | Estate Law |
| `corporate-formations.html` | Corporate Formations |
| `civil-litigation.html` | General and Civil Litigation |
| `contact.html` | Contact |

```
assets/
  css/styles.css   design tokens (colors, type) at the top, then components
  js/main.js       mobile menu, header shadow, footer year, contact form fallback
  img/             placeholder imagery and favicon
```

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Editing

- **Colors and fonts:** set as CSS custom properties at the top of `assets/css/styles.css`. Headings use *Newsreader* and body text uses *Public Sans*, both from Google Fonts.
- **Header and footer:** each page carries its own copy of the header and footer. Changes to the navigation, phone, address, or footer must be made in all 10 HTML files (a find-and-replace across `*.html` handles this).
- **Navigation:** the Practice Areas item opens a dropdown listing each practice page. It opens on hover or with the chevron button on desktop, and with the chevron button in the mobile menu.
- **Practice-area pages** follow the v2 practice-area template: a full-width photo hero with the practice name, a navy panel of checkmarked services beside an ivory panel with an italic headline, short description, and consultation button, a sketched landscape divider, and a navy "Trusted … Counsel in New York" strip.

## Before launch: items to confirm with the firm

**Content and facts**
- [ ] Verify the firm details: name, address (1961 Route 6, Carmel, NY 10512), phone ((845) 225-7500), email (waslaw@shillinglegal.com), and hours (Mon–Fri, 8 AM–5 PM, by appointment).
- [ ] Get firm approval for all practice-area copy and service lists. They are drafted from the current site's practice-areas page, and no services beyond those lists are claimed.
- [ ] Confirm the "Serving our community for decades" claim on the home page ribbon.
- [ ] **Attorneys page:** replace the four placeholder cards in `attorneys.html` with verified names, titles, photos, and biographies, and add or remove cards to match the team.

**Imagery**
- [ ] Confirm the licensing or ownership of all imagery in `assets/img/` before launch:
  - `practice-real-estate.jpg`, `practice-land-use.jpg`, `practice-estate.jpg`, `practice-corporate.jpg`, `practice-litigation.jpg`: practice-page hero images supplied by the project team (autumn Carmel home, fenced Hudson Valley meadow, lakeside overlook, Main Street storefronts, historic courthouse). If they are AI-generated, check that the generator's terms permit commercial use and that they don't depict identifiable real properties in a misleading way.
  - `landscape-sketch.webp`: the sketched landscape divider on the practice pages, extracted from the v2 template image and upscaled.
  - `landscape-day.jpg`, `landscape-dusk.jpg`, `band-oak.jpg`, `band-ridge.jpg`: placeholders **cropped from the AI-generated design mockups** (used on Home, About, Attorneys, and the navy bands). Replace them with supplied imagery in the same style, at about 1600px wide.

**Contact form**
- [ ] The contact form is **not connected to a server**. For now it validates the input and opens the visitor's email app with a pre-filled message to the office, and the page says so. To send submissions directly, connect a tested form handler (Formspree, Netlify Forms, or the host's own), update `contact.html` and `main.js`, and only then change the on-page wording.
- [ ] No live booking is offered. "Schedule a consultation" buttons link to the Contact page, which asks visitors to call.

**Legal notices**
- [ ] The footer and contact page include draft notices ("Attorney Advertising", "not legal advice", "does not create an attorney–client relationship"). Confirm the wording the firm wants, including New York advertising-rule requirements.
- [ ] Add a privacy policy if the firm requires one, especially once a form handler is connected.

**Technical**
- [ ] The Contact page embeds Google Maps by address. Confirm the pin location.
- [ ] Add analytics, if wanted, and set the canonical domain, a sitemap, and social preview images once hosting is chosen.

## Accessibility notes

The site includes a skip link, semantic landmarks, visible focus states, `aria-current` on navigation, a keyboard-operable mobile menu (Escape closes it), labelled form fields with inline error messages, and reduced-motion support. Gold text and buttons meet WCAG AA contrast on the ivory background.

## Credits

The handshake, leaf, and people icons are adapted from [Lucide](https://lucide.dev) (ISC license). The other icons are original.
