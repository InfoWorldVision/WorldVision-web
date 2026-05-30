function getActivePage(){
  const path = window.location.pathname;
  const filename = path.split("/").pop();
  const name = filename.replace(/\.html?$/i, "");
  return name || "index";
}

function pageFromHref(href) {
  if (!href || href.startsWith("#")) return href.replace("#", "");

  return href
    .split("/")
    .pop()
    .replace(/\.html?$/i, "");
}


const ACTIVE_PAGE = getActivePage();


/*************************************************
 * META
 *************************************************/

function renderMeta() {
  document.title = PAGE.meta.title;
  const m = qs("pageMeta");
  if (m) m.setAttribute("content", PAGE.meta.description);
}

/*************************************************
 * PAGE DATA
 *************************************************/

const PAGE = {

  meta: (() => {
    const metaMap = {
      hydrophobicIol: {
        title: "Hydrophobic IOL — World Vision Ophthalmic",
        description: "World Vision Hydrophobic IOL — USA medical-grade acrylic, <0.5% water, zero glistening."
      },

      hydrophilicIOL: {
        title: "Hydrophilic IOL — World Vision Ophthalmic",
        description: "World Vision Hydrophilic IOL — Nano Fold, Nano Flex, Nano Flex Y. European medical-grade hydrophilic acrylic, 25% water content, available in spheric and aspheric designs."
      },

      nanoFold: {
        title: "Nano Fold — World Vision Ophthalmic",
        description: "World Vision Nano Fold — Spheric 360° Square Edge Hydrophilic Acrylic IOL. Models NFR 574 SQ, NFR 600 SQ, NFC 600 SQ, NFM 604 SQ."
      },

      nanoFlex: {
        title: "Nano Flex — World Vision Ophthalmic",
        description: "World Vision Nano Flex — Aspheric 360° Square Edge Hydrophilic IOL. Clear and Yellow (Nano Flex Y) variants with full model specifications."
      },

      nanoClaro: {
        title: "Monofocal Hydrophobic IOL — World Vision Ophthalmic",
        description: "World Vision Monofocal Hydrophobic IOL — NHPC 600, NHPC 600SQ. USA medical-grade aspheric hydrophobic acrylic with full technical specifications."
      },

      "iol-page": {
        title: "Intraocular Lens — World Vision Ophthalmic",
        description: "Explore World Vision intraocular lens solutions including hydrophobic, hydrophilic and PMMA IOLs."
      },

      toricCalculator: {
        title: "Toric Calculator — World Vision Ophthalmic",
        description: "Calculate toric IOL alignment and cylinder correction using the World Vision calculator."
      },

      blog: {
        title: "Blog — World Vision Ophthalmic",
        description: "Latest ophthalmic insights, surgical updates and World Vision news."
      },

      gallery: {
        title: "Gallery — World Vision Ophthalmic",
        description: "Explore product images, surgical visuals and ophthalmic solutions from World Vision."
      },

      contactUs: {
        title: "Contact Us — World Vision Ophthalmic",
        description: "Get in touch with World Vision Ophthalmic for product enquiries and support."
      },

      index: {
        title: "World Vision Ophthalmic",
        description: "World Vision Ophthalmic Pvt. Ltd. — premium ophthalmic solutions and intraocular lenses."
      },
      nanoClaro: {
        title: "Nano Claro — World Vision Ophthalmic",
        description: "World Vision Nano Claro — advanced hydrophobic acrylic IOL with superior optical performance."
      },
      nanoGrand: {
        title: "Nano Grand — World Vision Ophthalmic",
        description: "World Vision Nano Grand — high-performance hydrophobic acrylic IOL for complex cases."
      }
    };

    return metaMap[ACTIVE_PAGE] || {
      title: "World Vision Ophthalmic",
      description: "World Vision Ophthalmic Pvt. Ltd."
    };

  })(),

  company: {
    name:      "World Vision",
    subtitle:  "Ophthalmic Pvt. Ltd.",
    logo:      "../Multimedia/WVO_Logo1.png",
    whatsapp:  "https://chat.whatsapp.com/Dbeem4cDrbHKFzvaBbOIhv",
    copyright: "© 2026 World Vision Ophthalmic Pvt. Ltd. · All rights reserved.",
  },

  nav: {
    links: [
      { label: "Home",           href: "../Pages/index.html",         page: "index"          },
      { label: "Hydrophobic IOL",href: "../Pages/hydrophobicIol.html",page: "hydrophobicIol" },
      { label: "About Us",       href: "../Pages/aboutUs.html",       page: "aboutUs"        },
      { label: "Gallery",        href: "../Pages/gallery.html",       page: "gallery"        },
      { label: "Contact Us",     href: "../Pages/contactUs.html",     page: "contactUs"      },
    ],
    cta: { label: "Toric Calculator", href: "../Pages/toricCalculator.html", icon:  "fa-calculator", color: "var(--neu-text)" },
    products: {
      label: "Our Products",
      // Pages that belong under the Products dropdown — used for active-nav detection
      pages: ["iol-page","hydrophobicIol","hydrophilicIOL","pmmaIol","premiumIol","pharmaProducts","microSurgicalBlades","nanoClaro","nanoGrand","nanoClaroPlus","nanoGrandPlus","nanoFold","nanoFlex"],
      children: [
        {
          label: "Intraocular Lens",
          href:  "../Pages/iol-page.html",
          icon:  "fa-eye",
          color: "var(--neu-accent2)",
          children: [
            { label: "Hydrophobic IOL",  href: "../Pages/hydrophobicIol.html", icon: "fa-shield-halved",      color: "text-blue-400"  },
            { label: "Hydrophilic IOL",  href: "../Pages/hydrophilicIOL.html", icon: "fa-shield-halved",      color: "text-teal-400"  },
            { label: "PMMA IOL",         href: "../Pages/pmmaIOL.html",        icon: "fa-circle-half-stroke", color: "text-amber-400" },
          ],
        },
        { label: "Premium IOL", href: "#", icon: "fa-star-of-life", color: "var(--neu-accent2)" },
        {
          label: "Pharma Products",
          href:  "#",
          icon:  "fa-capsules",
          color: "var(--neu-accent2)",
          children: [
            { label: "World Vision Chol",  href: "#", icon: "fa-flask",   color: "text-purple-400" },
            { label: "World Vision TBlue", href: "#", icon: "fa-flask",   color: "text-blue-400"   },
            { label: "World Vision Visc",  href: "#", icon: "fa-droplet", color: "text-teal-400"   },
          ],
        },
        {
          label: "Micro Surgical Blades",
          href:  "#",
          icon:  "fa-cut",
          color: "var(--neu-accent2)",
          children: [
            { label: "Keratome",  href: "#", icon: "fa-pen-fancy",          color: "text-slate-500" },
            { label: "Crescent",  href: "#", icon: "fa-moon",               color: "text-blue-400"  },
            { label: "Lance Ip",  href: "#", icon: "fa-staff-snake",        color: "text-amber-400" },
            { label: "MVR Blade", href: "#", icon: "fa-diamond-turn-right", color: "text-red-400"   },
          ],
        },
      ],
    },
    mobile: {
      main: [
        { label: "Home",             href: "../Pages/index.html",           page: "index"           },
        { label: "Toric Calculator", href: "../Pages/toricCalculator.html", page: "toricCalculator" },
        { label: "Gallery",          href: "../Pages/gallery.html",         page: "gallery"         },
        { label: "About Us",         href: "../Pages/aboutUs.html",         page: "aboutUs"         },
        { label: "Contact Us",       href: "../Pages/contactUs.html",       page: "contactUs"       },
      ],
      products: {
        back:     { label: "Our Products" },
        iol:      { label: "Intraocular Lens",      icon: "fa-eye",        color: "text-[#0055a5]" },
        pharma:   { label: "Pharma Products",       icon: "fa-capsules",   color: "text-[#0055a5]" },
        blade:    { label: "Micro Surgical Blades", icon: "fa-cut",      color: "text-[#0055a5]" },
        children: [
          { label: "Premium IOL", href: "#", icon: "fa-star-of-life", color: "text-[#0055a5]" },
        ],
      },
      // VIEW 3 — IOL sub-menu
      iol: {
        back:  { label: "Intraocular Lens" },
        children: [
          { label: "Hydrophobic IOL", href: "../Pages/hydrophobicIol.html", icon: "fa-shield-halved",      color: "text-[#0055a5]" },
          { label: "Hydrophilic IOL", href: "../Pages/hydrophilicIOL.html", icon: "fa-shield-halved",      color: "text-teal-500"  },
          { label: "PMMA IOL",        href: "../Pages/pmmaIOL.html",        icon: "fa-circle-half-stroke", color: "text-amber-500" },
        ],
      },
      // VIEW 4 — Pharma sub-menu
      pharma: {
        back:  { label: "Pharma Products" },
        children: [
          { label: "World Vision Chol",  href: "#", icon: "fa-flask",   color: "text-purple-500" },
          { label: "World Vision TBlue", href: "#", icon: "fa-flask",   color: "text-blue-500"   },
          { label: "World Vision Visc",  href: "#", icon: "fa-droplet", color: "text-teal-500"   },
        ],
      },
      // VIEW 5 — Blades sub-menu
      blade: {
        back:  { label: "Surgical Blades" },
        children: [
          { label: "Keratome",  href: "#", icon: "fa-pen-fancy",          color: "text-slate-500" },
          { label: "Crescent",  href: "#", icon: "fa-moon",               color: "text-blue-500"  },
          { label: "Lance Ip",  href: "#", icon: "fa-staff-snake",        color: "text-amber-500" },
          { label: "MVR Blade", href: "#", icon: "fa-diamond-turn-right", color: "text-red-500"   },
        ],
      },
    },
  },

  breadcrumb: (() => {
    const map = {
      "iol-page": [
        { label: "Home",               href: "../Pages/index.html" },
        { label: "Our Products",       href: "#"                   },
        { label: "Intraocular Lenses", current: true               },
      ],
      hydrophobicIol: [
        { label: "Home",               href: "../Pages/index.html"    },
        { label: "Our Products",       href: "#"                      },
        { label: "Intraocular Lenses", href: "../Pages/iol-page.html" },
        { label: "Hydrophobic IOL",    current: true                  },
      ],
      hydrophilicIOL: [
        { label: "Home",               href: "../Pages/index.html"    },
        { label: "Our Products",       href: "#"                      },
        { label: "Intraocular Lenses", href: "../Pages/iol-page.html" },
        { label: "Hydrophilic IOL",    current: true                  },
      ],
      pmmaIOL: [
        { label: "Home",               href: "../Pages/index.html"          },
        { label: "Our Products",       href: "#"                            },
        { label: "Intraocular Lenses", href: "../Pages/iol-page.html"       },
        { label: "PMMA IOL",           current: true                        },
      ],
      nanoFold: [
        { label: "Home",               href: "../Pages/index.html"          },
        { label: "Our Products",       href: "#"                             },
        { label: "Hydrophilic IOL",    href: "../Pages/hydrophilicIOL.html"  },
        { label: "Nano Fold",          current: true                         },
      ],
      nanoFlex: [
        { label: "Home",               href: "../Pages/index.html"          },
        { label: "Our Products",       href: "#"                             },
        { label: "Hydrophilic IOL",    href: "../Pages/hydrophilicIOL.html"  },
        { label: "Nano Flex",          current: true                         },
      ],
      nanoClaro: [
        { label: "Home",               href: "../Pages/index.html"          },
        { label: "Our Products",       href: "#"                             },
        { label: "Hydrophobic IOL",    href: "../Pages/hydrophobicIol.html"  },
        { label: "Nano Claro",         current: true                         },
      ],
      nanoClaroPlus: [
        { label: "Home",               href: "../Pages/index.html"          },
        { label: "Our Products",       href: "#"                             },
        { label: "Hydrophobic IOL",    href: "../Pages/hydrophobicIol.html"  },
        { label: "Nano Claro Plus",    current: true                         },
      ],
      nanoGrand: [
        { label: "Home",               href: "../Pages/index.html"          },
        { label: "Our Products",       href: "#"                             },
        { label: "Hydrophobic IOL",    href: "../Pages/hydrophobicIol.html"  },
        { label: "Nano Grand",         current: true                         },
      ],
      nanoGrandPlus: [
        { label: "Home",               href: "../Pages/index.html"          },
        { label: "Our Products",       href: "#"                             },
        { label: "Hydrophobic IOL",    href: "../Pages/hydrophobicIol.html"  },
        { label: "Nano Grand Plus",    current: true                         },
      ],
    };
    return map[ACTIVE_PAGE] || map["iol-page"];
  })(),

  hero: {
    eyebrow: { pulse: true, text: "USA Medical Grade · Acrylic" },
    heading: "Hydrophobic<br><em>IOL Range</em>",
    desc:    "Engineered from USA-sourced medical-grade acrylic with less than 0.5% water content — the only true hydrophobic material. Superior surface hardness, zero glistening, and outstanding optical clarity for every surgical need.",
    btns: [
      { label: "Explore Models", href: "#models",             icon: "fa-grid-2",    style: "primary" },
      { label: "All IOLs",       href: "../Pages/iol-page.html", icon: "fa-arrow-left", style: "ghost", iconStyle: "font-size:11px;" },
    ],
  },

  specs: [
    { icon: "fa-flask-vial",      num: "<0.5%", label: "Water Content",      delay: "delay-1" },
    { icon: "fa-flag-usa",        num: "USA",   label: "Raw Material Origin", delay: "delay-2" },
    { icon: "fa-ruler-horizontal",num: "2.2mm", label: "Min Incision Size",   delay: "delay-3" },
    { icon: "fa-layer-group",     num: "17+",   label: "Lens Models",         delay: "delay-4" },
  ],

  models: {
    eyebrow: { icon: "fa-grid-2", text: "Product Lines" },
    heading: "<em>Four</em> design families",
    sub:     "Every model uses the same USA medical-grade hydrophobic acrylic base — available across monofocal, multifocal, toric and separate optical designs.",
    cards: [
      {
        href:    "../Pages/nanoClaro.html",
        variant: "nanoClaro",
        iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><ellipse cx="12" cy="12" rx="10" ry="5"/></svg>`,
        tag:     "Semiloaded",
        name:    "Nano Claro",
        desc:    "Hydrophobic Acrylic, 360° Square Edge Aspheric Intraocular Lenses with Preloaded Injector. Single focal point for crystal-clear distance vision. The most widely used IOL design globally — simple, reliable, and proven. Available in standard and aspheric optics.",
        chips:   ["NHPC 600", "NHPC 600SQ"],
        delay:   "delay-1",
      },
      {
        href:    "../Pages/nanoGrand.html",
        variant: "nanoGrand",
        iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
        tag:     "Semiloaded",
        name:    "Nano Grand",
        desc:    "Yellow Hydrophobic Acrylic, 360° Square Edge Aspheric Intraocular Lenses with Preloaded Injector. Multiple focal points for full-range vision — near, intermediate and distance. Reduces spectacle dependence. Available in bifocal, EDOF and trifocal designs.",
        chips:   ["NHPC 600Y", "NHPC 600QY"],
        delay:   "delay-2",
      },
      {
        href:    "../Pages/nanoClaroPlus.html",
        variant: "nanoClaroPlus",
        iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><ellipse cx="12" cy="12" rx="10" ry="5"/><line x1="12" y1="7" x2="12" y2="17"/><line x1="2" y1="12" x2="22" y2="12"/></svg>`,
        tag:     "Preloaded",
        name:    "Nano Claro Plus",
        desc:    "Hydrophobic Acrylic, 360° Square Edge Aspheric Intraocular Lenses with Preloaded Injector. Designed to correct pre-existing corneal astigmatism simultaneously with cataract removal. Available in monofocal toric, multifocal toric, EDOF toric, and trifocal toric options.",
        chips:   ["NHPC 600P", "NHPC 600PSQ"],
        delay:   "delay-3",
      },
      {
        href:    "../Pages/nanoGrandPlus.html",
        variant: "nanoGrandPlus",
        iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/></svg>`,
        tag:     "Preloaded",
        name:    "Nano Grand Plus",
        desc:    "Hydrophobic Acrylic, 360° Square Edge Aspheric Intraocular Lenses with Preloaded Injector. Designed to correct pre-existing corneal astigmatism simultaneously with cataract removal. Available in monofocal toric, multifocal toric, EDOF toric, and trifocal toric options.",
        chips:   ["NHPC 600PY", "NHPC 600PQY"],
        delay:   "delay-4",
      },
    ],
  },

  material: {
    eyebrow: { icon: "fa-atom", text: "Material Science" },
    heading: "Why <em>Hydrophobic</em> matters",
    sub:     "Most competitors use materials with over 4% water content and merely call them hydrophobic. World Vision uses only genuine USA medical-grade acrylic with less than 0.5% water — the real standard.",
    features: [
      {
        icon:  "fa-droplet-slash",
        title: "Zero Glistening & No Whitening",
        desc:  "The ultra-low water content eliminates microvacuoles that cause glistening — a known long-term visual degradation issue with inferior materials.",
      },
      {
        icon:  "fa-shield-halved",
        title: "Superior Surface Hardness",
        desc:  "Harder surface compared to high-water acrylic means better stability in the capsular bag, less abrasion during insertion, and longer-lasting optical clarity.",
      },
      {
        icon:  "fa-eye",
        title: "Low Refractive Index",
        desc:  "Specifically engineered low refractive index reduces the risk of dysphotopsia — glares and halos that compromise patient satisfaction post-surgery.",
      },
      {
        icon:  "fa-sun",
        title: "UV & Blue Light Filter",
        desc:  "Integrated UV absorber and blue light filtering chromophore protects the retina from high-energy wavelengths throughout the patient's lifetime.",
      },
    ],
    comparisonCard: {
      waterLabel: "Water Content Comparison",
      waterRows: [
        { label: "World Vision WVO",      value: "< 0.5%", type: "wv"    },
        { label: 'Generic "Hydrophobic"', value: "> 4.0%", type: "other" },
      ],
      certLabel: "Certifications",
      certRows: [
        { label: "Biocompatibility",    value: "ISO Tested", check: true },
        { label: "UV Protection",       value: "Built-in",   check: true },
        { label: "Blue Light Filter",   value: "Built-in",   check: true },
        { label: "Raw Material Source", value: "🇺🇸 USA",    check: false },
      ],
    },
  },

  trust: [
    {
      iconColor: "#0055a5",
      bgColor:   "rgba(0,85,165,0.1)",
      iconSvg:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0055a5" stroke-width="2" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      title:     "ISO Certified Quality",
      desc:      "All Freedom IOLs undergo rigorous biocompatibility testing to international ISO medical device standards.",
    },
    {
      bgColor:   "rgba(10,122,80,0.1)",
      iconSvg:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0a7a50" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>`,
      title:     "Premium Raw Materials",
      desc:      "Only the highest-grade acrylic and PMMA sourced from certified suppliers in the USA and United Kingdom.",
    },
    {
      bgColor:   "rgba(138,90,16,0.1)",
      iconSvg:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8a5a10" stroke-width="2" stroke-linecap="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>`,
      title:     "Superior Visual Outcomes",
      desc:      "High MTF ratings and low refractive index deliver exceptional light transmission, minimizing halos and glare.",
    },
  ],

  ifu: {
    heading: "Instructions for Use",
    sub:     "Download the official IFU documentation for each product line",
    links: [
      { label: "IFU — Hydrophobic IOLs", color: "#0a5ea8", variant: "hydro-icon" },
      { label: "IFU — Hydrophilic IOLs", color: "#0a7a50", variant: "phil-icon"  },
      { label: "IFU — PMMA IOLs",        color: "#8a5a10", variant: "pmma-icon"  },
      { label: "IFU — PMMA Rings",       color: "#8a5a10", variant: "pmma-icon"  },
    ],
  },

};

// Helpers

function qs(id) {return document.getElementById(id);}
function qsa(sel) {return document.querySelectorAll(sel);}


/*************************************************
 * DESKTOP NAV
 *************************************************/

function renderDesktopNav() {
  // Brand
  const brand = qs("navBrand");
  if (brand) {
    brand.innerHTML = `
      <img src="${PAGE.company.logo}" style="width:48px;height:48px" class="animate__animated animate__fadeIn animate__slow"/>
      <div class="flex flex-col leading-tight nav-logo-text">
        <span class="font-semibold text-2xl tracking-wide">${PAGE.company.name}</span>
        <span class="subtitle text-xs tracking-widest uppercase">${PAGE.company.subtitle}</span>
      </div>`;
  }

  // Links
  const navList = qs("desktopNavLinks");
  if (navList) {
    const p          = PAGE.nav.products;
    const iol    = p.children[0];           // Intraocular Lens
    const extras = p.children.slice(1);     // everything after IOL
    const isProductsActive = p.pages.includes(ACTIVE_PAGE);

    const l2 = iol.children.map(c => `
    <a href="${c.href}" class="neu-dropdown-item${pageFromHref(c.href) === ACTIVE_PAGE ? " active" : ""}">
      <i class="fa-solid ${c.icon}" style="color:${c.color};width:16px;"></i> ${c.label}
    </a>`).join("");

    const extrasHtml = extras.map(e => {
      if (e.children) {
        // Item has sub-menu — build a fly-out like IOL
        const l3 = e.children.map(c => `
          <a href="${c.href}" class="neu-dropdown-item${pageFromHref(c.href) === ACTIVE_PAGE ? " active" : ""}">
            <i class="fa-solid ${c.icon}" style="color:var(--neu-accent);width:16px;"></i> ${c.label}
          </a>`).join("");
          
          return `
          <div class="relative group/extra">
            <a href="${e.href}" class="neu-dropdown-item neu-dropdown-item--arrow flex items-center justify-between gap-3 px-4 py-3 transition cursor-pointer">
              <span class="flex items-center gap-3">
                <i class="fa-solid ${e.icon}" style="color:var(--neu-accent);width:16px;"></i> ${e.label}
              </span>
              <i class="fa-solid fa-chevron-right" style="font-size:10px;opacity:0.5;"></i>
            </a>
            <div class="neu-dropdown-l2 absolute left-full top-0 ml-10 w-56 opacity-0 invisible group-hover/extra:opacity-100 group-hover/extra:visible transition-all duration-200 overflow-hidden">
              ${l3}
            </div>
          </div>`;
      }
      
      // No children — plain link
      return `
        <a href="${e.href}" class="neu-dropdown-item flex items-center gap-3 px-4 py-3">
          <i class="fa-solid ${e.icon}" style="color:var(--neu-accent);width:16px;"></i> ${e.label}
        </a>`;
    }).join("");

    const productsLi = `
      <li class="flex flex-row relative group/prod items-center justify-center">
        <a href="#">
          <button id="productsNavBtn" type="button" class="nav-products-btn${isProductsActive ? " active" : ""}">
            ${p.label}
            <i class="fa-solid fa-chevron-right transition-transform duration-200 group-hover/prod:rotate-90" style="font-size:10px;margin-left:4px;color:#1d4ed8;"></i>
          </button>
        </a>
        <div id="navL1Panel" class="absolute left-0 top-full mt-6 w-56 opacity-0 invisible group-hover/prod:opacity-100 group-hover/prod:visible transition-all duration-200 overflow-visible neu-dropdown-l1">
          <div class="group/iol-neu">
            <a href="${iol.href}" class="neu-dropdown-item${pageFromHref(iol.href) === ACTIVE_PAGE ? " active" : ""}" neu-dropdown-item--arrow flex items-center justify-between gap-3 px-4 py-3 transition cursor-pointer">
              <span class="flex items-center gap-3">
                <i class="fa-solid fa-eye" style="color:var(--neu-accent);width:16px;"></i> ${iol.label}
              </span>
              <i class="fa-solid fa-chevron-right" style="font-size:10px;opacity:0.5;"></i>
            </a>
            <div id="navL2Panel" class="neu-dropdown-l2 absolute left-full top-0 ml-6 w-56 opacity-0 invisible group-hover/iol-neu:opacity-100 group-hover/iol-neu:visible transition-all duration-200 overflow-hidden">
              ${l2}
            </div>
          </div>
          ${extrasHtml}
        </div>
      </li>`;

    let html = "";
    PAGE.nav.links.forEach(link => {
      const isActive = link.page === ACTIVE_PAGE;
      if (link.label === "Home") {
        html += `<li><a href="${link.href}"${isActive ? ' class="active"' : ""}>${link.label}</a></li>`;
        html += productsLi;
      } else {
        html += `<li><a href="${link.href}"${isActive ? ' class="active"' : ""}>${link.label}</a></li>`;
      }
    });
    navList.innerHTML = html;
  }

  // CTA
  const cta = qs("navCta");
  if (cta) {
    cta.href = PAGE.nav.cta.href;

    cta.setAttribute("aria-label", PAGE.nav.cta.label);

    cta.innerHTML = `
      ${PAGE.nav.cta.label}
      <i class="fa-solid ${PAGE.nav.cta.icon}" style="margin-right:8px;"></i>
    `;
  }
}


/*************************************************
 * MOBILE NAV
 *************************************************/

function mobileBackBtn(id, label) {
  return `
    <li>
      <button id="${id}" type="button"
        class="mobile-view mobile-link flex items-center gap-3 text-left">
        <i class="fa-solid fa-chevron-left text-sm w-10 h-10 flex items-center justify-center rounded-xl bg-white/70 border border-white/60 shadow-[4px_4px_10px_rgba(184,190,200,0.8),-4px_-4px_10px_rgba(255,255,255,0.9)]"
          style="background:var(--neu-btdark);color:var(--neu-accent2)"></i>
        <span class="font-semibold text-[17px]" style="color:var(--neu-text)">${label}</span>
      </button>
    </li>`;
}

function mobileForwardBtn(id, icon, color, label, isActive = false) {
  return `
    <li>
      <button id="${id}" type="button"
        class="w-full flex items-center justify-between mobile-link text-left${isActive ? " active" : ""}">
        <span class="flex items-center gap-2">
          <i class="fa-solid ${icon}" style="color:${color}"></i> ${label}
        </span>
        <i class="fa-solid fa-chevron-right text-sm opacity-50 flex items-center justify-center w-10 h-10 rounded-xl bg-white/70 border border-white/60 shadow-[4px_4px_10px_rgba(184,190,200,0.8),-4px_-4px_10px_rgba(255,255,255,0.9)]"
          style="background:var(--neu-btdark);color:var(--neu-accent2)"></i>
      </button>
    </li>`;
}

function renderMobileNav() {
  const mob = PAGE.nav.mobile;
  const productsActive = PAGE.nav.products.pages.includes(ACTIVE_PAGE);

  // Brand
  const brand = qs("mobileBrand");
  if (brand) {
    brand.innerHTML = `
      <img src="${PAGE.company.logo}" class="w-11 h-11 object-contain"/>
      <div class="flex flex-col leading-tight nav-logo-text">
        <span class="font-semibold text-lg tracking-wide">${PAGE.company.name}</span>
        <span class="subtitle text-[10px] tracking-widest uppercase">${PAGE.company.subtitle}</span>
      </div>`;
  }

  // VIEW 1
  const mainView = qs("mobileMainView");
  if (mainView) {
    const links = mob.main.map(link => {
      const isActive = link.page === ACTIVE_PAGE;
      return `<li><a href="${link.href}" class="mobile-link${isActive ? " active" : ""}">${link.label}</a></li>`;
    });
    links.splice(1, 0, `
      <li>
        <button id="mobileProductsBtn" type="button"
          class="mobile-view mobile-link w-full flex items-center justify-between text-left${productsActive ? " active" : ""}">
          <span>${PAGE.nav.products.label}</span>
          <i class="fa-solid fa-chevron-right text-sm opacity-60 flex items-center justify-center w-10 h-10 rounded-xl bg-white/70 border border-white/60 shadow-[4px_4px_10px_rgba(184,190,200,0.8),-4px_-4px_10px_rgba(255,255,255,0.9)]"
            style="background:var(--neu-btdark);color:var(--neu-accent2)"></i>
        </button>
      </li>`);
    mainView.innerHTML = links.join("");
  }

  // VIEW 2
  const productsView = qs("mobileProductsView");
  if (productsView) {
    const pd = mob.products;
    const iolActive = mob.iol.children.some(
      item => pageFromHref(item.href) === ACTIVE_PAGE
    );
    productsView.innerHTML =
      mobileBackBtn("backToMainMenu", pd.back.label) +

      mobileForwardBtn("mobileIolBtn", pd.iol.icon, pd.iol.color, pd.iol.label, iolActive ) +

      pd.children.map(item => `
        <li>
          <a href="${item.href}" class="mobile-link flex items-center gap-2">
            <i class="fa-solid ${item.icon}" style="color:${item.color}"></i>
            ${item.label}
          </a>
        </li>
      `).join("") +

      mobileForwardBtn( "mobilePharmaBtn",pd.pharma.icon,pd.pharma.color,pd.pharma.label ) + mobileForwardBtn( "mobileBladeBtn",pd.blade.icon,pd.blade.color,pd.blade.label);
  }

  // VIEW 3
  const iolView = qs("mobileIolView");
  if (iolView) {
    const id = mob.iol;
    iolView.innerHTML =
      mobileBackBtn("backToProductsMenu", id.back.label) +
      id.children.map(item => `
        <li>
          <a href="${item.href}" class="mobile-link${pageFromHref(item.href) === ACTIVE_PAGE ? " active" : ""} flex items-center gap-2">
            <i class="fa-solid ${item.icon}" style="color:${item.color}"></i> ${item.label}
          </a>
        </li>`).join("");
  }
  // VIEW 4 — Pharma
const pharmaView = qs("mobilePharmaView");

if (pharmaView) {
  const d = mob.pharma;
  pharmaView.innerHTML =
    mobileBackBtn("backToProductsFromPharma", d.back.label) +
    d.children.map(item => `
      <li>
        <a href="${item.href}" class="mobile-link flex items-center gap-2">
          <i class="fa-solid ${item.icon}" style="color:${item.color}"></i>
          ${item.label}
        </a>
      </li>
    `).join("");
  }
  // VIEW 5 — Blade
const bladeView = qs("mobileBladeView");

if (bladeView) {
  const d = mob.blade;

  bladeView.innerHTML =
    mobileBackBtn("backToProductsFromBlade", d.back.label) +

    d.children.map(item => `
      <li>
        <a href="${item.href}" class="mobile-link flex items-center gap-2">
          <i class="fa-solid ${item.icon}" style="color:${item.color}"></i>
          ${item.label}
        </a>
      </li>
    `).join("");
  }
}


/*************************************************
 * BREADCRUMB
 *************************************************/

function renderBreadcrumb() {
  const nav = qs("breadcrumb");
  if (!nav) return;
  nav.innerHTML = PAGE.breadcrumb.map((crumb, i) => {
    const sep = i < PAGE.breadcrumb.length - 1 ? '<span class="sep">/</span>' : "";
    if (crumb.current) return `<span class="current">${crumb.label}</span>${sep}`;
    return `<a href="${crumb.href}">${crumb.label}</a>${sep}`;
  }).join("");
}

function renderHero() {
  const h = PAGE.hero;

  const eyebrow = qs("heroEyebrow");
  if (eyebrow) eyebrow.innerHTML = `${h.eyebrow.pulse ? '<span class="pulse"></span>' : ""}${h.eyebrow.text}`;

  const heading = qs("hydro-h1");
  if (heading) heading.innerHTML = h.heading;

  const desc = qs("heroDesc");
  if (desc) desc.textContent = h.desc;

  const btns = qs("heroBtns");
  if (btns) {
    btns.innerHTML = h.btns.map(b => `
      <a href="${b.href}" class="hero-btn-iol-${b.style}">
        <i class="fa-solid ${b.icon}"${b.iconStyle ? ` style="${b.iconStyle}"` : ""}></i> ${b.label}
      </a>`).join("");
  }
}

// Status Bar
function renderStatusBar() {
  const grid = qs("statusBar");
  if (!grid) return;
  grid.innerHTML = PAGE.specs.map(s => `
    <div class="spec-pill reveal ${s.delay}">
      <div class="spec-pill-icon"><i class="fa-solid ${s.icon}"></i></div>
      <div class="spec-pill-num">${s.num}</div>
      <div class="spec-pill-label">${s.label}</div>
    </div>`).join("");
}

// Model Cards

function renderModels() {
  const d = PAGE.models;

  const eyebrow = qs("modelsEyebrow");
  if (eyebrow) eyebrow.innerHTML = `<i class="fa-solid ${d.eyebrow.icon}" style="font-size:10px;"></i> ${d.eyebrow.text}`;

  const heading = qs("modelsHeading");
  if (heading) heading.innerHTML = d.heading;

  const sub = qs("modelsSub");
  if (sub) sub.textContent = d.sub;

  const grid = qs("modelsGrid");
  if (grid) {
    grid.innerHTML = d.cards.map(c => `
      <a href="${c.href}" class="model-card reveal ${c.delay}">
        <div class="model-card-header">
          <div class="model-card-icon ${c.variant}">${c.iconSvg}</div>
          <div>
            <span class="model-tag ${c.variant}">${c.tag}</span>
            <h3>${c.name}</h3>
          </div>
        </div>
        <div class="model-card-body">
          <p class="model-desc">${c.desc}</p>
          <div class="model-lens-list">
            ${c.chips.map(ch => `<span class="model-lens-chip">${ch}</span>`).join("")}
          </div>
          <span class="model-card-cta ${c.variant}">
            View models
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>
        </div>
      </a>`).join("");
  }
}

// Material Science

function renderMaterial() {
  const d = PAGE.material;

  const eyebrow = qs("materialEyebrow");
  if (eyebrow) eyebrow.innerHTML = `<i class="fa-solid ${d.eyebrow.icon}" style="font-size:10px;"></i> ${d.eyebrow.text}`;

  const heading = qs("materialHeading");
  if (heading) heading.innerHTML = d.heading;

  const sub = qs("materialSub");
  if (sub) sub.textContent = d.sub;

  const features = qs("materialFeatures");
  if (features) {
    features.innerHTML = d.features.map(f => `
      <div class="material-feature">
        <div class="mf-icon"><i class="fa-solid ${f.icon}"></i></div>
        <div>
          <div class="mf-title">${f.title}</div>
          <div class="mf-desc">${f.desc}</div>
        </div>
      </div>`).join("");
  }

  const card = qs("materialCard");
  if (card) {
    const cc = d.comparisonCard;
    const waterRows = cc.waterRows.map(r => `
      <div class="compare-row">
        <span class="compare-label">${r.label}</span>
        <span class="compare-${r.type}">${r.value}</span>
      </div>`).join("");
    const certRows = cc.certRows.map(r => `
      <div class="compare-row">
        <span class="compare-label">${r.label}</span>
        <span class="compare-wv">
          ${r.check ? '<i class="fa-solid fa-check" style="font-size:11px;"></i> ' : ""}${r.value}
        </span>
      </div>`).join("");

    card.innerHTML = `
      <div class="material-neu-card-label">
        <i class="fa-solid fa-scale-balanced" style="margin-right:5px;"></i> ${cc.waterLabel}
      </div>
      <div class="material-compare">${waterRows}</div>
      <div style="width:100%;height:1px;background:rgba(0,0,0,0.07);margin:4px 0;"></div>
      <div class="material-neu-card-label" style="margin-top:4px;">
        <i class="fa-solid fa-certificate" style="margin-right:5px;"></i> ${cc.certLabel}
      </div>
      <div class="material-compare">${certRows}</div>`;
  }
}

// Trust Bar

function renderTrust() {
  const bar = qs("trustBar");
  if (!bar) return;
  bar.innerHTML = PAGE.trust.map(t => `
    <div class="trust-card">
      <div class="trust-icon" style="background:${t.bgColor}">${t.iconSvg}</div>
      <div>
        <h3>${t.title}</h3>
        <p>${t.desc}</p>
      </div>
    </div>`).join("");
}

// IFU Section

function renderIfu() {
  const d = PAGE.ifu;

  const header = qs("ifuHeader");
  if (header) {
    header.innerHTML = `
      <div class="ifu-icon-wrap">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
      </div>
      <div>
        <div class="ifu-title" id="ifu-title">${d.heading}</div>
        <div class="ifu-sub">${d.sub}</div>
      </div>`;
  }

  const grid = qs("ifuGrid");
  if (grid) {
    grid.innerHTML = d.links.map(l => `
      <a href="#" class="ifu-link" aria-label="Download ${l.label}">
        <div class="ifu-link-icon ${l.variant}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${l.color}" stroke-width="2" stroke-linecap="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="12" y1="18" x2="12" y2="12"/>
            <polyline points="9 15 12 18 15 15"/>
          </svg>
        </div>
        <div class="ifu-link-text">
          <strong>${l.label}</strong>
          <span>PDF Document</span>
        </div>
      </a>`).join("");
  }
}

function renderFloat() {
  const btn = qs("waFloat");
  if (btn) btn.href = PAGE.company.whatsapp;
}

function renderFooter() {
  const copy = qs("footerCopyright");
  if (copy) copy.textContent = PAGE.company.copyright;
}

renderMeta();
renderDesktopNav();
renderMobileNav();
renderBreadcrumb();
renderHero();
renderStatusBar();
renderModels();
renderMaterial();
renderTrust();
renderIfu();
renderFloat();
renderFooter();

/*************************************************
 * MONOFOCAL PAGE — only runs on nanoClaro.html
 *************************************************/

if (ACTIVE_PAGE === "nanoClaro") {

  const MONO = {
    tag:      "Semiloaded · Hydrophobic",
    title:    "Nano Claro",
    subtitle: "Hydrophobic Acrylic Foldable Spheric 360° Square Edge Intraocular Lens",
    desc:     "WVO NHPC is a spherical hydrophobic IOL available in a non-preloaded and a preloaded system and you see preloaded option in Nano claro plus.",
    highlights: [
      { icon: "fa-circle-dot",       text: "Spherical optic"   },
      { icon: "fa-border-all",       text: "360° Square edge"  },
      { icon: "fa-ruler-horizontal", text: "2.2mm incision"    },
      { icon: "fa-syringe",          text: "Preloaded option"  },
      { icon: "fa-sun",              text: "UV filter"         },
      { icon: "fa-droplet-slash",    text: "<0.5% water"      },
    ],
    variants: [
      {
        id: "NHPC600", label: "NHPC 600",
        specs: [
          { label: "Model",                value: "NHPC 600",                                     accent: true },
          { label: "Optic Design",         value: "Aspheric Equiconvex · 360° Square Edge"                    },
          { label: "Optic Diameter",       value: "6.00 mm",                                      accent: true },
          { label: "Overall Length",       value: "12.50 mm",                                     accent: true },
          { label: "Estimated A-Constant", value: "118.40"                                                     },
          { label: "Diopter Range",        value: "5.00 D – 30.00 D (0.5 Diopter steps)"                      },
          { label: "AC Depth",             value: "5.28 mm"                                                    },
          { label: "Refractive Index",     value: "1.4933"                                                     },
          { label: "Lens Material",        value: "Hydrophobic Acrylic"                                        },
          { label: "Delivery System",      value: "Disposable Injector Cartridge - 2.6mm incision"            },
        ],
      },
      {
        id: "NHPC600SQ", label: "NHPC 600SQ",
        specs: [
          { label: "Model",                value: "NHPC 600SQ",                                   accent: true },
          { label: "Optic Design",         value: "Aspheric Equiconvex · 360° Square Edge"                    },
          { label: "Optic Diameter",       value: "6.00 mm",                                      accent: true },
          { label: "Overall Length",       value: "12.50 mm",                                     accent: true },
          { label: "Estimated A-Constant", value: "118.40"                                                     },
          { label: "Diopter Range",        value: "5.00 D – 30.00 D (0.5 Diopter steps)"                      },
          { label: "AC Depth",             value: "5.28 mm"                                                    },
          { label: "Refractive Index",     value: "1.4933"                                                     },
          { label: "Lens Material",        value: "Hydrophobic Acrylic"                                        },
          { label: "Delivery System",      value: "Disposable Injector Cartridge - 2.6mm incision"            },
        ],
      },
    ],
    aConstants: [
      { key: "SRK/T",      val: "119.20" },
      { key: "SRK/II",     val: "119.50" },
      { key: "Hoffer Q",   val: "5.65"   },
      { key: "Holladay 1", val: "1.87"   },
      { key: "Holladay 2", val: "5.199"  },
      { key: "Haigis a0",  val: "1.441"  },
      { key: "Haigis a1",  val: "0.400"  },
      { key: "Haigis a2",  val: "0.100"  },
    ],
  };

  function renderMonoModel() {
    const panel = qs("modelPanel");
    if (!panel) return;

    const badges   = MONO.variants.map(v => `<span class="variant-badge">${v.label}</span>`).join("");
    const chips    = MONO.highlights.map(h => `<div class="highlight-chip"><i class="fa-solid ${h.icon}"></i><span class="highlight-chip-text">${h.text}</span></div>`).join("");
    const modelBtns= MONO.variants.map((v, i) => `<button class="spec-model-btn${i === 0 ? " active" : ""}" data-rows="${v.id}" type="button">${v.label}</button>`).join("");
    const specTables = MONO.variants.map((v, i) => {
      const rows = v.specs.map(s =>
        `<div class="spec-row"><span class="spec-row-label">${s.label}</span><span class="spec-row-val${s.accent ? " accent" : ""}">${s.value}</span></div>`).join("");
      return `<div class="spec-rows" id="${v.id}"${i > 0 ? ' style="display:none;"' : ""}>${rows}</div>`;
    }).join("");
    const aGrid = MONO.aConstants.map(a =>
      `<div class="a-const-item"><div class="a-const-key">${a.key}</div><div class="a-const-val">${a.val}</div></div>`).join("");

    panel.innerHTML = `
      <div class="neu-card">
        <div class="card-top">
          <span class="card-tag">${MONO.tag}</span>
          <div class="card-title">${MONO.title}</div>
          <div class="card-subtitle">${MONO.subtitle}</div>
        </div>
        <div class="card-lens-area">
          <div class="card-lens-bg"></div>
          <div class="card-lens-svg" aria-hidden="true">
            <svg width="140" height="140" viewBox="0 0 140 140">
              <path d="M24 70 Q8 50 12 28"  fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
              <path d="M24 70 Q8 90 12 112" fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
              <path d="M116 70 Q132 50 128 28"  fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
              <path d="M116 70 Q132 90 128 112" fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
              <ellipse cx="70" cy="70" rx="48" ry="34" fill="rgba(10,94,168,0.1)"  stroke="#0a5ea8" stroke-width="2.2"/>
              <ellipse cx="70" cy="70" rx="34" ry="24" fill="rgba(10,94,168,0.08)" stroke="#0a5ea8" stroke-width="1.3" stroke-dasharray="3 4"/>
              <ellipse cx="70" cy="70" rx="18" ry="13" fill="rgba(10,94,168,0.16)" stroke="#0a5ea8" stroke-width="1"/>
              <circle cx="70" cy="70" r="4.5" fill="#0a5ea8" opacity="0.5"/>
              <circle cx="70" cy="70" r="2"   fill="#0a5ea8" opacity="0.9"/>
            </svg>
          </div>
        </div>
        <div class="variant-badges">${badges}</div>
        <div class="card-desc">${MONO.desc}</div>
        <div class="card-highlights">${chips}</div>
      </div>
      <div class="spec-card">
        <div class="spec-card-head">
          <div class="spec-head-icon"><i class="fa-solid fa-table-list"></i></div>
          <div>
            <div class="spec-head-title">Technical Specifications</div>
            <div class="spec-head-sub">${MONO.title} — Aspheric Hydrophobic</div>
          </div>
        </div>
        <p class="flip-hint-btn">
          <i class="fa-regular fa-hand-pointer" style="margin-top:0.1rem;"></i>
          Tap or select the Model button to reveal full specifications
        </p>
        <div class="spec-model-sel">${modelBtns}</div>
        ${specTables}
        <div class="a-const-block">
          <div class="a-const-label"><i class="fa-solid fa-calculator" style="margin-right:5px;"></i>Recommended Optical A-Constants</div>
          <div class="a-const-grid">${aGrid}</div>
        </div>
        <div class="spec-download">
          <button class="dl-btn dl-btn-primary" onclick="alert('IFU download coming soon.')"><i class="fa-solid fa-download"></i> Download IFU</button>
          <button class="dl-btn dl-btn-ghost"   onclick="alert('Enquiry form coming soon.')"><i class="fa-solid fa-envelope"></i> Enquire</button>
        </div>
      </div>`;
  }

  renderMonoModel();

  // Override hero heading id for monofocal page
  const monoH1 = qs("page-h1");
  if (monoH1) monoH1.innerHTML = "Nano Claro<br><em>Hydrophobic IOL</em>";

  const monoEyebrow = qs("heroEyebrow");
  if (monoEyebrow) monoEyebrow.innerHTML = '<span class="pulse"></span>Hydrophobic · Monofocal · USA Acrylic';

  const monoDesc = qs("heroDesc");
  if (monoDesc) monoDesc.innerHTML = "Three precision-engineered monofocal designs — Spheric, Aspheric, and Yellow Aspheric — all manufactured from USA medical-grade hydrophobic acrylic with &lt;0.5% water content.";

  const monoBtns = qs("heroBtns");
  if (monoBtns) monoBtns.innerHTML = `
    <a href="#models" class="hero-btn-iol-primary"><i class="fa-solid fa-grid-2" style="font-size:12px;"></i> View Models</a>
    <a href="../Pages/hydrophobicIol.html" class="hero-btn-iol-ghost"><i class="fa-solid fa-arrow-left" style="font-size:11px;"></i> Hydrophobic IOL</a>`;

}

if (ACTIVE_PAGE === "nanoGrand") {

  const MONO = {
    tag:      "Semiloaded · Hydrophobic",
    title:    "Nano Grand",
    subtitle: "Hydrophobic Acrylic Foldable Spheric 360° Square Edge Intraocular Lens",
    desc:     "WVO NHPC is a spherical hydrophobic IOL available in a non-preloaded and a preloaded system and you see preloaded option in Nano grand plus.",
    highlights: [
      { icon: "fa-circle-dot",       text: "Spherical optic"   },
      { icon: "fa-border-all",       text: "360° Square edge"  },
      { icon: "fa-ruler-horizontal", text: "2.2mm incision"    },
      { icon: "fa-syringe",          text: "Preloaded option"  },
      { icon: "fa-sun",              text: "UV filter"         },
      { icon: "fa-droplet-slash",    text: "<0.5% water"      },
    ],
    variants: [
      {
        id: "NHPC600Y", label: "NHPC 600Y",
        specs: [
          { label: "Model",                value: "NHPC 600Y",                                    accent: true },
          { label: "Optic Design",         value: "Aspheric Equiconvex · 360° Square Edge"                    },
          { label: "Optic Diameter",       value: "6.00 mm",                                      accent: true },
          { label: "Overall Length",       value: "12.50 mm",                                     accent: true },
          { label: "Estimated A-Constant", value: "118.0"                                                     },
          { label: "Diopter Range",        value: "5.0 D – 30.0 D (0.5 Diopter steps)"                      },
          { label: "Refractive Index",     value: "1.4933"                                                     },
          { label: "Lens Material",        value: "Hydrophobic Acrylic"                                        },
          { label: "Delivery System",      value: "Disposable Injector Cartridge - 2.6mm incision"            },
        ],
      },
      {
        id: "NHPC600SQY", label: "NHPC 600SQY",
        specs: [
          { label: "Model",                value: "NHPC 600SQY",                                  accent: true },
          { label: "Optic Design",         value: "Aspheric Equiconvex · 360° Square Edge"                    },
          { label: "Optic Diameter",       value: "6.00 mm",                                      accent: true },
          { label: "Overall Length",       value: "12.50 mm",                                     accent: true },
          { label: "Estimated A-Constant", value: "118.0"                                                     },
          { label: "Diopter Range",        value: "5.0 D – 30.0 D (0.5 Diopter steps)"                      },
          { label: "Refractive Index",     value: "1.4933"                                                     },
          { label: "Lens Material",        value: "Hydrophobic Acrylic"                                        },
          { label: "Delivery System",      value: "Disposable Injector Cartridge - 2.6mm incision"            },
        ],
      },
    ],
    aConstants: [
      { key: "SRK/T",      val: "119.20" },
      { key: "SRK/II",     val: "119.50" },
      { key: "Hoffer Q",   val: "5.65"   },
      { key: "Holladay 1", val: "1.87"   },
      { key: "Holladay 2", val: "5.199"  },
      { key: "Haigis a0",  val: "1.441"  },
      { key: "Haigis a1",  val: "0.400"  },
      { key: "Haigis a2",  val: "0.100"  },
    ],
  };

  function renderMonoModel() {
    const panel = qs("modelPanel");
    if (!panel) return;

    const badges   = MONO.variants.map(v => `<span class="variant-badge">${v.label}</span>`).join("");
    const chips    = MONO.highlights.map(h => `<div class="highlight-chip"><i class="fa-solid ${h.icon}"></i><span class="highlight-chip-text">${h.text}</span></div>`).join("");
    const modelBtns= MONO.variants.map((v, i) => `<button class="spec-model-btn${i === 0 ? " active" : ""}" data-rows="${v.id}" type="button">${v.label}</button>`).join("");
    const specTables = MONO.variants.map((v, i) => {
      const rows = v.specs.map(s =>
        `<div class="spec-row"><span class="spec-row-label">${s.label}</span><span class="spec-row-val${s.accent ? " accent" : ""}">${s.value}</span></div>`).join("");
      return `<div class="spec-rows" id="${v.id}"${i > 0 ? ' style="display:none;"' : ""}>${rows}</div>`;
    }).join("");
    const aGrid = MONO.aConstants.map(a =>
      `<div class="a-const-item"><div class="a-const-key">${a.key}</div><div class="a-const-val">${a.val}</div></div>`).join("");

    panel.innerHTML = `
      <div class="neu-card">
        <div class="card-top">
          <span class="card-tag">${MONO.tag}</span>
          <div class="card-title">${MONO.title}</div>
          <div class="card-subtitle">${MONO.subtitle}</div>
        </div>
        <div class="card-lens-area">
          <div class="card-lens-bg"></div>
          <div class="card-lens-svg" aria-hidden="true">
            <svg width="140" height="140" viewBox="0 0 140 140">
              <path d="M24 70 Q8 50 12 28"  fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
              <path d="M24 70 Q8 90 12 112" fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
              <path d="M116 70 Q132 50 128 28"  fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
              <path d="M116 70 Q132 90 128 112" fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
              <ellipse cx="70" cy="70" rx="48" ry="34" fill="rgba(10,94,168,0.1)"  stroke="#0a5ea8" stroke-width="2.2"/>
              <ellipse cx="70" cy="70" rx="34" ry="24" fill="rgba(10,94,168,0.08)" stroke="#0a5ea8" stroke-width="1.3" stroke-dasharray="3 4"/>
              <ellipse cx="70" cy="70" rx="18" ry="13" fill="rgba(10,94,168,0.16)" stroke="#0a5ea8" stroke-width="1"/>
              <circle cx="70" cy="70" r="4.5" fill="#0a5ea8" opacity="0.5"/>
              <circle cx="70" cy="70" r="2"   fill="#0a5ea8" opacity="0.9"/>
            </svg>
          </div>
        </div>
        <div class="variant-badges">${badges}</div>
        <div class="card-desc">${MONO.desc}</div>
        <div class="card-highlights">${chips}</div>
      </div>
      <div class="spec-card">
        <div class="spec-card-head">
          <div class="spec-head-icon"><i class="fa-solid fa-table-list"></i></div>
          <div>
            <div class="spec-head-title">Technical Specifications</div>
            <div class="spec-head-sub">${MONO.title} — Aspheric Hydrophobic</div>
          </div>
        </div>
        <p class="flip-hint-btn">
          <i class="fa-regular fa-hand-pointer" style="margin-top:0.1rem;"></i>
          Tap or select the Model button to reveal full specifications
        </p>
        <div class="spec-model-sel">${modelBtns}</div>
        ${specTables}
        <div class="a-const-block">
          <div class="a-const-label"><i class="fa-solid fa-calculator" style="margin-right:5px;"></i>Recommended Optical A-Constants</div>
          <div class="a-const-grid">${aGrid}</div>
        </div>
        <div class="spec-download">
          <button class="dl-btn dl-btn-primary" onclick="alert('IFU download coming soon.')"><i class="fa-solid fa-download"></i> Download IFU</button>
          <button class="dl-btn dl-btn-ghost"   onclick="alert('Enquiry form coming soon.')"><i class="fa-solid fa-envelope"></i> Enquire</button>
        </div>
      </div>`;
  }

  renderMonoModel();

  // Override hero heading id for monofocal page
  const monoH1 = qs("page-h1");
  if (monoH1) monoH1.innerHTML = "Nano Claro<br><em>Hydrophobic IOL</em>";

  const monoEyebrow = qs("heroEyebrow");
  if (monoEyebrow) monoEyebrow.innerHTML = '<span class="pulse"></span>Hydrophobic · Monofocal · USA Acrylic';

  const monoDesc = qs("heroDesc");
  if (monoDesc) monoDesc.innerHTML = "Three precision-engineered monofocal designs — Spheric, Aspheric, and Yellow Aspheric — all manufactured from USA medical-grade hydrophobic acrylic with &lt;0.5% water content.";

  const monoBtns = qs("heroBtns");
  if (monoBtns) monoBtns.innerHTML = `
    <a href="#models" class="hero-btn-iol-primary"><i class="fa-solid fa-grid-2" style="font-size:12px;"></i> View Models</a>
    <a href="../Pages/hydrophobicIol.html" class="hero-btn-iol-ghost"><i class="fa-solid fa-arrow-left" style="font-size:11px;"></i> Hydrophobic IOL</a>`;

}

if (ACTIVE_PAGE === "nanoClaroPlus") {

  const MONO = {
    tag:      "Semiloaded · Hydrophobic",
    title:    "Nano Claro Plus",
    subtitle: "Hydrophobic Acrylic Foldable Spheric 360° Square Edge Intraocular Lens",
    desc:     "WVO NHPC is a spherical hydrophobic IOL available in a non-preloaded and a preloaded system and you see preloaded option in Nano Claro Plus.",
    highlights: [
      { icon: "fa-circle-dot",       text: "Spherical optic"   },
      { icon: "fa-border-all",       text: "360° Square edge"  },
      { icon: "fa-ruler-horizontal", text: "2.2mm incision"    },
      { icon: "fa-syringe",          text: "Preloaded option"  },
      { icon: "fa-sun",              text: "UV filter"         },
      { icon: "fa-droplet-slash",    text: "<0.5% water"      },
    ],
    variants: [
      {
        id: "NHPC600P", label: "NHPC 600P",
        specs: [
          { label: "Model",                value: "NHPC 600P",                                    accent: true },
          { label: "Optic Design",         value: "Aspheric Equiconvex · 360° Square Edge"                    },
          { label: "Optic Diameter",       value: "6.00 mm",                                      accent: true },
          { label: "Overall Length",       value: "12.50 mm",                                     accent: true },
          { label: "Estimated A-Constant", value: "118.0"                                                     },
          { label: "Diopter Range",        value: "5.0 D – 30.0 D (0.5 Diopter steps)"                      },
          { label: "Refractive Index",     value: "1.4933"                                                     },
          { label: "Lens Material",        value: "Hydrophobic Acrylic"                                        },
          { label: "Delivery System",      value: "Preloaded - 2.4mm incision"            },
        ],
      },
      {
        id: "NHPC600PSQ", label: "NHPC 600PSQ",
        specs: [
          { label: "Model",                value: "NHPC 600PSQ",                                  accent: true },
          { label: "Optic Design",         value: "Aspheric Equiconvex · 360° Square Edge"                    },
          { label: "Optic Diameter",       value: "6.00 mm",                                      accent: true },
          { label: "Overall Length",       value: "12.50 mm",                                     accent: true },
          { label: "Estimated A-Constant", value: "118.0"                                                     },
          { label: "Diopter Range",        value: "5.0 D – 30.0 D (0.5 Diopter steps)"                      },
          { label: "Refractive Index",     value: "1.4933"                                                     },
          { label: "Lens Material",        value: "Hydrophobic Acrylic"                                        },
          { label: "Delivery System",      value: "Preloaded - 2.4mm incision"            },
        ],
      },
    ],
    aConstants: [
      { key: "SRK/T",      val: "119.20" },
      { key: "SRK/II",     val: "119.50" },
      { key: "Hoffer Q",   val: "5.65"   },
      { key: "Holladay 1", val: "1.87"   },
      { key: "Holladay 2", val: "5.199"  },
      { key: "Haigis a0",  val: "1.441"  },
      { key: "Haigis a1",  val: "0.400"  },
      { key: "Haigis a2",  val: "0.100"  },
    ],
  };

  function renderMonoModel() {
    const panel = qs("modelPanel");
    if (!panel) return;

    const badges   = MONO.variants.map(v => `<span class="variant-badge">${v.label}</span>`).join("");
    const chips    = MONO.highlights.map(h => `<div class="highlight-chip"><i class="fa-solid ${h.icon}"></i><span class="highlight-chip-text">${h.text}</span></div>`).join("");
    const modelBtns= MONO.variants.map((v, i) => `<button class="spec-model-btn${i === 0 ? " active" : ""}" data-rows="${v.id}" type="button">${v.label}</button>`).join("");
    const specTables = MONO.variants.map((v, i) => {
      const rows = v.specs.map(s =>
        `<div class="spec-row"><span class="spec-row-label">${s.label}</span><span class="spec-row-val${s.accent ? " accent" : ""}">${s.value}</span></div>`).join("");
      return `<div class="spec-rows" id="${v.id}"${i > 0 ? ' style="display:none;"' : ""}>${rows}</div>`;
    }).join("");
    const aGrid = MONO.aConstants.map(a =>
      `<div class="a-const-item"><div class="a-const-key">${a.key}</div><div class="a-const-val">${a.val}</div></div>`).join("");

    panel.innerHTML = `
      <div class="neu-card">
        <div class="card-top">
          <span class="card-tag">${MONO.tag}</span>
          <div class="card-title">${MONO.title}</div>
          <div class="card-subtitle">${MONO.subtitle}</div>
        </div>
        <div class="card-lens-area">
          <div class="card-lens-bg"></div>
          <div class="card-lens-svg" aria-hidden="true">
            <svg width="140" height="140" viewBox="0 0 140 140">
              <path d="M24 70 Q8 50 12 28"  fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
              <path d="M24 70 Q8 90 12 112" fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
              <path d="M116 70 Q132 50 128 28"  fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
              <path d="M116 70 Q132 90 128 112" fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
              <ellipse cx="70" cy="70" rx="48" ry="34" fill="rgba(10,94,168,0.1)"  stroke="#0a5ea8" stroke-width="2.2"/>
              <ellipse cx="70" cy="70" rx="34" ry="24" fill="rgba(10,94,168,0.08)" stroke="#0a5ea8" stroke-width="1.3" stroke-dasharray="3 4"/>
              <ellipse cx="70" cy="70" rx="18" ry="13" fill="rgba(10,94,168,0.16)" stroke="#0a5ea8" stroke-width="1"/>
              <circle cx="70" cy="70" r="4.5" fill="#0a5ea8" opacity="0.5"/>
              <circle cx="70" cy="70" r="2"   fill="#0a5ea8" opacity="0.9"/>
            </svg>
          </div>
        </div>
        <div class="variant-badges">${badges}</div>
        <div class="card-desc">${MONO.desc}</div>
        <div class="card-highlights">${chips}</div>
      </div>
      <div class="spec-card">
        <div class="spec-card-head">
          <div class="spec-head-icon"><i class="fa-solid fa-table-list"></i></div>
          <div>
            <div class="spec-head-title">Technical Specifications</div>
            <div class="spec-head-sub">${MONO.title} — Aspheric Hydrophobic</div>
          </div>
        </div>
        <p class="flip-hint-btn">
          <i class="fa-regular fa-hand-pointer" style="margin-top:0.1rem;"></i>
          Tap or select the Model button to reveal full specifications
        </p>
        <div class="spec-model-sel">${modelBtns}</div>
        ${specTables}
        <div class="a-const-block">
          <div class="a-const-label"><i class="fa-solid fa-calculator" style="margin-right:5px;"></i>Recommended Optical A-Constants</div>
          <div class="a-const-grid">${aGrid}</div>
        </div>
        <div class="spec-download">
          <button class="dl-btn dl-btn-primary" onclick="alert('IFU download coming soon.')"><i class="fa-solid fa-download"></i> Download IFU</button>
          <button class="dl-btn dl-btn-ghost"   onclick="alert('Enquiry form coming soon.')"><i class="fa-solid fa-envelope"></i> Enquire</button>
        </div>
      </div>`;
  }

  renderMonoModel();

  // Override hero heading id for monofocal page
  const monoH1 = qs("page-h1");
  if (monoH1) monoH1.innerHTML = "Nano Claro<br><em>Hydrophobic IOL</em>";

  const monoEyebrow = qs("heroEyebrow");
  if (monoEyebrow) monoEyebrow.innerHTML = '<span class="pulse"></span>Hydrophobic · Monofocal · USA Acrylic';

  const monoDesc = qs("heroDesc");
  if (monoDesc) monoDesc.innerHTML = "Three precision-engineered monofocal designs — Spheric, Aspheric, and Yellow Aspheric — all manufactured from USA medical-grade hydrophobic acrylic with &lt;0.5% water content.";

  const monoBtns = qs("heroBtns");
  if (monoBtns) monoBtns.innerHTML = `
    <a href="#models" class="hero-btn-iol-primary"><i class="fa-solid fa-grid-2" style="font-size:12px;"></i> View Models</a>
    <a href="../Pages/hydrophobicIol.html" class="hero-btn-iol-ghost"><i class="fa-solid fa-arrow-left" style="font-size:11px;"></i> Hydrophobic IOL</a>`;

}

if (ACTIVE_PAGE === "nanoGrandPlus") {

  const MONO = {
    tag:      "Semiloaded · Hydrophobic",
    title:    "Nano Grand Plus",
    subtitle: "Hydrophobic Acrylic Foldable Spheric 360° Square Edge Intraocular Lens",
    desc:     "WVO NHPC is a spherical hydrophobic IOL available in a non-preloaded and a preloaded system and you see preloaded option in Nano Grand Plus.",
    highlights: [
      { icon: "fa-circle-dot",       text: "Spherical optic"   },
      { icon: "fa-border-all",       text: "360° Square edge"  },
      { icon: "fa-ruler-horizontal", text: "2.2mm incision"    },
      { icon: "fa-syringe",          text: "Preloaded option"  },
      { icon: "fa-sun",              text: "UV filter"         },
      { icon: "fa-droplet-slash",    text: "<0.5% water"      },
    ],
    variants: [
      {
        id: "NHPC600PY", label: "NHPC 600PY",
        specs: [
          { label: "Model",                value: "NHPC 600PY",                                   accent: true },
          { label: "Optic Design",         value: "Aspheric Equiconvex · 360° Square Edge"                    },
          { label: "Optic Diameter",       value: "6.00 mm",                                      accent: true },
          { label: "Overall Length",       value: "12.50 mm",                                     accent: true },
          { label: "Estimated A-Constant", value: "118.0"                                                     },
          { label: "Diopter Range",        value: "5.0 D – 30.0 D (0.5 Diopter steps)"                      },
          { label: "Refractive Index",     value: "1.4933"                                                     },
          { label: "Lens Material",        value: "Hydrophobic Acrylic"                                        },
          { label: "Delivery System",      value: "Preloaded - 2.4mm incision"            },
        ],
      },
      {
        id: "NHPC600PQY", label: "NHPC 600PQY",
        specs: [
          { label: "Model",                value: "NHPC 600PQY",                                  accent: true },
          { label: "Optic Design",         value: "Aspheric Equiconvex · 360° Square Edge"                    },
          { label: "Optic Diameter",       value: "6.00 mm",                                      accent: true },
          { label: "Overall Length",       value: "12.50 mm",                                     accent: true },
          { label: "Estimated A-Constant", value: "118.0"                                                     },
          { label: "Diopter Range",        value: "5.0 D – 30.0 D (0.5 Diopter steps)"                      },
          { label: "Refractive Index",     value: "1.4933"                                                     },
          { label: "Lens Material",        value: "Hydrophobic Acrylic"                                        },
          { label: "Delivery System",      value: "Preloaded - 2.4mm incision"            },
        ],
      },
    ],
    aConstants: [
      { key: "SRK/T",      val: "119.20" },
      { key: "SRK/II",     val: "119.50" },
      { key: "Hoffer Q",   val: "5.65"   },
      { key: "Holladay 1", val: "1.87"   },
      { key: "Holladay 2", val: "5.199"  },
      { key: "Haigis a0",  val: "1.441"  },
      { key: "Haigis a1",  val: "0.400"  },
      { key: "Haigis a2",  val: "0.100"  },
    ],
  };

  function renderMonoModel() {
    const panel = qs("modelPanel");
    if (!panel) return;

    const badges   = MONO.variants.map(v => `<span class="variant-badge">${v.label}</span>`).join("");
    const chips    = MONO.highlights.map(h => `<div class="highlight-chip"><i class="fa-solid ${h.icon}"></i><span class="highlight-chip-text">${h.text}</span></div>`).join("");
    const modelBtns= MONO.variants.map((v, i) => `<button class="spec-model-btn${i === 0 ? " active" : ""}" data-rows="${v.id}" type="button">${v.label}</button>`).join("");
    const specTables = MONO.variants.map((v, i) => {
      const rows = v.specs.map(s =>
        `<div class="spec-row"><span class="spec-row-label">${s.label}</span><span class="spec-row-val${s.accent ? " accent" : ""}">${s.value}</span></div>`).join("");
      return `<div class="spec-rows" id="${v.id}"${i > 0 ? ' style="display:none;"' : ""}>${rows}</div>`;
    }).join("");
    const aGrid = MONO.aConstants.map(a =>
      `<div class="a-const-item"><div class="a-const-key">${a.key}</div><div class="a-const-val">${a.val}</div></div>`).join("");

    panel.innerHTML = `
      <div class="neu-card">
        <div class="card-top">
          <span class="card-tag">${MONO.tag}</span>
          <div class="card-title">${MONO.title}</div>
          <div class="card-subtitle">${MONO.subtitle}</div>
        </div>
        <div class="card-lens-area">
          <div class="card-lens-bg"></div>
          <div class="card-lens-svg" aria-hidden="true">
            <svg width="140" height="140" viewBox="0 0 140 140">
              <path d="M24 70 Q8 50 12 28"  fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
              <path d="M24 70 Q8 90 12 112" fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
              <path d="M116 70 Q132 50 128 28"  fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
              <path d="M116 70 Q132 90 128 112" fill="none" stroke="#0a5ea8" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
              <ellipse cx="70" cy="70" rx="48" ry="34" fill="rgba(10,94,168,0.1)"  stroke="#0a5ea8" stroke-width="2.2"/>
              <ellipse cx="70" cy="70" rx="34" ry="24" fill="rgba(10,94,168,0.08)" stroke="#0a5ea8" stroke-width="1.3" stroke-dasharray="3 4"/>
              <ellipse cx="70" cy="70" rx="18" ry="13" fill="rgba(10,94,168,0.16)" stroke="#0a5ea8" stroke-width="1"/>
              <circle cx="70" cy="70" r="4.5" fill="#0a5ea8" opacity="0.5"/>
              <circle cx="70" cy="70" r="2"   fill="#0a5ea8" opacity="0.9"/>
            </svg>
          </div>
        </div>
        <div class="variant-badges">${badges}</div>
        <div class="card-desc">${MONO.desc}</div>
        <div class="card-highlights">${chips}</div>
      </div>
      <div class="spec-card">
        <div class="spec-card-head">
          <div class="spec-head-icon"><i class="fa-solid fa-table-list"></i></div>
          <div>
            <div class="spec-head-title">Technical Specifications</div>
            <div class="spec-head-sub">${MONO.title} — Aspheric Hydrophobic</div>
          </div>
        </div>
        <p class="flip-hint-btn">
          <i class="fa-regular fa-hand-pointer" style="margin-top:0.1rem;"></i>
          Tap or select the Model button to reveal full specifications
        </p>
        <div class="spec-model-sel">${modelBtns}</div>
        ${specTables}
        <div class="a-const-block">
          <div class="a-const-label"><i class="fa-solid fa-calculator" style="margin-right:5px;"></i>Recommended Optical A-Constants</div>
          <div class="a-const-grid">${aGrid}</div>
        </div>
        <div class="spec-download">
          <button class="dl-btn dl-btn-primary" onclick="alert('IFU download coming soon.')"><i class="fa-solid fa-download"></i> Download IFU</button>
          <button class="dl-btn dl-btn-ghost"   onclick="alert('Enquiry form coming soon.')"><i class="fa-solid fa-envelope"></i> Enquire</button>
        </div>
      </div>`;
  }

  renderMonoModel();

  // Override hero heading id for monofocal page
  const monoH1 = qs("page-h1");
  if (monoH1) monoH1.innerHTML = "Nano Claro<br><em>Hydrophobic IOL</em>";

  const monoEyebrow = qs("heroEyebrow");
  if (monoEyebrow) monoEyebrow.innerHTML = '<span class="pulse"></span>Hydrophobic · Monofocal · USA Acrylic';

  const monoDesc = qs("heroDesc");
  if (monoDesc) monoDesc.innerHTML = "Three precision-engineered monofocal designs — Spheric, Aspheric, and Yellow Aspheric — all manufactured from USA medical-grade hydrophobic acrylic with &lt;0.5% water content.";

  const monoBtns = qs("heroBtns");
  if (monoBtns) monoBtns.innerHTML = `
    <a href="#models" class="hero-btn-iol-primary"><i class="fa-solid fa-grid-2" style="font-size:12px;"></i> View Models</a>
    <a href="../Pages/hydrophobicIol.html" class="hero-btn-iol-ghost"><i class="fa-solid fa-arrow-left" style="font-size:11px;"></i> Hydrophobic IOL</a>`;

}

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

const mobilePharmaView = document.getElementById("mobilePharmaView");
const mobileBladeView = document.getElementById("mobileBladeView");

const mobileProductsBtn = document.getElementById("mobileProductsBtn");
const mobileIolBtn = document.getElementById("mobileIolBtn");

const mobilePharmaBtn = document.getElementById("mobilePharmaBtn");
const mobileBladeBtn = document.getElementById("mobileBladeBtn");

const backToMainMenu = document.getElementById("backToMainMenu");
const backToProductsMenu = document.getElementById("backToProductsMenu");

const backToProductsFromPharma = document.getElementById("backToProductsFromPharma");
const backToProductsFromBlade = document.getElementById("backToProductsFromBlade");

let currentMobileView = mobileMainView;
let mobileViewTimer = null;

const VIEW_DEPTH = {
  mobileMainView: 0,
  mobileProductsView: 1,
  mobileIolView: 2,
  mobilePharmaView: 2,
  mobileBladeView: 2,
};

function showMobileView(nextView) {
  if (!nextView) return;

  const views = [mobileMainView, mobileProductsView, mobileIolView, mobilePharmaView, mobileBladeView].filter(Boolean);
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
if (mobilePharmaBtn) {
  mobilePharmaBtn.addEventListener("click", function(e) {
    e.preventDefault();
    showMobileView(mobilePharmaView);
  });
}

if (mobileBladeBtn) {
  mobileBladeBtn.addEventListener("click", function(e) {
    e.preventDefault();
    showMobileView(mobileBladeView);
  });
}

if (backToProductsFromPharma) {
  backToProductsFromPharma.addEventListener("click", function(e) {
    e.preventDefault();
    showMobileView(mobileProductsView);
  });
}

if (backToProductsFromBlade) {
  backToProductsFromBlade.addEventListener("click", function(e) {
    e.preventDefault();
    showMobileView(mobileProductsView);
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
 * Uses event delegation — works even when buttons are rendered dynamically
 *************************************************/
document.addEventListener("click", function(e) {
  const btn = e.target.closest(".spec-model-btn");
  if (!btn) return;

  const card = btn.closest(".spec-card");
  if (!card) return;

  card.querySelectorAll(".spec-model-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  card.querySelectorAll(".spec-rows").forEach(r => r.style.display = "none");
  const target = document.getElementById(btn.dataset.rows);
  if (target) target.style.display = "block";

  // ADD THIS — swap lens image if data-lens is set
  if (btn.dataset.lens) {
    const panel = btn.closest(".model-panel");
    const lensImg = panel?.querySelector(".card-lens-svg img");
    if (lensImg) {
      lensImg.style.opacity = "1";
      lensImg.src = btn.dataset.lens;
    }
  }
  // Mobile only: scroll to lens card
  if (window.innerWidth <= 768) {
    const panel = btn.closest(".model-panel") || btn.closest(".switcher-wrap");
    const neuCard = panel ? panel.querySelector(".neu-card") : null;
    if (neuCard) {
      const offset = 80;
      const top = neuCard.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: "smooth" });
    }
  }

});  // ← this is the existing closing });

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

/*************************************************
 * HYDROPHILIC IOL PAGE
 * Only runs on hydrophilicIOL.html
 *************************************************/

if (ACTIVE_PAGE === "hydrophilicIOL") {

  // Override hero content with teal/phil theme
  (function renderPhilHero() {
    const eyebrow = qs("heroEyebrow");
    if (eyebrow) eyebrow.innerHTML = '<span class="pulse" style="background:var(--neu-phil-c);"></span>European Medical Grade · Hydrophilic Acrylic';

    const h1 = qs("hydro-h1");
    if (h1) h1.innerHTML = "Hydrophilic<br><em>IOL Range</em>";

    const desc = qs("heroDesc");
    if (desc) desc.textContent = "Engineered from European-sourced medical-grade hydrophilic acrylic with 25% water content — outstanding biocompatibility, smooth unfolding, and reliable long-term stability. Available across single-piece, plate-haptic, and aspheric designs.";

    const btns = qs("heroBtns");
    if (btns) btns.innerHTML = `
      <a href="#models" class="hero-btn-iol-primary phil-btn">
        <i class="fa-solid fa-grid-2" style="font-size:12px;"></i> Explore Models
      </a>
      <a href="../Pages/iol-page.html" class="hero-btn-iol-ghost">
        <i class="fa-solid fa-arrow-left" style="font-size:11px;"></i> All IOLs
      </a>`;
  })();

  // Specs strip
  (function renderPhilSpecs() {
    const grid = qs("statusBar");
    if (!grid) return;
    const specs = [
      { icon: "fa-droplet",         num: "25%",  label: "Water Content",       delay: "delay-1" },
      { icon: "fa-flag",            num: "EU",   label: "Raw Material Origin",  delay: "delay-2" },
      { icon: "fa-ruler-horizontal",num: "2.8mm",label: "Min Incision Size",    delay: "delay-3" },
      { icon: "fa-layer-group",     num: "12+",  label: "Lens Models",          delay: "delay-4" },
    ];
    grid.innerHTML = specs.map(s => `
      <div class="spec-pill reveal ${s.delay}">
        <div class="spec-pill-icon phil-icon"><i class="fa-solid ${s.icon} phil-c"></i></div>
        <div class="spec-pill-num phil-c">${s.num}</div>
        <div class="spec-pill-label">${s.label}</div>
      </div>`).join("");
  })();

  // Model cards
  (function renderPhilModels() {
    const eyebrow = qs("modelsEyebrow");
    if (eyebrow) eyebrow.innerHTML = `<i class="fa-solid fa-grid-2 phil-c" style="font-size:10px;"></i> Product Lines`;

    const heading = qs("modelsHeading");
    if (heading) heading.innerHTML = "<em>Four</em> design families";

    const sub = qs("modelsSub");
    if (sub) sub.textContent = "Every model uses the same European medical-grade hydrophilic acrylic base — available across single-piece, plate-haptic, aspheric, and toric designs.";

    const grid = qs("modelsGrid");
    if (!grid) return;

    const cards = [
      {
        href:    "../Pages/nanoFold.html",
        variant: "phil",
        tag:     "Spheric · 360° Square Edge",
        name:    "Nano Fold",
        img:     "../Multimedia/lens_nanofold.png",
        iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><ellipse cx="12" cy="12" rx="10" ry="5"/></svg>`,
        desc:    "Hydrophilic Acrylic Single Piece 360° Square Edge Foldable IOL. Smooth unfolding behaviour, excellent centration, and outstanding biocompatibility for routine cataract surgery.",
        chips:   ["NFR 574 SQ", "NFR 600 SQ", "NFC 600 SQ", "NFM 604 SQ"],
        delay:   "delay-1",
      },
      {
        href:    "../Pages/nanoFlex.html",
        variant: "phil",
        tag:     "Aspheric · 360° Square Edge",
        name:    "Nano Flex",
        img:     "../Multimedia/lens_nanoflex.png",
        iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
        desc:    "Aspheric & Yellow Aspheric hydrophilic IOLs — Nano Flex and Nano Flex Y. Aberration-neutral profile with blue-light filtering option. Four haptic configurations.",
        chips:   ["NFR AS", "NFR ASY", "NFC AS", "NFM AS", "NFC ASY", "NFM ASY" ],
        delay:   "delay-2",
      },
    ];

    grid.innerHTML = cards.map(c => `
      <a href="${c.href}" class="model-card reveal ${c.delay}">
        <div class="model-card-header">
          <div class="model-card-icon phil">
            ${c.iconSvg}
          </div>
          <div>
            <span class="model-tag phil">${c.tag}</span>
            <h3>${c.name}</h3>
          </div>
        </div>
        <div class="model-card-body">
          <p class="model-desc">${c.desc}</p>
          <div class="model-lens-list">
            ${c.chips.map(ch => `<span class="model-lens-chip">${ch}</span>`).join("")}
          </div>
          <span class="model-card-cta phil">
            View models
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>
        </div>
      </a>`).join("");
  })();

  // Material Science
  (function renderPhilMaterial() {
    const eyebrow = qs("materialEyebrow");
    if (eyebrow) eyebrow.innerHTML = `<i class="fa-solid fa-droplet phil-c" style="font-size:10px;"></i> Material Science`;

    const heading = qs("materialHeading");
    if (heading) heading.innerHTML = "Why <em>Hydrophilic</em> matters";

    const sub = qs("materialSub");
    if (sub) sub.textContent = "Hydrophilic acrylic lenses offer a fundamentally different biological profile — high water content creates a softer material that integrates gently with ocular tissue, making them ideal for sensitive eyes and complex surgical scenarios.";

    const features = qs("materialFeatures");
    if (features) {
      const list = [
        { icon: "fa-droplet",       title: "25% Water Content",             desc: "The high water content makes the lens soft and pliable — it folds easily through small incisions and unfolds slowly and predictably inside the eye." },
        { icon: "fa-hand-holding",  title: "Superior Biocompatibility",     desc: "Hydrophilic acrylic has outstanding tissue tolerance. Its water-rich surface minimises inflammatory response and posterior capsule opacification (PCO) rates." },
        { icon: "fa-arrows-to-dot", title: "Excellent Capsular Centration", desc: "C-loop and plate-haptic designs provide reliable centration in the capsular bag — critical for consistent optical outcomes in every patient." },
        { icon: "fa-sun",           title: "UV Filter Built-in",            desc: "UV-absorbing chromophore protects the retina from harmful ultraviolet radiation — standard across all Nano Fold and Nano Flex models." },
      ];
      features.innerHTML = list.map(f => `
        <div class="material-feature">
          <div class="mf-icon phil-icon"><i class="fa-solid ${f.icon} phil-c"></i></div>
          <div>
            <div class="mf-title">${f.title}</div>
            <div class="mf-desc">${f.desc}</div>
          </div>
        </div>`).join("");
    }

    const card = qs("materialCard");
    if (card) {
      card.innerHTML = `
        <div class="material-neu-card-label phil-c">
          <i class="fa-solid fa-scale-balanced" style="margin-right:5px;"></i> Water Content Comparison
        </div>
        <div class="material-compare">
          <div class="compare-row">
            <span class="compare-label">World Vision Nano Fold / Flex</span>
            <span class="compare-wv phil-c">25%</span>
          </div>
          <div class="compare-row">
            <span class="compare-label">Hydrophobic Acrylic</span>
            <span class="compare-other">&lt; 0.5%</span>
          </div>
        </div>
        <div style="width:100%;height:1px;background:rgba(0,0,0,0.07);margin:4px 0;"></div>
        <div class="material-neu-card-label phil-c" style="margin-top:4px;">
          <i class="fa-solid fa-certificate" style="margin-right:5px;"></i> Certifications
        </div>
        <div class="material-compare">
          <div class="compare-row"><span class="compare-label">Biocompatibility</span><span class="compare-wv"><i class="fa-solid fa-check" style="font-size:11px;"></i> ISO Tested</span></div>
          <div class="compare-row"><span class="compare-label">UV Protection</span><span class="compare-wv"><i class="fa-solid fa-check" style="font-size:11px;"></i> Built-in</span></div>
          <div class="compare-row"><span class="compare-label">PCO Resistance</span><span class="compare-wv"><i class="fa-solid fa-check" style="font-size:11px;"></i> Optimised</span></div>
          <div class="compare-row"><span class="compare-label">Raw Material Source</span><span class="compare-wv">🇪🇺 Europe</span></div>
        </div>`;
    }
  })();

  // Trust bar
  (function renderPhilTrust() {
    const bar = qs("trustBar");
    if (!bar) return;
    const cards = [
      {
        bgColor: "rgba(10,122,80,0.1)",
        iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--neu-phil-c)" stroke-width="2" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
        title:   "ISO Certified Quality",
        desc:    "All Nano Fold / Nano Flex hydrophilic IOLs are tested to ISO 10993 biocompatibility standards — rigorous validation before every batch leaves our facility.",
      },
      {
        bgColor: "rgba(10,122,80,0.1)",
        iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--neu-phil-c)" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
        title:   "European Medical Grade Acrylic",
        desc:    "Raw hydrophilic acrylic polymer sourced exclusively from certified European medical-grade suppliers — the highest standard of material purity.",
      },
      {
        bgColor: "rgba(10,122,80,0.1)",
        iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--neu-phil-c)" stroke-width="2" stroke-linecap="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>`,
        title:   "Low PCO Rates",
        desc:    "Optimised square-edge optic design and hydrophilic surface chemistry together minimise posterior capsule opacification — protecting long-term visual clarity.",
      },
    ];
    bar.innerHTML = cards.map(t => `
      <div class="trust-card">
        <div class="trust-icon" style="background:${t.bgColor}">${t.iconSvg}</div>
        <div><h3>${t.title}</h3><p>${t.desc}</p></div>
      </div>`).join("");
  })();

  // IFU section
  (function renderPhilIfu() {
    const header = qs("ifuHeader");
    if (header) {
      header.innerHTML = `
        <div class="ifu-icon-wrap phil-btn">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
          </svg>
        </div>
        <div>
          <div class="ifu-title" id="ifu-title">Instructions for Use</div>
          <div class="ifu-sub">Download the official IFU documentation for each Nano Fold / Nano Flex model</div>
        </div>`;
    }

    const grid = qs("ifuGrid");
    if (!grid) return;
    const links = [
      { label: "IFU — NANO FOLD",    sub: "Spheric · NFR / NFC / NFM SQ",   color: "var(--neu-phil-c)", variant: "phil-icon" },
      { label: "IFU — NANO FLEX",    sub: "Aspheric · NFR / NFC / NFM AS",   color: "var(--neu-phil-c)", variant: "phil-icon" },
      { label: "IFU — NANO FLEX Y",  sub: "Yellow Aspheric · ASY series",    color: "var(--neu-phil-c)", variant: "phil-icon" },
      { label: "IFU — NANO FLEX T",  sub: "Toric Aspheric · AST series",     color: "var(--neu-phil-c)", variant: "phil-icon" },
    ];
    grid.innerHTML = links.map(l => `
      <a href="#" class="ifu-link">
        <div class="ifu-link-icon ${l.variant}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${l.color}" stroke-width="2" stroke-linecap="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="12" y1="18" x2="12" y2="12"/>
            <polyline points="9 15 12 18 15 15"/>
          </svg>
        </div>
        <div class="ifu-link-text">
          <strong>${l.label}</strong>
          <span>${l.sub}</span>
        </div>
      </a>`).join("");
  })();

}

/*************************************************
 * IOL PAGE — only runs on iol-page.html
 *************************************************/

if (ACTIVE_PAGE === "iol-page") {

  const IOL_PAGE = {

    hero: {
      eyebrow: "Hydrophobic · Hydrophilic · PMMA",
      heading: "<em>Precision</em> Intraocular <br> Lenses",
      desc:    "Engineered with medical-grade raw materials sourced exclusively from the USA and Europe. Freedom IOLs deliver superior biocompatibility, crystal-clear optics, and long-term stability for every surgical need.",
    },

    stats: [
      { num: "USA <span style='font-size:14px;opacity:0.4;'>+</span> EU", label: "Raw Material Origin", delay: "delay-1" },
      { num: "3",    label: "Material Platforms",       delay: "delay-2" },
      { num: "100%", label: "Medical Grade",            delay: "delay-3" },
      { num: "&lt; 0.5%", label: "Hydrophobic Water Content", delay: "delay-4" },
    ],

    sectionTitle: "Our IOL Range",
    flipHint: "Tap or click any card to reveal full specifications",

    cards: [
      {
        id:      "card-hydro",
        theme:   "hydro",
        learnHref: "../Pages/hydrophobicIol.html",
        front: {
          badge:   "Hydrophobic",
          title:   "Hydrophobic IOL",
          sub:     "USA medical-grade acrylic. Less than 0.5% water content — far superior to competitors. Zero glistening.",
          visualLabel: "Hydrophobic Acrylic",
          svgCircles: [
            "M250 20 r90 rgba(10,94,168,0.15)",
            "M30 200 r70 rgba(10,94,168,0.1)",
          ],
          lensSvg: `../Multimedia/hydrophobicIOL.png`,
        },
        back: {
          title:   "Hydrophobic IOL",
          origin:  "USA — Medical Grade Acrylic",
          iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a5ea8" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><ellipse cx="12" cy="12" rx="10" ry="5"/></svg>`,
          specs: [
            "UV absorber &amp; blue light filtering chromophore",
            "Biocompatibility tests performed to ISO standards",
            "Completely free of glistening &amp; whitening",
            "&lt;0.5% water vs. competitors (&gt;4%) — real hydrophobic",
            "Harder surface — superior stability, less abrasion",
            "Better Multifocal &amp; Toric outcomes vs. competitors",
            "Low refractive index — reduced glare &amp; halos",
            "High MTF for superior light transmission",
          ],
        },
        animDelay: "delay-1",
      },
      {
        id:      "card-phil",
        theme:   "phil",
        learnHref: "../Pages/hydrophilicIOL.html",
        front: {
          badge:   "Hydrophilic",
          title:   "Hydrophilic IOL",
          sub:     "UK medical-grade material. 26% water content — perfect balance of foldability, clarity, and stability.",
          visualLabel: "Hydrophilic Acrylic",
          lensSvg: `../Multimedia/hydrophilic_fold1.png`,
        },
        back: {
          title:   "Hydrophilic IOL",
          origin:  "UK — Medical Grade Acrylic",
          iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a7a50" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>`,
          specs: [
            "UV absorber &amp; blue light filtering chromophore",
            "Biocompatibility tests performed to ISO standards",
            "Low rate of glistening — no calcification",
            "26% water content — leading hydrophilic material",
            "Latest advances in soft lens technology",
            "Superior machining characteristics &amp; foldability",
            "Low refractive index — reduced glares &amp; halos",
            "High MTF for superior light transmission",
          ],
        },
        animDelay: "delay-2",
      },
      {
        id:      "card-pmma",
        theme:   "pmma",
        learnHref: "../Pages/pmmaIOL.html",
        front: {
          badge:   "PMMA",
          title:   "PMMA IOL",
          sub:     "UK medical-grade rigid lens. Cost-effective, highly stable. Suitable for posterior &amp; anterior chamber.",
          visualLabel: "PMMA Rigid",
          lensSvg: `../Multimedia/nanoPlusPmma.png`,
        },
        back: {
          title:   "PMMA IOL",
          origin:  "UK — Medical Grade PMMA",
          iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8a5a10" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/></svg>`,
          specs: [
            "UV absorber &amp; blue light filtering chromophore",
            "Biocompatibility tests performed to ISO standards",
            "Completely free of glistening — no calcification",
            "Harder surface — superior stability &amp; less abrasion",
            "Cost-effective solution without compromising quality",
            "Posterior and anterior chamber compatible",
            "Perfect stability in the capsular bag",
            "Low refractive index — reduced glares &amp; halos",
          ],
        },
        animDelay: "delay-3",
      },
    ],

    trust: [
      { bgColor: "rgba(0,85,165,0.1)",    stroke: "#0055a5", iconPath: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,             title: "ISO Certified Quality",    desc: "All Freedom IOLs undergo rigorous biocompatibility testing to international ISO medical device standards." },
      { bgColor: "rgba(10,122,80,0.1)",   stroke: "#0a7a50", iconPath: `<circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>`,             title: "Premium Raw Materials",    desc: "Only the highest-grade acrylic and PMMA sourced from certified suppliers in the USA and United Kingdom." },
      { bgColor: "rgba(138,90,16,0.1)",   stroke: "#8a5a10", iconPath: `<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>`, title: "Superior Visual Outcomes", desc: "High MTF ratings and low refractive index deliver exceptional light transmission, minimizing halos and glare." },
    ],

    ifu: {
      heading: "Instructions for Use",
      sub:     "Download the official IFU documentation for each product line",
      links: [
        { label: "IFU — Hydrophobic IOLs", sub: "PDF Document", color: "#0a5ea8", variant: "hydro-icon" },
        { label: "IFU — Hydrophilic IOLs", sub: "PDF Document", color: "#0a7a50", variant: "phil-icon"  },
        { label: "IFU — PMMA IOLs",        sub: "PDF Document", color: "#8a5a10", variant: "pmma-icon"  },
        { label: "IFU — PMMA Rings",       sub: "PDF Document", color: "#8a5a10", variant: "pmma-icon"  },
      ],
    },
  };

  // Hero
  (function() {
    const h = IOL_PAGE.hero;
    const eyebrow = qs("iolHeroEyebrow");
    if (eyebrow) eyebrow.innerHTML = `<span class="pulse"></span>${h.eyebrow}`;
    const heading = qs("hero-heading");
    if (heading) heading.innerHTML = h.heading;
    const desc = qs("iolHeroDesc");
    if (desc) desc.textContent = h.desc;
  })();

  // Stats
  (function() {
    const bar = qs("iolStatsBar");
    if (!bar) return;
    bar.innerHTML = IOL_PAGE.stats.map(s => `
      <div class="stat-card neu-raised reveal ${s.delay}" role="listitem">
        <div class="stat-num">${s.num}</div>
        <div class="stat-label">${s.label}</div>
      </div>`).join("");
  })();

  // Section title + flip hint
  (function() {
    const t = qs("iol-section-title");
    if (t) t.textContent = IOL_PAGE.sectionTitle;
    const hint = qs("iolFlipHint");
    if (hint) hint.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M1 4v6h6"/><path d="M23 20v-6h-6"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4-4.64 4.36A9 9 0 0 1 3.51 15"/></svg>
      ${IOL_PAGE.flipHint}`;
  })();

  // IOL flip cards
  (function() {
    const grid = qs("iolCardsGrid");
    if (!grid) return;

    grid.innerHTML = IOL_PAGE.cards.map(c => {
      const f = c.front;
      const b = c.back;
      const t = c.theme;

      const bgCircles = `
        <circle cx="250" cy="20"  r="90"  fill="rgba(var(--${t}-rgb,10,94,168),0.15)"/>
        <circle cx="30"  cy="200" r="70"  fill="rgba(var(--${t}-rgb,10,94,168),0.1)"/>
        <circle cx="150" cy="110" r="120" fill="none" stroke="rgba(var(--${t}-rgb,10,94,168),0.2)" stroke-width="1"/>`;

      return `
        <div class="card-scene reveal ${c.animDelay}" id="${c.id}" tabindex="0" role="button"
          aria-label="${f.title} — click to see specifications">
          <div class="card-flipper">
            <!-- FRONT -->
            <div class="card-face front">
              <div class="card-visual ${t}-bg">
                <svg class="card-visual-bg" viewBox="0 0 300 220" preserveAspectRatio="xMidYMid slice">${bgCircles}</svg>
                <div class="lens-illustration lens-float" aria-hidden="true">
                  <img src="${c.front.lensSvg}" style="width: 10rem; height: 10rem; object-fit: contain;" alt="Illustration of a hydrophobic IOL" />
                </div>
                <span class="card-visual-label ${t}-c">${f.visualLabel}</span>
                <div class="card-flip-icon neu-raised-sm ${t}-c">↩</div>
              </div>
              <div class="card-info">
                <span class="card-badge ${t}-badge">${f.badge}</span>
                <h2 class="card-title">${f.title}</h2>
                <p class="card-sub">${f.sub}</p>
                <span class="card-cta ${t}-c">
                  View specifications
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </div>
            </div>
            <!-- BACK -->
            <div class="card-face back">
              <div class="back-header">
                <div class="back-icon-wrap ${t}-icon">${b.iconSvg}</div>
                <div><div class="back-title ${t}-c">${b.title}</div></div>
              </div>
              <div class="back-origin ${t}-c">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                ${b.origin}
              </div>
              <ul class="spec-list" aria-label="${b.title} specifications">
                ${b.specs.map(s => `<li class="spec-item"><span class="spec-dot ${t}-dot"></span>${s}</li>`).join("")}
              </ul>
              <div class="back-btns">
                <a href="${c.learnHref}" class="back-btn-learn ${t}-btn text-center">
                  <button>Learn More</button>
                </a>
                <button class="back-btn-flip" aria-label="Flip card back">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 4v6h6"/><path d="M5.64 5.64A9 9 0 1 1 3.51 15"/></svg>
                  Flip
                </button>
              </div>
            </div>
          </div>
        </div>`;
    }).join("");
  })();

  // Trust bar
  (function() {
    const bar = qs("iolTrustBar");
    if (!bar) return;
    bar.innerHTML = IOL_PAGE.trust.map(t => `
      <div class="trust-card">
        <div class="trust-icon" style="background:${t.bgColor}">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="${t.stroke}" stroke-width="2" stroke-linecap="round">${t.iconPath}</svg>
        </div>
        <div><h3>${t.title}</h3><p>${t.desc}</p></div>
      </div>`).join("");
  })();

  // IFU
  (function() {
    const d = IOL_PAGE.ifu;
    const header = qs("iolIfuHeader");
    if (header) {
      header.innerHTML = `
        <div class="ifu-icon-wrap">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
          </svg>
        </div>
        <div>
          <div class="ifu-title" id="ifu-title">${d.heading}</div>
          <div class="ifu-sub">${d.sub}</div>
        </div>`;
    }
    const grid = qs("iolIfuGrid");
    if (grid) {
      grid.innerHTML = d.links.map(l => `
        <a href="#" class="ifu-link">
          <div class="ifu-link-icon ${l.variant}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${l.color}" stroke-width="2" stroke-linecap="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="12" y1="18" x2="12" y2="12"/>
              <polyline points="9 15 12 18 15 15"/>
            </svg>
          </div>
          <div class="ifu-link-text"><strong>${l.label}</strong><span>${l.sub}</span></div>
        </a>`).join("");
    }
  })();

  // WhatsApp + footer
  const waF = qs("waFloat");
  if (waF) waF.href = PAGE.company.whatsapp;
  const copy = qs("footerCopyright");
  if (copy) copy.textContent = PAGE.company.copyright;

}

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
 * NANO FOLD PAGE — nanoFold.html
 * Spheric Hydrophilic IOL (NANO FOLD)
 *************************************************/

if (ACTIVE_PAGE === "nanoFold") {

  const FOLD = {
    tag:      "Spheric · Hydrophilic",
    title:    "Nano Fold",
    subtitle: "Hydrophilic Acrylic Single Piece 360° Square Edge Foldable Intraocular Lens",
    desc:     "The Nano Fold is a spheric hydrophilic IOL available in four haptic configurations — open loop round (NFR), open loop C-loop (NFC), and modified C-loop plate (NFM). All models share the same optical platform.",
    lensImg:  "../Multimedia/hydrophilic_fold1.png",  // ← place your lens image here
    highlights: [
      { icon: "fa-circle-dot",       text: "Spherical optic"     },
      { icon: "fa-border-all",       text: "360° Square edge"    },
      { icon: "fa-ruler-horizontal", text: "2.8mm incision"      },
      { icon: "fa-droplet",          text: "25% water content"   },
      { icon: "fa-sun",              text: "UV filter"           },
      { icon: "fa-flag",             text: "EU medical grade"    },
    ],
    variants: [
      {
        id: "NFR574SQ", label: "NFR 574 SQ",
        lensImg: "../Multimedia/hydrophilic_fold1.png",  // ← place your lens image here
        specs: [
          { label: "Model",           value: "NFR 574 SQ",   accent: true },
          { label: "Optic Design",    value: "Equiconvex · 360° Square Edge" },
          { label: "Optic Size",      value: "5.75 mm",      accent: true },
          { label: "Overall Length",  value: "12.00 mm",     accent: true },
          { label: "Haptic Angle",    value: "0°"           },
          { label: "A-Constant",      value: "118.0"        },
          { label: "AC Depth",        value: "5.00 mm"      },
          { label: "Lens Material",   value: "Hydrophilic Acrylic" },
          { label: "Order",           value: "Special", accent: true },
        ],
      },
      {
        id: "NFR600SQ", label: "NFR 600 SQ",
        lensImg: "../Multimedia/hydrophilic_fold2.png",  // ← place your lens image here
        specs: [
          { label: "Model",           value: "NFR 600 SQ",   accent: true },
          { label: "Optic Design",    value: "Equiconvex · 360° Square Edge" },
          { label: "Optic Size",      value: "6.00 mm",      accent: true },
          { label: "Overall Length",  value: "12.50 mm",     accent: true },
          { label: "Haptic Angle",    value: "0°"           },
          { label: "A-Constant",      value: "118.0"        },
          { label: "AC Depth",        value: "5.00 mm"      },
          { label: "Lens Material",   value: "Hydrophilic Acrylic" },
          { label: "Order",           value: "Normal", accent: true },
        ],
      },
      {
        id: "NFC600SQ", label: "NFC 600 SQ",
        lensImg: "../Multimedia/hydrophilic_fold3.png",  // ← place your lens image here
        specs: [
          { label: "Model",           value: "NFC 600 SQ",   accent: true },
          { label: "Optic Design",    value: "Equiconvex · 360° Square Edge" },
          { label: "Optic Size",      value: "6.00 mm",      accent: true },
          { label: "Overall Length",  value: "12.50 mm",     accent: true },
          { label: "Haptic Angle",    value: "0°"           },
          { label: "A-Constant",      value: "118.0"        },
          { label: "AC Depth",        value: "5.00 mm"      },
          { label: "Lens Material",   value: "Hydrophilic Acrylic" },
          { label: "Order",           value: "Normal", accent: true },
        ],
      },
      {
        id: "NFM604SQ", label: "NFM 604 SQ",
        lensImg: "../Multimedia/hydrophilic_fold4.png",  // ← place your lens image here
        specs: [
          { label: "Model",           value: "NFM 604 SQ",   accent: true },
          { label: "Optic Design",    value: "Equiconvex · 360° Square Edge" },
          { label: "Optic Size",      value: "6.00 mm",      accent: true },
          { label: "Overall Length",  value: "11.00 mm",     accent: true },
          { label: "Haptic Angle",    value: "0°"           },
          { label: "A-Constant",      value: "118.0"        },
          { label: "AC Depth",        value: "5.00 mm"      },
          { label: "Lens Material",   value: "Hydrophilic Acrylic" },
          { label: "Order",           value: "Normal", accent: true },
        ],
      },
    ],
    aConstants: [
      { key: "SRK/T",      val: "118.0" },
      { key: "Hoffer Q",   val: "5.40"  },
      { key: "Holladay 1", val: "1.60"  },
      { key: "Haigis a0",  val: "1.20"  },
      { key: "Haigis a1",  val: "0.400" },
      { key: "Haigis a2",  val: "0.100" },
    ],
  };

  // Hero
  qs("heroEyebrow") && (qs("heroEyebrow").innerHTML = '<span class="pulse" style="background:var(--neu-phil-c);"></span>Hydrophilic · Spheric · EU Acrylic');
  qs("page-h1")     && (qs("page-h1").innerHTML     = "Nano Fold<br><em>Hydrophilic IOL</em>");
  qs("heroDesc")    && (qs("heroDesc").textContent   = "Spheric 360° Square Edge hydrophilic acrylic IOL — smooth unfolding, excellent centration, outstanding biocompatibility. Four haptic configurations for every surgical scenario.");
  qs("heroBtns")    && (qs("heroBtns").innerHTML     = `
    <a href="#models" class="hero-btn-iol-primary phil-btn"><i class="fa-solid fa-grid-2" style="font-size:12px;"></i> View Models</a>
    <a href="../Pages/hydrophilicIOL.html" class="hero-btn-iol-ghost"><i class="fa-solid fa-arrow-left" style="font-size:11px;"></i> Hydrophilic IOL</a>`);

  // Hero lens image
  const foldLensWrap = qs("heroLensWrap");
  if (foldLensWrap) {
    foldLensWrap.innerHTML = `<img src="${FOLD.lensImg}" alt="Nano Fold lens" style="width:240px;height:240px;object-fit:contain;" onerror="this.style.opacity='1'"/>`;
  }

  // Model panel
  const foldPanel = qs("modelPanel");
  if (foldPanel) {
    const badges    = FOLD.variants.map(v => `<span class="variant-badge">${v.label}</span>`).join("");
    const chips     = FOLD.highlights.map(h => `<div class="highlight-chip"><i class="fa-solid ${h.icon}"></i><span class="highlight-chip-text">${h.text}</span></div>`).join("");
    const modelBtns = FOLD.variants.map((v, i) => `<button class="spec-model-btn${i === 0 ? " active" : ""}" data-rows="${v.id}" data-lens="${v.lensImg || FOLD.lensImg}" type="button">${v.label}</button>`).join("");
    const specTables = FOLD.variants.map((v, i) => {
      const rows = v.specs.map(s => `<div class="spec-row"><span class="spec-row-label">${s.label}</span><span class="spec-row-val${s.accent ? " accent" : ""}">${s.value}</span></div>`).join("");
      return `<div class="spec-rows" id="${v.id}"${i > 0 ? ' style="display:none;"' : ""}>${rows}</div>`;
    }).join("");
    const aGrid = FOLD.aConstants.map(a => `<div class="a-const-item"><div class="a-const-key">${a.key}</div><div class="a-const-val">${a.val}</div></div>`).join("");

    foldPanel.innerHTML = `
      <div class="neu-card">
        <div class="card-top">
          <span class="card-tag">${FOLD.tag}</span>
          <div class="card-title">${FOLD.title}</div>
          <div class="card-subtitle">${FOLD.subtitle}</div>
        </div>
        <div class="card-lens-area">
          <div class="card-lens-bg"></div>
          <div class="card-lens-svg" id="foldModelLens">
            <!-- lens image swaps when model tab changes -->
            <img src="${FOLD.lensImg}" alt="Nano Fold" style="width:140px;height:140px;object-fit:contain;" onerror="this.style.opacity='1'"/>
          </div>
        </div>
        <div class="variant-badges">${badges}</div>
        <div class="card-desc">${FOLD.desc}</div>
        <div class="card-highlights">${chips}</div>
      </div>
      <div class="spec-card">
        <div class="spec-card-head">
          <div class="spec-head-icon phil-icon"><i class="fa-solid fa-table-list phil-c"></i></div>
          <div>
            <div class="spec-head-title">Technical Specifications</div>
            <div class="spec-head-sub">${FOLD.title} — Spheric Hydrophilic</div>
          </div>
        </div>
        <p class="flip-hint-btn">
          <i class="fa-regular fa-hand-pointer" style="margin-top:0.1rem;"></i>
          Select the model to reveal full specifications
        </p>
        <div class="spec-model-sel">${modelBtns}</div>
        ${specTables}
        <div class="a-const-block">
          <div class="a-const-label"><i class="fa-solid fa-calculator" style="margin-right:5px;"></i>Recommended Optical A-Constants</div>
          <div class="a-const-grid">${aGrid}</div>
        </div>
        <div class="spec-download">
          <button class="dl-btn dl-btn-primary" onclick="alert('IFU download coming soon.')"><i class="fa-solid fa-download"></i> Download IFU</button>
          <button class="dl-btn dl-btn-ghost"   onclick="alert('Enquiry form coming soon.')"><i class="fa-solid fa-envelope"></i> Enquire</button>
        </div>
      </div>`;

      const foldBtns = foldPanel.querySelectorAll(".spec-model-btn");
      const foldLensImg = document.querySelector("#foldModelLens img");

      foldBtns.forEach(btn => {
        btn.addEventListener("click", () => {

          // active button
          foldBtns.forEach(b => b.classList.remove("active"));
          btn.classList.add("active");

          // specs switching
          foldPanel.querySelectorAll(".spec-rows").forEach(r => {
            r.style.display = "none";
          });

          const activeRows = document.getElementById(btn.dataset.rows);
          if (activeRows) activeRows.style.display = "block";

          // lens image switching
          if (foldLensImg && btn.dataset.lens) {
            foldLensImg.src = btn.dataset.lens;
          }
        });
      });
  }

  // Trust + IFU + float + footer
  const foldTrust = qs("trustBar");
  if (foldTrust) foldTrust.innerHTML = [
    { bg: "rgba(10,122,80,0.1)", stroke: "var(--neu-phil-c)", path: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,             title: "ISO Certified",        desc: "All Nano Fold lenses tested to ISO 10993 biocompatibility standards." },
    { bg: "rgba(10,122,80,0.1)", stroke: "var(--neu-phil-c)", path: `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`, title: "EU Medical Grade",     desc: "Hydrophilic acrylic polymer sourced from certified European suppliers." },
    { bg: "rgba(10,122,80,0.1)", stroke: "var(--neu-phil-c)", path: `<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>`, title: "Low PCO Rates",       desc: "360° square edge optic design minimises posterior capsule opacification." },
  ].map(t => `<div class="trust-card"><div class="trust-icon" style="background:${t.bg}"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="${t.stroke}" stroke-width="2" stroke-linecap="round">${t.path}</svg></div><div><h3>${t.title}</h3><p>${t.desc}</p></div></div>`).join("");

  const foldIfuHeader = qs("ifuHeader");
  if (foldIfuHeader) foldIfuHeader.innerHTML = `<div class="ifu-icon-wrap phil-btn"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div><div><div class="ifu-title" id="ifu-flex">Instructions for Use</div><div class="ifu-sub">Download IFU for Nano Fold models</div></div>`;
  const foldIfuGrid = qs("ifuGrid");
  if (foldIfuGrid) foldIfuGrid.innerHTML = ["NFR 574 SQ","NFR 600 SQ","NFC 600 SQ","NFM 604 SQ"].map(m => `<a href="#" class="ifu-link"><div class="ifu-link-icon phil-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--neu-phil-c)" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg></div><div class="ifu-link-text"><strong>IFU — ${m}</strong><span>PDF Document</span></div></a>`).join("");

  const waF = qs("waFloat"); if (waF) waF.href = PAGE.company.whatsapp;
  const copy = qs("footerCopyright"); if (copy) copy.textContent = PAGE.company.copyright;
}


/*************************************************
 * NANO FLEX PAGE — nanoFlex.html
 * Two tabs: Nano Flex (Aspheric) + Nano Flex Y (Yellow Aspheric)
 *************************************************/

if (ACTIVE_PAGE === "nanoFlex") {

  const FLEX_DATA = {
    nanoFlex: {
      id:       "nanoFlex",
      tabLabel: "Nano Flex",
      tag:      "Aspheric · Hydrophilic",
      title:    "Nano Flex",
      subtitle: "Hydrophilic Acrylic Single Piece 360° Square Edge Aspheric Foldable Intraocular Lens",
      desc:     "The Nano Flex aspheric hydrophilic IOL delivers aberration-neutral optical performance. Available in four haptic configurations — the same proven platform as Nano Fold with an aspheric optic upgrade.",
      lensImg:  "../Multimedia/hydrophilic_fold1.png",   // ← place your lens image here
      highlights: [
        { icon: "fa-circle-dot",       text: "Aspheric optic"     },
        { icon: "fa-border-all",       text: "360° Square edge"   },
        { icon: "fa-ruler-horizontal", text: "2.8mm incision"     },
        { icon: "fa-droplet",          text: "25% water content"  },
        { icon: "fa-sun",              text: "UV filter"          },
        { icon: "fa-flag",             text: "EU medical grade"   },
      ],
      variants: [
        { id: "NFR574AS", 
          label: "NFR 574 AS",
          lensImg: "../Multimedia/hydrophilic_fold1.png",  // ← place your lens image here
          specs: [
            { label: "Model",          value: "NFR 574 AS",   accent: true },
            { label: "Optic Design",   value: "Equiconvex Aspheric · 360° SqE" },
            { label: "Optic Size",     value: "5.75 mm",      accent: true },
            { label: "Overall Length", value: "12.00 mm",     accent: true },
            { label: "Haptic Angle",   value: "0°" },
            { label: "A-Constant",     value: "118.0" },
            { label: "AC Depth",       value: "5.00 mm" },
            { label: "Lens Material",  value: "Hydrophilic Acrylic" },
            { label: "Order",          value: "Special", accent: true },
          ]
        },
        { id: "NFR600AS", label: "NFR 600 AS", lensImg: "../Multimedia/hydrophilic_fold2.png", specs: [
          { label: "Model",          value: "NFR 600 AS",   accent: true },
          { label: "Optic Design",   value: "Equiconvex Aspheric · 360° SqE" },
          { label: "Optic Size",     value: "6.00 mm",      accent: true },
          { label: "Overall Length", value: "12.50 mm",     accent: true },
          { label: "Haptic Angle",   value: "0°" },
          { label: "A-Constant",     value: "118.0" },
          { label: "AC Depth",       value: "5.00 mm" },
          { label: "Lens Material",  value: "Hydrophilic Acrylic" },
          { label: "Order",          value: "Normal", accent: true },
        ]},
        { id: "NFC600AS", label: "NFC 600 AS", lensImg: "../Multimedia/hydrophilic_fold3.png", specs: [
          { label: "Model",          value: "NFC 600 AS",   accent: true },
          { label: "Optic Design",   value: "Equiconvex Aspheric · 360° SqE" },
          { label: "Optic Size",     value: "6.00 mm",      accent: true },
          { label: "Overall Length", value: "12.50 mm",     accent: true },
          { label: "Haptic Angle",   value: "0°" },
          { label: "A-Constant",     value: "118.0" },
          { label: "AC Depth",       value: "5.00 mm" },
          { label: "Lens Material",  value: "Hydrophilic Acrylic" },
          { label: "Order",          value: "Normal", accent: true },
        ]},
        { id: "NFM604AS", label: "NFM 604 AS", lensImg: "../Multimedia/hydrophilic_fold4.png", specs: [
          { label: "Model",          value: "NFM 604 AS",   accent: true },
          { label: "Optic Design",   value: "Equiconvex Aspheric · 360° SqE" },
          { label: "Optic Size",     value: "6.00 mm",      accent: true },
          { label: "Overall Length", value: "11.00 mm",     accent: true },
          { label: "Haptic Angle",   value: "0°" },
          { label: "A-Constant",     value: "118.0" },
          { label: "AC Depth",       value: "5.00 mm" },
          { label: "Lens Material",  value: "Hydrophilic Acrylic" },
          { label: "Order",          value: "Normal", accent: true },
        ]},
      ],
    },

    nanoFlexY: {
      id:       "nanoFlexY",
      tabLabel: "Nano Flex Y",
      tag:      "Yellow · Aspheric · Hydrophilic",
      title:    "Nano Flex Y",
      subtitle: "Yellow Hydrophilic Acrylic Single Piece 360° Square Edge Aspheric Foldable Intraocular Lens",
      desc:     "The Nano Flex Y adds a blue-light filtering yellow chromophore to the proven Nano Flex aspheric platform — providing additional retinal protection while maintaining excellent colour perception.",
      lensImg:  "../Multimedia/hydrophilic_flexY1.png",  // ← place your lens image here
      highlights: [
        { icon: "fa-circle-dot",       text: "Aspheric optic"     },
        { icon: "fa-border-all",       text: "360° Square edge"   },
        { icon: "fa-ruler-horizontal", text: "2.8mm incision"     },
        { icon: "fa-droplet",          text: "25% water content"  },
        { icon: "fa-sun",              text: "UV + Blue filter"   },
        { icon: "fa-flag",             text: "EU medical grade"   },
      ],
      variants: [
        { id: "NFR574ASY", label: "NFR 574 ASY", lensImg: "../Multimedia/hydrophilic_flexY1.png", specs: [
          { label: "Model",          value: "NFR 574 ASY",  accent: true },
          { label: "Optic Design",   value: "Equiconvex Aspheric Yellow · 360°" },
          { label: "Optic Size",     value: "5.75 mm",      accent: true },
          { label: "Overall Length", value: "12.00 mm",     accent: true },
          { label: "Haptic Angle",   value: "0°" },
          { label: "A-Constant",     value: "118.0" },
          { label: "AC Depth",       value: "5.00 mm" },
          { label: "Lens Material",  value: "Yellow Hydrophilic Acrylic" },
          { label: "Order",          value: "Special", accent: true },
        ]},
        { id: "NFR600ASY", label: "NFR 600 ASY", lensImg: "../Multimedia/hydrophilic_flexY2.png", specs: [
          { label: "Model",          value: "NFR 600 ASY",  accent: true },
          { label: "Optic Design",   value: "Equiconvex Aspheric Yellow · 360°" },
          { label: "Optic Size",     value: "6.00 mm",      accent: true },
          { label: "Overall Length", value: "12.50 mm",     accent: true },
          { label: "Haptic Angle",   value: "0°" },
          { label: "A-Constant",     value: "118.0" },
          { label: "AC Depth",       value: "5.00 mm" },
          { label: "Lens Material",  value: "Yellow Hydrophilic Acrylic" },
          { label: "Order",          value: "Normal", accent: true },
        ]},
        { id: "NFC600ASY", label: "NFC 600 ASY", lensImg: "../Multimedia/hydrophilic_flexY3.png", specs: [
          { label: "Model",          value: "NFC 600 ASY",  accent: true },
          { label: "Optic Design",   value: "Equiconvex Aspheric Yellow · 360°" },
          { label: "Optic Size",     value: "6.00 mm",      accent: true },
          { label: "Overall Length", value: "12.50 mm",     accent: true },
          { label: "Haptic Angle",   value: "0°" },
          { label: "A-Constant",     value: "118.0" },
          { label: "AC Depth",       value: "5.00 mm" },
          { label: "Lens Material",  value: "Yellow Hydrophilic Acrylic" },
          { label: "Order",          value: "Normal", accent: true },
        ]},
        { id: "NFM604ASY", label: "NFM 604 ASY", lensImg: "../Multimedia/hydrophilic_flexY4.png", specs: [
          { label: "Model",          value: "NFM 604 ASY",  accent: true },
          { label: "Optic Design",   value: "Equiconvex Aspheric Yellow · 360°" },
          { label: "Optic Size",     value: "6.00 mm",      accent: true },
          { label: "Overall Length", value: "11.00 mm",     accent: true },
          { label: "Haptic Angle",   value: "0°" },
          { label: "A-Constant",     value: "118.0" },
          { label: "AC Depth",       value: "5.00 mm" },
          { label: "Lens Material",  value: "Yellow Hydrophilic Acrylic" },
          { label: "Order",          value: "Normal", accent: true },
        ]},
      ],
    },
  };

  const FLEX_A_CONSTANTS = [
    { key: "SRK/T",      val: "118.0" },
    { key: "Hoffer Q",   val: "5.40"  },
    { key: "Holladay 1", val: "1.60"  },
    { key: "Haigis a0",  val: "1.20"  },
    { key: "Haigis a1",  val: "0.400" },
    { key: "Haigis a2",  val: "0.100" },
  ];

  // Hero
  qs("heroEyebrow") && (qs("heroEyebrow").innerHTML = '<span class="pulse" style="background:var(--neu-phil-c);"></span>Hydrophilic · Aspheric · EU Acrylic');
  qs("page-h1")     && (qs("page-h1").innerHTML     = "Nano Flex<br><em>Hydrophilic IOL</em>");
  qs("heroDesc")    && (qs("heroDesc").textContent   = "Two aspheric hydrophilic IOL designs — Nano Flex (clear) and Nano Flex Y (yellow, blue-light filtering) — built on the same 360° Square Edge platform across four haptic configurations.");
  qs("heroBtns")    && (qs("heroBtns").innerHTML     = `
    <a href="#models" class="hero-btn-iol-primary phil-btn"><i class="fa-solid fa-grid-2" style="font-size:12px;"></i> View Models</a>
    <a href="../Pages/hydrophilicIOL.html" class="hero-btn-iol-ghost"><i class="fa-solid fa-arrow-left" style="font-size:11px;"></i> Hydrophilic IOL</a>`);

  // Hero lens image — starts with Nano Flex
  let currentFlexTab = "nanoFlex";
  const flexLensWrap = qs("heroLensWrap");
  function updateHeroLens(tabId) {
    if (!flexLensWrap) return;
    flexLensWrap.innerHTML = `<img src="${FLEX_DATA[tabId].lensImg}" alt="${FLEX_DATA[tabId].title}" style="width:240px;height:240px;object-fit:contain;" onerror="this.style.opacity='1'"/>`;
  }
  updateHeroLens("nanoFlex");

  // Build tab bar — same pattern as monofocalHydrophobic.html
  const flexTabBar = qs("flexTabBar");
  if (flexTabBar) {
    const tabDefs = [
      { id: "nanoFlex",  name: "Nano Flex",  type: "Aspheric",        yellow: false },
      { id: "nanoFlexY", name: "Nano Flex Y", type: "Yellow Aspheric", yellow: true  },
    ];
    flexTabBar.innerHTML = tabDefs.map((t, i) => `
      <button class="model-tab${i === 0 ? " active" : ""}${t.yellow ? " model-tab-yellow" : ""}" role="tab"
        aria-selected="${i === 0}" aria-controls="panel-${t.id}"
        id="tab-${t.id}" data-model="${t.id}" data-yellow="${t.yellow}" type="button">
        <div class="model-tab-name">${t.name}</div>
        <div class="model-tab-type">${t.type}</div>
        <div class="model-tab-dot"></div>
      </button>`).join("");
  }

  // Build each panel
  function buildFlexPanel(data) {
    const panelEl = qs(`panel-${data.id}`);
    if (!panelEl) return;

    // nanoFlexY uses yellow/amber theme, nanoFlex uses teal/phil theme
    const isYellow  = data.id === "nanoFlexY";
    const tagStyle  = isYellow ? 'style="background:rgba(138,90,16,0.1);color:var(--neu-pmma-c);"' : "";
    const iconStyle = isYellow ? 'style="background:rgba(138,90,16,0.1);color:var(--neu-pmma-c);"' : 'style="background:rgba(10,122,80,0.1);color:var(--neu-phil-c);"';
    const accentC   = isYellow ? "var(--neu-pmma-c)" : "var(--neu-phil-c)";
    const lensStroke= isYellow ? "#8a5a10" : "#0a7a50";
    const lensFill  = isYellow ? "rgba(138,90,16," : "rgba(10,122,80,";

    const badges    = data.variants.map(v => `<span class="variant-badge">${v.label}</span>`).join("");
    const chips     = data.highlights.map(h => `<div class="highlight-chip"><i class="fa-solid ${h.icon}"></i><span class="highlight-chip-text">${h.text}</span></div>`).join("");
    const modelBtns = data.variants.map((v, i) => `<button class="spec-model-btn${i === 0 ? " active" : ""}" data-rows="${v.id}" data-lens="${v.lensImg || data.lensImg}" type="button">${v.label}</button>`).join("");
    const specTables = data.variants.map((v, i) => {
      const rows = v.specs.map(s => `
        <div class="spec-row">
          <span class="spec-row-label">${s.label}</span>
          <span class="spec-row-val${s.accent ? '"' : '"'}" style="${s.accent ? `color:${accentC};font-weight:600;` : ""}">${s.value}</span>
        </div>`).join("");
      return `<div class="spec-rows" id="${v.id}"${i > 0 ? ' style="display:none;"' : ""}>${rows}</div>`;
    }).join("");
    const aGrid = FLEX_A_CONSTANTS.map(a => `<div class="a-const-item"><div class="a-const-key">${a.key}</div><div class="a-const-val">${a.val}</div></div>`).join("");

    const dlBtnStyle = isYellow ? 'style="background:linear-gradient(135deg,#8a5a10,#b87820);"' : "";

    panelEl.innerHTML = `
      <div class="neu-card">
        <div class="card-top">
          <span class="card-tag" ${tagStyle}>${data.tag}</span>
          <div class="card-title">${data.title}</div>
          <div class="card-subtitle">${data.subtitle}</div>
        </div>
        <div class="card-lens-area">
          <div class="${isYellow ? "card-lens-bg-yellow" : "card-lens-bg"}"></div>
          <div class="card-lens-svg">
            <img src="${data.lensImg}" alt="${data.title}" style="width:140px;height:140px;object-fit:contain;" onerror="this.style.opacity='0'"/>
          </div>
        </div>
        <div class="variant-badges">${badges}</div>
        <div class="card-desc">${data.desc}</div>
        <div class="card-highlights">${chips}</div>
      </div>
      <div class="spec-card">
        <div class="spec-card-head">
          <div class="spec-head-icon" ${iconStyle}><i class="fa-solid fa-table-list"></i></div>
          <div>
            <div class="spec-head-title">Technical Specifications</div>
            <div class="spec-head-sub">${data.title} — ${isYellow ? "Yellow Aspheric Hydrophilic" : "Aspheric Hydrophilic"}</div>
          </div>
        </div>
        <p class="flip-hint-btn">
          <i class="fa-regular fa-hand-pointer" style="margin-top:0.1rem;"></i>
          Select the model to reveal full specifications
        </p>
        <div class="spec-model-sel">${modelBtns}</div>
        ${specTables}
        <div class="a-const-block" ${isYellow ? 'style="border:0.5px solid rgba(138,90,16,0.2);"' : ""}>
          <div class="a-const-label"><i class="fa-solid fa-calculator" style="margin-right:5px;"></i>Recommended Optical A-Constants</div>
          <div class="a-const-grid">${aGrid}</div>
        </div>
        <div class="spec-download">
          <button class="dl-btn dl-btn-primary" ${dlBtnStyle} onclick="alert('IFU download coming soon.')"><i class="fa-solid fa-download"></i> Download IFU</button>
          <button class="dl-btn dl-btn-ghost" onclick="alert('Enquiry form coming soon.')"><i class="fa-solid fa-envelope"></i> Enquire</button>
        </div>
      </div>`;
  }

  buildFlexPanel(FLEX_DATA.nanoFlex);
  buildFlexPanel(FLEX_DATA.nanoFlexY);

  // Tab switching — same pattern as model-tab in monofocalHydrophobic
  document.addEventListener("click", function(e) {
    const tab = e.target.closest(".model-tab[data-model]");
    if (!tab) return;
    const targetId = tab.dataset.model;
    const isYellow = tab.dataset.yellow === "true";

    // Update tab buttons
    document.querySelectorAll(".model-tab[data-model]").forEach(t => {
      const isThis = t === tab;
      t.classList.toggle("active", isThis);
      // Apply yellow active style to yellow tab when active
      if (t.dataset.yellow === "true") {
        t.style.background = isThis ? "linear-gradient(135deg,#8a5a10,#b87820)" : "";
        t.style.color      = isThis ? "#fff" : "";
      }
      t.setAttribute("aria-selected", isThis ? "true" : "false");
    });

    // Update panels
    document.querySelectorAll(".model-panel").forEach(p => p.classList.remove("active"));
    const targetPanel = qs(`panel-${targetId}`);
    if (targetPanel) targetPanel.classList.add("active");

    // Swap hero lens image
    updateHeroLens(targetId);
  });

  // Trust
  const flexTrust = qs("trustBar");
  if (flexTrust) flexTrust.innerHTML = [
    { bg: "rgba(10,122,80,0.1)", stroke: "var(--neu-phil-c)", path: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,             title: "ISO Certified",       desc: "All Nano Flex and Nano Flex Y lenses tested to ISO 10993 biocompatibility standards." },
    { bg: "rgba(10,122,80,0.1)", stroke: "var(--neu-phil-c)", path: `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`, title: "EU Medical Grade",    desc: "Hydrophilic acrylic polymer sourced from certified European medical-grade suppliers." },
    { bg: "rgba(10,122,80,0.1)", stroke: "var(--neu-phil-c)", path: `<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>`, title: "Aspheric Optics",     desc: "Aberration-neutral aspheric design maintains contrast sensitivity across all pupil sizes." },
  ].map(t => `<div class="trust-card"><div class="trust-icon" style="background:${t.bg}"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="${t.stroke}" stroke-width="2" stroke-linecap="round">${t.path}</svg></div><div><h3>${t.title}</h3><p>${t.desc}</p></div></div>`).join("");

  // IFU
  const flexIfuHeader = qs("ifuHeader");
  if (flexIfuHeader) flexIfuHeader.innerHTML = `<div class="ifu-icon-wrap phil-btn"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div><div><div class="ifu-title" id="ifu-flex">Instructions for Use</div><div class="ifu-sub">Download IFU for Nano Flex and Nano Flex Y models</div></div>`;
  const flexIfuGrid = qs("ifuGrid");
  if (flexIfuGrid) flexIfuGrid.innerHTML = [
    { label: "IFU — Nano Flex",   sub: "Aspheric · AS series"        },
    { label: "IFU — Nano Flex Y", sub: "Yellow Aspheric · ASY series" },
  ].map(l => `<a href="#" class="ifu-link"><div class="ifu-link-icon phil-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--neu-phil-c)" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg></div><div class="ifu-link-text"><strong>${l.label}</strong><span>${l.sub}</span></div></a>`).join("");

  const waF2 = qs("waFloat"); if (waF2) waF2.href = PAGE.company.whatsapp;
  const copy2 = qs("footerCopyright"); if (copy2) copy2.textContent = PAGE.company.copyright;
}

/*************************************************
 * PMMA IOL PAGE — pmmaIol.html
 * Tabs: Nano Plus | Nano Plus Y | Nano IOL | Nano Iris | Nano Ring | Nano SQD
 *************************************************/

if (ACTIVE_PAGE === "pmmaIOL") {

  const PMMA_C = "var(--neu-pmma-c)";

  // ── SHARED A-CONSTANTS (PC lenses) ────────────────────────────────────
  const AC_PC = [
    { key: "A-Constant",   val: "118.4" },
    { key: "AC Depth",     val: "5.0 mm" },
    { key: "Refractive Index", val: "1.490" },
    { key: "Sterilization",val: "Ethylene Oxide" },
  ];
  const AC_IRIS = [
    { key: "A-Constant",   val: "115.0" },
    { key: "Sterilization",val: "Ethylene Oxide" },
  ];

  // ── TAB DEFINITIONS ───────────────────────────────────────────────────
  const PMMA_TABS = [

    // ── TAB 1: Nano Plus (Clear Aspheric) ─────────────────────────────
    {
      id:    "nanoPlus",
      name:  "Nano Plus",
      type:  "Aspheric · 360° Square Edge",
      tag:   "Clear Aspheric · PC / AC",
      title: "Nano Plus",
      subtitle: "360° Square Edge Aspheric PMMA Single Piece Posterior Chamber Intraocular Lens",
      desc:  "The Nano Plus is a single-piece PMMA aspheric IOL with 360° square-edge design. Available in two optic sizes — 5.50 mm and 6.00 mm — with C-type step vault haptics for PC and S-type for AC placement.",
      lensImg: "../Multimedia/nanoPlusPmma.png",
      highlights: [
        { icon: "fa-circle-dot",       text: "Aspheric optic"          },
        { icon: "fa-border-all",       text: "360° Square edge"        },
        { icon: "fa-link",             text: "C/S Step vault haptics"  },
        { icon: "fa-ruler",            text: "5.0 – 6.5 mm optic"      },
        { icon: "fa-sun",              text: "UV filter"               },
        { icon: "fa-flag",             text: "UK medical grade"        },
      ],
      variants: [
        {
          id: "NPC600AS", label: "NPC 600 AS",
          lensImg: "../Multimedia/nanoPlusPmma.png",
          specs: [
            { label: "Model",             value: "NPC 600 AS",                               accent: true },
            { label: "Lens Type",         value: "Single Piece PMMA ASPHERIC · Square Edge PC/AC"         },
            { label: "Material",          value: "Poly Methyl Methacrylate with UV filter"                },
            { label: "Haptic Design",     value: "PC: 'C' with Step Vault · AC: 'S' with Step Vault"      },
            { label: "Optic Body Diameter",value: "6.00 mm",                                 accent: true },
            { label: "Overall Diameter",  value: "12.00 – 13.50 mm",                         accent: true },
            { label: "Refractive Index",  value: "1.490"                                                  },
            { label: "PC Available Powers", value: "+10.0 D to +35.0 D in 0.5 D Steps"                   },
            { label: "AC Available Powers", value: "-10.0 D to +40.0 D · +10.0 D to +30.0 D (0.5 D) · -10.0 to +9.0 D & +31.0 to +40.0 D (1.0 D)" },
            { label: "A-Constant",        value: "118.4"                                                  },
            { label: "Sterilization",     value: "Ethylene Oxide"                                         },
          ],
        },
        {
          id: "NPC550AS", label: "NPC 550 AS",
          lensImg: "../Multimedia/nanoPlusPmma.png",
          specs: [
            { label: "Model",             value: "NPC 550 AS",                               accent: true },
            { label: "Lens Type",         value: "Single Piece PMMA ASPHERIC · Square Edge PC/AC"         },
            { label: "Material",          value: "Poly Methyl Methacrylate with UV filter"                },
            { label: "Haptic Design",     value: "PC: 'C' with Step Vault · AC: 'S' with Step Vault"      },
            { label: "Optic Body Diameter",value: "5.50 mm",                                 accent: true },
            { label: "Overall Diameter",  value: "12.00 – 13.50 mm",                         accent: true },
            { label: "Refractive Index",  value: "1.490"                                                  },
            { label: "PC Available Powers", value: "+10.0 D to +35.0 D in 0.5 D Steps"                   },
            { label: "AC Available Powers", value: "-10.0 D to +40.0 D · +10.0 D to +30.0 D (0.5 D) · -10.0 to +9.0 D & +31.0 to +40.0 D (1.0 D)" },
            { label: "A-Constant",        value: "118.4"                                                  },
            { label: "Sterilization",     value: "Ethylene Oxide"                                         },
          ],
        },
      ],
    },

    // ── TAB 2: Nano Plus Y (Yellow Aspheric) ──────────────────────────
    {
      id:    "nanoPlusY",
      name:  "Nano Plus Y",
      type:  "Yellow · Blue Light Blocker",
      yellow: true,
      tag:   "Yellow Aspheric · Blue Light Blocker",
      title: "Nano Plus Y",
      subtitle: "360° Square Edge Yellow PMMA Single Piece Posterior Chamber Intraocular Lens",
      desc:  "The Nano Plus Y features the same proven Nano Plus aspheric 360° square-edge platform with a yellow chromophore for blue-light filtering — providing additional retinal protection alongside UV filtering.",
      lensImg: "../Multimedia/nanoPlusYellowPmma.png",
      highlights: [
        { icon: "fa-circle-dot",       text: "Aspheric optic"          },
        { icon: "fa-border-all",       text: "360° Square edge"        },
        { icon: "fa-sun",              text: "UV + Blue light filter"  },
        { icon: "fa-link",             text: "C/S Step vault haptics"  },
        { icon: "fa-ruler",            text: "5.0 – 6.5 mm optic"      },
        { icon: "fa-flag",             text: "UK medical grade"        },
      ],
      variants: [
        {
          id: "NPC500ASY", label: "NPC 500 ASY",
          lensImg: "../Multimedia/nanoPlusYellowPmma.png",
          specs: [
            { label: "Model",             value: "NPC 500 ASY",                              accent: true },
            { label: "Lens Type",         value: "Single Piece Yellow PMMA ASPHERIC · Square Edge PC/AC" },
            { label: "Material",          value: "Poly Methyl Methacrylate with UV filter"               },
            { label: "Haptic Design",     value: "PC: 'C' with Step Vault · AC: 'S' with Step Vault"     },
            { label: "Optic Body Diameter",value: "5.00 mm",                                 accent: true },
            { label: "Overall Diameter",  value: "12.00 – 13.50 mm",                         accent: true },
            { label: "Refractive Index",  value: "1.490"                                                  },
            { label: "PC Available Powers", value: "+10.0 D to +35.0 D in 0.5 D Steps"                  },
            { label: "AC Available Powers", value: "-10.0 D to +40.0 D · +10.0 D to +30.0 D (0.5 D) · -10.0 to +9.0 D & +31.0 to +40.0 D (1.0 D)" },
            { label: "A-Constant",        value: "118.4"                                                  },
            { label: "Sterilization",     value: "Ethylene Oxide"                                         },
          ],
        },
        {
          id: "NPC600ASY", label: "NPC 600 ASY",
          lensImg: "../Multimedia/nanoPlusYellowPmma.png",
          specs: [
            { label: "Model",             value: "NPC 600 ASY",                              accent: true },
            { label: "Lens Type",         value: "Single Piece Yellow PMMA ASPHERIC · Square Edge PC/AC" },
            { label: "Material",          value: "Poly Methyl Methacrylate with UV filter"               },
            { label: "Haptic Design",     value: "PC: 'C' with Step Vault · AC: 'S' with Step Vault"     },
            { label: "Optic Body Diameter",value: "6.00 mm",                                 accent: true },
            { label: "Overall Diameter",  value: "12.00 – 13.50 mm",                         accent: true },
            { label: "Refractive Index",  value: "1.490"                                                  },
            { label: "PC Available Powers", value: "+10.0 D to +35.0 D in 0.5 D Steps"                  },
            { label: "AC Available Powers", value: "-10.0 D to +40.0 D · +10.0 D to +30.0 D (0.5 D) · -10.0 to +9.0 D & +31.0 to +40.0 D (1.0 D)" },
            { label: "A-Constant",        value: "118.4"                                                  },
            { label: "Sterilization",     value: "Ethylene Oxide"                                         },
          ],
        },
      ],
    },

    // ── TAB 3: Nano IOL (Spheric PC/AC) ───────────────────────────────
    {
      id:    "nanoIOL",
      name:  "Nano IOL",
      type:  "PC / AC · Single Piece",
      tag:   "Posterior · Anterior Chamber · PMMA",
      title: "Nano IOL",
      subtitle: "PMMA Posterior / Anterior Chamber Single Piece Intraocular Lens",
      desc:  "The Nano IOL is a versatile single-piece PMMA IOL available in four models covering posterior chamber C-loop, anterior chamber S-loop, and special fixation configurations.",
      lensImg: "../Multimedia/nanoIOL1.png",
      highlights: [
        { icon: "fa-circle-dot",       text: "Spheric optic"           },
        { icon: "fa-eye",              text: "PC & AC variants"        },
        { icon: "fa-link",             text: "C-loop & S-loop haptics" },
        { icon: "fa-ruler",            text: "4.25 – 6.5 mm optic"     },
        { icon: "fa-droplet",          text: "UV + Blue light filter"  },
        { icon: "fa-flag",             text: "UK medical grade"        },
      ],
      variants: [
        {
          id: "NPC600", label: "NPC 600",
          lensImg: "../Multimedia/nanoIOL1.png",
          specs: [
            { label: "Model",             value: "NPC 600",                                  accent: true },
            { label: "Lens Type",         value: "Single Piece PMMA ASPHERIC Posterior Chamber"            },
            { label: "Material",          value: "Poly Methyl Methacrylate · UV + Blue Light Filter (UVA)" },
            { label: "Haptic Design",     value: "PC: 'C' with Step Vault"                                 },
            { label: "Optic Body Diameter",value: "6.00 mm",                                 accent: true },
            { label: "Overall Diameter",  value: "12.50 mm",                                 accent: true },
            { label: "Available Powers",  value: "+10.0 D to +40.0 D · +10.0 to +30.0 D (0.5 D) · +10.0 to +9.0 D (1.0 D) · +31.0 to +40.0 D (1.0 D)" },
            { label: "A-Constant",        value: "118.2 (OAL 12.50 mm) · 118.4 (OAL 13.00 mm)"           },
            { label: "Sterilization",     value: "Ethylene Oxide"                                          },
          ],
        },
        {
          id: "NPC550", label: "NPC 550",
          lensImg: "../Multimedia/nanoIOL2.png",
          specs: [
            { label: "Model",             value: "NPC 550",                                  accent: true },
            { label: "Lens Type",         value: "Single Piece PMMA ASPHERIC Posterior Chamber"            },
            { label: "Material",          value: "Poly Methyl Methacrylate · UV + Blue Light Filter (UVA)" },
            { label: "Haptic Design",     value: "PC: 'C' with Step Vault"                                 },
            { label: "Optic Body Diameter",value: "5.50 mm",                                 accent: true },
            { label: "Overall Diameter",  value: "12.50 mm",                                 accent: true },
            { label: "Available Powers",  value: "+10.0 D to +40.0 D · +10.0 to +30.0 D (0.5 D) · +10.0 to +9.0 D (1.0 D) · +31.0 to +40.0 D (1.0 D)" },
            { label: "A-Constant",        value: "118.2 (OAL 12.50 mm) · 118.4 (OAL 13.00 mm)"           },
            { label: "Sterilization",     value: "Ethylene Oxide"                                          },
          ],
        },
        {
          id: "NPA603", label: "NPA 603",
          lensImg: "../Multimedia/nanoIOL3.png",
          specs: [
            { label: "Model",             value: "NPA 603",                                  accent: true },
            { label: "Lens Type",         value: "Single Piece PMMA Anterior Chamber"                     },
            { label: "Material",          value: "Poly Methyl Methacrylate · UV + Blue Light Filter (UVA)" },
            { label: "Haptic Design",     value: "AC: 'S' with Step Vault"                                 },
            { label: "Optic Body Diameter",value: "6.00 mm",                                 accent: true },
            { label: "Overall Diameter",  value: "12.50 – 13.50 mm",                         accent: true },
            { label: "Available Powers",  value: "+10.0 D to +40.0 D (1.0 D steps)"                       },
            { label: "A-Constant",        value: "115.0"                                                   },
            { label: "Sterilization",     value: "Ethylene Oxide"                                          },
          ],
        },
        {
          id: "NSF651", label: "NSF 651",
          lensImg: "../Multimedia/nanoIOL4.png",
          specs: [
            { label: "Model",             value: "NSF 651",                                  accent: true },
            { label: "Lens Type",         value: "Single Piece PMMA Special Fixation"                     },
            { label: "Material",          value: "Poly Methyl Methacrylate · UV + Blue Light Filter (UVA)" },
            { label: "Haptic Design",     value: "Modified for special fixation"                           },
            { label: "Optic Body Diameter",value: "6.50 mm",                                 accent: true },
            { label: "Overall Diameter",  value: "7.25 mm",                                  accent: true },
            { label: "Available Powers",  value: "+10.0 D to +40.0 D (1.0 D steps)"                       },
            { label: "A-Constant",        value: "118.2"                                                   },
            { label: "Sterilization",     value: "Ethylene Oxide"                                          },
          ],
        },
      ],
    },

    // ── TAB 4: Nano Iris (Iris Claw) ──────────────────────────────────
    {
      id:    "nanoIris",
      name:  "Nano Iris",
      type:  "Iris Claw",
      tag:   "Iris Claw · Anterior Chamber",
      title: "Nano Iris",
      subtitle: "Single Piece PMMA Iris Claw Intraocular Lens",
      desc:  "The Nano Iris is a single-piece PMMA iris claw IOL for aphakic correction. Enclavated to the mid-peripheral iris stroma, it provides stable fixation without capsular support — ideal for secondary implantation in aphakic eyes.",
      lensImg: "../Multimedia/nanoIRISPmma.png",
      highlights: [
        { icon: "fa-eye",              text: "Iris claw fixation"      },
        { icon: "fa-circle",           text: "Anterior chamber"        },
        { icon: "fa-ruler",            text: "4.25 – 5.50 mm optic"    },
        { icon: "fa-droplet",          text: "UV + Blue light filter"  },
        { icon: "fa-shield-halved",    text: "Secondary implantation"  },
        { icon: "fa-flag",             text: "UK medical grade"        },
      ],
      variants: [
        {
          id: "NIRS4272H", label: "NIRS 4272H",
          lensImg: "../Multimedia/nanoIRISPmma.png",
          specs: [
            { label: "Model",             value: "NIRS 4272H",                               accent: true },
            { label: "Lens Type",         value: "Single Piece PMMA Posterior Chamber · Iris Claw"         },
            { label: "Material",          value: "Poly Methyl Methacrylate · UV + Blue Light Filter (UVA)" },
            { label: "Haptic Design",     value: "Spherical"                                               },
            { label: "Optic Diameter",    value: "4.25 mm",                                  accent: true },
            { label: "Overall Diameter",  value: "7.25 mm",                                  accent: true },
            { label: "Available Powers",  value: "-5.0 D to +25.0 D (0.5 D steps) · +2.0 D to +30.0 D (1.0 D) · +14.5 D to +24.5 D (0.5 D)" },
            { label: "A-Constant",        value: "115.0"                                                   },
          ],
        },
        {
          id: "NIRS5585H", label: "NIRS 5585H",
          lensImg: "../Multimedia/nanoIRIS2Pmma.png",
          specs: [
            { label: "Model",             value: "NIRS 5585H",                               accent: true },
            { label: "Lens Type",         value: "Single Piece PMMA Posterior Chamber · Iris Claw"         },
            { label: "Material",          value: "Poly Methyl Methacrylate · UV + Blue Light Filter (UVA)" },
            { label: "Haptic Design",     value: "Spherical"                                               },
            { label: "Optic Diameter",    value: "5.50 mm",                                  accent: true },
            { label: "Overall Diameter",  value: "8.00 mm",                                  accent: true },
            { label: "Available Powers",  value: "-5.0 D to +25.0 D (0.5 D steps) · +2.0 D to +30.0 D (1.0 D) · +14.5 D to +24.5 D (0.5 D)" },
            { label: "A-Constant",        value: "115.0"                                                   },
          ],
        },
        {
          id: "NIRS5085H", label: "NIRS 5085H",
          lensImg: "../Multimedia/nanoIRIS3Pmma.png",
          specs: [
            { label: "Model",             value: "NIRS 5085H",                               accent: true },
            { label: "Lens Type",         value: "Single Piece PMMA Posterior Chamber · Iris Claw"         },
            { label: "Material",          value: "Poly Methyl Methacrylate · UV + Blue Light Filter (UVA)" },
            { label: "Haptic Design",     value: "Spherical"                                               },
            { label: "Optic Diameter",    value: "5.00 mm",                                  accent: true },
            { label: "Overall Diameter",  value: "8.50 mm",                                  accent: true },
            { label: "Available Powers",  value: "-5.0 D to +25.0 D (0.5 D steps) · +2.0 D to +30.0 D (1.0 D) · +14.5 D to +24.5 D (0.5 D)" },
            { label: "A-Constant",        value: "115.0"                                                   },
          ],
        },
      ],
    },

    // ── TAB 5: Nano Ring (Capsular Tension Ring) ───────────────────────
    {
      id:    "nanoRing",
      name:  "Nano Ring",
      type:  "Capsular Tension Ring",
      tag:   "PMMA Capsular Tension Ring",
      title: "Nano Ring",
      subtitle: "PMMA Capsular Tension Ring for Zonular Support",
      desc:  "The Nano Ring is a PMMA open-loop capsular tension ring used to stabilise the capsular bag during cataract surgery when zonular weakness is present. Available in simple (NCR) and complex step-vault (NCC) designs for left, right, or bilateral step vault. TYPE-10 is a modified ring with fixation loops.",
      lensImg: "../Multimedia/nanoRing.png",
      highlights: [
        { icon: "fa-ring",             text: "Open-loop CTR"           },
        { icon: "fa-circle-notch",     text: "Capsular support"        },
        { icon: "fa-ruler",            text: "9 – 14 mm diameter"      },
        { icon: "fa-shield-halved",    text: "Zonular protection"      },
        { icon: "fa-arrows-left-right",text: "Left / Right / Both SV" },
        { icon: "fa-flag",             text: "UK medical grade"        },
      ],
      variants: [
        {
          id: "NCR1109", label: "NCR 1109 / 1210",
          lensImg: "../Multimedia/nanoRing.png",
          specs: [
            { label: "Models",            value: "NCR 1109 · NCR 1210",                      accent: true },
            { label: "Type",              value: "Simple open-loop CTR"                                    },
            { label: "Outer Diameter",    value: "11.00 mm / 12.00 mm",                      accent: true },
            { label: "Inner Diameter",    value: "9.00 mm / 10.00 mm",                       accent: true },
            { label: "Material",          value: "Poly Methyl Methacrylate"                               },
            { label: "Step Vault",        value: "None"                                                    },
          ],
        },
        {
          id: "NCR1311", label: "NCR 1311 / 1412",
          lensImg: "../Multimedia/nanoRing2.png",
          specs: [
            { label: "Models",            value: "NCR 1311 · NCR 1412",                      accent: true },
            { label: "Type",              value: "Simple open-loop CTR"                                    },
            { label: "Outer Diameter",    value: "13.00 mm / 14.00 mm",                      accent: true },
            { label: "Inner Diameter",    value: "11.00 mm / 12.00 mm",                      accent: true },
            { label: "Material",          value: "Poly Methyl Methacrylate"                               },
            { label: "Step Vault",        value: "None"                                                    },
          ],
        },
        {
          id: "NCC1210L", label: "NCC Left SV",
          lensImg: "../Multimedia/nanoRing3.png",
          specs: [
            { label: "Models",            value: "NCC 1210L · NCC 1311L",                    accent: true },
            { label: "Type",              value: "Complex CTR · Left side step vault"                      },
            { label: "Outer Diameter",    value: "12.00 mm / 13.00 mm",                      accent: true },
            { label: "Inner Diameter",    value: "10.00 mm / 11.00 mm",                      accent: true },
            { label: "Material",          value: "Poly Methyl Methacrylate"                               },
            { label: "Step Vault",        value: "Left side"                                               },
          ],
        },
        {
          id: "NCC1210R", label: "NCC Right SV",
          lensImg: "../Multimedia/nanoRing4.png",
          specs: [
            { label: "Models",            value: "NCC 1210R · NCC 1311R",                    accent: true },
            { label: "Type",              value: "Complex CTR · Right side step vault"                     },
            { label: "Outer Diameter",    value: "12.00 mm / 13.00 mm",                      accent: true },
            { label: "Inner Diameter",    value: "10.00 mm / 11.00 mm",                      accent: true },
            { label: "Material",          value: "Poly Methyl Methacrylate"                               },
            { label: "Step Vault",        value: "Right side"                                              },
          ],
        },
        {
          id: "NCC1210LR", label: "NCC Both SV",
          lensImg: "../Multimedia/nanoRing5.png",
          specs: [
            { label: "Models",            value: "NCC 1210LR · NCC 1311LR",                  accent: true },
            { label: "Type",              value: "Complex CTR · Both sides step vault"                     },
            { label: "Outer Diameter",    value: "12.00 mm / 13.00 mm",                      accent: true },
            { label: "Inner Diameter",    value: "10.00 mm / 11.00 mm",                      accent: true },
            { label: "Material",          value: "Poly Methyl Methacrylate"                               },
            { label: "Step Vault",        value: "Both sides"                                              },
          ],
        },
        {
          id: "TYPE10", label: "TYPE-10",
          lensImg: "../Multimedia/nanoRing6.png",
          specs: [
            { label: "Model",             value: "TYPE-10",                                  accent: true },
            { label: "Type",              value: "Modified CTR with fixation loops"                        },
            { label: "Material",          value: "Poly Methyl Methacrylate"                               },
            { label: "Indication",        value: "Advanced zonular dialysis / Subluxation"                 },
            { label: "Fixation",          value: "Scleral suture eyelets"                                  },
          ],
        },
      ],
    },

    // ── TAB 6: Nano SQD ────────────────────────────────────────────────
    {
      id:    "nanoSQD",
      name:  "Nano SQD",
      type:  "360° Square Edge",
      tag:   "360° Square Edge · PC PMMA",
      title: "Nano SQD",
      subtitle: "360° Square Edge PMMA Single Piece Posterior Chamber Intraocular Lens",
      desc:  "The Nano SQD is a 360° square-edge PMMA single-piece IOL with modified C step-vault haptics. Available in three optic sizes with equiconvex design — the NPC 600 SQ includes 2 dialing holes for surgical convenience.",
      lensImg: "../Multimedia/nanoSQDPmma.png",
      highlights: [
        { icon: "fa-border-all",       text: "360° Square edge"        },
        { icon: "fa-circle-dot",       text: "Equiconvex optic"        },
        { icon: "fa-link",             text: "Mod. C step vault"       },
        { icon: "fa-ruler",            text: "5.25 – 6.00 mm optic"    },
        { icon: "fa-circle-info",      text: "Dialing holes (600 SQ)"  },
        { icon: "fa-flag",             text: "UK medical grade"        },
      ],
      variants: [
        {
          id: "NPC525SQ", label: "NPC 525 SQ",
          lensImg: "../Multimedia/nanoSQDPmma.png",
          specs: [
            { label: "Model",             value: "NPC 525 SQ",                               accent: true },
            { label: "Optic Design",      value: "Equiconvex · 360° Square Edge"                          },
            { label: "Optic Size",        value: "5.25 mm",                                  accent: true },
            { label: "Overall Length",    value: "12.50 mm",                                 accent: true },
            { label: "Haptic Design",     value: "Mod. C step vault"                                      },
            { label: "Dialing Holes",     value: "None"                                                   },
            { label: "A-Constant",        value: "118.4"                                                  },
            { label: "AC Depth",          value: "5.0 mm"                                                 },
            { label: "Material",          value: "Poly Methyl Methacrylate"                               },
          ],
        },
        {
          id: "NPC550SQ", label: "NPC 550 SQ",
          lensImg: "../Multimedia/nanoSQDPmma.png",
          specs: [
            { label: "Model",             value: "NPC 550 SQ",                               accent: true },
            { label: "Optic Design",      value: "Equiconvex · 360° Square Edge"                          },
            { label: "Optic Size",        value: "5.50 mm",                                  accent: true },
            { label: "Overall Length",    value: "12.50 mm",                                 accent: true },
            { label: "Haptic Design",     value: "Mod. C step vault"                                      },
            { label: "Dialing Holes",     value: "None"                                                   },
            { label: "A-Constant",        value: "118.4"                                                  },
            { label: "AC Depth",          value: "5.0 mm"                                                 },
            { label: "Material",          value: "Poly Methyl Methacrylate"                               },
          ],
        },
        {
          id: "NPC600SQ", label: "NPC 600 SQ",
          lensImg: "../Multimedia/nanoSQDPmma2.png",
          specs: [
            { label: "Model",             value: "NPC 600 SQ",                               accent: true },
            { label: "Optic Design",      value: "Equiconvex · 360° Square Edge"                          },
            { label: "Optic Size",        value: "6.00 mm",                                  accent: true },
            { label: "Overall Length",    value: "12.50 mm",                                 accent: true },
            { label: "Haptic Design",     value: "Mod. C step vault"                                      },
            { label: "Dialing Holes",     value: "2",                                        accent: true },
            { label: "A-Constant",        value: "118.4"                                                  },
            { label: "AC Depth",          value: "5.0 mm"                                                 },
            { label: "Material",          value: "Poly Methyl Methacrylate"                               },
          ],
        },
      ],
    },

  ]; // end PMMA_TABS

  // ── HERO ──────────────────────────────────────────────────────────────
  qs("heroEyebrow") && (qs("heroEyebrow").innerHTML = '<span class="pulse" style="background:var(--neu-pmma-c);"></span>UK Medical Grade · Rigid PMMA');
  qs("page-h1")     && (qs("page-h1").innerHTML     = "PMMA<br><em>IOL Range</em>");
  qs("heroDesc")    && (qs("heroDesc").textContent   = "World Vision PMMA IOLs are machined from UK medical-grade Polymethyl Methacrylate. Six product lines covering posterior chamber, anterior chamber, iris claw, capsular tension rings, and 360° square-edge designs.");
  qs("heroBtns")    && (qs("heroBtns").innerHTML     = `
    <a href="#models" class="hero-btn-iol-primary" style="background:linear-gradient(135deg,#8a5a10,#b87820);">
      <i class="fa-solid fa-grid-2" style="font-size:12px;"></i> View Models
    </a>
    <a href="../Pages/iol-page.html" class="hero-btn-iol-ghost">
      <i class="fa-solid fa-arrow-left" style="font-size:11px;"></i> All IOLs
    </a>`);

  
    function updatePmmaHero(tabId) {
      const data = PMMA_TABS.find(t => t.id === tabId);
      if (!data) return;

      const eyebrow = qs("heroEyebrow");
      if (eyebrow) {
        eyebrow.innerHTML = `<span class="pulse" style="background:var(--neu-pmma-c);"></span>${data.tag}`;
      }

      const h1 = qs("page-h1");
      if (h1) {
        h1.innerHTML = `${data.title}<br><em>PMMA IOL</em>`;
      }

      const desc = qs("heroDesc");
      if (desc) {
        desc.textContent = data.desc;
      }

      const lensWrap = qs("heroLensWrap");
      if (lensWrap) {
        lensWrap.innerHTML = `
          <img src="${data.lensImg}" alt="${data.title}"
            style="width:240px;height:240px;object-fit:contain;"
            onerror="this.style.opacity='0'"/>
        `;
      }
    }

  // ── TAB BAR ───────────────────────────────────────────────────────────
  const pmmaTabBar = qs("pmmaTabBar");
  if (pmmaTabBar) {
    pmmaTabBar.innerHTML = PMMA_TABS.map((t, i) => `
      <button class="model-tab${i === 0 ? " active" : ""}${t.yellow ? " model-tab-yellow" : ""}"
        role="tab" aria-selected="${i === 0}"
        aria-controls="panel-${t.id}" id="tab-${t.id}"
        data-model="${t.id}" data-yellow="${!!t.yellow}" type="button">
        <div class="model-tab-name">${t.name}</div>
        <div class="model-tab-type">${t.type}</div>
        <div class="model-tab-dot"></div>
      </button>`).join("");
  }

  // ── BUILD EACH PANEL ──────────────────────────────────────────────────
  function buildPmmaPanel(data) {
    const panelEl = qs(`panel-${data.id}`);
    if (!panelEl) return;

    const isYellow = !!data.yellow;
    const isRing   = data.id === "nanoRing";
    const isIris   = data.id === "nanoIris";
    const accentC  = isYellow ? "var(--neu-pmma-c)" : "var(--neu-pmma-c)";

    const badges    = data.variants.map(v => `<span class="variant-badge">${v.label}</span>`).join("");
    const chips     = data.highlights.map(h => `<div class="highlight-chip"><i class="fa-solid ${h.icon}"></i><span class="highlight-chip-text">${h.text}</span></div>`).join("");
    const modelBtns = data.variants.map((v, i) => `
      <button class="spec-model-btn${i === 0 ? " active" : ""}"
        data-rows="${v.id}"
        data-lens="${v.lensImg || data.lensImg}"
        type="button">${v.label}</button>`).join("");

    const specTables = data.variants.map((v, i) => {
      const rows = v.specs.map(s => `
        <div class="spec-row">
          <span class="spec-row-label">${s.label}</span>
          <span class="spec-row-val${s.accent ? " accent" : ""}"
            style="${s.accent ? `color:${accentC};font-weight:600;` : ""}">${s.value}</span>
        </div>`).join("");
      return `<div class="spec-rows" id="${v.id}"${i > 0 ? ' style="display:none;"' : ""}>${rows}</div>`;
    }).join("");

    const noAConst = isRing || isIris;
    const aBlock = noAConst
      ? `<div class="a-const-block" style="border:0.5px solid rgba(138,90,16,0.15);">
          <div class="a-const-label"><i class="fa-solid fa-circle-info" style="margin-right:5px;"></i>
            ${isRing ? "Capsular tension rings do not use A-constants for biometry." : "A-Constant: 115.0 — refer to model spec above."}
          </div>
        </div>`
      : "";

    const dlStyle = isYellow ? 'style="background:linear-gradient(135deg,#8a5a10,#b87820);"' : 'style="background:linear-gradient(135deg,#8a5a10,#b87820);"';
    const lensStyle = isYellow ? "card-lens-bg" : "card-lens-bg";

    panelEl.innerHTML = `
      <div class="neu-card">
        <div class="card-top">
          <span class="card-tag" style="background:rgba(138,90,16,0.1);color:var(--neu-pmma-c);">${data.tag}</span>
          <div class="card-title">${data.title}</div>
          <div class="card-subtitle">${data.subtitle}</div>
        </div>
        <div class="card-lens-area">
          <div class="card-lens-bg" style="background:radial-gradient(circle at 40% 40%, rgba(138,90,16,0.08), transparent 70%);"></div>
          <div class="card-lens-svg" id="${data.id}ModelLens">
            <img src="${data.lensImg}" alt="${data.title}" style="width:140px;height:140px;object-fit:contain;" onerror="this.style.opacity='0'"/>
          </div>
        </div>
        <div class="variant-badges">${badges}</div>
        <div class="card-desc">${data.desc}</div>
        <div class="card-highlights">${chips}</div>
      </div>
      <div class="spec-card">
        <div class="spec-card-head">
          <div class="spec-head-icon" style="background:rgba(138,90,16,0.1);color:var(--neu-pmma-c);">
            <i class="fa-solid fa-table-list"></i>
          </div>
          <div>
            <div class="spec-head-title">Technical Specifications</div>
            <div class="spec-head-sub">${data.title} — ${data.tag}</div>
          </div>
        </div>
        <p class="flip-hint-btn">
          <i class="fa-regular fa-hand-pointer" style="margin-top:0.1rem;"></i>
          Select the model to reveal full specifications
        </p>
        <div class="spec-model-sel">${modelBtns}</div>
        ${specTables}
        ${aBlock}
        <div class="spec-download">
          <button class="dl-btn dl-btn-primary" ${dlStyle} onclick="alert('IFU download coming soon.')">
            <i class="fa-solid fa-download"></i> Download IFU
          </button>
          <button class="dl-btn dl-btn-ghost" onclick="alert('Enquiry form coming soon.')">
            <i class="fa-solid fa-envelope"></i> Enquire
          </button>
        </div>
      </div>`;
  }

  PMMA_TABS.forEach(buildPmmaPanel);
  updatePmmaHero("nanoPlus");
  updatePmmaMaterial("nanoPlus");

  // ── TAB SWITCHING ─────────────────────────────────────────────────────
  document.addEventListener("click", function(e) {
    const tab = e.target.closest(".model-tab[data-model]");
    if (!tab) return;

    const targetId = tab.dataset.model;

    document.querySelectorAll(".model-tab[data-model]").forEach(t => {
      const isThis = t === tab;
      t.classList.toggle("active", isThis);

      if (t.dataset.yellow === "true") {
        t.style.background = isThis ? "linear-gradient(135deg,#8a5a10,#b87820)" : "";
        t.style.color = isThis ? "#fff" : "";
      }

      t.setAttribute("aria-selected", isThis ? "true" : "false");
    });

    document.querySelectorAll(".model-panel").forEach(p => p.classList.remove("active"));

    const targetPanel = qs(`panel-${targetId}`);
    if (targetPanel) targetPanel.classList.add("active");

    updatePmmaHero(targetId);
    updatePmmaMaterial(targetId);
  });

  // ── MATERIAL SCIENCE ──────────────────────────────────────────────────
  const matEyebrow = qs("materialEyebrow");
  if (matEyebrow) matEyebrow.innerHTML = `<i class="fa-solid fa-flask-vial" style="font-size:10px;color:var(--neu-pmma-c);"></i> Material Science`;

  const matHeading = qs("materialHeading") || document.getElementById("material-heading");
  if (matHeading) matHeading.innerHTML = "Why <em>PMMA</em> still matters";

  const matSub = qs("materialSub");
  if (matSub) matSub.textContent = "Polymethyl Methacrylate has been the gold standard of IOL optics for over 60 years. PMMA remains the most reliable choice for ECCE, secondary implantation, iris claw fixation, and resource-limited settings worldwide.";

  const matFeatures = qs("materialFeatures");
  if (matFeatures) {
    matFeatures.innerHTML = [
      { icon: "fa-shield-halved", title: "60+ Years Proven Stability",        desc: "PMMA retains perfect optical clarity for decades in the eye. No glistening, no calcification — the benchmark all other IOL materials are measured against." },
      { icon: "fa-circle-notch",  title: "Zero Glistening Guaranteed",        desc: "As a rigid non-hydrophilic material, PMMA is completely immune to glistening and microvacuole formation that can degrade acrylic lens performance." },
      { icon: "fa-earth-asia",    title: "Cost-Effective Global Access",       desc: "PMMA IOLs deliver outstanding optical outcomes at a fraction of foldable lens cost — essential for high-volume cataract programmes across the developing world." },
      { icon: "fa-sun",           title: "UV + Blue Light Filter Built-in",   desc: "World Vision PMMA IOLs include UV-absorbing and blue-light filtering chromophores to protect the retina throughout the patient's lifetime." },
    ].map(f => `
      <div class="material-feature">
        <div class="mf-icon" style="background:rgba(138,90,16,0.1);color:var(--neu-pmma-c);">
          <i class="fa-solid ${f.icon}"></i>
        </div>
        <div><div class="mf-title">${f.title}</div><div class="mf-desc">${f.desc}</div></div>
      </div>`).join("");
  }

  const matCard = qs("materialCard");
  if (matCard) {
    matCard.innerHTML = `
      <div class="material-neu-card-label" style="color:var(--neu-pmma-c);">
        <i class="fa-solid fa-scale-balanced" style="margin-right:5px;"></i> PMMA vs Acrylic IOL
      </div>
      <div class="material-compare">
        <div class="compare-row"><span class="compare-label">Glistening</span><span class="compare-wv" style="color:var(--neu-pmma-c);">Zero (PMMA)</span></div>
        <div class="compare-row"><span class="compare-label">Acrylic (hydrophilic)</span><span class="compare-other">Possible</span></div>
        <div class="compare-row"><span class="compare-label">Long-term clarity</span><span class="compare-wv" style="color:var(--neu-pmma-c);">60+ years proven</span></div>
      </div>
      <div style="width:100%;height:1px;background:rgba(0,0,0,0.07);margin:4px 0;"></div>
      <div class="material-neu-card-label" style="color:var(--neu-pmma-c);margin-top:4px;">
        <i class="fa-solid fa-certificate" style="margin-right:5px;"></i> Certifications
      </div>
      <div class="material-compare">
        <div class="compare-row"><span class="compare-label">Biocompatibility</span><span class="compare-wv"><i class="fa-solid fa-check" style="font-size:11px;"></i> ISO 10993</span></div>
        <div class="compare-row"><span class="compare-label">UV Protection</span><span class="compare-wv"><i class="fa-solid fa-check" style="font-size:11px;"></i> Built-in</span></div>
        <div class="compare-row"><span class="compare-label">Blue Light Filter</span><span class="compare-wv"><i class="fa-solid fa-check" style="font-size:11px;"></i> Built-in</span></div>
        <div class="compare-row"><span class="compare-label">Raw Material Source</span><span class="compare-wv">🇬🇧 United Kingdom</span></div>
      </div>`;
  }

  function updatePmmaMaterial(tabId) {
    const data = PMMA_TABS.find(t => t.id === tabId);
    if (!data) return;

    const matHeading = qs("materialHeading");
    if (matHeading) {
      matHeading.innerHTML = `Why <em>${data.title}</em> matters`;
    }

    const matSub = qs("materialSub");
    if (matSub) {
      matSub.textContent = data.desc;
    }

    const matFeatures = qs("materialFeatures");
    if (matFeatures) {
      matFeatures.innerHTML = data.highlights.map(h => `
        <div class="material-feature">
          <div class="mf-icon" style="background:rgba(138,90,16,0.1);color:var(--neu-pmma-c);">
            <i class="fa-solid ${h.icon}"></i>
          </div>
          <div>
            <div class="mf-title">${h.text}</div>
            <div class="mf-desc">${data.subtitle}</div>
          </div>
        </div>
      `).join("");
    }

    const matCard = qs("materialCard");
    if (matCard) {
      matCard.innerHTML = `
        <div class="material-neu-card-label" style="color:var(--neu-pmma-c);">
          <i class="fa-solid fa-scale-balanced" style="margin-right:5px;"></i> Product Profile
        </div>
        <div class="material-compare">
          <div class="compare-row">
            <span class="compare-label">Product Line</span>
            <span class="compare-wv" style="color:var(--neu-pmma-c);">${data.title}</span>
          </div>
          <div class="compare-row">
            <span class="compare-label">Design</span>
            <span class="compare-wv" style="color:var(--neu-pmma-c);">${data.type}</span>
          </div>
          <div class="compare-row">
            <span class="compare-label">Material</span>
            <span class="compare-wv" style="color:var(--neu-pmma-c);">PMMA</span>
          </div>
          <div class="compare-row">
            <span class="compare-label">Available Models</span>
            <span class="compare-wv" style="color:var(--neu-pmma-c);">${data.variants.length}</span>
          </div>
        </div>
      `;
    }
  }

  // ── TRUST ─────────────────────────────────────────────────────────────
  const pmmaTrust = qs("trustBar");
  if (pmmaTrust) pmmaTrust.innerHTML = [
    { path: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`, title: "ISO Certified", desc: "All World Vision PMMA IOLs are manufactured and tested to ISO 10993 biocompatibility standards." },
    { path: `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`, title: "UK Medical Grade PMMA", desc: "Polymer sourced from certified UK medical-grade suppliers — ensuring the highest standard of PMMA purity and optical quality." },
    { path: `<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>`, title: "Zero Glistening", desc: "The rigid PMMA matrix completely prevents microvacuole formation — guaranteeing long-term optical clarity for the lifetime of the implant." },
  ].map(t => `
    <div class="trust-card">
      <div class="trust-icon" style="background:rgba(138,90,16,0.1);">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--neu-pmma-c)" stroke-width="2" stroke-linecap="round">${t.path}</svg>
      </div>
      <div><h3>${t.title}</h3><p>${t.desc}</p></div>
    </div>`).join("");

  // ── IFU ───────────────────────────────────────────────────────────────
  const pmmaIfuHeader = qs("ifuHeader");
  if (pmmaIfuHeader) pmmaIfuHeader.innerHTML = `
    <div class="ifu-icon-wrap" style="background:linear-gradient(135deg,#8a5a10,#b87820);">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    </div>
    <div>
      <div class="ifu-title">Instructions for Use</div>
      <div class="ifu-sub">Download IFU for all World Vision PMMA IOL product lines</div>
    </div>`;

  const pmmaIfuGrid = qs("ifuGrid");
  if (pmmaIfuGrid) pmmaIfuGrid.innerHTML = [
    { label: "IFU — Nano Plus",     sub: "Aspheric PC/AC · NPC AS series"   },
    { label: "IFU — Nano Plus Y",   sub: "Yellow Aspheric · NPC ASY series" },
    { label: "IFU — Nano IOL",      sub: "PC/AC · NPC / NPA / NSF series"   },
    { label: "IFU — Nano Iris",     sub: "Iris Claw · NIRS series"          },
    { label: "IFU — Nano Ring",     sub: "Capsular Tension Ring · NCR/NCC"  },
    { label: "IFU — Nano SQD",      sub: "360° Square Edge · NPC SQ series" },
  ].map(l => `
    <a href="#" class="ifu-link">
      <div class="ifu-link-icon" style="background:rgba(138,90,16,0.1);">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--neu-pmma-c)" stroke-width="2" stroke-linecap="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="12" y1="18" x2="12" y2="12"/>
          <polyline points="9 15 12 18 15 15"/>
        </svg>
      </div>
      <div class="ifu-link-text"><strong>${l.label}</strong><span>${l.sub}</span></div>
    </a>`).join("");

  const waF = qs("waFloat"); if (waF) waF.href = PAGE.company.whatsapp;
  const copy = qs("footerCopyright"); if (copy) copy.textContent = PAGE.company.copyright;
}