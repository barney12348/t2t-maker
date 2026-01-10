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
