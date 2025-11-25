"use client";

import React, { useState } from "react";
import {
  MdHome,
  MdOutlineSchool,
  MdWorkHistory,
  MdCode,
  MdEmail,
  MdCardGiftcard,
  MdCatchingPokemon,
} from "react-icons/md";
import NavBarLink from "./NavBarLink";
import { motion } from "framer-motion";

const iconSize = 36;

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const navBarLinks = [
  {
    keyProp: "home",
    label: "Home",
    link: "/",
    icon: <MdHome size={iconSize} className="my-auto" />,
    open: open,
  },
  {
    keyProp: "Tab 1",
    label: "Tab 1",
    link: "/products",
    icon: <MdWorkHistory size={iconSize} className="my-auto" />,
    open: open,

  },
  {
    keyProp: "Tab 2",
    label: "Tab 2",
    link: "/contact",
    icon: <MdEmail size={iconSize} className="my-auto" />,
    open: open,
  },
];


  return (<>
  <div className="NavBar-mobileButton fixed z-20 top-4 right-4 flex flex-col h-20 w-20 rounded-xl justify-between py-6 px-4 transition-colors bg-primary hover:bg-secondary md:hidden" onClick={() => setOpen(!open)}>
      <motion.span
        className="h-1 w-12 bg-white"
        animate={open ? { rotate: -45, y: 14 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="h-1 w-12 bg-white"
        animate={{ opacity: open ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="h-1 w-12 bg-white"
        animate={open ? { rotate: 45, y: -14 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
  </div>
  <motion.div 
    className="NavBar-mobileMenu z-10 bg-primary fixed right-0 top-0 m-4 p-4 rounded-xl md:hidden"
    animate={open ? "open" : "closed"}
    variants={{open: {
    width: window.innerWidth - 32, 
      height: window.innerHeight - 32 ,
      paddingTop: 100 ,
      opacity: 1,
    transition: { duration: 0.7, ease: "easeIn" }
  },
  closed: {
        width: 80 , 
      height: 80 ,
      paddingTop: 0 ,
      opacity: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.3 }
  }}}
  >
    <motion.div className="flex-col gap-8 my-auto hidden"
        animate={open ? "open" : "closed"}
    variants={{
  open: {
    display: "flex",
    opacity: 1,
    transition: { duration: 0.3, ease: "easeIn", delay: 0.7 }
  },
  closed: {
    display: "none",
    opacity: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  }
}}
>
      {navBarLinks.map((navBarLink) => (
        <NavBarLink
          key={navBarLink.keyProp}
          label={navBarLink.label}
          link={navBarLink.link}
          icon={navBarLink.icon}
        />
      ))}
    </motion.div>
  </motion.div>
  <motion.div className="NavBar-desktopMenu hidden">
    {navBarLinks.map((navBarLink) => (
        <NavBarLink
          key={navBarLink.keyProp}
          label={navBarLink.label}
          link={navBarLink.link}
          icon={navBarLink.icon}
        />
      ))}</motion.div>
  </>);
};

export default NavBar;
