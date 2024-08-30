"use client";

import React, { useState } from "react";

const Sidebar = () => {
  const [width, setWidth] = useState<string>("w-16");
  return (
    <div
      className={`bg-blue-500 sticky text-white ${width} duration-300 pt-10 flex h-full justify-center`}
      onMouseEnter={() => setWidth("w-72")}
      onMouseLeave={() => setWidth("w-16")}
    >
      TESTE
    </div>
  );
};

export default Sidebar;
