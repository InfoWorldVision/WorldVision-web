/*************************************************
 * LENS BACKGROUND ANIMATION
 *************************************************/

const lensBg = document.getElementById("lensBg");

const lenses = [
  "lense1.png","lense2.png","lense3.png","lense4.png","lense5.png",
  "lense6.png","lense7.png","lense8.png","lense9.png","lense10.png",
  "lense11.png","lense12.png","lense13.png","lense14.png","lense15.png",
  "lense16.png","lense17.png","lense18.png","lense19.png","lense20.png",
  "lense21.png","lense22.png"
];

const imgPath = "../Multimedia/";
const rowHeight = 120;
const duplicates = 2;
const buffer = 3;

function shuffle(arr) {
  return arr.slice().sort(() => Math.random() - 0.5);
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
      shuffled.forEach(name => {
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
window.addEventListener("resize", renderLensBg);



/*************************************************
 * MOBILE DRAWER + OVERLAY (SCROLL-SAFE)
 *************************************************/

const menuToggle = document.getElementById("menuToggle");
const closeMenuBtn = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");

const mobileProductsBtn = document.getElementById("mobileProductsBtn");
const mobileProductsMenu = document.getElementById("mobileProductsMenu");
const mobileProductsIcon = document.getElementById("mobileProductsIcon");

function resetProductsDropdown() {
  if (mobileProductsMenu && mobileProductsIcon) {
    mobileProductsMenu.classList.add("hidden");
    mobileProductsIcon.classList.remove("rotate-180");
  }
}

function openMenu() {
  if (!mobileMenu || !menuOverlay) return;

  mobileMenu.classList.remove("-translate-x-full");
  menuOverlay.classList.remove("opacity-0", "pointer-events-none");
  document.body.classList.add("menu-open");

  resetProductsDropdown();
}

function closeMenu() {
  if (!mobileMenu || !menuOverlay) return;

  mobileMenu.classList.add("-translate-x-full");
  menuOverlay.classList.add("opacity-0", "pointer-events-none");
  document.body.classList.remove("menu-open");

  resetProductsDropdown();
}

/* ☰ Toggle menu */
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.contains("menu-open");
    isOpen ? closeMenu() : openMenu();
  });
}

/* ❌ Close button */
if (closeMenuBtn) {
  closeMenuBtn.addEventListener("click", closeMenu);
}

/* Overlay click */
if (menuOverlay) {
  menuOverlay.addEventListener("click", closeMenu);
}



/*************************************************
 * MOBILE "OUR PRODUCTS" DROPDOWN
 *************************************************/

if (mobileProductsBtn && mobileProductsMenu && mobileProductsIcon) {
  mobileProductsBtn.addEventListener("click", () => {
    mobileProductsMenu.classList.toggle("hidden");
    mobileProductsIcon.classList.toggle("rotate-180");
  });
}



/*************************************************
 * UX POLISH + FAIL-SAFES
 *************************************************/

// Close menu when clicking any link
document.querySelectorAll("#mobileMenu a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

// Auto-unlock scroll on desktop resize / orientation change
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    closeMenu();
  }
});

// Hard safety unlock (Swiper / mobile edge cases)
window.addEventListener("pageshow", () => {
  document.body.classList.remove("menu-open");
});



/*************************************************
 * HERO PRODUCT SLIDER
 *************************************************/

const heroSwiper = new Swiper(".heroSwiper", {
  loop: true,
  speed: 900,

  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  allowTouchMove: true,
  nested: true,
  resistanceRatio: 0,
});

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

  links.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#" class="hover:text-blue-600 transition">${item}</a>`;

    if (index < 5) {
      left.appendChild(li);   // first 5 items
    } else {
      right.appendChild(li);  // rest
    }
  });
}

renderQuickLinks();

/*************************************************
 * PAGE LOADER — hide after assets load
 *************************************************/
window.addEventListener('load', function () {
  setTimeout(function () {
    const loader = document.getElementById('pageLoader');
    if (loader) loader.classList.add('hidden');
    // trigger lens bg fade after loader
    const lensBg = document.getElementById('lensBg');
    if (lensBg) lensBg.style.animation = 'bgFadeIn 2.2s ease-out forwards';
  }, 1300);
});


/*************************************************
 * SCROLL REVEAL — IntersectionObserver
 *************************************************/
(function () {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal-section').forEach(function (el) {
    observer.observe(el);
  });
})();


/*************************************************
 * HERO SWIPER — fixed init
 *************************************************/
if (typeof Swiper !== 'undefined') {
  new Swiper('.heroSwiper', {
    loop: true,
    speed: 900,
    autoplay: { delay: 6000, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true },
    allowTouchMove: true,
  });
}


/*************************************************
 * SMOOTH SCROLL — for anchor links
 *************************************************/
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});