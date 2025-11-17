
const avalible_color = "green";
const sold_color = "red";
const mapData = [
  {
    id: "node_1",
    node_number: "Node 1 ",
    lotNumber: "210",
    nodeSubtitle: 'RENSHAW CENTRAL',
    imageUrl: 'assets/images/node-tooltip-images/node-1.png',

    link: "../../all nods/node-1.html",
    use: "Residential",
    size: "714 000 m²",
    description: "Renshaw Central is the largest residential property development node."


  },

  {
    id: "node_2",
    node_number: "Node 2 ",
    lotNumber: "143",
    nodeSubtitle: 'CLANSTHAL',
    imageUrl: 'assets/images/node-tooltip-images/node-2.png',
    link: "../../all nods/node-2.html",
    use: "Residential",
    size: "402 000 m²",
    description: "Planned for Clansthal, is a luxury housing development featuring contemporary aesthetics."
  },


  {
    id: "node_3",
    node_number: "Node 3 ",
    lotNumber: "85",
    nodeSubtitle: 'INTERCHANGE',
    imageUrl: 'assets/images/node-tooltip-images/node-3-01.png',
    link: "../../all nods/node-3.html",
    use: "Commercial",
    size: "535 000 m²",
    description: "The Renshaw Coastal Precinct Interchange will be the nucleus of the development – as the social and business hub. The area’s first private hospital. Office parks. Light commercial zones. A shopping centre. The area’s first private school."
  },

  {
    id: "node_4",
    node_number: "Node 4 ",
    lotNumber: "7",
    nodeSubtitle: 'RENSHAW NORTH',
    imageUrl: 'assets/images/node-tooltip-images/node-4.png',
    link: "../../all nods/node-4.html",
    use: "Residential",
    size: "527 000 m²",
    description: "Renshaw North will boast luxury villas, seated within indigenous forest overlooking the ocean. An equestrian centre, indigenous nursery and a resort village are also included within the envisaged infrastructure."
  },

  {
    id: "node_5",
    node_number: "Node 5 ",
    lotNumber: "111",
    nodeSubtitle: 'RENSHAW SOUTH',
    imageUrl: 'assets/images/node-tooltip-images/node-5.png',
    link: "../../all nods/node-5.html",
    use: "Residential",
    size: "457 000 m²",
    description: "Renshaw South is to feature a special residential development. Group housing and small-holding plots will also be available. While some land is reserved for conservation, a community facility and light commercial opportunities are planned."
  },

];

let mapId = [

  "node_2-2",
  "node_3-2",
  "node_1-2",
  "node_5-2",
  "node_4-2"


];



function renderTooltipContent(mapD) {
  // mapD is expected to have:
  // mapD.nodeName, mapD.nodeSubtitle, mapD.imageUrl,
  // mapD.area, mapD.sites, mapD.desc1, mapD.desc2, mapD.desc3

  const nodeName = mapD.node_number;
  const nodeSubtitle = mapD.nodeSubtitle || (mapD.developmentType || "");
  const area = mapD.area || mapD.size || "";
  const sites = mapD.lotNumber || "";
  const img = mapD.imageUrl || "https://via.placeholder.com/600x300";

  return `
    <div class="rcost-plot-tooltip">
      <div class="node-tooltip">
        <div class="node-tooltip__image-wrapper">
          <img
            src="${img}"
            alt="${nodeName}"
            class="node-tooltip__image"
          />
          <div class="node-tooltip__badge">
            <div class="node-tooltip__badge-title"> Node ${nodeName}</div>
            <div class="node-tooltip__badge-subtitle">
              ${nodeSubtitle}
            </div>
          </div>
        </div>

        <div class="node-tooltip__body">
          <div class="node-tooltip__metrics">
            <div class="node-tooltip__metric-main">
              <span class="node-tooltip__metric-value"><strong>${area}</strong></span>
            </div>
            ${sites
      ? `<div class="node-tooltip__metric-sub"><strong>${sites} Sites</strong></div>`
      : ""
    }
          </div>

          <div class="node-tooltip__divider"></div>

          <div class="node-tooltip__text">
            ${mapD.description
      ? `<p><strong>${mapD.description}</strong></p>`
      : ""
    }
           
          </div>
        </div>
      </div>
    </div>
  `;
}





// create the node buttons for mobile view

  //  createNodeButtons(mapData, "node_number", "buttonsContainer");

  const shapeButtonsContainer = document.getElementById('shapeButtons');


  






// add fly to zoom logic only for mobile view 

if (isMobile_devices) {
  (() => {
    /* -------------------------------------------------------------
       1. GLOBALS & HELPERS
       ------------------------------------------------------------- */
    let previous_selected_element = null;
    const map   = document.getElementById('ikr_svg');   // <svg>
    const stage = document.getElementById('stage');    // <g> that gets transformed

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

      // Distance heuristic (px + scale*200)
      const distance = Math.abs(dt.x) + Math.abs(dt.y) + Math.abs(dt.scale) * 200;
      const duration = Math.min(400, 100 + distance / 4);   // 100-400 ms

      // Add .animating class for low-quality image (mobile)
      if (isMobile) map.classList.add('animating');

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
          if (isMobile) map.classList.remove('animating');
          if (onDone) onDone();
        }
      }
      requestAnimationFrame(step);
    }

    function computeFitTransform(bb, padding = 24) {

      // get the viewBox attribute
const viewBox =map.getAttribute("viewBox");  // "0 0 640 640"

// split into numbers
const parts = viewBox.split(" ").map(Number);

// last two values = width and height
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
       3. ZOOM MODULE
       ------------------------------------------------------------- */
    const ZoomModule = {
      init() {
        document.getElementById('zoom_in')
          .addEventListener('click', () => this.zoom(1.25));
        document.getElementById('zoom_out')
          .addEventListener('click', () => this.zoom(0.8));
        document.getElementById('reset')
          .addEventListener('click', this.reset.bind(this));

        map.addEventListener('wheel', e => {
          e.preventDefault();
          const r = map.getBoundingClientRect();
          this.zoom(e.deltaY < 0 ? 1.1 : 0.9, e.clientX - r.left, e.clientY - r.top);
        }, { passive: false });
      },

      zoom(factor, cx = 400, cy = 300) {
        const oldScale = transform.scale;
        const newScale = Math.max(0.1, Math.min(5, oldScale * factor));

        // Enable panning **only** on first zoom-in
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
       4. PAN MODULE – FAST + LOW-QUALITY IMAGE WHILE DRAGGING
       ------------------------------------------------------------- */
    const PAN_SPEED_FACTOR = 1;

    const PanModule = (function () {
      let panEnabled = false;
      let startX = 0, startY = 0;
      let startTX = 0, startTY = 0;

      function enable() {
        panEnabled = true;
        map.style.cursor = 'grab';
      }
      function disable() {
        panEnabled = false;
        map.style.cursor = 'default';
      }

      // Desktop
      function initDesktop() {
        let panning = false;

        map.addEventListener('mousedown', e => {
          if (!panEnabled || e.button !== 0) return;
          panning = true;
          map.style.cursor = 'grabbing';
          if (isMobile) map.classList.add('dragging');

          startX = e.clientX; startY = e.clientY;
          startTX = transform.x; startTY = transform.y;
        });

        map.addEventListener('mousemove', e => {
          if (!panning) return;
          const dx = (e.clientX - startX) * PAN_SPEED_FACTOR / transform.scale;
          const dy = (e.clientY - startY) * PAN_SPEED_FACTOR / transform.scale;
          transform.x = startTX + dx;
          transform.y = startTY + dy;
          applyTransform();
        });

        const stop = () => {
          panning = false;
          if (panEnabled) map.style.cursor = 'grab';
          if (isMobile) map.classList.remove('dragging');
        };
        map.addEventListener('mouseup', stop);
        map.addEventListener('mouseleave', stop);
      }

      // Mobile
      function initMobile() {
        let panId = null;

        map.addEventListener('touchstart', e => {
          if (!panEnabled || e.touches.length !== 1) return;
          const t = e.touches[0];
          panId = t.identifier;
          map.classList.add('dragging');   // low-quality
          startX = t.clientX; startY = t.clientY;
          startTX = transform.x; startTY = transform.y;
        }, { passive: false });

        map.addEventListener('touchmove', e => {
          if (!panEnabled || e.touches.length !== 1) return;
          const t = Array.from(e.touches).find(tt => tt.identifier === panId);
          if (!t) return;
          e.preventDefault();

          const dx = (t.clientX - startX) * PAN_SPEED_FACTOR / transform.scale;
          const dy = (t.clientY - startY) * PAN_SPEED_FACTOR / transform.scale;
          transform.x = startTX + dx;
          transform.y = startTY + dy;
          applyTransform();
        }, { passive: false });

        map.addEventListener('touchend', () => {
          panId = null;
          map.classList.remove('dragging');   // back to high-quality
        });
      }

      return {
        init() {
          map.style.touchAction = 'none';
          PanModule.enable();
          map.style.cursor = 'default';
          if (isMobile) initMobile();
          else initDesktop();
          // **DO NOT enable here**
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
      animateTo(target, null, () => {
        baseTransform = { ...target };
      });
    }

    function createShapeButtons() {
      mapData.forEach(item => {
        const btn = document.createElement('button');
        btn.textContent = `Zoom to ${item.id}`;
        btn.dataset.targetId = item.id;
        btn.addEventListener('click', () => {
          const target = document.getElementById(btn.dataset.targetId);
          if (target) {
            applyStrokeHover(target);
            previous_selected_element = target;
            flyToShape(target);
          }
        });
        shapeButtonsContainer.appendChild(btn);
      });
    }

    /* -------------------------------------------------------------
       6. INITIALISE
       ------------------------------------------------------------- */
    applyTransform();
    createShapeButtons();
    PanModule.init();   // listeners only
    ZoomModule.init();  // zoom + wheel
  })();
}

else{

  // call the interactive map for desktop view
  
// Initialise map with tooltip + hover animation
init_interactive_map({
  mapData,
  mapId,
  tooltipElementId: "ikr_toltipMove",
  svgElementId: "ikr_svg",
  renderTooltipContent: renderTooltipContent,
  tooltipLeft: 20,
  tooltipTop: 10,
  onLotHoverIn: (el, mapD, ev) => {
    applyStrokeHover(el);
  },
  onLotHoverOut: (el, mapD, ev) => {
    clearStrokeHover(el);
  }
});
// apply zoom
ikrZoom({
  ikrsvg: ikr_svg, tooltipElementId: 'ikr_toltipMove', mapData, mapId, onLotHoverIn: (el, mapD, ev) => {
    applyStrokeHover(el);
  },
  onLotHoverOut: (el, mapD, ev) => {
    clearStrokeHover(el);
  },
  max_zoom:3,
});
}

        