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

/*************************************************
 * Card Flip
 *************************************************/
function flipCard(id) {
  const card = document.getElementById(id);

  if (card) {
    card.classList.toggle("flipped");
  }
}

// Touch support for flip
let touchStartX = 0;

document.querySelectorAll(".card-scene").forEach((card) => {
  card.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.touches[0].clientX;
    },
    { passive: true }
  );

  card.addEventListener("touchend", (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;

    if (Math.abs(diff) > 40) {
      flipCard(card.id);
    }
  });
});

/*************************************************
 * Card Flip Logic
 *************************************************/
document.querySelectorAll(".card-scene").forEach(function (scene) {
  function doFlip() {
    scene.classList.toggle("flipped");

    const isFlipped = scene.classList.contains("flipped");

    scene.setAttribute(
      "aria-label",
      scene.id
        .replace("card-", "")
        .replace("hydro", "Hydrophobic")
        .replace("phil", "Hydrophilic")
        .replace("pmma", "PMMA") +
        " IOL — " +
        (isFlipped
          ? "click to go back"
          : "click to see specifications")
    );
  }

  scene.addEventListener("click", function (e) {
    if (e.target.closest(".card-face.back")) return;

    doFlip();
  });

  scene.addEventListener("keydown", function (e) {
    if (
      (e.key === "Enter" || e.key === " ") &&
      !e.target.closest("button")
    ) {
      e.preventDefault();
      doFlip();
    }
  });

  let touchStartX = 0;

  scene.addEventListener(
    "touchstart",
    function (e) {
      touchStartX = e.touches[0].clientX;
    },
    { passive: true }
  );

  scene.addEventListener("touchend", function (e) {
    const diff = touchStartX - e.changedTouches[0].clientX;

    if (Math.abs(diff) > 50) {
      doFlip();
    }
  });
});

/*************************************************
 * Back Face Buttons
 *************************************************/
document.querySelectorAll(".back-btn-flip").forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();

    const card = btn.closest(".card-scene");

    if (card) {
      card.classList.remove("flipped");
    }
  });
});

/*************************************************
 * IFU Links
 *************************************************/
document.querySelectorAll(".ifu-link").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    alert("IFU document download coming soon.");
  });
});

/*************************************************
 * Nav Active State
 *************************************************/
document.querySelectorAll(".nav-links a").forEach(function (a) {
  a.addEventListener("click", function () {
    document.querySelectorAll(".nav-links a").forEach((x) => {
      x.classList.remove("active");
    });

    a.classList.add("active");
  });
});

/*************************************************
 * sp-tab Switching
 *************************************************/
document.querySelectorAll(".sp-tab").forEach(function (tab) {
  tab.addEventListener("click", function () {
    document.querySelectorAll(".sp-tab").forEach((t) => {
      t.classList.remove("active");
    });

    document.querySelectorAll(".sp-panel").forEach((p) => {
      p.classList.remove("active");
    });

    tab.classList.add("active");

    const panel = document.getElementById(
      "tab-" + tab.dataset.tab
    );

    if (panel) {
      panel.classList.add("active");
    }
  });
});

/*************************************************
 * Eye Toggle
 *************************************************/
const eyeLeft = document.getElementById("eyeLeft");
const eyeRight = document.getElementById("eyeRight");

if (eyeLeft && eyeRight) {
  eyeLeft.addEventListener("click", function () {
    this.classList.toggle("active");
    eyeRight.classList.remove("active");
  });

  eyeRight.addEventListener("click", function () {
    this.classList.toggle("active");
    eyeLeft.classList.remove("active");
  });
}

/*************************************************
 * Populate IOL Power
 *************************************************/
(function () {
  const sel = document.getElementById("iolPower");

  if (!sel) return;

  for (let d = 6.0; d <= 30.0; d += 0.5) {
    const opt = document.createElement("option");

    opt.value = d.toFixed(1);
    opt.textContent = d.toFixed(1) + " D";

    sel.appendChild(opt);
  }
})();

/*************************************************
 * Next Page Navigation
 *************************************************/
function openTab(tabName) {
  document.querySelectorAll(".sp-tab").forEach((t) => {
    t.classList.remove("active");
  });

  document.querySelectorAll(".sp-panel").forEach((p) => {
    p.classList.remove("active");
  });

  const tabBtn = document.querySelector(
    '.sp-tab[data-tab="' + tabName + '"]'
  );

  const panel = document.getElementById("tab-" + tabName);

  if (tabBtn) tabBtn.classList.add("active");
  if (panel) panel.classList.add("active");
}

const btn1 = document.getElementById("btnNextToPatient");

if (btn1) {
  btn1.addEventListener("click", () =>
    openTab("patient")
  );
}

const btn2 = document.getElementById("btnNextToPreop");

if (btn2) {
  btn2.addEventListener("click", () =>
    openTab("preop")
  );
}

/*************************************************
 * Model Tab Switcher
 *************************************************/
document.querySelectorAll('.model-tab').forEach(function(tab) {

  tab.addEventListener('click', function() {

    document.querySelectorAll('.model-tab').forEach(function(t) {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });

    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    document.querySelectorAll('.model-panel').forEach(function(panel) {
      panel.classList.remove('active');
    });

    const targetPanel = document.getElementById(
      'panel-' + tab.dataset.model
    );

    if (targetPanel) {
      targetPanel.classList.add('active');
    }

  });

});

/*************************************************
 * Spec Model Button Switcher
 *************************************************/
document.querySelectorAll(".spec-card").forEach(function (card) {
  const btns = card.querySelectorAll(".spec-model-btn");

  btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      btns.forEach(function (b) {
        b.classList.remove("active");
      });

      btn.classList.add("active");

      card
        .querySelectorAll(".spec-rows")
        .forEach(function (r) {
          r.style.display = "none";
        });

      const target = document.getElementById(
        btn.dataset.rows
      );

      if (target) {
        target.style.display = "block";
      }
    });
  });
});

/*************************************************
 * Scroll Reveal
 *************************************************/
(function () {
  const revealEls = document.querySelectorAll(".reveal");

  if (revealEls.length === 0) return;

  const obs = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.09 }
  );

  revealEls.forEach(function (el) {
    obs.observe(el);
  });
})();