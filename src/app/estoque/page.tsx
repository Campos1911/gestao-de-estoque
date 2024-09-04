"use client";

import { ProdutosPros } from "@/@types";
import { CardCreateProduto, CardProdutos } from "@/components/Card";
import { Loading } from "@/components/Loading";
import React, { useEffect, useState } from "react";

const Estoque = () => {
  const [produtos, setProdutos] = useState<ProdutosPros[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  useEffect(() => {
    fetch("http://localhost:3000/produtos")
      .then((res) => res.json())
      .then((res) => setProdutos(res));
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col w-full bg-white h-full rounded-tl-3xl p-6 sm:gap-4 gap-4">
      <p className="text-2xl sm:mt-0 mt-16">Estoque de Produtos</p>
      <div className="lg:grid flex flex-col grid-cols-2 lg:gap-6 gap-4 w-full">
        <CardCreateProduto />
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
