import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "This is a base site for Andy to create his websites.",
};
const Home = () => (
  <main className="Homepage bg-light dark:bg-dark flex min-h-screen w-full items-center justify-center">
    <h1 className="Homepage-text text-dark dark:text-light text-8xl font-bold">
      Hello World
    </h1>
  </main>
);

export default Home;
