// select the main svg to avoid any othe unwanted svg selections

// check the mobile device or desktop devices 
const isMobile_devices =
  /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

// create hover animation function 

function hoverStrokeAnimation(ikr_svg_id) {
  const ikr_svg = document.getElementById(`${ikr_svg_id}`);
  // ==== ADD/REMOVE CLASSES ONLY – works EVERY time ====

  const selectAll_anim_paths = ikr_svg.querySelectorAll('.anim-path');

  selectAll_anim_paths.forEach(path => {
    // Compute length once
    const len = path.getTotalLength();
    path.style.setProperty('--len', len);
    path.style.strokeDasharray = len;
    // path.style.strokeDashoffset = len;    // start hidden

    path.addEventListener('mouseenter', (ev) => {
      const ct = ev.currentTarget;
      ct.style.fill = '#ffffff';
      ct.style.fillOpacity = '.3';
      // Reset any previous state
      path.classList.remove('draw', 'highlight');
      // Trigger reflow so animation restarts
      void path.offsetWidth;
      path.classList.add('highlight', 'draw');
    });

    path.addEventListener('mouseleave', (ev) => {
      // Keep the highlight visible until next hover
      // (no reverse, no class removal)
      const ct = ev.currentTarget;

      ct.style.fillOpacity = '0';
      ct.classList.remove('draw');
      ct.classList.remove('highlight');

    });
  }



  );
}


// call the hover animation function with the id of the svg 
// hoverStrokeAnimation('ikr_svg');

// stroke hover animation


function setupStrokeAnimation(svgId) {
  const ikr_svg = document.getElementById(svgId);
  if (!ikr_svg) return;

  const paths = ikr_svg.querySelectorAll(".anim-path");
  paths.forEach((path) => {
    if (typeof path.getTotalLength === "function") {
      const len = path.getTotalLength();
      path.style.setProperty("--len", len);
      path.style.strokeDasharray = len;
    }
  });
}

function applyStrokeHover(el) {
  if (!el.classList.contains("anim-path")) return;

  if (typeof el.getTotalLength === "function") {
    const len = el.getTotalLength();
    el.style.setProperty("--len", len);
    el.style.strokeDasharray = len;
  }

  el.style.fill = "#ffffff";
  el.style.fillOpacity = "0.3";

  el.classList.remove("draw", "highlight");
  // restart animation
  void el.offsetWidth;
  el.classList.add("highlight", "draw");
}

function clearStrokeHover(el) {
  if (!el.classList.contains("anim-path")) return;

  el.style.fillOpacity = "0";
  el.classList.remove("draw", "highlight");
  // Optionally revert fill color completely
  // el.style.removeProperty("fill");
}


// =========================
// RUN SETUP
// =========================
// Prepare anim-path stroke lengths
setupStrokeAnimation("ikr_svg");

//   animation function on nodelavel 



/**
   * Creates red buttons inside a container using an array of objects.
   * @param {Array} data          – array of node objects
   * @param {string} property     – property to use as button text (e.g. "node_number")
   * @param {string} containerId  – id of the element that will hold the buttons
   */
function createNodeButtons(data, property, containerId) {
  const button_container = document.getElementById(containerId);
  if (!button_container) return console.error("Container not found");

  // Clear any existing buttons
  button_container.innerHTML = "";

  data.forEach((node) => {
    // 1. Get the text (trim whitespace)
    const text = (node[property] || "").trim();
    console.log(text);

    // 2. Create button element
    const btn = document.createElement("button");
    btn.className = "plot-btn";
    btn.textContent = text; // e.g. "Node 1" or "2"

    // 3. Attach click – passes the **whole node object**
    btn.addEventListener("click", () => handleNodeClick(node));

    // 4. Append to container
    button_container.appendChild(btn);
  });
}

// ----- 3. CLICK HANDLER (receives the full object) -----
// Store the previously clicked element globally
// let previous_selected_element = null;

// ----- 3. CLICK HANDLER (receives the full object) -----
// function handleNodeClick(node) {
//   console.log("Selected node:", node);

//   const select_svg_element = document.getElementById(node.id);
//   // console.log(select_svg_element);

//   // 1. Remove stroke from previously selected element
//   if (previous_selected_element) {
//     clearStrokeHover(previous_selected_element);
//   }

//   // 2. If clicking the same element again -> remove stroke & deselect
//   // if (previous_selected_element === select_svg_element) {
//   //   previous_selected_element = null; // reset selection
//   //   return; // stop here
//   // }

//   // 3. Apply stroke on newly selected element
//   if (select_svg_element) {
//     applyStrokeHover(select_svg_element);
//     previous_selected_element = select_svg_element; // store it
    
//     // add click event to redirect to node page
//     select_svg_element.addEventListener("touchstart", () => {
//       window.location.href = node.link; // No ../ needed
//     });
//   }
// }

let previous_selected_element = null;

// Single redirect handler reused for add/remove
function redirectHandler(e) {
  const id = e.target.getAttribute("data-node-id");
  const link = e.target.getAttribute("data-node-link");
  if (link) window.location.href = link;
}


function redirectHandler(e) {
  const link = e.target.getAttribute("data-node-link");
  if (link) window.location.href = link;
}



function showTooltip(svgElement, text) {
  const tooltip = document.getElementById("svgTooltip");
  tooltip.innerText = text;

  const bbox = svgElement.getBoundingClientRect();

  // Correct center position with scroll support
  const centerX = bbox.left + bbox.width / 2 + window.scrollX;
  const centerY = bbox.top + bbox.height / 2 + window.scrollY;

  tooltip.style.left = `${centerX}px`;
  tooltip.style.top  = `${centerY}px`;

  tooltip.style.display = "block";
}


function hideTooltip() {
  document.getElementById("svgTooltip").style.display = "none";
}


// ----- 4. RUN THE FUNCTION -----
// Pass: data, property to display, container id


/* --------------------------------------------------------------
   FLY-TO-ZOOM – center + fit any SVG element

    /* ========== FLY-TO-ZOOM ========== */
    let zoomState = { x: 0, y: 0, scale: 1 };
    const SVG_CONTAINER = document.getElementById('fly_to_zoom_container');
    const MAX_ZOOM = 6;
    const ZOOM_DURATION = 380;

    function applyZoom() {
      SVG_CONTAINER.setAttribute(
        'transform',
        `translate(${zoomState.x},${zoomState.y}) scale(${zoomState.scale})`
      );
    }

    function computeFit(bb, padding = 40) {
      const viewW = 1200, viewH = 720;
      const scale = Math.min(
        viewW / (bb.width + padding * 2),
        viewH / (bb.height + padding * 2),
        MAX_ZOOM
      );
      const cx = bb.x + bb.width / 2;
      const cy = bb.y + bb.height / 2;
      return { x: viewW / 2 - scale * cx, y: viewH / 2 - scale * cy, scale };
    }

    function animateTo(target, onDone) {
      const start = { ...zoomState };
      const dX = target.x - start.x, dY = target.y - start.y, dS = target.scale - start.scale;
      const t0 = performance.now();

      function step(now) {
        const p = Math.min((now - t0) / ZOOM_DURATION, 1);
        const ease = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
        zoomState.x = start.x + dX * ease;
        zoomState.y = start.y + dY * ease;
        zoomState.scale = start.scale + dS * ease;
        applyZoom();
        if (p < 1) requestAnimationFrame(step);
        else if (onDone) onDone();
      }
      requestAnimationFrame(step);
    }

    function flyToElement(el, padding = 40) {
      const current = SVG_CONTAINER.getAttribute('transform') || '';
      SVG_CONTAINER.setAttribute('transform', 'translate(0,0) scale(1)');
      const bb = el.getBBox();
      SVG_CONTAINER.setAttribute('transform', current);
      const target = computeFit(bb, padding);
      animateTo(target);
    }




    
function handleNodeClick(node) {
  const select_svg_element = document.getElementById(node.id);
   if (!select_svg_element) return console.warn("Node not found:", node.id);
  console.log("Selected node:", node);

  /* ---- 1. Reset previous selection ---- */
  if (previous_selected_element) {
    clearStrokeHover(previous_selected_element);
    previous_selected_element.removeEventListener("touchstart", redirectHandler);
  }

  if (!select_svg_element) return;   // safety

  /* ---- 2. Highlight new element ---- */
  applyStrokeHover(select_svg_element);
  previous_selected_element = select_svg_element;

  /* ---- 3. Store data for redirect ---- */
  select_svg_element.setAttribute("data-node-id", node.id);
  select_svg_element.setAttribute("data-node-link", node.link);
  select_svg_element.addEventListener("touchstart", redirectHandler);

  /* ---- 4. Show tooltip at element centre ---- */
  showTooltip(select_svg_element, node.label ?? node.name ?? node.id);

  /* ---- 5. FLY-TO-ZOOM (center + fit) ---- */
  flyToElement(select_svg_element, 60);   // 40 px padding – tweak as you like
}