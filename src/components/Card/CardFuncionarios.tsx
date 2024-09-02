import React from "react";
import { FaUserAlt } from "react-icons/fa";

const CardFuncionarios = ({ nome, cargo }: { nome: string; cargo: string }) => {
  return (
    <div className="border border-blue-500 flex items-center rounded-md p-3 shadow-md cursor-default hover:bg-blue-500 duration-200 group gap-4">
      <div className="rounded-full w-10 h-10 bg-blue-500 text-white flex items-center justify-center group-hover:bg-white group-hover:text-blue-500">
        <FaUserAlt />
      </div>
      <div>
        <p className="group-hover:text-white">{nome}</p>
        <p className="text-gray-400 text-sm group-hover:text-white">{cargo}</p>
      </div>
    </div>
  );
};

export default CardFuncionarios;