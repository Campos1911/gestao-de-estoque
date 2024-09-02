import React from "react";

const CardDashboard = ({ titulo, dado }: { titulo: string; dado: string }) => {
  return (
    <div className="border border-blue-500 p-3 rounded-lg shadow-lg w-[23%] h-24 flex flex-col gap-2 justify-center">
      <p className="text-xl">{titulo}</p>
      <p className="text-lg text-blue-500">{dado}</p>
    </div>
  );
};

export default CardDashboard;
