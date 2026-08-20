# Agent Guidelines & Context: Sanjay Chouhan Portfolio

This repository contains the personal portfolio website of **Sanjay Chouhan** (Backend Developer & Full-Stack Engineer). It is built as a zero-framework, custom Single Page Application (SPA) using pure Vanilla HTML5, CSS3, and JavaScript (ES6+).

---

## 🎯 Architecture Overview

- **Zero-Framework Architecture**: Built without React, Vue, Angular, Tailwind, or bundling tools (Webpack/Vite). All DOM manipulation, state handling, and routing are implemented manually in native JavaScript.
- **Client-Side SPA Router**: Serves `index.html` as the single entry point. Page changes fetch HTML fragments from `pages/*.html`, inject `#content` into the main shell layout, and dynamically load route-specific JS modules.
- **Data-Driven Dynamic Rendering**: Data for portfolio projects and technical tools is centralized in `assets/JS/base/data.js`. Views like `pages/projects.html`, `pages/tools.html`, and `pages/projectView.html` render programmatically based on this data.
- **Deployment & SPA Rewrites**: Hosted on Netlify using `_redirects` (`/* /index.html 200`) to direct all non-static requests to `index.html` for client-side route handling.

---

## 📁 Repository Structure

```
d:\Personal Projects\portfilio\
├── index.html                   # Shell HTML (Infinity Circle Preloader, counter loader, background rings, music player shell, header, nav, profile sidebar, content mount)
├── _redirects                   # Netlify SPA rewrite configuration (/* /index.html 200)
├── favicon.ico & site.webmanifest # App manifest and favicons
├── agent.md                     # AI agent instructions & codebase map (this file)
├── readme.md                    # Project documentation & overview
│
├── pages/                       # Page HTML fragments (fetched & injected into #content)
│   ├── home.html                # Home page fragment
│   ├── projects.html            # Projects grid fragment
│   ├── projectView.html         # Detailed project view template fragment
│   ├── tools.html               # Technical tools showcase fragment
│   ├── experiences.html         # Experience timeline fragment
│   └── contact.html             # Contact form fragment
│
└── assets/
    ├── CSS/
    │   ├── base.css             # Shell layout, loader, ring overlays, header/nav, profile sidebar styles
    │   ├── style.css            # Primary content section styles & component classes
    │   ├── baseMobile.css       # Responsive mobile overrides
    │   ├── contact.css          # Contact form specific styles
    │   └── projectview.css      # Project detail view & modal carousel styles
    │
    ├── JS/
    │   ├── base/
    │   │   ├── pageControl.js   # Initial SPA loader, shell DOM injection, route mapping, start counter
    │   │   ├── base.js          # SPA navigation, changeContent() router, popstate handler, audio controller, page scroll progress
    │   │   └── data.js          # Data objects for projects and tools
    │   ├── index/
    │   │   └── script.js        # Page-specific interactions (carousels, hover effects, project modal, tools filter)
    │   └── contact/
    │       └── contact.js       # Contact page interactions & form handling logic
    │
    └── images/                  # Project screenshots, tool logos, and profile images
```

---

## 🧭 SPA Router & Page Lifecycle

### 1. Route Map Configuration
Routes are defined in `assets/JS/base/pageControl.js`:
- `/` -> `pages/home.html`, script: `/assets/JS/index/script.js`
- `/projects` -> `pages/projects.html`, script: `/assets/JS/index/script.js`
- `/tools` -> `pages/tools.html`, script: `/assets/JS/index/script.js`
- `/experiences` -> `pages/experiences.html`, script: `/assets/JS/index/script.js`
- `/contact` -> `pages/contact.html`, script: `/assets/JS/contact/contact.js`
- `/projects/:slug` -> `pages/projectView.html`, script: `/assets/JS/index/script.js`

### 2. Page Navigation Sequence (`changeContent(route)`)
When a link with `data-action="/path"` is clicked:
1. `history.pushState({}, "", route)` updates the browser URL bar without reloading.
2. `showProgressBar()` activates top header navigation progress bar animation.
3. `getHtml(route.html)` fetches the target HTML fragment from `/pages/`.
4. `asideContainer.innerHTML = newContent.innerHTML` replaces content inside `#content`.
5. Reset & re-trigger CSS animations (`mainAimationContent`, `mainAimationProfile`).
6. `IntersectionObserver` re-attaches to `#content section` elements for scroll-reveal animations.
7. Any existing `#mainPage` script element is removed.
8. The route's target script is dynamically created with cache-busting parameter (`?v=Date.now()`) and appended to `document.body`.
9. `asideContainer.scrollTop` and `document.documentElement.scrollTop` are reset to `0`.

---

## 📦 Data Management Guide

### Adding a New Project
Edit `assets/JS/base/data.js` under the `projects` object:
```javascript
newProjectSlug: {
  id: "newProjectSlug",
  title: "Project Title",
  subtitle: "Category / Subtitle",
  description: "Detailed description of the project...",
  services: [
    { title: "Service Title", details: "Details of work done..." }
  ],
  images: [
    "/assets/images/image1.avif",
    "/assets/images/image2.avif"
  ],
  tags: ["Tag1", "Tag2"],
  year: 2025,
  link: "https://project-url.com"
}
```

### Adding a Tool
Edit `assets/JS/base/data.js` under the `tools` object:
```javascript
toolKey: {
  name: "Tool Name",
  category: "Server-Side" | "Database" | "Frontend" | "Version Control" | "Deployment" | "Developer Tools",
  overview: "Tool description...",
  howIUseIt: "Usage details...",
  why: "Why this tool is preferred...",
  image: "/assets/images/tools/tool-logo.png"
}
```

---

## 🛠️ Local Development Workflow

- **No Build / Compilation Step**: Simply edit HTML, CSS, or JS files.
- **Server Requirement**: Serves from root (`/`). Standard `file://` URLs will break relative fetches and SPA routing.
  - Option 1 (VS Code): Live Server extension on `index.html`.
  - Option 2 (Python): `python -m http.server 8000`
  - Option 3 (Node.js): `npx serve .`

---

## 🤖 Guidelines for AI Agents Editing This Repository

1. **Preserve SPA Single Shell Principle**:
   - `index.html` is the only shell. Do NOT add full `<html><body>` tags to files in `/pages/`. Files in `/pages/` should contain standard HTML fragments (primarily wrappers containing `<aside id="content">...` or content meant to be parsed by DOMParser).
2. **Dynamic Script Management**:
   - Page-specific interaction functions in `script.js` execute based on `window.location.pathname`. Ensure new route conditions are properly branched in `script.js` or separate page scripts.
   - Remember that scripts attached to dynamically loaded pages run after innerHTML swaps; always re-query DOM elements after content updates rather than holding stale element references.
3. **Route Definition Alignment**:
   - If adding a new page fragment (e.g. `pages/blog.html`), register it in both `pageControl.js` (`routes` dictionary and `matchRoute` if dynamic) and add a matching `<a data-action="/blog" class="navanchor">` item in the nav menu template inside `pageControl.js`.
4. **CSS Scoping & Variable Conventions**:
   - Custom CSS variables (e.g., `--token-purple-bg`, `--token-fc7b9f32-7298-428e-bdfb-3530edb2e73a`) govern color themes. Maintain consistency with existing CSS rules in `assets/CSS/base.css` and `assets/CSS/style.css`.
5. **Cache-Busting & Asset Paths**:
   - Always use root-relative paths for images and scripts (e.g. `/assets/images/...`, `/assets/JS/...`).
