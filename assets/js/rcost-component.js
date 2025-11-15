// select the main svg to avoid any othe unwanted svg selections

// create hover animation function 

function hoverStrokeAnimation(ikr_svg_id) {
const ikr_svg= document.getElementById(`${ikr_svg_id}`);
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
                ct.style.fill ='#ffffff';
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
      function handleNodeClick(node) {
        // Example actions – replace with your own logic
        console.log("Selected node:", node);
        alert(
          `You selected: ${node.node_number.trim()} – ${node.nodeSubtitle}`
        );

        // OPTIONAL: redirect to the node page
        // window.location.href = node.link;
      }

      // ----- 4. RUN THE FUNCTION -----
      // Pass: data, property to display, container id
   