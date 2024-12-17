import { Menu } from "@/types/menu";

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
    path: "/features",
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
    path: "/blog",
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
        path: "/blog",
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
        title: "Sociel Events",
        path: "/blog-details",
        newTab: false,
      },
     
    ],
  },
  {
    id: 35,
    title: "Downloads",
    newTab: false,
    submenu: [
     
      {
        id: 33,
        title: "Projects1",
        path: "",
        newTab: false,
      },
      {
        id: 32,
        title: "Student 2",
        path: "",
        newTab: false,
      },
      {
        id: 31,
        title: "Sociel 3",
        path: "",
        newTab: false,
      },
     
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