# Sanjay Chouhan — Personal Portfolio

A custom-built personal portfolio website with a fully hand-coded SPA (Single Page Application) router, cinematic loading animation, animated navigation, and dynamic project/tool pages — all in **vanilla HTML, CSS, and JavaScript** with zero frameworks.

🔗 **Live:** [Deployed on Netlify](https://noira.sbs) *(update with your actual URL)*

---

## ✨ Features

- **Custom SPA Router** — client-side routing with `history.pushState`, no page reloads
- **Cinematic Loader** — animated counter (000 → 100) with a smooth reveal transition on first load
- **Dynamic Content Injection** — each page's HTML is fetched and injected into the shell without full reloads
- **Animated Navigation** — icon-based sidebar nav with active state tracking and hover effects
- **Custom Cursor** — dual-layer cursor (dot + outline) for a polished desktop feel
- **Scroll-triggered Animations** — `IntersectionObserver`-powered section reveals
- **Project Viewer** — image carousel with left/right controls and a full-screen image viewer
- **Contact Page** — built-in contact form
- **Responsive Design** — mobile-first with dedicated mobile CSS
- **PWA Ready** — includes `site.webmanifest` and full favicon set

---

## 🗂️ Project Structure

```
portfolio/
├── index.html                  # Shell HTML — entry point
├── favicon.ico
├── site.webmanifest
├── _redirects                  # Netlify SPA redirect rule
│
├── pages/                      # Page fragments (fetched by router)
│   ├── home.html
│   ├── projects.html
│   ├── projectView.html
│   ├── tools.html
│   ├── experiences.html
│   └── contact.html
│
├── assets/
│   ├── CSS/
│   │   ├── base.css            # Layout, loader, nav, profile sidebar
│   │   ├── style.css           # Main content styles
│   │   ├── baseMobile.css      # Mobile overrides
│   │   ├── contact.css         # Contact page styles
│   │   └── projectview.css     # Project detail view styles
│   │
│   ├── JS/
│   │   ├── base/
│   │   │   ├── pageControl.js  # SPA router, loader, page fetching
│   │   │   ├── base.js         # Nav events, changeContent(), popstate
│   │   │   └── data.js         # Projects & tools data (JS objects)
│   │   ├── index/
│   │   │   └── script.js       # Page-specific logic (carousel, hover)
│   │   └── contact/
│   │       └── contact.js      # Contact form logic
│   │
│   ├── images/                 # Project screenshots, tool logos, profile photo
│   └── sanjay.jpg              # Profile photo
│
└── .netlify/                   # Netlify config & functions
```

---

## 🧭 How the Router Works

The site is a **Single Page Application** — `index.html` is the only real HTML file served. All navigation happens without browser reloads.

1. **`pageControl.js`** runs on `DOMContentLoaded`. It reads `window.location.pathname`, matches it to the `routes` object, fetches the corresponding page fragment from `/pages/`, injects it into the shell body, and loads the page-specific JS dynamically.
2. **`base.js`** handles nav clicks. Each `<a data-action="...">` click calls `changeContent(route)`, which fetches + swaps the `#content` aside without touching the shell (header, profile sidebar stay put).
3. **`popstate`** listener handles browser back/forward buttons.
4. Dynamic routes like `/projects/:slug` are matched by the `matchRoute()` function, which extracts the slug as a param.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, flexbox, grid, animations) |
| Logic | Vanilla JavaScript (ES6+) |
| Routing | Custom `history.pushState` SPA router |
| Deployment | Netlify |
| Real-time project (Buzz) | Node.js, Socket.IO, MongoDB, Cloudinary |

---

## 🚀 Running Locally

No build step required — this is pure HTML/CSS/JS.

```bash
# Option 1: VS Code Live Server (recommended)
# Install the Live Server extension, right-click index.html → Open with Live Server

# Option 2: Python
python -m http.server 8000
# Visit http://localhost:8000

# Option 3: Node.js
npx serve .
# Visit http://localhost:3000
```

> **Important:** The SPA router relies on serving from a root (`/`). Opening `index.html` directly as a `file://` path will break asset loading and routing.

---

## 🌐 Deployment (Netlify)

The `_redirects` file contains the Netlify redirect rule to support SPA routing:

```
/* /index.html 200
```

This ensures all routes (e.g. `/projects`, `/contact`) are served by `index.html`, allowing the client-side router to take over.

---

## 📦 Adding a New Project

Open `assets/JS/base/data.js` and add a new entry to the `projects` object:

```js
myProject: {
  id: "myProject",
  title: "My Project",
  subtitle: "Short tagline",
  description: "Full description...",
  services: [
    { title: "Backend", details: "..." },
    { title: "Frontend", details: "..." }
  ],
  images: ["/assets/images/my-project.avif"],
  tags: ["Node.js", "MongoDB"],
  year: 2025,
  link: "https://myproject.com"
}
```

---

## 🧑‍💻 About

Built by **Sanjay Chouhan** — Backend Developer & Full-Stack Engineer based in Hisar, India.

- 2+ years of experience
- 10+ projects completed
- Specializes in Python/Django, Node.js, real-time systems, and scalable backend architecture

---

## 📄 License

This project is personal and not licensed for redistribution. Feel free to take inspiration, but please don't copy the design or code directly.