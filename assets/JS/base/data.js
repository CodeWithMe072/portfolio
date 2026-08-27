const projects = {
  buzz: {
    id: "buzz",
    title: "Buzz",
    subtitle: "Real-Time Stealth Messenger App",
    description:
      "A full-stack real-time chat application secretly hidden inside an SSC government portal. A 5-click trigger on the emblem reveals a fully functional Instagram-style messenger with text, image, video, and voice notes — complete with live typing indicators, delivered/seen receipts, emoji reactions, swipe-to-reply, and a full-screen media viewer.",
    services: [
      {
        title: "Backend & Real-Time",
        details: "Node.js + Socket.IO for bi-directional messaging, live presence tracking, typing events, and media upload acknowledgements via Cloudinary."
      },
      {
        title: "Frontend Engineering",
        details: "13-module vanilla JavaScript, mobile-first with touch gestures, voice recording with live waveform visualization, and audio playback with progress canvas."
      }
    ],
    images: [
      "/assets/images/buzz/image.png",
      "/assets/images/project1.avif",
      "/assets/images/project 2.avif"
    ],
    tags: ["Node.js", "Socket.IO", "MongoDB", "Cloudinary", "Vanilla JS", "Mobile-First"],
    year: 2025,
    link: "https://noira.sbs"
  },

  exampro: {
    id: "exampro",
    title: "ExamPro",
    subtitle: "Proctored MCQ Exam & Candidate Analytics",
    description:
      "A high-fidelity online MCQ examination platform featuring automated anti-cheat proctoring (tab-switch tracking, fullscreen enforcement, 3-strike submission), continuous localStorage checkpoint auto-save, keyboard navigation shortcuts, dark/light theme engines, and candidate performance analytics.",
    services: [
      {
        title: "Frontend Architecture",
        details: "React, Vite, Tailwind CSS v4, Lucide React, Zod schema validation, and custom dark/light theme context."
      },
      {
        title: "Proctoring & Resilience",
        details: "Automated focus tracking, tab-switch warning system, background auto-save to localStorage, and keyboard-driven exam navigation."
      }
    ],
    images: [
      "/assets/images/exampro_preview.jpg",
      "/assets/images/project 2.avif",
      "/assets/images/project 3.avif"
    ],
    tags: ["React", "Vite", "Tailwind CSS v4", "Lucide React", "Proctoring", "Zod"],
    year: 2025,
    link: "https://github.com/CodeWithMe072/exampro"
  },

  contacthub: {
    id: "contacthub",
    title: "Contact Hub",
    subtitle: "Centralized Multi-Site API & Security Admin",
    description:
      "A centralized backend service and responsive dark-mode administrative dashboard for collecting, securing, and managing contact form submissions across multiple external client websites. Includes dynamic CORS domain locking, crypto-secure API key rotation, XSS tag sanitization, and rate-limiting per key.",
    services: [
      {
        title: "Security & API Engineering",
        details: "Crypto-secure API key generation (hk_...), dynamic CORS domain locking, XSS tag stripping, and rate-limiting per API key + IP combo."
      },
      {
        title: "Admin Dashboard",
        details: "Server-rendered EJS dark-mode administrative dashboard with session authentication (express-session + connect-mongo) and message management."
      }
    ],
    images: [
      "/assets/images/contacthub_preview.jpg",
      "/assets/images/project1.avif",
      "/assets/images/project 2.avif"
    ],
    tags: ["Node.js", "Express", "MongoDB", "EJS", "Security", "Rate-Limiting"],
    year: 2025,
    link: "https://github.com/CodeWithMe072/contact-hub"
  },

  neva: {
    id: "neva",
    title: "Neva",
    subtitle: "Distributed Microservices Chat & Search",
    description:
      "A scalable microservice architecture separating authentication, chat streaming, search indexing, and user profile management into dedicated Express.js services. Features RabbitMQ asynchronous event messaging, Drizzle ORM schema management, and MySQL transactional persistence.",
    services: [
      {
        title: "Microservices & Message Queues",
        details: "Express.js microservices communicating asynchronously via RabbitMQ (amqplib) event streams."
      },
      {
        title: "Database Architecture",
        details: "Drizzle ORM with MySQL2, JWT authentication, Zod schema validation, and bcrypt password hashing."
      }
    ],
    images: [
      "/assets/images/neva_preview.jpg",
      "/assets/images/project 3.avif",
      "/assets/images/project1.avif"
    ],
    tags: ["Express.js", "Microservices", "RabbitMQ", "MySQL", "Drizzle ORM", "Zod"],
    year: 2025,
    link: "https://github.com/CodeWithMe072/neva"
  },

  eccommanager: {
    id: "eccommanager",
    title: "Eccom Manager",
    subtitle: "E-Commerce Operations & Inventory Backend",
    description:
      "An operational e-commerce backend system featuring Redis API response caching, Cloudinary media upload streams, Mongoose ODM database schemas, EJS management dashboards, Google OAuth authentication, and automated email notifications via Nodemailer & Resend API.",
    services: [
      {
        title: "Backend Operations",
        details: "Express v5 REST APIs, MongoDB schema modeling, Redis performance caching, and Cloudinary image upload pipelines."
      },
      {
        title: "Auth & Communication",
        details: "JWT + Cookie authorization, Google OAuth integration via googleapis, and transaction email notifications via Nodemailer & Resend."
      }
    ],
    images: [
      "/assets/images/eccom_preview.jpg",
      "/assets/images/project 2.avif",
      "/assets/images/project 3.avif"
    ],
    tags: ["Node.js", "Express", "MongoDB", "Redis", "Cloudinary", "Google OAuth"],
    year: 2025,
    link: "https://github.com/CodeWithMe072/eccom-manager"
  },

  streamer: {
    id: "streamer",
    title: "Streamer HLS",
    subtitle: "Custom 5-Chunk Window Video Streaming",
    description:
      "A high-performance Node.js video streaming server implementing a custom 5-chunk sliding window caching mechanism (2 previous, 1 current, 2 next chunks). Powered by FFmpeg-static for automated video segmenting and smooth HTTP byte-range video playback.",
    services: [
      {
        title: "Streaming Architecture",
        details: "Custom 5-chunk buffer allocation strategy for zero-stutter video seeking and adaptive HTTP byte-range slicing."
      },
      {
        title: "Media Processing",
        details: "FFmpeg-static automated HLS video segmentation, custom control visualization, and bandwidth optimization."
      }
    ],
    images: [
      "/assets/images/streamer_preview.jpg",
      "/assets/images/project1.avif",
      "/assets/images/project 3.avif"
    ],
    tags: ["Node.js", "Express", "FFmpeg", "HLS", "Video Streaming", "HTTP Range"],
    year: 2024,
    link: "https://github.com/CodeWithMe072/hls-streamer"
  }
};

const tools = {
  python: {
    name: "Python",
    category: "Server-Side",
    overview:
      "Python is a versatile backend language widely used for building APIs, automation, data processing, and scalable applications. Its clean syntax and large ecosystem make it ideal for rapid development.",
    howIUseIt:
      "I use Python to build backend logic, authentication workflows, API endpoints, and automation scripts. It helps me implement business rules efficiently across large systems.",
    why:
      "Reliable, developer-friendly, and powerful enough for enterprise-level backend systems.",
    invert: false,
    revert: false,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },

  django: {
    name: "Django",
    category: "Server-Side",
    overview:
      "Django is a high-level backend framework that provides built-in authentication, ORM, admin, and security features. It enables fast development while maintaining strong structure.",
    howIUseIt:
      "I use Django to build full backend architectures, admin dashboards, database layers, and API systems for real-world products. It helps enforce clean architecture and scalability.",
    why:
      "It's secure, scalable, and dramatically speeds up backend development.",
    invert: true,
    revert: true,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
  },

  DRF: {
    name: "Django REST Framework",
    category: "Server-Side",
    overview:
      "DRF is a powerful API framework that simplifies building robust REST APIs with serialization, permissions, and token-based authentication.",
    howIUseIt:
      "I use DRF to develop production-grade APIs for dashboards, e-commerce systems, and mobile apps with clean request/response handling.",
    why:
      "It provides a complete toolkit for secure and scalable API development.",
    invert: true,
    revert: false,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/djangorest/djangorest-original.svg"
  },

  nodejs: {
    name: "Node.js",
    category: "Server-Side",
    overview:
      "Node.js is a fast, event-driven backend runtime ideal for building scalable APIs and real-time applications. It's widely used in modern backend systems.",
    howIUseIt:
      "I use Node.js to build lightweight REST APIs, microservices, and real-time backend processes that require non-blocking operations.",
    why:
      "Its speed and event-driven nature make it great for real-time and high-throughput systems.",
    invert: false,
    revert: false,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },

  express: {
    name: "Express.js",
    category: "Server-Side",
    overview:
      "Express is a minimal and flexible backend framework for Node.js that provides routing, middleware, and rapid API development capabilities.",
    howIUseIt:
      "I use Express to create structured API endpoints, authentication layers, middleware pipelines, and microservices.",
    why:
      "Simple, fast, and highly customizable — perfect for modular backend development.",
    invert: true,
    revert: true,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
  },

  websockets: {
    name: "WebSockets",
    category: "Server-Side",
    overview:
      "WebSockets enable real-time, two-way communication between client and server, essential for live data applications.",
    howIUseIt:
      "I use WebSockets to build real-time features like chat systems, notifications, live dashboards, and instant data updates.",
    why:
      "Provides low-latency communication and a seamless real-time experience.",
    invert: true,
    revert: true,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg"
  },

  mysql: {
    name: "MySQL",
    category: "Database",
    overview:
      "MySQL is a reliable SQL database used for structured data and transactional applications. It works well for e-commerce and enterprise systems.",
    howIUseIt:
      "I design relational schemas, write optimized queries, and manage data operations for backend functionality.",
    why:
      "Stable, efficient, and widely supported across all platforms.",
    invert: false,
    revert: false,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  },

  postgresql: {
    name: "PostgreSQL",
    category: "Database",
    overview:
      "PostgreSQL is a powerful SQL database known for indexing, performance, and advanced query capabilities.",
    howIUseIt:
      "I use PostgreSQL for large-scale applications requiring complex relational models and high-speed querying.",
    why:
      "Provides excellent performance and reliability for enterprise applications.",
    invert: false,
    revert: false,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
  },

  mongodb: {
    name: "MongoDB",
    category: "Database",
    overview:
      "MongoDB is a NoSQL document-based database ideal for flexible schemas and dynamic data structures.",
    howIUseIt:
      "I use MongoDB for dashboards, analytics tools, and systems that require unstructured or rapidly changing data.",
    why:
      "Fast, scalable, and perfect for modern applications with fluid data models.",
    invert: false,
    revert: false,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  },

  redis: {
    name: "Redis",
    category: "Database",
    overview:
      "Redis is an in-memory database that provides ultra-fast read/write operations, caching, and queue management.",
    howIUseIt:
      "I use Redis for caching API responses, managing sessions, rate-limiting, and speeding up heavy backend operations.",
    why:
      "Massively improves performance and reduces load on primary databases.",
    invert: false,
    revert: false,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
  },

  html: {
    name: "HTML",
    category: "Frontend",
    overview:
      "HTML defines the structure, layout, and semantic foundation of web pages. It's the core of all frontend development.",
    howIUseIt:
      "I build clean, accessible page structures before adding styling or backend-driven dynamic content.",
    why:
      "Provides the backbone for every user interface.",
    invert: false,
    revert: false,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },

  css: {
    name: "CSS",
    category: "Frontend",
    overview:
      "CSS controls visual design, layouts, animations, and responsiveness for web interfaces.",
    howIUseIt:
      "I use CSS to create modern UI designs, responsive grids, flex layouts, and smooth transitions.",
    why:
      "Transforms basic structure into a polished, user-friendly interface.",
    invert: false,
    revert: false,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },

  javascript: {
    name: "JavaScript",
    category: "Frontend",
    overview:
      "JavaScript adds interactivity, dynamic logic, and real-time behavior to the frontend.",
    howIUseIt:
      "I build dynamic components, handle API calls, manipulate DOM elements, and manage frontend logic.",
    why:
      "Essential for building interactive, modern websites.",
    invert: false,
    revert: false,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },

  git: {
    name: "Git",
    category: "Version Control",
    overview:
      "Git is a distributed version control system used to track code changes and manage collaboration.",
    howIUseIt:
      "I manage project versions, create branches, resolve conflicts, and maintain clean development workflows.",
    why:
      "Critical for team collaboration and safe code management.",
    invert: false,
    revert: false,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  },

  github: {
    name: "GitHub",
    category: "Version Control",
    overview:
      "GitHub hosts repositories, manages pull requests, issues, and supports team workflows.",
    howIUseIt:
      "I host my projects, collaborate via PRs, manage documentation, and track tasks.",
    why:
      "Central platform for code storage and developer collaboration.",
    invert: true,
    revert: true,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  },

  aws: {
    name: "AWS",
    category: "Deployment",
    overview:
      "AWS is a cloud platform offering servers, storage, databases, and deployment tools for production-grade applications.",
    howIUseIt:
      "I deploy backend systems, configure servers, manage databases, and handle security & environment setup.",
    why:
      "Highly scalable, reliable, and suitable for enterprise deployments.",
    invert: false,
    revert: false,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
  },

  render: {
    name: "Render",
    category: "Deployment",
    overview:
      "Render is a simple cloud platform for deploying backend apps, APIs, and web services with minimal configuration.",
    howIUseIt:
      "I deploy Django/Node projects, manage environment variables, and run production builds.",
    why:
      "Fast, developer-friendly, and easy for small-to-medium projects.",
    invert: true,
    revert: true,
    image: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/render.svg"
  },

  railway: {
    name: "Railway",
    category: "Deployment",
    overview:
      "Railway is a modern cloud hosting platform designed for quick deployments and managed databases.",
    howIUseIt:
      "I deploy APIs, host databases, and manage environments with automated builds and logs.",
    why:
      "Extremely simple and efficient for rapid releases.",
    invert: true,
    revert: true,
    image: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/railway.svg"
  },

  ngrok: {
    name: "Ngrok",
    category: "Deployment",
    overview:
      "Ngrok creates secure tunnels to expose local servers to the internet for testing and demos.",
    howIUseIt:
      "I test webhooks, share API demos with clients, and debug backend flows without deployment.",
    why:
      "Perfect for development, integration testing, and client previews.",
    invert: true,
    revert: true,
    image: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/ngrok.svg"
  },

  postman: {
    name: "Postman",
    category: "Developer Tools",
    overview:
      "Postman is an API testing and debugging tool used to validate backend endpoints.",
    howIUseIt:
      "I test requests, inspect headers, simulate authentication, and document API workflows.",
    why:
      "Critical for reliable and accurate backend development.",
    invert: false,
    revert: false,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
  },

  vscode: {
    name: "VS Code",
    category: "Developer Tools",
    overview:
      "VS Code is a fast, lightweight, and highly customizable code editor.",
    howIUseIt:
      "I write backend, frontend, and DevOps code with extensions for debugging and formatting.",
    why:
      "Boosts productivity with powerful tools and clean workflow.",
    invert: false,
    revert: false,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
  },

  npm: {
    name: "NPM",
    category: "Developer Tools",
    overview:
      "NPM is the package manager for Node.js, used to install and manage JavaScript libraries.",
    howIUseIt:
      "I handle dependencies, manage scripts, and configure JS-based projects.",
    why:
      "Core tool for any JavaScript development workflow.",
    invert: false,
    revert: false,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
  },

  chromeDevTools: {
    name: "Chrome DevTools",
    category: "Developer Tools",
    overview:
      "Chrome DevTools provides powerful debugging tools for frontend performance, layout, and network analysis.",
    howIUseIt:
      "I inspect elements, debug JS issues, verify API calls, and optimize page performance.",
    why:
      "Essential for refining UI behavior and frontend debugging.",
    invert: false,
    revert: false,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg"
  }
};

const experiences = [
  {
    id: "freelance",
    company: "Freelance / Independent",
    role: "Freelance Backend & Full-Stack Developer",
    employmentType: "Self-Employed",
    period: "Jul 2026 – Present",
    startDate: "2026-07",
    endDate: "Present",
    isCurrent: true,
    duration: "Present",
    location: "Remote / Haryana, India",
    description: "Architecting and scaling production real-time applications, custom backend microservices, and end-to-end full-stack products for personal projects and clients.",
    responsibilities: [
      "Engineered Buzz (noira.sbs) — real-time stealth chat app with Socket.IO delivery/seen receipts, typing events, 30s reconnect grace, WebRTC audio/video calling, Cloudflare R2 media storage, BullMQ AI frame interpolation, and 30-min auto-deletion cron.",
      "Built ecom_manager (backcrafter.shop) — e-commerce management dashboard utilizing Google Drive API & raw filesystem streams for multi-tenant data sync.",
      "Created Asset Infinity Clone (asset-infity.netlify.app) — enterprise asset tracking software with multi-tier MongoDB lifecycle logging.",
      "Built Employee Salary Prediction System — end-to-end machine learning pipeline with Pandas/NumPy preprocessing, Scikit-learn models, and Flask serving API."
    ],
    metrics: [
      { label: "Projects Shipped", value: "4+ Live" },
      { label: "Primary Focus", value: "Real-time & Distributed" }
    ],
    technologies: ["Node.js", "Express.js", "Socket.IO", "WebRTC", "Redis", "Cloudflare R2", "BullMQ", "MongoDB", "Python", "Flask", "React"]
  },
  {
    id: "marcnc",
    company: "MARCNC",
    role: "Backend Developer",
    employmentType: "Full-time",
    period: "Jun 2026 – Jul 2026",
    startDate: "2026-06",
    endDate: "2026-07-15",
    isCurrent: false,
    duration: "1.5 mos (Ended Jul 15, 2026)",
    location: "Haryana, India",
    description: "Engineered core backend infrastructure and high-concurrency REST APIs for an enterprise Hospital Management System handling billing, ERP, inventory, and multi-role operations across clinical departments.",
    responsibilities: [
      "Architected multi-role RBAC security & JWT authentication governing 5+ user roles (Admin, Billing, Pharmacy, Clinical Staff, etc.).",
      "Redesigned MongoDB aggregations and SQL indexing strategy, cutting high-frequency billing route query execution time by ~40%.",
      "Implemented Redis caching and queue-based background workers for asynchronous report generation and automated notification dispatching.",
      "Integrated government health scheme APIs (ECHS) mapping external endpoints (roomChargesList, consultationList, expenseList) seamlessly into internal billing models."
    ],
    metrics: [
      { label: "Query Speedup", value: "~40%" },
      { label: "User Roles Managed", value: "5+" }
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "SQL", "Redis", "JWT", "RBAC", "REST APIs", "ECHS API"]
  },
  {
    id: "mtb",
    company: "MTB Pvt. Ltd",
    role: "Full-Stack Development Instructor",
    employmentType: "Full-time",
    period: "May 2025 – Jan 2026",
    startDate: "2025-05",
    endDate: "2026-01",
    isCurrent: false,
    duration: "9 mos",
    location: "Haryana, India",
    description: "Instructed 20+ students per cohort in Python, Django, Node.js, databases, and modern JS frameworks, focusing on practical API design, deployment pipelines, and backend architecture.",
    responsibilities: [
      "Designed comprehensive backend & full-stack curriculum covering REST APIs, ORMs, authentication, and database optimization.",
      "Mentored student cohorts in shipping production-ready backend code; achieved 100% project deployment completion by course end.",
      "Maintained high student satisfaction and instructional excellence with a 4.7/5.0 overall instructor rating."
    ],
    metrics: [
      { label: "Instructor Rating", value: "4.7 / 5.0" },
      { label: "Student Success Rate", value: "100% Deployed" }
    ],
    technologies: ["HTML", "CSS", "Node.js", "JavaScript", "MySQL", "MongoDB", "WebSocket", "Tailwind CSS", "Express"]
  },
  {
    id: "pisoft",
    company: "Pisoft Informatics",
    role: "Backend Developer Intern",
    employmentType: "Internship",
    period: "Aug 2024 – Jan 2025",
    startDate: "2024-08",
    endDate: "2025-01",
    isCurrent: false,
    duration: "6 mos",
    location: "Haryana, India",
    description: "Developed robust Django & MySQL backend components for an e-commerce platform powering product cataloging, cart management, checkout orders, and inventory sync.",
    responsibilities: [
      "Designed and normalized relational database schemas across 8+ core entities to guarantee transactional consistency.",
      "Optimized database queries and introduced targeted indexing on high-frequency tables, cutting API response times by ~30%."
    ],
    metrics: [
      { label: "API Speedup", value: "~30%" },
      { label: "Relational Entities", value: "8+" }
    ],
    technologies: ["Python", "Django", "MySQL", "REST APIs", "Database Indexing", "Relational Schema Design"]
  }
];



