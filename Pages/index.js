/*************************************************
 * LENS BACKGROUND ANIMATION
 *************************************************/

const lensBg = document.getElementById("lensBg");

const lenses = [
  "lense1.png", "lense2.png", "lense3.png", "lense4.png", "lense5.png",
  "lense6.png", "lense7.png", "lense8.png", "lense9.png", "lense10.png",
  "lense11.png", "lense12.png", "lense13.png", "lense14.png", "lense15.png",
  "lense16.png", "lense17.png", "lense18.png", "lense19.png", "lense20.png",
  "lense21.png", "lense22.png"
];

const imgPath = "../Multimedia/";
const rowHeight = 120;
const duplicates = 2;
const buffer = 3;

function shuffle(arr) {
  return arr.slice().sort(function() {
    return Math.random() - 0.5;
  });
}

function renderLensBg() {
  if (!lensBg) return;

  lensBg.innerHTML = "";
  const rowsNeeded = Math.ceil(window.innerHeight / rowHeight) + buffer;

  for (let i = 0; i < rowsNeeded; i++) {
    const row = document.createElement("div");
    row.className = "lens-row";

    const shuffled = shuffle(lenses);

    for (let d = 0; d < duplicates; d++) {
      shuffled.forEach(function(name) {
        const img = document.createElement("img");
        img.src = imgPath + name;
        img.alt = "";
        row.appendChild(img);
      });
    }

    lensBg.appendChild(row);
  }
}

renderLensBg();


/*************************************************
 * PAGE LOADER
 *************************************************/

function hidePageLoader() {
  const loader = document.getElementById("pageLoader");
  if (loader) loader.classList.add("hidden");

  const bg = document.getElementById("lensBg");
  if (bg) bg.style.animation = "bgFadeIn 2.2s ease-out forwards";
}

window.addEventListener("load", function() {
  setTimeout(hidePageLoader, 900);
});

setTimeout(hidePageLoader, 2500);


/*************************************************
 * LENIS + GSAP SETUP
 *************************************************/

var lenis = null;

if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

if (typeof Lenis !== "undefined") {
  lenis = new Lenis();

  if (typeof ScrollTrigger !== "undefined") {
    lenis.on("scroll", ScrollTrigger.update);
  }

  if (typeof gsap !== "undefined") {
    gsap.ticker.add(function(time) {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }
}

function stopLenis() {
  if (lenis) lenis.stop();
}

function startLenis() {
  if (lenis) lenis.start();
}


/*************************************************
 * REVERSE GALLERY SCROLL
 *************************************************/

function initReverseTriggers() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

  ScrollTrigger.getAll().forEach(function(t) {
    t.kill();
  });

  gsap.set(".col-scroll__list", { clearProps: "transform" });

  if (window.innerWidth <= 320) return;

  const isMobile = window.innerWidth <= 480;

  const oddLists = gsap.utils.toArray(
    ".col-scroll__box:nth-child(odd) .col-scroll__list"
  );

  oddLists.forEach(function(element) {
    const elementHeight = element.offsetHeight;
    const viewportHeight = window.innerHeight;
    const extraSpace = viewportHeight * 0.2;
    const scrollDistance = elementHeight + viewportHeight + extraSpace;

    gsap.to(element, {
      yPercent: isMobile ? 65 : 100,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: 0,
        end: "+=" + scrollDistance,
        scrub: true,
        pin: true
      }
    });
  });

  ScrollTrigger.refresh();
}

window.addEventListener("load", function() {
  try {
    initReverseTriggers();
  } catch (error) {
    console.error("Gallery scroll init failed:", error);
  }
});


/*************************************************
 * MOBILE DRAWER + OVERLAY
 *************************************************/

const menuToggle = document.getElementById("menuToggle");
const closeMenuBtn = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");

const mobileProductsBtn = document.getElementById("mobileProductsBtn");
const mobileProductsMenu = document.getElementById("mobileProductsMenu");
const mobileProductsIcon = document.getElementById("mobileProductsIcon");

function resetProductsDropdown() {
  if (!mobileProductsMenu || !mobileProductsIcon) return;

  mobileProductsMenu.classList.add("hidden");
  mobileProductsIcon.classList.remove("rotate-180");
}

function openMenu() {
  if (!mobileMenu || !menuOverlay) return;

  mobileMenu.classList.remove("-translate-x-full");
  menuOverlay.classList.remove("opacity-0", "pointer-events-none");
  document.body.classList.add("menu-open");
  resetProductsDropdown();
  stopLenis();
}

function closeMenu() {
  if (!mobileMenu || !menuOverlay) return;

  mobileMenu.classList.add("-translate-x-full");
  menuOverlay.classList.add("opacity-0", "pointer-events-none");
  document.body.classList.remove("menu-open");
  resetProductsDropdown();
  startLenis();
}

if (menuToggle) {
  menuToggle.addEventListener("click", function() {
    const isOpen = document.body.classList.contains("menu-open");
    isOpen ? closeMenu() : openMenu();
  });
}

if (closeMenuBtn) {
  closeMenuBtn.addEventListener("click", closeMenu);
}

if (menuOverlay) {
  menuOverlay.addEventListener("click", closeMenu);
}

if (mobileProductsBtn && mobileProductsMenu && mobileProductsIcon) {
  mobileProductsBtn.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();

    mobileProductsMenu.classList.toggle("hidden");
    mobileProductsIcon.classList.toggle("rotate-180");
  });
}

document.querySelectorAll("#mobileMenu a").forEach(function(link) {
  link.addEventListener("click", closeMenu);
});

let resizeTimer;

window.addEventListener("resize", function() {
  if (window.innerWidth >= 1024) {
    closeMenu();
  }

  renderLensBg();

  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    initReverseTriggers();
  }, 250);
});

window.addEventListener("pageshow", function() {
  document.body.classList.remove("menu-open");
});


/*************************************************
 * HERO PRODUCT SLIDER
 *************************************************/

if (typeof Swiper !== "undefined" && document.querySelector(".heroSwiper")) {
  new Swiper(".heroSwiper", {
    loop: true,
    speed: 900,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    allowTouchMove: true,
    nested: true,
    resistanceRatio: 0
  });
}


/*************************************************
 * QUICK LINKS
 *************************************************/

const links = [
  "Home",
  "Lens A",
  "Lens B",
  "Lens C",
  "Lens D",
  "Lens E",
  "Lens F",
  "Lens G",
  "About",
  "Contact"
];

const left = document.getElementById("quickLinksLeft");
const right = document.getElementById("quickLinksRight");

function renderQuickLinks() {
  if (!left || !right) return;

  left.innerHTML = "";
  right.innerHTML = "";

  links.forEach(function(item, index) {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#" class="hover:text-blue-600 transition">${item}</a>`;

    if (index < 5) {
      left.appendChild(li);
    } else {
      right.appendChild(li);
    }
  });
}

renderQuickLinks();


/*************************************************
 * SCROLL REVEAL
 *************************************************/

(function() {
  const revealItems = document.querySelectorAll(".reveal-section");
  if (!revealItems.length) return;

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealItems.forEach(function(el) {
    observer.observe(el);
  });
})();


/*************************************************
 * SMOOTH SCROLL
 *************************************************/

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener("click", function(e) {
    const href = this.getAttribute("href");

    if (!href || href === "#") return;

    const target = document.querySelector(href);

    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});


/*************************************************
 * FILTER TABS
 *************************************************/

const filterBtns = document.querySelectorAll(".g-filter-btn");
const allItems = document.querySelectorAll(".col-scroll__item");
let activeFilter = "all";

filterBtns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    activeFilter = btn.dataset.filter;

    filterBtns.forEach(function(b) {
      b.classList.toggle("active", b === btn);
    });

    allItems.forEach(function(item) {
      const match = activeFilter === "all" || item.dataset.cat === activeFilter;
      item.classList.toggle("filtered-out", !match);
    });

    buildVisible();

    setTimeout(function() {
      initReverseTriggers();
    }, 50);
  });
});


/*************************************************
 * LIGHTBOX
 *************************************************/

const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbTitle = document.getElementById("lbTitle");
const lbCounter = document.getElementById("lbCounter");
const lbThumbs = document.getElementById("lbThumbs");
const lbClose = document.getElementById("lbClose");
const lbPrev = document.getElementById("lbPrev");
const lbNext = document.getElementById("lbNext");

let visible = [];
let lbIdx = 0;

function buildVisible() {
  visible = Array.from(
    document.querySelectorAll(".col-scroll__item:not(.filtered-out)")
  );
}

buildVisible();

function openLB(item) {
  if (!lightbox) return;

  buildVisible();

  lbIdx = visible.indexOf(item);
  if (lbIdx < 0) return;

  renderLB();
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
  stopLenis();
}

function closeLB() {
  if (!lightbox) return;

  lightbox.classList.remove("open");
  document.body.style.overflow = "";
  startLenis();
}

function renderLB() {
  if (!lbImg || !lbTitle || !lbCounter || !lbThumbs) return;

  const item = visible[lbIdx];
  if (!item) return;

  const img = item.querySelector("img");
  const label = item.dataset.label || "";

  lbImg.style.opacity = "0";
  lbImg.onload = function() {
    lbImg.style.opacity = "1";
  };

  lbImg.src = img ? img.src : "";
  lbImg.alt = label;
  lbTitle.textContent = label;
  lbCounter.textContent = (lbIdx + 1) + " / " + visible.length;

  lbThumbs.innerHTML = "";

  visible.forEach(function(v, i) {
    const th = document.createElement("div");
    th.className = "lb-thumb" + (i === lbIdx ? " active" : "");

    const ti = document.createElement("img");
    const sourceImg = v.querySelector("img");

    ti.src = sourceImg ? sourceImg.src : "";
    ti.alt = v.dataset.label || "";

    th.appendChild(ti);

    th.addEventListener("click", function() {
      lbIdx = i;
      renderLB();
    });

    lbThumbs.appendChild(th);
  });

  const activeThumb = lbThumbs.querySelector(".active");
  if (activeThumb) {
    activeThumb.scrollIntoView({ inline: "center", behavior: "smooth" });
  }
}

function lbGo(direction) {
  if (!visible.length) return;

  lbIdx = (lbIdx + direction + visible.length) % visible.length;
  renderLB();
}

if (lightbox && lbClose && lbPrev && lbNext) {
  allItems.forEach(function(item) {
    item.addEventListener("click", function() {
      openLB(item);
    });
  });

  lbClose.addEventListener("click", closeLB);

  lbPrev.addEventListener("click", function() {
    lbGo(-1);
  });

  lbNext.addEventListener("click", function() {
    lbGo(1);
  });

  lightbox.addEventListener("click", function(e) {
    if (e.target === lightbox) closeLB();
  });

  document.addEventListener("keydown", function(e) {
    if (!lightbox.classList.contains("open")) return;

    if (e.key === "Escape") closeLB();
    if (e.key === "ArrowLeft") lbGo(-1);
    if (e.key === "ArrowRight") lbGo(1);
  });

  let lbTx = 0;

  lightbox.addEventListener("touchstart", function(e) {
    lbTx = e.touches[0].clientX;
  }, { passive: true });

  lightbox.addEventListener("touchend", function(e) {
    const distance = lbTx - e.changedTouches[0].clientX;

    if (Math.abs(distance) > 50) {
      lbGo(distance > 0 ? 1 : -1);
    }
  });
}