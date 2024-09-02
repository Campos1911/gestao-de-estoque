"use client";

import React, { useState } from "react";
import NavItem from "./NavItem";
import { FaHouseChimney } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { NavsProps } from "@/@types";
import { BsFillPeopleFill } from "react-icons/bs";

const Sidebar = () => {
  const [width, setWidth] = useState<string>("w-16");
  return (
    <div
      className={`bg-blue-500 sticky text-white ${width} duration-500 ease-out flex justify-end pt-10`}
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
            titulo={navs.titulo}
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
    titulo: "Início",
  },
  {
    icon: AiFillProduct,
    link: "/estoque",
    titulo: "Estoque",
  },
  {
    icon: BsFillPeopleFill,
    link: "/funcionarios",
    titulo: "Funcionários",
  },
];
