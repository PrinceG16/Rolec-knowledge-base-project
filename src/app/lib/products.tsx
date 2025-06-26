import { db } from "~/server/db/index";
import { products } from "~/server/db/schema";

export async function getProductData(slug: string) {
  const row = await db.query.products.findFirst({
    where: (products, { eq }) => eq(products.slug, slug),
  });

  if (!row) return null;

  return {
    ...row,
    category: JSON.parse(row.category || "[]"),
    downloads: JSON.parse(row.downloads || "[]"),
    specifications: JSON.parse(row.specifications || "[]"),
  };
}

// export const dataSet = [
//   {
//     id: 1,
//     title: "EVO",
//     slug: "evo",
//     description:
//       "The Autocharge is a smart EV charger that automatically detects your vehicle and starts charging.",
//     imageUrl: "images/evo.png",
//     category: ["Home", "DC"],
//     downloads: [
//       {
//         label: "Data Sheet",
//         icon: "/images/table-list.svg",
//       },
//       {
//         label: "Installation and Operation Manual",
//         icon: "/images/tool.svg",
//       },
//       {
//         label: "Statement of Compliance",
//         icon: "/images/Shield.svg",
//       },
//       {
//         label: "UKCA & CE Declaration of Conformity",
//         icon: "/images/FileText.svg",
//       },
//       {
//         label: "NBS BIM & CAD Packages",
//         icon: "/images/3D.svg",
//       },
//     ],
//     specifications: [
//       {
//         icon: "/images/hexagon.svg",
//         label: "Materials",
//         value:
//           "Unit & fascia - High impact resistant \nPolycarbonate Mounting back plate - 1.5mm \nSteel with black powder coated finish \nRear bracket plate - 1.5mm 316 Stainless Steel",
//       },
//       {
//         icon: "/images/move.svg",
//         label: "Dimensions",
//         value: "260mm (W) \n 410mm (H) \n 157mm (D)",
//       },
//       {
//         icon: "/images/git-commit.svg",
//         label: "Charge Protocol",
//         value: "Mode 3",
//       },
//       {
//         icon: "/images/zap.svg",
//         label: "Input Voltage",
//         value:
//           "230V AC (±10 %) \n50/60Hz (Single Phase) \n400V AC (±10 %) \n50/60Hz (3 Phase)",
//       },
//       {
//         icon: "/images/shield.svg",
//         label: "Protection",
//         value:
//           "Over current protection, DC fault protection - 6mA, Lightning surge, over temperature protection, PME fault detection, Load balancing",
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "QUBEV Smart",
//     slug: "qubev-smart",
//     description:
//       "The QUBEV Smart offers smart connectivity in a sleek compact form.",
//     imageUrl: "images/qubev_smart.png",
//     category: ["Home", "DC"],
//     downloads: [
//       {
//         label: "Data Sheet",
//         icon: "/images/table-list.svg",
//       },
//       {
//         label: "Installation and Operation Manual",
//         icon: "/images/tool.svg",
//       },
//       {
//         label: "Statement of Compliance",
//         icon: "/images/Shield.svg",
//       },
//       {
//         label: "UKCA & CE Declaration of Conformity",
//         icon: "/images/FileText.svg",
//       },
//       {
//         label: "NBS BIM & CAD Packages",
//         icon: "/images/3D.svg",
//       },
//     ],
//     specifications: [
//       {
//         icon: "/images/hexagon.svg",
//         label: "Materials",
//         value: "Polycarbonate casing; steel backplate",
//       },
//       {
//         icon: "/images/move.svg",
//         label: "Dimensions",
//         value: "205×1130×205 mm",
//       },
//       {
//         icon: "/images/git-commit.svg",
//         label: "Charge Protocol",
//         value: "Mode 3",
//       },
//       {
//         icon: "/images/zap.svg",
//         label: "Input Voltage",
//         value: "230 V AC, 400 V AC (3‑phase)",
//       },
//       {
//         icon: "/images/shield.svg",
//         label: "Protection",
//         value: "DC 6 mA, load balancing",
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: "ZURA",
//     slug: "zura",
//     description:
//       "The Quantum Charger uses advanced technology to optimize charging speed and efficiency.",
//     imageUrl: "images/zura.png",
//     category: ["Home", "DC"],
//     downloads: [
//       {
//         label: "Data Sheet",
//         icon: "/images/table-list.svg",
//       },
//       {
//         label: "Installation and Operation Manual",
//         icon: "/images/tool.svg",
//       },
//       {
//         label: "Statement of Compliance",
//         icon: "/images/Shield.svg",
//       },
//       {
//         label: "UKCA & CE Declaration of Conformity",
//         icon: "/images/FileText.svg",
//       },
//       {
//         label: "NBS BIM & CAD Packages",
//         icon: "/images/3D.svg",
//       },
//     ],
//     specifications: [
//       {
//         icon: "/images/hexagon.svg",
//         label: "Materials",
//         value: "PC fascia; 1.5 mm steel; 1.5 mm 316 stainless steel bracket",
//       },
//       {
//         icon: "/images/move.svg",
//         label: "Dimensions",
//         value: "260×410×157 mm",
//       },
//       {
//         icon: "/images/git-commit.svg",
//         label: "Charge Protocol",
//         value: "Mode 3",
//       },
//       {
//         icon: "/images/zap.svg",
//         label: "Input Voltage",
//         value: "230 V / 400 V AC 50/60 Hz",
//       },
//       {
//         icon: "/images/shield.svg",
//         label: "Protection",
//         value: "DC 6 mA, surge, temp, PME detection, load balancing",
//       },
//     ],
//   },
//   {
//     id: 4,
//     title: "WALLPOD",
//     slug: "wallpod",
//     description:
//       "The WallPod is a compact and stylish EV charger that fits seamlessly into your home.",
//     imageUrl: "images/wallpod.png",
//     category: ["Home", "DC"],
//     downloads: [
//       {
//         label: "Data Sheet",
//         icon: "/images/table-list.svg",
//       },
//       {
//         label: "Installation and Operation Manual",
//         icon: "/images/tool.svg",
//       },
//       {
//         label: "Statement of Compliance",
//         icon: "/images/Shield.svg",
//       },
//       {
//         label: "UKCA & CE Declaration of Conformity",
//         icon: "/images/FileText.svg",
//       },
//       {
//         label: "NBS BIM & CAD Packages",
//         icon: "/images/3D.svg",
//       },
//     ],
//     specifications: [
//       {
//         icon: "/images/hexagon.svg",
//         label: "Materials",
//         value: "Polycarbonate casing; steel bracket",
//       },
//       {
//         icon: "/images/move.svg",
//         label: "Dimensions",
//         value: "415.5×179×142 mm",
//       },
//       {
//         icon: "/images/git-commit.svg",
//         label: "Charge Protocol",
//         value: "Mode 3",
//       },
//       {
//         icon: "/images/zap.svg",
//         label: "Input Voltage",
//         value: "230 V AC 50/60 Hz",
//       },
//       {
//         icon: "/images/shield.svg",
//         label: "Protection",
//         value: "RCBO, DC 6 mA, status LEDs",
//       },
//     ],
//   },
//   {
//     id: 5,
//     title: "SECURICHARGE",
//     slug: "securicharge",
//     description:
//       "The Securicharge is a high-performance EV charger designed for fast charging.",
//     imageUrl: "images/securicharge.png",
//     category: ["Home", "DC"],
//     downloads: [
//       {
//         label: "Data Sheet",
//         icon: "/images/table-list.svg",
//       },
//       {
//         label: "Installation and Operation Manual",
//         icon: "/images/tool.svg",
//       },
//       {
//         label: "Statement of Compliance",
//         icon: "/images/Shield.svg",
//       },
//       {
//         label: "UKCA & CE Declaration of Conformity",
//         icon: "/images/FileText.svg",
//       },
//       {
//         label: "NBS BIM & CAD Packages",
//         icon: "/images/3D.svg",
//       },
//     ],
//     specifications: [
//       {
//         icon: "/images/hexagon.svg",
//         label: "Materials",
//         value: "Steel enclosure; tamper‑resistant design",
//       },
//       {
//         icon: "/images/move.svg",
//         label: "Dimensions",
//         value: "600×1200×300 mm",
//       },
//       {
//         icon: "/images/git-commit.svg",
//         label: "Charge Protocol",
//         value: "Mode 3",
//       },
//       {
//         icon: "/images/zap.svg",
//         label: "Input Voltage",
//         value: "400 V AC 3‑phase",
//       },
//       {
//         icon: "/images/shield.svg",
//         label: "Protection",
//         value: "Surge, temp, load balancing",
//       },
//     ],
//   },
//   {
//     id: 6,
//     title: "QUANTUM",
//     slug: "quantum",
//     description: "The Quantum supports high power output for rapid charging.",
//     imageUrl: "images/quantum.png",
//     category: ["Commercial", "DC"],
//     downloads: [
//       {
//         label: "Data Sheet",
//         icon: "/images/table-list.svg",
//       },
//       {
//         label: "Installation and Operation Manual",
//         icon: "/images/tool.svg",
//       },
//       {
//         label: "Statement of Compliance",
//         icon: "/images/Shield.svg",
//       },
//       {
//         label: "UKCA & CE Declaration of Conformity",
//         icon: "/images/FileText.svg",
//       },
//       {
//         label: "NBS BIM & CAD Packages",
//         icon: "/images/3D.svg",
//       },
//     ],
//     specifications: [
//       {
//         icon: "/images/hexagon.svg",
//         label: "Materials",
//         value: "Steel; aluminium composite panels",
//       },
//       {
//         icon: "/images/move.svg",
//         label: "Dimensions",
//         value: "Varies per model",
//       },
//       {
//         icon: "/images/git-commit.svg",
//         label: "Charge Protocol",
//         value: "Mode 3",
//       },
//       {
//         icon: "/images/zap.svg",
//         label: "Input Voltage",
//         value: "230 V or 400 V AC",
//       },
//       {
//         icon: "/images/shield.svg",
//         label: "Protection",
//         value: "PME detection, RCBO",
//       },
//     ],
//   },
//   {
//     id: 7,
//     title: "BASICCHARGE",
//     slug: "basiccharge",
//     description: "An affordable pedestal charger for workplaces and car parks.",
//     imageUrl: "images/basic_charge.png",
//     category: ["Commercial", "DC"],
//     downloads: [
//       {
//         label: "Data Sheet",
//         icon: "/images/table-list.svg",
//       },
//       {
//         label: "Installation and Operation Manual",
//         icon: "/images/tool.svg",
//       },
//       {
//         label: "Statement of Compliance",
//         icon: "/images/Shield.svg",
//       },
//       {
//         label: "UKCA & CE Declaration of Conformity",
//         icon: "/images/FileText.svg",
//       },
//       {
//         label: "NBS BIM & CAD Packages",
//         icon: "/images/3D.svg",
//       },
//     ],
//     specifications: [
//       {
//         icon: "/images/hexagon.svg",
//         label: "Materials",
//         value: "Galvanised steel, aluminium composite panels",
//       },
//       {
//         icon: "/images/move.svg",
//         label: "Dimensions",
//         value: "205×1130×205 mm",
//       },
//       {
//         icon: "/images/git-commit.svg",
//         label: "Charge Protocol",
//         value: "Mode 3",
//       },
//       {
//         icon: "/images/zap.svg",
//         label: "Input Voltage",
//         value: "230 V / 400 V AC",
//       },
//       {
//         icon: "/images/shield.svg",
//         label: "Protection",
//         value: "AC overload, DC 6 mA, PME detection",
//       },
//     ],
//   },
//   {
//     id: 8,
//     title: "AUTOCHARGE",
//     slug: "autocharge",
//     description:
//       "The AutoCharge offers automatic vehicle detection and charging.",
//     imageUrl: "images/autocharge.png",
//     category: ["Commercial", "DC"],
//     downloads: [
//       {
//         label: "Data Sheet",
//         icon: "/images/table-list.svg",
//       },
//       {
//         label: "Installation and Operation Manual",
//         icon: "/images/tool.svg",
//       },
//       {
//         label: "Statement of Compliance",
//         icon: "/images/Shield.svg",
//       },
//       {
//         label: "UKCA & CE Declaration of Conformity",
//         icon: "/images/FileText.svg",
//       },
//       {
//         label: "NBS BIM & CAD Packages",
//         icon: "/images/3D.svg",
//       },
//     ],
//     specifications: [
//       {
//         icon: "/images/hexagon.svg",
//         label: "Materials",
//         value: "Polycarbonate; steel bracket",
//       },
//       {
//         icon: "/images/move.svg",
//         label: "Dimensions",
//         value: "260×410×157 mm",
//       },
//       {
//         icon: "/images/git-commit.svg",
//         label: "Charge Protocol",
//         value: "Mode 3",
//       },
//       {
//         icon: "/images/zap.svg",
//         label: "Input Voltage",
//         value: "230 V AC single phase",
//       },
//       {
//         icon: "/images/shield.svg",
//         label: "Protection",
//         value: "DC 6 mA, overtemp, surge",
//       },
//     ],
//   },
//   {
//     id: 9,
//     title: "TAP & CHARGE",
//     slug: "tap-and-charge",
//     description:
//       "Tap & Charge features contactless payment or RFID activation.",
//     imageUrl: "images/tap_and_charge.png",
//     category: ["Commercial", "DC"],
//     downloads: [
//       {
//         label: "Data Sheet",
//         icon: "/images/table-list.svg",
//       },
//       {
//         label: "Installation and Operation Manual",
//         icon: "/images/tool.svg",
//       },
//       {
//         label: "Statement of Compliance",
//         icon: "/images/Shield.svg",
//       },
//       {
//         label: "UKCA & CE Declaration of Conformity",
//         icon: "/images/FileText.svg",
//       },
//       {
//         label: "NBS BIM & CAD Packages",
//         icon: "/images/3D.svg",
//       },
//     ],
//     specifications: [
//       {
//         icon: "/images/hexagon.svg",
//         label: "Materials",
//         value: "Polycarbonate casing; steel bracket",
//       },
//       {
//         icon: "/images/move.svg",
//         label: "Dimensions",
//         value: "260×410×157 mm",
//       },
//       {
//         icon: "/images/git-commit.svg",
//         label: "Charge Protocol",
//         value: "Mode 3",
//       },
//       {
//         icon: "/images/zap.svg",
//         label: "Input Voltage",
//         value: "230 V AC 50/60 Hz",
//       },
//       {
//         icon: "/images/shield.svg",
//         label: "Protection",
//         value: "NFC/RFID reader, DC 6 mA",
//       },
//     ],
//   },
//   {
//     id: 10,
//     title: "ULTRACHARGE 30",
//     slug: "ultracharge-30",
//     description: "UltraCharge 30 kW rapid charger for commercial sites.",
//     imageUrl: "images/ultracharge_240.png",
//     category: ["Commercial", "AC"],
//     downloads: [
//       {
//         label: "Data Sheet",
//         icon: "/images/table-list.svg",
//       },
//       {
//         label: "Installation and Operation Manual",
//         icon: "/images/tool.svg",
//       },
//       {
//         label: "Statement of Compliance",
//         icon: "/images/Shield.svg",
//       },
//       {
//         label: "UKCA & CE Declaration of Conformity",
//         icon: "/images/FileText.svg",
//       },
//       {
//         label: "NBS BIM & CAD Packages",
//         icon: "/images/3D.svg",
//       },
//     ],
//     specifications: [
//       {
//         icon: "/images/hexagon.svg",
//         label: "Materials",
//         value: "Steel cabinet",
//       },
//       {
//         icon: "/images/move.svg",
//         label: "Dimensions",
//         value: "780×1900×470 mm",
//       },
//       {
//         icon: "/images/git-commit.svg",
//         label: "Charge Protocol",
//         value: "Mode 4 (DC)",
//       },
//       {
//         icon: "/images/zap.svg",
//         label: "Input Voltage",
//         value: "400 V DC",
//       },
//       {
//         icon: "/images/shield.svg",
//         label: "Protection",
//         value: "Surge, temp, DC fault, emergency stop",
//       },
//     ],
//   },
//   {
//     id: 11,
//     title: "ULTRACHARGE 80",
//     slug: "ultracharge-80",
//     description: "UltraCharge 80 kW fast charger for fleet and public use.",
//     imageUrl: "images/ultracharge_80.png",
//     category: ["Commercial", "AC"],
//     downloads: [
//       {
//         label: "Data Sheet",
//         icon: "/images/table-list.svg",
//       },
//       {
//         label: "Installation and Operation Manual",
//         icon: "/images/tool.svg",
//       },
//       {
//         label: "Statement of Compliance",
//         icon: "/images/Shield.svg",
//       },
//       {
//         label: "UKCA & CE Declaration of Conformity",
//         icon: "/images/FileText.svg",
//       },
//       {
//         label: "NBS BIM & CAD Packages",
//         icon: "/images/3D.svg",
//       },
//     ],
//     specifications: [
//       {
//         icon: "/images/hexagon.svg",
//         label: "Materials",
//         value: "Steel cabinet",
//       },
//       {
//         icon: "/images/move.svg",
//         label: "Dimensions",
//         value: "780×1900×470 mm",
//       },
//       {
//         icon: "/images/git-commit.svg",
//         label: "Charge Protocol",
//         value: "Mode 4 (DC)",
//       },
//       {
//         icon: "/images/zap.svg",
//         label: "Input Voltage",
//         value: "400 V DC",
//       },
//       {
//         icon: "/images/shield.svg",
//         label: "Protection",
//         value: "Over-current, surge, EMI shielding",
//       },
//     ],
//   },
//   {
//     id: 12,
//     title: "ULTRACHARGE 160",
//     slug: "ultracharge-160",
//     description: "UltraCharge 160 kW high-power station for fast deployment.",
//     imageUrl: "images/ultracharge_160.png",
//     category: ["Commercial", "AC"],
//     downloads: [
//       {
//         label: "Data Sheet",
//         icon: "/images/table-list.svg",
//       },
//       {
//         label: "Installation and Operation Manual",
//         icon: "/images/tool.svg",
//       },
//       {
//         label: "Statement of Compliance",
//         icon: "/images/Shield.svg",
//       },
//       {
//         label: "UKCA & CE Declaration of Conformity",
//         icon: "/images/FileText.svg",
//       },
//       {
//         label: "NBS BIM & CAD Packages",
//         icon: "/images/3D.svg",
//       },
//     ],
//     specifications: [
//       {
//         icon: "/images/hexagon.svg",
//         label: "Materials",
//         value: "Steel cabinet",
//       },
//       {
//         icon: "/images/move.svg",
//         label: "Dimensions",
//         value: "780×1900×470 mm",
//       },
//       {
//         icon: "/images/git-commit.svg",
//         label: "Charge Protocol",
//         value: "Mode 4 (DC)",
//       },
//       {
//         icon: "/images/zap.svg",
//         label: "Input Voltage",
//         value: "400 V DC",
//       },
//       {
//         icon: "/images/shield.svg",
//         label: "Protection",
//         value: "Liquid cooling, emergency stop",
//       },
//     ],
//   },
//   {
//     id: 13,
//     title: "ULTRACHARGE 240",
//     slug: "ultracharge-240",
//     description: "UltraCharge 240 kW ultra‑rapid charger for motorway use.",
//     imageUrl: "images/ultracharge_240.png",
//     category: ["Commercial", "AC"],
//     downloads: [
//       {
//         label: "Data Sheet",
//         icon: "/images/table-list.svg",
//       },
//       {
//         label: "Installation and Operation Manual",
//         icon: "/images/tool.svg",
//       },
//       {
//         label: "Statement of Compliance",
//         icon: "/images/Shield.svg",
//       },
//       {
//         label: "UKCA & CE Declaration of Conformity",
//         icon: "/images/FileText.svg",
//       },
//       {
//         label: "NBS BIM & CAD Packages",
//         icon: "/images/3D.svg",
//       },
//     ],
//     specifications: [
//       {
//         icon: "/images/hexagon.svg",
//         label: "Materials",
//         value: "Steel cabinet",
//       },
//       {
//         icon: "/images/move.svg",
//         label: "Dimensions",
//         value: "900×2000×500 mm",
//       },
//       {
//         icon: "/images/git-commit.svg",
//         label: "Charge Protocol",
//         value: "Mode 4 (DC)",
//       },
//       {
//         icon: "/images/zap.svg",
//         label: "Input Voltage",
//         value: "400 V DC",
//       },
//       {
//         icon: "/images/shield.svg",
//         label: "Protection",
//         value: "High-power safety interlocks",
//       },
//     ],
//   },
//   {
//     id: 14,
//     title: "CHARGECHECK",
//     slug: "chargecheck",
//     description:
//       "ChargeCheck is a portable tester for EV charging installations.",
//     imageUrl: "images/chargecheck.png",
//     category: ["Back Office", "Accessories"],
//     downloads: [
//       {
//         label: "Data Sheet",
//         icon: "/images/table-list.svg",
//       },
//       {
//         label: "Installation and Operation Manual",
//         icon: "/images/tool.svg",
//       },
//       {
//         label: "Statement of Compliance",
//         icon: "/images/Shield.svg",
//       },
//       {
//         label: "UKCA & CE Declaration of Conformity",
//         icon: "/images/FileText.svg",
//       },
//       {
//         label: "NBS BIM & CAD Packages",
//         icon: "/images/3D.svg",
//       },
//     ],
//     specifications: [
//       {
//         icon: "/images/hexagon.svg",
//         label: "Materials",
//         value: "ABS handheld unit",
//       },
//       {
//         icon: "/images/move.svg",
//         label: "Dimensions",
//         value: "150×100×50 mm",
//       },
//       {
//         icon: "/images/git-commit.svg",
//         label: "Charge Protocol",
//         value: "Test interface only",
//       },
//       {
//         icon: "/images/zap.svg",
//         label: "Input Voltage",
//         value: "110–240 V AC",
//       },
//       {
//         icon: "/images/shield.svg",
//         label: "Protection",
//         value: "Built‑in RTC, surge protection",
//       },
//     ],
//   },
//   {
//     id: 15,
//     title: "EV CONSUMER UNITS",
//     slug: "ev-consumer-units",
//     description: "EV consumer unit for supply protection and metering.",
//     imageUrl: "images/ev_consumer_units.png",
//     category: ["Back Office", "Accessories"],
//     downloads: [
//       {
//         label: "Data Sheet",
//         icon: "/images/table-list.svg",
//       },
//       {
//         label: "Installation and Operation Manual",
//         icon: "/images/tool.svg",
//       },
//       {
//         label: "Statement of Compliance",
//         icon: "/images/Shield.svg",
//       },
//       {
//         label: "UKCA & CE Declaration of Conformity",
//         icon: "/images/FileText.svg",
//       },
//       {
//         label: "NBS BIM & CAD Packages",
//         icon: "/images/3D.svg",
//       },
//     ],
//     specifications: [
//       {
//         icon: "/images/hexagon.svg",
//         label: "Materials",
//         value: "Sheet steel enclosure",
//       },
//       {
//         icon: "/images/move.svg",
//         label: "Dimensions",
//         value: "300×400×150 mm",
//       },
//       {
//         icon: "/images/git-commit.svg",
//         label: "Charge Protocol",
//         value: "Protection and metering",
//       },
//       {
//         icon: "/images/zap.svg",
//         label: "Input Voltage",
//         value: "230 V / 400 V AC",
//       },
//       {
//         icon: "/images/shield.svg",
//         label: "Protection",
//         value: "RCBO, surge, RCD",
//       },
//     ],
//   },
//   {
//     id: 16,
//     title: "PERIFIC FUSE",
//     slug: "perific-fuse",
//     description: "Perific Fuse protection device for EV charging circuits.",
//     imageUrl: "images/perific_fuse.png",
//     category: ["Back Office", "Accessories"],
//     downloads: [
//       {
//         label: "Data Sheet",
//         icon: "/images/table-list.svg",
//       },
//       {
//         label: "Installation and Operation Manual",
//         icon: "/images/tool.svg",
//       },
//       {
//         label: "Statement of Compliance",
//         icon: "/images/Shield.svg",
//       },
//       {
//         label: "UKCA & CE Declaration of Conformity",
//         icon: "/images/FileText.svg",
//       },
//       {
//         label: "NBS BIM & CAD Packages",
//         icon: "/images/3D.svg",
//       },
//     ],
//     specifications: [
//       {
//         icon: "/images/hexagon.svg",
//         label: "Materials",
//         value: "Industrial-grade fuse cartridge",
//       },
//       {
//         icon: "/images/move.svg",
//         label: "Dimensions",
//         value: "50×25×25 mm",
//       },
//       {
//         icon: "/images/git-commit.svg",
//         label: "Charge Protocol",
//         value: "Protection only",
//       },
//       {
//         icon: "/images/zap.svg",
//         label: "Input Voltage",
//         value: "230 V / 400 V AC",
//       },
//       {
//         icon: "/images/shield.svg",
//         label: "Protection",
//         value: "Over-current cutoff",
//       },
//     ],
//   },
// ];
