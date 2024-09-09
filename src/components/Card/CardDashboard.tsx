import React from "react";

const CardDashboard = ({ titulo, dado }: { titulo: string; dado: string }) => {
  return (
    <div className="border border-blue-500 md:p-3 p-2 rounded-lg shadow-lg sm:w-[23%] h-24 flex flex-col gap-2 justify-center">
      <p className="lg:text-xl">{titulo}</p>
      <p className="lg:text-lg text-blue-500">{dado}</p>
    </div>
  );
};

export default CardDashboard;
