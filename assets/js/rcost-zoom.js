function ikrZoom(ikrsvg) {
  const container = ikrsvg.parentElement;

  /* ---------- CONFIG ---------- */
  const CTRL_WHEEL_ZOOM = false;             // Ctrl + wheel to zoom, plain wheel scrolls page
  const ENABLE_FULLSCREEN_BUTTON = true;    // toggle fullscreen button on/off
  const WHEEL_ZOOM_FACTOR = 1.02;            // ~Google Maps feel: 1.1–1.3 is nice
  const button_ZOOM_FACTOR = 1.2;            // ~Google Maps feel: 1.1–1.3 is nice
  /* ---------------------------- */

  /* ---------- state ---------- */
  const ts = { scale: 1, translate: { x: 0, y: 0 }, rotate: 0 };
  let currentScale = 1;
  const MIN_SCALE = 1;
  const MAX_SCALE = 8;

  let panEnabled = false;

  /* ---------- buttons ---------- */
  const zoomInBtn  = document.getElementById("zoom_in");
  const zoomOutBtn = document.getElementById("zoom_out");
  const resetBtn   = document.getElementById("reset");

  ikrsvg.style.touchAction = "none";
  ikrsvg.style.cursor = "default";

  /* ---------- store original size for fullscreen restore ---------- */
  const originalWidth  = ikrsvg.style.width  || "";
  const originalHeight = ikrsvg.style.height || "";

  /* ---------- apply transform ---------- */
  function applyTransform() {
    ikrsvg.style.transform =
      `translate(${ts.translate.x}px, ${ts.translate.y}px) scale(${ts.scale})`;
  }

  /* ---------- FULLSCREEN SUPPORT ---------- */
  function enterFullscreenStyles() {
    ikrsvg.style.width  = "100%";
    ikrsvg.style.height = "100%";
    applyTransform();
  }

  function exitFullscreenStyles() {
    ikrsvg.style.width  = originalWidth;
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

  /* ---------- helper: blend translate toward origin on zoom-out ---------- */
  function gentlyRecenterTranslation(newScale) {
    // t = 1 at MAX_SCALE, 0 at MIN_SCALE
    const t = (newScale - MIN_SCALE) / (MAX_SCALE - MIN_SCALE);
    const clampT = Math.max(0, Math.min(1, t));

    // The smaller the scale, the more we pull translation back toward (0,0)
    ts.translate.x *= clampT;
    ts.translate.y *= clampT;
  }

  /* ---------- WHEEL ZOOM (Google-map style) ---------- */
  function attachWheelZoom() {
    ikrsvg.addEventListener(
      "wheel",
      (e) => {
        // Without Ctrl: let page scroll normally
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

        // Zoom relative to mouse position
        ts.translate.x = mouseX - scaleRatio * (mouseX - ts.translate.x);
        ts.translate.y = mouseY - scaleRatio * (mouseY - ts.translate.y);

        // If we are zooming OUT, gently pull map back toward origin
        if (!zoomIn) {
          gentlyRecenterTranslation(newScale);
        }

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

  /* ---------- button zoom (same behaviour as wheel) ---------- */
  zoomInBtn.addEventListener("click", () => {
    let newScale = currentScale * button_ZOOM_FACTOR;
    newScale = Math.min(MAX_SCALE, newScale);
    if (newScale === currentScale) return;

    currentScale = ts.scale = newScale;

    if (currentScale > 1 && !panEnabled) {
      panEnabled = true;
      ikrsvg.style.cursor = "grab";
      initPanning();
    }

    applyTransform();
  });

  zoomOutBtn.addEventListener("click", () => {
    let newScale = currentScale / button_ZOOM_FACTOR;
    newScale = Math.max(MIN_SCALE, newScale);

    // when zooming out via button, gently recenter too
    if (newScale < currentScale) {
      gentlyRecenterTranslation(newScale);
    }

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
    removePanning(); // your existing re-clone + tooltip rebind
    applyTransform();
  });

  /* ---------- panning ---------- */
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

          // ⚠️ CHANGE: no division by scale → pan speed feels same at all zoom levels
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

        // ⚠️ CHANGE: no division by scale → same screen pan speed at any zoom
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

  /* ---------- removePanning (your original logic) ---------- */
  function removePanning() {
    const clone = ikrsvg.cloneNode(true);
    ikrsvg.parentNode.replaceChild(clone, ikrsvg);

    const newSvg = document.getElementById(ikrsvg.id);
    ikrsvg = newSvg;
    ikrsvg.style.touchAction = "none";
    ikrsvg.style.cursor = "default";

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
        freshEl.addEventListener("mouseenter", (ev) =>
          handleShow(ev, freshEl, mapD)
        );
        freshEl.addEventListener("mousemove", (ev) =>
          handleShow(ev, freshEl, mapD)
        );
        freshEl.addEventListener("mouseleave", () =>
          handleHide(freshEl)
        );
      });
    }

    applyTransform();
  }

  /* ---------- init ---------- */
  attachWheelZoom();
  applyTransform();
}
