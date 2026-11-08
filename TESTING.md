# NordClean Website — Testing Report

**Project:** NordClean Cleaning Services — fictional portfolio website
**Report updated:** 2026-11-08
**Current overall status:** **Local pre-deployment checks completed: two Lighthouse audits, JavaScript syntax, all seven image aspect ratios, eight WebP asset checks, and 19 user-reported responsive/accessibility/functional tests passed. Public deployment and live-site verification are pending.**

## 1. Scope and evidence

This report distinguishes verified checks from implemented features and user-reported test activity. **Implemented in source code** does not necessarily mean **manually tested and passed**.

Evidence used:
- Latest supplied `index.html`, `styles.css`, and `app.js` (2026-11-08 submissions).
- First Lighthouse mobile audit: `performance.pdf` (2026-11-06).
- Second Lighthouse mobile audit: `performance2.pdf` (2026-11-06).
- User confirmation (2026-11-08): all seven responsive viewport widths passed (320px through 1440px).
- User-confirmed manual checklist (2026-11-08): 12 accessibility and functional checks reported passed.
- Earlier browser confirmation that the six Request Service selections worked; user now reports the latest service-selection regression checks also passed.

**Verification limits:** All eight WebP assets were supplied and verified for format, intrinsic dimensions, and file sizes. The latest HTML width/height attributes match the seven content images. The user supplied a full-page desktop screenshot showing website rendering and reported all 19 manual tests passed. These are user-provided observations, not independently reproduced browser tests. No public deployment has been verified.

## 2. Source-code checks

| Check | Status | Evidence / qualification |
|---|---|---|
| JavaScript syntax | **Pass** | `node --check` completed successfully on the latest `app.js` |
| Skip link and main landmark | **Implemented** | `.skip-link` points to `#main-content`; `<main id="main-content" tabindex="-1">` is present |
| Navigation and mobile toggle | **Implemented** | Menu button, `aria-controls`, `aria-expanded`, responsive CSS and JavaScript handlers are present |
| Keyboard focus and reduced-motion styling | **Implemented** | Focus rules and reduced-motion CSS are present; user reports manual behavior passed |
| Contact form validation | **Implemented** | Client-side handlers are present; no backend submission is implemented |
| Six service preselection links | **Implemented; previously browser-confirmed** | All six `data-service` values and matching options exist; latest-version regression test reported passed by user |
| Back-to-Top and active navigation | **Implemented** | CSS and JavaScript present; latest behavior reported passed by user; not independently browser-tested |
| Seven content image dimensions | **Pass** | All seven `width`/`height` pairs in latest HTML match measured WebP dimensions (see section 7) |
| WebP image paths | **Files verified; browser loading unverified** | Eight expected WebP files supplied, opened and measured; confirm the final local project has them at the relative paths |
| Hero image preload | **Implemented** | Preload and CSS background both reference `images/hero-cleaning.webp` |
| Meta description and fictional-business notice | **Present** | Both are included in HTML |

## 3. Responsive testing

The user explicitly reported **Pass** at each of the seven viewport widths on 2026-11-08. Results below are user-reported; individual observation notes were not provided.

| Viewport width | Test activity | Result | Notes |
|---|---|---|---|
| 320px | User-tested | **Pass (reported)** | No detailed observation notes provided |
| 375px | User-tested | **Pass (reported)** | No detailed observation notes provided |
| 600px | User-tested | **Pass (reported)** | No detailed observation notes provided |
| 768px | User-tested | **Pass (reported)** | No detailed observation notes provided |
| 900px | User-tested | **Pass (reported)** | No detailed observation notes provided |
| 1024px | User-tested | **Pass (reported)** | No detailed observation notes provided |
| 1440px | User-tested | **Pass (reported)** | Desktop screenshot provided; no per-width notes |

## 4. Accessibility testing

The second Lighthouse **automated Accessibility score was 100/100**. Separately, on **2026-11-08**, the user explicitly reported that **all six manual accessibility checks passed**. These are **user-reported browser-test results**, not independent assistant-run browser tests:

- [x] Skip to Main Content works using **Tab** and **Enter** — user-confirmed pass.
- [x] Desktop/mobile navigation works entirely with the keyboard — user-confirmed pass.
- [x] **Escape** closes the mobile menu — user-confirmed pass.
- [x] Keyboard focus remains visible and logical — user-confirmed pass.
- [x] Form labels and error feedback are accessible — user-confirmed pass.
- [x] Reduced-motion system preference is respected — user-confirmed pass.

**Source-code evidence:** Semantic navigation/main elements, accessible names, focus rules, `aria-describedby`, and reduced-motion rules are present. A 100/100 automated score and the reported manual checks do not establish full accessibility conformance.

## 5. Functional testing

On **2026-11-08**, the user explicitly reported that **all six functional checks passed** in the website:

- [x] All six Request Service links select the correct service — user-confirmed pass.
- [x] Form validation works for both invalid and valid inputs — user-confirmed pass.
- [x] Active navigation highlights the current section — user-confirmed pass.
- [x] Back-to-Top button works — user-confirmed pass.
- [x] Mobile navigation opens and closes correctly — user-confirmed pass.
- [x] Browser Console shows no blocking JavaScript errors — user-confirmed pass.

**Verification qualifier:** The user performed and confirmed these checks; they were not independently exercised in a browser during this report revision.

**Important limitation:** The contact form is a **portfolio demonstration only** and does **not send messages** to a server.

## 6. Lighthouse mobile audit results

**Local audit environment recorded in the prior report:**
- Site: `http://127.0.0.1:5500/index.html`
- Lighthouse Mobile; emulated Moto G Power; simulated Slow 4G
- Audit date: **2026-11-06**

| Category | First audit | Second audit | Change |
|---|---:|---:|---:|
| Performance | 89 | **97** | +8 points |
| Accessibility | 100 | **100** | No change |
| Best Practices | 100 | **100** | No change |
| SEO | 100 | **100** | No change |

| Performance metric | First audit | Second audit |
|---|---:|---:|
| First Contentful Paint (FCP) | 1.0 s | 1.0 s |
| Largest Contentful Paint (LCP) | 3.8 s | **2.6 s** |
| Total Blocking Time (TBT) | 50 ms | **20 ms** |
| Cumulative Layout Shift (CLS) | 0 | **0** |
| Speed Index | 1.0 s | 1.0 s |

**Observed improvement:** LCP decreased by 1.2 seconds (approximately 32%). Estimated potential image-delivery savings dropped from **14,935 KiB** to **186 KiB** between audits. These savings estimates are **not** the actual individual image-file sizes.

**Remaining performance note:** The second LCP is approximately 2.6 seconds, slightly above the common 2.5-second good threshold. The 97 performance score is strong; optimization is optional rather than a blocking task by itself.

Sources: `performance.pdf` and `performance2.pdf`.

## 7. Image optimization — verified 2026-11-08

All eight WebP files were uploaded and successfully read. The size below is the **actual on-disk file size in KiB**, not a Lighthouse potential-savings estimate. Original JPEG sizes were not supplied as a complete, comparable dataset, so no per-image compression percentage is claimed.

| Image | Actual WebP dimensions (px) | Current file size (KiB) | HTML attributes in last submitted index.html | Status |
|---|---:|---:|---|---|
| Home Cleaning | 800 × 533 | 25.9 | 800 × 533 | **Pass — matching ratio** |
| Office Cleaning | 800 × 533 | 27.0 | 800 × 533 | **Pass — matching ratio** |
| Deep Cleaning | 800 × 1000 | 58.0 | 800 × 1000 | **Pass — matching ratio** |
| Window Cleaning | 800 × 1200 | 96.5 | 800 × 1200 | **Pass — matching ratio** |
| Move-Out Cleaning | 800 × 1200 | 34.8 | 800 × 1200 | **Pass — matching ratio** |
| Commercial Cleaning | 800 × 533 | 90.0 | 800 × 533 | **Pass — matching ratio** |
| About Cleaning | 1000 × 1500 | 55.0 | 1000 × 1500 | **Pass — matching ratio** |
| Hero background | 1600 × 896 | 71.5 | CSS background (no HTML img dimensions) | WebP verified; CSS URL must match |

- The six service WebP assets together are approximately **332.2 KiB**.
- All eight WebP assets together are approximately **458.7 KiB**.
- The hero background's intrinsic dimensions do **not** require `width`/`height` HTML attributes because it is referenced in CSS, not as an `<img>`.
- Keep responsive CSS cropping with `object-fit: cover`; the HTML `width` and `height` attributes should describe the file's intrinsic aspect ratio.
- All seven HTML image heights have been corrected and verified in the latest submission. The user-provided desktop screenshot shows the images rendering in the website. Recheck images after deployment.

## 8. Browser testing environment

- **Browser:** Not recorded in the latest submitted testing report (Firefox was used in earlier development testing).
- **Browser version:** Not recorded.
- **Date of latest manual responsive testing:** Not recorded (the user confirmed manual accessibility/functional tests on 2026-11-08).
- **Manual JavaScript Console test results:** User reported no blocking JavaScript Console errors on 2026-11-08.
- **Automated Lighthouse audit date:** 2026-11-06.

## 9. Known issues and unverified items

- No blocking issue was reported in the 19 user-performed manual tests. This does not guarantee that no defects exist.
- The user confirmed all seven viewport widths passed; individual per-width notes and the browser version remain unrecorded.
- All eight WebP assets and seven content-image aspect-ratio attributes are verified; the full-page screenshot shows local desktop rendering.
- Original pre-conversion image file sizes were not all supplied, so exact per-image compression percentages are not calculated.
- The README correctly references `images/nordclean-preview.png`; the screenshot asset was supplied. Verify the same file exists at that relative path in the Git repository.
- Git repository state, remote configuration, current branch, and `git diff --check` remain unverified; run these checks before pushing.
- No live GitHub Pages deployment or post-deployment tests have been verified.

## 10. Final status

**Status: LOCAL PRE-DEPLOYMENT TESTING PASSED (WITH USER-REPORTED MANUAL RESULTS); GITHUB PUSH AND LIVE DEPLOYMENT NOT YET VERIFIED.**

- **Verified from submitted code/files:** JavaScript syntax; seven correct HTML image dimension pairs; eight valid WebP assets and sizes; README screenshot reference and screenshot asset.
- **Verified from previously submitted reports:** Lighthouse mobile Performance 97, Accessibility 100, Best Practices 100, SEO 100.
- **Passed by user report (2026-11-08):** Seven responsive widths and 12 accessibility/functional checks (19 manual checks total).
- **Still required:** Confirm clean Git status/diff and intended branch/remote, commit and push, then test the public site and add the actual URL to README.
