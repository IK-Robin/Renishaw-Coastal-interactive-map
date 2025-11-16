
const avalible_color = "green";
const sold_color = "red";
const mapData = [
  {
    id: "node_1-2",
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
    id: "node_2-2",
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
    id: "node_3-2",
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
    id: "node_4-2",
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
    id: "node_5-2",
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

// const ikr_btnTxt = document.getElementById("ikr_btnTxt");
// // get the map id
// const ikr_svg = document.getElementById("ikr_svg");
// const Shape = ikr_svg.getElementById("Layer_5");

// // function getAllChildNodeIds(svgElement) {
// //   const childNodeIds = [];

// //   // Iterate through all child elements of the SVG
// //   for (const childElement of svgElement.children) {
// //     // Check if the child element has an ID attribute
// //     if (childElement.id) {
// //       childNodeIds.push(childElement.id);
// //     }

// //     // Recursively process child elements
// //     childNodeIds.push(...getAllChildNodeIds(childElement));
// //   }

// //   return childNodeIds;
// // }
// // console.log(getAllChildNodeIds(Shape));

// // map data

// const tooltipMove = document.getElementById("ikr_toltipMove");

// // (Optional) if you need this later:
// // const Shape = ikr_svg.getElementById('Shape');

// // ====== Utilities ======
// function getClientPoint(ev) {
//   if (ev.touches && ev.touches[0]) {
//     return { x: ev.touches[0].clientX, y: ev.touches[0].clientY };
//   }
//   if (ev.changedTouches && ev.changedTouches[0]) {
//     return {
//       x: ev.changedTouches[0].clientX,
//       y: ev.changedTouches[0].clientY,
//     };
//   }
//   return { x: ev.clientX, y: ev.clientY };
// }

// // Smart positioning inside tooltip's offsetParent
// function placeSmartInContainer(el, ev, pad = 8) {
//   el.style.position = "absolute";

//   const parent = el.offsetParent || document.body;
//   const rect = parent.getBoundingClientRect();

//   const cs = getComputedStyle(parent);
//   const padL = parseFloat(cs.paddingLeft) || 0;
//   const padT = parseFloat(cs.paddingTop) || 0;
//   const padR = parseFloat(cs.paddingRight) || 0;
//   const padB = parseFloat(cs.paddingBottom) || 0;

//   const prevDisp = el.style.display;
//   const prevVis = el.style.visibility;
//   el.style.visibility = "hidden";
//   el.style.display = "block";

//   const w = el.offsetWidth;
//   const h = el.offsetHeight;

//   const pt = getClientPoint(ev);
//   const relX = pt.x - rect.left - padL;
//   const relY = pt.y - rect.top - padT;

//   const contentW = rect.width - padL - padR;
//   const contentH = rect.height - padT - padB;

//   let left = relX + pad;
//   let top = relY + pad;

//   if (left + w > contentW) left = relX - w - pad;
//   left = Math.max(0, Math.min(left, contentW - w));

//   if (top + h > contentH) top = relY - h - pad;
//   top = Math.max(0, Math.min(top, contentH - h));

//   el.style.left = left + padL + 10+ "px";
//   el.style.top = top + padT + 10+"px";

//   el.style.visibility = prevVis || "visible";
//   el.style.display = prevDisp || "block";
// }

// function isMobile() {
//   return /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//     navigator.userAgent
//   );
// }

// // ====== INIT COLORS ON LOAD ======
// window.addEventListener("load", () => {
//   mapId.forEach((id) => {
//     const el = document.querySelector(`#${id}`);
//     if (!el) return;
//     const data = mapData.find((d) => d.id === id);
//     if (data && data.mapColor) {
//       el.style.fill = `#${data.mapColor}`;
//     }
//   });
// });

// // ====== TOOLTIP RENDER ======
// function renderTooltipContent(mapD) {
//   let statusStyle = "font-weight: bold;";
//   if (mapD.status && mapD.status.toLowerCase() === "available") {
//     statusStyle = "color: #d3b683; font-weight: bold;";
//   } else if (mapD.status && mapD.status.toLowerCase() === "sold") {
//     statusStyle = "color: red; font-weight: bold;";
//   }

//   return `
//     <div style="font-family: Arial, sans-serif; line-height: 1.4;">
//       <p><strong> ${mapD.node_number ?? ""} </strong></p>
//       <p><strong>Development type:</strong> ${mapD.use ?? ""}</p>
//       <p><strong>Sites:</strong> ${String(mapD.lotNumber || "").replace(
//     /_/g,
//     ""
//   )} Sites</p>
//       <p><strong>Size:</strong> ${mapD.size ?? ""}</p>
//       <p><strong></strong> <span style="font-weight:bold;">${mapD.description ?? ""
//     }</span></p>

//     </div>
//   `;
// }

// // ====== EVENT HANDLERS ======
// function handleShow(ev, ct, mapD) {
//   if (!mapD) return;



//   tooltipMove.innerHTML = renderTooltipContent(mapD);
//   tooltipMove.style.display = "block";
//   placeSmartInContainer(tooltipMove, ev, 12);
// }

// function handleHideOnMobile(ct) {

//   // tooltipMove.style.display = "none";
//   // tooltipMove.innerHTML = "";
// }
// function handleHide(ct) {
//   if (ct) {
//     ct.classList.remove("availableLot", "soldLot");
//   }
//   tooltipMove.style.display = "none";
//   tooltipMove.innerHTML = "";
// }
// // add the click function 
// function rcostClick_func(ev, ct, mapD) {


//   if (!mapD) return;
//   window.location.href = mapD.link;

// }
// // ====== BIND LISTENERS ======
// mapId.forEach((id) => {
//   const el = document.querySelector(`#${id}`);
//   if (!el) return;

//   const mapD = mapData.find((d) => d.id === id);
//   if (!mapD) return;

//   if (isMobile()) {
//     // Mobile: show on touchstart/click, hide on touchend/outside
//     el.addEventListener(
//       "touchstart",
//       (ev) => {
//         ev.preventDefault();
//         handleShow(ev, el, mapD);
//       },
//       { passive: false }
//     );

//     el.addEventListener("touchend", (ev) => {
//       handleHideOnMobile(el);
//     });

//     el.addEventListener("click", (ev) => {
//       handleShow(ev, el, mapD);
//     });
//   } else {
//     // Desktop: normal hover
//     el.addEventListener("mouseenter", (ev) => handleShow(ev, el, mapD));
//     el.addEventListener("mousemove", (ev) => handleShow(ev, el, mapD));
//     el.addEventListener("mouseleave", () => handleHide(el));
//     el.addEventListener("click", (ev) => {
//       rcostClick_func(ev, el, mapD);

//     });
//   }
// });

// // Hide tooltip when clicking outside lots
// window.addEventListener("click", (ev) => {
//   if (ev.target && ev.target.tagName.toLowerCase() !== "path") {
//     tooltipMove.style.display = "none";
//   }
// });


// console.log(mapData)
// init_interactive_map({
//     mapData, mapId, tooltipElementId: "ikr_toltipMove", // same as before
//     svgElementId: "ikr_svg",           // same as before
//     renderTooltipContent: renderTooltipContent,
//     tooltipLeft:10,
//     tooltipTop:10,
// });
// // ====== TOOLTIP RENDER ======
// function renderTooltipContent(mapD) {
//     let statusStyle = "font-weight: bold;";
//     if (mapD.status && mapD.status.toLowerCase() === "available") {
//         statusStyle = "color: #d3b683; font-weight: bold;";
//     } else if (mapD.status && mapD.status.toLowerCase() === "sold") {
//         statusStyle = "color: red; font-weight: bold;";
//     }

//     return `
//     <div  class="all_node_tooltip_style">
//       <p><strong> ${mapD.node_number ?? ""} </strong></p>
//       <p><strong>Development type:</strong> ${mapD.use ?? ""}</p>
//       <p><strong>Sites:</strong> ${String(mapD.lotNumber || "").replace(
//         /_/g,
//         ""
//     )} Sites</p>
//       <p><strong>Size:</strong> ${mapD.size ?? ""}</p>
//       <p><strong></strong> <span style="font-weight:bold;">${mapD.description ?? ""
//         }</span></p>

//     </div>
//   `;
// }


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
   let previous_selected_element = null;

    // mapData.forEach(item =>{
    //         const shapes = document.querySelector(`#${item.id}`);

    //    const btn = document.createElement('button');
    //         btn.textContent = `Zoom to ${item.id}`;
    //         btn.dataset.targetId = item.id;
         
    //         btn.addEventListener('click', () => {
    //             const target = document.getElementById(btn.dataset.targetId);
    //             console.log(target)
    //         //  target.style.fill = "orange";  // Change fill color on click
    //         //  target.style.fillOpacity = "1";  // Change fill color on click
    //          applyStrokeHover(target)
    //             if (target) flyToShape(target);
    //         });
    //         shapeButtonsContainer.appendChild(btn);

    //     });

        // apply the zoom function
          /* ---------- SHARED STATE & HELPERS ---------- */
    const click_to_fly_transform = { x:0, y:0, scale:1 };
    let baseTransform = { x:0, y:0, scale:1 };

    const map   = document.getElementById('ikr_svg');
    const stage = document.getElementById('stage');
    

    function rcost_applyTransform() {
        stage.setAttribute('transform',
            `translate(${click_to_fly_transform.x},${click_to_fly_transform.y}) scale(${click_to_fly_transform.scale})`);
    }

    function rcost_animateTo(target, duration=280, onUpdate=null, onDone=null) {
        const start = { ...click_to_fly_transform };
        const dt = {
            x: target.x - start.x,
            y: target.y - start.y,
            scale: target.scale - start.scale
        };
        const t0 = performance.now();

        function step(now) {
            const p = Math.min((now-t0)/duration, 1);
            const ease = p<0.5 ? 2*p*p : 1-Math.pow(-2*p+2,2)/2;

            click_to_fly_transform.x = start.x + dt.x * ease;
            click_to_fly_transform.y = start.y + dt.y * ease;
            click_to_fly_transform.scale = start.scale + dt.scale * ease;

            rcost_applyTransform();
            if (onUpdate) onUpdate(ease);

            if (p<1) requestAnimationFrame(step);
            else if (onDone) onDone();
        }
        requestAnimationFrame(step);
    }

    function computeFitTransform(bb, padding=24) {
        const svgW=1105.28 , svgH=1545.45;
        const scale = Math.min(
            svgW/(bb.width+padding*2),
            svgH/(bb.height+padding*2)
        );
        const cx = bb.x + bb.width/2;
        const cy = bb.y + bb.height/2;
        return { x:svgW/2-scale*cx, y:svgH/2-scale*cy, scale };
    }

  

/* ---------- FLY-TO-ZOOM (shared) ---------- */
    function flyToShape(shapeEl) {
        // if (PanModule.justDragged) return;
        const bb = shapeEl.getBBox();
        const target = computeFitTransform(bb, 24);
        rcost_animateTo(target, 300, null, ()=>{ baseTransform={...target}; });
    }

    /* ---------- SHAPE BUTTONS ---------- */
    function createShapeButtons() {

        mapData.forEach(item =>{
            const shapes = document.querySelector(`#${item.id}`);

       const btn = document.createElement('button');
            btn.textContent = `Zoom to ${item.id}`;
            btn.dataset.targetId = item.id;
            btn.addEventListener('click', () => {
                const target = document.getElementById(btn.dataset.targetId);
                
                //   if (previous_selected_element) {
                  //     clearStrokeHover(previous_selected_element);
                  //   }
                  //   if (previous_selected_element) {
                    //     clearStrokeHover(previous_selected_element);
                    //   }
                    //  target.style.fill = "orange";  // Change fill color on click
                    //  target.style.fillOpacity = "1";  // Change fill color on click
                    applyStrokeHover(target);
                    previous_selected_element=target;  // store the previously selected element
                    if (target) flyToShape(target);
                    
            });
            shapeButtonsContainer.appendChild(btn);

        });



        // shapes.forEach(shape => {
        //     const btn = document.createElement('button');
        //     btn.textContent = `Zoom to ${shape.id}`;
        //     btn.dataset.targetId = shape.id;
        //     btn.addEventListener('click', () => {
        //         const target = document.getElementById(btn.dataset.targetId);
        //         if (target) flyToShape(target);
        //     });
        //     shapeButtonsContainer.appendChild(btn);
        // });
    }


    // // Single redirect handler reused for add/remove
function redirectHandler(e) {
  const id = e.target.getAttribute("data-node-id");
  const link = e.target.getAttribute("data-node-link");
  if (link) window.location.href = link;
}


    function ikrZoom(ikrsvg) {
      /* ---------- state ---------- */
      const ts = { scale: 1, translate: { x: 0, y: 0 }, rotate: 0 };
      let currentScale = 1;
      const STEP = 0.2;
      const MAX_SCALE = 8;
      const MIN_SCALE = 1;

      let panEnabled = false;

      /* ---------- buttons ---------- */
      const zoomInBtn = document.getElementById("zoom_in");
      const zoomOutBtn = document.getElementById("zoom_out");
      const resetBtn = document.getElementById("reset");

      ikrsvg.style.touchAction = "none";
      ikrsvg.style.cursor = "default";

      /* ---------- apply transform ---------- */
      function applyTransform() {
        const t = `translate(${ts.translate.x}px, ${ts.translate.y}px) scale(${ts.scale})`;
        ikrsvg.style.transform = t;
      }

      /* ---------- button actions ---------- */
      zoomInBtn.addEventListener("click", () => {
        currentScale = Math.min(MAX_SCALE, currentScale + STEP);
        ts.scale = currentScale;

        if (!panEnabled) {
          panEnabled = true;
          ikrsvg.style.cursor = "grab";

          initPanning();
        }

        applyTransform();
      });

      zoomOutBtn.addEventListener("click", () => {
        currentScale = Math.max(MIN_SCALE, currentScale - STEP);
        ts.scale = currentScale;
        applyTransform();
      });

      resetBtn.addEventListener("click", () => {
        currentScale = 1;
        ts.scale = 1;
        ts.translate.x = ts.translate.y = 0;
        panEnabled = false;
        ikrsvg.style.cursor = "default";
        stage.setAttribute('transform',
              `translate(${0},${0}) scale(${1})`);
        // removePanning(); // This will re-clone SVG and rebind mobile listeners
        baseTransform = { x:0, y:0, scale:1 };
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
              stage.setAttribute('transform',
              `translate(${0},${0}) scale(${1})`);
              if (!t) return;
              e.preventDefault();
              const dx = (t.clientX - startX) / ts.scale;
              const dy = (t.clientY - startY) / ts.scale;
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
            const dx = (e.clientX - startX) / ts.scale;
            const dy = (e.clientY - startY) / ts.scale;
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

      //     function removePanning() {
      //   // Clone and replace SVG to remove pan listeners
      //   const clone = ikrsvg.cloneNode(true);
      //   ikrsvg.parentNode.replaceChild(clone, ikrsvg);

      //   // Update reference
      //   const newSvg = document.getElementById(ikrsvg.id);
      //   ikrsvg = newSvg;
      //   ikrsvg.style.touchAction = "none";
      //   ikrsvg.style.cursor = "default";

      //   // === CRITICAL: Rebind mobile tooltip listeners ===
      //   if (isMobileDevice) {
      //     // mapId.forEach((id) => {
      //     //   const el = ikrsvg.querySelector(`#${id}`);
      //     //   if (!el) return;

      //     //   const mapD = mapData.find((d) => d.id === id);
      //     //   if (!mapD) return;

      //     //   // Remove old listeners if any (just in case)
      //     //   el.replaceWith(el.cloneNode(true));
      //     //   const freshEl = ikrsvg.querySelector(`#${id}`);

      //     //   freshEl.addEventListener(
      //     //     "touchstart",
      //     //     (ev) => {
      //     //       ev.preventDefault();
      //     //       handleShow(ev, freshEl, mapD);
      //     //     },
      //     //     { passive: false }
      //     //   );

      //     //   freshEl.addEventListener("touchend", (ev) => {
      //     //     handleHideOnMobile(freshEl);
      //     //   });

      //     //   freshEl.addEventListener("click", (ev) => {
      //     //     handleShow(ev, freshEl, mapD);
      //     //   });
      //     // });
      //   }else{
      //       mapId.forEach((id) => {
      //       console.log('hello')
      //        const el = ikrsvg.querySelector(`#${id}`);
      //       if (!el) return;

      //       const mapD = mapData.find((d) => d.id === id);
      //       if (!mapD) return;

      //       // Remove old listeners if any (just in case)
      //       el.replaceWith(el.cloneNode(true));
      //       const freshEl = ikrsvg.querySelector(`#${id}`);
      //        // Desktop: normal hover
      //   freshEl.addEventListener("mouseenter", (ev) => handleShow(ev, freshEl, mapD));
      //   freshEl.addEventListener("mousemove", (ev) => handleShow(ev, freshEl, mapD));
      //   freshEl.addEventListener("mouseleave", () => handleHide(freshEl));
      //   });
      //   }
      //   // === End of mobile rebind ===

      //   applyTransform();
      // }

      /* ---------- initial render ---------- */
      applyTransform();
    }
   

  
    /* ---------- INITIALISE ---------- */
    const ikr_svg = document.getElementById('ikr_svg');
    rcost_applyTransform();
  
    createShapeButtons(); 
    ikrZoom(ikr_svg);
    
    // <-- generates a button per id-ed shape
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

        