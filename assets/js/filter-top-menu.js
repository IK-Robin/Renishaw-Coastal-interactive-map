
    const nodeSelect = document.getElementById('nodeSelect');
    const blockSelect = document.getElementById('blockSelect');
    const priceSelect = document.getElementById('priceSelect');
    const resetBtn = document.getElementById('resetBtn');
    const resetLi = document.getElementById('resetLi');
    const selects = document.querySelectorAll('.sf-input-select');

    // Data from the image (Node → Development Type + Total Extent in R)
    const nodeData = {
      node_1: {
        types: [
          "Medium Density Residential", "High Density Residential", "Business Zone 1 & 2",
          "Business and Government", "Education", "Urban Agriculture Zone 1 & 2"
        ],
        prices: [
          { label: "R 1,27M - R 1,50M", min: 1270000, max: 1500000 },
          { label: "R 1,50M - R 2,00M", min: 1500000, max: 2000000 },
          { label: "R 2,00M - R 3,00M", min: 2000000, max: 3000000 }
        ]
      },
      node_2: {
        types: ["Medium Density Residential", "High Density Residential", "Business Zone 1", "Business Zone 2", "Education"],
        prices: [
          { label: "R 1,83M - R 2,00M", min: 1830000, max: 2000000 },
          { label: "R 2,00M - R 2,50M", min: 2000000, max: 2500000 },
          { label: "R 2,50M - R 3,07M", min: 2500000, max: 3070000 }
        ]
      },
      node_3: {
        types: ["Light Industry", "Business Zone 1", "Business Zone 2", "High Density Residential", "Education", "Health and Welfare"],
        prices: [
          { label: "R 1,10M - R 1,50M", min: 1100000, max: 1500000 },
          { label: "R 1,50M - R 2,00M", min: 1500000, max: 2000000 },
          { label: "R 2,00M - R 2,87M", min: 2000000, max: 2870000 }
        ]
      },
      node_4: {
        types: ["Medium Density Residential", "Business Zone 1", "Business Zone 2", "Education", "Health and Welfare"],
        prices: [
          { label: "R 2,13M - R 2,50M", min: 2130000, max: 2500000 },
          { label: "R 2,50M - R 3,00M", min: 2500000, max: 3000000 },
          { label: "R 3,00M - R 4,23M", min: 3000000, max: 4230000 }
        ]
      },
      node_5: {
        types: ["Light Industry", "Medium Density Residential", "High Density Residential", "Business Zone 1", "Business Zone 2", "Education", "Urban Agriculture Zone 1"],
        prices: [
          { label: "R 1,79M - R 2,00M", min: 1790000, max: 2000000 },
          { label: "R 2,00M - R 2,50M", min: 2000000, max: 2500000 },
          { label: "R 2,50M - R 3,22M", min: 2500000, max: 3220000 }
        ]
      }
    };

    // Populate Development Type & Price when Node changes
    nodeSelect.addEventListener('change', () => {
      const node = nodeSelect.value;
      const data = nodeData[node] || { types: [], prices: [] };

      // Clear & populate Development Type
      blockSelect.innerHTML = '<option value="">Development Type</option>';
      data.types.forEach(type => {
        const opt = document.createElement('option');
        opt.value = type.toLowerCase().replace(/[^a-z0-9]/g, '_');
        opt.textContent = type;
        blockSelect.appendChild(opt);
      });

      // Clear & populate Price Range
      priceSelect.innerHTML = '<option value="">Price Range</option>';
      data.prices.forEach(p => {
        const opt = document.createElement('option');
        opt.value = `${p.min}+${p.max}`;
        opt.textContent = p.label;
        priceSelect.appendChild(opt);
      });

      // Reset block & price if node changes
      blockSelect.value = "";
      priceSelect.value = "";
      updateActiveStates();
    });

    // Mobile Toggle
    document.getElementById('mobileToggle').addEventListener('click', () => {
      const active = document.getElementById('searchForm').classList.toggle('active');
      document.getElementById('mobileToggle').classList.toggle('active', active);
    });

    // Update active state & reset button
    function updateActiveStates() {
      selects.forEach(sel => {
        const li = sel.closest('li');
        li.classList.toggle('active', sel.value !== "");
      });
      const anyActive = Array.from(selects).some(s => s.value !== "");
      resetLi.classList.toggle('active', anyActive);
    }

    selects.forEach(sel => sel.addEventListener('change', updateActiveStates));

    // Reset All
    resetBtn.addEventListener('click', (e) => {
      e.preventDefault();
      selects.forEach(sel => {
        sel.value = "";
        sel.closest('li').classList.remove('active');
      });
      blockSelect.innerHTML = '<option value="">Development Type</option>';
      priceSelect.innerHTML = '<option value="">Price Range</option>';
      updateActiveStates();
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.serchMenu') && searchForm.classList.contains('active')) {
        searchForm.classList.remove('active');
        mobileToggle.classList.remove('active');
      }
    });
    document.getElementById('filterList').addEventListener('click', e => e.stopPropagation());
