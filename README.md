# Conflo CRM Landing Page

This repository contains the landing page codebase for `conflo.app`.

## Project Structure
- `index.html`: SEO-optimized landing page structure with semantic layout blocks and interactive DOM mockups.
- `style.css`: Clean, framework-free design system built with CSS HSL variables, fluid typography, dark-mode styling, glassmorphism UI, and keyframe animations.
- `app.js`: Lightweight JavaScript handlers for live tab selectors and FAQ accordion interactions.

## Expanding to a Git-Powered Static Blog
When you are ready to introduce a blog subpage, you have several options to publish static content via Git:

### Option A: Clean HTML & Markdown (Simple)
1. Create a `/blog` directory.
2. Create an `index.html` inside `/blog` representing your blog feed.
3. Save articles as individual HTML files (e.g. `/blog/how-to-manage-whatsapp-leads.html`).
4. Commit and push directly to GitHub Pages.

### Option B: Static Site Generator (Astro or Eleventy)
If you want automated blog feeds from Markdown files:
1. Initialize **Astro** in the current folder:
   ```bash
   npm create astro@latest
   ```
2. Place these static files inside `/public` and move your components to Astro layouts.
3. Store posts inside `src/content/blog/` as Markdown (`.md`) files.
4. Configure GitHub Actions to automatically compile and build static pages to the main branch upon git push.

---
Domain: **conflo.app**
