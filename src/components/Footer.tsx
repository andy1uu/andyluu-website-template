import React from "react";

const Footer = () => (
  <footer className="Footer mt-auto flex h-16 w-full items-center justify-center sm:text-lg px-8 py-2 text-xs font-medium text-dark dark:text-light">
    <h1>{new Date().getFullYear()} &copy; Andy Luu. All Rights Reserved.</h1>
  </footer>
);

export default Footer;
