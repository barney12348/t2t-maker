# Upcycle AI - Project Blueprint

## Overview
Upcycle AI is a modern web application designed to inspire users to repurpose waste into functional or aesthetic items. By uploading an image of a discarded object, users receive tailored upcycling projects categorized by difficulty and type (Easy, Aesthetic, Functional).

## Architecture & Design
*   **Stack:** Plain HTML, CSS, JavaScript (Framework-less, utilizing Web Components where appropriate).
*   **Style:** Clean, modern, "Pinterest-inspired" aesthetic with soft shadows, rounded corners, and a vibrant color palette.
*   **Data Flow:** User Upload -> Image Processing -> AI Analysis (Mocked/API) -> JSON Response -> Dynamic UI Rendering.

## Current Plan: Initial Prototype Implementation

### Objective
Build a multi-page web application to demonstrate the "DIY & Upcycling Expert" persona, providing a clear and organized user experience.

### Steps
1.  **Multi-Page Structure (Updated):**
    *   **`index.html`:** Main landing page with image upload and AI analysis.
    *   **`how-it-works.html`:** Dedicated page explaining the process.
    *   **`inspiration.html`:** Dedicated page showcasing popular projects.
    *   **`privacy.html` & `terms.html`:** Legal pages.
2.  **Logic (`main.js`):**
    *   Handle image file selection/drop on the Home page.
    *   Implement language switching across all pages using `localStorage` and `data-i18n`.
    *   Handle cross-page navigation (e.g., linking to the Saved section on the Home page from other pages).
    *   **Content Visibility:** Manage visibility of static "SEO-friendly" content on the home page vs. dynamic application state.
3.  **UI Construction:**
    *   Maintain a consistent header and footer across all pages.
    *   Implement a hamburger menu for mobile responsiveness on all pages.
    *   **Static Index Content:** Added "Why Upcycle?" and "Popular Ideas" sections to `index.html` to ensure valuable publisher content is visible on load for AdSense approval.
4.  **Styling (`style.css`):**
    *   Common styles for shared components (Header, Footer, Navigation).
    *   Specific layout for text-heavy pages (`.text-page`).
5. **SEO & Internationalization:**
    *   Programmatically update SEO tags based on language.
    *   Ensure language persistence across page transitions.
    *   **Crawling:** Added `robots.txt` and `sitemap.xml` to facilitate proper indexing.


## Monetization
*   **Google AdSense:** Integrated for ad revenue.

    *   `ads.txt` added to root.
    *   AdSense script and meta tag added to `index.html`.

## Analytics
*   **Google Analytics:** Integrated for site traffic tracking.
    *   Added Global Site Tag (gtag.js) to all HTML pages (`index.html`, `how-it-works.html`, `inspiration.html`, `privacy.html`, `terms.html`).

## Analytics
*   **Google Analytics:** Integrated for site traffic tracking.
    *   Added Global Site Tag (gtag.js) to all HTML pages (`index.html`, `how-it-works.html`, `inspiration.html`, `privacy.html`, `terms.html`).
