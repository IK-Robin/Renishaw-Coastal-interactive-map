
const avalible_color = "green";
const sold_color = "red";
const mapData = [
   {
    id: "node_1-2",
    node_number: "Node 1 RENSHAW CENTRAL",
    lotNumber: "210",
    link: "../../all nods/node-1.html",
   use: "Residential",
    size: "714 000 m²",
    description: "Renshaw Central is the largest residential property development node."
    

  },
 
  {
    id: "node_2-2",
    node_number: "Node 2 CLANSTHAL",
    lotNumber: "143",
    link: "../../all nods/node-2.html",
    use: "Residential",
    size: "402 000 m²",
    description: "Planned for Clansthal, is a luxury housing development featuring contemporary aesthetics."
},
 

  {
    id: "node_3-2",
    node_number: "Node 3 INTERCHANGE",
    lotNumber: "85",
    link: "../../all nods/node-3.html",
    use: "Commercial",
    size: "535 000 m²",
    description: "The Renshaw Coastal Precinct Interchange will be the nucleus of the development – as the social and business hub. The area’s first private hospital. Office parks. Light commercial zones. A shopping centre. The area’s first private school."
},

{
    id: "node_4-2",
    node_number: "Node 4 RENSHAW NORTH",
    lotNumber: "7",
    link: "../../all nods/node-4.html",
    use: "Residential",
    size: "527 000 m²",
    description: "Renshaw North will boast luxury villas, seated within indigenous forest overlooking the ocean. An equestrian centre, indigenous nursery and a resort village are also included within the envisaged infrastructure."
},

{
    id: "node_5-2",
    node_number: "Node 5 RENSHAW SOUTH",
    lotNumber: "111",
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


initNodeMap(mapData,mapId,'ikr_toltipMove','ikr_svg',renderTooltipContent);

// // ====== TOOLTIP RENDER ======
function renderTooltipContent(mapD) {
  let statusStyle = "font-weight: bold;";
  if (mapD.status && mapD.status.toLowerCase() === "available") {
    statusStyle = "color: #d3b683; font-weight: bold;";
  } else if (mapD.status && mapD.status.toLowerCase() === "sold") {
    statusStyle = "color: red; font-weight: bold;";
  }

  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.4;">
      <p><strong> ${mapD.node_number ?? ""} </strong></p>
      <p><strong>Development type:</strong> ${mapD.use ?? ""}</p>
      <p><strong>Sites:</strong> ${String(mapD.lotNumber || "").replace(
    /_/g,
    ""
  )} Sites</p>
      <p><strong>Size:</strong> ${mapD.size ?? ""}</p>
      <p><strong></strong> <span style="font-weight:bold;">${mapD.description ?? ""
    }</span></p>
     
    </div>
  `;
}
