import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { SelectRegiao } from "../Select";
import { ClientesProps } from "@/@types";

const CardClientes = ({
  nome,
  regiao,
  novoCliente,
  setNovoCliente,
  clientes,
  setClientes,
}: {
  nome: string;
  regiao?: string;
  novoCliente?: ClientesProps;
  setNovoCliente?: React.Dispatch<React.SetStateAction<ClientesProps>>;
  clientes?: ClientesProps[];
  setClientes?: React.Dispatch<React.SetStateAction<ClientesProps[]>>;
}) => {
  async function handleCreateCliente() {
    const dadosParaCriar = {
      nome: novoCliente?.nome,
      regiao: novoCliente?.regiao,
    };

    await fetch("http://localhost:3000/clientes", {
      method: "POST",
      body: JSON.stringify(dadosParaCriar),
    }).then(() =>
      setClientes?.([
        ...(clientes as ClientesProps[]),
        novoCliente as ClientesProps,
      ])
    );
  }

  if (nome === "Adicionar novo cliente") {
    return (
      <Dialog>
        <DialogTrigger className="outline-none border border-blue-500 flex items-center rounded-md p-3 shadow-md cursor-pointer duration-200 group gap-4 bg-blue-500 hover:bg-white">
          <div className="rounded-full w-10 h-10 flex items-center justify-center text-blue-500 bg-white group-hover:bg-blue-500 group-hover:text-white">
            <FaUserAlt />
          </div>
          <div>
            <p className="text-white group-hover:text-blue-500">{nome}</p>
          </div>
        </DialogTrigger>
        <DialogContent className="w-[90%]">
          <DialogHeader>
            <DialogTitle>Insira as informações do cliente</DialogTitle>
            <DialogDescription className="flex flex-col w-full">
              <div className="flex sm:flex-row flex-col w-full sm:items-end items-center justify-between gap-2 ">
                <div>
                  <p>Nome do cliente:</p>
                  <input
                    type="text"
                    name="nome"
                    onChange={(e) =>
                      setNovoCliente?.({
                        nome: e.target.value,
                        regiao: novoCliente?.regiao as string,
                      })
                    }
                    className="outline-none border border-blue-500 w-60 rounded-md p-1"
                  />
                </div>
                <SelectRegiao
                  novoCliente={novoCliente as ClientesProps}
                  setNovoCliente={
                    setNovoCliente as React.Dispatch<
                      React.SetStateAction<ClientesProps>
                    >
                  }
                />
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose>
              <button
                onClick={() => handleCreateCliente()}
                className="bg-blue-500 border border-blue-500 px-10 py-1 rounded-full text-white hover:bg-white hover:text-blue-500 duration-200"
              >
                Criar
              </button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <div className="border border-blue-500 flex items-center rounded-md p-3 shadow-md cursor-default hover:bg-blue-500 duration-200 group gap-4">
      <div className="rounded-full w-10 h-10 bg-blue-500 text-white flex items-center justify-center group-hover:bg-white group-hover:text-blue-500">
        <FaUserAlt />
      </div>
      <div>
        <p className="group-hover:text-white">{nome}</p>
        <p className="text-gray-400 text-sm group-hover:text-white">{regiao}</p>
      </div>
    </div>
  );
};

export default CardClientes;
