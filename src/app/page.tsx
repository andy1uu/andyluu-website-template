import React from "react";
import type { Metadata } from "next";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "This is a base site for Andy to create his websites.",
};
const Home = () => (
  <section className="Homepage flex flex-grow">
    <div className="Homepage-container flex w-full flex-col gap-12 p-8 text-center xl:mx-auto xl:w-9/10">
      <h1 className="Homepage-text text-primary text-6xl font-bold">
        Primary Color Text
      </h1>
      <h2 className="Homepage-text text-secondary text-4xl font-bold">
        Secondary Color Text
      </h2>
      <h3 className="Homepage-text text-tertiary text-2xl font-bold">
        Tertiary Color Text
      </h3>
      <p className="Homepage-text text-dark dark:text-light text-xl font-bold">
        Text Color Text
      </p>
      <ThemeSwitcher />
    </div>
  </section>
);

export default Home;
