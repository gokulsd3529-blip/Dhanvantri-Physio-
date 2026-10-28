# Dhanvanthri Physiotherapy Center: multi-page website (HTML, CSS, JS)

No build step. Every page is its own `.html` file.

## Run
- Double-click `index.html`, or run `python3 -m http.server 8000` in this folder and open http://localhost:8000.
- Fonts and the Google Map need an internet connection.

## Folder structure
```
index.html                      Home
about.html                      About Us
doctor.html                     Doctor and clinic overview
facilities.html                 Facilities
why-choose-us.html              Why Choose Us
services.html                   All services (search + filter)
pain-management.html            Treatment pages (8)
neurological-rehabilitation.html
spine-neck-back-pain.html
post-surgical-rehabilitation.html
geriatric-physiotherapy.html
pediatric-physiotherapy.html
orthopedic-physiotherapy.html
sports-injury-rehabilitation.html
patient-guide.html  testimonials.html  faq.html
appointment.html    registration.html  contact.html
blog.html           blog-*.html (3 articles)
privacy-policy.html terms.html medical-disclaimer.html accessibility.html  404.html
css/  base.css (colors, type, buttons, forms) · layout.css (header, menu, footer)
      components.css (cards, tiles, FAQ) · home.css (home page) · responsive.css (mobile / tablet / desktop)
js/   config.js (phone, form endpoint) · data.js (treatments, blog list) · layout.js (header, menu, footer)
      forms.js (validation) · filters.js (search) · photos.js (your photos) · main.js (scroll effects)
assets/images/  default pictures · assets/photos/  your photos · assets/favicon.jpeg
sitemap.xml  robots.txt
```

## Where to edit
- Page text: open that page's `.html` file.
- Menu, footer, top ticker, phone bar: `js/layout.js` (one place, all pages update).
- Treatment names and list: `js/data.js` (and the matching treatment page).
- Colors and fonts: top of `css/base.css`.
- Form endpoint: `api` in `js/config.js`. Until set, forms run in demonstration mode and nothing is saved.
- Yellow `[ ... ]` marks are details the clinic still has to supply (qualifications, email, policies).

## Images
The pictures in `assets/images/` are illustrations used as defaults, not photographs. To use your own photos, follow **README-IMAGES.md**: copy the photo into `assets/photos/` and add its path to the `PHOTOS` list in `js/config.js`.

## Before going live
Real photos, Dr. Kartik's verified profile, clinic email, policy review, your domain in `sitemap.xml`, `robots.txt` and the `canonical` links.
