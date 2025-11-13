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
  const container = svg.parentElement;
  const ikr_toltipMove_on_zoom = document.getElementById(tooltipElementId);

  /* ---------- CONFIG ---------- */
  const CTRL_WHEEL_ZOOM = false;            // Ctrl + wheel to zoom, plain wheel scrolls page
  const ENABLE_FULLSCREEN_BUTTON = true;    // toggle fullscreen button on/off
  const WHEEL_ZOOM_FACTOR = 1.1;           // ~Google Maps feel: 1.1–1.3 is nice
  const BUTTON_ZOOM_FACTOR = 1.2;
  /* ---------------------------- */

  // detect mobile device
  const isMobileDevice =
    /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  /* ---------- state ---------- */
  const ts = { scale: 1, translate: { x: 0, y: 0 }, rotate: 0 };
  let currentScale = 1;
  const MIN_SCALE = 1;
  let MAX_SCALE = null;

  if (isMobileDevice) {
    // increase max zoom for mobile devices
    MAX_SCALE = max_zoom + 8;
  } else {
    MAX_SCALE = max_zoom;
  }

  let panEnabled = false;

  /* ---------- buttons ---------- */
  const zoomInBtn = document.getElementById("zoom_in");
  const zoomOutBtn = document.getElementById("zoom_out");
  const resetBtn = document.getElementById("reset");

  ikrsvg.style.touchAction = "none";
  ikrsvg.style.cursor = "default";

  // make transforms predictable
  ikrsvg.style.transformOrigin = "0 0";

  /* ---------- store original size for fullscreen restore ---------- */
  const originalWidth = ikrsvg.style.width || "";
  const originalHeight = ikrsvg.style.height || "";

  /* ---------- apply transform ---------- */
  function applyTransform() {
    ikrsvg.style.transform =
      `translate(${ts.translate.x}px, ${ts.translate.y}px) scale(${ts.scale})`;
  }

  /* ---------- Reset helpers (BOTH behaviours) ---------- */

  // Only reset zoom/pan, keep existing listeners
  function resetViewOnly() {
    currentScale = 1;
    ts.scale = 1;
    ts.translate.x = 0;
    ts.translate.y = 0;
    panEnabled = false;
    ikrsvg.style.cursor = "default";
    applyTransform();
  }

  // Reset zoom/pan AND recreate listeners via removePanning()
  function resetViewAndPanning() {
    resetViewOnly();
    removePanning();
  }

  /* ---------- FULLSCREEN SUPPORT ---------- */
  function enterFullscreenStyles() {
    ikrsvg.style.width = "100%";
    ikrsvg.style.height = "100%";
    applyTransform();
  }

  function exitFullscreenStyles() {
    ikrsvg.style.width = originalWidth;
    ikrsvg.style.height = originalHeight;
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

    fsBtn.style.position = "absolute";
    fsBtn.style.right = "8px";
    fsBtn.style.top = "8px";
    fsBtn.style.width = "30px";
    fsBtn.style.height = "30px";
    fsBtn.style.border = "none";
    fsBtn.style.borderRadius = "4px";
    fsBtn.style.background = "rgba(255,255,255,0.9)";
    fsBtn.style.boxShadow = "0 1px 4px rgba(0,0,0,0.3)";
    fsBtn.style.display = "flex";
    fsBtn.style.alignItems = "center";
    fsBtn.style.justifyContent = "center";
    fsBtn.style.cursor = "pointer";
    fsBtn.style.padding = "0";
    fsBtn.style.zIndex = "10";

    if (getComputedStyle(container).position === "static") {
      container.style.position = "relative";
    }
    container.appendChild(fsBtn);

    function toggleFullscreen() {
      if (!document.fullscreenElement) {
        container.requestFullscreen && container.requestFullscreen();
      } else {
        document.exitFullscreen && document.exitFullscreen();
        // Exit behaviour handled in fullscreenchange
      }
    }

    fsBtn.addEventListener("click", toggleFullscreen);

    document.addEventListener("fullscreenchange", () => {
      if (document.fullscreenElement === container) {
        // ✅ Entered fullscreen:
        //  - keep your original behaviour: show map in reset view
        enterFullscreenStyles();
        resetViewOnly();
      } else {
        // ✅ Exited fullscreen (Esc, browser UI or button):
        //  - restore size
        //  - reset AND call removePanning()
        exitFullscreenStyles();
        resetViewAndPanning();
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

        // anchor for zoom:
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

    // zoom OUT around center too
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

  // Reset button: reset view + removePanning (your original behaviour)
  resetBtn.addEventListener("click", resetViewAndPanning);

  /* ---------- panning ---------- */
  let startX, startY, startTX, startTY;

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

  /* ---------- removePanning ---------- */
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

        freshEl.addEventListener("click", (ev) => {
          handleShow(ev, freshEl, mapD);
        });
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
        });

        freshEl.addEventListener("mousemove", (ev) =>
          handleShow(ev, freshEl, mapD)
        );

        freshEl.addEventListener("mouseleave", (ev) => {
          handleHide(freshEl);
          if (typeof onLotHoverOut === "function") {
            onLotHoverOut(freshEl, mapD, ev);
          }
        });

        freshEl.addEventListener("click", (ev) => {
          rcostClick_func(ev, freshEl, mapD);
        });
      });

      attachWheelZoom();
    }

    applyTransform();

    // ====== Utilities for tooltip ======
    function getClientPoint(ev) {
      if (ev.touches && ev.touches[0]) {
        return {
          x: ev.touches[0].clientX,
          y: ev.touches[0].clientY,
        };
      }
      if (ev.changedTouches && ev.changedTouches[0]) {
        return {
          x: ev.changedTouches[0].clientX,
          y: ev.changedTouches[0].clientY,
        };
      }
      return { x: ev.clientX, y: ev.clientY };
    }

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

      el.style.left = left + padL + "px";
      el.style.top = top + padT + "px";

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
      if (!mapD || !mapD.link) return;

      console.log("Clicked lot:", mapD.id, "->", mapD.link);
      window.location.href = "all-nodes/node-1.html";
    }
  }

  /* ---------- init ---------- */
  attachWheelZoom();
  applyTransform();
}
