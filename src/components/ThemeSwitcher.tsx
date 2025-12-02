"use client";

import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@nextui-org/react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Button
        disableRipple={true}
        disableAnimation={true}
        isLoading={true}
        spinner={
          <svg
            className="h-6 w-6 animate-spin text-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              fill="currentColor"
            />
          </svg>
        }
        aria-label="Loading"
        color="default"
        className={`flex justify-start rounded-lg p-3`}
      />
    );

  if (resolvedTheme === "dark") {
    return (
      <button
        onClick={() => setTheme("light")}
        aria-label="Light"
        className={`group bg-primary relative flex w-fit justify-start gap-2 rounded-full p-2 transition-all hover:rounded-md`}>
        <MdOutlineLightMode size={28} className="text-light my-auto" />
      </button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <button
        onClick={() => setTheme("dark")}
        aria-label="Dark"
        className={`group bg-primary relative flex w-fit justify-start gap-2 rounded-full p-2 hover:rounded-md`}>
        <MdOutlineDarkMode size={28} className="text-dark my-auto" />
      </button>
    );
  }
};

export default ThemeSwitcher;
