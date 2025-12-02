import React from "react";
import NavBar from "./NavBar";

const Header = () => (
  <header className="Header text-dark dark:text-light flex h-28 w-full items-center justify-between p-4 lg:h-20">
    <h1 className="Header-title text-primary mr-20 w-full text-4xl font-bold lg:w-fit lg:text-4xl">
      Website Template
    </h1>
    <NavBar />
  </header>
);

export default Header;
