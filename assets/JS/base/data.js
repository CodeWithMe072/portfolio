const projects = {
  revo: {
    id: "revo",
    title: "Revo",
    subtitle: "SaaS Framer Template",
    description:
      "Revo is a modern and versatile website template crafted for dynamic businesses and creative professionals. It offers a sleek design, strong visual identity, and customizable components to elevate your online presence.",

    services: [
      {
        title: "Branding",
        details: "Logo design, brand strategy, and complete visual identity creation."
      },
      {
        title: "Development",
        details:
          "Interactive and high-performance website development with Framer, optimized for smooth user experience."
      }
    ],

    images: [
      "/assets/images/project 2.avif",
      "/assets/images/project 3.avif",
      "/assets/images/project1.avif"
    ],

    tags: ["SaaS", "Branding", "Framer", "UI/UX"],
    year: 2025,
    link: "https://seera.framer.website/projects/revo"
  },

  revo2: {
    id: "revo2",
    title: "Revo",
    subtitle: "SaaS Framer Template",
    description:
      "Revo is a modern and versatile website template crafted for dynamic businesses and creative professionals. It offers a sleek design, strong visual identity, and customizable components to elevate your online presence.",

    services: [
      {
        title: "Branding",
        details: "Logo design, brand strategy, and complete visual identity creation."
      },
      {
        title: "Development",
        details:
          "Interactive and high-performance website development with Framer, optimized for smooth user experience."
      }
    ],

    images: [
      "/assets/images/project 3.avif",
      "/assets/images/project1.avif",
      "/assets/images/project 2.avif"
    ],

    tags: ["SaaS", "Branding", "Framer", "UI/UX"],
    year: 2025,
    link: "https://seera.framer.website/projects/revo"
  },

  revo3: {
    id: "revo3",
    title: "Revo",
    subtitle: "SaaS Framer Template",
    description:
      "Revo is a modern and versatile website template crafted for dynamic businesses and creative professionals. It offers a sleek design, strong visual identity, and customizable components to elevate your online presence.",

    services: [
      {
        title: "Branding",
        details: "Logo design, brand strategy, and complete visual identity creation."
      },
      {
        title: "Development",
        details:
          "Interactive and high-performance website development with Framer, optimized for smooth user experience."
      }
    ],

    images: [
      "/assets/images/project1.avif",
      "/assets/images/project 2.avif",
      "/assets/images/project 3.avif"
    ],

    tags: ["SaaS", "Branding", "Framer", "UI/UX"],
    year: 2025,
    link: "https://seera.framer.website/projects/revo"
  },
  buzz: {
    id: "buzz",
    title: "Buzz",
    subtitle: "Real-Time Chat Web Application",
    description:
      "A full-stack real-time chat app secretly hidden inside an SSC government portal. A 5-click trigger on the emblem reveals a fully functional Instagram-style messenger with text, image, video, and voice messages — complete with live typing indicators, delivered/seen receipts, emoji reactions, swipe-to-reply, and a full-screen media viewer.",
    services: [
      {
        title: "Backend & Real-Time",
        details: "Node.js + Socket.IO for bi-directional messaging, live presence tracking, typing events, and media upload acknowledgements via Cloudinary."
      },
      {
        title: "Frontend Engineering",
        details: "13-module vanilla JavaScript, mobile-first with touch gestures, voice recording with live waveform visualisation, and audio playback with progress canvas."
      }
    ],
     images: [
      "/assets/images/buzz/image.png",
    ],

    tags: ["Node.js", "Socket.IO", "MongoDB", "Cloudinary", "Vanilla JS", "Mobile-First"],
    year: 2025,
    link: "https://noira.sbs"

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
    image: "/assets/images/tools/Python-logo.png"
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
    image: "/assets/images/tools/django-logo.png"

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
    image: "/assets/images/tools/Django-REST-logo.png"
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
    image: "/assets/images/tools/Node.js_logo.png"
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
    image: "/assets/images/tools/Expressjs-logo.png"
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
    image: "/assets/images/tools/Python-logo.png"
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
    image: "/assets/images/tools/mysql-5-logo.png"
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
    image: "/assets/images/tools/Postgresql_.png"
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
    image: "/assets/images/tools/MongoDB_Logo.png"
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
    image: "/assets/images/tools/radis-logo.png"
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
    image: "/assets/images/tools/HTML5_logo.png"
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
    image: "/assets/images/tools/CSS3_logo.png"
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
    image: "/assets/images/tools/javascript-logo.png"
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
    image: "/assets/images/tools/git-logo.png"
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
    image: "/assets/images/tools/github-logo.png"
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
    image: "/assets/images/tools/AWS_logo.png"
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
    image: "/assets/images/tools/render-logo.png"
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
    image: "/assets/images/tools/Python-logo.png"
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
    image: "/assets/images/tools/Python-logo.png"
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
    image: "/assets/images/tools/Postman-logo.png"
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
    image: "/assets/images/tools/Visual_Studio_Code.png"
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
    image: "/assets/images/tools/Npm-logo.png"
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
    image: "/assets/images/tools/Python-logo.png"
  }
};


