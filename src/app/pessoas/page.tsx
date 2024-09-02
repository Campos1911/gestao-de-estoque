"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardFuncionarios } from "@/components/Card";

const Pessoas = () => {
  return (
    <div className="flex flex-col w-full bg-white h-full rounded-tl-3xl p-6 gap-4">
      <p className="text-2xl">Gerenciar Pessoas</p>
      <Tabs
        defaultValue="gerencia"
        className="flex flex-col w-full justify-center items-center gap-5"
      >
        <TabsList className="w-full py-7">
          <TabsTrigger className="w-[80%] py-3" value="gerencia">
            Gerência
          </TabsTrigger>
          <TabsTrigger className="w-[80%] py-3" value="clientes">
            Clientes
          </TabsTrigger>
        </TabsList>
        <TabsContent value="gerencia" className="w-full grid grid-cols-3 gap-3">
          {funcionarios.map((func, index) => (
            <CardFuncionarios key={index} nome={func.nome} cargo={func.cargo} />
          ))}
        </TabsContent>
        <TabsContent value="clientes">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default Pessoas;

const funcionarios = [
  {
    nome: "Admin 1",
    cargo: "Admin",
  },
  {
    nome: "Gestor 1",
    cargo: "Gestor",
  },
  {
    nome: "Repositor 1",
    cargo: "Repositor",
  },
  {
    nome: "Repositor 2",
    cargo: "Repositor",
  },
];
