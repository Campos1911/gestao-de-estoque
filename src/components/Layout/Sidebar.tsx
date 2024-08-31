"use client";

import React, { useState } from "react";
import NavItem from "./NavItem";
import { FaHouseChimney } from "react-icons/fa6";
import { NavsProps } from "@/@types";

const Sidebar = () => {
  const [width, setWidth] = useState<string>("w-16");
  return (
    <div
      className={`bg-blue-500 sticky text-white ${width} duration-500 ease-out flex justify-end h-full pt-10`}
      onMouseEnter={() => setWidth("w-60")}
      onMouseLeave={() => setWidth("w-16")}
    >
      <div className="flex flex-col w-full">
        {navs.map((navs, index) => (
          <NavItem
            key={index}
            width={width}
            NavIcon={navs.icon}
            link={navs.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

const navs: NavsProps[] = [
  {
    icon: FaHouseChimney,
    link: "/",
  },
  {
    icon: FaHouseChimney,
    link: "/",
  },
  {
    icon: FaHouseChimney,
    link: "/",
  },
];
