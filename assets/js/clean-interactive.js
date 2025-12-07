
const avalible_color = "green";
const sold_color = "red";
const mapData = [
  {
    id: "node_1",
    node: "Node 1 ",
    lotNumber: "210",
    nodeSubtitle: 'RENSHAW CENTRAL',
    imageUrl: 'assets/images/node-tooltip-images/node-1.png',

    link: "all-nodes/node-1.html",
    use: "Residential",
    size: "714 000 m²",
    description: "Renshaw Central is the largest residential property development node."


  },

  {
    id: "node_2",
    node: "Node 2 ",
    lotNumber: "143",
    nodeSubtitle: 'CLANSTHAL',
    imageUrl: 'assets/images/node-tooltip-images/node-2.png',
    link: "all-nodes/node-1.html",
    use: "Residential",
    size: "402 000 m²",
    description: "Planned for Clansthal, is a luxury housing development featuring contemporary aesthetics."
  },


  {
    id: "node_3",
    node: "Node 3 ",
    lotNumber: "85",
    nodeSubtitle: 'INTERCHANGE',
    imageUrl: 'assets/images/node-tooltip-images/node-3-01.png',
    link: "all-nodes/node-1.html",
    use: "Commercial",
    size: "535 000 m²",
    description: "The Renshaw Coastal Precinct Interchange will be the nucleus of the development – as the social and business hub. The area’s first private hospital. Office parks. Light commercial zones. A shopping centre. The area’s first private school."
  },

  {
    id: "node_4",
    node: "Node 4 ",
    lotNumber: "7",
    nodeSubtitle: 'RENSHAW NORTH',
    imageUrl: 'assets/images/node-tooltip-images/node-4.png',
    link: "all-nodes/node-1.html",
    use: "Residential",
    size: "527 000 m²",
    description: "Renshaw North will boast luxury villas, seated within indigenous forest overlooking the ocean. An equestrian centre, indigenous nursery and a resort village are also included within the envisaged infrastructure."
  },

  {
    id: "node_5",
    node: "Node 5 ",
    lotNumber: "111",
    nodeSubtitle: 'RENSHAW SOUTH',
    imageUrl: 'assets/images/node-tooltip-images/node-5.png',
    link: "all-nodes/node-1.html",
    use: "Residential",
    size: "457 000 m²",
    description: "Renshaw South is to feature a special residential development. Group housing and small-holding plots will also be available. While some land is reserved for conservation, a community facility and light commercial opportunities are planned."
  },

];

let mapId = [

  "node_2",
  "node_3",
  "node_1",
  "node_5",
  "node_4"


];



function renderTooltipContent(mapD) {
  // mapD is expected to have:
  // mapD.nodeName, mapD.nodeSubtitle, mapD.imageUrl,
  // mapD.area, mapD.sites, mapD.desc1, mapD.desc2, mapD.desc3

  const nodeName = mapD.node;
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
            <div class="node-tooltip__badge-title"> ${nodeName}</div>
            <div class="node-tooltip__badge-subtitle">
              ${nodeSubtitle}
            </div>
          </div>
        </div>

        <div class="node-tooltip__body">
          <div class="node-tooltip__metrics">
            <div class="node-tooltip__metric-main">
              <span class="node-tooltip__metric-value">${area}</span>
            </div>
            ${sites
      ? `<div class="node-tooltip__metric-sub">${sites} Sites</div>`
      : ""
    }
          </div>

          <div class="node-tooltip__divider"></div>

          <div class="node-tooltip__text">
            ${mapD.description
      ? `<p>${mapD.description}</p>`
      : ""
    }
           
          </div>
        </div>
      </div>
    </div>
  `;
}





// create the node buttons for mobile view

  //  createNodeButtons(mapData, "node", "buttonsContainer");

  const shapeButtonsContainer = document.getElementById('shapeButtons');


  






// add fly to zoom logic only for mobile view 

if (isMobile_devices) {
  // call the interactive map for mobile view
  mobileZoom({
    ikrsvg_id: 'ikr_svg',
    stage_id: 'stage',
    mapId,
    mapData,
    ploat_btn_class:"plot-btn all-nodes-btn",
    data_proprty_to_create_button:"node",
    animation_class:'highlight'

      
  });
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
    applyStrokeHover(el,'highlight');
  },
  onLotHoverOut: (el, mapD, ev) => {
    clearStrokeHover(el,'highlight');
  }
});
// apply zoom
ikrZoom({
  ikrsvg: ikr_svg, tooltipElementId: 'ikr_toltipMove', mapData, mapId, onLotHoverIn: (el, mapD, ev) => {
    applyStrokeHover(el,'highlight');
  },
  onLotHoverOut: (el, mapD, ev) => {
    clearStrokeHover(el,'highlight');
  },
  max_zoom:3,
});
}

        