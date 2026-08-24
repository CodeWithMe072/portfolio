var contactBtns = document.querySelectorAll(".contact-btn");
var navanchors = document.querySelectorAll(".navanchor");

function updateNavActiveState(currentPath) {
	const path = currentPath || window.location.pathname;
	const navanchors = document.querySelectorAll(".navanchor");
	navanchors.forEach(nav => {
		nav.classList.remove("active");
		let action = nav.getAttribute("data-action");
		if (action === "/") {
			if (path === "/") {
				nav.classList.add("active");
			}
		} else if (action) {
			if (path === action || path.startsWith(action + "/") || path.startsWith(action + "?")) {
				nav.classList.add("active");
			}
		}
	});
}

navanchors.forEach(nav => {
	nav.addEventListener("click", () => {
		let route = nav.getAttribute("data-action");
		changeContent(route);
		history.pushState({}, "", route);
		updateNavActiveState(route);
	});
	nav.addEventListener("mouseenter", () => {
		nav.classList.add("hoverActive");
	});
	nav.addEventListener("mouseleave", () => {
		nav.classList.remove("hoverActive");
	});
});

updateNavActiveState();

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
});

async function changeContent(router) {
	const route = matchRoute(router);

	if (!route) {
		console.warn("Route not found:", router);
		return;
	}
	updateNavActiveState(router);
	showProgressBar(); 

	// Load HTML
	const html = await getHtml(route.html);
	const newContent = html.getElementById("content");

	const asideContainer = document.getElementById("content");
	const profileContainer = document.getElementById("profile");

	if (!newContent || !asideContainer || !profileContainer) return;

	// Inject new content
	asideContainer.innerHTML = newContent.innerHTML;
	document.title = route.title
	// Restart content animation
	asideContainer.classList.remove("mainAimationContent");
	void asideContainer.offsetWidth;
	asideContainer.classList.add("mainAimationContent");

	// Restart profile animation
	profileContainer.classList.remove("mainAimationProfile");
	void profileContainer.offsetWidth;
	profileContainer.classList.add("mainAimationProfile");

	// Section-based scroll animations
	const sections = document.querySelectorAll("#content section, #content .section");

	const sectionObserver = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add("section-animate-active");
				sectionObserver.unobserve(entry.target);
			}
		});
	}, { threshold: 0.2 });

	sections.forEach(sec => {
		sec.classList.remove("section-animate-active");
		sec.classList.add("section-animate");
		sectionObserver.observe(sec);
	});

	// Remove old dynamic script
	const oldScript = document.getElementById("mainPage");
	if (oldScript) oldScript.remove();

	// Load new script with cache-buster
	if (route.script) {
		const pageScript = document.createElement("script");
		pageScript.id = "mainPage";
		pageScript.type = "module";
		pageScript.src = route.script + "?v=" + Date.now();
		document.body.appendChild(pageScript);
	}
	hideProgressBar();  

	// ✅ Reset scroll position AFTER render
	requestAnimationFrame(() => {
		setTimeout(() => {
			asideContainer.scrollTop = 0;
			document.documentElement.scrollTop = 0;
			document.body.scrollTop = 0;
			updateScrollProgress();
		}, 0);
	});

}

function showProgressBar() {
    const bar = document.getElementById("nav-progress-bar");
    bar.style.opacity = "1";
    bar.style.width = "0%";
    requestAnimationFrame(() => requestAnimationFrame(() => {
        bar.style.width = "90%";
    }));
}

function hideProgressBar() {
    const bar = document.getElementById("nav-progress-bar");
    bar.style.width = "100%";
    setTimeout(() => {
        bar.style.opacity = "0";
        bar.style.width = "0%";
    }, 300);
}


window.addEventListener("popstate", () => {
	let route = window.location.pathname
	changeContent(route)
	navanchors.forEach(nav => {
		let action = nav.getAttribute("data-action")
		if (action == window.location.pathname && !nav.classList.contains("active")) {
			navanchors.forEach(item => item.classList.remove("active"))
			nav.classList.add("active")
		}
	})
})

function updateScrollProgress() {
	const fill = document.getElementById("mp-progress-fill");
	if (!fill) return;

	const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
	const docHeight = Math.max(
		document.body.scrollHeight, document.documentElement.scrollHeight,
		document.body.offsetHeight, document.documentElement.offsetHeight,
		document.body.clientHeight, document.documentElement.clientHeight
	);
	const winHeight = window.innerHeight || document.documentElement.clientHeight;
	const scrollHeight = docHeight - winHeight;

	const pct = scrollHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100)) : 0;
	fill.style.width = pct + "%";
}

window.addEventListener("scroll", updateScrollProgress);
window.addEventListener("resize", updateScrollProgress);
document.addEventListener("DOMContentLoaded", updateScrollProgress);

// ------------ Cross-Tab Audio Lock & Tab Visibility Management ------------
var tabAudioId = Math.random().toString(36).substring(2, 10);
var audioBroadcastChannel = typeof BroadcastChannel !== "undefined" ? new BroadcastChannel("portfolio_audio_channel") : null;
var audioPausedByTabSwitch = false;

function broadcastAudioStart() {
	if (audioBroadcastChannel) {
		audioBroadcastChannel.postMessage({ type: "AUDIO_PLAYING", tabId: tabAudioId });
	}
}

if (audioBroadcastChannel) {
	audioBroadcastChannel.onmessage = (event) => {
		const data = event.data;
		if (data && data.type === "AUDIO_PLAYING" && data.tabId !== tabAudioId) {
			const audio = document.getElementById("bg-audio");
			const card = document.getElementById("mp-card");
			const icon = document.getElementById("mp-icon");

			if (audio && !audio.paused) {
				audio.pause();
				if (card) {
					card.classList.remove("playing");
					card.classList.add("paused");
				}
				if (icon) {
					const playIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
					icon.innerHTML = playIconSVG;
				}
			}
		}
	};
}

// Automatically pause audio when tab is switched/hidden, and resume when tab becomes visible again
document.addEventListener("visibilitychange", () => {
	const audio = document.getElementById("bg-audio");
	const card = document.getElementById("mp-card");
	const icon = document.getElementById("mp-icon");

	if (!audio) return;

	const playIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
	const pauseIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="white"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`;

	if (document.hidden) {
		if (!audio.paused) {
			audioPausedByTabSwitch = true;
			audio.pause();
			if (card) {
				card.classList.remove("playing");
				card.classList.add("paused");
			}
			if (icon) icon.innerHTML = playIconSVG;
		}
	} else {
		if (audioPausedByTabSwitch) {
			audioPausedByTabSwitch = false;
			broadcastAudioStart();
			audio.play().then(() => {
				if (card) {
					card.classList.remove("paused");
					card.classList.add("playing");
				}
				if (icon) icon.innerHTML = pauseIconSVG;
			}).catch(err => {
				console.log("Audio tab resume playback error:", err);
			});
		}
	}
});

function toggleAudioPlayback() {
	const card = document.getElementById("mp-card");
	const audio = document.getElementById("bg-audio");
	const icon = document.getElementById("mp-icon");

	if (!card || !audio) return;

	// Do not start playback if tab is hidden/inactive
	if (document.hidden || document.visibilityState !== "visible") {
		audioPausedByTabSwitch = true;
		return;
	}

	const playIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
	const pauseIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="white"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`;

	if (audio.paused) {
		if (typeof broadcastAudioStart === "function") broadcastAudioStart();
		audio.play().then(() => {
			card.classList.remove("paused");
			card.classList.add("playing");
			if (icon) icon.innerHTML = pauseIconSVG;
		}).catch(err => {
			console.log("Audio playback deferred or prevented:", err);
		});
	} else {
		audio.pause();
		card.classList.remove("playing");
		card.classList.add("paused");
		if (icon) icon.innerHTML = playIconSVG;
	}
}

function initAudioPlayer() {
	const card = document.getElementById("mp-card");
	const audio = document.getElementById("bg-audio");
	const icon = document.getElementById("mp-icon");

	if (!card || !audio) return;

	const playIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;

	card.onclick = (e) => {
		if (e) e.stopPropagation();
		toggleAudioPlayback();
	};

	audio.onended = () => {
		if (!audio.loop) {
			card.classList.remove("playing");
			card.classList.add("paused");
			if (icon) icon.innerHTML = playIconSVG;
		}
	};
}

// Global Keyboard Shortcut: Pressing 'm' or 'M' toggles background music play/pause
// Ensured single registration using window guard flag to prevent duplicate handlers on route transitions
if (!window.hasAudioKeyShortcutListener) {
	window.hasAudioKeyShortcutListener = true;
	document.addEventListener("keydown", (e) => {
		const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : "";
		if (activeTag === "input" || activeTag === "textarea" || (document.activeElement && document.activeElement.isContentEditable)) {
			return;
		}

		if (e.key === "m" || e.key === "M" || e.code === "KeyM") {
			toggleAudioPlayback();
		}
	});
}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", () => {
		initAudioPlayer();
		updateScrollProgress();
	});
} else {
	initAudioPlayer();
	updateScrollProgress();
}


