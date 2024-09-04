"use client";

import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardClientes, CardFuncionarios } from "@/components/Card";
import { ClientesProps, FuncionariosProps } from "@/@types";
import { Loading } from "@/components/Loading";

const Pessoas = () => {
  const [pessoas, setPessoas] = useState<FuncionariosProps[]>([]);
  const [clientes, setClientes] = useState<ClientesProps[]>([]);
  const [novoCliente, setNovoCliente] = useState<ClientesProps>({
    nome: "",
    regiao: "",
  });
  const [loaded, setLoaded] = useState<boolean>(false);
  useEffect(() => {
    fetch("http://localhost:3000/clientes", { method: "GET" })
      .then((res) => res.json())
      .then((json) => setClientes(json))
      .catch((err) => alert(err));

    fetch("http://localhost:3000/funcionarios", { method: "GET" })
      .then((res) => res.json())
      .then((json) => setPessoas(json))
      .catch((err) => alert(err));

    setLoaded(true);
  }, []);

  if (!loaded) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col w-full bg-white h-full rounded-tl-3xl p-6 gap-4">
      <p className="text-2xl">Gerenciar Pessoas</p>
      <Tabs
        defaultValue="gerencia"
        className="flex flex-col w-full justify-center items-center"
      >
        <TabsList className="w-full py-7 mb-7">
          <TabsTrigger className="w-[80%] py-3" value="gerencia">
            Gerência
          </TabsTrigger>
          <TabsTrigger className="w-[80%] py-3" value="clientes">
            Clientes
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="gerencia"
          className="w-full flex flex-col md:grid lg:grid-cols-3 md:grid-cols-2 gap-3"
        >
          <CardFuncionarios nome="Adicionar novo funcionário" />
          {pessoas.map((func, index) => (
            <CardFuncionarios key={index} nome={func.nome} cargo={func.cargo} />
          ))}
        </TabsContent>
        <TabsContent
          value="clientes"
          className="w-full flex flex-col md:grid lg:grid-cols-3 md:grid-cols-2 gap-3"
        >
          <CardClientes
            nome="Adicionar novo cliente"
            novoCliente={novoCliente}
            setNovoCliente={setNovoCliente}
            clientes={clientes}
            setClientes={setClientes}
          />
          {clientes.map((func, index) => (
            <CardClientes
              key={index}
              nome={func.nome}
              regiao={func.regiao}
              novoCliente={novoCliente}
              setNovoCliente={setNovoCliente}
              clientes={clientes}
              setClientes={setClientes}
            />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Pessoas;
