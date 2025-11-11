function ikrZoom(ikrsvg) {
  const container = ikrsvg.parentElement;

  // ----- state -----
  const ts = {
    scale: 1,
    translate: { x: 0, y: 0 },
  };
  let currentScale = 1;

  const STEP = 0.2;
  const MAX_SCALE = 8;
  const MIN_SCALE = 1;

  let panEnabled = false;

  // buttons
  const zoomInBtn  = document.getElementById("zoom_in");
  const zoomOutBtn = document.getElementById("zoom_out");
  const resetBtn   = document.getElementById("reset");

  ikrsvg.style.touchAction = "none";
  ikrsvg.style.cursor = "default";

  const isMobileDevice =
    /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  // ----- measure base size of the SVG (at scale 1) -----
  // IMPORTANT: call this AFTER the SVG has been laid out (e.g. on window load)
  const baseRect = ikrsvg.getBoundingClientRect();
  const baseW = baseRect.width;
  const baseH = baseRect.height;

  // We treat ts.translate as offset from TOP-LEFT of container.
  // At scale 1, we start with whatever position you want:
  // align left/top = 0,0; or center if you prefer.
  ts.translate.x = 0;
  ts.translate.y = 0;

  // ----- clamp translation so the svg never exposes whitespace -----
  function clampTranslate() {
    const cw = container.clientWidth;
    const ch = container.clientHeight;

    const scaledW = baseW * ts.scale;
    const scaledH = baseH * ts.scale;

    // If SVG smaller than container in a direction, keep it centered in that axis.
    let minX, maxX, minY, maxY;

    if (scaledW <= cw) {
      const centerX = (cw - scaledW) / 2;
      minX = maxX = centerX;
    } else {
      minX = cw - scaledW;
      maxX = 0;
    }

    if (scaledH <= ch) {
      const centerY = (ch - scaledH) / 2;
      minY = maxY = centerY;
    } else {
      minY = ch - scaledH;
      maxY = 0;
    }

    if (ts.translate.x < minX) ts.translate.x = minX;
    if (ts.translate.x > maxX) ts.translate.x = maxX;
    if (ts.translate.y < minY) ts.translate.y = minY;
    if (ts.translate.y > maxY) ts.translate.y = maxY;
  }

  // ----- apply transform -----
  function applyTransform() {
    clampTranslate();
    const t = `translate(${ts.translate.x}px, ${ts.translate.y}px) scale(${ts.scale})`;
    ikrsvg.style.transform = t;
  }

  // ----- wheel zoom (desktop) -----
  function attachWheelZoom() {
    ikrsvg.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();

        const delta = e.deltaY;
        const direction = delta < 0 ? 1 : -1; // up = zoom in
        let newScale = currentScale + STEP * direction;
        newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, newScale));

        if (newScale === currentScale) return;

        // Zoom into the mouse position
        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const prevScale = currentScale;
        const scaleRatio = newScale / prevScale;

        // adjust translation so point under cursor stays fixed
        ts.translate.x = mouseX - scaleRatio * (mouseX - ts.translate.x);
        ts.translate.y = mouseY - scaleRatio * (mouseY - ts.translate.y);

        currentScale = ts.scale = newScale;

        if (currentScale > 1 && !panEnabled) {
          panEnabled = true;
          ikrsvg.style.cursor = "grab";
          initPanning();
        } else if (currentScale === 1 && panEnabled === true) {
          // auto-recentre when fully zoomed out
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

  // ----- button zoom -----
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
    applyTransform();
  });

  // ----- panning -----
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
          const dx = (t.clientX - startX);
          const dy = (t.clientY - startY);
          ts.translate.x = startTX + dx;
          ts.translate.y = startTY + dy;
          applyTransform();
        },
        { passive: false }
      );

      ikrsvg.addEventListener("touchend", () => (panId = null));
    } else {
      let panning = false;

      ikrsvg.addEventListener("mousedown", (e) => {
        if (!panEnabled || e.button !== 0) return;
        panning = true;
        ikrsvg.style.cursor = "grabbing";
        startX = e.clientX;
        startY = e.clientY;
        startTX = ts.translate.x;
        startTY = ts.translate.y;
      });

      ikrsvg.addEventListener("mousemove", (e) => {
        if (!panning) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        ts.translate.x = startTX + dx;
        ts.translate.y = startTY + dy;
        applyTransform();
      });

      const stop = () => {
        panning = false;
        if (panEnabled) ikrsvg.style.cursor = "grab";
      };

      ikrsvg.addEventListener("mouseup", stop);
      ikrsvg.addEventListener("mouseleave", stop);
    }
  }

  // ----- init -----
  attachWheelZoom();
  applyTransform();
}
