/*************************************************
 * LENS BACKGROUND ANIMATION (UNCHANGED & CLEAN)
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
 * MOBILE DRAWER + OVERLAY (FIXED)
 *************************************************/

const menuToggle = document.getElementById("menuToggle");
const closeMenuBtn = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");

let menuOpen = false;

function resetProductsDropdown() {
  if (mobileProductsMenu && mobileProductsIcon) {
    mobileProductsMenu.classList.add("hidden");
    mobileProductsIcon.classList.remove("rotate-180");
  }
}

function openMenu() {
  if (!mobileMenu || !menuOverlay) return;

  menuOpen = true;
  mobileMenu.classList.remove("-translate-x-full");
  menuOverlay.classList.remove("opacity-0", "pointer-events-none");
  document.body.style.overflow = "hidden";

  // ✅ ALWAYS reset dropdown on open
  resetProductsDropdown();
}

function closeMenu() {
  if (!mobileMenu || !menuOverlay) return;

  menuOpen = false;
  mobileMenu.classList.add("-translate-x-full");
  menuOverlay.classList.add("opacity-0", "pointer-events-none");
  document.body.style.overflow = "";

  // ✅ ALWAYS reset dropdown on close
  resetProductsDropdown();
}

/* ☰ TOGGLE MENU (THIS IS THE KEY FIX) */
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    menuOpen ? closeMenu() : openMenu();
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

const mobileProductsBtn = document.getElementById("mobileProductsBtn");
const mobileProductsMenu = document.getElementById("mobileProductsMenu");
const mobileProductsIcon = document.getElementById("mobileProductsIcon");

if (mobileProductsBtn && mobileProductsMenu && mobileProductsIcon) {
  mobileProductsBtn.addEventListener("click", () => {
    mobileProductsMenu.classList.toggle("hidden");
    mobileProductsIcon.classList.toggle("rotate-180");
  });
}



/*************************************************
 * UX POLISH
 *************************************************/

// Close menu when clicking a link
document.querySelectorAll("#mobileMenu a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

// Close menu when switching to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024 && menuOpen) {
    closeMenu();
  }
});