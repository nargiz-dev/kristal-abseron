import binalar from "../images/binalar.svg";
import musteriler from "../images/musteriler.svg";
import ipotekalar from "../images/ipoteka-kredit.svg";
import bildirisler from "../images/bildirisler.svg";
import mesajlar from "../images/mesajlar.svg";
import kalendar from "../images/kalendar.svg";
import statistika from "../images/statistics.svg";
import inqilabRezidens from "../images/inqilab.png";
import azadliq from "../images/azadliq.png";
import pasaBank from "../images/pasabank.png";
import rabiteBank from "../images/rabitebank.png";
import kapitalBank from "../images/kapitalbank.png";
import ABB from "../images/abb.png";
import memarEcemi from "../images/memarecemi.png";
import neftciler from "../images/neftciler.png";

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
  { header: "Satılan mənzil", value: "325.6 K ₼", cName: "green" },
  { header: "Kredit mənzil", value: "219.3 K ₼", cName: "violet" },
  { header: "İpoteka mənzil", value: "714.8 K ₼", cName: "yellow" },
  { header: "Ümumi məbləğ", value: "1.259 M ₼", cName: "blue" },
];

export const projectsCard = [
  {
    icon: inqilabRezidens,
    title:"İnqilab Rezidens",
    text: "Həsən Əliyev küçəsi 7b",
    value: "325.6 K ₼",
  },
  {
    icon: azadliq,
    title:"Azadlıq 2",
    text: "S.Sani Axundov küçəsi",
    value: "302.6 K ₼",
  },
  {
    icon: memarEcemi,
    title:"Memar Əcəmi 2",
    text: "Hüseynbala Əliyev küç",
    value: "274.6 K ₼",
  },
  {
    icon: neftciler,
    title:"Neftçilər",
    text: "Məhsəti Gəncəvi küçəsi",
    value: "128.6 K ₼",
  },
];

export const banksCard = [
  {
    icon: pasaBank,
    text: "Pasha Bank",
    value: "325.6 K ₼",
  },
  {
    icon: rabiteBank,
    text: "Rabitə Bank",
    value: "302.6 K ₼",
  },
  {
    icon: kapitalBank,
    text: "Kapital Bank",
    value: "274.6 K ₼",
  },
  {
    icon: ABB,
    text: "ABB",
    value: "128.6 K ₼",
  },
];
