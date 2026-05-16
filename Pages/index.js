// Site Data

const SITE = {
  company: {
    name:     "World Vision",
    subtitle: "Ophthalmic Pvt. Ltd.",
    logo:     "../Multimedia/WVO_Logo1.png",
    email:    "info@worldvisionophthalmic.com",
    phone:    "+91 98765 43210",
    address:  "Chennai, Tamil Nadu, India",
    hours:    "Mon–Sat, 9AM – 6PM IST",
    whatsapp: "https://chat.whatsapp.com/Dbeem4cDrbHKFzvaBbOIhv",
  },

  nav: {
    links: [
      { label: "Home",       href: "../Pages/index.html",     page: "index"     },
      { label: "Gallery",    href: "../Pages/gallery.html",   page: "gallery"   },
      { label: "Blog",       href: "#blog",                   page: "blog"      },
      { label: "About Us",   href: "#aboutus",                page: "about"     },
      { label: "Contact Us", href: "../Pages/contactUs.html", page: "contactUs" },
    ],
    cta: {
      label: "Toric Calculator",
      href:  "../Pages/toricCalculator.html",
      icon:  "fa-calculator",
    },
    products: {
      label: "Our Products",
      // Pages that belong under the Products dropdown — used for active-nav detection
      pages: ["iol-page","hydrophobicIol","hydrophilicIol","pmmaIol","premiumIol","pharmaProducts","microSurgicalBlades"],
      children: [
        {
          label: "Intraocular Lens",
          href:  "../Pages/iol-page.html",
          icon:  "fa-eye",
          color: "var(--neu-accent2)",
          children: [
            { label: "Hydrophobic IOL",  href: "../Pages/hydrophobicIol.html", icon: "fa-shield-halved",      color: "text-blue-400"  },
            { label: "Hydrophilic IOL",  href: "#",                            icon: "fa-shield-halved",      color: "text-teal-400"  },
            { label: "PMMA IOL",         href: "#",                            icon: "fa-circle-half-stroke", color: "text-amber-400" },
          ],
        },
        { label: "Surgical Instruments", href: "#", icon: "fa-syringe",      color: "var(--neu-accent2)" },
        { label: "Veterinary IOL",       href: "#", icon: "fa-paw",          color: "var(--neu-accent2)" },
      ],
    },
    mobile: {
      // VIEW 1 — main links
      main: [
        { label: "Home",             href: "../Pages/index.html",           page: "index"           },
        { label: "Toric Calculator", href: "../Pages/toricCalculator.html", page: "toricCalculator" },
        { label: "Gallery",          href: "../Pages/gallery.html",         page: "gallery"         },
        { label: "About",            href: "#about",                        page: "about"           },
        { label: "Contact",          href: "../Pages/contactUs.html",       page: "contactUs"       },
      ],
      // VIEW 2 — products sub-menu
      products: {
        back:  { label: "Our Products" },
        iol:   { label: "Intraocular Lens", icon: "fa-eye", color: "text-[#0055a5]" },
        children: [
          { label: "Premium IOL",           href: "#", icon: "fa-star-of-life", color: "text-[#0055a5]" },
          { label: "Pharma Products",       href: "#", icon: "fa-capsules",     color: "text-[#0055a5]" },
          { label: "Micro Surgical Blades", href: "#", icon: "fa-cut",          color: "text-[#0055a5]" },
        ],
      },
      // VIEW 3 — IOL sub-menu
      iol: {
        back:  { label: "Intraocular Lens" },
        children: [
          { label: "Hydrophobic IOL", href: "../Pages/hydrophobicIol.html", icon: "fa-shield-halved",      color: "text-[#0055a5]" },
          { label: "Hydrophilic IOL", href: "#",                            icon: "fa-shield-halved",      color: "text-teal-500"  },
          { label: "PMMA IOL",        href: "#",                            icon: "fa-circle-half-stroke", color: "text-amber-500" },
        ],
      },
    },
  },

  hero: [
    {
      tag:   "Featured Product",
      title: "World Vision",
      em:    "Lens Pro",
      sub:   "Advanced clarity with reduced glare. Medical-grade acrylic engineered for everyday surgical precision.",
      img:   "../Multimedia/wv_hero_1.png",
      alt:   "World Vision Lens Pro",
      cta:   { label: "View Product", href: "#" },
    },
    {
      tag:   "New Arrival",
      title: "World Vision",
      em:    "Lens Plus",
      sub:   "Precision-engineered optics for superior visual accuracy. UV absorber and blue-light filtering built in.",
      img:   "../Multimedia/wv_hero_2.png",
      alt:   "World Vision Lens Plus",
      cta:   { label: "View Product", href: "#" },
    },
  ],

  stats: [
    { icon: "fa-flask-vial",     num: "22 +", label: "Lens Variants"    },
    { icon: "fa-certificate",    num: "ISO", label: "Certified Quality" },
    { icon: "fa-globe",          num: "40 +", label: "Countries Served"  },
    { icon: "fa-calendar-check", num: "15 +", label: "Years Experience"  },
  ],

  products: {
    eyebrow:   "Our Range",
    heading:   "Precision lenses for",
    headingEm: "every need",
    sub:       "Medical-grade materials sourced from the USA and Europe — engineered for every surgical requirement.",
    cards: [
      { href: "../Pages/iol-page.html", img: "../Multimedia/lense4.png",  alt: "IOL",      tag: "IOL",         title: "Intraocular Lenses",    desc: "Hydrophobic, Hydrophilic & PMMA. UV absorber, blue-light filter, zero glistening." },
      { href: "#",                      img: "../Multimedia/lense8.png",  alt: "Surgical", tag: "Instruments", title: "Surgical Instruments",  desc: "Precision micro-surgical tools crafted for ophthalmic procedures." },
      { href: "#",                      img: "../Multimedia/lense15.png", alt: "Vet",      tag: "Veterinary",  title: "Veterinary IOL",        desc: "Same medical-grade technology, engineered specifically for animal eye surgery." },
    ],
  },

  features: {
    eyebrow:   "Why Us",
    heading:   "Built on",
    headingEm: "trust & precision",
    cards: [
      { icon: "fa-shield-halved", color: "blue",   title: "Medical Grade Materials", desc: "Raw materials imported from certified suppliers in the USA and UK — no compromise on biocompatibility."                          },
      { icon: "fa-microscope",    color: "teal",   title: "Precision Engineering",   desc: "High MTF ratings and low refractive index deliver exceptional light transmission — minimising glare post-surgery."              },
      { icon: "fa-earth-asia",    color: "violet", title: "Global Distribution",     desc: "Trusted by surgeons across 40+ countries. Our export network ensures every lens reaches you fresh and documented."             },
      { icon: "fa-award",         color: "amber",  title: "ISO Certified",           desc: "Every lens undergoes rigorous biocompatibility testing to international ISO medical device standards."                          },
    ],
  },

  manufacturing: {
    eyebrow:   "Our Facility",
    heading:   "Made with",
    headingEm: "care",
    desc:      "Our state-of-the-art facility uses precision CNC lathe technology to produce every lens to micron-level accuracy — from raw polymer to sterile packaging.",
    checklist: [
      "Clean-room ISO Class 8 environment",
      "100% individual lens inspection",
      "Gamma radiation sterilisation",
      "Full CE & ISO documentation",
    ],
    photos: [
      { src: "../Multimedia/lensemanu1.jpg", alt: "Facility 1", large: true },
      { src: "../Multimedia/lensemanu2.jpg", alt: "Facility 2" },
      { src: "../Multimedia/lensemanu3.jpg", alt: "Facility 3" },
      { src: "../Multimedia/lensemanu4.jpg", alt: "Facility 4" },
    ],
  },

  cta: {
    heading:  "Ready to work with us?",
    sub:      "Talk to our team about IOL requirements, pricing, and international shipping.",
    email:    { label: "Email Us", href: "mailto:support@worldvision.com", icon: "fa-envelope"        },
    whatsapp: { label: "WhatsApp",                                         icon: "fa-brands fa-whatsapp" },
  },

  footer: {
    tagline: "Precision-engineered ophthalmic lenses delivering clarity, comfort, and superior visual performance worldwide.",
    socials: [
      { icon: "fa-brands fa-linkedin-in", href: "#" },
      { icon: "fa-brands fa-instagram",   href: "#" },
      { icon: "fa-brands fa-whatsapp",    href: "https://chat.whatsapp.com/Dbeem4cDrbHKFzvaBbOIhv" },
    ],
    quickLinks: [
      { label: "Home",       href: "../Pages/index.html"         },
      { label: "Products",   href: "#products"                   },
      { label: "IOL Lenses", href: "../Pages/iol-page.html"      },
      { label: "Gallery",    href: "../Pages/gallery.html"        },
      { label: "About Us",   href: "#about"                      },
      { label: "Contact",    href: "#contact"                    },
      { label: "Toric Calc", href: "../Pages/toricCalculator.html"},
    ],
    copyright: "© 2026 World Vision Ophthalmic Pvt. Ltd. · All rights reserved.",
  },
};

function qs(id) {return document.getElementById(id);}
function qsa(sel) {return document.querySelectorAll(sel);}

// Active Identifer

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

function buildDesktopProductsDropdown(isActive = false){

  const p = SITE.nav.products;
  const iol = p.children[0];

  const l2 = iol.children.map(sub =>
    `<a href="${sub.href}" class="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition text-sm font-medium text-gray-700">
      <i class="fa-solid ${sub.icon} ${sub.color} w-4"></i> ${sub.label}
    </a>`
  ).join("");

  const rest = p.children.slice(1).map(item =>
    `<a href="${item.href}" class="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition text-sm font-medium text-gray-700">
      <i class="fa-solid ${item.icon} w-4" style = "color: ${item.color};"></i> ${item.label}
    </a>`
  ).join("");


  const iolActive = p.pages.includes(ACTIVE_PAGE);

  return `
  <li class="relative group/prod">
    <div class="nav-item ${isActive ? "active-nav" : ""} flex items-center gap-2 cursor-pointer select-none">
      ${p.label} <i id="productsNavChevron" class="fa-solid fa-chevron-down text-sm transition-transform duration-200 group-hover/prod:rotate-180"></i>
    </div>
    <div class="absolute left-0 top-full mt-3 w-56 rounded-2xl bg-white/90 backdrop-blur-lg border border-white/30 shadow-xl opacity-0 invisible group-hover/prod:opacity-100 group-hover/prod:visible transition-all duration-200 z-[999] overflow-visible">
      <div class="relative group/iol">
        <a href="../Pages/iol-page.html" id="iolNavBtn" class="flex items-center justify-between gap-3 px-4 py-3 hover:bg-blue-50 transition text-sm font-medium text-gray-700 cursor-pointer">
          <span class="flex items-center gap-3">
            <i class="fa-solid fa-eye text-blue-500 w-4"></i> Intraocular Lens
          </span>
          <i class="fa-solid fa-chevron-right text-xs text-gray-400"></i>
        </a>
        
        <div id="navL2Panel" class="absolute left-full top-0 ml-2 w-56 rounded-2xl bg-white/95 backdrop-blur-lg border border-white/30 shadow-xl opacity-0 invisible group-hover/iol:opacity-100 group-hover/iol:visible transition-all duration-200 z-[9999] overflow-hidden">
          ${l2}
        </div>
      </div>
      ${rest}
    </div>
  </li>`;
}

function renderDestopNav(){
  const brand = qs("navBrand");
  if(brand) {
    brand.innerHTML =`
    <img src="${SITE.company.logo}" class="h-14 w-auto" alt ="Logo" />
    <div class="flex flex-col leading-tight">
      <span class="font-semibold text-2xl tracking-wide">${SITE.company.name}</span>
      <span class="subtitle text-xs tracking-widest uppercase">${SITE.company.subtitle}</span>
    </div>`;
  }
}

const navList = qs("desktopNavLinks");
if(navList) {
  let html = "";
  SITE.nav.links.forEach(link => {
    const isActive = pageFromHref(link.href) === ACTIVE_PAGE;
    html += `<li><a href="${link.href}" class="nav-item ${isActive ? "active-nav" : ""}">${link.label}</a></li>`;
    if (link.label === "Home") html += buildDesktopProductsDropdown();
  });
  navList.innerHTML = html
}

const navCta = qs("navCta");
if(navCta) {
  navCta.href = SITE.nav.cta.href;
  navCta.innerHTML = `${SITE.nav.cta.label} <i class="fa-solid ${SITE.nav.cta.icon}"></i>`
}

// MOBILE Drawer

function mobileBackBtn(id, label) {
  return `
  <li>
    <button id="${id}" type="button"
      class="mobile-drawer-link active-nav flex items-center gap-3 text-left w-full">
      <i class="fa-solid fa-chevron-left text-sm w-9 h-9 flex items-center justify-center rounded-xl bg-white/70 border border-white/60 text-[#0055a5]"></i>
      <span class="font-semibold text-[17px] text-[#1e3a5f]">${label}</span>
    </button>
  </li>`;
}

function mobileForwardBtn(id, icon, color, label, isActive = false) {
  return `
  <li>
    <button id="${id}" type="button"
      class="w-full flex items-center justify-between mobile-drawer-link ${isActive ? "active-nav" : ""} text-left">
      <span class="flex items-center gap-2">
        <i class="fa-solid ${icon} ${color}"></i> ${label}
      </span>
      <i class="fa-solid fa-chevron-right text-sm opacity-60"></i>
    </button>
  </li>`;
}

function renderMobileNav(){
  const mob = SITE.nav.mobile;

  const mobileProductsActive = SITE.nav.products.pages.includes(ACTIVE_PAGE);

  // Brand
  const mb = qs("mobileBrand");
  if(mb){
    mb.innerHTML = `
    <img src="${SITE.company.logo}" class="h-10 w-auto" />
    <div class="flex flex-col leading-tight">
      <span class="font-semibold text-lg">${SITE.company.name}</span>
      <span class="subtitle text-xs tracking-widest uppercase">${SITE.company.subtitle}</span>
    </div>`
  }

  const mainView = qs("mobileMainView");
  if(mainView){
    const mainLinks = mob.main.map(link => {
      const isActive = pageFromHref(link.href) === ACTIVE_PAGE;
      return `<li><a href="${link.href}" class="mobile-drawer-link ${isActive ? "active-nav" : ""}">${link.label}</a></li>`
    });

    mainLinks.splice (1, 0, 
      `<li>
        <button id="mobileProductsBtn" 
          class="w-full flex items-center justify-between mobile-drawer-link ${mobileProductsActive ? "active-nav" : ""} text-left" type="button">
          <span>${SITE.nav.products.label}</span>
          <i class="fa-solid fa-chevron-right text-sm opacity-60"></i>
        </button>
      </li>`
    );
    mainView.innerHTML = mainLinks.join("");
  }
  
  const productsView = qs("mobileProductsView");
  if(productsView){
    const pd = mob.products;
    productsView.innerHTML =
      mobileBackBtn("backToMainMenu", pd.back.label) +
      mobileForwardBtn("mobileIolBtn", pd.iol.icon, pd.iol.color, pd.iol.label, ["iol-page","hydrophobicIol","hydrophilicIol","pmmaIol"].includes(ACTIVE_PAGE)) +
      pd.children.map(item => {
        const isActive = pageFromHref(item.href) === ACTIVE_PAGE;
        return `
        <li>
          <a href="${item.href}" class="mobile-drawer-link flex ${isActive ? "active-nav" : ""} items-center gap-2">
              <i class="fa-solid ${item.icon} ${item.color}"></i> ${item.label}
          </a>
        </li>`
      }).join("");
  }

  const iolView = qs("mobileIolView");
  if(iolView){
    const id = mob.iol;
    iolView.innerHTML =
      mobileBackBtn("backToProductsMenu", id.back.label) +
      id.children.map(item => {
        const isActive = pageFromHref(item.href) === ACTIVE_PAGE;
        return `
          <li>
            <a href="${item.href}" class="mobile-drawer-link ${isActive ? "active-nav" : ""} flex items-center gap-2">
              <i class="fa-solid ${item.icon} ${item.color}"></i> ${item.label}
            </a>
          </li>`;
      }).join("");  
  }
}

// Hero Slider


function renderHero() {
  const wrapper = qs("heroWrapper");
  if (!wrapper) return;
  wrapper.innerHTML = SITE.hero.map(slide => `
    <div class="swiper-slide">
      <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 pb-16">
        <div class="flex justify-center">
          <div class="hero-img-wrap">
            <img src="${slide.img}" alt="${slide.alt}" class="hero-product-img"/>
          </div>
        </div>
        <div class="hero-content">
          <span class="hero-tag">${slide.tag}</span>
          <h1 class="hero-heading">${slide.title}<br><em>${slide.em}</em></h1>
          <p class="hero-sub">${slide.sub}</p>
          <div class="flex flex-wrap gap-3 mt-8">
            <a href="${slide.cta.href}" class="hero-btn-primary">${slide.cta.label} <i class="fa-solid fa-arrow-right text-xs"></i></a>
            <a href="#products" class="hero-btn-ghost">All Products</a>
          </div>
        </div>
      </div>
    </div>`).join("");
}

function renderStats() {
  const grid = qs("statsGrid");
  if (!grid) return;
 
  grid.innerHTML = SITE.stats.map(s => {
    // Split num into numeric part + suffix (e.g. "22+" → 22, "+")
    const match   = s.num.match(/^(\d+)(.*)$/);
    const numeric = match ? parseInt(match[1]) : null;
    const suffix  = match ? match[2] : "";
 
    return `
    <div class="stat-glass">
      <div class="stat-icon-wrap"><i class="fa-solid ${s.icon}"></i></div>
      <div class="stat-num"
        data-target="${numeric !== null ? numeric : ""}"
        data-suffix="${suffix}"
        data-raw="${s.num}">
        ${s.num}
      </div>
      <div class="stat-label">${s.label}</div>
    </div>`;
  }).join("");
 
  // Animate counting when stats scroll into view
  const numEls = grid.querySelectorAll(".stat-num[data-target]");
 
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
 
      const el      = entry.target;
      const target  = parseInt(el.dataset.target);
      const suffix  = el.dataset.suffix;
      const raw     = el.dataset.raw;
 
      // No numeric part (e.g. "ISO") — just show as-is
      if (isNaN(target)) { el.textContent = raw; return; }
 
      const duration = 1800;  // ms
      const fps      = 60;
      const steps    = Math.round(duration / (1000 / fps));
      let   current  = 0;
 
      const timer = setInterval(() => {
        current++;
        // Ease out: fast start, slow finish
        const progress = current / steps;
        const eased    = 1 - Math.pow(1 - progress, 3);
        const value    = Math.round(eased * target);
 
        el.textContent = value + suffix;
 
        if (current >= steps) {
          clearInterval(timer);
          el.textContent = target + suffix; // ensure exact final value
        }
      }, 1000 / fps);
    });
  }, { threshold: 0.3 });
 
  numEls.forEach(el => observer.observe(el));
}

function renderProducts() {
  const d = SITE.products;
  const eyebrow = qs("productsEyebrow");
  const heading  = qs("productsHeading");
  const sub      = qs("productsSub");
  const grid     = qs("productsGrid");

  if (eyebrow) eyebrow.textContent = d.eyebrow;
  if (heading)  heading.innerHTML  = `${d.heading} <em>${d.headingEm}</em>`;
  if (sub)      sub.textContent    = d.sub;
  if (grid) {
    grid.innerHTML = d.cards.map(c => `
      <a href="${c.href}" class="product-card">
        <div class="product-card-img"><img src="${c.img}" alt="${c.alt}"/></div>
        <div class="product-card-body">
          <span class="product-tag">${c.tag}</span>
          <h3>${c.title}</h3>
          <p>${c.desc}</p>
          <span class="product-link">Explore <i class="fa-solid fa-arrow-right text-xs"></i></span>
        </div>
      </a>`).join("");
  }
}

function renderFeatures() {
  const d = SITE.features;
  const eyebrow = qs("featuresEyebrow");
  const heading  = qs("featuresHeading");
  const grid     = qs("featuresGrid");

  if (eyebrow) eyebrow.textContent = d.eyebrow;
  if (heading)  heading.innerHTML  = `${d.heading} <em>${d.headingEm}</em>`;
  if (grid) {
    grid.innerHTML = d.cards.map(c => `
      <div class="feature-card">
        <div class="feature-icon-wrap ${c.color}"><i class="fa-solid ${c.icon}"></i></div>
        <h3>${c.title}</h3>
        <p>${c.desc}</p>
      </div>`).join("");
  }
}

// Manufacturing

function renderManufacturing() {
  const d = SITE.manufacturing;
  const eyebrow  = qs("mfgEyebrow");
  const heading  = qs("mfgHeading");
  const desc     = qs("mfgDesc");
  const checklist= qs("mfgChecklist");
  const photos   = qs("mfgPhotos");

  if (eyebrow)   eyebrow.textContent = d.eyebrow;
  if (heading)   heading.innerHTML   = `${d.heading} <em>${d.headingEm}</em>,<br>backed by science`;
  if (desc)      desc.textContent    = d.desc;
  if (checklist) checklist.innerHTML = d.checklist.map(item =>
    `<li><i class="fa-solid fa-check"></i> ${item}</li>`).join("");
  if (photos)    photos.innerHTML    = d.photos.map(p =>
    `<img src="${p.src}" alt="${p.alt}" class="mfg-img${p.large ? " mfg-large" : ""}"/>`).join("");
}

// CTA Banner

function renderCta() {
  const d = SITE.cta;
  const heading  = qs("ctaHeading");
  const sub      = qs("ctaSub");
  const emailBtn = qs("ctaEmailBtn");
  const waBtn    = qs("ctaWhatsappBtn");

  if (heading)  heading.textContent = d.heading;
  if (sub)      sub.textContent     = d.sub;
  if (emailBtn) { emailBtn.href = d.email.href; emailBtn.innerHTML = `<i class="fa-solid ${d.email.icon}"></i> ${d.email.label}`; }
  if (waBtn)    { waBtn.href    = SITE.company.whatsapp; waBtn.innerHTML = `<i class="${d.whatsapp.icon}"></i> ${d.whatsapp.label}`; }
}

// Whatsapp FLoat

function renderWhatsappFloat() {
  const btn = qs("waFloat");
  if (btn) btn.href = SITE.company.whatsapp;
}

// Footer

function renderFooter() {
  const d = SITE.footer;
  const c = SITE.company;

  const footBrand = qs("footerBrand");
  if (footBrand) footBrand.innerHTML = `
    <img src="${c.logo}" class="h-12 w-auto" alt="Logo"/>
    <div class="flex flex-col leading-tight">
      <span class="font-semibold text-lg text-gray-900">${c.name}</span>
      <span class="text-xs tracking-widest uppercase text-gray-500 mt-1">${c.subtitle}</span>
    </div>`;

  const footTagline = qs("footerTagline");
  if (footTagline) footTagline.textContent = d.tagline;

  const socials = qs("footerSocials");
  if (socials) socials.innerHTML = d.socials.map(s =>
    `<a href="${s.href}" class="footer-social"><i class="${s.icon}"></i></a>`).join("");

  const quickLinks = qs("footerQuickLinks");
  if (quickLinks) quickLinks.innerHTML = d.quickLinks.map(l =>
    `<a href="${l.href}" class="footer-link">${l.label}</a>`).join("");

  const contact = qs("footerContact");
  if (contact) contact.innerHTML = `
    <p class="flex items-start gap-2"><i class="fa-solid fa-location-dot text-blue-500 mt-0.5 w-4"></i> ${c.address}</p>
    <p class="flex items-center gap-2"><i class="fa-solid fa-phone    text-blue-500 w-4"></i> <a href="tel:${c.phone}"    class="hover:underline">${c.phone}</a></p>
    <p class="flex items-center gap-2"><i class="fa-solid fa-envelope text-blue-500 w-4"></i> <a href="mailto:${c.email}" class="hover:underline">${c.email}</a></p>
    <p class="flex items-center gap-2"><i class="fa-solid fa-clock    text-blue-500 w-4"></i> ${c.hours}</p>`;

  const copy = qs("footerCopyright");
  if (copy) copy.textContent = d.copyright;
}

renderDestopNav();
renderMobileNav();
renderHero();
renderStats();
renderProducts();
renderFeatures();
renderManufacturing();
renderCta();
renderWhatsappFloat();
renderFooter();

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
 * MOBILE DRAWER + VIEW SWITCH
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
let mobileViewTimer   = null;
 
/* Depth map — used to decide slide direction */
const VIEW_DEPTH = {
  mobileMainView:     0,
  mobileProductsView: 1,
  mobileIolView:      2,
};
 
function showMobileView(nextView) {
  if (!mobileMainView || !mobileProductsView || !mobileIolView || !nextView) return;
 
  const views = [mobileMainView, mobileProductsView, mobileIolView];
  const goingForward = !currentMobileView ||
    (VIEW_DEPTH[nextView.id] > VIEW_DEPTH[currentMobileView.id]);
 
  clearTimeout(mobileViewTimer);
 
  /* Same view — re-animate */
  if (currentMobileView === nextView) {
    views.forEach(v => v.classList.add("hidden"));
    views.forEach(v => v.classList.remove("flex","view-enter","view-enter-back","view-exit"));
    nextView.classList.remove("hidden");
    nextView.classList.add("flex","view-enter");
    return;
  }
 
  /* Exit current */
  if (currentMobileView) {
    currentMobileView.classList.remove("view-enter","view-enter-back");
    currentMobileView.classList.add("view-exit");
  }
 
  mobileViewTimer = setTimeout(() => {
    views.forEach(v => v.classList.add("hidden"));
    views.forEach(v => v.classList.remove("flex","view-enter","view-enter-back","view-exit"));
    nextView.classList.remove("hidden");
    nextView.classList.add("flex", goingForward ? "view-enter" : "view-enter-back");
    currentMobileView = nextView;
  }, 155);
}


function openMenu() {
  if (!mobileMenu || !menuOverlay) return;
 
  /* Hide any open sub-layers instantly */
  if (window._mobileHideAllLayers) window._mobileHideAllLayers();
 
  mobileMenu.classList.remove("-translate-x-full", "drawer-close");
  menuOverlay.classList.remove("opacity-0", "pointer-events-none", "overlay-in");
 
  void mobileMenu.offsetWidth;
  void menuOverlay.offsetWidth;
 
  mobileMenu.classList.add("drawer-open");
  menuOverlay.classList.add("overlay-in");
  document.body.classList.add("menu-open");
  stopLenis();
}

function closeMenu() {
  if (!mobileMenu || !menuOverlay) return;
 
  /* Hide sub-layers instantly */
  if (window._mobileHideAllLayers) window._mobileHideAllLayers();
 
  mobileMenu.classList.remove("drawer-open");
  mobileMenu.classList.add("drawer-close");
  menuOverlay.classList.remove("overlay-in");
  menuOverlay.classList.add("opacity-0", "pointer-events-none");
  document.body.classList.remove("menu-open");
 
  setTimeout(function () {
    mobileMenu.classList.add("-translate-x-full");
    mobileMenu.classList.remove("drawer-close");
  }, 225);
 
  startLenis();
}

if (menuToggle) {
  menuToggle.addEventListener("click", function() {
    if (document.body.classList.contains("menu-open")) {
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

if (mobileProductsBtn) {
  mobileProductsBtn.addEventListener("click", function(e) {
    e.preventDefault();
    showMobileView(mobileProductsView);
  });
}

if (mobileIolBtn) {
  mobileIolBtn.addEventListener("click", function(e) {
    e.preventDefault();
    showMobileView(mobileIolView);
  });
}

if (backToMainMenu) {
  backToMainMenu.addEventListener("click", function(e) {
    e.preventDefault();
    showMobileView(mobileMainView);
  });
}

if (backToProductsMenu) {
  backToProductsMenu.addEventListener("click", function(e) {
    e.preventDefault();
    showMobileView(mobileProductsView);
  });
}

document.querySelectorAll("#mobileMenu a").forEach(link => link.addEventListener("click", closeMenu));

/*************************************************
 * RESIZE HANDLING
 *************************************************/

let resizeTimer;

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) closeMenu();
  renderLensBg();
  clearTimeout(window._resizeTimer);
  window._resizeTimer = setTimeout(initReverseTriggers, 250);
});
window.addEventListener("pageshow", () => {
  document.body.classList.remove("menu-open");
  showMobileView(mobileMainView);
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
