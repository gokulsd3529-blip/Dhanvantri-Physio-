# How to add your own images

The website currently shows **default illustration images** in WebP format. They are placeholders. Replace them with your real clinic photos in 4 steps.

## Easiest method: no HTML editing (recommended)

1. Put your photo (JPG or WebP, under 300 KB) in the folder `assets/photos/`. Any file name works, for example `hero.jpg`.
2. Open `js/config.js`, find the picture's line in `PHOTOS`, and write the path between the quotes, for example: `"hero": "assets/photos/hero.jpg",`
3. Save and refresh the page. The site now shows your photo. Make the quotes empty again to go back to the drawing.

The names in `PHOTOS` are the file names in the table below, without the file extension (for example, `hero.webp` becomes `hero`). Use the sizes in the table.

## Second method: replace the file (works for every image)

1. **Pick the photo.** Use a real photo of your clinic, team or treatment. Only use photos you own or have permission to use, and get consent from any patient who appears.
2. **Resize and compress it.** Use the size in the table below (for example 1600 x 1200). Keep the file **under 300 KB**. Free tools: squoosh.app, tinypng.com or any photo editor. Save as **JPG** (or WebP).
3. **Name it and copy it.** Give it the same name as the picture you are replacing, but with `.jpg`. Example: your hero photo becomes `hero.jpg`. Copy it into the folder `assets/images/`.
4. **Point the site to it.** Open the folder in VS Code (or any editor), press **Ctrl+Shift+H** (Find and Replace in all files), and replace `hero.webp` with `hero.jpg` or `hero.webp`. Click "Replace all". Refresh the page. Done.

Repeat for each image. Do the Find and Replace across **all files** (the HTML files and `js/data.js`), because treatment and blog pictures are listed in `js/data.js`.

Tip: the picture is cropped to fit automatically (it is never stretched), so keep the main subject in the middle of the photo.

## Every picture, where it appears, and the best size

| File name | Where it shows | What photo to use | Size (px) | Used in these files |
|---|---|---|---|---|
| `about.webp` | Home "About us" block and About page | Clinic reception / front desk | 1600 x 1200 (4:3) | about.html, index.html |
| `blog-desk-posture.webp` | Blog list and "Desk posture basics" article | Person sitting at a desk | 1600 x 1200 (4:3) | blog-desk-posture-basics.html, js/data.js (lists on Services and Blog pages) |
| `doctor.webp` | Doctor page and home "Our doctor" block | Portrait of Dr. Kartik (head and shoulders) | 800 x 1000 (4:5) | doctor.html, index.html |
| `facility-access.webp` | Facilities page | Ramp / accessible entrance | 1600 x 1000 (16:10) | facilities.html |
| `facility-equipment.webp` | Facilities page, home "Inside the clinic", About page | Rehabilitation equipment | 1600 x 1000 (16:10) | about.html, facilities.html, index.html |
| `facility-exercise.webp` | Facilities page, home "Inside the clinic", About page | Exercise and recovery area | 1600 x 1000 (16:10) | about.html, facilities.html, index.html |
| `facility-gallery.webp` | Facilities page | A general photo of the clinic | 1600 x 1000 (16:10) | facilities.html |
| `facility-reception.webp` | Facilities page, About page | Reception and waiting area | 1600 x 1000 (16:10) | about.html, facilities.html |
| `facility-treatment.webp` | Facilities page, home "Inside the clinic", About page | Your treatment room | 1600 x 1000 (16:10) | about.html, facilities.html, index.html |
| `geriatric-physiotherapy.webp` | Geriatric page, home tile, services list, blog article | Older adult walking with support | 1200 x 900 (4:3) | blog-preventing-falls-at-home.html, geriatric-physiotherapy.html, index.html, js/data.js (lists on Services and Blog pages) |
| `hero.webp` | Home banner (top of home page), About page | Physiotherapist helping a patient | 1600 x 1200 (4:3) | about.html, index.html |
| `neurological-rehabilitation.webp` | Neurological page, home tile, services list, About page | Patient walking between parallel bars | 1200 x 900 (4:3) | about.html, index.html, js/data.js (lists on Services and Blog pages), neurological-rehabilitation.html |
| `orthopedic-physiotherapy.webp` | Orthopedic page, home tile, services list, About page | Therapist assessing a knee | 1200 x 900 (4:3) | about.html, index.html, js/data.js (lists on Services and Blog pages), orthopedic-physiotherapy.html |
| `pain-management.webp` | Pain Management page, home tile, services list, blog article, About page | Therapist treating a patient with back pain | 1200 x 900 (4:3) | about.html, blog-staying-active-with-back-pain.html, index.html, js/data.js (lists on Services and Blog pages), pain-management.html |
| `pediatric-physiotherapy.webp` | Pediatric page, home tile, services list | Child exercising with a therapist | 1200 x 900 (4:3) | index.html, js/data.js (lists on Services and Blog pages), pediatric-physiotherapy.html |
| `post-surgical-rehabilitation.webp` | Post-Surgical page, home tile, services list | Patient with crutches after surgery | 1200 x 900 (4:3) | index.html, js/data.js (lists on Services and Blog pages), post-surgical-rehabilitation.html |
| `spine-neck-back-pain.webp` | Spine, Neck & Back Pain page, home tile, services list | Posture / spine assessment | 1200 x 900 (4:3) | index.html, js/data.js (lists on Services and Blog pages), spine-neck-back-pain.html |
| `sports-injury-rehabilitation.webp` | Sports Injury page, home tile, services list | Athlete exercising or running | 1200 x 900 (4:3) | index.html, js/data.js (lists on Services and Blog pages), sports-injury-rehabilitation.html |

## Add a new picture to a page

Open the page's `.html` file and put this where you want the picture:

```html
<div class="pic" style="aspect-ratio:4/3">
  <img src="assets/images/my-new-photo.jpg" alt="Describe the photo in one short sentence" width="1200" height="900" loading="lazy">
</div>
```

- `alt` is the description for people who use screen readers. Always write it.
- Change `4/3` to `16/10` for wide pictures or `4/5` for portraits.

## Add more photos to the facilities page

Each card on `facilities.html` has one picture. To add another card, copy a whole `<div class="card fac">...</div>` block, paste it below, and change the image name, the title and the text.

## Change the alt text (picture descriptions)

- On normal pages: search for `alt="` in that page's `.html` file.
- For the treatment tiles and blog list: the description is the treatment or article title in `js/data.js`.

## Checklist before going live

- [ ] Every photo is under 300 KB and sized as shown above.
- [ ] You have permission to use each photo, and patients have agreed to appear.
- [ ] You replaced the default `.webp` image references with your real final files (such as `.jpg` or `.webp`) in all pages and `js/data.js`.
- [ ] You opened every page and checked that no picture is broken.
- [ ] Dr. Kartik's photo is real, and his profile details are filled in (yellow `[ ... ]` marks).

## How to open and download the code from the chat

- The **ZIP file card** has a **Download** button. Unzip it and double-click `index.html` to run the site.
- Click a file card to **open** and read it in the chat. `all-source-code.txt` shows every HTML, CSS and JS file in one place.
