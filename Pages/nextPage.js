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

  if (startDark) html.classList.add("dark");

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

const mobileMainView = document.getElementById("mobileMainView");
const mobileProductsView = document.getElementById("mobileProductsView");
const mobileIolView = document.getElementById("mobileIolView");

const mobileProductsBtn = document.getElementById("mobileProductsBtn");
const mobileIolBtn = document.getElementById("mobileIolBtn");

const backToMainMenu = document.getElementById("backToMainMenu");
const backToProductsMenu = document.getElementById("backToProductsMenu");

let currentMobileView = mobileMainView;
let mobileViewTimer = null;

const VIEW_DEPTH = {
  mobileMainView: 0,
  mobileProductsView: 1,
  mobileIolView: 2,
};

function showMobileView(nextView) {
  if (!mobileMainView || !mobileProductsView || !mobileIolView || !nextView) return;

  const views = [mobileMainView, mobileProductsView, mobileIolView];
  const goingForward =
    !currentMobileView ||
    VIEW_DEPTH[nextView.id] > VIEW_DEPTH[currentMobileView.id];

  clearTimeout(mobileViewTimer);

  if (currentMobileView === nextView) {
    views.forEach((v) => v.classList.add("hidden"));
    views.forEach((v) =>
      v.classList.remove("flex", "view-enter", "view-enter-back", "view-exit")
    );

    nextView.classList.remove("hidden");
    nextView.classList.add("flex", "view-enter");
    return;
  }

  if (currentMobileView) {
    currentMobileView.classList.remove("view-enter", "view-enter-back");
    currentMobileView.classList.add("view-exit");
  }

  mobileViewTimer = setTimeout(() => {
    views.forEach((v) => v.classList.add("hidden"));
    views.forEach((v) =>
      v.classList.remove("flex", "view-enter", "view-enter-back", "view-exit")
    );

    nextView.classList.remove("hidden");
    nextView.classList.add("flex", goingForward ? "view-enter" : "view-enter-back");

    currentMobileView = nextView;
  }, 155);
}

function openMenu() {
  if (!mobileMenu || !menuOverlay) return;

  mobileMenu.classList.remove("-translate-x-full");
  menuOverlay.classList.remove("opacity-0", "pointer-events-none");
  document.body.classList.add("menu-open");

  if (mobileMainView) showMobileView(mobileMainView);
}

function closeMenu() {
  if (!mobileMenu || !menuOverlay) return;

  mobileMenu.classList.add("-translate-x-full");
  menuOverlay.classList.add("opacity-0", "pointer-events-none");
  document.body.classList.remove("menu-open");

  if (mobileMainView) showMobileView(mobileMainView);
}

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.contains("menu-open");
    if (isOpen) closeMenu();
    else openMenu();
  });
}

if (closeMenuBtn) {
  closeMenuBtn.addEventListener("click", closeMenu);
}

if (menuOverlay) {
  menuOverlay.addEventListener("click", closeMenu);
}

if (mobileProductsBtn) {
  mobileProductsBtn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    showMobileView(mobileProductsView);
  });
}

if (mobileIolBtn) {
  mobileIolBtn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    showMobileView(mobileIolView);
  });
}

if (backToMainMenu) {
  backToMainMenu.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    showMobileView(mobileMainView);
  });
}

if (backToProductsMenu) {
  backToProductsMenu.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    showMobileView(mobileProductsView);
  });
}

document.querySelectorAll("#mobileMenu a").forEach((link) => {
  if (link.id === "mobileProductsBtn") return;

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
  if (card) card.classList.toggle("flipped");
}

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
        (isFlipped ? "click to go back" : "click to see specifications")
    );
  }

  scene.addEventListener("click", function (e) {
    if (e.target.closest(".card-face.back")) return;
    doFlip();
  });

  scene.addEventListener("keydown", function (e) {
    if ((e.key === "Enter" || e.key === " ") && !e.target.closest("button")) {
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
    if (card) card.classList.remove("flipped");
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

    const panel = document.getElementById("tab-" + tab.dataset.tab);
    if (panel) panel.classList.add("active");
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

  const tabBtn = document.querySelector('.sp-tab[data-tab="' + tabName + '"]');
  const panel = document.getElementById("tab-" + tabName);

  if (tabBtn) tabBtn.classList.add("active");
  if (panel) panel.classList.add("active");
}

const btn1 = document.getElementById("btnNextToPatient");

if (btn1) {
  btn1.addEventListener("click", () => openTab("patient"));
}

const btn2 = document.getElementById("btnNextToPreop");

if (btn2) {
  btn2.addEventListener("click", () => openTab("preop"));
}

/*************************************************
 * Model Tab Switcher
 *************************************************/
document.querySelectorAll(".model-tab").forEach(function (tab) {
  tab.addEventListener("click", function () {
    document.querySelectorAll(".model-tab").forEach(function (t) {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });

    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");

    document.querySelectorAll(".model-panel").forEach(function (panel) {
      panel.classList.remove("active");
    });

    const targetPanel = document.getElementById("panel-" + tab.dataset.model);
    if (targetPanel) targetPanel.classList.add("active");
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

      card.querySelectorAll(".spec-rows").forEach(function (r) {
        r.style.display = "none";
      });

      const target = document.getElementById(btn.dataset.rows);
      if (target) target.style.display = "block";
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

/*************************************************
 * Contact Page — Subject Chips
 *************************************************/
document.querySelectorAll(".subject-chip").forEach(function (chip) {
  chip.addEventListener("click", function () {
    document.querySelectorAll(".subject-chip").forEach(function (c) {
      c.classList.remove("active");
    });

    chip.classList.add("active");

    var sf = document.getElementById("subjectField");
    if (sf) sf.value = chip.dataset.subject;
  });
});

/*************************************************
 * Contact Page — Form Submit
 *************************************************/
(function () {
  var form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("cf-name");
    var email = document.getElementById("cf-email");
    var msg = document.getElementById("cf-msg");

    if (!name || !email || !msg) return;

    if (!name.value.trim() || !email.value.trim() || !msg.value.trim()) {
      alert("Please fill in your name, email, and message.");
      return;
    }

    form.style.display = "none";

    var success = document.getElementById("formSuccess");
    if (success) success.classList.add("show");
  });
})();

function resetForm() {
  var form = document.getElementById("contactForm");
  var success = document.getElementById("formSuccess");

  if (form) {
    form.reset();
    form.style.display = "";
  }

  if (success) success.classList.remove("show");

  document.querySelectorAll(".subject-chip").forEach(function (c, i) {
    c.classList.toggle("active", i === 0);
  });

  var sf = document.getElementById("subjectField");
  if (sf) sf.value = "Product Enquiry";
}

/*************************************************
 * Contact Page — FAQ Accordion
 *************************************************/
document.querySelectorAll(".faq-item").forEach(function (item) {
  var q = item.querySelector(".faq-q");
  if (!q) return;

  q.addEventListener("click", function () {
    var wasOpen = item.classList.contains("open");

    document.querySelectorAll(".faq-item").forEach(function (i) {
      i.classList.remove("open");
    });

    if (!wasOpen) {
      item.classList.add("open");
    }
  });
});

/*************************************************
 * Toric Calculator — only runs on toricCalculator.html
 *************************************************/
(function () {
  if (!document.getElementById("btnCalculate")) return;

  const CYL_MODELS = [
    { name: "TORICT3", iol: 3.75, corneal: 2.57 },
    { name: "TORICT4", iol: 4.5, corneal: 3.08 },
    { name: "TORICT5", iol: 5.25, corneal: 3.6 },
    { name: "TORICT6", iol: 6.0, corneal: 4.11 },
  ];

  function toRad(deg) {
    return (deg * Math.PI) / 180;
  }

  function toDeg(rad) {
    let d = (rad * 180) / Math.PI;
    while (d < 0) d += 180;
    while (d >= 180) d -= 180;
    return d;
  }

  function crossedCylinder(mag1, axis1, mag2, axis2) {
    const a1 = toRad(axis1);
    const a2 = toRad(axis2);

    const j0 =
      (-mag1 / 2) * Math.cos(2 * a1) +
      (-mag2 / 2) * Math.cos(2 * a2);

    const j45 =
      (-mag1 / 2) * Math.sin(2 * a1) +
      (-mag2 / 2) * Math.sin(2 * a2);

    const resultMag = 2 * Math.sqrt(j0 * j0 + j45 * j45);
    const resultAxis = toDeg(0.5 * Math.atan2(j45, j0) + Math.PI / 2);

    return { mag: resultMag, axis: resultAxis };
  }

  function bestCylModel(neededCorneal) {
    let best = CYL_MODELS[0];
    let minDiff = Math.abs(neededCorneal - CYL_MODELS[0].corneal);

    CYL_MODELS.forEach(function (m) {
      const diff = Math.abs(neededCorneal - m.corneal);

      if (diff < minDiff) {
        minDiff = diff;
        best = m;
      }
    });

    return best;
  }

  function validate(id, min, max) {
    const el = document.getElementById(id);
    const err = document.getElementById(id + "-err");

    if (!el) return null;

    const val = parseFloat(el.value);

    if (isNaN(val) || val < min || val > max) {
      el.classList.add("error");
      if (err) err.classList.add("visible");
      return null;
    }

    el.classList.remove("error");
    if (err) err.classList.remove("visible");

    return val;
  }

  document.getElementById("btnCalculate").addEventListener("click", function () {
    document.querySelectorAll(".sp-tab").forEach((t) => t.classList.remove("active"));
    document.querySelectorAll(".sp-panel").forEach((p) => p.classList.remove("active"));

    const preopTab = document.querySelector('[data-tab="preop"]');
    const preopPanel = document.getElementById("tab-preop");

    if (preopTab) preopTab.classList.add("active");
    if (preopPanel) preopPanel.classList.add("active");

    const flatK = validate("flatK", 30, 60);
    const flatAx = validate("flatAxis", 0, 180);
    const steepK = validate("steepK", 30, 60);
    const steepAx = validate("steepAxis", 0, 180);
    const sia = validate("sia", 0, 2);
    const il = validate("incision", 0, 360);

    if ([flatK, flatAx, steepK, steepAx, sia, il].some((v) => v === null)) return;

    const cornAst = steepK - flatK;
    const cornAxis = steepAx;
    const siaAxis = il % 180;

    const crossed = crossedCylinder(cornAst, cornAxis, sia, siaAxis);
    const model = bestCylModel(crossed.mag);
    const placementAxis = Math.round(crossed.axis);
    const residual = crossedCylinder(crossed.mag, crossed.axis, model.corneal, crossed.axis + 90);

    function setTxt(id, val) {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    }

    setTxt("res-axis", placementAxis + "°");
    setTxt("res-cyl-iol", model.iol.toFixed(2));
    setTxt("res-cyl-cor", model.corneal.toFixed(2));
    setTxt("res-model", model.name);

    const modelSel = document.getElementById("iolModel");
    setTxt("res-model-sub", modelSel ? modelSel.value.replace("_", " ") : "WORLD VISION TORIC");

    setTxt("res-preop-ast", cornAst.toFixed(2) + " D × " + cornAxis + "°");
    setTxt("res-sia-val", sia.toFixed(2) + " D × " + siaAxis + "°");
    setTxt("res-crossed", crossed.mag.toFixed(2) + " D × " + Math.round(crossed.axis) + "°");
    setTxt("res-residual", residual.mag.toFixed(2) + " D × " + Math.round(residual.axis) + "°");
    setTxt("res-steep-ax", steepAx + "°");
    setTxt("res-flat-ax", flatAx + "°");
    setTxt("res-incision-val", il + "°");

    const axisGroup = document.getElementById("axisLineGroup");
    const axisLabel = document.getElementById("axisDiagramLabel");

    if (axisGroup) {
      axisGroup.setAttribute("transform", "rotate(" + (placementAxis - 90) + ", 90, 90)");
    }

    if (axisLabel) {
      axisLabel.textContent = "Axis of placement: " + placementAxis + "°";
    }

    const emptyState = document.getElementById("emptyState");
    const panel = document.getElementById("resultsPanel");

    if (emptyState) emptyState.style.display = "none";

    if (panel) {
      panel.classList.remove("visible");
      void panel.offsetWidth;
      panel.classList.add("visible");
    }
  });

  const btnClear = document.getElementById("btnClear");

  if (btnClear) {
    btnClear.addEventListener("click", function () {
      ["flatK", "flatAxis", "steepK", "steepAxis", "incision"].forEach(function (id) {
        const el = document.getElementById(id);
        if (!el) return;

        el.value = "";
        el.classList.remove("error");

        const err = document.getElementById(id + "-err");
        if (err) err.classList.remove("visible");
      });

      const sia = document.getElementById("sia");
      const iolPower = document.getElementById("iolPower");
      const iolModel = document.getElementById("iolModel");
      const patient = document.getElementById("patientName");

      if (sia) sia.value = "0.50";
      if (iolPower) iolPower.value = "";
      if (iolModel) iolModel.value = "";
      if (patient) patient.value = "";

      const panel = document.getElementById("resultsPanel");
      const emptyState = document.getElementById("emptyState");

      if (panel) panel.classList.remove("visible");
      if (emptyState) emptyState.style.display = "";
    });
  }

  const btnPrint = document.getElementById("btnPrint");

  if (btnPrint) {
    btnPrint.addEventListener("click", function () {
      window.print();
    });
  }

  const btnEmail = document.getElementById("btnEmail");

  if (btnEmail) {
    btnEmail.addEventListener("click", function () {
      const emailEl = document.getElementById("doctorEmail");
      const axisEl = document.getElementById("res-axis");
      const cylEl = document.getElementById("res-cyl-iol");
      const modelEl = document.getElementById("res-model");
      const patientEl = document.getElementById("patientName");

      const email = emailEl ? emailEl.value : "";
      const axis = axisEl ? axisEl.textContent : "";
      const cyl = cylEl ? cylEl.textContent : "";
      const model = modelEl ? modelEl.textContent : "";
      const patient = patientEl ? patientEl.value : "Patient";

      const subject = encodeURIComponent("Toric IOL Calculation — " + patient);
      const body = encodeURIComponent(
        "Toric IOL Calculation Result\n\n" +
          "Patient: " +
          patient +
          "\n" +
          "Axis of Placement: " +
          axis +
          "\n" +
          "Cylinder Power (IOL): " +
          cyl +
          " D\n" +
          "Recommended Model: " +
          model +
          "\n\n" +
          "Calculated by World Vision Toric Calculator"
      );

      window.location.href = "mailto:" + email + "?subject=" + subject + "&body=" + body;
    });
  }
})();
