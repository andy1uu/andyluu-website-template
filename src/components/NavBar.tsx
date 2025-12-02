"use client";

import React, { useState, useEffect } from "react";
import { MdHome } from "react-icons/md";
import NavBarLink from "./NavBarLink";
import { motion, useAnimation } from "framer-motion";

const iconSize = 36;

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (open) {
        controls.start({
          width: window.innerWidth - 32,
          height: window.innerHeight - 32,
          paddingTop: 100,
          opacity: 1,
          transition: { duration: 0.7, ease: "easeIn" },
        });
      } else {
        controls.start({
          width: 80,
          height: 80,
          paddingTop: 0,
          opacity: 0,
          transition: { duration: 0.7, ease: "easeOut", delay: 0.3 },
        });
      }
    }
  }, [open, controls]);

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
      link: "/tab1",
      icon: <MdHome size={iconSize} className="my-auto" />,
      open: open,
    },
    {
      keyProp: "Tab 2",
      label: "Tab 2",
      link: "/tab2",
      icon: <MdHome size={iconSize} className="my-auto" />,
      open: open,
    },
  ];

  return (
    <>
      <div
        className="NavBar-mobileButton bg-primary hover:bg-secondary fixed top-4 right-4 z-20 flex h-20 w-20 flex-col justify-between rounded-xl px-4 py-6 transition-colors lg:hidden"
        onClick={() => setOpen(!open)}>
        <motion.span
          className="h-1 w-12 rounded-full bg-white"
          animate={open ? { rotate: -45, y: 14 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="h-1 w-12 rounded-full bg-white"
          animate={{ opacity: open ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="h-1 w-12 rounded-full bg-white"
          animate={open ? { rotate: 45, y: -14 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <motion.div
        className="NavBar-mobileMenu bg-primary fixed top-0 right-0 z-10 m-4 rounded-xl p-4 lg:hidden"
        animate={controls}>
        <motion.div
          className="my-auto hidden flex-col gap-8"
          animate={open ? "open" : "closed"}
          variants={{
            open: {
              display: "flex",
              opacity: 1,
              transition: { duration: 0.3, ease: "easeIn", delay: 0.7 },
            },
            closed: {
              display: "none",
              opacity: 0,
              transition: { duration: 0.3, ease: "easeOut" },
            },
          }}>
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
      <motion.div className="NavBar-desktopMenu hidden gap-8 lg:flex">
        {navBarLinks.map((navBarLink) => (
          <NavBarLink
            key={navBarLink.keyProp}
            label={navBarLink.label}
            link={navBarLink.link}
            icon={navBarLink.icon}
          />
        ))}
      </motion.div>
    </>
  );
};

export default NavBar;
