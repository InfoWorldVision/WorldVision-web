/*************************************************
 * DarkMode Toggle (with localStorage persistence and system preference fallback)
 *************************************************/
/*************************************************
 * DarkMode Toggle
 *************************************************/
(function () {
  const buttons = [
    document.getElementById("theme-toggle"),
    document.getElementById("theme-toggle-mobile"),
  ].filter(Boolean);

  const html = document.documentElement;
  const STORAGE_KEY = "worldVision-theme";
  const saved = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const startDark = saved ? saved === "dark" : prefersDark;

  function syncButtons(isDark) {
    buttons.forEach((btn) => {
      btn.setAttribute("aria-pressed", String(isDark));
    });
  }

  if (startDark) {
    html.classList.add("dark");
  }

  syncButtons(startDark);

  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const nowDark = html.classList.toggle("dark");
      localStorage.setItem(STORAGE_KEY, nowDark ? "dark" : "light");
      syncButtons(nowDark);
    });
  });
})();
/*************************************************
 * Mobile Drawer Menu
 *************************************************/
const menuToggle = document.getElementById("menuToggle");
const closeMenuBtn = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");

function openMenu() {
  if (!mobileMenu || !menuOverlay) return;
  mobileMenu.classList.remove("-translate-x-full");
  menuOverlay.classList.remove("opacity-0", "pointer-events-none");
  document.body.classList.add("menu-open");
}

function closeMenu() {
  if (!mobileMenu || !menuOverlay) return;
  mobileMenu.classList.add("-translate-x-full");
  menuOverlay.classList.add("opacity-0", "pointer-events-none");
  document.body.classList.remove("menu-open");
}

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.contains("menu-open");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });
}

if (closeMenuBtn) {
  closeMenuBtn.addEventListener("click", closeMenu);
}

if (menuOverlay) {
  menuOverlay.addEventListener("click", closeMenu);
}

document.querySelectorAll("#mobileMenu a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    closeMenu();
  }
});

function flipCard(id) {
    document.getElementById(id).classList.toggle('flipped');
  }

// Touch support for flip
let touchStartX = 0;
document.querySelectorAll('.card-scene').forEach(card => {
  card.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  card.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) flipCard(card.id);
  });
});

// ── Card Flip Logic ──
// Only flip when clicking the card surface itself, not interactive children
document.querySelectorAll('.card-scene').forEach(function(scene) {

  function doFlip() {
    scene.classList.toggle('flipped');
    const isFlipped = scene.classList.contains('flipped');
    scene.setAttribute('aria-label',
      scene.id.replace('card-', '').replace('hydro','Hydrophobic').replace('phil','Hydrophilic').replace('pmma','PMMA')
      + ' IOL — ' + (isFlipped ? 'click to go back' : 'click to see specifications')
    );
  }

  // Click on card front face or card-visual/card-info areas → flip
  scene.addEventListener('click', function(e) {
    // If clicking inside back face (scrollable list, learn more, flip btn) — handle separately
    if (e.target.closest('.card-face.back')) return;
    doFlip();
  });

  // Keyboard on outer scene
  scene.addEventListener('keydown', function(e) {
    if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest('button')) {
      e.preventDefault();
      doFlip();
    }
  });

  // Touch swipe to flip
  let touchStartX = 0;
  scene.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  scene.addEventListener('touchend', function(e) {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) doFlip();
  });
});

// ── Back face buttons ──
document.querySelectorAll('.back-btn-flip').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    const card = btn.closest('.card-scene');
    card.classList.remove('flipped');
  });
});

document.querySelectorAll('.back-btn-learn').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    const card = btn.dataset.card;
    const urls = {
      hydro: 'https://freedomophthalmic.com/our-products/intraocular-lenses/hydrophobic-iol/',
      phil:  'https://freedomophthalmic.com/our-products/intraocular-lenses/hydrophilic-iol/',
      pmma:  'https://freedomophthalmic.com/our-products/intraocular-lenses/pmma-iol/'
    };
    if (urls[card]) window.open(urls[card], '_blank', 'noopener');
  });
});

// ── IFU links — prevent default since href="#" ──
document.querySelectorAll('.ifu-link').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    // Replace '#' with actual PDF URLs when ready
    alert('IFU document download coming soon.');
  });
});

// ── Nav links active state ──
document.querySelectorAll('.nav-links a').forEach(function(a) {
  a.addEventListener('click', function(e) {
    document.querySelectorAll('.nav-links a').forEach(x => x.classList.remove('active'));
    a.classList.add('active');
  });
});

