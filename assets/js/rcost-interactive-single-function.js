 function initNodeMap({
    mapData,
    mapId,
    tooltipElementId = "ikr_toltipMove",
    svgElementId = "ikr_svg",
    renderTooltipContent,
    tooltipLeft = 0,
    tooltipTop = 0,
    onLotHoverIn,
    onLotHoverOut
  }) {
    const ikr_svg = document.getElementById(svgElementId);
    const tooltipMove = document.getElementById(tooltipElementId);

    if (!tooltipMove) {
      console.warn("Tooltip element not found:", tooltipElementId);
      return;
    }

    function getClientPoint(ev) {
      if (ev.touches && ev.touches[0]) {
        return { x: ev.touches[0].clientX, y: ev.touches[0].clientY };
      }
      if (ev.changedTouches && ev.changedTouches[0]) {
        return {
          x: ev.changedTouches[0].clientX,
          y: ev.changedTouches[0].clientY
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

      el.style.left = left + padL + tooltipLeft + "px";
      el.style.top = top + padT + tooltipTop + "px";

      el.style.visibility = prevVis || "visible";
      el.style.display = prevDisp || "block";
    }

    function isMobile() {
      return /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    }

    function handleShow(ev, ct, mapD) {
      if (!mapD || !renderTooltipContent) return;

      tooltipMove.innerHTML = renderTooltipContent(mapD);
      tooltipMove.style.display = "block";
      placeSmartInContainer(tooltipMove, ev, 12);
    }

    function handleHide(ct) {
      tooltipMove.style.display = "none";
      tooltipMove.innerHTML = "";
    }

    function handleHideOnMobile(ct) {
      // could call handleHide(ct) if you want
    }

    function rcostClick_func(ev, ct, mapD) {
      if (!mapD || !mapD.link) return;
      // example: just log instead of redirect
      console.log("Clicked lot:", mapD.id, "->", mapD.link);
      // window.location.href = mapD.link;
     window.location.href = 'all-nodes/node-1.html';  // No ../ needed
      // get the home url  

       

    }

    // Init default colors if provided
    window.addEventListener("load", () => {
      mapId.forEach((id) => {
        const el = document.querySelector(`#${id}`);
        if (!el) return;
        const data = mapData.find((d) => d.id === id);
        if (data && data.mapColor) {
          el.style.fill = `#${data.mapColor}`;
        }
      });
    });

    // Bind events
    mapId.forEach((id) => {
      const el = document.querySelector(`#${id}`);
      if (!el) return;

      const mapD = mapData.find((d) => d.id === id);
      if (!mapD) return;

      if (isMobile()) {
        el.addEventListener(
          "touchstart",
          (ev) => {
            ev.preventDefault();
            if (typeof onLotHoverIn === "function") {
              onLotHoverIn(el, mapD, ev);
            }
            handleShow(ev, el, mapD);
            rcostClick_func(ev, el, mapD);
          },
          { passive: false }
        );

        el.addEventListener("touchend", (ev) => {
          if (typeof onLotHoverOut === "function") {
           setTimeout(() => {
             onLotHoverOut(el, mapD, ev);
           }, 500);
          }
          handleHideOnMobile(el);
        });

        el.addEventListener("click", (ev) => {
          handleShow(ev, el, mapD);
        });
      } else {
        el.addEventListener("mouseenter", (ev) => {
          if (typeof onLotHoverIn === "function") {
            onLotHoverIn(el, mapD, ev);
          }
          handleShow(ev, el, mapD);
        });

        el.addEventListener("mousemove", (ev) => {
          handleShow(ev, el, mapD);
        });

        el.addEventListener("mouseleave", (ev) => {
          if (typeof onLotHoverOut === "function") {
            onLotHoverOut(el, mapD, ev);
          }
          handleHide(el);
        });

        el.addEventListener("click", (ev) => {
          rcostClick_func(ev, el, mapD);
        });
      }
    });

    // Hide tooltip when clicking outside paths
    window.addEventListener("click", (ev) => {
      if (ev.target && ev.target.tagName.toLowerCase() !== "path") {
        tooltipMove.style.display = "none";
      }
    });
  }
