"use client";

import CircularProgress from "@/components/CircularProgress/CircularProgress";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white h-full rounded-tl-3xl p-6">
      <div className="w-full bg-red-500">
        <p className="text-2xl">Seja bem-vindo, Usuário123!</p>
        <p className="text-lg text-gray-400">
          Você está olhando o estoque da loja 1!
        </p>
      </div>
      <div></div>
      <div className="w-full flex bg-yellow-500">
        <CircularProgress corHex="#3b82f6" tema="Presença" porcentagem={30} />
      </div>
    </div>
  );
}
