import { CardProdutos } from "@/components/Card";
import React from "react";

const Estoque = () => {
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

const produtos = [
  {
    nome: "Nome do produto",
    quantidade: 100,
    valor: "R$100,00",
  },
  {
    nome: "Nome do produto",
    quantidade: 10,
    valor: "R$100,00",
  },
  {
    nome: "Nome do produto",
    quantidade: 0,
    valor: "R$100,00",
  },
  {
    nome: "Nome do produto",
    quantidade: 10,
    valor: "R$100,00",
  },
  {
    nome: "Nome do produto",
    quantidade: 10,
    valor: "R$100,00",
  },
  {
    nome: "Nome do produto",
    quantidade: 10,
    valor: "R$100,00",
  },
];
