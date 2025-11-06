// select the main svg to avoid any othe unwanted svg selections
const ikr_svg= document.getElementById('ikr_svg');
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

            path.addEventListener('mouseenter', () => {
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
                ct.classList.remove('draw');
                ct.classList.remove('highlight');

            });
    }


        
    );
}

hoverStrokeAnimation('ikr_svg');