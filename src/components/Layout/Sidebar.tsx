"use client";

import Link from "next/link";
import React, { useState } from "react";

const Sidebar = () => {
  const [width, setWidth] = useState<string>("w-16");
  return (
    <div
      className={`bg-blue-500 sticky text-white ${width} duration-300 pt-10 flex h-full justify-center`}
      onMouseEnter={() => setWidth("w-60")}
      onMouseLeave={() => setWidth("w-16")}
    >
      <div className="flex flex-col w-full">
        <Link
          href="/"
          className="flex w-full justify-center py-3 bg-blue-500 hover:bg-blue-600 duration-200"
        >
          Texto
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
