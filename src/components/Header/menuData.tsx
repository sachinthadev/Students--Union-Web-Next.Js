// import fs from "fs";
// import path from "path";

import { Menu } from "@/types/menu";



// Menu structure
const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 5,
    title: "News",
    path: "/news",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Gallery",
    path: "/gallery",
    newTab: false,
  },
  {
    id: 4,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 43,
        title: "Projects",
        path: "/gallery",
        newTab: false,
      },
      {
        id: 44,
        title: "Student Life",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Social Events",
        path: "/blog-details",
        newTab: false,
      },
    ],
  },
  {
    id: 8,
    title: "Downloads",
    newTab: false,
    submenu: [
      { id: 31, title: "Union Constitution", path: "/downloads/union constitution.pdf", newTab: true },
      { id: 32, title: "Students Handbook SLIATE", path: "/downloads/Students Handbook 2023 _FINAL.pdf", newTab: true },
    ],
  },
  {
    id: 3,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
];

export default menuData;
