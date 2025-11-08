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
  { lotNumber: 2, size: "910m²",  developmentType: "RESIDENTIAL ONLY 1" },
   // RESIDENTIAL ONLY 2 (pale yellow, left)
  { lotNumber: 91,  size: "1450m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 92,  size: "1772m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 93,  size: "1514m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 94,  size: "1333m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 95,  size: "1186m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 96,  size: "1421m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 97,  size: "1247m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 98,  size: "1747m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 99,  size: "939m²",  developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 100, size: "830m²",  developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 101, size: "1571m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 102, size: "1717m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 103, size: "1607m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 104, size: "3015m²", developmentType: "RESIDENTIAL ONLY 2" },

  // RESIDENTIAL ONLY 1 (bright yellow, right cluster)
  { lotNumber: 66, size: "300m²",  developmentType: "RESIDENTIAL ONLY 1" }, // approx
  { lotNumber: 67, size: "432m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 68, size: "409m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 69, size: "300m²",  developmentType: "RESIDENTIAL ONLY 1" }, // approx
  { lotNumber: 70, size: "232m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 71, size: "257m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 72, size: "279m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 73, size: "279m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 74, size: "288m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 75, size: "288m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 76, size: "366m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 77, size: "779m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 78, size: "980m²",  developmentType: "RESIDENTIAL ONLY 1" },
  { lotNumber: 79, size: "1269m²", developmentType: "RESIDENTIAL ONLY 1" },

  // Cemetery (orange)
  { lotNumber: 80, size: "6865m²", developmentType: "INSTITUTION" },
  // Yellow residential (RESIDENTIAL ONLY 2)
  { lotNumber: 109, size: "1057m²", developmentType: "RESIDENTIAL ONLY 2" },

  { lotNumber: 127, size: "850m²",  developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 128, size: "1054m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 129, size: "2032m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 130, size: "1073m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 131, size: "1038m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 132, size: "1269m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 133, size: "228m²",  developmentType: "RESIDENTIAL ONLY 2" },

  { lotNumber: 134, size: "6768m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 135, size: "1738m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 136, size: "1416m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 137, size: "1370m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 138, size: "1263m²", developmentType: "RESIDENTIAL ONLY 2" },

  { lotNumber: 140, size: "1939m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 141, size: "961m²",  developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 142, size: "914m²",  developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 143, size: "906m²",  developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 144, size: "916m²",  developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 145, size: "999m²",  developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 146, size: "1527m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 147, size: "1191m²", developmentType: "RESIDENTIAL ONLY 2" },

  { lotNumber: 148, size: "1262m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 149, size: "1479m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 150, size: "1111m²", developmentType: "RESIDENTIAL ONLY 2" }, // top by the road
  { lotNumber: 150, size: "1358m²", developmentType: "RESIDENTIAL ONLY 2" }, // bottom lot – number appears duplicated in the plan
  { lotNumber: 151, size: "2068m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 152, size: "2513m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 153, size: "1432m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 154, size: "1768m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 155, size: "1698m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 156, size: "2618m²", developmentType: "RESIDENTIAL ONLY 2" },

  { lotNumber: 157, size: "914m²",  developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 158, size: "977m²",  developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 159, size: "2809m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 160, size: "903m²",  developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 161, size: "1493m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 162, size: "1266m²", developmentType: "RESIDENTIAL ONLY 2" },

  // Orange lot in the middle
  {
    lotNumber: 139,
    size: "2660m²",
    developmentType: "MUNICIPAL AND GOVERNMENT"
  },

  // Purple institution lot
  {
    lotNumber: 110,
    size: "15239m²",
    label: "INSTITUTION",
    developmentType: "INSTITUTION"
  },

  // Green area (farmland style – Urban Agriculture 2)
  {
    lotNumber: 168,
    size: "9638m²",
    developmentType: "URBAN AGRICULTURE 2"
  },

  // Open space / conservation (grey/other colours)
  {
    lotNumber: 163,
    size: "8432m²",
    label: "P.O.S",
    developmentType: null
  },
  {
    lotNumber: 167,
    size: "2092m²",
    label: "P.U.B",
    developmentType: null
  },
  {
    lotNumber: 166,
    size: "2906m²",
    label: "Private Conservation Reserve",
    developmentType: null
  },

  // Pale yellow – RESIDENTIAL ONLY 2
  { lotNumber: 111, size: "941m²",  developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 112, size: "3368m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 113, size: "903m²",  developmentType: "RESIDENTIAL ONLY 2" },

  { lotNumber: 114, size: "773m²",  developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 115, size: "945m²",  developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 116, size: "1007m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 117, size: "1467m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 118, size: "1149m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 119, size: "1430m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 120, size: "1672m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 121, size: "1836m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 122, size: "1489m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 123, size: "832m²",  developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 124, size: "2576m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 125, size: "3451m²", developmentType: "RESIDENTIAL ONLY 2" },

  // Peach/orange – MEDIUM DENSITY RESIDENTIAL 1
  { lotNumber: 126, size: "33512m²", developmentType: "MEDIUM DENSITY RESIDENTIAL 1" },
  // Left yellow column
  { lotNumber: 214, size: "676m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 215, size: "546m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 216, size: "531m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 217, size: "507m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 218, size: "597m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 219, size: "684m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 220, size: "745m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 221, size: "518m²", developmentType: "RESIDENTIAL ONLY 2" },

  // Bottom yellow strip along STREET 13.00m (sizes for 208–205 are best-effort)
  { lotNumber: 213, size: "533m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 212, size: "520m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 211, size: "540m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 210, size: "523m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 209, size: "543m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 208, size: "472m²", developmentType: "RESIDENTIAL ONLY 2" }, // first digit partly hidden
  { lotNumber: 207, size: "503m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 206, size: "499m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 205, size: "505m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 204, size: "539m²", developmentType: "RESIDENTIAL ONLY 2" },

  // Lower right yellow lots (near 203–200)
  { lotNumber: 198, size: "887m²",  developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 199, size: "1166m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 200, size: "1207m²", developmentType: "RESIDENTIAL ONLY 2" }, // leading "1" is faint
  { lotNumber: 201, size: "1589m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 202, size: "846m²",  developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 203, size: "1560m²", developmentType: "RESIDENTIAL ONLY 2" },

  // Mid-row yellow lots near P.O.S 254 (still RES ONLY 2)
  { lotNumber: 231, size: "649m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 232, size: "735m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 233, size: "805m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 234, size: "821m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 235, size: "698m²", developmentType: "RESIDENTIAL ONLY 2" },
  { lotNumber: 236, size: "579m²", developmentType: "RESIDENTIAL ONLY 2" },

  // Band under "RESIDENTIAL ONLY 3" label
  { lotNumber: 237, size: "1178m²", developmentType: "RESIDENTIAL ONLY 3" },
  { lotNumber: 238, size: "1115m²", developmentType: "RESIDENTIAL ONLY 3" },
  { lotNumber: 239, size: "960m²",  developmentType: "RESIDENTIAL ONLY 3" },
  { lotNumber: 240, size: "1105m²", developmentType: "RESIDENTIAL ONLY 3" },
  { lotNumber: 241, size: "1147m²", developmentType: "RESIDENTIAL ONLY 3" },
  { lotNumber: 242, size: "1415m²", developmentType: "RESIDENTIAL ONLY 3" },
  { lotNumber: 243, size: "1596m²", developmentType: "RESIDENTIAL ONLY 3" },
  { lotNumber: 244, size: "1265m²", developmentType: "RESIDENTIAL ONLY 3" },
  { lotNumber: 245, size: "1231m²", developmentType: "RESIDENTIAL ONLY 3" },

  // Peach / orange and open-space lots in this view
  { lotNumber: 227, size: "7552m²", developmentType: "MEDIUM DENSITY RESIDENTIAL 1" },
  { lotNumber: 228, size: "1765m²", developmentType: "MUNICIPAL AND GOVERNMENT" },
  { lotNumber: 230, size: "6905m²", developmentType: "MEDIUM DENSITY RESIDENTIAL 1" },
  { lotNumber: 204, size: "8244m²", developmentType: "MEDIUM DENSITY RESIDENTIAL 1" }, // large peach parcel

  { lotNumber: 252, size: "2003m²", landUse: "P.O.S",              developmentType: null },
  { lotNumber: 253, size: "5631m²", landUse: "PRIVATE O.S",        developmentType: null },
  { lotNumber: 254, size: "4609m²", landUse: "P.O.S",              developmentType: null },
  { lotNumber: 257, size: "12947m²", landUse: "Conservation Reserve", developmentType: null },
   // Large peach lots
  {
    lotNumber: 225,
    size: "112285m²",
    developmentType: "MEDIUM DENSITY RESIDENTIAL 1"
  },
  {
    lotNumber: 229,
    size: "68318m²",
    developmentType: "MEDIUM DENSITY RESIDENTIAL 1"
  },

  // Orange lot
  {
    lotNumber: 226,
    size: "5083m²",
    developmentType: "MUNICIPAL AND GOVERNMENT"
  },

  // Private Conservation Reserve pieces
  {
    lotNumber: 259,
    size: null,               // area text not visible in this crop
    landUse: "Private Conservation Reserve",
    developmentType: null
  },
  {
    lotNumber: 260,
    size: null,               // area mostly obscured
    landUse: "Private Conservation Reserve",
    developmentType: null
  },
  {
    lotNumber: 261,
    size: "55583m²",
    landUse: "Private Conservation Reserve",
    developmentType: null
  },

  // Small yellow residential lots at bottom-right
  {
    lotNumber: 243,
    size: "996m²",            // best read from image
    developmentType: "RESIDENTIAL ONLY 2"
  },
  {
    lotNumber: 244,
    size: "2509m²",
    developmentType: "RESIDENTIAL ONLY 2"
  },
  {
    lotNumber: 245,
    size: "2099m²",
    developmentType: "RESIDENTIAL ONLY 2"
  },
  {
    lotNumber: 246,
    size: "1178m²",
    developmentType: "RESIDENTIAL ONLY 2"
  },
  {
    lotNumber: 247,
    size: "1454m²",
    developmentType: "RESIDENTIAL ONLY 2"
  },
  {
    lotNumber: 248,
    size: "976m²",
    developmentType: "RESIDENTIAL ONLY 2"
  },
  {
    lotNumber: 249,
    size: "1169m²",
    developmentType: "RESIDENTIAL ONLY 2"
  },

   // Main peach parcel (labelled 1A)
  {
    lotNumber: 8,                     // "Portion 8 of Portion 1..."
    label: "1A",
    size: "240717m²",
    description: "Portion 8 of Portion 1 of Erf 1 Renishaw",
    developmentType: "MEDIUM DENSITY RESIDENTIAL 1"
  },

  // Private Conservation Reserve at top
  {
    lotNumber: 9,                     // "Portion 9 of Portion 1..."
    size: "76252m²",
    description: "Portion 9 of Portion 1 of Erf 1 Renishaw",
    landUse: "Private Conservation Reserve",
    developmentType: null
  },

  // Private Conservation Reserve strip through the middle
  {
    lotNumber: null,
    size: null,                       // area text not visible in this crop
    landUse: "Private Conservation Reserve",
    developmentType: null
  },

  // Private Conservation Reserve polygon on right
  {
    lotNumber: null,
    size: null,                       // area text obscured
    landUse: "Private Conservation Reserve",
    developmentType: null
  },

  // Small orange PUBLIC BUILDING & SERVICES lot at bottom (partly hidden)
  {
    lotNumber: null,
    size: "1939m²",
    label: "PUBLIC BUILDINGS & SERVICES",
    developmentType: "MUNICIPAL AND GOVERNMENT"
  },
   // Peach parcels = MEDIUM DENSITY RESIDENTIAL 1
  {
    lotNumber: 12,
    size: "15380m²",
    description: "Portion 12 of Portion 1 of Erf 1 Renishaw",
    developmentType: "MEDIUM DENSITY RESIDENTIAL 1"
  },
  {
    lotNumber: 14,
    size: "52530m²",
    description: "Portion 14 of Portion 6 of Erf 1 Renishaw",
    developmentType: "MEDIUM DENSITY RESIDENTIAL 1"
  },

  // Small bright-orange lot = MUNICIPAL AND GOVERNMENT
  {
    lotNumber: 13,
    size: "1585m²",
    description: "Portion 13 of Portion 6 of Erf 1 Renishaw",
    developmentType: "MUNICIPAL AND GOVERNMENT"
  },

  // Green Private Conservation Reserve areas
  {
    lotNumber: 10,
    size: "186434m²",
    description: "Portion 10 of Portion 1 of Erf 1 Renishaw",
    landUse: "Private Conservation Reserve",
    developmentType: null
  },
  {
    lotNumber: 15,
    size: "155329m²",
    description: "Portion 15 of Portion 6 of Erf 1 Renishaw",
    landUse: "Private Conservation Reserve",
    developmentType: null
  },
   {
    lotNumber: 16,
    size: null, // area text is obscured in this crop
    description: "Portion 16 of Portion 6 of Erf 1 Renishaw",
    landUse: "Private Conservation Reserve",
    developmentType: null
  }
];
