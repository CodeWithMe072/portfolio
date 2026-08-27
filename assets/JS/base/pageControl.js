let urlEndpoint = window.location.pathname

let bodyHtml = `
  <div class="overlay-conatiner">
    <div class="overlay"></div>
  </div>
  <div class="ringOverlay">
        <div class="ring ring1 rotate">
            <div class="left">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                    class="size-7 text-emerald-300 rotateStar">
                    <path fill="rgb(145, 75, 241)" d="M12 1s0 7-2 9-9 2-9 2 7 0 9 2 2 9 2 9 0-7 2-9 9-2 9-2-7 0-9-2-2-9-2-9">
                    </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                    class="size-7 text-emerald-300 rotateStar">
                    <path fill="rgb(145, 75, 241)" d="M12 1s0 7-2 9-9 2-9 2 7 0 9 2 2 9 2 9 0-7 2-9 9-2 9-2-7 0-9-2-2-9-2-9">
                    </path>
                </svg>
            </div>

        </div>
        <div class="ring ring2 ANrotate" style="animation-duration: 18s;">
            <div class="left">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                    class="size-14 text-emerald-300 rotateStar">
                    <path fill="rgb(145, 75, 241)" d="M12 1s0 7-2 9-9 2-9 2 7 0 9 2 2 9 2 9 0-7 2-9 9-2 9-2-7 0-9-2-2-9-2-9">
                    </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                    class="size-14 text-emerald-300 rotateStar">
                    <path fill="rgb(145, 75, 241)" d="M12 1s0 7-2 9-9 2-9 2 7 0 9 2 2 9 2 9 0-7 2-9 9-2 9-2-7 0-9-2-2-9-2-9">
                    </path>
                </svg>
            </div>
        </div>
        <div class="ring ring3 rotate" style="animation-duration: 21s;">
            <div class="left">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                    class="size-21 text-emerald-300 rotateStar">
                    <path fill="rgb(145, 75, 241)" d="M12 1s0 7-2 9-9 2-9 2 7 0 9 2 2 9 2 9 0-7 2-9 9-2 9-2-7 0-9-2-2-9-2-9">
                    </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                    class="size-21 text-emerald-300 rotateStar">
                    <path fill="rgb(145, 75, 241)" d="M12 1s0 7-2 9-9 2-9 2 7 0 9 2 2 9 2 9 0-7 2-9 9-2 9-2-7 0-9-2-2-9-2-9">
                    </path>
                </svg>
            </div>
        </div>
        <div class="ring ring4 ANrotate"  style="animation-duration: 23s;">
            <div class="left">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                    class="size-28 text-emerald-300 rotateStar">
                    <path fill="rgb(145, 75, 241)" d="M12 1s0 7-2 9-9 2-9 2 7 0 9 2 2 9 2 9 0-7 2-9 9-2 9-2-7 0-9-2-2-9-2-9">
                    </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                    class="size-28 text-emerald-300 rotateStar">
                    <path fill="rgb(145, 75, 241)" d="M12 1s0 7-2 9-9 2-9 2 7 0 9 2 2 9 2 9 0-7 2-9 9-2 9-2-7 0-9-2-2-9-2-9">
                    </path>
                </svg>
            </div>
        </div>
    </div>
  <header id="header">
    <nav id="nav">
      <div class="navItems">
        <a href="/" data-action="/" class="navanchor">
        <div class="navbg"></div>
          <div class="achoerdiv">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="rgb(255, 255, 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              style="width: 100%; height: 100%">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </div>
          <div class="navTitle">Home</div>
        </a>
        <a href="/projects" data-action="/projects" class="navanchor" id="navProjectBtn">
        <div class="navbg"></div>
          <div class="achoerdiv">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="rgb(255, 255, 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              style="width: 100%; height: 100%">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <div class="navTitle">projects</div>
        </a>
        <a href="/tools" data-action="/tools" class="navanchor">
        <div class="navbg"></div>
          <div class="achoerdiv">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="rgb(255, 255, 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              style="width: 100%; height: 100%">
              <path
                d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z">
              </path>
            </svg>
          </div>
          <div class="navTitle">tools</div>
        </a>
        <a href="/experiences" data-action="/experiences" class="navanchor">
        <div class="navbg"></div>
          <div class="achoerdiv">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="rgb(255, 255, 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              style="width: 100%; height: 100%">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          </div>
          <div class="navTitle">EXPERIENCE</div>
        </a>
        <a href="/contact" data-action="/contact" class="navanchor" id="navContactBtn">
        <div class="navbg"></div>
          <div class="achoerdiv">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="rgb(255, 255, 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              style="width: 100%; height: 100%">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <div class="navTitle">contact</div>
        </a>
      </div>
    </nav>
  </header>

    <div class="showImageConatiner" id="showImageConatiner">
    <div id="bluarPage"></div>
            <div class="leftControl" id="leftControl">
                <div class="controlBox">
                    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>

                </div>
            </div>
            <div class="imageConatiner" id="imageConatiner">
                
                
            </div>
            <div class="rightControl" id="rightControl">
                <div class="controlBox">
                    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
  <section id="main">
    <div class="mainarea">
      <aside class="profile" id="profile">
        <div class="profile-conatiner">
          <div class="profile-content">
            <div class="profile-image">
              <img src="/assets/sanjay.jpg" alt="" />
            </div>
            <div class="profile-desc">
              <h2 id="name" class="name">Sanjay chouhan</h2>
              <span>Backend Developer & Full-Stack Engineer Hisar, India</span>
              <div class="socialMedia-icons">
                <a href="https://dribbble.com" target="_blank" rel="noopener" class="navanchor icon" title="Dribbble">
                  <div class="navbg"></div>
                  <div class="achoerdiv icondiv">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="rgb(255, 255, 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      style="width: 60%; height: 60%">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path
                        d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32">
                      </path>
                    </svg>
                  </div>
                  <div class="navTitle">Dribbble</div>
                </a>
                <a href="https://github.com/CodeWithMe072" target="_blank" rel="noopener" class="navanchor icon" title="GitHub">
                  <div class="navbg"></div>
                  <div class="achoerdiv icondiv">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="rgb(255, 255, 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      style="width: 60%; height: 60%">
                      <g>
                        <path
                          d="M9.096 21.25v-3.146a3.33 3.33 0 0 1 .758-2.115c-3.005-.4-5.28-1.859-5.28-5.798c0-1.666 1.432-3.89 1.432-3.89c-.514-1.13-.5-3.084.06-3.551c0 0 1.95.175 3.847 1.75c1.838-.495 3.764-.554 5.661 0c1.897-1.575 3.848-1.75 3.848-1.75c.558.467.573 2.422.06 3.551c0 0 1.432 2.224 1.432 3.89c0 3.94-2.276 5.398-5.28 5.798a3.33 3.33 0 0 1 .757 2.115v3.146" />
                        <path
                          d="M3.086 16.57c.163.554.463 1.066.878 1.496c.414.431.932.77 1.513.988a4.46 4.46 0 0 0 3.62-.216" />
                      </g>
                    </svg>
                  </div>
                  <div class="navTitle">GitHub</div>
                </a>
                <a href="https://www.linkedin.com/in/sanjay-chouhan-667069301/" target="_blank" rel="noopener" class="navanchor icon" title="LinkedIn">
                  <div class="navbg"></div>
                  <div class="achoerdiv icondiv">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 14 14" fill="none"
                      stroke="rgb(255, 255, 255)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                      style="width: 60%; height: 60%">
                      <path
                        d="M3.574 1.767a1.316 1.316 0 0 1-1.287 1.326A1.346 1.346 0 0 1 .99 1.767A1.326 1.326 0 0 1 2.287.5a1.316 1.316 0 0 1 1.287 1.267M1.129 5.449c0-.762.485-.643 1.158-.643c.673 0 1.148-.119 1.148.643v7.424c0 .772-.485.614-1.148.614c-.663 0-1.158.158-1.158-.614zm4.306.001c0-.426.158-.585.405-.634c.248-.05 1.099 0 1.396 0c.297 0 .416.485.406.851a2.485 2.485 0 0 1 2.217-.99a2.97 2.97 0 0 1 3.148 3.098v5.068c0 .772-.475.614-1.149.614c-.673 0-1.148.158-1.148-.614V8.884A1.425 1.425 0 0 0 9.206 7.34A1.435 1.435 0 0 0 7.74 8.914v3.959c0 .772-.485.614-1.158.614c-.673 0-1.148.158-1.148-.614V5.449Z" />
                    </svg>
                  </div>
                  <div class="navTitle">LinkedIn</div>
                </a>
                <a href="https://www.instagram.com/codewithme072/" target="_blank" rel="noopener" class="navanchor icon" title="Instagram">
                  <div class="navbg"></div>
                  <div class="achoerdiv icondiv">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="rgb(255, 255, 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      style="width: 60%; height: 60%">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                  <div class="navTitle">Instagram</div>
                </a>
                <a href="mailto:sanjaystar14581@gmail.com" class="navanchor icon" title="Email">
                  <div class="navbg"></div>
                  <div class="achoerdiv icondiv">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="rgb(255, 255, 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      style="width: 60%; height: 60%">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div class="navTitle">Email</div>
                </a>
              </div>
            </div>
          </div>
         
          <div class="contact-btn-div">
            <button id="contactBtn" class="contact-btn">
              <span id="span1" class="span" style="top: -25px; opacity: 0">Let's Talk</span>
              <span id="span2" class="span" style="top: 14px; opacity: 1">Let's Talk</span>
            </button>
          </div>
        </div>
      </aside> 
       <aside id="content" class="content">
          </aside>
    </div>
  </section>
  <footer id="footer" style="height: 45vh;">
    <span class="footertext">Made by <span class="specalKeyword"> Star </span> | Powered by ElvaNemi</span>
  </footer>
`
async function getHtml(filename) {
    let response = await fetch(`/${filename}`)
    let data = await response.text()
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    return doc
}

function matchRoute(path) {
    // exact match first
    if (routes[path]) return routes[path];

    // dynamic match
    const dynamicRouteKey = Object.keys(routes).find(key => {
        if (!key.includes(":")) return false;

        const base = key.split("/:")[0];
        return path.startsWith(base + "/");
    });

    if (dynamicRouteKey) {
        const base = dynamicRouteKey.split("/:")[0];
        const slug = path.replace(base + "/", "");

        const route = routes[dynamicRouteKey];
        route.params = { slug };
        return route;
    }

    return null;
}

const routes = {
    "/": {
        html: "pages/home.html",
        script: "/assets/JS/index/script.js",
        title: "Sanjay Chouhan — Backend Developer & Full-Stack Engineer",
        description: "Portfolio of Sanjay Chouhan, a Backend-focused Full-Stack Engineer specializing in Node.js, Express, MongoDB, Redis, WebSockets, WebRTC, and Python."
    },
    "/contact": {
        html: "pages/contact.html",
        script: "/assets/JS/contact/contact.js",
        title: "Contact | Sanjay Chouhan — Backend Developer",
        description: "Get in touch with Sanjay Chouhan for backend engineering, API development, real-time web applications, or freelance opportunities."
    },
    "/projects": {
        html: "pages/projects.html",
        script: "/assets/JS/index/script.js",
        title: "Projects | Sanjay Chouhan — Real-time & Backend Work",
        description: "Explore live projects by Sanjay Chouhan including Buzz (WebRTC/Socket.IO messenger), ecom_manager, Asset Infinity Clone, and ML APIs."
    },
    "/tools": {
        html: "pages/tools.html",
        script: "/assets/JS/index/script.js",
        title: "Technical Stack & Tools | Sanjay Chouhan",
        description: "Technical toolset and stack expertise of Sanjay Chouhan: Node.js, Express, MongoDB, Redis, Python, Django, MySQL, PostgreSQL, AWS, and Git."
    },
    "/experiences": {
        html: "pages/experiences.html",
        script: "/assets/JS/index/script.js",
        title: "Experience | Sanjay Chouhan — Backend Developer",
        description: "Work history and engineering experience of Sanjay Chouhan across freelance development, MARCNC hospital ERP backend, and MTB Pvt. Ltd."
    },
    "/projects/:slug": {
        html: "pages/projectView.html",
        script: "/assets/JS/index/script.js",
        title: "Project View | Sanjay Chouhan",
        description: "Detailed architecture overview and technical breakdown of portfolio projects built by Sanjay Chouhan."
    }
};

async function handelPage(urlEndpoint) {
    document.documentElement.classList.add("no-scroll");
    document.body.classList.add("no-scroll");

    const route = matchRoute(urlEndpoint);

    if (!route) {
        console.warn("Route not found:", urlEndpoint);
        return;
    }

    const html = await getHtml(route.html);
    const parser = new DOMParser();
    const baseDoc = parser.parseFromString(bodyHtml, "text/html");

    document.body.classList.add("fram-body-bg-color");

    const newContent = html.getElementById("content");
    const targetContent = baseDoc.getElementById("content");

    if (!newContent || !targetContent) return;

    targetContent.innerHTML = newContent.innerHTML;

    // ✅ Inject HTML safely
    document.body.innerHTML += baseDoc.body.innerHTML;
    document.title = route.title;
    if (typeof updateNavActiveState === "function") {
        updateNavActiveState(urlEndpoint);
    }
    document.getElementById("header").style.zIndex = ""
    const header = document.getElementById("header");
    header.style.top = header.offsetTop + "px";
    void header.offsetHeight;
    header.style.top = "0";
    
    // ✅ Get real DOM elements (important fix)
    const realContent = document.getElementById("content");
    const realProfile = document.getElementById("profile");

    // ✅ Reset + restart animation properly
    realContent.classList.remove("mainAimationContent");
    realProfile.classList.remove("mainAimationProfile");

    void realContent.offsetWidth;
    void realProfile.offsetWidth;


    // ✅ Apply section-based scroll animations
    const sections = document.querySelectorAll("#content section, #content .section");

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("section-animate-active");
                sectionObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    sections.forEach(sec => {
        sec.classList.remove("section-animate-active");
        sec.classList.add("section-animate");
        sectionObserver.observe(sec);
    });

    // ✅ Remove old page script safely
    const oldScript = document.getElementById("mainPage");
    if (oldScript) oldScript.remove();

    // ✅ Always reload base.js
    const oldBase = document.querySelector('script[src="/assets/JS/base/base.js"]');
    if (oldBase) oldBase.remove();

    const baseScript = document.createElement("script");
    baseScript.src = "/assets/JS/base/base.js";
    baseScript.defer = true;
    document.body.appendChild(baseScript);

    // ✅ Load page-specific JS with cache-busting
    if (route.script) {
        const pageScript = document.createElement("script");
        pageScript.id = "mainPage";
        pageScript.defer = true;
        pageScript.src = route.script + "?v=" + Date.now();
        document.body.appendChild(pageScript);
    }

    // ✅ Initialize Intro Screen sequence
    initIntroScreen();
}

function runLoadingSequence() {
    let loader = document.getElementById("loader");
    let loader2 = document.querySelector(".loader2");
    let loaddiv = document.querySelector(".loaddiv");
    let counterElem = document.getElementById("counter");

    if (counterElem) {
        counterElem.classList.remove("active");
    }
    if (loader) {
        loader.classList.remove("active");
        if (loader2) loader2.classList.remove("active");
        if (loaddiv) loaddiv.classList.remove("active");

        void loader.offsetWidth; // Force reflow to restart CSS loading animations cleanly from 0

        loader.classList.add("active");
        if (loader2) loader2.classList.add("active");
        if (loaddiv) loaddiv.classList.add("active");
        if (counterElem) counterElem.classList.add("active");
    }

    startCounter();
    setTimeout(() => {
        const loaderContainer = document.getElementById("lodingConatiner");
        const realContent = document.getElementById("content");
        const realProfile = document.getElementById("profile");
        if (loaderContainer) {
            loaderContainer.classList.add("hide-loader");
            document.documentElement.classList.remove("no-scroll");
            document.body.classList.remove("no-scroll");
            const header = document.getElementById("header");
            if (header) header.style.zIndex = "1000000000000";
            if (realContent) realContent.classList.add("mainAimationContent");
            if (realProfile) realProfile.classList.add("mainAimationProfile");
        }
    }, 8600);
}

function playBackgroundAudio() {
    const audio = document.getElementById("bg-audio");
    const card = document.getElementById("mp-card");
    const icon = document.getElementById("mp-icon");

    if (!audio) return;

    // Check if tab is active when audio tries to play for the first time
    if (document.hidden || document.visibilityState !== "visible") {
        if (typeof audioPausedByTabSwitch !== "undefined") {
            audioPausedByTabSwitch = true;
        } else {
            window.audioPausedByTabSwitch = true;
        }
        return;
    }

    audio.muted = false;
    audio.currentTime = 0; // Starts song from beginning right as site reveals!
    audio.volume = 1;
    if (typeof broadcastAudioStart === "function") broadcastAudioStart();
    audio.play().then(() => {
        if (card) {
            card.classList.remove("paused");
            card.classList.add("playing");
        }
        if (icon) {
            const pauseIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="white"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`;
            icon.innerHTML = pauseIconSVG;
        }
    }).catch(err => {
        console.log("Audio play error after loading:", err);
    });
}

// Settles every ring onto a gap-free circle by the shortest route.
//
// Any dash offset congruent to 0 (mod the pattern period) renders as a complete circle,
// so each ring settles to whichever multiple of the period is nearest its current offset.
// In practice that is 0: a ring still drawing in simply grows to full, and one already
// erasing closes its gap back up. Both read as completing. Carrying an erasing ring
// *forward* to the next complete state instead would cost it nearly a full extra
// revolution, which is far more motion than the finish needs.
//
// Driven with the Web Animations API rather than a CSS transition: the interpolation has
// to start from the exact value the keyframes were mid-flight on, and a transition only
// fires if it already exists in the before-change style — declaring it alongside the
// value change (as this previously did) silently does nothing and the rings snap.
function settleIntroRings(introRingAnim) {
    if (!introRingAnim) return;

    const circles = introRingAnim.querySelectorAll(".preloader-circle");

    circles.forEach(circle => {
        const live = window.getComputedStyle(circle);
        const period = parseFloat(live.strokeDasharray) * 2; // dash + gap
        const offset = parseFloat(live.strokeDashoffset) || 0;
        const opacity = live.opacity;
        const settled = Math.round(offset / period) * period;

        // Drop the keyframes, pinning the live values so there is no jump at handover.
        circle.style.animation = "none";
        circle.style.strokeDashoffset = offset + "px";
        circle.style.opacity = opacity;

        if (typeof circle.animate !== "function") {
            circle.style.strokeDashoffset = settled + "px";
            circle.style.opacity = "1";
            return;
        }

        circle.animate(
            [
                { strokeDashoffset: offset + "px", opacity: opacity },
                { strokeDashoffset: settled + "px", opacity: 1 }
            ],
            { duration: 900, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "forwards" }
        );
    });

    introRingAnim.classList.add("settle");
}

function initIntroScreen() {
    const introScreen = document.getElementById("introScreen");
    const enterBtn = document.getElementById("enterBtn");
    const introRingAnim = document.getElementById("introRingAnim");

    if (!introScreen || !enterBtn) {
        runLoadingSequence();
        return;
    }

    // Step 1: let the ripple run a full 2.4s cycle, settle the rings forward onto a
    // gap-free circle (0.9s), hold that completed state, then fade out and reveal
    // the title + Enter button.
    setTimeout(() => {
        settleIntroRings(introRingAnim);

        setTimeout(() => {
            if (introRingAnim) introRingAnim.classList.add("fade-out");
            introScreen.classList.add("ready");
        }, 1200);
    }, 2600);

    // Step 2: On Enter button click, pre-start audio muted (satisfying browser autoplay policy) and trigger loading screen
    enterBtn.addEventListener("click", () => {
        const audio = document.getElementById("bg-audio");
        if (audio) {
            audio.muted = true;
            audio.volume = 0;
            audio.play().catch(() => {});
        }

        introScreen.classList.add("fade-out");

        setTimeout(() => {
            introScreen.style.display = "none";
            runLoadingSequence();
        }, 800);
    });
}

let count = 1
let finalEnd = 101

function formateNumber(number) {
    return `${number}`.padStart(3, "0")
}
function startCounter() {
    count = 1;
    let counter = document.getElementById("counter");
    if (counter) counter.textContent = formateNumber(0);

    let interval = setInterval(() => {
        if (count >= finalEnd) {   // Counter reaches 100
            clearInterval(interval);
            playBackgroundAudio(); // ✅ Play sound IMMEDIATELY when counter reaches 100!
            return;
        }
        if (counter) counter.textContent = formateNumber(count);
        count++;

    }, 50);
}


document.addEventListener("DOMContentLoaded", () => {
    handelPage(urlEndpoint)
})