import React from "react";

const Footer = () => (
  <footer className="Footer text-dark dark:text-light mt-auto flex h-16 w-full items-center justify-center px-8 py-2 text-xs font-medium sm:text-lg">
    <h1>{new Date().getFullYear()} &copy; Andy Luu. All Rights Reserved.</h1>
  </footer>
);

export default Footer;
