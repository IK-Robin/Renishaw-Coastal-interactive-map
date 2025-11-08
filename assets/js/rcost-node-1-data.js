const lots = [
  {
    lotNumber: 180,
    size: "3802m²",
    label: "",
    developmentType: "WORSHIP"               // purple lot
  },
  {
    lotNumber: 181,
    size: "5220 m²",
    label: "Local Residential 1",
    developmentType: "MEDIUM DENSITY RESIDENTIAL 1" // same orange tone as MD Res 1
  },
  {
    lotNumber: 182,
    size: "6060 m²",
    label: "",
    developmentType: "MEDIUM DENSITY RESIDENTIAL 1" // same orange tone
  },
  {
    lotNumber: 183,
    size: "21994m²",
    label: "",
    developmentType: "URBAN AGRICULTURE 2"   // olive-green lot
  },
  {
    lotNumber: 184,
    size: "5806 m²",
    label: "Local Residential 1",
    developmentType: "MEDIUM DENSITY RESIDENTIAL 1" // orange residential strip
  },
  {
    lotNumber: 185,
    size: "4504m²",
    label: "Local Residential 1",
    developmentType: "MEDIUM DENSITY RESIDENTIAL 1"
  },
  {
    lotNumber: 186,
    size: "5380 m²",
    label: "",
    developmentType: "MULTI-PURPOSE RETAIL"  // bright cyan, same as 189
  },
  {
    lotNumber: 187,
    size: "2578 m²",
    label: "",
    developmentType: "WORSHIP"               // same purple as 180
  },
  {
    lotNumber: 188,
    size: "14815m²",
    label: "",
    developmentType: "MULTI-PURPOSE RETAIL"  // cyan
  },
  {
    lotNumber: 189,
    size: "26538m²",
    label: "MULTI USE RETAIL 1",
    developmentType: "MULTI-PURPOSE RETAIL"  // cyan
  },
  {
    lotNumber: 190,
    size: "7203 m²",
    label: "Private Conservation Reserve",
    developmentType: null                    // not in the legend you gave
  },
  {
    lotNumber: 192,
    size: "85223 m²",
    label: "Private Conservation Reserve",
    developmentType: null                    // not in the legend
  },
  {
    lotNumber: 193,
    size: "",
    label: "",
    developmentType: null                    // tiny road piece, no fill/type
  },
  { lotNumber: 3,  size: "336m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 4,  size: "371m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 5,  size: "499m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 6,  size: "906m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 7,  size: "1206m²", developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 8,  size: "374m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 9,  size: "343m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 10, size: "486m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 11, size: "1611m²", developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 12, size: "622m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 13, size: "545m²",  developmentType: "RESIDENTIAL ONLY 1" },

  { lotNumber: 20, size: "402m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 21, size: "385m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 22, size: "295m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 23, size: "217m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 24, size: "226m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 25, size: "217m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 26, size: "211m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 27, size: "167m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 28, size: "278m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 29, size: "233m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 30, size: "210m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 31, size: "216m²",  developmentType: "RESIDENTIAL ONLY 1" }, // size partly obscured; best guess

  { lotNumber: 32, size: "207m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 33, size: "176m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 34, size: "158m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 35, size: "157m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 36, size: "178m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 37, size: "102m²",  developmentType: "RESIDENTIAL ONLY 1" }, // low confidence
  { lotNumber: 38, size: "145m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 39, size: "197m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 40, size: "137m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 41, size: "248m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 42, size: "228m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 43, size: "132m²",  developmentType: "RESIDENTIAL ONLY 1" }, // low confidence
  { lotNumber: 44, size: "171m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 45, size: "178m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 46, size: "193m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 47, size: "221m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 48, size: "285m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 49, size: "425m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 50, size: "446m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 51, size: "312m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 52, size: "381m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 53, size: "381m²",  developmentType: "RESIDENTIAL ONLY 1" }, // approximate; label partly obscured
  { lotNumber: 54, size: "478m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 55, size: "538m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 56, size: "699m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 57, size: "489m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 58, size: "418m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 59, size: "408m²",  developmentType: "RESIDENTIAL ONLY 1" },

  // plus:
  { lotNumber: 2, size: "910m²",  developmentType: "RESIDENTIAL ONLY 1" }
];
