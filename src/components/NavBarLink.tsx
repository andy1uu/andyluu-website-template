"use client";

import React from "react";

import { usePathname } from "next/navigation";

const NavBarLink = ({ label, link }: { label: string; link: string }) => {
  const pathname = usePathname();

  return (
    <a
      href={link}
      aria-label={label}
      className={`NavBarLink align-center lg:border-b-primary flex gap-2 text-center text-4xl font-semibold lg:border-b-4 lg:text-3xl ${pathname === link ? "lg:text-primary" : ""}`}>
      <p>{label}</p>
    </a>
  );
};

export default NavBarLink;
