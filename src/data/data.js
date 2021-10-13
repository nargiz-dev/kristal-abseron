import binalar from "../images/binalar.svg";
import musteriler from "../images/musteriler.svg";
import ipotekalar from "../images/ipoteka-kredit.svg";
import bildirisler from "../images/bildirisler.svg";
import mesajlar from "../images/mesajlar.svg";
import kalendar from "../images/kalendar.svg";
import statistika from "../images/statistics.svg";

export const SidebarData = [
  {
    title: "Binalar",
    path: "/",
    icon: binalar,
    cName: "link-wrapper",
  },
  {
    title: "Müştərilər",
    path: "/musteriler",
    icon: musteriler,
    cName: "link-wrapper",
  },
  {
    title: "İpotekalar",
    path: "/ipotekalar",
    icon: ipotekalar,
    cName: "link-wrapper",
  },
  {
    title: "Kreditlər",
    path: "/kreditler",
    icon: ipotekalar,
    cName: "link-wrapper",
  },
  {
    title: "Bildirişlər",
    path: "/bildirisler",
    icon: bildirisler,
    cName: "link-wrapper",
  },
  {
    title: "Mesajlar",
    path: "/mesajlar",
    icon: mesajlar,
    cName: "link-wrapper",
  },

  {
    title: "Kalendar",
    path: "/kalendar",
    icon: kalendar,
    cName: "link-wrapper",
  },

  {
    title: "Statistika",
    path: "/statistika",
    icon: statistika,
    cName: "link-wrapper",
  },
];

export const generalStatistics = [
  { header: "Satılan mənzil", value: "325.6 K ₼", cName:"green" },
  { header: "Kredit mənzil", value: "219.3 K ₼", cName:"violet" },
  { header: "İpoteka mənzil", value: "714.8 K ₼",cName:"yellow" },
  { header: "Ümumi məbləğ", value: "1.259 M ₼",cName:"blue" },
];
