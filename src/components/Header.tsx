import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import NavBar from "./NavBar";

const Header = () => (
  <header className="Header flex h-16 w-full items-center justify-between p-4 text-dark dark:text-light">
    <h1 className="Header-title text-xl font-bold text-primary">
      Website Template
    </h1>
    <NavBar />
  </header>
);

export default Header;