import React from "react";

const Footer = () => (
  <footer className="Footer bg-light text-dark dark:bg-dark dark:text-light flex h-16 w-full items-center justify-center text-lg font-medium">
    <h1>{new Date().getFullYear()} &copy; Andy Luu. All Rights Reserved.</h1>
  </footer>
);

export default Footer;
