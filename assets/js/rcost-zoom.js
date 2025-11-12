function ikrZoom(ikrsvg) {
  const container = ikrsvg.parentElement;

  // ================== CONFIG ==================
  const REQUIRE_CTRL_FOR_WHEEL = false;   // true => require Ctrl + wheel
  const ENABLE_FULLSCREEN_BUTTON = true;  // false => disable fullscreen button
  const PAN_PADDING = 0.18;               // extra pan beyond edges (normal mode)
  // ============================================

  // ---------- state ----------
  const ts = {
    scale: 1,
    translate: { x: 0, y: 0 },
  };
  let currentScale = 1;
  let isFullscreen = false; // <--- IMPORTANT

  const STEP = 0.2;
  const MAX_SCALE = 8;
  const MIN_SCALE = 1;

  let panEnabled = false;

  const zoomInBtn  = document.getElementById("zoom_in");
  const zoomOutBtn = document.getElementById("zoom_out");
  const resetBtn   = document.getElementById("reset");

  ikrsvg.style.touchAction = "none";
  ikrsvg.style.cursor = "default";

  const isMobileDevice =
    /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  // ---------- intrinsic SVG size (fixed) ----------
  let baseW, baseH;

  if (ikrsvg.viewBox && ikrsvg.viewBox.baseVal && ikrsvg.viewBox.baseVal.width) {
    baseW = ikrsvg.viewBox.baseVal.width;
    baseH = ikrsvg.viewBox.baseVal.height;
  } else {
    const rect = ikrsvg.getBoundingClientRect();
    baseW = rect.width;
    baseH = rect.height;
  }

  // ---------- center SVG in container (NORMAL MODE ONLY) ----------
  function centerSvg() {
    const cw = container.clientWidth;
    const ch = container.clientHeight;

    const scaledW = baseW * ts.scale;
    const scaledH = baseH * ts.scale;

    // horizontal: center if smaller, else left-aligned
    if (scaledW < cw) {
      ts.translate.x = (cw - scaledW) / 2;
    } else {
      ts.translate.x = 0;
    }

    // vertical: center if smaller, else top-aligned
    if (scaledH < ch) {
      ts.translate.y = (ch - scaledH) / 2;
    } else {
      ts.translate.y = 0;
    }
  }

  // ---------- clamp translation ----------
  function clampTranslate() {
    const cw = container.clientWidth;
    const ch = container.clientHeight;

    const scaledW = baseW * ts.scale;
    const scaledH = baseH * ts.scale;

    let minX, maxX, minY, maxY;

    if (isFullscreen) {
      // ===== FULLSCREEN CLAMPING =====
      // No centering; we want (0,0) to be valid and top-left anchored.

      // Horizontal
      if (scaledW <= cw) {
        // SVG is narrower than screen → just fix at x=0 (no centering)
        minX = maxX = 0;
      } else {
        // SVG wider than screen → allow panning from fully left to fully right
        minX = cw - scaledW;
        maxX = 0;
      }

      // Vertical
      if (scaledH <= ch) {
        minY = maxY = 0; // top anchored
      } else {
        minY = ch - scaledH;
        maxY = 0;
      }
    } else {
      // ===== NORMAL MODE CLAMPING (with padding, map-feel) =====
      if (scaledW <= cw) {
        const centerX = (cw - scaledW) / 2;
        minX = maxX = centerX;
      } else {
        const extraX = scaledW * PAN_PADDING;
        minX = cw - scaledW - extraX;
        maxX = extraX;
      }

      if (scaledH <= ch) {
        const centerY = (ch - scaledH) / 2;
        minY = maxY = centerY;
      } else {
        const extraY = scaledH * PAN_PADDING;
        minY = ch - scaledH - extraY;
        maxY = extraY;
      }
    }

    if (ts.translate.x < minX) ts.translate.x = minX;
    if (ts.translate.x > maxX) ts.translate.x = maxX;
    if (ts.translate.y < minY) ts.translate.y = minY;
    if (ts.translate.y > maxY) ts.translate.y = maxY;
  }

  // ---------- apply transform ----------
  function applyTransform() {
    clampTranslate();
    ikrsvg.style.transform =
      `translate(${ts.translate.x}px, ${ts.translate.y}px) scale(${ts.scale})`;
  }

  // ---------- fit SVG completely into container (for fullscreen) ----------
  function fitToContainer() {
    const cw = container.clientWidth;
    const ch = container.clientHeight;

    const scaleX = cw / baseW;
    const scaleY = ch / baseH;

    const fitScale = Math.max(
      MIN_SCALE,
      Math.min(MAX_SCALE, Math.min(scaleX, scaleY))
    );

    ts.scale = fitScale;
    currentScale = fitScale;
  }

  // ---------- fullscreen handling ----------
  const originalWidth  = ikrsvg.style.width  || "";
  const originalHeight = ikrsvg.style.height || "";

  function enterFullscreenStyles() {
    isFullscreen = true;

    ikrsvg.style.width  = "100%";
    ikrsvg.style.height = "100%";

    // scale to fit screen, no centering translation
    fitToContainer();
    ts.translate.x = 0;
    ts.translate.y = 0;

    panEnabled = currentScale > 1;
    ikrsvg.style.cursor = panEnabled ? "grab" : "default";

    applyTransform();
  }

  function exitFullscreenStyles() {
    isFullscreen = false;

    ikrsvg.style.width  = originalWidth;
    ikrsvg.style.height = originalHeight;

    // back to normal view: base scale 1, centered
    ts.scale = 1;
    currentScale = 1;
    panEnabled = false;
    ikrsvg.style.cursor = "default";

    centerSvg();
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

    container.style.position = container.style.position || "relative";
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

  // ---------- wheel zoom ----------
  function attachWheelZoom() {
    ikrsvg.addEventListener(
      "wheel",
      (e) => {
        if (REQUIRE_CTRL_FOR_WHEEL && !e.ctrlKey) {
          return; // no zoom, let page scroll
        }

        const delta = e.deltaY;
        const direction = delta < 0 ? 1 : -1; // up = zoom in

        let newScale = currentScale + STEP * direction;
        newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, newScale));

        const tryingToZoomOutAtMin =
          currentScale === MIN_SCALE && direction === -1;

        if (tryingToZoomOutAtMin || newScale === currentScale) {
          return;
        }

        e.preventDefault(); // we are zooming → block page scroll

        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const prevScale = currentScale;
        const scaleRatio = newScale / prevScale;

        ts.translate.x = mouseX - scaleRatio * (mouseX - ts.translate.x);
        ts.translate.y = mouseY - scaleRatio * (mouseY - ts.translate.y);

        currentScale = ts.scale = newScale;

        if (currentScale > 1 && !panEnabled) {
          panEnabled = true;
          ikrsvg.style.cursor = "grab";
          initPanning();
        } else if (currentScale === 1 && panEnabled && !isFullscreen) {
          // only re-center in NORMAL mode at base zoom
          centerSvg();
          panEnabled = false;
          ikrsvg.style.cursor = "default";
        }

        applyTransform();
      },
      { passive: false }
    );
  }

  // ---------- button zoom ----------
  zoomInBtn.addEventListener("click", () => {
    let newScale = Math.min(MAX_SCALE, currentScale + STEP);
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
    let newScale = Math.max(MIN_SCALE, currentScale - STEP);
    currentScale = ts.scale = newScale;

    if (currentScale === 1 && !isFullscreen) {
      ts.scale = 1;
      centerSvg();
      panEnabled = false;
      ikrsvg.style.cursor = "default";
    }

    applyTransform();
  });

  resetBtn.addEventListener("click", () => {
    currentScale = 1;
    ts.scale = 1;

    if (!isFullscreen) {
      centerSvg();
      panEnabled = false;
      ikrsvg.style.cursor = "default";
    } else {
      // in fullscreen, keep top-left at (0,0) on reset
      ts.translate.x = 0;
      ts.translate.y = 0;
      panEnabled = false;
      ikrsvg.style.cursor = "default";
    }

    applyTransform();
  });

  // ---------- panning ----------
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
      const DRAG_THRESHOLD = 5;

      ikrsvg.addEventListener("mousedown", (e) => {
        if (!panEnabled || e.button !== 0) return;
        panning = true;
        isPointerDown = true;
        hasMoved = false;

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

  // ---------- init ----------
  centerSvg();       // center only in normal mode
  attachWheelZoom();
  applyTransform();

  // Optional: recenter on resize when at base zoom in normal mode
  window.addEventListener("resize", () => {
    if (currentScale === 1 && !panEnabled && !isFullscreen) {
      centerSvg();
      applyTransform();
    }
  });
}
