"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

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

const CardProdutos = ({
  nome,
  quantidade,
  valor,
}: {
  nome: string;
  quantidade: number;
  valor: string;
}) => {
  const [cor, setCor] = useState<string>("");
  useEffect(() => {
    if (quantidade >= 20) {
      setCor("bg-green-500");
    } else if (quantidade === 0) {
      setCor("bg-red-500");
    } else {
      setCor("bg-yellow-500");
    }
  }, [quantidade]);

  return (
    <>
      <Dialog>
        <DialogTrigger className="outline-none flex w-full items-center justify-between border border-blue-500 rounded-md px-3 py-5 gap-4 shadow-lg cursor-pointer hover:bg-gray-300 duration-200">
          <div
            className={`flex rounded-full ${cor} w-10 h-10 items-center justify-center`}
          >
            {quantidade}
          </div>
          <p className="sm:text-start text-center">{nome}</p>
          <p className="text-center">{valor}</p>
        </DialogTrigger>
        <DialogContent className="w-[90%]">
          <DialogHeader>
            <DialogTitle className="overflow-hidden">
              Registrar mudança no estoque - {nome}
            </DialogTitle>
            <DialogDescription>
              <div className="flex flex-col gap-2 pt-2">
                <div>
                  <input
                    type="number"
                    className="outline-none border border-blue-500 w-full rounded-md p-1"
                  />
                </div>
                <p>Estoque atual do produto: {quantidade}</p>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose>
              <button
                onClick={() => console.log("mudança")}
                className="bg-blue-500 border border-blue-500 px-10 py-1 rounded-full text-white hover:bg-white hover:text-blue-500 duration-200"
              >
                Atualizar
              </button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CardProdutos;
