# Kaalagathi — GitHub Pages website

A responsive static website for Guruji Ravi Shankar Tekuri and the Kaalagathi channel. Navigation is in English and course descriptions are in Telugu.

## Included pages
- `index.html` — home page, animated CSS planet/orbit hero, course cards and navigation
- `courses/basics-astrology.html`
- `courses/advanced-astrology.html`
- `courses/vaasthu.html`
- `courses/marriage-astrology.html`
- `courses/ayurveda.html`
- `courses/consultation.html`
- `registration.html` — registration, Zoom installation and sign-in guide
- `courses.properties` — course fees, dates, times, durations, registration links and YouTube links
- `assets/style.css`, `assets/site.js`

## Update course details
Edit `courses.properties` in GitHub. Use `key=value` format. For example:

```properties
marriage-astrology.fee=₹5,999/-
marriage-astrology.earlyFee=₹4,999/-
marriage-astrology.earlyDeadline=24 October 2026
marriage-astrology.start=31 October 2026
marriage-astrology.duration=Schedule to be confirmed
marriage-astrology.days=Saturday & Sunday
marriage-astrology.time=6:00 PM – 10:00 PM
marriage-astrology.registrationUrl=https://forms.gle/XixGK1NDY5ZmyhS88
marriage-astrology.videoUrl=https://youtu.be/FuqFWE6RAqY?si=IdaOVAwQIUfGOtiV
```

The course pages read this file in the visitor's browser. Since it is a static GitHub Pages site, it must be served over HTTP(S) (not opened directly as a `file://` page) for the configuration file to load. After committing changes, GitHub Pages will publish the updated details.

## Publish free with GitHub Pages
1. Sign in to GitHub and create a **public repository named `Kaalagathi`**.
2. Upload all files and folders from this project. Keep the folder structure exactly as provided; upload the *contents* of this folder to the repository root, not an extra nested `Kaalagathi/Kaalagathi` folder.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch `main` and folder `/(root)`, then save.
6. Wait for GitHub Pages to publish. The URL will normally be `https://YOUR-GITHUB-USERNAME.github.io/Kaalagathi/`.
7. Replace `https://www.youtube.com/` in the Home page with the official Kaalagathi channel URL when confirmed.

## Important notes
- GitHub Pages is free for public repositories.
- The site is a static website: it does not yet store student registrations, verify payments, send emails, or automatically create Zoom meetings.
- Confirm course fees and dates before publishing. The supplied Marriage Astrology offer is set to ₹4,999 until 24 October 2026 and ₹5,999 thereafter, with the class start date set to 31 October 2026. Confirm these are still correct before going live.
- Some courses contain starter copy and `Contact for fee` / `To be announced` values; replace them with Guruji's approved details.
- The visual planet scene is original CSS artwork, not a copied image. The site uses Google Fonts if the visitor is online; system fallbacks are included.
- Course information is educational. Astrology does not guarantee relationship outcomes, and Ayurveda content is not a substitute for qualified medical advice.
