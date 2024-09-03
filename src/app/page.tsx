"use client";

import { DashboardProps, GraficosProps, UserProps } from "@/@types";
import { CardDashboard } from "@/components/Card";
import { CircularProgress } from "@/components/CircularProgress";
import { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";

export default function Home() {
  const [dashboard, setDashboard] = useState<DashboardProps[]>([]);
  const [graficos, setGraficos] = useState<GraficosProps[]>([]);
  const [user, setUser] = useState<UserProps>({
    nome: "",
    email: "",
    permissao: "",
  });

  useEffect(() => {
    fetch("http://localhost:3000/dashboard", { method: "GET" })
      .then((res) => res.json())
      .then((json) => setDashboard(json));

    fetch("http://localhost:3000/graficos", { method: "GET" })
      .then((res) => res.json())
      .then((json) => setGraficos(json));

    fetch("http://localhost:3000/user", { method: "GET" })
      .then((res) => res.json())
      .then((json) => setUser(json));
  }, []);

  return (
    <div className="flex flex-col w-full bg-white h-full rounded-tl-3xl p-6 gap-4">
      <div className="w-full">
        <p className="text-2xl">Seja bem-vindo, {user.nome}!</p>
        <div className="text-lg text-gray-400 flex gap-1">
          Você está olhando o sistema da{" "}
          <p className="text-blue-500">loja 1!</p>
        </div>
      </div>
      <div className="flex w-full py-5 justify-between">
        {dashboard.map((dados, index) => (
          <CardDashboard key={index} titulo={dados.titulo} dado={dados.dado} />
        ))}
        <CardDashboard titulo="Sua permissão" dado={user.permissao} />
      </div>
      <div className="border border-blue-500 p-5 rounded-lg shadow-lg w-full flex">
        <div className="flex justify-between w-full">
          {graficos.map((dados, index) => (
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
