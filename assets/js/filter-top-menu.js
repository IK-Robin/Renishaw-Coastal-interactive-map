// -------------------------------------------------
// RAW DATA (your node_1_data – keep it as-is)
// -------------------------------------------------


// -------------------------------------------------
// 1. ENRICH DATA: add random price & status
// -------------------------------------------------
// const allLots = node_1_data.map(lot => {
//   // random status
//   const status = Math.random() < 0.7 ? 'available' : 'sold';

//   // random price (in Rand)
//   const sizeMatch = typeof lot.size === 'string' ? lot.size.match(/([\d.]+)/) : null;
//   const sizeM2 = sizeMatch ? parseFloat(sizeMatch[1]) : 400; // default 400m²

//   const basePerM2 = 3000 + Math.random() * 4000; // roughly R3k–R7k / m²
//   const price = Math.round(sizeM2 * basePerM2);

//   return {
//     ...lot,
//     status,
//     price
//   };
// });

// console.log(allLots)
// -------------------------------------------------
// 2. DOM ELEMENTS
// -------------------------------------------------
// const nodeSelect   = document.getElementById('nodeSelect');
const blockSelect  = document.getElementById('blockSelect');   // devType / landUse
const priceSelect  = document.getElementById('priceSelect');
const statusSelect = document.getElementById('statusSelect');
const resetBtn     = document.getElementById('resetBtn');
const resetLi      = document.getElementById('resetLi');
const selects      = document.querySelectorAll('.sf-input-select');
const mobileToggle = document.getElementById('mobileToggle');
const searchForm   = document.getElementById('searchForm');

// -------------------------------------------------
// 3. BUILD UNIQUE DEVELOPMENT TYPES & LAND USES
// -------------------------------------------------
function getUniqueValues(key) {
  const set = new Set();
  node_1_data.forEach(lot => {
    if (lot[key]) set.add(lot[key].trim());
  });
  return Array.from(set).sort();
}

const uniqueDevTypes = getUniqueValues('developmentType');
const uniqueLandUses = getUniqueValues('landUse');

// -------------------------------------------------
// 4. POPULATE DEV/LAND DROPDOWN (blockSelect)
// -------------------------------------------------
function populateDevLandDropdown() {
  blockSelect.innerHTML = '<option value="">Development Type / Land Use</option>';

  // Development Types
  if (uniqueDevTypes.length) {
    const devGroup = document.createElement('optgroup');
    devGroup.label = 'Development Type';
    uniqueDevTypes.forEach(dt => {
      const opt = document.createElement('option');
      opt.value = 'dev::' + dt; // prefix to avoid collisions with land use
      opt.textContent = dt;
      devGroup.appendChild(opt);
    });
    blockSelect.appendChild(devGroup);
  }

  // Land Uses
  if (uniqueLandUses.length) {
    const landGroup = document.createElement('optgroup');
    landGroup.label = 'Land Use';
    uniqueLandUses.forEach(lu => {
      const opt = document.createElement('option');
      opt.value = 'land::' + lu;
      opt.textContent = lu;
      landGroup.appendChild(opt);
    });
    blockSelect.appendChild(landGroup);
  }
}

// -------------------------------------------------
// 5. BUILD DYNAMIC PRICE RANGES
// -------------------------------------------------
function buildPriceRanges(bucketCount = 5) {
  const prices = node_1_data
    .map(l => l.price)
    .filter(p => typeof p === 'number' && !isNaN(p));

  if (!prices.length) return [];

  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const step = Math.round((max - min) / bucketCount);

  const ranges = [];
  let start = min;
  for (let i = 0; i < bucketCount; i++) {
    const end = (i === bucketCount - 1) ? max : start + step;
    ranges.push({ min: start, max: end });
    start = end + 1;
  }
  return ranges;
}

function formatRand(n) {
  return 'R ' + n.toLocaleString('en-ZA');
}

function populatePriceDropdown() {
  priceSelect.innerHTML = '<option value="">Price Range</option>';

  const ranges = buildPriceRanges(5);
  ranges.forEach(r => {
    const opt = document.createElement('option');
    opt.value = `${r.min}-${r.max}`;
    opt.textContent = `${formatRand(r.min)} – ${formatRand(r.max)}`;
    priceSelect.appendChild(opt);
  });
}

// -------------------------------------------------
// 6. COLOR MAPPING FOR DEV / LAND (for highlights)
// -------------------------------------------------
const colorPalette = [
  '#f94144','#f3722c','#f8961e','#f9844a','#f9c74f',
  '#90be6d','#43aa8b','#577590','#277da1','#8e44ad'
];
const colorMap = {};

function getKeyForLot(lot) {
  // priority: developmentType, then landUse
  return lot.developmentType || lot.landUse || 'default';
}

function getColorForKey(key) {
  if (!colorMap[key]) {
    const index = Object.keys(colorMap).length % colorPalette.length;
    colorMap[key] = colorPalette[index];
  }
  return colorMap[key];
}

// -------------------------------------------------
// 7. FILTER LOGIC – MATCH & HIGHLIGHT SVG BY ID
// -------------------------------------------------
function parsePriceRange(value) {
  if (!value) return null;
  const parts = value.split('-');
  if (parts.length !== 2) return null;
  const min = parseInt(parts[0], 10);
  const max = parseInt(parts[1], 10);
  if (isNaN(min) || isNaN(max)) return null;
  return { min, max };
}

function matchesFilters(lot) {
  // Node filter: deduce node from id prefix, e.g. "node_1_2"
  

  // DevType / LandUse filter
  const blockValue = blockSelect.value;
  if (blockValue) {
    const [type, raw] = blockValue.split('::');
    if (type === 'dev') {
      if (lot.developmentType !== raw) return false;
    } else if (type === 'land') {
      if (lot.landUse !== raw) return false;
    }
  }

  // Status filter
  const statusValue = statusSelect.value;
  if (statusValue && lot.status !== statusValue) {
    return false;
  }

  // Price filter
  const priceValue = priceSelect.value;
  if (priceValue) {
    const range = parsePriceRange(priceValue);
    if (range) {
      if (lot.price < range.min || lot.price > range.max) {
        return false;
      }
    }
  }

  return true;
}

// Restore original look of an SVG element (no highlight, no dim)
function restoreOriginalAppearance(el) {
  if (!el) return;
  el.classList.remove('highlight', 'dimmed');
  el.style.fill = '';     // clears inline style, falls back to CSS / attribute
  el.style.stroke = '';
  el.style.opacity = '';
}

function applyFilters() {
  const anyFilterActive = Array.from(selects).some(sel => sel.value !== '');

  node_1_data.forEach(lot => {
    if (!lot.id) return;
    const el = document.getElementById(lot.id);
    if (!el) return;

    // Always start from clean/original state
    restoreOriginalAppearance(el);

    if (!anyFilterActive) {
      // no filters: everything stays as originally drawn
      return;
    }

    if (matchesFilters(lot)) {
      // highlight MATCHING lots ONLY
      const key = getKeyForLot(lot);
      const color = getColorForKey(key);

      el.classList.add('highlight');
      el.style.fill = color;         // highlight fill
      el.style.stroke = '#000000';   // thicker outline color
      el.style.strokeWidth = 3;
      el.style.opacity = '1';
    }
    // IMPORTANT: non-matching lots are left in their restored/original state
    // (no dimming, no hiding, no opacity change)
  });
}

// -------------------------------------------------
// 8. ACTIVE STATE & RESET BUTTON
// -------------------------------------------------
function updateActiveStates() {
  selects.forEach(sel => {
    const li = sel.closest('li');
    if (!li) return;
    li.classList.toggle('active', sel.value !== '');
  });
  const any = Array.from(selects).some(s => s.value !== '');
  resetLi.classList.toggle('active', any);
}

selects.forEach(sel => {
  sel.addEventListener('change', () => {
    updateActiveStates();
    applyFilters();
  });
});

resetBtn.addEventListener('click', e => {
  e.preventDefault();
  selects.forEach(sel => {
    sel.value = "";
    const li = sel.closest('li');
    if (li) li.classList.remove('active');
  });

  // repopulate dropdowns
  populateDevLandDropdown();
  populatePriceDropdown();

  updateActiveStates();
  applyFilters(); // clears all inline styles & classes, original SVG styles show
});

// -------------------------------------------------
// 9. MOBILE TOGGLE + CLOSE ON OUTSIDE CLICK
// -------------------------------------------------
mobileToggle.addEventListener('click', () => {
  const active = searchForm.classList.toggle('active');
  mobileToggle.classList.toggle('active', active);
});

document.addEventListener('click', e => {
  if (!e.target.closest('.rhill-serchMenu') && searchForm.classList.contains('active')) {
    searchForm.classList.remove('active');
    mobileToggle.classList.remove('active');
  }
});
document.getElementById('filterList').addEventListener('click', e => e.stopPropagation());

// -------------------------------------------------
// 10. INITIALISE EVERYTHING
// -------------------------------------------------
function initFilters() {
  populateDevLandDropdown();
  populatePriceDropdown();
  updateActiveStates();
  applyFilters(); // with no filters, just restores everything = no visual change
}

// Run init once DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFilters);
} else {
  initFilters();
}
