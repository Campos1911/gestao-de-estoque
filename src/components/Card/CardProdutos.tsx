"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GoPackage } from "react-icons/go";

const CardProdutos = ({
  nome,
  quantidade,
  valor,
}: {
  nome: string;
  quantidade: number;
  valor: string;
}) => {
  const [cor, setCor] = useState<string>("");
  useEffect(() => {
    if (quantidade >= 20) {
      setCor("bg-green-500");
    } else if (quantidade === 0) {
      setCor("bg-red-500");
    } else {
      setCor("bg-yellow-500");
    }
  }, [quantidade]);

  return (
    <Link
      href={"http://google.com"}
      target="blank"
      className="flex w-full items-center justify-between border rounded-md px-3 py-5 shadow-lg cursor-pointer hover:bg-gray-300 duration-200"
    >
      <div
        className={`flex rounded-full ${cor} w-10 h-10 items-center justify-center`}
      >
        <GoPackage />
      </div>
      <p>
        {nome} - {valor}
      </p>
      <p>{quantidade}</p>
    </Link>
  );
};

export default CardProdutos;
