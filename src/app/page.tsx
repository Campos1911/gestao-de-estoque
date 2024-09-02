"use client";

import { CardDashboard } from "@/components/Card";
import { CircularProgress } from "@/components/CircularProgress";
import "react-circular-progressbar/dist/styles.css";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white h-full rounded-tl-3xl p-6 gap-4">
      <div className="w-full">
        <p className="text-2xl">Seja bem-vindo, Usuário123!</p>
        <p className="text-lg text-gray-400 flex gap-1">
          Você está olhando o estoque da{" "}
          <p className="text-blue-500">loja 1!</p>
        </p>
      </div>
      <div className="flex w-full py-5 justify-between">
        {cardInfos.map((dados, index) => (
          <CardDashboard key={index} titulo={dados.titulo} dado={dados.dado} />
        ))}
      </div>
      <div className="border-2 border-blue-500 p-5 rounded-lg shadow-lg w-full flex">
        <div className="flex justify-between w-full">
          {circularInfos.map((dados, index) => (
            <CircularProgress
              key={index}
              corHex={dados.corHex}
              tema={dados.tema}
              porcentagem={dados.porcentagem}
              width="w-44"
              height="h-44"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const circularInfos = [
  {
    corHex: "#3b82f6",
    tema: "Presença",
    porcentagem: 30,
  },
  {
    corHex: "#9333ea",
    tema: "Vendas",
    porcentagem: 30,
  },
  {
    corHex: "#c2410c",
    tema: "Seguidores",
    porcentagem: 30,
  },
  {
    corHex: "#15803d",
    tema: "Meta Anual",
    porcentagem: 30,
  },
];

const cardInfos = [
  {
    titulo: "Valor em caixa",
    dado: "R$15.000,00",
  },
  {
    titulo: "Qtd. colaboradores",
    dado: "120",
  },
  {
    titulo: "Última venda",
    dado: "R$150,00",
  },
  {
    titulo: "NPS",
    dado: "85",
  },
];
