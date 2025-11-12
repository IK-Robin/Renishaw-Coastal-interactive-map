// old data 

// const node_1_data = [
//   {
//     lotNumber: 180,
//     size: "3802m²",
//     label: "",
//     developmentType: "WORSHIP"               // purple lot
//   },
//   {
//     lotNumber: 181,
//     size: "5220 m²",
//     label: "Local Residential 1",
//     developmentType: "MEDIUM DENSITY RESIDENTIAL 1" // same orange tone as MD Res 1
//   },
//   {
//     lotNumber: 182,
//     size: "6060 m²",
//     label: "",
//     developmentType: "MEDIUM DENSITY RESIDENTIAL 1" // same orange tone
//   },
//   {
//     lotNumber: 183,
//     size: "21994m²",
//     label: "",
//     developmentType: "URBAN AGRICULTURE 2"   // olive-green lot
//   },
//   {
//     lotNumber: 184,
//     size: "5806 m²",
//     label: "Local Residential 1",
//     developmentType: "MEDIUM DENSITY RESIDENTIAL 1" // orange residential strip
//   },
//   {
//     lotNumber: 185,
//     size: "4504m²",
//     label: "Local Residential 1",
//     developmentType: "MEDIUM DENSITY RESIDENTIAL 1"
//   },
//   {
//     lotNumber: 186,
//     size: "5380 m²",
//     label: "",
//     developmentType: "MULTI-PURPOSE RETAIL"  // bright cyan, same as 189
//   },
//   {
//     lotNumber: 187,
//     size: "2578 m²",
//     label: "",
//     developmentType: "WORSHIP"               // same purple as 180
//   },
//   {
//     lotNumber: 188,
//     size: "14815m²",
//     label: "",
//     developmentType: "MULTI-PURPOSE RETAIL"  // cyan
//   },
//   {
//     lotNumber: 189,
//     size: "26538m²",
//     label: "MULTI USE RETAIL 1",
//     developmentType: "MULTI-PURPOSE RETAIL"  // cyan
//   },
//   {
//     lotNumber: 190,
//     size: "7203 m²",
//     label: "Private Conservation Reserve",
//     developmentType: null                    // not in the legend you gave
//   },
//   {
//     lotNumber: 192,
//     size: "85223 m²",
//     label: "Private Conservation Reserve",
//     developmentType: null                    // not in the legend
//   },
//   {
//     lotNumber: 193,
//     size: "",
//     label: "",
//     developmentType: null                    // tiny road piece, no fill/type
//   },
//   { lotNumber: 3,  size: "336m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 4,  size: "371m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 5,  size: "499m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 6,  size: "906m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 7,  size: "1206m²", developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 8,  size: "374m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 9,  size: "343m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 10, size: "486m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 11, size: "1611m²", developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 12, size: "622m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 13, size: "545m²",  developmentType: "RESIDENTIAL ONLY 1" },

//   { lotNumber: 20, size: "402m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 21, size: "385m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 22, size: "295m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 23, size: "217m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 24, size: "226m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 25, size: "217m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 26, size: "211m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 27, size: "167m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 28, size: "278m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 29, size: "233m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 30, size: "210m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 31, size: "216m²",  developmentType: "RESIDENTIAL ONLY 1" }, // size partly obscured; best guess

//   { lotNumber: 32, size: "207m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 33, size: "176m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 34, size: "158m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 35, size: "157m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 36, size: "178m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 37, size: "102m²",  developmentType: "RESIDENTIAL ONLY 1" }, // low confidence
//   { lotNumber: 38, size: "145m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 39, size: "197m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 40, size: "137m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 41, size: "248m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 42, size: "228m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 43, size: "132m²",  developmentType: "RESIDENTIAL ONLY 1" }, // low confidence
//   { lotNumber: 44, size: "171m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 45, size: "178m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 46, size: "193m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 47, size: "221m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 48, size: "285m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 49, size: "425m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 50, size: "446m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 51, size: "312m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 52, size: "381m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 53, size: "381m²",  developmentType: "RESIDENTIAL ONLY 1" }, // approximate; label partly obscured
//   { lotNumber: 54, size: "478m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 55, size: "538m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 56, size: "699m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 57, size: "489m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 58, size: "418m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 59, size: "408m²",  developmentType: "RESIDENTIAL ONLY 1" },

//   // plus:
//   { lotNumber: 2, size: "910m²",  developmentType: "RESIDENTIAL ONLY 1" },
//    // RESIDENTIAL ONLY 2 (pale yellow, left)
//   { lotNumber: 91,  size: "1450m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 92,  size: "1772m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 93,  size: "1514m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 94,  size: "1333m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 95,  size: "1186m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 96,  size: "1421m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 97,  size: "1247m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 98,  size: "1747m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 99,  size: "939m²",  developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 100, size: "830m²",  developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 101, size: "1571m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 102, size: "1717m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 103, size: "1607m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 104, size: "3015m²", developmentType: "RESIDENTIAL ONLY 2" },

//   // RESIDENTIAL ONLY 1 (bright yellow, right cluster)
//   { lotNumber: 66, size: "300m²",  developmentType: "RESIDENTIAL ONLY 1" }, // approx
//   { lotNumber: 67, size: "432m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 68, size: "409m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 69, size: "300m²",  developmentType: "RESIDENTIAL ONLY 1" }, // approx
//   { lotNumber: 70, size: "232m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 71, size: "257m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 72, size: "279m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 73, size: "279m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 74, size: "288m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 75, size: "288m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 76, size: "366m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 77, size: "779m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 78, size: "980m²",  developmentType: "RESIDENTIAL ONLY 1" },
//   { lotNumber: 79, size: "1269m²", developmentType: "RESIDENTIAL ONLY 1" },

//   // Cemetery (orange)
//   { lotNumber: 80, size: "6865m²", developmentType: "INSTITUTION" },
//   // Yellow residential (RESIDENTIAL ONLY 2)
//   { lotNumber: 109, size: "1057m²", developmentType: "RESIDENTIAL ONLY 2" },

//   { lotNumber: 127, size: "850m²",  developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 128, size: "1054m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 129, size: "2032m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 130, size: "1073m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 131, size: "1038m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 132, size: "1269m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 133, size: "228m²",  developmentType: "RESIDENTIAL ONLY 2" },

//   { lotNumber: 134, size: "6768m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 135, size: "1738m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 136, size: "1416m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 137, size: "1370m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 138, size: "1263m²", developmentType: "RESIDENTIAL ONLY 2" },

//   { lotNumber: 140, size: "1939m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 141, size: "961m²",  developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 142, size: "914m²",  developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 143, size: "906m²",  developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 144, size: "916m²",  developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 145, size: "999m²",  developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 146, size: "1527m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 147, size: "1191m²", developmentType: "RESIDENTIAL ONLY 2" },

//   { lotNumber: 148, size: "1262m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 149, size: "1479m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 150, size: "1111m²", developmentType: "RESIDENTIAL ONLY 2" }, // top by the road
//   { lotNumber: 150, size: "1358m²", developmentType: "RESIDENTIAL ONLY 2" }, // bottom lot – number appears duplicated in the plan
//   { lotNumber: 151, size: "2068m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 152, size: "2513m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 153, size: "1432m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 154, size: "1768m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 155, size: "1698m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 156, size: "2618m²", developmentType: "RESIDENTIAL ONLY 2" },

//   { lotNumber: 157, size: "914m²",  developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 158, size: "977m²",  developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 159, size: "2809m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 160, size: "903m²",  developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 161, size: "1493m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 162, size: "1266m²", developmentType: "RESIDENTIAL ONLY 2" },

//   // Orange lot in the middle
//   {
//     lotNumber: 139,
//     size: "2660m²",
//     developmentType: "MUNICIPAL AND GOVERNMENT"
//   },

//   // Purple institution lot
//   {
//     lotNumber: 110,
//     size: "15239m²",
//     label: "INSTITUTION",
//     developmentType: "INSTITUTION"
//   },

//   // Green area (farmland style – Urban Agriculture 2)
//   {
//     lotNumber: 168,
//     size: "9638m²",
//     developmentType: "URBAN AGRICULTURE 2"
//   },

//   // Open space / conservation (grey/other colours)
//   {
//     lotNumber: 163,
//     size: "8432m²",
//     label: "P.O.S",
//     developmentType: null
//   },
//   {
//     lotNumber: 167,
//     size: "2092m²",
//     label: "P.U.B",
//     developmentType: null
//   },
//   {
//     lotNumber: 166,
//     size: "2906m²",
//     label: "Private Conservation Reserve",
//     developmentType: null
//   },

//   // Pale yellow – RESIDENTIAL ONLY 2
//   { lotNumber: 111, size: "941m²",  developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 112, size: "3368m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 113, size: "903m²",  developmentType: "RESIDENTIAL ONLY 2" },

//   { lotNumber: 114, size: "773m²",  developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 115, size: "945m²",  developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 116, size: "1007m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 117, size: "1467m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 118, size: "1149m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 119, size: "1430m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 120, size: "1672m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 121, size: "1836m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 122, size: "1489m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 123, size: "832m²",  developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 124, size: "2576m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 125, size: "3451m²", developmentType: "RESIDENTIAL ONLY 2" },

//   // Peach/orange – MEDIUM DENSITY RESIDENTIAL 1
//   { lotNumber: 126, size: "33512m²", developmentType: "MEDIUM DENSITY RESIDENTIAL 1" },
//   // Left yellow column
//   { lotNumber: 214, size: "676m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 215, size: "546m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 216, size: "531m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 217, size: "507m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 218, size: "597m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 219, size: "684m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 220, size: "745m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 221, size: "518m²", developmentType: "RESIDENTIAL ONLY 2" },

//   // Bottom yellow strip along STREET 13.00m (sizes for 208–205 are best-effort)
//   { lotNumber: 213, size: "533m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 212, size: "520m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 211, size: "540m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 210, size: "523m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 209, size: "543m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 208, size: "472m²", developmentType: "RESIDENTIAL ONLY 2" }, // first digit partly hidden
//   { lotNumber: 207, size: "503m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 206, size: "499m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 205, size: "505m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 204, size: "539m²", developmentType: "RESIDENTIAL ONLY 2" },

//   // Lower right yellow lots (near 203–200)
//   { lotNumber: 198, size: "887m²",  developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 199, size: "1166m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 200, size: "1207m²", developmentType: "RESIDENTIAL ONLY 2" }, // leading "1" is faint
//   { lotNumber: 201, size: "1589m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 202, size: "846m²",  developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 203, size: "1560m²", developmentType: "RESIDENTIAL ONLY 2" },

//   // Mid-row yellow lots near P.O.S 254 (still RES ONLY 2)
//   { lotNumber: 231, size: "649m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 232, size: "735m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 233, size: "805m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 234, size: "821m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 235, size: "698m²", developmentType: "RESIDENTIAL ONLY 2" },
//   { lotNumber: 236, size: "579m²", developmentType: "RESIDENTIAL ONLY 2" },

//   // Band under "RESIDENTIAL ONLY 3" label
//   { lotNumber: 237, size: "1178m²", developmentType: "RESIDENTIAL ONLY 3" },
//   { lotNumber: 238, size: "1115m²", developmentType: "RESIDENTIAL ONLY 3" },
//   { lotNumber: 239, size: "960m²",  developmentType: "RESIDENTIAL ONLY 3" },
//   { lotNumber: 240, size: "1105m²", developmentType: "RESIDENTIAL ONLY 3" },
//   { lotNumber: 241, size: "1147m²", developmentType: "RESIDENTIAL ONLY 3" },
//   { lotNumber: 242, size: "1415m²", developmentType: "RESIDENTIAL ONLY 3" },
//   { lotNumber: 243, size: "1596m²", developmentType: "RESIDENTIAL ONLY 3" },
//   { lotNumber: 244, size: "1265m²", developmentType: "RESIDENTIAL ONLY 3" },
//   { lotNumber: 245, size: "1231m²", developmentType: "RESIDENTIAL ONLY 3" },

//   // Peach / orange and open-space lots in this view
//   { lotNumber: 227, size: "7552m²", developmentType: "MEDIUM DENSITY RESIDENTIAL 1" },
//   { lotNumber: 228, size: "1765m²", developmentType: "MUNICIPAL AND GOVERNMENT" },
//   { lotNumber: 230, size: "6905m²", developmentType: "MEDIUM DENSITY RESIDENTIAL 1" },
//   { lotNumber: 204, size: "8244m²", developmentType: "MEDIUM DENSITY RESIDENTIAL 1" }, // large peach parcel

//   { lotNumber: 252, size: "2003m²", landUse: "P.O.S",              developmentType: null },
//   { lotNumber: 253, size: "5631m²", landUse: "PRIVATE O.S",        developmentType: null },
//   { lotNumber: 254, size: "4609m²", landUse: "P.O.S",              developmentType: null },
//   { lotNumber: 257, size: "12947m²", landUse: "Conservation Reserve", developmentType: null },
//    // Large peach lots
//   {
//     lotNumber: 225,
//     size: "112285m²",
//     developmentType: "MEDIUM DENSITY RESIDENTIAL 1"
//   },
//   {
//     lotNumber: 229,
//     size: "68318m²",
//     developmentType: "MEDIUM DENSITY RESIDENTIAL 1"
//   },

//   // Orange lot
//   {
//     lotNumber: 226,
//     size: "5083m²",
//     developmentType: "MUNICIPAL AND GOVERNMENT"
//   },

//   // Private Conservation Reserve pieces
//   {
//     lotNumber: 259,
//     size: null,               // area text not visible in this crop
//     landUse: "Private Conservation Reserve",
//     developmentType: null
//   },
//   {
//     lotNumber: 260,
//     size: null,               // area mostly obscured
//     landUse: "Private Conservation Reserve",
//     developmentType: null
//   },
//   {
//     lotNumber: 261,
//     size: "55583m²",
//     landUse: "Private Conservation Reserve",
//     developmentType: null
//   },

//   // Small yellow residential lots at bottom-right
//   {
//     lotNumber: 243,
//     size: "996m²",            // best read from image
//     developmentType: "RESIDENTIAL ONLY 2"
//   },
//   {
//     lotNumber: 244,
//     size: "2509m²",
//     developmentType: "RESIDENTIAL ONLY 2"
//   },
//   {
//     lotNumber: 245,
//     size: "2099m²",
//     developmentType: "RESIDENTIAL ONLY 2"
//   },
//   {
//     lotNumber: 246,
//     size: "1178m²",
//     developmentType: "RESIDENTIAL ONLY 2"
//   },
//   {
//     lotNumber: 247,
//     size: "1454m²",
//     developmentType: "RESIDENTIAL ONLY 2"
//   },
//   {
//     lotNumber: 248,
//     size: "976m²",
//     developmentType: "RESIDENTIAL ONLY 2"
//   },
//   {
//     lotNumber: 249,
//     size: "1169m²",
//     developmentType: "RESIDENTIAL ONLY 2"
//   },

//    // Main peach parcel (labelled 1A)
//   {
//     lotNumber: 8,                     // "Portion 8 of Portion 1..."
//     label: "1A",
//     size: "240717m²",
//     description: "Portion 8 of Portion 1 of Erf 1 Renishaw",
//     developmentType: "MEDIUM DENSITY RESIDENTIAL 1"
//   },

//   // Private Conservation Reserve at top
//   {
//     lotNumber: 9,                     // "Portion 9 of Portion 1..."
//     size: "76252m²",
//     description: "Portion 9 of Portion 1 of Erf 1 Renishaw",
//     landUse: "Private Conservation Reserve",
//     developmentType: null
//   },

//   // Private Conservation Reserve strip through the middle
//   {
//     lotNumber: null,
//     size: null,                       // area text not visible in this crop
//     landUse: "Private Conservation Reserve",
//     developmentType: null
//   },

//   // Private Conservation Reserve polygon on right
//   {
//     lotNumber: null,
//     size: null,                       // area text obscured
//     landUse: "Private Conservation Reserve",
//     developmentType: null
//   },

//   // Small orange PUBLIC BUILDING & SERVICES lot at bottom (partly hidden)
//   {
//     lotNumber: null,
//     size: "1939m²",
//     label: "PUBLIC BUILDINGS & SERVICES",
//     developmentType: "MUNICIPAL AND GOVERNMENT"
//   },
//    // Peach parcels = MEDIUM DENSITY RESIDENTIAL 1
//   {
//     lotNumber: 12,
//     size: "15380m²",
//     description: "Portion 12 of Portion 1 of Erf 1 Renishaw",
//     developmentType: "MEDIUM DENSITY RESIDENTIAL 1"
//   },
//   {
//     lotNumber: 14,
//     size: "52530m²",
//     description: "Portion 14 of Portion 6 of Erf 1 Renishaw",
//     developmentType: "MEDIUM DENSITY RESIDENTIAL 1"
//   },

//   // Small bright-orange lot = MUNICIPAL AND GOVERNMENT
//   {
//     lotNumber: 13,
//     size: "1585m²",
//     description: "Portion 13 of Portion 6 of Erf 1 Renishaw",
//     developmentType: "MUNICIPAL AND GOVERNMENT"
//   },

//   // Green Private Conservation Reserve areas
//   {
//     lotNumber: 10,
//     size: "186434m²",
//     description: "Portion 10 of Portion 1 of Erf 1 Renishaw",
//     landUse: "Private Conservation Reserve",
//     developmentType: null
//   },
//   {
//     lotNumber: 15,
//     size: "155329m²",
//     description: "Portion 15 of Portion 6 of Erf 1 Renishaw",
//     landUse: "Private Conservation Reserve",
//     developmentType: null
//   },
//    {
//     lotNumber: 16,
//     size: null, // area text is obscured in this crop
//     description: "Portion 16 of Portion 6 of Erf 1 Renishaw",
//     landUse: "Private Conservation Reserve",
//     developmentType: null
//   }
// ];

const node1_id = [
  "node_1_154",
  "node_1_153",
  "node_1_109",
  "node_1_108",
  "node_1_107",
  "node_1_105",
  "node_1_103",
  "node_1_123",
  "node_1_121",
  "node_1_119",
  "node_1_116",
  "node_1_115",
  "node_1_114",
  "node_1_90",
  "node_1_180",
  "node_1_80",
  "node_1_60",
  "node_1_61",
  "node_1_62",
  "node_1_63",
  "node_1_58",
  "node_1_56",
  "node_1_57",
  "node_1_53",
  "node_1_52",
  "node_1_51",
  "node_1_50",
  "node_1_49",
  "node_1_54",
  "node_1_76",
  "node_1_55",
  "node_1_78",
  "node_1_79",
  "node_1_32",
  "node_1_46",
  "node_1_47",
  "node_1_48",
  "node_1_38",
  "node_1_39",
  "node_1_45",
  "node_1_44",
  "node_1_31",
  "node_1_30",
  "node_1_28",
  "node_1_27",
  "node_1_26",
  "node_1_25",
  "node_1_24",
  "node_1_10",
  "node_1_12",
  "node_1_13",
  "node_1_15380",
  "node_1_52530",
  "node_1_204",
  "node_1_126",
  "node_1_240717",
  "node_1_227",
  "node_1_229",
  "node_1_151",
  "node_1_239",
  "node_1_68",
  "node_1_4",
  "node_1_5",
  "node_1_160",
  "node_1_16",
  "node_1_15",
  "node_1_195",
  "node_1_67",
  "node_1_189",
  "node_1_181",
  "node_1_190",
  "node_1_182",
  "node_1_125",
  "node_1_225",
  "node_1_137",
  "node_1_124",
  "node_1_122",
  "node_1_120",
  "node_1_119-2",
  "node_1_117",
  "node_1_228",
  "node_1_186",
  "node_1_33",
  "node_1_34",
  "node_1_35",
  "node_1_98",
  "node_1_97",
  "node_1_96",
  "node_1_95",
  "node_1_92",
  "node_1_91",
  "node_1_100",
  "node_1_152",
  "node_1_156",
  "node_1_163",
  "node_1_183",
  "node_1_187",
  "node_1_59",
  "node_1_3",
  "node_1_8",
  "node_1_9",
  "node_1_110",
  "node_1_217",
  "node_1_255",
  "node_1_185",
  "node_1_184",
  "node_1_11",
  "node_1_1",
  "node_1_149",
  "node_1_112",
  "node_1_111",
  "node_1_113",
  "node_1_139",
  "node_1_148",
  "node_1_101",
  "node_1_104",
  "node_1_102",
  "node_1_106",
  "node_1_136",
  "node_1_138",
  "node_1_145",
  "node_1_133",
  "node_1_159",
  "node_1_162",
  "node_1_1585_m",
  "node_1_249",
  "node_1_1939_m",
  "node_1_29",
  "node_1_188",
  "node_1_6",
  "node_1_7",
  "node_1_23",
  "node_1_22",
  "node_1_19",
  "node_1_17",
  "node_1_14",
  "node_1_81",
  "node_1_43",
  "node_1_42",
  "node_1_75",
  "node_1_74",
  "node_1_73",
  "node_1_72",
  "node_1_71",
  "node_1_70",
  "node_1_69",
  "node_1_77",
  "node_1_21",
  "node_1_20",
  "node_1_18",
  "node_1_64",
  "node_1_65",
  "node_1_66",
  "node_1_41",
  "node_1_40",
  "node_1_36",
  "node_1_37",
  "node_1_93",
  "node_1_94",
  "node_1_155",
  "node_1_150",
  "node_1_161",
  "node_1_158",
  "node_1_157",
  "node_1_150-2",
  "node_1_147",
  "node_1_142",
  "node_1_143",
  "node_1_166",
  "node_1_236",
  "node_1_235",
  "node_1_234",
  "node_1_233",
  "node_1_232",
  "node_1_231",
  "node_1_246",
  "node_1_247",
  "node_1_248",
  "node_1_251",
  "node_1_205",
  "node_1_206",
  "node_1_207",
  "node_1_208",
  "node_1_209",
  "node_1_210",
  "node_1_211",
  "node_1_212",
  "node_1_213",
  "node_1_252",
  "node_1_253",
  "node_1_214",
  "node_1_215",
  "node_1_216",
  "node_1_218",
  "node_1_219",
  "node_1_220",
  "node_1_221",
  "node_1_222",
  "node_1_223",
  "node_1_224",
  "node_1_134",
  "node_1_135",
  "node_1_140",
  "node_1_141",
  "node_1_144",
  "node_1_146",
  "node_1_132",
  "node_1_131",
  "node_1_130",
  "node_1_129",
  "node_1_226_M",
  "node_1_129-2",
  "node_1_238",
  "node_1_243",
  "node_1_244",
  "node_1_245",
  "node_1_228-2",
  "node_1_227-2",
  "node_1_199",
  "node_1_200",
  "node_1_202",
  "node_1_198",
  "node_1_203",
  "node_1_201",
  "node_1_240",
  "node_1_241",
  "node_1_242",
  "node_1_164"
]

// new node 1 data the main lot data 


const node_1_data_main = [
  {
    "id": "node_1_2",
    "lotNumber": 2,
    "size": "910m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_3",
    "lotNumber": 3,
    "size": "336m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_4",
    "lotNumber": 4,
    "size": "371m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_5",
    "lotNumber": 5,
    "size": "499m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_6",
    "lotNumber": 6,
    "size": "906m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_7",
    "lotNumber": 7,
    "size": "1206m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_8",
    "lotNumber": 8,
    "size": "374m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_8",
    "lotNumber": 8,
    "label": "1A",
    "size": "240717m²",
    "description": "Portion 8 of Portion 1 of Erf 1 Renishaw",
    "developmentType": "MEDIUM DENSITY RESIDENTIAL 1"
  },
  {
    "id": "node_1_9",
    "lotNumber": 9,
    "size": "343m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_9",
    "lotNumber": 9,
    "size": "76252m²",
    "description": "Portion 9 of Portion 1 of Erf 1 Renishaw",
    "landUse": "Private Conservation Reserve",
    "developmentType": null
  },
  {
    "id": "node_1_10",
    "lotNumber": 10,
    "size": "486m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_10",
    "lotNumber": 10,
    "size": "186434m²",
    "description": "Portion 10 of Portion 1 of Erf 1 Renishaw",
    "landUse": "Private Conservation Reserve",
    "developmentType": null
  },
  {
    "id": "node_1_11",
    "lotNumber": 11,
    "size": "1611m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_12",
    "lotNumber": 12,
    "size": "622m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_12",
    "lotNumber": 12,
    "size": "15380m²",
    "description": "Portion 12 of Portion 1 of Erf 1 Renishaw",
    "developmentType": "MEDIUM DENSITY RESIDENTIAL 1"
  },
  {
    "id": "node_1_13",
    "lotNumber": 13,
    "size": "545m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_13",
    "lotNumber": 13,
    "size": "1585m²",
    "description": "Portion 13 of Portion 6 of Erf 1 Renishaw",
    "developmentType": "MUNICIPAL AND GOVERNMENT"
  },
  {
    "id": "node_1_14",
    "lotNumber": 14,
    "size": "52530m²",
    "description": "Portion 14 of Portion 6 of Erf 1 Renishaw",
    "developmentType": "MEDIUM DENSITY RESIDENTIAL 1"
  },
  {
    "id": "node_1_15",
    "lotNumber": 15,
    "size": "155329m²",
    "description": "Portion 15 of Portion 6 of Erf 1 Renishaw",
    "landUse": "Private Conservation Reserve",
    "developmentType": null
  },
  {
    "id": "node_1_16",
    "lotNumber": 16,
    "size": null,
    "description": "Portion 16 of Portion 6 of Erf 1 Renishaw",
    "landUse": "Private Conservation Reserve",
    "developmentType": null
  },
  {
    "id": "node_1_20",
    "lotNumber": 20,
    "size": "402m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_21",
    "lotNumber": 21,
    "size": "385m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_22",
    "lotNumber": 22,
    "size": "295m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_23",
    "lotNumber": 23,
    "size": "217m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_24",
    "lotNumber": 24,
    "size": "226m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_25",
    "lotNumber": 25,
    "size": "217m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_26",
    "lotNumber": 26,
    "size": "211m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_27",
    "lotNumber": 27,
    "size": "167m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_28",
    "lotNumber": 28,
    "size": "278m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_29",
    "lotNumber": 29,
    "size": "233m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_30",
    "lotNumber": 30,
    "size": "210m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_31",
    "lotNumber": 31,
    "size": "216m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_32",
    "lotNumber": 32,
    "size": "207m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_33",
    "lotNumber": 33,
    "size": "176m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_34",
    "lotNumber": 34,
    "size": "158m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_35",
    "lotNumber": 35,
    "size": "157m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_36",
    "lotNumber": 36,
    "size": "178m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_37",
    "lotNumber": 37,
    "size": "102m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_38",
    "lotNumber": 38,
    "size": "145m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_39",
    "lotNumber": 39,
    "size": "197m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_40",
    "lotNumber": 40,
    "size": "137m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_41",
    "lotNumber": 41,
    "size": "248m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_42",
    "lotNumber": 42,
    "size": "228m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_43",
    "lotNumber": 43,
    "size": "132m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_44",
    "lotNumber": 44,
    "size": "171m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_45",
    "lotNumber": 45,
    "size": "178m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_46",
    "lotNumber": 46,
    "size": "193m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_47",
    "lotNumber": 47,
    "size": "221m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_48",
    "lotNumber": 48,
    "size": "285m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_49",
    "lotNumber": 49,
    "size": "425m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_50",
    "lotNumber": 50,
    "size": "446m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_51",
    "lotNumber": 51,
    "size": "312m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_52",
    "lotNumber": 52,
    "size": "381m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_53",
    "lotNumber": 53,
    "size": "381m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_54",
    "lotNumber": 54,
    "size": "478m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_55",
    "lotNumber": 55,
    "size": "538m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_56",
    "lotNumber": 56,
    "size": "699m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_57",
    "lotNumber": 57,
    "size": "489m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_58",
    "lotNumber": 58,
    "size": "418m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_59",
    "lotNumber": 59,
    "size": "408m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_66",
    "lotNumber": 66,
    "size": "300m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_67",
    "lotNumber": 67,
    "size": "432m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_68",
    "lotNumber": 68,
    "size": "409m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_69",
    "lotNumber": 69,
    "size": "300m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_70",
    "lotNumber": 70,
    "size": "232m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_71",
    "lotNumber": 71,
    "size": "257m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_72",
    "lotNumber": 72,
    "size": "279m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_73",
    "lotNumber": 73,
    "size": "279m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_74",
    "lotNumber": 74,
    "size": "288m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_75",
    "lotNumber": 75,
    "size": "288m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_76",
    "lotNumber": 76,
    "size": "366m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_77",
    "lotNumber": 77,
    "size": "779m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_78",
    "lotNumber": 78,
    "size": "980m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_79",
    "lotNumber": 79,
    "size": "1269m²",
    "developmentType": "RESIDENTIAL ONLY 1"
  },
  {
    "id": "node_1_80",
    "lotNumber": 80,
    "size": "6865m²",
    "developmentType": "INSTITUTION"
  },
  {
    "id": "node_1_91",
    "lotNumber": 91,
    "size": "1450m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_92",
    "lotNumber": 92,
    "size": "1772m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_93",
    "lotNumber": 93,
    "size": "1514m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_94",
    "lotNumber": 94,
    "size": "1333m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_95",
    "lotNumber": 95,
    "size": "1186m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_96",
    "lotNumber": 96,
    "size": "1421m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_97",
    "lotNumber": 97,
    "size": "1247m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_98",
    "lotNumber": 98,
    "size": "1747m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_99",
    "lotNumber": 99,
    "size": "939m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_100",
    "lotNumber": 100,
    "size": "830m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_101",
    "lotNumber": 101,
    "size": "1571m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_102",
    "lotNumber": 102,
    "size": "1717m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_103",
    "lotNumber": 103,
    "size": "1607m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_104",
    "lotNumber": 104,
    "size": "3015m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_109",
    "lotNumber": 109,
    "size": "1057m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_110",
    "lotNumber": 110,
    "size": "15239m²",
    "label": "INSTITUTION",
    "developmentType": "INSTITUTION"
  },
  {
    "id": "node_1_111",
    "lotNumber": 111,
    "size": "941m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_112",
    "lotNumber": 112,
    "size": "3368m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_113",
    "lotNumber": 113,
    "size": "903m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_114",
    "lotNumber": 114,
    "size": "773m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_115",
    "lotNumber": 115,
    "size": "945m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_116",
    "lotNumber": 116,
    "size": "1007m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_117",
    "lotNumber": 117,
    "size": "1467m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_118",
    "lotNumber": 118,
    "size": "1149m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_119",
    "lotNumber": 119,
    "size": "1430m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_120",
    "lotNumber": 120,
    "size": "1672m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_121",
    "lotNumber": 121,
    "size": "1836m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_122",
    "lotNumber": 122,
    "size": "1489m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_123",
    "lotNumber": 123,
    "size": "832m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_124",
    "lotNumber": 124,
    "size": "2576m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_125",
    "lotNumber": 125,
    "size": "3451m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_126",
    "lotNumber": 126,
    "size": "33512m²",
    "developmentType": "MEDIUM DENSITY RESIDENTIAL 1"
  },
  {
    "id": "node_1_127",
    "lotNumber": 127,
    "size": "850m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_128",
    "lotNumber": 128,
    "size": "1054m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_129",
    "lotNumber": 129,
    "size": "2032m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_130",
    "lotNumber": 130,
    "size": "1073m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_131",
    "lotNumber": 131,
    "size": "1038m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_132",
    "lotNumber": 132,
    "size": "1269m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_133",
    "lotNumber": 133,
    "size": "228m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_134",
    "lotNumber": 134,
    "size": "6768m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_135",
    "lotNumber": 135,
    "size": "1738m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_136",
    "lotNumber": 136,
    "size": "1416m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_137",
    "lotNumber": 137,
    "size": "1370m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_138",
    "lotNumber": 138,
    "size": "1263m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_139",
    "lotNumber": 139,
    "size": "2660m²",
    "developmentType": "MUNICIPAL AND GOVERNMENT"
  },
  {
    "id": "node_1_140",
    "lotNumber": 140,
    "size": "1939m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_141",
    "lotNumber": 141,
    "size": "961m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_142",
    "lotNumber": 142,
    "size": "914m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_143",
    "lotNumber": 143,
    "size": "906m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_144",
    "lotNumber": 144,
    "size": "916m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_145",
    "lotNumber": 145,
    "size": "999m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_146",
    "lotNumber": 146,
    "size": "1527m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_147",
    "lotNumber": 147,
    "size": "1191m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_148",
    "lotNumber": 148,
    "size": "1262m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_149",
    "lotNumber": 149,
    "size": "1479m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_150",
    "lotNumber": 150,
    "size": "1111m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_150",
    "lotNumber": 150,
    "size": "1358m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_151",
    "lotNumber": 151,
    "size": "2068m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_152",
    "lotNumber": 152,
    "size": "2513m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_153",
    "lotNumber": 153,
    "size": "1432m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_154",
    "lotNumber": 154,
    "size": "1768m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_155",
    "lotNumber": 155,
    "size": "1698m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_156",
    "lotNumber": 156,
    "size": "2618m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_157",
    "lotNumber": 157,
    "size": "914m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_158",
    "lotNumber": 158,
    "size": "977m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_159",
    "lotNumber": 159,
    "size": "2809m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_160",
    "lotNumber": 160,
    "size": "903m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_161",
    "lotNumber": 161,
    "size": "1493m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_162",
    "lotNumber": 162,
    "size": "1266m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_163",
    "lotNumber": 163,
    "size": "8432m²",
    "label": "P.O.S",
    "developmentType": null
  },
  {
    "id": "node_1_166",
    "lotNumber": 166,
    "size": "2906m²",
    "label": "Private Conservation Reserve",
    "developmentType": null
  },
  {
    "id": "node_1_167",
    "lotNumber": 167,
    "size": "2092m²",
    "label": "P.U.B",
    "developmentType": null
  },
  {
    "id": "node_1_168",
    "lotNumber": 168,
    "size": "9638m²",
    "developmentType": "URBAN AGRICULTURE 2"
  },
  {
    "id": "node_1_180",
    "lotNumber": 180,
    "size": "3802m²",
    "label": "",
    "developmentType": "WORSHIP"
  },
  {
    "id": "node_1_181",
    "lotNumber": 181,
    "size": "5220 m²",
    "label": "Local Residential 1",
    "developmentType": "MEDIUM DENSITY RESIDENTIAL 1"
  },
  {
    "id": "node_1_182",
    "lotNumber": 182,
    "size": "6060 m²",
    "label": "",
    "developmentType": "MEDIUM DENSITY RESIDENTIAL 1"
  },
  {
    "id": "node_1_183",
    "lotNumber": 183,
    "size": "21994m²",
    "label": "",
    "developmentType": "URBAN AGRICULTURE 2"
  },
  {
    "id": "node_1_184",
    "lotNumber": 184,
    "size": "5806 m²",
    "label": "Local Residential 1",
    "developmentType": "MEDIUM DENSITY RESIDENTIAL 1"
  },
  {
    "id": "node_1_185",
    "lotNumber": 185,
    "size": "4504m²",
    "label": "Local Residential 1",
    "developmentType": "MEDIUM DENSITY RESIDENTIAL 1"
  },
  {
    "id": "node_1_186",
    "lotNumber": 186,
    "size": "5380 m²",
    "label": "",
    "developmentType": "MULTI-PURPOSE RETAIL"
  },
  {
    "id": "node_1_187",
    "lotNumber": 187,
    "size": "2578 m²",
    "label": "",
    "developmentType": "WORSHIP"
  },
  {
    "id": "node_1_188",
    "lotNumber": 188,
    "size": "14815m²",
    "label": "",
    "developmentType": "MULTI-PURPOSE RETAIL"
  },
  {
    "id": "node_1_189",
    "lotNumber": 189,
    "size": "26538m²",
    "label": "MULTI USE RETAIL 1",
    "developmentType": "MULTI-PURPOSE RETAIL"
  },
  {
    "id": "node_1_190",
    "lotNumber": 190,
    "size": "7203 m²",
    "label": "Private Conservation Reserve",
    "developmentType": null
  },
  {
    "id": "node_1_192",
    "lotNumber": 192,
    "size": "85223 m²",
    "label": "Private Conservation Reserve",
    "developmentType": null
  },
  {
    "id": "node_1_193",
    "lotNumber": 193,
    "size": "",
    "label": "",
    "developmentType": null
  },
  {
    "id": "node_1_198",
    "lotNumber": 198,
    "size": "887m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_199",
    "lotNumber": 199,
    "size": "1166m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_200",
    "lotNumber": 200,
    "size": "1207m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_201",
    "lotNumber": 201,
    "size": "1589m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_202",
    "lotNumber": 202,
    "size": "846m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_203",
    "lotNumber": 203,
    "size": "1560m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_204",
    "lotNumber": 204,
    "size": "539m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_204",
    "lotNumber": 204,
    "size": "8244m²",
    "developmentType": "MEDIUM DENSITY RESIDENTIAL 1"
  },
  {
    "id": "node_1_205",
    "lotNumber": 205,
    "size": "505m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_206",
    "lotNumber": 206,
    "size": "499m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_207",
    "lotNumber": 207,
    "size": "503m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_208",
    "lotNumber": 208,
    "size": "472m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_209",
    "lotNumber": 209,
    "size": "543m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_210",
    "lotNumber": 210,
    "size": "523m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_211",
    "lotNumber": 211,
    "size": "540m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_212",
    "lotNumber": 212,
    "size": "520m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_213",
    "lotNumber": 213,
    "size": "533m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_214",
    "lotNumber": 214,
    "size": "676m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_215",
    "lotNumber": 215,
    "size": "546m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_216",
    "lotNumber": 216,
    "size": "531m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_217",
    "lotNumber": 217,
    "size": "507m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_218",
    "lotNumber": 218,
    "size": "597m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_219",
    "lotNumber": 219,
    "size": "684m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_220",
    "lotNumber": 220,
    "size": "745m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_221",
    "lotNumber": 221,
    "size": "518m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_225",
    "lotNumber": 225,
    "size": "112285m²",
    "developmentType": "MEDIUM DENSITY RESIDENTIAL 1"
  },
  {
    "id": "node_1_226",
    "lotNumber": 226,
    "size": "5083m²",
    "developmentType": "MUNICIPAL AND GOVERNMENT"
  },
  {
    "id": "node_1_227",
    "lotNumber": 227,
    "size": "7552m²",
    "developmentType": "MEDIUM DENSITY RESIDENTIAL 1"
  },
  {
    "id": "node_1_228",
    "lotNumber": 228,
    "size": "1765m²",
    "developmentType": "MUNICIPAL AND GOVERNMENT"
  },
  {
    "id": "node_1_229",
    "lotNumber": 229,
    "size": "68318m²",
    "developmentType": "MEDIUM DENSITY RESIDENTIAL 1"
  },
  {
    "id": "node_1_230",
    "lotNumber": 230,
    "size": "6905m²",
    "developmentType": "MEDIUM DENSITY RESIDENTIAL 1"
  },
  {
    "id": "node_1_231",
    "lotNumber": 231,
    "size": "649m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_232",
    "lotNumber": 232,
    "size": "735m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_233",
    "lotNumber": 233,
    "size": "805m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_234",
    "lotNumber": 234,
    "size": "821m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_235",
    "lotNumber": 235,
    "size": "698m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_236",
    "lotNumber": 236,
    "size": "579m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_237",
    "lotNumber": 237,
    "size": "1178m²",
    "developmentType": "RESIDENTIAL ONLY 3"
  },
  {
    "id": "node_1_238",
    "lotNumber": 238,
    "size": "1115m²",
    "developmentType": "RESIDENTIAL ONLY 3"
  },
  {
    "id": "node_1_239",
    "lotNumber": 239,
    "size": "960m²",
    "developmentType": "RESIDENTIAL ONLY 3"
  },
  {
    "id": "node_1_240",
    "lotNumber": 240,
    "size": "1105m²",
    "developmentType": "RESIDENTIAL ONLY 3"
  },
  {
    "id": "node_1_241",
    "lotNumber": 241,
    "size": "1147m²",
    "developmentType": "RESIDENTIAL ONLY 3"
  },
  {
    "id": "node_1_242",
    "lotNumber": 242,
    "size": "1415m²",
    "developmentType": "RESIDENTIAL ONLY 3"
  },
  {
    "id": "node_1_243",
    "lotNumber": 243,
    "size": "1596m²",
    "developmentType": "RESIDENTIAL ONLY 3"
  },
  {
    "id": "node_1_243",
    "lotNumber": 243,
    "size": "996m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_244",
    "lotNumber": 244,
    "size": "1265m²",
    "developmentType": "RESIDENTIAL ONLY 3"
  },
  {
    "id": "node_1_244",
    "lotNumber": 244,
    "size": "2509m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_245",
    "lotNumber": 245,
    "size": "1231m²",
    "developmentType": "RESIDENTIAL ONLY 3"
  },
  {
    "id": "node_1_245",
    "lotNumber": 245,
    "size": "2099m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_246",
    "lotNumber": 246,
    "size": "1178m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_247",
    "lotNumber": 247,
    "size": "1454m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_248",
    "lotNumber": 248,
    "size": "976m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_249",
    "lotNumber": 249,
    "size": "1169m²",
    "developmentType": "RESIDENTIAL ONLY 2"
  },
  {
    "id": "node_1_252",
    "lotNumber": 252,
    "size": "2003m²",
    "landUse": "P.O.S",
    "developmentType": null
  },
  {
    "id": "node_1_253",
    "lotNumber": 253,
    "size": "5631m²",
    "landUse": "PRIVATE O.S",
    "developmentType": null
  },
  {
    "id": "node_1_254",
    "lotNumber": 254,
    "size": "4609m²",
    "landUse": "P.O.S",
    "developmentType": null
  },
  {
    "id": "node_1_257",
    "lotNumber": 257,
    "size": "12947m²",
    "landUse": "Conservation Reserve",
    "developmentType": null
  },
  {
    "id": "node_1_259",
    "lotNumber": 259,
    "size": null,
    "landUse": "Private Conservation Reserve",
    "developmentType": null
  },
  {
    "id": "node_1_260",
    "lotNumber": 260,
    "size": null,
    "landUse": "Private Conservation Reserve",
    "developmentType": null
  },
  {
    "id": "node_1_261",
    "lotNumber": 261,
    "size": "55583m²",
    "landUse": "Private Conservation Reserve",
    "developmentType": null
  },
  {
    "id": null,
    "lotNumber": null,
    "size": null,
    "landUse": "Private Conservation Reserve",
    "developmentType": null
  },
  {
    "id": null,
    "lotNumber": null,
    "size": null,
    "landUse": "Private Conservation Reserve",
    "developmentType": null
  },
  {
    "id": null,
    "lotNumber": null,
    "size": "1939m²",
    "label": "PUBLIC BUILDINGS & SERVICES",
    "developmentType": "MUNICIPAL AND GOVERNMENT"
  }
]

const node_1_data = [
  {
    "id": "node_1_2",
    "lotNumber": 2,
    "size": "910m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 4492343
  },
  {
    "id": "node_1_3",
    "lotNumber": 3,
    "size": "336m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "sold",
    "price": 2212896
  },
  {
    "id": "node_1_4",
    "lotNumber": 4,
    "size": "371m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 2428626
  },
  {
    "id": "node_1_5",
    "lotNumber": 5,
    "size": "499m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 1810487
  },
  {
    "id": "node_1_6",
    "lotNumber": 6,
    "size": "906m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "sold",
    "price": 5406672
  },
  {
    "id": "node_1_7",
    "lotNumber": 7,
    "size": "1206m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 7521380
  },
  {
    "id": "node_1_8",
    "lotNumber": 8,
    "size": "374m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 1258113
  },
  {
    "id": "node_1_8",
    "lotNumber": 8,
    "label": "1A",
    "size": "240717m²",
    "description": "Portion 8 of Portion 1 of Erf 1 Renishaw",
    "developmentType": "MEDIUM DENSITY RESIDENTIAL 1",
    "status": "available",
    "price": 1302511078
  },
  {
    "id": "node_1_9",
    "lotNumber": 9,
    "size": "343m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 1625642
  },
  {
    "id": "node_1_9",
    "lotNumber": 9,
    "size": "76252m²",
    "description": "Portion 9 of Portion 1 of Erf 1 Renishaw",
    "landUse": "Private Conservation Reserve",
    "developmentType": null,
    "status": "available",
    "price": 319901615
  },
  {
    "id": "node_1_10",
    "lotNumber": 10,
    "size": "486m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "sold",
    "price": 2131913
  },
  {
    "id": "node_1_10",
    "lotNumber": 10,
    "size": "186434m²",
    "description": "Portion 10 of Portion 1 of Erf 1 Renishaw",
    "landUse": "Private Conservation Reserve",
    "developmentType": null,
    "status": "available",
    "price": 1076636443
  },
  {
    "id": "node_1_11",
    "lotNumber": 11,
    "size": "1611m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 6243343
  },
  {
    "id": "node_1_12",
    "lotNumber": 12,
    "size": "622m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "sold",
    "price": 2662249
  },
  {
    "id": "node_1_12",
    "lotNumber": 12,
    "size": "15380m²",
    "description": "Portion 12 of Portion 1 of Erf 1 Renishaw",
    "developmentType": "MEDIUM DENSITY RESIDENTIAL 1",
    "status": "sold",
    "price": 80271444
  },
  {
    "id": "node_1_13",
    "lotNumber": 13,
    "size": "545m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 1665345
  },
  {
    "id": "node_1_13",
    "lotNumber": 13,
    "size": "1585m²",
    "description": "Portion 13 of Portion 6 of Erf 1 Renishaw",
    "developmentType": "MUNICIPAL AND GOVERNMENT",
    "status": "available",
    "price": 8198241
  },
  {
    "id": "node_1_14",
    "lotNumber": 14,
    "size": "52530m²",
    "description": "Portion 14 of Portion 6 of Erf 1 Renishaw",
    "developmentType": "MEDIUM DENSITY RESIDENTIAL 1",
    "status": "sold",
    "price": 310099979
  },
  {
    "id": "node_1_15",
    "lotNumber": 15,
    "size": "155329m²",
    "description": "Portion 15 of Portion 6 of Erf 1 Renishaw",
    "landUse": "Private Conservation Reserve",
    "developmentType": null,
    "status": "sold",
    "price": 1034060546
  },
  {
    "id": "node_1_16",
    "lotNumber": 16,
    "size": null,
    "description": "Portion 16 of Portion 6 of Erf 1 Renishaw",
    "landUse": "Private Conservation Reserve",
    "developmentType": null,
    "status": "available",
    "price": 1215216
  },
  {
    "id": "node_1_20",
    "lotNumber": 20,
    "size": "402m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 1474605
  },
  {
    "id": "node_1_21",
    "lotNumber": 21,
    "size": "385m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 2336019
  },
  {
    "id": "node_1_22",
    "lotNumber": 22,
    "size": "295m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 1362711
  },
  {
    "id": "node_1_23",
    "lotNumber": 23,
    "size": "217m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "sold",
    "price": 864970
  },
  {
    "id": "node_1_24",
    "lotNumber": 24,
    "size": "226m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 811150
  },
  {
    "id": "node_1_25",
    "lotNumber": 25,
    "size": "217m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 1237014
  },
  {
    "id": "node_1_26",
    "lotNumber": 26,
    "size": "211m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 769029
  },
  {
    "id": "node_1_27",
    "lotNumber": 27,
    "size": "167m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "sold",
    "price": 850122
  },
  {
    "id": "node_1_28",
    "lotNumber": 28,
    "size": "278m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 1385109
  },
  {
    "id": "node_1_29",
    "lotNumber": 29,
    "size": "233m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "sold",
    "price": 1518776
  },
  {
    "id": "node_1_30",
    "lotNumber": 30,
    "size": "210m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 772733
  },
  {
    "id": "node_1_31",
    "lotNumber": 31,
    "size": "216m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "sold",
    "price": 1055530
  },
  {
    "id": "node_1_32",
    "lotNumber": 32,
    "size": "207m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 809467
  },
  {
    "id": "node_1_33",
    "lotNumber": 33,
    "size": "176m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 655036
  },
  {
    "id": "node_1_34",
    "lotNumber": 34,
    "size": "158m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 1082860
  },
  {
    "id": "node_1_35",
    "lotNumber": 35,
    "size": "157m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 911744
  },
  {
    "id": "node_1_36",
    "lotNumber": 36,
    "size": "178m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 948761
  },
  {
    "id": "node_1_37",
    "lotNumber": 37,
    "size": "102m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 332553
  },
  {
    "id": "node_1_38",
    "lotNumber": 38,
    "size": "145m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 678789
  },
  {
    "id": "node_1_39",
    "lotNumber": 39,
    "size": "197m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 735043
  },
  {
    "id": "node_1_40",
    "lotNumber": 40,
    "size": "137m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "sold",
    "price": 916075
  },
  {
    "id": "node_1_41",
    "lotNumber": 41,
    "size": "248m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 1331669
  },
  {
    "id": "node_1_42",
    "lotNumber": 42,
    "size": "228m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 1247950
  },
  {
    "id": "node_1_43",
    "lotNumber": 43,
    "size": "132m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 520780
  },
  {
    "id": "node_1_44",
    "lotNumber": 44,
    "size": "171m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 589218
  },
  {
    "id": "node_1_45",
    "lotNumber": 45,
    "size": "178m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 546391
  },
  {
    "id": "node_1_46",
    "lotNumber": 46,
    "size": "193m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 601511
  },
  {
    "id": "node_1_47",
    "lotNumber": 47,
    "size": "221m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "sold",
    "price": 1400579
  },
  {
    "id": "node_1_48",
    "lotNumber": 48,
    "size": "285m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 1270371
  },
  {
    "id": "node_1_49",
    "lotNumber": 49,
    "size": "425m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 1899076
  },
  {
    "id": "node_1_50",
    "lotNumber": 50,
    "size": "446m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "sold",
    "price": 2237789
  },
  {
    "id": "node_1_51",
    "lotNumber": 51,
    "size": "312m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 2080664
  },
  {
    "id": "node_1_52",
    "lotNumber": 52,
    "size": "381m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 1704119
  },
  {
    "id": "node_1_53",
    "lotNumber": 53,
    "size": "381m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 1452868
  },
  {
    "id": "node_1_54",
    "lotNumber": 54,
    "size": "478m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 2329505
  },
  {
    "id": "node_1_55",
    "lotNumber": 55,
    "size": "538m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "sold",
    "price": 2328775
  },
  {
    "id": "node_1_56",
    "lotNumber": 56,
    "size": "699m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 4213508
  },
  {
    "id": "node_1_57",
    "lotNumber": 57,
    "size": "489m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "sold",
    "price": 2150833
  },
  {
    "id": "node_1_58",
    "lotNumber": 58,
    "size": "418m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 2154424
  },
  {
    "id": "node_1_59",
    "lotNumber": 59,
    "size": "408m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "sold",
    "price": 1288386
  },
  {
    "id": "node_1_66",
    "lotNumber": 66,
    "size": "300m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "sold",
    "price": 1888034
  },
  {
    "id": "node_1_67",
    "lotNumber": 67,
    "size": "432m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 2428177
  },
  {
    "id": "node_1_68",
    "lotNumber": 68,
    "size": "409m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 2194729
  },
  {
    "id": "node_1_69",
    "lotNumber": 69,
    "size": "300m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 1657794
  },
  {
    "id": "node_1_70",
    "lotNumber": 70,
    "size": "232m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "sold",
    "price": 1051582
  },
  {
    "id": "node_1_71",
    "lotNumber": 71,
    "size": "257m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 1224991
  },
  {
    "id": "node_1_72",
    "lotNumber": 72,
    "size": "279m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "sold",
    "price": 1343252
  },
  {
    "id": "node_1_73",
    "lotNumber": 73,
    "size": "279m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 1519581
  },
  {
    "id": "node_1_74",
    "lotNumber": 74,
    "size": "288m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 1020259
  },
  {
    "id": "node_1_75",
    "lotNumber": 75,
    "size": "288m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 1202161
  },
  {
    "id": "node_1_76",
    "lotNumber": 76,
    "size": "366m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 1952036
  },
  {
    "id": "node_1_77",
    "lotNumber": 77,
    "size": "779m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 2478737
  },
  {
    "id": "node_1_78",
    "lotNumber": 78,
    "size": "980m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "available",
    "price": 5107108
  },
  {
    "id": "node_1_79",
    "lotNumber": 79,
    "size": "1269m²",
    "developmentType": "RESIDENTIAL ONLY 1",
    "status": "sold",
    "price": 4301272
  },
  {
    "id": "node_1_80",
    "lotNumber": 80,
    "size": "6865m²",
    "developmentType": "INSTITUTION",
    "status": "available",
    "price": 25286189
  },
  {
    "id": "node_1_91",
    "lotNumber": 91,
    "size": "1450m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 10142662
  },
  {
    "id": "node_1_92",
    "lotNumber": 92,
    "size": "1772m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 7038425
  },
  {
    "id": "node_1_93",
    "lotNumber": 93,
    "size": "1514m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 9942027
  },
  {
    "id": "node_1_94",
    "lotNumber": 94,
    "size": "1333m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 6157290
  },
  {
    "id": "node_1_95",
    "lotNumber": 95,
    "size": "1186m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 7047687
  },
  {
    "id": "node_1_96",
    "lotNumber": 96,
    "size": "1421m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 8144171
  },
  {
    "id": "node_1_97",
    "lotNumber": 97,
    "size": "1247m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 8076426
  },
  {
    "id": "node_1_98",
    "lotNumber": 98,
    "size": "1747m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 8905184
  },
  {
    "id": "node_1_99",
    "lotNumber": 99,
    "size": "939m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 5275475
  },
  {
    "id": "node_1_100",
    "lotNumber": 100,
    "size": "830m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 3055264
  },
  {
    "id": "node_1_101",
    "lotNumber": 101,
    "size": "1571m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 10037136
  },
  {
    "id": "node_1_102",
    "lotNumber": 102,
    "size": "1717m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 11992110
  },
  {
    "id": "node_1_103",
    "lotNumber": 103,
    "size": "1607m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 6189702
  },
  {
    "id": "node_1_104",
    "lotNumber": 104,
    "size": "3015m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 15186231
  },
  {
    "id": "node_1_109",
    "lotNumber": 109,
    "size": "1057m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 5571856
  },
  {
    "id": "node_1_110",
    "lotNumber": 110,
    "size": "15239m²",
    "label": "INSTITUTION",
    "developmentType": "INSTITUTION",
    "status": "available",
    "price": 67996111
  },
  {
    "id": "node_1_111",
    "lotNumber": 111,
    "size": "941m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 5830774
  },
  {
    "id": "node_1_112",
    "lotNumber": 112,
    "size": "3368m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 20588970
  },
  {
    "id": "node_1_113",
    "lotNumber": 113,
    "size": "903m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 5945979
  },
  {
    "id": "node_1_114",
    "lotNumber": 114,
    "size": "773m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 2987663
  },
  {
    "id": "node_1_115",
    "lotNumber": 115,
    "size": "945m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 3117065
  },
  {
    "id": "node_1_116",
    "lotNumber": 116,
    "size": "1007m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 4330710
  },
  {
    "id": "node_1_117",
    "lotNumber": 117,
    "size": "1467m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 7003084
  },
  {
    "id": "node_1_118",
    "lotNumber": 118,
    "size": "1149m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 4113686
  },
  {
    "id": "node_1_119",
    "lotNumber": 119,
    "size": "1430m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 5857044
  },
  {
    "id": "node_1_120",
    "lotNumber": 120,
    "size": "1672m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 7577844
  },
  {
    "id": "node_1_121",
    "lotNumber": 121,
    "size": "1836m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 11855303
  },
  {
    "id": "node_1_122",
    "lotNumber": 122,
    "size": "1489m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 9062125
  },
  {
    "id": "node_1_123",
    "lotNumber": 123,
    "size": "832m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 5316980
  },
  {
    "id": "node_1_124",
    "lotNumber": 124,
    "size": "2576m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 16368432
  },
  {
    "id": "node_1_125",
    "lotNumber": 125,
    "size": "3451m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 12902886
  },
  {
    "id": "node_1_126",
    "lotNumber": 126,
    "size": "33512m²",
    "developmentType": "MEDIUM DENSITY RESIDENTIAL 1",
    "status": "sold",
    "price": 174388265
  },
  {
    "id": "node_1_127",
    "lotNumber": 127,
    "size": "850m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 2841522
  },
  {
    "id": "node_1_128",
    "lotNumber": 128,
    "size": "1054m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 5294434
  },
  {
    "id": "node_1_129",
    "lotNumber": 129,
    "size": "2032m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 10776173
  },
  {
    "id": "node_1_130",
    "lotNumber": 130,
    "size": "1073m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 5563056
  },
  {
    "id": "node_1_131",
    "lotNumber": 131,
    "size": "1038m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 4831207
  },
  {
    "id": "node_1_132",
    "lotNumber": 132,
    "size": "1269m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 8361776
  },
  {
    "id": "node_1_133",
    "lotNumber": 133,
    "size": "228m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 1065473
  },
  {
    "id": "node_1_134",
    "lotNumber": 134,
    "size": "6768m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 21798852
  },
  {
    "id": "node_1_135",
    "lotNumber": 135,
    "size": "1738m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 5676637
  },
  {
    "id": "node_1_136",
    "lotNumber": 136,
    "size": "1416m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 5540911
  },
  {
    "id": "node_1_137",
    "lotNumber": 137,
    "size": "1370m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 4402925
  },
  {
    "id": "node_1_138",
    "lotNumber": 138,
    "size": "1263m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 5492848
  },
  {
    "id": "node_1_139",
    "lotNumber": 139,
    "size": "2660m²",
    "developmentType": "MUNICIPAL AND GOVERNMENT",
    "status": "available",
    "price": 9453809
  },
  {
    "id": "node_1_140",
    "lotNumber": 140,
    "size": "1939m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 9226203
  },
  {
    "id": "node_1_141",
    "lotNumber": 141,
    "size": "961m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 2980029
  },
  {
    "id": "node_1_142",
    "lotNumber": 142,
    "size": "914m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 3753533
  },
  {
    "id": "node_1_143",
    "lotNumber": 143,
    "size": "906m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 5037025
  },
  {
    "id": "node_1_144",
    "lotNumber": 144,
    "size": "916m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 4456585
  },
  {
    "id": "node_1_145",
    "lotNumber": 145,
    "size": "999m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 4064913
  },
  {
    "id": "node_1_146",
    "lotNumber": 146,
    "size": "1527m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 6746820
  },
  {
    "id": "node_1_147",
    "lotNumber": 147,
    "size": "1191m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 6800680
  },
  {
    "id": "node_1_148",
    "lotNumber": 148,
    "size": "1262m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 8190239
  },
  {
    "id": "node_1_149",
    "lotNumber": 149,
    "size": "1479m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 6041926
  },
  {
    "id": "node_1_150",
    "lotNumber": 150,
    "size": "1111m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 6232487
  },
  {
    "id": "node_1_150",
    "lotNumber": 150,
    "size": "1358m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 5422588
  },
  {
    "id": "node_1_151",
    "lotNumber": 151,
    "size": "2068m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 10966235
  },
  {
    "id": "node_1_152",
    "lotNumber": 152,
    "size": "2513m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 7632706
  },
  {
    "id": "node_1_153",
    "lotNumber": 153,
    "size": "1432m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 9003105
  },
  {
    "id": "node_1_154",
    "lotNumber": 154,
    "size": "1768m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 10571653
  },
  {
    "id": "node_1_155",
    "lotNumber": 155,
    "size": "1698m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 7065456
  },
  {
    "id": "node_1_156",
    "lotNumber": 156,
    "size": "2618m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 13382907
  },
  {
    "id": "node_1_157",
    "lotNumber": 157,
    "size": "914m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 4464943
  },
  {
    "id": "node_1_158",
    "lotNumber": 158,
    "size": "977m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 4237896
  },
  {
    "id": "node_1_159",
    "lotNumber": 159,
    "size": "2809m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 17648824
  },
  {
    "id": "node_1_160",
    "lotNumber": 160,
    "size": "903m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 6178970
  },
  {
    "id": "node_1_161",
    "lotNumber": 161,
    "size": "1493m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 9809677
  },
  {
    "id": "node_1_162",
    "lotNumber": 162,
    "size": "1266m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 7949678
  },
  {
    "id": "node_1_163",
    "lotNumber": 163,
    "size": "8432m²",
    "label": "P.O.S",
    "developmentType": null,
    "status": "available",
    "price": 52247232
  },
  {
    "id": "node_1_166",
    "lotNumber": 166,
    "size": "2906m²",
    "label": "Private Conservation Reserve",
    "developmentType": null,
    "status": "available",
    "price": 10386793
  },
  {
    "id": "node_1_167",
    "lotNumber": 167,
    "size": "2092m²",
    "label": "P.U.B",
    "developmentType": null,
    "status": "sold",
    "price": 11197602
  },
  {
    "id": "node_1_168",
    "lotNumber": 168,
    "size": "9638m²",
    "developmentType": "URBAN AGRICULTURE 2",
    "status": "sold",
    "price": 51257998
  },
  {
    "id": "node_1_180",
    "lotNumber": 180,
    "size": "3802m²",
    "label": "",
    "developmentType": "WORSHIP",
    "status": "available",
    "price": 26457655
  },
  {
    "id": "node_1_181",
    "lotNumber": 181,
    "size": "5220 m²",
    "label": "Local Residential 1",
    "developmentType": "MEDIUM DENSITY RESIDENTIAL 1",
    "status": "available",
    "price": 35607679
  },
  {
    "id": "node_1_182",
    "lotNumber": 182,
    "size": "6060 m²",
    "label": "",
    "developmentType": "MEDIUM DENSITY RESIDENTIAL 1",
    "status": "sold",
    "price": 24654503
  },
  {
    "id": "node_1_183",
    "lotNumber": 183,
    "size": "21994m²",
    "label": "",
    "developmentType": "URBAN AGRICULTURE 2",
    "status": "available",
    "price": 69277365
  },
  {
    "id": "node_1_184",
    "lotNumber": 184,
    "size": "5806 m²",
    "label": "Local Residential 1",
    "developmentType": "MEDIUM DENSITY RESIDENTIAL 1",
    "status": "sold",
    "price": 28609252
  },
  {
    "id": "node_1_185",
    "lotNumber": 185,
    "size": "4504m²",
    "label": "Local Residential 1",
    "developmentType": "MEDIUM DENSITY RESIDENTIAL 1",
    "status": "available",
    "price": 27420634
  },
  {
    "id": "node_1_186",
    "lotNumber": 186,
    "size": "5380 m²",
    "label": "",
    "developmentType": "MULTI-PURPOSE RETAIL",
    "status": "available",
    "price": 36874225
  },
  {
    "id": "node_1_187",
    "lotNumber": 187,
    "size": "2578 m²",
    "label": "",
    "developmentType": "WORSHIP",
    "status": "available",
    "price": 17893346
  },
  {
    "id": "node_1_188",
    "lotNumber": 188,
    "size": "14815m²",
    "label": "",
    "developmentType": "MULTI-PURPOSE RETAIL",
    "status": "available",
    "price": 80471935
  },
  {
    "id": "node_1_189",
    "lotNumber": 189,
    "size": "26538m²",
    "label": "MULTI USE RETAIL 1",
    "developmentType": "MULTI-PURPOSE RETAIL",
    "status": "available",
    "price": 87604372
  },
  {
    "id": "node_1_190",
    "lotNumber": 190,
    "size": "7203 m²",
    "label": "Private Conservation Reserve",
    "developmentType": null,
    "status": "sold",
    "price": 39896410
  },
  {
    "id": "node_1_192",
    "lotNumber": 192,
    "size": "85223 m²",
    "label": "Private Conservation Reserve",
    "developmentType": null,
    "status": "available",
    "price": 503089403
  },
  {
    "id": "node_1_193",
    "lotNumber": 193,
    "size": "",
    "label": "",
    "developmentType": null,
    "status": "available",
    "price": 1394609
  },
  {
    "id": "node_1_198",
    "lotNumber": 198,
    "size": "887m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 3675424
  },
  {
    "id": "node_1_199",
    "lotNumber": 199,
    "size": "1166m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 5090417
  },
  {
    "id": "node_1_200",
    "lotNumber": 200,
    "size": "1207m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 5388024
  },
  {
    "id": "node_1_201",
    "lotNumber": 201,
    "size": "1589m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 9425367
  },
  {
    "id": "node_1_202",
    "lotNumber": 202,
    "size": "846m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 5298874
  },
  {
    "id": "node_1_203",
    "lotNumber": 203,
    "size": "1560m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 5070780
  },
  {
    "id": "node_1_204",
    "lotNumber": 204,
    "size": "539m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 2631085
  },
  {
    "id": "node_1_204",
    "lotNumber": 204,
    "size": "8244m²",
    "developmentType": "MEDIUM DENSITY RESIDENTIAL 1",
    "status": "sold",
    "price": 35603822
  },
  {
    "id": "node_1_205",
    "lotNumber": 205,
    "size": "505m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 3451514
  },
  {
    "id": "node_1_206",
    "lotNumber": 206,
    "size": "499m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 2930168
  },
  {
    "id": "node_1_207",
    "lotNumber": 207,
    "size": "503m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 2928652
  },
  {
    "id": "node_1_208",
    "lotNumber": 208,
    "size": "472m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 1429383
  },
  {
    "id": "node_1_209",
    "lotNumber": 209,
    "size": "543m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 2134288
  },
  {
    "id": "node_1_210",
    "lotNumber": 210,
    "size": "523m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 2793352
  },
  {
    "id": "node_1_211",
    "lotNumber": 211,
    "size": "540m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 3492308
  },
  {
    "id": "node_1_212",
    "lotNumber": 212,
    "size": "520m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 2770181
  },
  {
    "id": "node_1_213",
    "lotNumber": 213,
    "size": "533m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 2761193
  },
  {
    "id": "node_1_214",
    "lotNumber": 214,
    "size": "676m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 2820842
  },
  {
    "id": "node_1_215",
    "lotNumber": 215,
    "size": "546m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 3197715
  },
  {
    "id": "node_1_216",
    "lotNumber": 216,
    "size": "531m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 2441928
  },
  {
    "id": "node_1_217",
    "lotNumber": 217,
    "size": "507m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 2061873
  },
  {
    "id": "node_1_218",
    "lotNumber": 218,
    "size": "597m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 2834608
  },
  {
    "id": "node_1_219",
    "lotNumber": 219,
    "size": "684m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 2772422
  },
  {
    "id": "node_1_220",
    "lotNumber": 220,
    "size": "745m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 3887874
  },
  {
    "id": "node_1_221",
    "lotNumber": 221,
    "size": "518m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 1593348
  },
  {
    "id": "node_1_225",
    "lotNumber": 225,
    "size": "112285m²",
    "developmentType": "MEDIUM DENSITY RESIDENTIAL 1",
    "status": "available",
    "price": 587820645
  },
  {
    "id": "node_1_226",
    "lotNumber": 226,
    "size": "5083m²",
    "developmentType": "MUNICIPAL AND GOVERNMENT",
    "status": "available",
    "price": 28782595
  },
  {
    "id": "node_1_227",
    "lotNumber": 227,
    "size": "7552m²",
    "developmentType": "MEDIUM DENSITY RESIDENTIAL 1",
    "status": "available",
    "price": 49082294
  },
  {
    "id": "node_1_228",
    "lotNumber": 228,
    "size": "1765m²",
    "developmentType": "MUNICIPAL AND GOVERNMENT",
    "status": "sold",
    "price": 7908322
  },
  {
    "id": "node_1_229",
    "lotNumber": 229,
    "size": "68318m²",
    "developmentType": "MEDIUM DENSITY RESIDENTIAL 1",
    "status": "available",
    "price": 432170122
  },
  {
    "id": "node_1_230",
    "lotNumber": 230,
    "size": "6905m²",
    "developmentType": "MEDIUM DENSITY RESIDENTIAL 1",
    "status": "available",
    "price": 41573539
  },
  {
    "id": "node_1_231",
    "lotNumber": 231,
    "size": "649m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 3464401
  },
  {
    "id": "node_1_232",
    "lotNumber": 232,
    "size": "735m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 4054643
  },
  {
    "id": "node_1_233",
    "lotNumber": 233,
    "size": "805m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 4632025
  },
  {
    "id": "node_1_234",
    "lotNumber": 234,
    "size": "821m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 4672257
  },
  {
    "id": "node_1_235",
    "lotNumber": 235,
    "size": "698m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 3748119
  },
  {
    "id": "node_1_236",
    "lotNumber": 236,
    "size": "579m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 1927442
  },
  {
    "id": "node_1_237",
    "lotNumber": 237,
    "size": "1178m²",
    "developmentType": "RESIDENTIAL ONLY 3",
    "status": "sold",
    "price": 7111798
  },
  {
    "id": "node_1_238",
    "lotNumber": 238,
    "size": "1115m²",
    "developmentType": "RESIDENTIAL ONLY 3",
    "status": "sold",
    "price": 5688330
  },
  {
    "id": "node_1_239",
    "lotNumber": 239,
    "size": "960m²",
    "developmentType": "RESIDENTIAL ONLY 3",
    "status": "available",
    "price": 3293459
  },
  {
    "id": "node_1_240",
    "lotNumber": 240,
    "size": "1105m²",
    "developmentType": "RESIDENTIAL ONLY 3",
    "status": "sold",
    "price": 5857396
  },
  {
    "id": "node_1_241",
    "lotNumber": 241,
    "size": "1147m²",
    "developmentType": "RESIDENTIAL ONLY 3",
    "status": "available",
    "price": 5808505
  },
  {
    "id": "node_1_242",
    "lotNumber": 242,
    "size": "1415m²",
    "developmentType": "RESIDENTIAL ONLY 3",
    "status": "available",
    "price": 7970960
  },
  {
    "id": "node_1_243",
    "lotNumber": 243,
    "size": "1596m²",
    "developmentType": "RESIDENTIAL ONLY 3",
    "status": "available",
    "price": 8520549
  },
  {
    "id": "node_1_243",
    "lotNumber": 243,
    "size": "996m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 3130800
  },
  {
    "id": "node_1_244",
    "lotNumber": 244,
    "size": "1265m²",
    "developmentType": "RESIDENTIAL ONLY 3",
    "status": "sold",
    "price": 7928395
  },
  {
    "id": "node_1_244",
    "lotNumber": 244,
    "size": "2509m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 9955187
  },
  {
    "id": "node_1_245",
    "lotNumber": 245,
    "size": "1231m²",
    "developmentType": "RESIDENTIAL ONLY 3",
    "status": "available",
    "price": 4763711
  },
  {
    "id": "node_1_245",
    "lotNumber": 245,
    "size": "2099m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 14255150
  },
  {
    "id": "node_1_246",
    "lotNumber": 246,
    "size": "1178m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 6426537
  },
  {
    "id": "node_1_247",
    "lotNumber": 247,
    "size": "1454m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "sold",
    "price": 7327490
  },
  {
    "id": "node_1_248",
    "lotNumber": 248,
    "size": "976m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 6740227
  },
  {
    "id": "node_1_249",
    "lotNumber": 249,
    "size": "1169m²",
    "developmentType": "RESIDENTIAL ONLY 2",
    "status": "available",
    "price": 5385462
  },
  {
    "id": "node_1_252",
    "lotNumber": 252,
    "size": "2003m²",
    "landUse": "P.O.S",
    "developmentType": null,
    "status": "available",
    "price": 9961867
  },
  {
    "id": "node_1_253",
    "lotNumber": 253,
    "size": "5631m²",
    "landUse": "PRIVATE O.S",
    "developmentType": null,
    "status": "sold",
    "price": 37517554
  },
  {
    "id": "node_1_254",
    "lotNumber": 254,
    "size": "4609m²",
    "landUse": "P.O.S",
    "developmentType": null,
    "status": "available",
    "price": 29289977
  },
  {
    "id": "node_1_257",
    "lotNumber": 257,
    "size": "12947m²",
    "landUse": "Conservation Reserve",
    "developmentType": null,
    "status": "available",
    "price": 87578218
  },
  {
    "id": "node_1_259",
    "lotNumber": 259,
    "size": null,
    "landUse": "Private Conservation Reserve",
    "developmentType": null,
    "status": "available",
    "price": 1857171
  },
  {
    "id": "node_1_260",
    "lotNumber": 260,
    "size": null,
    "landUse": "Private Conservation Reserve",
    "developmentType": null,
    "status": "available",
    "price": 2648390
  },
  {
    "id": "node_1_261",
    "lotNumber": 261,
    "size": "55583m²",
    "landUse": "Private Conservation Reserve",
    "developmentType": null,
    "status": "available",
    "price": 338407940
  },
  {
    "id": null,
    "lotNumber": null,
    "size": null,
    "landUse": "Private Conservation Reserve",
    "developmentType": null,
    "status": "available",
    "price": 1257908
  },
  {
    "id": null,
    "lotNumber": null,
    "size": null,
    "landUse": "Private Conservation Reserve",
    "developmentType": null,
    "status": "available",
    "price": 2590909
  },
  {
    "id": null,
    "lotNumber": null,
    "size": "1939m²",
    "label": "PUBLIC BUILDINGS & SERVICES",
    "developmentType": "MUNICIPAL AND GOVERNMENT",
    "status": "sold",
    "price": 8422756
  }
]

// your original data:


// add id and sort by lotNumber ascending
const node_1_data_with_ids = node_1_data
  .map((lot) => ({
    // id is based on lotNumber when it exists, otherwise null
    id: typeof lot.lotNumber === "number" ? `node_1_${lot.lotNumber}` : null,
    ...lot,
  }))
  .sort((a, b) => {
    const aNum = typeof a.lotNumber === "number" ? a.lotNumber : Number.POSITIVE_INFINITY;
    const bNum = typeof b.lotNumber === "number" ? b.lotNumber : Number.POSITIVE_INFINITY;
    return aNum - bNum;
  });

// console.log(node_1_data_with_ids);


// add the animation class to all matching id 
node1_id.forEach(add_animation_class => {
  const node_1_id = document.querySelector(`#${add_animation_class}`);
  node_1_id.classList.add('anim-path');
})




init_interactive_map({
  mapData: node_1_data,
  mapId: node1_id,
  tooltipElementId: "ikr_toltipMove",
  svgElementId: "ikr_svg",
  renderTooltipContent: renderTooltipContent,
  tooltipLeft: 20,
  tooltipTop: 10,

  // Hover IN: Animate stroke + change fill
  onLotHoverIn: (el, mapD, ev) => {
    if (!el.classList.contains("anim-path")) return;

    // Store original fill if not already
    if (!el.dataset.originalFill) {
      const computedFill = window.getComputedStyle(el).fill;
      el.dataset.originalFill = computedFill !== 'none' ? computedFill : '#000000';
    }

    // Setup stroke length
    if (typeof el.getTotalLength === "function") {
      const len = el.getTotalLength();
      el.style.setProperty("--len", len);
      el.style.strokeDasharray = len;
    }

    // Apply hover styles
    el.style.fill = "red";
    el.style.fillOpacity = ".7";

    // Trigger stroke animation
    el.classList.remove("draw", "highlight");
    void el.offsetWidth; // Force reflow
    el.classList.add("highlight", "draw");
  },

  // Hover OUT: Restore original fill (do NOT hide)
  onLotHoverOut: (el, mapD, ev) => {
    if (!el.classList.contains("anim-path")) return;

    // Restore original fill color
    el.style.fill = el.dataset.originalFill || "#000000";
    el.style.fillOpacity = "1"; // Keep visible

    // Remove animation
    el.classList.remove("draw", "highlight");
  }
});

// // ====== TOOLTIP RENDER ======
function renderTooltipContent(mapD) {
  let statusStyle = "font-weight: bold;";
  // if (mapD.status && mapD.status.toLowerCase() === "available") {
  //     statusStyle = "color: #d3b683; font-weight: bold;";
  // } else if (mapD.status && mapD.status.toLowerCase() === "sold") {
  //     statusStyle = "color: red; font-weight: bold;";
  // }


  return `
   <div class="rcost-plot-tooltip">
    <div class="ploat-tooltip-container">
          <div class="plot-label">PLOT NO. ${mapD.lotNumber}</div>
      <div class="development_type">${mapD.developmentType}</div>
      <div class="plot-size">Plot Size: ${mapD.size}</div>
    </div>
      <button class="plot-btn">CLICK TO VIEW</button>
    </div>
  `;
}

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


ikrZoom({ikrsvg: ikr_svg,tooltipElementId:'ikr_toltipMove',mapData: node_1_data,
  mapId: node1_id, // Hover IN: Animate stroke + change fill
  onLotHoverIn: (el, mapD, ev) => {
    if (!el.classList.contains("anim-path")) return;

    // Store original fill if not already
    if (!el.dataset.originalFill) {
      const computedFill = window.getComputedStyle(el).fill;
      el.dataset.originalFill = computedFill !== 'none' ? computedFill : '#000000';
    }

    // Setup stroke length
    if (typeof el.getTotalLength === "function") {
      const len = el.getTotalLength();
      el.style.setProperty("--len", len);
      el.style.strokeDasharray = len;
    }

    // Apply hover styles
    el.style.fill = "red";
    el.style.fillOpacity = ".7";

    // Trigger stroke animation
    el.classList.remove("draw", "highlight");
    void el.offsetWidth; // Force reflow
    el.classList.add("highlight", "draw");
  },

  // Hover OUT: Restore original fill (do NOT hide)
  onLotHoverOut: (el, mapD, ev) => {
    if (!el.classList.contains("anim-path")) return;

    // Restore original fill color
    el.style.fill = el.dataset.originalFill || "#000000";
    el.style.fillOpacity = "1"; // Keep visible

    // Remove animation
    el.classList.remove("draw", "highlight");
  }});