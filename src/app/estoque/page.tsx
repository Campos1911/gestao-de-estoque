"use client";

import { ProdutosPros } from "@/@types";
import { CardProdutos } from "@/components/Card";
import { METHODS } from "http";
import React, { useEffect, useState } from "react";

const Estoque = () => {
  const [produtos, setProdutos] = useState<ProdutosPros[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/produtos")
      .then((res) => res.json())
      .then((res) => setProdutos(res));
  }, []);

  return (
    <div className="flex flex-col w-full bg-white h-full rounded-tl-3xl p-6 gap-4">
      <p className="text-2xl">Estoque de Produtos</p>
      <div className="grid grid-cols-2 gap-6 w-full">
        {produtos.map((produtos, index) => (
          <CardProdutos
            key={index}
            nome={produtos.nome}
            quantidade={produtos.quantidade}
            valor={produtos.valor}
          />
        ))}
      </div>
    </div>
  );
};

export default Estoque;
