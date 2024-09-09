"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";

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
      <p
        className={`bg-red-500 ${
          visibility ? "flex" : "hidden"
        } absolute right-0 w-64 p-1`}
      >
        Menu
      </p>
    </div>
  );
};

export default Header;
