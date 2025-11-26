/* ===========================================================================
   FULL combined script
   - mobileZoom (fly-to, pan, zoom) that exposes handleNodeClick, flyToShape, resetZoom
   - Filter logic + node-select
   - Desktop: immediate redirect from node-select
   - Mobile: node-select triggers handleNodeClick and attaches redirect only to selected shape
   - Filter actions reset zoom (both mobile & desktop)
   =========================================================================== */

/* ----------------------------
   MOBILE ZOOM (your code, adapted)
   ---------------------------- */
   console.log('update successfull at 7:1 pm')
function mobileZoom({
  ikrsvg_id, stage_id, mapId, mapData, ploat_btn_class = "plot-btn",
  data_proprty_to_create_button = "lot", animation_class = 'highlight'
}) {
  (() => {
    let previous_selected_element = null;
    let maxAllowedZoom = 10;

    const svgEl = document.getElementById(ikrsvg_id);
    const stage = document.getElementById(stage_id);

    if (!svgEl || !stage) {
      console.warn('mobileZoom: svg or stage element not found', ikrsvg_id, stage_id);
      return;
    }

    const transform = { x: 0, y: 0, scale: 1 };
    let baseTransform = { x: 0, y: 0, scale: 1 };

    const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    function applyTransform() {
      stage.setAttribute('transform', `translate(${transform.x},${transform.y}) scale(${transform.scale})`);
    }

    function animateTo(target, onUpdate = null, onDone = null) {
      const start = { ...transform };
      const dt = { x: target.x - start.x, y: target.y - start.y, scale: target.scale - start.scale };
      const distance = Math.abs(dt.x) + Math.abs(dt.y) + Math.abs(dt.scale) * 200;
      const duration = Math.min(400, 100 + distance / 4);

      if (isMobile) svgEl.classList.add('animating');
      const t0 = performance.now();

      function step(now) {
        const p = Math.min((now - t0) / duration, 1);
        const ease = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
        transform.x = start.x + dt.x * ease;
        transform.y = start.y + dt.y * ease;
        transform.scale = start.scale + dt.scale * ease;
        applyTransform();
        if (onUpdate) onUpdate(ease);
        if (p < 1) requestAnimationFrame(step);
        else {
          if (isMobile) svgEl.classList.remove('animating');
          if (onDone) onDone();
        }
      }
      requestAnimationFrame(step);
    }

    function computeFitTransform(bb, padding = 24) {
      const viewBox = svgEl.getAttribute("viewBox") || "0 0 1000 1000";
      const parts = viewBox.split(" ").map(Number);
      const svgW = parts[2], svgH = parts[3];
      const scale = Math.min(svgW / (bb.width + padding * 2), svgH / (bb.height + padding * 2));
      const cx = bb.x + bb.width / 2, cy = bb.y + bb.height / 2;
      return { x: svgW / 2 - scale * cx, y: svgH / 2 - scale * cy, scale };
    }

    /* Zoom & Reset */
    const ZoomModule = {
      init() {
        svgEl.addEventListener('wheel', e => {
          e.preventDefault();
          const r = svgEl.getBoundingClientRect();
          this.zoom(e.deltaY < 0 ? 1.1 : 0.9, e.clientX - r.left, e.clientY - r.top);
        }, { passive: false });
      },
      zoom(factor, cx = 400, cy = 300) {
        const oldScale = transform.scale;
        const desiredScale = oldScale * factor;
        const newScale = Math.max(0.1, Math.min(maxAllowedZoom * 1.6, desiredScale));
        if (oldScale === 1 && newScale > 1) PanModule.enable();
        transform.x = cx - (cx - transform.x) * (newScale / oldScale);
        transform.y = cy - (cy - transform.y) * (newScale / oldScale);
        transform.scale = newScale;
        applyTransform();
      },
      reset() {
        const tgt = { x: 0, y: 0, scale: 1 };
        animateTo(tgt, null, () => {
          baseTransform = { ...tgt };
          PanModule.disable();
        });
      }
    };

    /* Pan Module */
    const PanModule = (function () {
      let panEnabled = false;
      let startX = 0, startY = 0, startTX = 0, startTY = 0;
      function getPanSpeedFactor() {
        if (transform.scale <= 10) {
          if (transform.scale <= 1) return 1;
          if (transform.scale <= 2) return 3;
          if (transform.scale <= 4) return 4;
          if (transform.scale <= 5) return 4;
          if (transform.scale <= 6) return 6;
          if (transform.scale <= 7) return 7;
          if (transform.scale <= 8) return 10;
          if (transform.scale <= 9) return 15;
          if (transform.scale <= 10) return 16;
          return 6;
        } else {
          return Math.floor(transform.scale) + 3;
        }
      }
      function enable() { panEnabled = true; svgEl.style.cursor = 'grab'; }
      function disable() { panEnabled = false; svgEl.style.cursor = 'default'; }

      function initDesktop() {
        let panning = false;
        svgEl.addEventListener('mousedown', e => {
          if (!panEnabled || e.button !== 0) return;
          panning = true; svgEl.style.cursor = 'grabbing'; startX = e.clientX; startY = e.clientY; startTX = transform.x; startTY = transform.y;
        });
        svgEl.addEventListener('mousemove', e => {
          if (!panning) return;
          const speed = getPanSpeedFactor();
          const dx = (e.clientX - startX) * speed / transform.scale;
          const dy = (e.clientY - startY) * speed / transform.scale;
          transform.x = startTX + dx; transform.y = startTY + dy; applyTransform();
        });
        const stop = () => { panning = false; if (panEnabled) svgEl.style.cursor = 'grab'; };
        svgEl.addEventListener('mouseup', stop); svgEl.addEventListener('mouseleave', stop);
      }

      function initMobile() {
        let panId = null;
        svgEl.addEventListener('touchstart', e => {
          if (!panEnabled || e.touches.length !== 1) return;
          const t = e.touches[0]; panId = t.identifier; svgEl.classList.add('dragging'); startX = t.clientX; startY = t.clientY; startTX = transform.x; startTY = transform.y;
        }, { passive: false });
        svgEl.addEventListener('touchmove', e => {
          if (!panEnabled || e.touches.length !== 1) return;
          const t = Array.from(e.touches).find(tt => tt.identifier === panId); if (!t) return; e.preventDefault();
          const speed = getPanSpeedFactor();
          const dx = (t.clientX - startX) * speed / transform.scale;
          const dy = (t.clientY - startY) * speed / transform.scale;
          transform.x = startTX + dx; transform.y = startTY + dy; applyTransform();
        }, { passive: false });
        svgEl.addEventListener('touchend', () => { panId = null; svgEl.classList.remove('dragging'); });
      }

      return {
        init() {
          svgEl.style.touchAction = 'none';
          enable();
          svgEl.style.cursor = 'default';
          if (isMobile) initMobile(); else initDesktop();
        },
        enable, disable, get enabled() { return panEnabled; }
      };
    })();

    /* Fly to shape */
    function flyToShape(shapeEl) {
      if (!shapeEl || typeof shapeEl.getBBox !== 'function') return;
      const bb = shapeEl.getBBox();
      const target = computeFitTransform(bb, 24);
      maxAllowedZoom = Math.max(maxAllowedZoom, target.scale * 1.8);
      animateTo(target, null, () => { baseTransform = { ...target }; });
    }

    /* create node buttons/select (internal, used for mobile UI) */
    function createNodeButtons(data, containerId, btnClass) {
      const button_container = document.getElementById(containerId);
      if (!button_container) return;
      button_container.innerHTML = "";
      data.forEach((node) => {
        const lotNumber = node[data_proprty_to_create_button];
        const btn = document.createElement("button");
        btn.className = btnClass;
        btn.textContent = lotNumber;
        btn.setAttribute("data-node-id", node.id);
        btn.addEventListener("click", () => handleNodeClick(node));
        button_container.appendChild(btn);
      });
    }
    const lot_select_message = document.getElementById('lot_select_message');
    lot_select_message.innerText = `CHOOSE A ${data_proprty_to_create_button.toUpperCase()}`;

    function createNodeSelect(data, containerId, selectClass = "node-select") {
      const container = document.getElementById(containerId);
      if (!container) return;
      const oldSelect = container.querySelector(`.${selectClass}`);
      if (oldSelect) oldSelect.remove();
      const select = document.createElement("select");
      select.className = selectClass;
      const placeholder = document.createElement("option");
      placeholder.value = "";
      placeholder.textContent = `Select ${data_proprty_to_create_button}`;
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
      data.forEach((node) => {
        const lotNumber = node[data_proprty_to_create_button];
        const option = document.createElement("option");
        option.value = node.id;
        option.textContent = lotNumber;
        select.appendChild(option);
      });
      select.addEventListener("change", (e) => {
        if (!e.target.value) return;
        const selectedNode = data.find(n => n.id === e.target.value);
        if (selectedNode) handleNodeClick(selectedNode);
      });
      container.appendChild(select);
    }

    /* Main click handler that does bring-to-front, highlight and flyTo */
    function handleNodeClick(node) {
      const select_svg_element = document.getElementById(node.id);
      if (!select_svg_element) return;

      // Restore previous selection order and handlers
      if (previous_selected_element && previous_selected_element.parentNode) {
        const savedNextSibling = previous_selected_element.originalNextSibling;
        if (savedNextSibling && savedNextSibling.parentNode) {
          previous_selected_element.parentNode.insertBefore(previous_selected_element, savedNextSibling);
        } else {
          previous_selected_element.parentNode.appendChild(previous_selected_element);
        }
        previous_selected_element.classList.remove("selected-node");
        if (typeof clearStrokeHover === 'function') clearStrokeHover(previous_selected_element, animation_class);
        // remove touch redirect that was added by this function earlier
        if (previous_selected_element._sf_touch_redirect) {
          previous_selected_element.removeEventListener('touchstart', previous_selected_element._sf_touch_redirect);
          delete previous_selected_element._sf_touch_redirect;
        }
      }

      // Bring new to front
      select_svg_element.originalNextSibling = select_svg_element.nextSibling;
      select_svg_element.parentNode.appendChild(select_svg_element);
      select_svg_element.classList.add("selected-node");
      //       select_svg_element.style.fill = "#ffffff";
      // select_svg_element.style.fillOpacity = "1";
      // select_svg_element.style.opacity = "1";
      try { select_svg_element.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" }); } catch (err) { }
      if (typeof applyStrokeHover === 'function') applyStrokeHover(select_svg_element, animation_class);
      flyToShape(select_svg_element);

      // attach a touch redirect for mobile (note: we add but do not redirect immediately)
      if (node.link) {
        const redirectFn = function () {
         

  

  const origin = window.location.origin;              // e.g. https://ik-robin.github.io  or http://localhost:3000
  const pathname = window.location.pathname || "/";   // e.g. /Renishaw-Coastal-interactive-map/all-nodes/node-details.html

  // If item.link is already absolute (http/https), just use it
  const isAbsolute = /^(?:[a-z]+:)?\/\//i.test(node.link);
  let finalURL;

  if (isAbsolute) {
    finalURL = new URL(node.link);
  } else if (node.link.startsWith("/")) {
    // root-absolute path on the current origin
    finalURL = new URL(node.link, origin);
  } else {
    // Determine project root:
    // - If on GitHub Pages (hostname ends with github.io), assume repo is first path segment: /<repo>/...
    // - Otherwise (localhost or custom server) assume the app is served from root "/"
    let projectRoot = "/"; // default for localhost and typical dev servers

    if (window.location.hostname.endsWith("github.io")) {
      // take first path segment as repo name if present
      const segs = pathname.split("/").filter(Boolean); // removes empty strings
      if (segs.length > 0) {
        projectRoot = `/${segs[0]}/`; // e.g. "/Renishaw-Coastal-interactive-map/"
      }
    } else {
      // If you serve your project from a subfolder locally, you can override this by setting a global var:
      // window.PROJECT_ROOT = "/Renishaw-Coastal-interactive-map/";
      if (typeof window.PROJECT_ROOT === "string" && window.PROJECT_ROOT.length > 0) {
        projectRoot = window.PROJECT_ROOT;
        if (!projectRoot.startsWith("/")) projectRoot = "/" + projectRoot;
        if (!projectRoot.endsWith("/")) projectRoot += "/";
      }
    }

    finalURL = new URL(node.link, origin + projectRoot);
  }

  // attach unit param (safely)
  const unit = encodeURIComponent((node.id || "").trim());
  if (unit) finalURL.searchParams.set("unit", unit);

  console.log("finalURL:", finalURL.href);
  // redirect:
  window.location.href = finalURL.href;



        };
        // remove previous if present then add new
        if (select_svg_element._sf_touch_redirect) {
          select_svg_element.removeEventListener('touchstart', select_svg_element._sf_touch_redirect);
        }
        select_svg_element._sf_touch_redirect = redirectFn;
        select_svg_element.addEventListener('touchstart', redirectFn, { passive: true });
      }

      // Button active state
      document.querySelectorAll(".plot-btn").forEach(btn => btn.classList.remove("active-btn"));
      const currentBtn = document.querySelector(`[data-node-id="${node.id}"]`);
      if (currentBtn) currentBtn.classList.add("active-btn");

      // Sync any node-select UI
      const selectEl = document.querySelector(".node-select");
      if (selectEl) selectEl.value = node.id;

      previous_selected_element = select_svg_element;
    }

    // expose functions to global scope
    window.handleNodeClick = handleNodeClick;
    window.flyToShape = flyToShape;
    window.resetZoom = function () {
      ZoomModule.reset();
    };

    /* redirect handler used by other attach functions */
    function redirectHandlerFromElement(item) {
      return function () {
        if (!item.link) return;
        const unit = encodeURIComponent(item.id.trim());
        const pathname = window.location.pathname || "/";
        const basePath = pathname.replace(/\/[^/]*$/, "/");
        const baseURL = window.location.origin;
        let finalURL = new URL(item.link, baseURL + basePath);
        if (basePath === "/all-nodes/") finalURL = new URL(item.link, baseURL);
        finalURL.searchParams.set("unit", unit);
        window.location.href = finalURL.href;
      };
    }

    /* deselect helper */
    function deselectAll() {
      if (!previous_selected_element) return;
      const el = previous_selected_element;
      const saved = el.originalNextSibling;
      if (saved && saved.parentNode) el.parentNode.insertBefore(el, saved);
      else el.parentNode.appendChild(el);
      el.classList.remove("selected-node");
      if (typeof clearStrokeHover === 'function') clearStrokeHover(el, animation_class);
      if (el._sf_touch_redirect) { el.removeEventListener('touchstart', el._sf_touch_redirect); delete el._sf_touch_redirect; }
      document.querySelectorAll(".plot-btn").forEach(b => b.classList.remove('active-btn'));
      const selectEl = document.querySelector(".node-select");
      if (selectEl) selectEl.value = '';
      previous_selected_element = null;
    }

    /* initialize */
    applyTransform();
    createNodeSelect(mapData || [], "buttonsContainer", "node-select");
    PanModule.init();
    ZoomModule.init();
  })();
}

/* ----------------------------
   end mobileZoom
   ---------------------------- */


/* ===========================================================================
   FILTER + NODE-SELECT logic (uses mobileZoom exposed functions)
   =========================================================================== */

/* DOM elements (single declarations) */
const blockSelect = document.getElementById('blockSelect');
const priceSelect = document.getElementById('priceSelect');
const statusSelect = document.getElementById('statusSelect');
const resetBtn = document.getElementById('resetBtn');
const resetLi = document.getElementById('resetLi');
const selects = document.querySelectorAll('.sf-input-select');
const mobileToggle = document.getElementById('mobileToggle');
const searchForm = document.getElementById('searchForm');

const NODE_SELECT_CONTAINER_ID = 'buttonsContainer';
const IS_MOBILE_DEVICE = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

/* unique values functions (reuse) */
function getUniqueValues(key) {
  const set = new Set();
  node_1_data.forEach(lot => { if (lot[key]) set.add(lot[key].trim()); });
  return Array.from(set).sort();
}
const uniqueDevTypes = getUniqueValues('developmentType');
const uniqueLandUses = getUniqueValues('landUse');

function populateDevLandDropdown() {
  if (!blockSelect) return;
  blockSelect.innerHTML = '<option value="">Development Type / Land Use</option>';
  if (uniqueDevTypes.length) {
    const devGroup = document.createElement('optgroup'); devGroup.label = 'Development Type';
    uniqueDevTypes.forEach(dt => { const opt = document.createElement('option'); opt.value = 'dev::' + dt; opt.textContent = dt; devGroup.appendChild(opt); });
    blockSelect.appendChild(devGroup);
  }
  if (uniqueLandUses.length) {
    const landGroup = document.createElement('optgroup'); landGroup.label = 'Land Use';
    uniqueLandUses.forEach(lu => { const opt = document.createElement('option'); opt.value = 'land::' + lu; opt.textContent = lu; landGroup.appendChild(opt); });
    blockSelect.appendChild(landGroup);
  }
}

function buildPriceRanges(bucketCount = 5) {
  const prices = node_1_data.map(l => l.price).filter(p => typeof p === 'number' && !isNaN(p));
  if (!prices.length) return [];
  const min = Math.min(...prices), max = Math.max(...prices);
  const step = Math.round((max - min) / bucketCount);
  const ranges = []; let start = min;
  for (let i = 0; i < bucketCount; i++) {
    const end = (i === bucketCount - 1) ? max : start + step;
    ranges.push({ min: start, max: end });
    start = end + 1;
  }
  return ranges;
}
function formatRand(n) { return 'R ' + n.toLocaleString('en-ZA'); }
function populatePriceDropdown() {
  if (!priceSelect) return;
  priceSelect.innerHTML = '<option value="">Price Range</option>';
  const ranges = buildPriceRanges(5);
  ranges.forEach(r => { const opt = document.createElement('option'); opt.value = `${r.min}-${r.max}`; opt.textContent = `${formatRand(r.min)} – ${formatRand(r.max)}`; priceSelect.appendChild(opt); });
}

/* Color map */
const colorPalette = ['#f94144', '#f3722c', '#f8961e', '#f9844a', '#f9c74f', '#90be6d', '#43aa8b', '#577590', '#277da1', '#8e44ad'];
const colorMap = {};
function getKeyForLot(lot) { return lot.developmentType || lot.landUse || 'default'; }
function getColorForKey(key) { if (!colorMap[key]) { const index = Object.keys(colorMap).length % colorPalette.length; colorMap[key] = colorPalette[index]; } return colorMap[key]; }

/* Filters */
function parsePriceRange(value) {
  if (!value) return null;
  const parts = value.split('-'); if (parts.length !== 2) return null;
  const min = parseInt(parts[0], 10), max = parseInt(parts[1], 10);
  if (isNaN(min) || isNaN(max)) return null;
  return { min, max };
}
function matchesFilters(lot) {
  const blockValue = blockSelect ? blockSelect.value : '';
  if (blockValue) {
    const [type, raw] = blockValue.split('::');
    if (type === 'dev' && lot.developmentType !== raw) return false;
    if (type === 'land' && lot.landUse !== raw) return false;
  }
  const statusValue = statusSelect ? statusSelect.value : '';
  if (statusValue && lot.status !== statusValue) return false;
  const priceValue = priceSelect ? priceSelect.value : '';
  if (priceValue) {
    const range = parsePriceRange(priceValue);
    if (range && (lot.price < range.min || lot.price > range.max)) return false;
  }
  return true;
}

/* Restore appearance */
function restoreOriginalAppearance(el) {
  if (!el) return;
  el.classList.remove('highlight', 'dimmed', 'selected-node');
  el.style.fill = ''; el.style.stroke = ''; el.style.opacity = '';
  // remove mobile-only redirect handler if present
  if (el._sf_touch_redirect) {
    el.removeEventListener('touchstart', el._sf_touch_redirect);
    delete el._sf_touch_redirect;
  }
}

/* Desktop: attach redirect handlers to all shapes (click + touch)
   Mobile: we do NOT attach global redirects; mobile redirects are added only to selected shape
*/
function attachDesktopRedirects() {
  if (!Array.isArray(node_1_data)) return;
  node_1_data.forEach(item => {
    if (!item.id) return;
    const el = document.getElementById(item.id);
    if (!el) return;
    if (el._sf_desktop_redirect_attached) return;
 const fn = function () {
  if (!item.link) return;

  const origin = window.location.origin;              // e.g. https://ik-robin.github.io  or http://localhost:3000
  const pathname = window.location.pathname || "/";   // e.g. /Renishaw-Coastal-interactive-map/all-nodes/node-details.html

  // If item.link is already absolute (http/https), just use it
  const isAbsolute = /^(?:[a-z]+:)?\/\//i.test(item.link);
  let finalURL;

  if (isAbsolute) {
    finalURL = new URL(item.link);
  } else if (item.link.startsWith("/")) {
    // root-absolute path on the current origin
    finalURL = new URL(item.link, origin);
  } else {
    // Determine project root:
    // - If on GitHub Pages (hostname ends with github.io), assume repo is first path segment: /<repo>/...
    // - Otherwise (localhost or custom server) assume the app is served from root "/"
    let projectRoot = "/"; // default for localhost and typical dev servers

    if (window.location.hostname.endsWith("github.io")) {
      // take first path segment as repo name if present
      const segs = pathname.split("/").filter(Boolean); // removes empty strings
      if (segs.length > 0) {
        projectRoot = `/${segs[0]}/`; // e.g. "/Renishaw-Coastal-interactive-map/"
      }
    } else {
      // If you serve your project from a subfolder locally, you can override this by setting a global var:
      // window.PROJECT_ROOT = "/Renishaw-Coastal-interactive-map/";
      if (typeof window.PROJECT_ROOT === "string" && window.PROJECT_ROOT.length > 0) {
        projectRoot = window.PROJECT_ROOT;
        if (!projectRoot.startsWith("/")) projectRoot = "/" + projectRoot;
        if (!projectRoot.endsWith("/")) projectRoot += "/";
      }
    }

    finalURL = new URL(item.link, origin + projectRoot);
  }

  // attach unit param (safely)
  const unit = encodeURIComponent((item.id || "").trim());
  if (unit) finalURL.searchParams.set("unit", unit);

  console.log("finalURL:", finalURL.href);
  // redirect:
  window.location.href = finalURL.href;
};


    el.addEventListener('click', fn);
    el._sf_desktop_redirect_attached = fn;
  });
}

/* Remove desktop redirect wrappers if needed (cleanup) */
function detachDesktopRedirects() {
  if (!Array.isArray(node_1_data)) return;
  node_1_data.forEach(item => {
    if (!item.id) return;
    const el = document.getElementById(item.id);
    if (!el) return;
    if (el._sf_desktop_redirect_attached) {
      el.removeEventListener('click', el._sf_desktop_redirect_attached);
      delete el._sf_desktop_redirect_attached;
    }
  });
}

/* Mobile: helper to remove all mobile touch redirects */
function clearAllMobileTouchRedirects() {
  if (!Array.isArray(node_1_data)) return;
  node_1_data.forEach(item => {
    if (!item.id) return;
    const el = document.getElementById(item.id);
    if (!el) return;
    if (el._sf_touch_redirect) {
      el.removeEventListener('touchstart', el._sf_touch_redirect);
      delete el._sf_touch_redirect;
    }
  });
}

/* Mobile: attach touch redirect to single element by node id */
function attachMobileRedirectToId(nodeId) {
  clearAllMobileTouchRedirects();
  const item = node_1_data.find(n => n.id === nodeId);
  if (!item || !item.link) return;
  const el = document.getElementById(nodeId);
  if (!el) return;
const fn = function () {
  if (!item.link) return;

  const origin = window.location.origin;              // e.g. https://ik-robin.github.io  or http://localhost:3000
  const pathname = window.location.pathname || "/";   // e.g. /Renishaw-Coastal-interactive-map/all-nodes/node-details.html

  // If item.link is already absolute (http/https), just use it
  const isAbsolute = /^(?:[a-z]+:)?\/\//i.test(item.link);
  let finalURL;

  if (isAbsolute) {
    finalURL = new URL(item.link);
  } else if (item.link.startsWith("/")) {
    // root-absolute path on the current origin
    finalURL = new URL(item.link, origin);
  } else {
    // Determine project root:
    // - If on GitHub Pages (hostname ends with github.io), assume repo is first path segment: /<repo>/...
    // - Otherwise (localhost or custom server) assume the app is served from root "/"
    let projectRoot = "/"; // default for localhost and typical dev servers

    if (window.location.hostname.endsWith("github.io")) {
      // take first path segment as repo name if present
      const segs = pathname.split("/").filter(Boolean); // removes empty strings
      if (segs.length > 0) {
        projectRoot = `/${segs[0]}/`; // e.g. "/Renishaw-Coastal-interactive-map/"
      }
    } else {
      // If you serve your project from a subfolder locally, you can override this by setting a global var:
      // window.PROJECT_ROOT = "/Renishaw-Coastal-interactive-map/";
      if (typeof window.PROJECT_ROOT === "string" && window.PROJECT_ROOT.length > 0) {
        projectRoot = window.PROJECT_ROOT;
        if (!projectRoot.startsWith("/")) projectRoot = "/" + projectRoot;
        if (!projectRoot.endsWith("/")) projectRoot += "/";
      }
    }

    finalURL = new URL(item.link, origin + projectRoot);
  }

  // attach unit param (safely)
  const unit = encodeURIComponent((item.id || "").trim());
  if (unit) finalURL.searchParams.set("unit", unit);

  console.log("finalURL:", finalURL.href);
  // redirect:
  window.location.href = finalURL.href;
};


  el._sf_touch_redirect = fn;
  el.addEventListener('touchstart', fn, { passive: true });
}

/* Create node-select:
   - Desktop: immediate redirect when option selected (no delay)
   - Mobile: call handleNodeClick(node) and attach mobile redirect only to that shape
*/
function createNodeSelect(dataArray) {
  const container = document.getElementById(NODE_SELECT_CONTAINER_ID);
  if (!container) return;
  const existing = container.querySelector('.node-select');
  if (existing) existing.remove();

  const select = document.createElement('select');
  select.className = 'node-select';

  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.disabled = true;
  placeholder.selected = true;
  placeholder.textContent = (dataArray && dataArray.length) ? 'Select Plot' : 'No matching plots';
  select.appendChild(placeholder);

  (dataArray || []).forEach(node => {
    const opt = document.createElement('option');
    opt.value = node.id;
    opt.textContent = node.lot || node.id;
    if (node.link) opt.setAttribute('data-link', node.link);
    select.appendChild(opt);
  });

  select.addEventListener('change', function (e) {
    const id = e.target.value;
    if (!id) return;
    const node = node_1_data.find(n => n.id === id);
    if (!node) return;

    // Reset zoom when user selects a node -> we want to show flyTo from base (as requested)
    if (window.resetZoom) window.resetZoom();

    // Always call fly-to / highlight if available
    if (typeof window.handleNodeClick === 'function') {
      window.handleNodeClick(node);
    } else {
      // fallback bring-to-front
      const el = document.getElementById(node.id);
      if (el) { el.originalNextSibling = el.nextSibling; el.parentNode.appendChild(el); el.classList.add('selected-node'); try { el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' }); } catch (e) { } }
    }

    if (IS_MOBILE_DEVICE) {
      // On mobile: attach redirect only to selected node (so only it will redirect on touch)
      attachMobileRedirectToId(id);
      return; // no immediate redirect
    }

    // On desktop: redirect immediately (no delay)
    const chosen = e.target.selectedOptions[0];
    const link = chosen?.dataset?.link || node.link || '';
    if (!link) return;
    const unit = encodeURIComponent(id.trim());
    const pathname = window.location.pathname || "/";
    const basePath = pathname.replace(/\/[^/]*$/, "/");
    const baseURL = window.location.origin;
    let finalURL = new URL(link, baseURL + basePath);
    if (basePath === "/all-nodes/") finalURL = new URL(link, baseURL);
    finalURL.searchParams.set("unit", unit);
    window.location.href = finalURL.href;
  });

  container.appendChild(select);
}

/* Apply filters:
   - Reset zoom (both devices)
   - Clear shapes and highlight matches
   - For mobile: ensure no mobile redirects remain until user selects a node
*/
function applyFilters() {
  const anyFilterActive = Array.from(selects).some(s => s.value !== '');

  // reset zoom to base for both devices
  if (window.resetZoom) window.resetZoom();

  // reset shapes
  node_1_data.forEach(lot => {
    if (!lot.id) return;
    const el = document.getElementById(lot.id);
    if (!el) return;
    restoreOriginalAppearance(el);
  });

  // desktop: ensure global redirects attached for clickable shapes
  if (!IS_MOBILE_DEVICE) {
    attachDesktopRedirects();
  } else {
    // mobile: clear any mobile redirects until user selects a node
    clearAllMobileTouchRedirects();
  }

  if (!anyFilterActive) {
    // show all nodes
    createNodeSelect(node_1_data);
    return;
  }

  // gather matches
  const matches = [];
  node_1_data.forEach(lot => {
    if (!lot.id) return;
    if (matchesFilters(lot)) {
      matches.push(lot);
      const el = document.getElementById(lot.id);
      if (!el) return;
      const key = getKeyForLot(lot);
      const color = getColorForKey(key);
      el.classList.add('highlight');
      el.style.fill = color;
      el.style.stroke = '#000';
      el.style.strokeWidth = .5;
      el.style.opacity = '1';
    }
  });

  createNodeSelect(matches);
}

/* Update active states UI and reset button active state */
function updateActiveStates() {
  selects.forEach(sel => {
    const li = sel.closest('li'); if (!li) return;
    li.classList.toggle('active', sel.value !== '');
  });
  const any = Array.from(selects).some(s => s.value !== '');
  if (resetLi) resetLi.classList.toggle('active', any);
}

/* Hook change listeners for selects */
selects.forEach(sel => {
  sel.addEventListener('change', () => {
    updateActiveStates();
    applyFilters();
  });
});

/* Reset button */
if (resetBtn) {
  resetBtn.addEventListener('click', e => {
    e.preventDefault();
    selects.forEach(sel => { sel.value = ""; const li = sel.closest('li'); if (li) li.classList.remove('active'); });
    populateDevLandDropdown();
    populatePriceDropdown();
    // Reset zoom
    if (window.resetZoom) window.resetZoom();
    // on reset: clear mobile redirects and reattach desktop ones
    clearAllMobileTouchRedirects();
    if (!IS_MOBILE_DEVICE) attachDesktopRedirects();
    createNodeSelect(node_1_data);
    updateActiveStates();
    applyFilters();
  });
}

/* Mobile toggle and outside click close (unchanged) */
if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    const active = searchForm.classList.toggle('active');
    mobileToggle.classList.toggle('active', active);
  });
}
document.addEventListener('click', e => {
  if (!e.target.closest('.rhill-serchMenu') && searchForm.classList.contains('active')) {
    searchForm.classList.remove('active');
    mobileToggle.classList.remove('active');
  }
});
document.getElementById('filterList')?.addEventListener('click', e => e.stopPropagation());

/* Initialize EVERYTHING once DOM is ready */
function initAll() {
  populateDevLandDropdown();
  populatePriceDropdown();
  updateActiveStates();
  // initialize node-select to all nodes
  createNodeSelect(node_1_data);
  // attach desktop redirects immediately if desktop
  if (!IS_MOBILE_DEVICE) attachDesktopRedirects();
  // ensure no mobile redirects active
  if (IS_MOBILE_DEVICE) clearAllMobileTouchRedirects();
  applyFilters();
  // initialize mobileZoom if svg/stage exist (so window.handleNodeClick / resetZoom are available)
  if (document.getElementById('ikr_svg') && document.getElementById('stage')) {
    mobileZoom({
      ikrsvg_id: 'ikr_svg',
      stage_id: 'stage',
      mapData: node_1_data,
      ploat_btn_class: 'plot-btn',
      data_proprty_to_create_button: 'lot',
      animation_class: 'node_lot_highlight'
    });
  } else {
    // not fatal — but user won't get flyTo unless mobileZoom is present
    console.warn('mobileZoom not initialized — missing #ikr_svg or #stage elements.');
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

/* ===========================================================================
  Notes:
  - Desktop: node-select -> immediate redirect
  - Mobile: node-select -> fly-to and attach redirect only to that node
  - Filters reset zoom via window.resetZoom() exposed by mobileZoom
  - If you want desktop node-select to fly first then redirect after small delay,
    change the desktop branch in createNodeSelect to call handleNodeClick then redirect via setTimeout.
  - Ensure #buttonsContainer exists in DOM and your SVG shapes have ids matching node_1_data[].id
  =========================================================================== */
