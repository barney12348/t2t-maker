# Upcycle AI - Project Blueprint

## Overview
Upcycle AI is a modern web application designed to inspire users to repurpose waste into functional or aesthetic items. By uploading an image of a discarded object, users receive tailored upcycling projects categorized by difficulty and type (Easy, Aesthetic, Functional).

## Architecture & Design
*   **Stack:** Plain HTML, CSS, JavaScript (Framework-less, utilizing Web Components where appropriate).
*   **Style:** Clean, modern, "Pinterest-inspired" aesthetic with soft shadows, rounded corners, and a vibrant color palette.
*   **Data Flow:** User Upload -> Image Processing -> AI Analysis (Mocked/API) -> JSON Response -> Dynamic UI Rendering.

## Current Plan: Initial Prototype Implementation

### Objective
Build the core interface and logic to demonstrate the "DIY & Upcycling Expert" persona.

### Steps
1.  **UI Construction (`index.html`):**
    *   Create a clean, inviting landing area with a "Drag & Drop" image upload zone.
    *   Create a container for the "Upcycling Ideas" results.
2.  **Styling (`style.css`):**
    *   Implement a responsive layout using CSS Grid/Flexbox.
    *   Design "Idea Cards" with distinct visual cues for the different categories (Easy, Aesthetic, Functional).
    *   Use modern typography and spacing.
3.  **Logic (`main.js`):**
    *   Handle image file selection/drop.
    *   Implement a `generateIdeas(image)` function. *Note: For this prototype, we will simulate the AI response with the provided JSON structure to ensure immediate functionality without requiring a live API key, but the code will be structured to easily swap in `fetch` calls.*
    *   Dynamically render the JSON data into the DOM.
4.  **Privacy Policy (`privacy.html`):**
    *   Add a language toggle button (English/Korean) to the header.
    *   Implement logic to switch between English and Korean versions of the policy text.
    *   Ensure language preference persists across pages using `localStorage`.
    *   **Fix FOUC:** Implement immediate language detection script in `<head>` to prevent flash of wrong language content.
5.  **Terms of Service (`terms.html`):**
    *   Add a language toggle button (English/Korean) to the header.
    *   Implement logic to switch between English and Korean versions of the terms.
    *   Ensure language preference persists across pages using `localStorage`.
    *   **Fix FOUC:** Implement immediate language detection script in `<head>` to prevent flash of wrong language content.

## Monetization
*   **Google AdSense:** Integrated for ad revenue.
    *   `ads.txt` added to root.
    *   AdSense script and meta tag added to `index.html`.
