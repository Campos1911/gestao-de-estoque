import Link from "next/link";
import React from "react";
import { MdOutlineReportGmailerrorred } from "react-icons/md";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-blue-500 h-full rounded-tl-3xl p-6 gap-4">
      <div className="bg-white w-[60vw] flex flex-col justify-center items-center h-[70vh] rounded-lg">
        <MdOutlineReportGmailerrorred className="w-40 h-40 text-blue-500" />
        <p className="text-blue-500 text-5xl font-bold">Error 404</p>
        <p className="text-xl">Página não encontrada!</p>
        <Link
          href="/"
          className="border border-blue-500 bg-blue-500 p-2 rounded-full text-white hover:bg-white hover:text-blue-500 duration-200 mt-3"
        >
          Voltar a tela inicial
        </Link>
      </div>
    </div>
  );
};

export default Error404;
