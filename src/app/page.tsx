"use client";

import CircularProgress from "@/components/CircularProgress/CircularProgress";
import "react-circular-progressbar/dist/styles.css";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white h-full rounded-tl-3xl p-6 gap-4">
      <div className="w-full">
        <p className="text-2xl">Seja bem-vindo, Usuário123!</p>
        <p className="text-lg text-gray-400">
          Você está olhando o estoque da loja 1!
        </p>
      </div>
      <div className="w-full flex flex-col gap-10 p-5 rounded-xl bg-gray-100 shadow-lg">
        <p className="text-2xl">Análise geral:</p>
        <div className="flex justify-between w-full">
          <CircularProgress
            corHex="#3b82f6"
            tema="Presença"
            porcentagem={30}
            width="w-44"
            height="h-44"
          />
          <CircularProgress
            corHex="#9333ea"
            tema="Vendas"
            porcentagem={30}
            width="w-44"
            height="h-44"
          />
          <CircularProgress
            corHex="#c2410c"
            tema="Seguidores"
            porcentagem={30}
            width="w-44"
            height="h-44"
          />
          <CircularProgress
            corHex="#15803d"
            tema="Meta Anual"
            porcentagem={30}
            width="w-44"
            height="h-44"
          />
        </div>
      </div>
    </div>
  );
}
