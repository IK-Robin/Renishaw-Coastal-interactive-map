function ikrZoom({
  ikrsvg,
  tooltipElementId = "ikr_toltipMove",
  mapData,
  mapId,
  onLotHoverIn,
  onLotHoverOut,
  max_zoom = 6,
}) {
  const svg = ikrsvg;
  console.log(svg)
  const container = svg.parentElement;
  const ikr_toltipMove_on_zoom = document.getElementById(tooltipElementId)
  console.log(ikr_toltipMove_on_zoom)
  const controls = document.getElementById("controls");

  /* ---------- CONFIG ---------- */
  const CTRL_WHEEL_ZOOM = false;             // Ctrl + wheel to zoom, plain wheel scrolls page
  const ENABLE_FULLSCREEN_BUTTON = true;     // toggle fullscreen button on/off
  const WHEEL_ZOOM_FACTOR = 1.1;            // ~Google Maps feel: 1.1–1.3 is nice
  const BUTTON_ZOOM_FACTOR = 1.2;
  /* ---------------------------- */

  /* ---------- state ---------- */
  const ts = { scale: 1, translate: { x: 0, y: 0 }, rotate: 0 };
  let currentScale = 1;
  const MIN_SCALE = 1;
  const MAX_SCALE = max_zoom;

  let panEnabled = false;

  /* ---------- buttons ---------- */
  const zoomInBtn = document.getElementById("zoom_in");
  const zoomOutBtn = document.getElementById("zoom_out");
  const resetBtn = document.getElementById("reset");

  ikrsvg.style.touchAction = "none";
  ikrsvg.style.cursor = "default";

  // ✅ IMPORTANT: make transforms predictable
  ikrsvg.style.transformOrigin = "0 0";

  /* ---------- store original size for fullscreen restore ---------- */
  const originalWidth = ikrsvg.style.width || "";
  const originalHeight = ikrsvg.style.height || "";

  /* ---------- apply transform ---------- */
  function applyTransform() {
    ikrsvg.style.transform =
      `translate(${ts.translate.x}px, ${ts.translate.y}px) scale(${ts.scale})`;
  }

  /* ---------- FULLSCREEN SUPPORT ---------- */
  function enterFullscreenStyles() {
    ikrsvg.style.width = "100% !imprtent";
    ikrsvg.style.height = "100%";
    ikrsvg.style.translate = "0 0";
    applyTransform();
  }

  function exitFullscreenStyles() {
    ikrsvg.style.width = '100%';
    ikrsvg.style.height = '100%';
    applyTransform();
  }

  if (ENABLE_FULLSCREEN_BUTTON) {
    const fsBtn = document.createElement("button");
    fsBtn.type = "button";
    fsBtn.setAttribute("aria-label", "Toggle fullscreen");

    fsBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
           viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2"
           stroke-linecap="round" stroke-linejoin="round">
        <polyline points="4 9 4 4 9 4"></polyline>
        <polyline points="15 4 20 4 20 9"></polyline>
        <polyline points="20 15 20 20 15 20"></polyline>
        <polyline points="9 20 4 20 4 15"></polyline>
      </svg>
    `;

    // fsBtn.style.position = "absolute";
    // fsBtn.style.right = "8px";
    // fsBtn.style.top = "8px";
    // fsBtn.style.width = "30px";
    // fsBtn.style.height = "30px";
    // fsBtn.style.border = "none";
    // fsBtn.style.borderRadius = "4px";
    // fsBtn.style.background = "rgba(255,255,255,0.9)";
    // fsBtn.style.boxShadow = "0 1px 4px rgba(0,0,0,0.3)";
    // fsBtn.style.display = "flex";
    // fsBtn.style.alignItems = "center";
    // fsBtn.style.justifyContent = "center";
    // fsBtn.style.cursor = "pointer";
    // fsBtn.style.padding = "0";
    // fsBtn.style.zIndex = "10";

    if (getComputedStyle(container).position === "static") {
      container.style.position = "relative";
    }
    controls.appendChild(fsBtn);

    function toggleFullscreen() {
      if (!document.fullscreenElement) {
        container.requestFullscreen && container.requestFullscreen();
      } else {
        document.exitFullscreen && document.exitFullscreen();
      }
    }

    fsBtn.addEventListener("click", toggleFullscreen);

    document.addEventListener("fullscreenchange", () => {
      if (document.fullscreenElement === container) {
        enterFullscreenStyles();
      } else {
        exitFullscreenStyles();
      }
    });
  }

  /* ---------- WHEEL ZOOM ---------- */
  function attachWheelZoom() {
    ikrsvg.addEventListener(
      "wheel",
      (e) => {
        if (CTRL_WHEEL_ZOOM && !e.ctrlKey) return;

        e.preventDefault();

        const rect = ikrsvg.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const zoomIn = e.deltaY < 0;
        let newScale = currentScale * (zoomIn ? WHEEL_ZOOM_FACTOR : 1 / WHEEL_ZOOM_FACTOR);
        newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, newScale));
        if (newScale === currentScale) return;

        const scaleRatio = newScale / currentScale;

        // ✅ anchor for zoom:
        // - zoom IN  : around mouse
        // - zoom OUT : around SVG center
        let anchorX, anchorY;
        if (zoomIn) {
          anchorX = mouseX;
          anchorY = mouseY;
        } else {
          anchorX = rect.width / 2;
          anchorY = rect.height / 2;
        }

        ts.translate.x = anchorX - scaleRatio * (anchorX - ts.translate.x);
        ts.translate.y = anchorY - scaleRatio * (anchorY - ts.translate.y);

        currentScale = ts.scale = newScale;

        if (currentScale > 1 && !panEnabled) {
          panEnabled = true;
          ikrsvg.style.cursor = "grab";
          initPanning();
        } else if (currentScale === 1) {
          ts.translate.x = 0;
          ts.translate.y = 0;
          panEnabled = false;
          ikrsvg.style.cursor = "default";
        }

        applyTransform();
      },
      { passive: false }
    );
  }

  /* ---------- BUTTON ZOOM (center-based) ---------- */

  zoomInBtn.addEventListener("click", () => {
    let newScale = currentScale * BUTTON_ZOOM_FACTOR;
    newScale = Math.min(MAX_SCALE, newScale);

    if (newScale === currentScale) return;
    const rect = ikrsvg.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const scaleRatio = newScale / currentScale;

    // zoom around center
    ts.translate.x = cx - scaleRatio * (cx - ts.translate.x);
    ts.translate.y = cy - scaleRatio * (cy - ts.translate.y);

    currentScale = ts.scale = newScale;
    console.log(currentScale)

    if (currentScale > 1 && !panEnabled) {
      panEnabled = true;
      ikrsvg.style.cursor = "grab";
      initPanning();
    }

    applyTransform();
  });

  zoomOutBtn.addEventListener("click", () => {
    let newScale = currentScale / BUTTON_ZOOM_FACTOR;
    newScale = Math.max(MIN_SCALE, newScale);
    if (newScale === currentScale) return;

    const rect = ikrsvg.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const scaleRatio = newScale / currentScale;

    // ✅ zoom OUT around center too
    ts.translate.x = cx - scaleRatio * (cx - ts.translate.x);
    ts.translate.y = cy - scaleRatio * (cy - ts.translate.y);

    currentScale = ts.scale = newScale;

    if (currentScale === 1) {
      ts.translate.x = 0;
      ts.translate.y = 0;
      panEnabled = false;
      ikrsvg.style.cursor = "default";
    }

    applyTransform();
  });

  resetBtn.addEventListener("click", () => {
    currentScale = 1;
    ts.scale = 1;
    ts.translate.x = 0;
    ts.translate.y = 0;
    panEnabled = false;
    ikrsvg.style.cursor = "default";
    removePanning();
    applyTransform();
  });

  /* ---------- panning (unchanged) ---------- */
  let startX, startY, startTX, startTY;
  const isMobileDevice =
    /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  function initPanning() {
    if (isMobileDevice) {
      let panId = null;
      ikrsvg.addEventListener(
        "touchstart",
        (e) => {
          if (!panEnabled || e.touches.length !== 1) return;
          const t = e.touches[0];
          panId = t.identifier;
          startX = t.clientX;
          startY = t.clientY;
          startTX = ts.translate.x;
          startTY = ts.translate.y;
        },
        { passive: false }
      );

      ikrsvg.addEventListener(
        "touchmove",
        (e) => {
          if (!panEnabled || e.touches.length !== 1) return;
          const t = Array.from(e.touches).find(
            (tt) => tt.identifier === panId
          );
          if (!t) return;
          e.preventDefault();

          const dx = t.clientX - startX;
          const dy = t.clientY - startY;

          ts.translate.x = startTX + dx;
          ts.translate.y = startTY + dy;
          applyTransform();
        },
        { passive: false }
      );

      ikrsvg.addEventListener("touchend", () => (panId = null));
    } else {
      let panning = false;
      let isPointerDown = false;
      let hasMoved = false;
      let suppressClick = false;
      const DRAG_THRESHOLD = 4;

      ikrsvg.addEventListener("mousedown", (e) => {
        if (!panEnabled || e.button !== 0) return;
        panning = true;
        isPointerDown = true;
        hasMoved = false;

        e.preventDefault();
        document.body.style.userSelect = "none";

        ikrsvg.style.cursor = "grabbing";
        startX = e.clientX;
        startY = e.clientY;
        startTX = ts.translate.x;
        startTY = ts.translate.y;
      });

      ikrsvg.addEventListener("mousemove", (e) => {
        if (!panning || !isPointerDown) return;

        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        if (
          !hasMoved &&
          (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD)
        ) {
          hasMoved = true;
        }
        if (!hasMoved) return;

        ts.translate.x = startTX + dx;
        ts.translate.y = startTY + dy;
        applyTransform();
      });

      const stop = () => {
        if (!isPointerDown) return;

        panning = false;
        isPointerDown = false;

        document.body.style.userSelect = "";

        if (hasMoved) {
          suppressClick = true;
          setTimeout(() => {
            suppressClick = false;
          }, 0);
        }

        if (panEnabled) ikrsvg.style.cursor = "grab";
      };

      ikrsvg.addEventListener("mouseup", stop);
      ikrsvg.addEventListener("mouseleave", stop);

      ikrsvg.addEventListener(
        "click",
        (e) => {
          if (suppressClick) {
            e.preventDefault();
            e.stopPropagation();
            suppressClick = false;
          }
        },
        true
      );
    }
  }

  /* ---------- removePanning (your version) ---------- */
  function removePanning() {
    const clone = ikrsvg.cloneNode(true);
    ikrsvg.parentNode.replaceChild(clone, ikrsvg);

    const newSvg = document.getElementById(ikrsvg.id);
    ikrsvg = newSvg;
    ikrsvg.style.touchAction = "none";
    ikrsvg.style.cursor = "default";
    ikrsvg.style.transformOrigin = "0 0";

    if (isMobileDevice) {
      mapId.forEach((id) => {
        const el = ikrsvg.querySelector(`#${id}`);
        if (!el) return;

        const mapD = mapData.find((d) => d.id === id);
        if (!mapD) return;

        el.replaceWith(el.cloneNode(true));
        const freshEl = ikrsvg.querySelector(`#${id}`);

        freshEl.addEventListener(
          "touchstart",
          (ev) => {
            ev.preventDefault();

            if (typeof onLotHoverIn === "function") {
              onLotHoverIn(freshEl, mapD, ev);
            }
            handleShow(ev, freshEl, mapD);
          },
          { passive: false }
        );

        freshEl.addEventListener("touchend", (ev) => {
          handleHideOnMobile(freshEl);
        });
        // hide click for mobile devices
        // freshEl.addEventListener("click", (ev) => {
        //   // handleShow(ev, freshEl, mapD);
        // });
      });
    } else {
      mapId.forEach((id) => {
        const el = ikrsvg.querySelector(`#${id}`);
        if (!el) return;

        const mapD = mapData.find((d) => d.id === id);
        if (!mapD) return;

        el.replaceWith(el.cloneNode(true));
        const freshEl = ikrsvg.querySelector(`#${id}`);
        freshEl.addEventListener("mouseenter", (ev) => {
          handleShow(ev, freshEl, mapD);
          if (typeof onLotHoverIn === "function") {
            onLotHoverIn(freshEl, mapD, ev);
          }

        }

        );
        freshEl.addEventListener("mousemove", (ev) =>
          handleShow(ev, freshEl, mapD)
        );
        freshEl.addEventListener("mouseleave", (ev) => {
          handleHide(freshEl)
          if (typeof onLotHoverOut === "function") {
            onLotHoverOut(freshEl, mapD, ev);
          }
        }
        );
        freshEl.addEventListener("click", (ev) => {
          rcostClick_func(ev, freshEl, mapD);
        });
      });
      attachWheelZoom();
    }

    applyTransform();


    // tooltip related functions 

    // ====== Utilities ======
    function getClientPoint(ev) {
      if (ev.touches && ev.touches[0]) {
        return { x: ev.touches[0].clientX, y: ev.touches[0].clientY };
      }
      if (ev.changedTouches && ev.changedTouches[0]) {
        return { x: ev.changedTouches[0].clientX, y: ev.changedTouches[0].clientY };
      }
      return { x: ev.clientX, y: ev.clientY };
    }

    // Smart positioning inside tooltip's offsetParent
    function placeSmartInContainer(el, ev, pad = 8) {
      el.style.position = "absolute";

      const parent = el.offsetParent || document.body;
      const rect = parent.getBoundingClientRect();

      const cs = getComputedStyle(parent);
      const padL = parseFloat(cs.paddingLeft) || 0;
      const padT = parseFloat(cs.paddingTop) || 0;
      const padR = parseFloat(cs.paddingRight) || 0;
      const padB = parseFloat(cs.paddingBottom) || 0;

      const prevDisp = el.style.display;
      const prevVis = el.style.visibility;
      el.style.visibility = "hidden";
      el.style.display = "block";

      const w = el.offsetWidth;
      const h = el.offsetHeight;

      const pt = getClientPoint(ev);
      const relX = pt.x - rect.left - padL;
      const relY = pt.y - rect.top - padT;

      const contentW = rect.width - padL - padR;
      const contentH = rect.height - padT - padB;

      let left = relX + pad;
      let top = relY + pad;

      if (left + w > contentW) left = relX - w - pad;
      left = Math.max(0, Math.min(left, contentW - w));

      if (top + h > contentH) top = relY - h - pad;
      top = Math.max(0, Math.min(top, contentH - h));

      el.style.left = (left + padL) + "px";
      el.style.top = (top + padT) + "px";

      el.style.visibility = prevVis || "visible";
      el.style.display = prevDisp || "block";
    }
    function handleShow(ev, ct, mapD) {
      if (!mapD || !renderTooltipContent) return;

      ikr_toltipMove_on_zoom.innerHTML = renderTooltipContent(mapD);
      ikr_toltipMove_on_zoom.style.display = "block";
      placeSmartInContainer(ikr_toltipMove_on_zoom, ev, 12);
    }

    function handleHide(ct) {
      ikr_toltipMove_on_zoom.style.display = "none";
      ikr_toltipMove_on_zoom.innerHTML = "";
    }

    function handleHideOnMobile(ct) {
      // could call handleHide(ct) if you want
    }

function rcostClick_func(ev, ct, mapD) {
  if (!mapD || !mapD.id || !mapD.link) return;

  console.log("Clicked lot:", mapD.id, "->", mapD.link);

  // --- sanitize input, prevents injection ---
  const unit = encodeURIComponent(mapD.id.trim());

  const pathname = window.location.pathname || '/';
  const basePath = pathname.replace(/\/[^/]*$/, '/');
  let baseURL = window.location.origin;

      let finalURL = baseURL;
      
      if (basePath === "/all-nodes/"){
         finalURL = new URL(mapD.link, baseURL);
      } else{ 
            finalURL = new URL(mapD.link, baseURL + basePath);
      }
      finalURL.searchParams.set("unit", unit);
     
  
      window.location.href = finalURL.href;
}


  }

  /* ---------- init ---------- */
  attachWheelZoom();
  applyTransform();


}



// zoom for mobile deviceas p
function mobileZoom({
  ikrsvg_id, stage_id, mapId, mapData, ploat_btn_class = "plot-btn", 
  data_proprty_to_create_button = "lotNumber", animation_class = 'highlight'
}) {
  (() => {
    /* -------------------------------------------------------------
       1. GLOBALS & HELPERS
       ------------------------------------------------------------- */
    let previous_selected_element = null;
    let maxAllowedZoom = 10;  // ← Will increase dynamically after flyToShape

    const svgId = document.getElementById(ikrsvg_id);   // <svg>
    const stage = document.getElementById(stage_id);    // <g> that gets transformed

    const transform = { x: 0, y: 0, scale: 1 };
    let baseTransform = { x: 0, y: 0, scale: 1 };

    const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    function applyTransform() {
      stage.setAttribute(
        'transform',
        `translate(${transform.x},${transform.y}) scale(${transform.scale})`
      );
    }

    /* -------------------------------------------------------------
       2. SMART ANIMATION – duration ∝ distance
       ------------------------------------------------------------- */
    function animateTo(target, onUpdate = null, onDone = null) {
      const start = { ...transform };
      const dt = {
        x: target.x - start.x,
        y: target.y - start.y,
        scale: target.scale - start.scale,
      };

      const distance = Math.abs(dt.x) + Math.abs(dt.y) + Math.abs(dt.scale) * 200;
      const duration = Math.min(400, 100 + distance / 4);

      if (isMobile) svgId.classList.add('animating');

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
          if (isMobile) svgId.classList.remove('animating');
          if (onDone) onDone();
        }
      }
      requestAnimationFrame(step);
    }

    function computeFitTransform(bb, padding = 24) {
      const viewBox = svgId.getAttribute("viewBox");
      const parts = viewBox.split(" ").map(Number);
      const svgW = parts[2];
      const svgH = parts[3];

      const scale = Math.min(
        svgW / (bb.width + padding * 2),
        svgH / (bb.height + padding * 2)
      );
      const cx = bb.x + bb.width / 2;
      const cy = bb.y + bb.height / 2;
      return { x: svgW / 2 - scale * cx, y: svgH / 2 - scale * cy, scale };
    }

    /* -------------------------------------------------------------
       3. ZOOM MODULE (with dynamic max zoom)
       ------------------------------------------------------------- */
    const ZoomModule = {
      init() {
        document.getElementById('zoom_in')?.addEventListener('click', () => this.zoom(1.25));
        document.getElementById('zoom_out')?.addEventListener('click', () => this.zoom(0.8));
        document.getElementById('reset')?.addEventListener('click', this.reset.bind(this));

        svgId.addEventListener('wheel', e => {
          e.preventDefault();
          const r = svgId.getBoundingClientRect();
          this.zoom(e.deltaY < 0 ? 1.1 : 0.9, e.clientX - r.left, e.clientY - r.top);
        }, { passive: false });
      },

      zoom(factor, cx = 400, cy = 300) {
        const oldScale = transform.scale;
        const desiredScale = oldScale * factor;

        // ← DYNAMIC MAX ZOOM (with buffer)
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
      },
    };

    /* -------------------------------------------------------------
       4. PAN MODULE – Speed scales with zoom (even at 30x+)
       ------------------------------------------------------------- */
    const PanModule = (function () {
      let panEnabled = false;
      let startX = 0, startY = 0;
      let startTX = 0, startTY = 0;

      // ← NEW: Pan speed grows with scale (perfect even at 30x)
      function getPanSpeedFactor() {
        if (transform.scale <= 10) {
          // Keep your original comfortable speed at low zoom
          if (transform.scale <= 1) return 1;
          if (transform.scale <= 2) return 3;
          if (transform.scale <= 4) return 4;
          if (transform.scale <= 5) return 4;
          if (transform.scale <= 6) return 6;
          if (transform.scale <= 7) return 7;
          if (transform.scale <= 8) return 10;
          if (transform.scale <= 9) return 15;
          if (transform.scale <= 10) return   16;
          return 6;
        } else {
          // High zoom: speed = current scale + 2 → feels natural
          return Math.floor(transform.scale) + 3;
        }
      }

      function enable() {
        panEnabled = true;
        svgId.style.cursor = 'grab';
      }
      function disable() {
        panEnabled = false;
        svgId.style.cursor = 'default';
      }

      // Desktop
      function initDesktop() {
        let panning = false;
        svgId.addEventListener('mousedown', e => {
          if (!panEnabled || e.button !== 0) return;
          panning = true;
          svgId.style.cursor = 'grabbing';
          if (isMobile) svgId.classList.add('dragging');
          startX = e.clientX; startY = e.clientY;
          startTX = transform.x; startTY = transform.y;
        });

        svgId.addEventListener('mousemove', e => {
          if (!panning) return;
          const speed = getPanSpeedFactor();
          const dx = (e.clientX - startX) * speed / transform.scale;
          const dy = (e.clientY - startY) * speed / transform.scale;
          transform.x = startTX + dx;
          transform.y = startTY + dy;
          applyTransform();
        });

        const stop = () => {
          panning = false;
          if (panEnabled) svgId.style.cursor = 'grab';
          if (isMobile) svgId.classList.remove('dragging');
        };
        svgId.addEventListener('mouseup', stop);
        svgId.addEventListener('mouseleave', stop);
      }

      // Mobile
      function initMobile() {
        let panId = null;
        svgId.addEventListener('touchstart', e => {
          if (!panEnabled || e.touches.length !== 1) return;
          const t = e.touches[0];
          panId = t.identifier;
          svgId.classList.add('dragging');
          startX = t.clientX; startY = t.clientY;
          startTX = transform.x; startTY = transform.y;
        }, { passive: false });

        svgId.addEventListener('touchmove', e => {
          if (!panEnabled || e.touches.length !== 1) return;
          const t = Array.from(e.touches).find(tt => tt.identifier === panId);
          if (!t) return;
          e.preventDefault();

          const speed = getPanSpeedFactor();
          const dx = (t.clientX - startX) * speed / transform.scale;
          const dy = (t.clientY - startY) * speed / transform.scale;
          transform.x = startTX + dx;
          transform.y = startTY + dy;
          applyTransform();
        }, { passive: false });

        svgId.addEventListener('touchend', () => {
          panId = null;
          svgId.classList.remove('dragging');
        });
      }

      return {
        init() {
          svgId.style.touchAction = 'none';
          PanModule.enable();
          svgId.style.cursor = 'default';
          if (isMobile) initMobile();
          else initDesktop();
        },
        enable,
        disable,
        get enabled() { return panEnabled; },
      };
    })();

    /* -------------------------------------------------------------
       5. FLY-TO-ZOOM & SHAPE BUTTONS
       ------------------------------------------------------------- */
    function flyToShape(shapeEl) {
      const bb = shapeEl.getBBox();
      const target = computeFitTransform(bb, 24);

      // ← UPDATE MAX ZOOM based on this fly-to (allow going much further)
      maxAllowedZoom = Math.max(maxAllowedZoom, target.scale * 1.8);

      animateTo(target, null, () => {
        baseTransform = { ...target };
      });
    }

    // Render buttons (optional – you can keep both)
    function createNodeButtons(data, containerId, btnClass) {
      const button_container = document.getElementById(containerId);
      if (!button_container) return console.error("Container not found");
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
    // SELECT DROPDOWN (fully synced)
    function createNodeSelect(data, containerId, selectClass = "node-select") {
      const container = document.getElementById(containerId);
      if (!container) return console.error("Container not found");

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

    // Main click handler
    function handleNodeClick(node) {
      const select_svg_element = document.getElementById(node.id);
      if (!select_svg_element) return;

      // Restore previous
      if (previous_selected_element && previous_selected_element.parentNode) {
        const savedNextSibling = previous_selected_element.originalNextSibling;
        if (savedNextSibling && savedNextSibling.parentNode) {
          previous_selected_element.parentNode.insertBefore(previous_selected_element, savedNextSibling);
        } else {
          previous_selected_element.parentNode.appendChild(previous_selected_element);
        }
        previous_selected_element.classList.remove("selected-node");
        clearStrokeHover(previous_selected_element, animation_class);
        previous_selected_element.removeEventListener("touchstart", redirectHandler);
      }

      // Bring new to front
      select_svg_element.originalNextSibling = select_svg_element.nextSibling;
      select_svg_element.parentNode.appendChild(select_svg_element);
      select_svg_element.classList.add("selected-node");
      select_svg_element.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
      applyStrokeHover(select_svg_element, animation_class);
      flyToShape(select_svg_element);
      select_svg_element.dataset.nodeLink = node.link;
      select_svg_element.addEventListener("touchstart", redirectHandler);

      // Button active state
      document.querySelectorAll(".plot-btn").forEach(btn => btn.classList.remove("active-btn"));
      const currentBtn = document.querySelector(`[data-node-id="${node.id}"]`);
      if (currentBtn) currentBtn.classList.add("active-btn");

      // ← Sync select dropdown
      const selectEl = document.querySelector(".node-select");
      if (selectEl) selectEl.value = node.id;

      previous_selected_element = select_svg_element;
    }

 // Redirect on touch
function redirectHandler(e) {
  const target_id = e.currentTarget.id;

  const item = mapData.find(i => i.id === target_id);
  if (!item?.link) return;

  // --- sanitize ID to avoid injection ---
  const unit = encodeURIComponent(item.id.trim());

  // Current path (ex: "/Coastal-interactive-map/index.html")
  const pathname = window.location.pathname || "/";

  // Remove filename at end
  const basePath = pathname.replace(/\/[^/]*$/, "/");

  let baseURL = window.location.origin;

      let finalURL = baseURL;
      
      if (basePath === "/all-nodes/"){
         finalURL = new URL(item.link, baseURL);
      } else{ 
            finalURL = new URL(item.link, baseURL + basePath);
      }
      finalURL.searchParams.set("unit", unit);
     
  
      window.location.href = finalURL.href;
}



    // Optional: clear selection
    function deselectAll() {
      if (!previous_selected_element) return;
      const el = previous_selected_element;
      const saved = el.originalNextSibling;
      if (saved && saved.parentNode) {
        el.parentNode.insertBefore(el, saved);
      } else {
        el.parentNode.appendChild(el);
      }
      el.classList.remove("selected-node");
      clearStrokeHover(el, animation_class);
      el.removeEventListener("touchstart", redirectHandler);
      document.querySelectorAll(".plot-btn").forEach(b => b.classList.remove("active-btn"));
      const selectEl = document.querySelector(".node-select");
      if (selectEl) selectEl.value = "";
      previous_selected_element = null;
    }

    /* -------------------------------------------------------------
       6. INITIALISE
       ------------------------------------------------------------- */
    applyTransform();

    // Choose one or both:
    // createNodeButtons(mapData, 'buttonsContainer', ploat_btn_class);
    createNodeSelect(mapData, "buttonsContainer", "node-select");

    PanModule.init();
    ZoomModule.init();
  })();
}