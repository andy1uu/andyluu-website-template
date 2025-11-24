import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => (
  <header className="Header bg-light dark:bg-dark flex h-16 w-full items-center justify-center">
    <ThemeSwitcher />
  </header>
);

export default Header;
