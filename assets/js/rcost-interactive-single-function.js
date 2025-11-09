function initNodeMap({
    mapData,
    mapId,
    tooltipElementId = "ikr_toltipMove",
    svgElementId = "ikr_svg",
    renderTooltipContent, // (mapD) => string (HTML)
    tooltipLeft = 0,
    tooltipTop = 0
}) {
    
    // ====== BASIC CONSTS (same as before) ======
    const avalible_color = "green";
    const sold_color = "red";

    const ikr_btnTxt = document.getElementById("ikr_btnTxt");
    const ikr_svg = document.getElementById(svgElementId);
    const Shape = ikr_svg ? ikr_svg.getElementById("Layer_5") : null;

    const tooltipMove = document.getElementById(tooltipElementId);
    if (!tooltipMove) {
        console.warn("Tooltip element not found:", tooltipElementId);
        return;
    }

    // ====== Utilities (same as before) ======
    function getClientPoint(ev) {
        if (ev.touches && ev.touches[0]) {
            return { x: ev.touches[0].clientX, y: ev.touches[0].clientY };
        }
        if (ev.changedTouches && ev.changedTouches[0]) {
            return {
                x: ev.changedTouches[0].clientX,
                y: ev.changedTouches[0].clientY,
            };
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

        // use tooltipLeft / tooltipTop from outer scope
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

    // ====== INIT COLORS ON LOAD (same logic) ======
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

    // ====== EVENT HANDLERS (same behaviour) ======
    function handleShow(ev, ct, mapD) {
        console.log("hello");
        if (!mapD || !renderTooltipContent) return;

        tooltipMove.innerHTML = renderTooltipContent(mapD);
        tooltipMove.style.display = "block";
        placeSmartInContainer(tooltipMove, ev, 12);
    }

    function handleHideOnMobile(ct) {
        // tooltipMove.style.display = "none";
        // tooltipMove.innerHTML = "";
    }

    function handleHide(ct) {
        if (ct) {
            ct.classList.remove("availableLot", "soldLot");
        }
        tooltipMove.style.display = "none";
        tooltipMove.innerHTML = "";
    }

    function rcostClick_func(ev, ct, mapD) {
        if (!mapD) return;
        window.location.href = mapD.link;
    }

    // ====== BIND LISTENERS (same logic) ======
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
                    handleShow(ev, el, mapD);
                    rcostClick_func(ev, el, mapD);
                },
                { passive: false }
            );

            el.addEventListener("touchend", (ev) => {
                handleHideOnMobile(el);
            });

            el.addEventListener("click", (ev) => {
                handleShow(ev, el, mapD);
            });
        } else {
            el.addEventListener("mouseenter", (ev) => handleShow(ev, el, mapD));
            el.addEventListener("mousemove", (ev) => handleShow(ev, el, mapD));
            // el.addEventListener("mouseleave", () => handleHide(el));
            el.addEventListener("click", (ev) => {
                rcostClick_func(ev, el, mapD);
            });
        }
    });

    window.addEventListener("click", (ev) => {
        if (ev.target && ev.target.tagName.toLowerCase() !== "path") {
            tooltipMove.style.display = "none";
        }
    });
}
