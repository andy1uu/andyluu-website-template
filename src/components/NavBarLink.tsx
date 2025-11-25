"use client";

import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const NavBarLink = ({
  label,
  link,
  icon,
}: {
  label: string;
  link: string;
  icon: ReactNode;
}) => {
  const pathname = usePathname();

  return (
    <a
      href={link}
      aria-label={label}
      className="NavBarLink flex gap-2 text-4xl text-center align-center font-semibold"
    >
      <div>
        {icon}
      </div>
      <p>
        {label}
      </p>
    </a>
  );
};

export default NavBarLink;
