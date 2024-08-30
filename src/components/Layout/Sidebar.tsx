"use client";

import React, { useState } from "react";

const Sidebar = () => {
  const [width, setWidth] = useState<string>("w-16");
  return (
    <div
      className={`bg-red-500 sticky text-white pt-16 h-screen ${width} duration-300 flex justify-center`}
      onMouseEnter={() => setWidth("w-72")}
      onMouseLeave={() => setWidth("w-16")}
    >
      TESTE
    </div>
  );
};

export default Sidebar;
