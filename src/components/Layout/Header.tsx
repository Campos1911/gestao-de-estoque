"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import { FaHouseChimney } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { NavsProps } from "@/@types";
import { BsFillPeopleFill } from "react-icons/bs";
import Link from "next/link";

const Header = () => {
  const [visibility, setVisibility] = useState<boolean>(false);
  return (
    <div className="absolute w-full z-10 text-white">
      <div className="bg-blue-500 h-16 px-5 flex sticky items-center justify-between">
        <p className="text-xl font-bold cursor-pointer">LOGO</p>
        <HamburgerMenuIcon
          className="lg:hidden"
          onClick={() => setVisibility(!visibility)}
        />
      </div>
      {navs.map((nav, index) => (
        <Link
          href={nav.link}
          onClick={() => setVisibility(!visibility)}
          key={index}
          className={`bg-blue-500 ${
            visibility ? "flex" : "hidden"
          } flex-row items-center gap-3 w-full p-4`}
        >
          <nav.icon />
          {nav.titulo}
        </Link>
      ))}
    </div>
  );
};

export default Header;

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
    link: "/pessoas",
    titulo: "Pessoas",
  },
];
