"use client";

import { DashboardProps, GraficosProps, UserProps } from "@/@types";
import { CardDashboard } from "@/components/Card";
import { CircularProgress } from "@/components/CircularProgress";
import { Loading } from "@/components/Loading";
import { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";

export default function Home() {
  const [dashboard, setDashboard] = useState<DashboardProps[]>([]);
  const [graficos, setGraficos] = useState<GraficosProps[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
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

    setLoaded(true);
  }, []);

  if (!loaded) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col w-full bg-white h-full rounded-tl-3xl p-6 gap-4">
      <div className="w-full flex flex-col mt-16 lg:mt-0">
        <p className="text-2xl">Seja bem-vindo, {user.nome}!</p>
        <div className="sm:text-lg text-gray-400 sm:flex sm:flex-row  gap-1">
          Você está olhando o sistema da
          <p className="text-blue-500">loja 1!</p>
        </div>
      </div>

      <div className="sm:flex grid grid-cols-2 gap-2 w-full py-5 justify-between">
        {dashboard.map((dados, index) => (
          <CardDashboard key={index} titulo={dados.titulo} dado={dados.dado} />
        ))}
        <CardDashboard titulo="Sua permissão" dado={user.permissao} />
      </div>

      <div className="border border-blue-500 p-5 rounded-lg shadow-lg w-full flex">
        <div className="sm:flex grid grid-cols-2 gap-10 sm:justify-between w-full">
          {graficos.map((dados, index) => (
            <CircularProgress
              key={index}
              corHex={dados.corHex}
              tema={dados.tema}
              porcentagem={dados.porcentagem}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
