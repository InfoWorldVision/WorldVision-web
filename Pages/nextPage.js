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

const CYL_MODELS = [
  { name: 'TORICT3', iol: 3.75, corneal: 2.57 },
  { name: 'TORICT4', iol: 4.50, corneal: 3.08 },
  { name: 'TORICT5', iol: 5.25, corneal: 3.60 },
  { name: 'TORICT6', iol: 6.00, corneal: 4.11 },
];

/* ── Degrees to radians ── */
function toRad(deg) { return deg * Math.PI / 180; }
function toDeg(rad) {
  let d = rad * 180 / Math.PI;
  while (d < 0) d += 180;
  while (d >= 180) d -= 180;
  return d;
}

/* ── Crossed-Cylinder Method ──
    Converts cylinder @ axis into power vector components,
    adds SIA vector, converts back.
*/
function crossedCylinder(mag1, axis1, mag2, axis2) {
  // Power vectors: J0 = -C/2 * cos(2α),  J45 = -C/2 * sin(2α)
  const a1 = toRad(axis1), a2 = toRad(axis2);
  const j0 = (-mag1 / 2) * Math.cos(2 * a1) + (-mag2 / 2) * Math.cos(2 * a2);
  const j45 = (-mag1 / 2) * Math.sin(2 * a1) + (-mag2 / 2) * Math.sin(2 * a2);
  const resultMag = 2 * Math.sqrt(j0 * j0 + j45 * j45);
  const resultAxis = toDeg(0.5 * Math.atan2(j45, j0) + Math.PI / 2);
  return { mag: resultMag, axis: resultAxis };
}

/* ── Find best matching cylinder model ── */
function bestCylModel(neededCorneal) {
  let best = CYL_MODELS[0];
  let minDiff = Math.abs(neededCorneal - CYL_MODELS[0].corneal);
  CYL_MODELS.forEach(function(m) {
    const diff = Math.abs(neededCorneal - m.corneal);
    if (diff < minDiff) { minDiff = diff; best = m; }
  });
  return best;
}

/* ── Validate input ── */
function validate(id, min, max) {
  const el = document.getElementById(id);
  const err = document.getElementById(id + '-err');
  const val = parseFloat(el.value);
  if (isNaN(val) || val < min || val > max) {
    el.classList.add('error');
    if (err) err.classList.add('visible');
    return null;
  }
  el.classList.remove('error');
  if (err) err.classList.remove('visible');
  return val;
}

/* ── CALCULATE ── */
document.getElementById('btnCalculate').addEventListener('click', function() {
  // Switch to preop tab so user sees any errors
  document.querySelectorAll('.sp-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.sp-panel').forEach(p => p.classList.remove('active'));
  document.querySelector('[data-tab="preop"]').classList.add('active');
  document.getElementById('tab-preop').classList.add('active');

  const flatK   = validate('flatK', 30, 60);
  const flatAx  = validate('flatAxis', 0, 180);
  const steepK  = validate('steepK', 30, 60);
  const steepAx = validate('steepAxis', 0, 180);
  const sia     = validate('sia', 0, 2);
  const il      = validate('incision', 0, 360);

  if ([flatK, flatAx, steepK, steepAx, sia, il].some(v => v === null)) return;

  /* Step 1: Corneal astigmatism */
  const cornAst = steepK - flatK;
  const cornAxis = steepAx; // steep axis = axis of corneal astigmatism

  /* Step 2: SIA vector (at incision axis + 90 for against-the-rule) */
  const siaAxis = il % 180;

  /* Step 3: Crossed cylinder — combine corneal astigmatism with SIA */
  const crossed = crossedCylinder(cornAst, cornAxis, sia, siaAxis);

  /* Step 4: Best model */
  const model = bestCylModel(crossed.mag);
  const placementAxis = Math.round(crossed.axis);

  /* Step 5: Residual (difference between crossed result and chosen model) */
  const residual = crossedCylinder(crossed.mag, crossed.axis, model.corneal, crossed.axis + 90);

  /* ── Populate results ── */
  document.getElementById('res-axis').textContent      = placementAxis + '°';
  document.getElementById('res-cyl-iol').textContent   = model.iol.toFixed(2);
  document.getElementById('res-cyl-cor').textContent   = model.corneal.toFixed(2);

  const modelDisplay = document.getElementById('iolModel').value || 'FREEDOM TORIC';
  document.getElementById('res-model').textContent     = model.name;
  document.getElementById('res-model-sub').textContent = modelDisplay.replace('_', ' ');

  document.getElementById('res-preop-ast').textContent = cornAst.toFixed(2) + ' D × ' + cornAxis + '°';
  document.getElementById('res-sia-val').textContent   = sia.toFixed(2) + ' D × ' + siaAxis + '°';
  document.getElementById('res-crossed').textContent   = crossed.mag.toFixed(2) + ' D × ' + Math.round(crossed.axis) + '°';
  document.getElementById('res-residual').textContent  = residual.mag.toFixed(2) + ' D × ' + Math.round(residual.axis) + '°';
  document.getElementById('res-steep-ax').textContent  = steepAx + '°';
  document.getElementById('res-flat-ax').textContent   = flatAx + '°';
  document.getElementById('res-incision-val').textContent = il + '°';

  /* ── Update axis diagram ── */
  document.getElementById('axisLineGroup').setAttribute('transform', 'rotate(' + (placementAxis - 90) + ', 90, 90)');
  document.getElementById('axisDiagramLabel').textContent = 'Axis of placement: ' + placementAxis + '°';

  /* ── Show results ── */
  document.getElementById('emptyState').style.display = 'none';
  const panel = document.getElementById('resultsPanel');
  panel.classList.remove('visible');
  void panel.offsetWidth; // reflow
  panel.classList.add('visible');
});

/* ── CLEAR ── */
document.getElementById('btnClear').addEventListener('click', function() {
  ['flatK','flatAxis','steepK','steepAxis','incision'].forEach(function(id) {
    document.getElementById(id).value = '';
    document.getElementById(id).classList.remove('error');
    const err = document.getElementById(id + '-err');
    if (err) err.classList.remove('visible');
  });
  document.getElementById('sia').value = '0.50';
  document.getElementById('iolPower').value = '';
  document.getElementById('iolModel').value = '';
  document.getElementById('patientName').value = '';
  document.getElementById('resultsPanel').classList.remove('visible');
  document.getElementById('emptyState').style.display = '';
});

/* ── PRINT ── */
document.getElementById('btnPrint').addEventListener('click', function() {
  window.print();
});

/* ── EMAIL ── */
document.getElementById('btnEmail').addEventListener('click', function() {
  const email = document.getElementById('doctorEmail').value || '';
  const axis  = document.getElementById('res-axis').textContent;
  const cyl   = document.getElementById('res-cyl-iol').textContent;
  const model = document.getElementById('res-model').textContent;
  const patient = document.getElementById('patientName').value || 'Patient';
  const subject = encodeURIComponent('Toric IOL Calculation — ' + patient);
  const body = encodeURIComponent(
    'Toric IOL Calculation Result\n\n' +
    'Patient: ' + patient + '\n' +
    'Axis of Placement: ' + axis + '\n' +
    'Cylinder Power (IOL): ' + cyl + ' D\n' +
    'Recommended Model: ' + model + '\n\n' +
    'Calculated by World Vision Toric Calculator'
  );
  window.location.href = 'mailto:' + email + '?subject=' + subject + '&body=' + body;
});