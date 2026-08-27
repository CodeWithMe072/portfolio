// code for contact btn

let index = 0;
function handelBackArrow() {
    let backArrow = document.getElementById("backArrow")
    backArrow.addEventListener("mouseenter", () => {
        let svg = backArrow.querySelector(".arrow svg")
        svg.setAttribute("stroke", "rgb(145, 75, 241)")
        let text = backArrow.querySelector(".arrow-text")
        text.style.transform = "translateX(5px)"
    })
    backArrow.addEventListener("mouseleave", () => {
        let svg = backArrow.querySelector(".arrow svg")
        svg.setAttribute("stroke", "white")
        let text = backArrow.querySelector(".arrow-text")
        text.style.transform = "translateX(0px)"
    })
    backArrow.addEventListener("click", () => {
        changeContent("/projects")
        history.pushState({}, "", `/projects`);
    })
}

function startImageCarousel(index = 0) {
    const showImages = document.querySelectorAll(".showImage")
    const rightControl = document.getElementById("rightControl")
    const leftControl = document.getElementById("leftControl")

    index = Number(index)

    // FIXED navigation boundaries
    const rightIndex = index + 1 >= showImages.length ? index : index + 1
    const leftIndex = index - 1 < 0 ? 0 : index - 1

    rightControl.dataset.index = rightIndex
    leftControl.dataset.index = leftIndex

    const width = showImages[0].offsetWidth
    const translateX = width * index

    showImages.forEach(item => {
        item.style.transition = "all 0.3s ease"
        item.style.transform = `translateX(-${translateX}px)`
    })
}


function handelProjectAllImageHover() {
    const images = document.querySelectorAll(".image")
    images.forEach(img => {
        img.addEventListener("mouseenter", () => {
            const viewImageCursor = img.querySelector(".viewImageCursor")
            const mainarrow = viewImageCursor.querySelector(".mainarrow");
            const text = viewImageCursor.querySelector(".viewProject");

            // Reset state cleanly
            mainarrow.style.transition = "width 1s ease, opacity 0.3s ease";
            mainarrow.style.visibility = "visible";
            mainarrow.style.opacity = "1";
            mainarrow.style.width = "60px";

            // Force reflow
            void mainarrow.offsetWidth;

            // Animate
            mainarrow.style.width = "200px";
            mainarrow.classList.add("active");

            // Show text slightly after expand
            setTimeout(() => {
                text.style.display = "block";
            }, 700);
        })
        img.addEventListener("mouseleave", () => {
            const viewImageCursor = img.querySelector(".viewImageCursor")
            const mainarrow = viewImageCursor.querySelector(".mainarrow");
            const text = viewImageCursor.querySelector(".viewProject");

            // Hide text first
            text.style.display = "none";

            // Shrink smoothly
            mainarrow.style.width = "60px";
            mainarrow.style.opacity = "0";

            setTimeout(() => {
                mainarrow.style.visibility = "hidden";
                mainarrow.classList.remove("active");
            }, 300);
        })
        img.addEventListener("mousemove", (e) => {
            const viewImageCursor = img.querySelector(".viewImageCursor")
            const mainarrow = viewImageCursor.querySelector(".mainarrow");
            const rect = viewImageCursor.getBoundingClientRect();
            console.log(mainarrow)
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            mainarrow.style.left = `${x}px`;
            mainarrow.style.top = `${y}px`;

        })
        img.addEventListener("click", () => {
            let projectName = img.getAttribute("data-project")
            let index = img.getAttribute("data-index")
            setUpAllImage(projectName)
            startImageCarousel(index)
            document.getElementById("bluarPage").style.backdropFilter = "blur(6px)"
            showImageConatiner.style.transition = "all 0.5s ease"
            showImageConatiner.classList.add("active")
        })
    })


}
function handeIdeaCardHover() {
    const ideaCards = document.querySelectorAll(".ideaCard")
    ideaCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.classList.add("active")
            let svg = card.querySelector(".iconaPart .ideaCard-icons svg")
            svg.setAttribute("color", "rgb(145, 75, 241)")

        })
        card.addEventListener('mousemove', (e) => {
            // 1. Get the width/height and position of the card
            const rect = card.getBoundingClientRect();

            // 2. Calculate mouse position relative to the card (not the window)
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // 3. Calculate the center of the card
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // 4. Get the rotation values
            // We divide by 10 or 20 to dampen the effect so it doesn't spin too wildly
            const rotateX = ((y - centerY) / 10) * -1; // Invert X axis for natural feel
            const rotateY = (x - centerX) / 10;

            // 5. Apply the transform
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        card.addEventListener("mouseleave", () => {
            card.classList.remove("active")
            let svg = card.querySelector(".iconaPart .ideaCard-icons svg")
            svg.setAttribute("color", "rgb(255, 255, 255)")
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        })
    })

}

function setUpAllImage(projectName) {
    let project = projects[projectName]
    const imageConatiner = document.getElementById("imageConatiner")
    imageConatiner.innerHTML = ""
    for (const element of project.images) {
        imageConatiner.innerHTML += `
    <div class="showImage">
                    <img src="${element}" alt="">
                </div>
    `
    }
}
function handelProjectImageHover() {
    const viewImageCursor = document.querySelector("#project-main-image #viewImageCursor");
    const showImageConatiner = document.getElementById("showImageConatiner")
    const projectMainImage = document.getElementById("project-main-image")
    const rightControl = document.getElementById("rightControl")
    const leftControl = document.getElementById("leftControl")
    viewImageCursor.addEventListener("mouseenter", () => {
        const mainarrow = viewImageCursor.querySelector(".mainarrow");
        const text = viewImageCursor.querySelector(".viewProject");

        // Reset state cleanly
        mainarrow.style.transition = "width 1s ease, opacity 0.3s ease";
        mainarrow.style.visibility = "visible";
        mainarrow.style.opacity = "1";
        mainarrow.style.width = "60px";

        // Force reflow
        void mainarrow.offsetWidth;

        // Animate
        mainarrow.style.width = "200px";
        mainarrow.classList.add("active");

        // Show text slightly after expand
        setTimeout(() => {
            text.style.display = "block";
        }, 700);
    });

    viewImageCursor.addEventListener("mouseleave", () => {
        const mainarrow = viewImageCursor.querySelector(".mainarrow");
        const text = viewImageCursor.querySelector(".viewProject");

        // Hide text first
        text.style.display = "none";

        // Shrink smoothly
        mainarrow.style.width = "60px";
        mainarrow.style.opacity = "0";

        setTimeout(() => {
            mainarrow.style.visibility = "hidden";
            mainarrow.classList.remove("active");
        }, 300);
    });

    viewImageCursor.addEventListener("mousemove", (e) => {
        const mainarrow = viewImageCursor.querySelector(".mainarrow");
        const rect = viewImageCursor.getBoundingClientRect();
        console.log(mainarrow)
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        mainarrow.style.left = `${x}px`;
        mainarrow.style.top = `${y}px`;

    });

    projectMainImage.addEventListener("click", () => {
        let projectImage = projectMainImage.querySelector(".projectImage")
        let projectName = projectImage.getAttribute("data-project")
        let index = projectImage.getAttribute("data-index")
        setUpAllImage(projectName)
        startImageCarousel(index)
        document.getElementById("bluarPage").style.backdropFilter = "blur(6px)"
        showImageConatiner.style.transition = "all 0.5s ease"
        showImageConatiner.classList.add("active")
    })

    showImageConatiner.addEventListener("click", () => {
        document.getElementById("bluarPage").style.backdropFilter = "blur(0px)"
        showImageConatiner.style.transition = "none"
        showImageConatiner.classList.remove("active")
    })
    Array.of(rightControl, leftControl).forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation()
            let index = Number(btn.getAttribute("data-index"))
            startImageCarousel(index)
        })
    })

}

function hnadelConatcBtns() {
    contactBtns = document.querySelectorAll(".contact-btn");
    contactBtns.forEach((contactBtn) => {
        let span1 = contactBtn.querySelector("#span1");
        let span2 = contactBtn.querySelector("#span2");
        contactBtn.addEventListener("mousemove", () => {
            span1.style.top = "14px";
            span1.style.opacity = "1";
            span2.style.top = "70px";
            span2.style.opacity = "0";
        });
        contactBtn.addEventListener("mouseleave", () => {
            span2.style.top = "14px";
            span2.style.opacity = "1";
            span1.style.top = "-20px";
            span1.style.opacity = "0";
        });

        contactBtn.addEventListener("click", () => {
            document.getElementById("navContactBtn").click()
        })
    });


}
function hnadelWorkText() {
    let line = document.querySelector(".line");
    let polyline = document.querySelector(".polyline");
    let worktext = document.querySelector(".worktext");
    if (!worktext) return;

    worktext.addEventListener("mousemove", () => {
        if (line) line.setAttribute("stroke", "rgb(145, 75, 241)");
        if (polyline) polyline.setAttribute("stroke", "rgb(145, 75, 241)");
    });
    worktext.addEventListener("mouseleave", () => {
        if (line) line.setAttribute("stroke", "white");
        if (polyline) polyline.setAttribute("stroke", "");
    });
    worktext.addEventListener("click", () => {
        if (window.location.pathname.includes("/projects/")) {
            let pathArra = window.location.pathname.split("/");
            let projId = pathArra[pathArra.length - 1];
            if (projects[projId] && projects[projId].link) {
                window.open(projects[projId].link, "_blank");
            }
        } else {
            const navBtn = document.getElementById("navProjectBtn");
            if (navBtn) navBtn.click();
        }
    });
}

function hnadelControlBtn() {
    let controlbtn = document.querySelectorAll('.controlbtn')
    controlbtn.forEach(btn => {
        console.log(btn)
        btn.addEventListener("mousemove", () => {
            let line = btn.querySelector('.lineclient')
            let polyline = btn.querySelector('.polylineclient')
            btn.style.backgroundColor = 'var(--token-fc7b9f32-7298-428e-bdfb-3530edb2e73a)'
            line.setAttribute("stroke", "rgb(145, 75, 241)");
            polyline.setAttribute("stroke", "rgb(145, 75, 241)");
            console.log('enter......')
        })
        btn.addEventListener("mouseleave", () => {
            let line = btn.querySelector('.lineclient')
            let polyline = btn.querySelector('.polylineclient')
            btn.style.backgroundColor = 'var(--token-purple-bg)'
            line.setAttribute("stroke", "white");
            polyline.setAttribute("stroke", "white");
        })

    })
}
// slider move----------------
function handelRigthLeftBtn() {
    const clients = document.querySelectorAll(".client");
    const total = clients.length;
    const leftBtn = document.querySelector(".leftbtn");
    const rightBtn = document.querySelector(".rightbtn");
    rightBtn.addEventListener("click", () => {
        index++;
        if (index >= total) {
            index = 0; // back to first
        }
        updateSlider();
    });

    leftBtn.addEventListener("click", () => {
        index--;
        if (index < 0) {
            index = total - 1; // go to last
        }
        updateSlider();
    });
}

function getCardWidth() {
    const clients = document.querySelectorAll(".client");
    const style = getComputedStyle(clients[0]);
    const marginRight = parseInt(style.marginRight) || 0;
    const marginLeft = parseInt(style.marginLeft) || 0;
    return clients[0].offsetWidth + marginLeft + marginRight;
}

function updateSlider() {
    const wrapper = document.querySelector(".client-wrapper");
    const cardWidth = getCardWidth();
    wrapper.style.transform = `translateX(-${index * cardWidth}px)`;
    wrapper.style.transition = "transform 0.5s ease-in-out";
}

function handelCollaborate() {
    let collaborate = document.getElementById('collaborate')
    let firstarrow = collaborate.querySelector('#firstarroow')
    let secondarroe = collaborate.querySelector('#secondarrow')
    let specalKeyword = document.querySelector('.collaborate-left-head-part h3 .specalKeyword')
    let arrow = collaborate.querySelector('.collaborate-right-head-part .arrow')
    collaborate.addEventListener("mousemove", () => {
        collaborate.style.backgroundColor = 'var(--token-purple-bg)'
        specalKeyword.style.color = 'var(--token-fc7b9f32-7298-428e-bdfb-3530edb2e73a)'
        arrow.style.backgroundColor = 'var(--token-fc7b9f32-7298-428e-bdfb-3530edb2e73a)'
        firstarrow.style.left = '130%'
        secondarroe.style.left = '50%'
    })
    collaborate.addEventListener("mouseleave", () => {
        collaborate.style.backgroundColor = 'var(--token-gray-bg)'
        specalKeyword.style.color = 'var(--token-purple-bg)'
        arrow.style.backgroundColor = 'var(--token-purple-bg)'
        firstarrow.style.left = '50%'
        secondarroe.style.left = '-40%'
    })
}
function handelExperiencesCard() {
    let experiencesCards = document.querySelectorAll('.experiences-card')
    experiencesCards.forEach(card => {
        let firstarrow = card.querySelector('#firstarroow')
        let secondarroe = card.querySelector('#secondarrow')
        let arrow = card.querySelector('.experiences-card-right-head-part .arrow')
        card.addEventListener("mousemove", () => {
            card.style.backgroundColor = 'var(--token-purple-bg)'
            arrow.style.backgroundColor = 'var(--token-fc7b9f32-7298-428e-bdfb-3530edb2e73a)'
            firstarrow.style.left = '130%'
            secondarroe.style.left = '50%'
        })
        card.addEventListener("mouseleave", () => {
            card.style.backgroundColor = 'var(--token-gray-bg)'
            arrow.style.backgroundColor = 'var(--token-purple-bg)'
            firstarrow.style.left = '50%'
            secondarroe.style.left = '-40%'
        })
    })
}

function handelHoverCursor() {
    let hoverCursors = document.querySelectorAll(".hoverCursor");

    hoverCursors.forEach(cursor => {
        let mainarrow = cursor.querySelector(".overlayarrow .mainarrow");

        let targetX = 0;
        let targetY = 0;
        let currentX = 0;
        let currentY = 0;

        cursor.addEventListener("mouseenter", () => {
            mainarrow.classList.add("active");
        });

        cursor.addEventListener("mouseleave", () => {
            mainarrow.classList.remove("active");
        });

        cursor.addEventListener("mousemove", (e) => {
            const rect = cursor.getBoundingClientRect();

            targetX = e.clientX - rect.left;
            targetY = e.clientY - rect.top;
        });

        function animate() {
            // smoothing factor (lower = slower)
            const speed = 0.05;

            currentX += (targetX - currentX) * speed;
            currentY += (targetY - currentY) * speed;

            mainarrow.style.left = currentX + "px";
            mainarrow.style.top = currentY + "px";

            requestAnimationFrame(animate);
        }

        animate();
    });
}

function handelProjectClick() {
    let projects = document.querySelectorAll(".project")
    projects.forEach(project => {
        project.addEventListener("click", () => {
            let projectName = project.getAttribute("data-project")
            changeContent(`/projects/${projectName}`)
            history.pushState({}, "", `/projects/${projectName}`);
        })
    })
}

function loadProjectFileData(projectName) {
    let project = projects[projectName]
    document.title = `${projectName[0].toUpperCase() + projectName.slice(1, projectName.length)} | Sanjay Chouhan`
    if (!project) {
        changeContent("/")
        history.pushState({}, "", "/");
        return
    }
    const MainProjectImage = document.getElementById("MainProjectImage")
    const projectNameMain = document.getElementById("projectNameMain")
    const projectType = document.getElementById("projectType")
    const projectDescMain = document.getElementById("projectDescMain")
    const ideaCardConatiner = document.getElementById("ideaCardConatiner")
    const projectAllImages = document.getElementById("projectAllImages")
    if (ideaCardConatiner) ideaCardConatiner.innerHTML = ""
    if (projectAllImages) projectAllImages.innerHTML = ""
    MainProjectImage.src = project.images[0]
    MainProjectImage.parentElement.setAttribute("data-index", "0")
    MainProjectImage.parentElement.setAttribute("data-project", projectName)
    projectNameMain.textContent = project.title
    projectType.textContent = project.subtitle
    projectDescMain.textContent = project.description

    for (const element of project.services) {
        ideaCardConatiner.innerHTML += `
    <div class="ideaCard">
                        <div class="iconaPart">
                            <div class="ideaCard-icons">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    aria-hidden="true" data-slot="icon" color="rgb(255, 255, 255)"
                                    style="width: 100%; height: 100%;">
                                    <path fill-rule="evenodd"
                                        d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="ideaCard-content">
                            <span class="ideaCard-content-heading">
                                ${element.title}
                            </span>
                            <span class="ideaCard-content-desc">
                                ${element.details}
                            </span>

                        </div>
                    </div>`
    }
    for (let index = 1; index < project.images.length; index++) {
        const element = project.images[index];
        projectAllImages.innerHTML += `
    <div class="image" data-index="${index}" data-project="${projectName}">
                    <img src="${element}" alt="">
                    <div class="viewImageCursor">
                        <div class="mainarrow">
                            <div class="arrow-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="rgb(145, 75, 241)" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <!-- main line -->
                                    <line x1="4" y1="12" x2="20" y2="12" />

                                    <!-- right arrow head -->
                                    <polyline points="14 6 20 12 14 18" />
                                </svg>
                            </div>
                            <div class="viewProject">view Image</div>
                        </div>
                    </div>
                </div>
    `
    }
    showMoreProjects(projectName, 4);
}

function showMoreProjects(currentProjectKey, count = 4) {
    const recentProjectConatiner = document.getElementById("recentProjectConatiner");
    if (!recentProjectConatiner) return;
    recentProjectConatiner.innerHTML = "";

    let keys = Object.keys(projects).filter(k => k !== currentProjectKey);
    let added = 0;
    for (const key of keys) {
        const p = projects[key];
        recentProjectConatiner.innerHTML += `
    <div class="project hoverCursor" data-project="${key}">
            <div class="project-image">
              <img src="${p.images[0]}" alt="${p.title}" />
            </div>
            <div class="projectNameDesc">
              <span class="projectName">${p.title}</span>
              <span class="projectdesc">${p.subtitle}</span>
            </div>
            <div class="overlayarrow">
              <div class="mainarrow">
                <div class="arrow-btn">↗</div>
                <div class="viewProject">Live Preview</div>
              </div>
            </div>
          </div>
        `;
        added++;
        if (added >= count) break;
    }
}
function backgroundHover() {
    const outline = document.querySelector('#cursor-outline');

    let mousex = 0;
    let mousey = 0;

    let outlinex = 0;
    let outliney = 0;

    let outlinespeed = 0.05;

    document.body.addEventListener('mousemove', (e) => {
        mousex = e.clientX;
        mousey = e.clientY;
    });

    function animateCursor() {
        let t1 = mousex - outlinex
        let t2 = mousey - outliney

        outlinex += t1 * outlinespeed - 15
        outliney += t2 - outlinespeed - 150

        outline.style.left = `${outlinex}px`
        outline.style.top = `${outliney}px`

        requestAnimationFrame(animateCursor)
    }

    animateCursor(); // start animation
}

function showToolTabs() {
    let toolController = document.getElementById("toolController")
    if (!toolController) return;
    toolController.innerHTML = '';
    let Allcategorys = Object.keys(tools).map(t => { return tools[t].category })
    let categorys = []
    Allcategorys.forEach(cat => {
        if (!categorys.includes(cat)) {
            categorys.push(cat)
        }
    })

    categorys.forEach(cat => {
        toolController.innerHTML += `
  <div class="toolTab" data-tab="${cat}">${cat.replaceAll("-", " ")}</div>
  `
    })
}

function showTabsTool(tab) {
    let toolWrapper = document.getElementById("tool-wrapper")
    if (!toolWrapper) return;
    toolWrapper.innerHTML = ''
    let Tools = Object.keys(tools)
        .filter(t => tools[t].category === tab)
        .map(t => ({
            id: t,
            ...tools[t]
        }));
    console.log(Tools)
    Tools.forEach((t) => {
        const isInvert = t.invert ? "invert" : "";
        const isRevert = t.revert ? "revert" : "";
        toolWrapper.innerHTML += `
     <div class="tool" data-tool="${t.id}" >
            <div class="tool-image ${isInvert} ${isRevert}">
              <img src="${t.image}" alt="${t.name}">
            </div>
            <div class="toolNameDesc">
              <span class="toolName">${t.name}</span>
              <span class="toolDec">${t.category.replaceAll("-", " ")}</span>
            </div>
          </div>
    `
    })

    let tabs = document.querySelectorAll(".toolTab")
    tabs.forEach(tt => { tt.classList.remove("active") })
    tabs.forEach(t => {
        if (t.getAttribute("data-tab") == tab && !t.classList.contains("active")) {
            t.classList.add("active")
        }
    })


}
function handeTabClick() {
    let tabs = document.querySelectorAll(".toolTab")

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            let tabCat = tab.getAttribute("data-tab")
            console.log(tabCat)
            showTabsTool(tabCat)
        })
    })
}



function showOneToolPerCategory() {
    let toolWrapper = document.getElementById("tool-wrapper");
    if (!toolWrapper) return;
    toolWrapper.innerHTML = '';

    let categories = [];
    Object.keys(tools).forEach(t => {
        const cat = tools[t].category;
        if (!categories.includes(cat)) {
            categories.push(cat);
        }
    });

    categories.forEach(cat => {
        const toolKey = Object.keys(tools).find(k => tools[k].category === cat);
        if (toolKey) {
            const t = { id: toolKey, ...tools[toolKey] };
            const isInvert = t.invert ? "invert" : "";
            const isRevert = t.revert ? "revert" : "";
            toolWrapper.innerHTML += `
     <div class="tool" data-tool="${t.id}" >
            <div class="tool-image ${isInvert} ${isRevert}">
              <img src="${t.image}" alt="${t.name}">
            </div>
            <div class="toolNameDesc">
              <span class="toolName">${t.name}</span>
              <span class="toolDec">${t.category.replaceAll("-", " ")}</span>
            </div>
          </div>
            `;
        }
    });
}

function handelViewAllTools() {
    const viewAllBtn = document.getElementById("viewAllToolsBtn");
    if (viewAllBtn) {
        viewAllBtn.addEventListener("click", () => {
            changeContent("/tools");
            history.pushState({}, "", "/tools");
            if (typeof updateNavActiveState === "function") updateNavActiveState("/tools");
        });
    }
}

function handelViewAllProjects() {
    const viewAllBtn = document.getElementById("viewAllProjectsBtn");
    if (viewAllBtn) {
        viewAllBtn.addEventListener("click", () => {
            changeContent("/projects");
            history.pushState({}, "", "/projects");
            if (typeof updateNavActiveState === "function") updateNavActiveState("/projects");
        });
    }
}

function showProjectIntoHtml(count = Object.keys(projects).length) {
    const recentProjectConatiner = document.getElementById("recentProjectConatiner")
    let i = 1
    for (const element in projects) {
        recentProjectConatiner.innerHTML += `
    <div class="project hoverCursor" data-project="${element}">
            <div class="project-image">
              <img src="${projects[element].images[0]}" alt="${projects[element].title}" width="600" height="400" loading="lazy" />
            </div>
            <div class="projectNameDesc">
              <span class="projectName">${projects[element].title}</span>
              <span class="projectdesc">${projects[element].subtitle}</span>
            </div>
            <div class="overlayarrow">
              <div class="mainarrow">
                <div class="arrow-btn">↗</div>
                <div class="viewProject">Live Preview</div>
              </div>
            </div>
          </div>
    `
        if (i == count) {
            return
        }

        i++
    }
}

function showExperiencesIntoHtml() {
    const container = document.querySelector("#experiences .experiences-container");
    if (!container || typeof experiences === "undefined") return;

    container.innerHTML = experiences.map(exp => `
        <div class="experiences-card" id="exp-${exp.id}">
            <div class="experiences-card-head-part">
                <div class="experiences-card-left-head-part">
                    <div class="card-heading">
                        <span>${exp.company} <small style="font-size: 18px; font-weight: 400; opacity: 0.85;">— ${exp.role} (${exp.employmentType})</small></span>
                    </div>
                    <div class="ex-card-desc">
                        <p>${exp.description}</p>
                        <ul style="margin-top: 10px; padding-left: 20px; list-style-type: disc; color: var(--token-white-gray-color); font-size: 14px; display: flex; flex-direction: column; gap: 6px;">
                            ${exp.responsibilities.map(r => `<li>${r}</li>`).join("")}
                        </ul>
                        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px;">
                            ${exp.technologies.map(t => `<span style="background: rgba(255,255,255,0.08); padding: 4px 10px; border-radius: 6px; font-size: 12px; color: var(--token-fc7b9f32-7298-428e-bdfb-3530edb2e73a);">${t}</span>`).join("")}
                        </div>
                    </div>
                    <div class="ex-card-datetime">
                        <span>${exp.period} • ${exp.duration} • ${exp.location}</span>
                    </div>
                </div>
                <div class="experiences-card-right-head-part">
                    <div class="arrow">
                        <div class="finalarrow" id="firstarroow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10mm" height="4mm" viewBox="0 0 40 12">
                                <rect x="0" y="0" width="40" height="12" rx="2" fill="none" />
                                <line x1="6" y1="6" x2="20" y2="6" stroke="white" stroke-width="1.8" stroke-linecap="round" />
                                <polyline style="transform: translateX(-10px)" points="28,2 34,6 28,10" fill="none" stroke-width="1.8" stroke="white" class="polyline" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="finalarrow" style="left: -50%;" id="secondarrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10mm" height="4mm" viewBox="0 0 40 12">
                                <rect x="0" y="0" width="40" height="12" rx="2" fill="none" />
                                <line x1="6" y1="6" x2="20" y2="6" stroke="rgb(145, 75, 241)" stroke-width="1.8" stroke-linecap="round" />
                                <polyline style="transform: translateX(-10px)" points="28,2 34,6 28,10" fill="none" stroke-width="1.8" stroke="rgb(145, 75, 241)" class="polyline" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join("");
}

backgroundHover();
if (window.location.pathname == "/") {
    handelRigthLeftBtn()
    getCardWidth()
    updateSlider()
    showProjectIntoHtml(4)
    handelViewAllProjects()
    handelHoverCursor()
    showOneToolPerCategory()
    handelViewAllTools()
    hnadelConatcBtns()
    hnadelWorkText()
    hnadelControlBtn()
    handelCollaborate()
    handelProjectClick()
} else if (window.location.pathname == "/projects") {
    showProjectIntoHtml()
    handelCollaborate()
    handelHoverCursor()
    handelProjectClick()
} else if (window.location.pathname == "/tools") {
    showToolTabs()
    showTabsTool("Server-Side")
    handeTabClick()
    handelCollaborate()
} else if (window.location.pathname == "/experiences") {
    showExperiencesIntoHtml()
    handelExperiencesCard()
    handelCollaborate()
} else if (window.location.pathname.includes("/projects/")) {
    let pathArra = window.location.pathname.split("/")
    loadProjectFileData(pathArra[pathArra.length - 1])
    hnadelWorkText()
    hnadelConatcBtns()
    handelCollaborate()
    handelHoverCursor()
    handelProjectClick()
    handelProjectImageHover()
    handelProjectAllImageHover()
    handeIdeaCardHover()
    handelBackArrow()
}
else if (window.location.pathname == "/tem2.html") {
    // handelExperiencesCard()
    // handelCollaborate()
}


