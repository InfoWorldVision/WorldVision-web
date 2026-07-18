(function () {
  const pageRoutes = {
    "index.html": "HomePages/index.html",
    "aboutUs.html": "HomePages/aboutUs.html",
    "contactUs.html": "HomePages/contactUs.html",
    "gallery.html": "HomePages/gallery.html",
    "toricCalculator.html": "HomePages/toricCalculator.html",
    "blog.html": "HomePages/blog.html",

    "iol-page.html": "intraocular-lens/iol-page.html",
    "hydrophobicIol.html": "intraocular-lens/hydrophobicIol.html",
    "hydrophilicIOL.html": "intraocular-lens/hydrophilicIOL.html",
    "pmmaIOL.html": "intraocular-lens/pmmaIOL.html",
    "nanoClaro.html": "intraocular-lens/nanoClaro.html",
    "nanoClaroPlus.html": "intraocular-lens/nanoClaroPlus.html",
    "nanoGrand.html": "intraocular-lens/nanoGrand.html",
    "nanoGrandPlus.html": "intraocular-lens/nanoGrandPlus.html",
    "nanoFold.html": "intraocular-lens/nanoFold.html",
    "nanoFlex.html": "intraocular-lens/nanoFlex.html",
    "premiumIol.html": "intraocular-lens/iol-page.html",
    "premiumIOL.html": "intraocular-lens/iol-page.html",

    "keratome.html": "blades/keratome.html",
    "crescent.html": "blades/crescent.html",
    "lancelp.html": "blades/lancelp.html",
    "lanceIp.html": "blades/lancelp.html",
    "mvrBlade.html": "blades/mvrBlade.html",

    "otherProducts.html": "pharma-products/pharmaProducts.html",
    "pharmaProducts.html": "pharma-products/pharmaProducts.html",
    "PharmaProducts.html": "pharma-products/pharmaProducts.html",
    "pharmaChol.html": "pharma-products/pharmaProducts.html",
    "pharmaTBlue.html": "pharma-products/pharmaProducts.html",
    "pharmaVisc.html": "pharma-products/pharmaProducts.html",
  };

  function splitUrl(url) {
    const match = String(url).match(/^([^?#]*)([?#].*)?$/);
    return {
      path: match ? match[1] : String(url),
      suffix: match && match[2] ? match[2] : "",
    };
  }

  function isExternal(url) {
    return /^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(String(url));
  }

  function pageRootPrefix() {
    const path = window.location.pathname.replace(/\\/g, "/");
    const marker = "/Pages/";
    const markerIndex = path.lastIndexOf(marker);

    if (markerIndex === -1) return "";

    const afterPages = path.slice(markerIndex + marker.length);
    const segments = afterPages.split("/").filter(Boolean);
    const folderDepth = Math.max(0, segments.length - 1);

    return "../".repeat(folderDepth);
  }

  function pageUrl(fileName) {
    const route = pageRoutes[fileName] || pageRoutes[fileName.replace(/^.*\//, "")] || fileName;
    return pageRootPrefix() + route;
  }

  function assetUrl(assetPath) {
    const cleaned = assetPath
      .replace(/\\/g, "/")
      .replace(/^(\.\.\/)+Multimedia\//i, "")
      .replace(/^\.?\/?Multimedia\//i, "");

    return pageRootPrefix() + "../Multimedia/" + cleaned;
  }

  function resolve(url) {
    if (!url || isExternal(url)) return url;

    const parts = splitUrl(url);
    const normalizedPath = parts.path.replace(/\\/g, "/");
    const fileName = normalizedPath.split("/").pop();

    if (pageRoutes[fileName]) {
      return pageUrl(fileName) + parts.suffix;
    }

    if (/^(?:\.\.\/)+Pages\//i.test(normalizedPath) || /^\.?\/?Pages\//i.test(normalizedPath)) {
      return pageUrl(fileName) + parts.suffix;
    }

    if (/^(?:\.\.\/)+Multimedia\//i.test(normalizedPath) || /^\.?\/?Multimedia\//i.test(normalizedPath)) {
      return assetUrl(normalizedPath) + parts.suffix;
    }

    return url;
  }

  function normalizeData(value, seen) {
    if (!value || typeof value !== "object") return value;

    const visited = seen || new WeakSet();
    if (visited.has(value)) return value;
    visited.add(value);

    Object.keys(value).forEach((key) => {
      const entry = value[key];

      if (typeof entry === "string") {
        value[key] = resolve(entry);
        return;
      }

      normalizeData(entry, visited);
    });

    return value;
  }

  function normalizeDom(root) {
    const scope = root && root.querySelectorAll ? root : document;
    const selectors = ["a[href]", "link[href]", "script[src]", "img[src]", "source[src]", "video[poster]"];

    scope.querySelectorAll(selectors.join(",")).forEach((el) => {
      ["href", "src", "poster"].forEach((attr) => {
        if (!el.hasAttribute(attr)) return;

        const current = el.getAttribute(attr);
        const next = resolve(current);
        if (next !== current) el.setAttribute(attr, next);
      });
    });
  }

  function startDomNormalizer() {
    normalizeDom(document);

    if (!window.MutationObserver || !document.body) return;

    const observer = new MutationObserver((records) => {
      records.forEach((record) => {
        if (record.type === "attributes") {
          normalizeDom(record.target.parentElement || document);
          return;
        }

        record.addedNodes.forEach((node) => {
          if (node.nodeType === 1) normalizeDom(node);
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["href", "src", "poster"],
    });
  }

  window.WorldVisionPaths = {
    resolve,
    pageUrl,
    assetUrl,
    normalizeData,
    normalizeDom,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startDomNormalizer);
  } else {
    startDomNormalizer();
  }
})();
