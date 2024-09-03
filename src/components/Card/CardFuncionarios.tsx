import React from "react";
import { FaUserAlt } from "react-icons/fa";
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
import { SelectCargo } from "../Select";

const CardFuncionarios = ({
  nome,
  cargo,
}: {
  nome: string;
  cargo?: string;
}) => {
  if (nome === "Adicionar novo funcionário") {
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
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Insira as informações do funcionário</DialogTitle>
            <DialogDescription className="flex flex-col w-full">
              <div className="flex w-full items-end justify-between">
                <div>
                  <p>Nome do funcionário:</p>
                  <input
                    type="text"
                    name="nome"
                    id=""
                    className="outline-none border border-blue-500 w-60 rounded-md p-1"
                  />
                </div>
                <SelectCargo />
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose>
              <button className="bg-blue-500 border border-blue-500 px-10 py-1 rounded-full text-white hover:bg-white hover:text-blue-500 duration-200">
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
        <p className="text-gray-400 text-sm group-hover:text-white">{cargo}</p>
      </div>
    </div>
  );
};

export default CardFuncionarios;
