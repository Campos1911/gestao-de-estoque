"use client";
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
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
const CardProdutos = ({
  nome,
  quantidade,
  valor,
  id,
}: {
  nome: string;
  quantidade: number;
  valor: string;
  id: string;
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

  const [novoEstoque, setNovoEstoque] = useState<number>(0);
  const { toast } = useToast();

  async function handleEditEstoque() {
    const dadosParaEditar = {
      nome,
      quantidade: novoEstoque,
      valor,
    };

    if (novoEstoque > 9999 || novoEstoque < 0) {
      toast({
        title: "Dados inválidos",
        variant: "destructive",
        description:
          "Confira se todos os campos foram preenchidos ou se a quantidade não ultrapassou o limite (9999)",
      });

      return null;
    }

    await fetch(`http://localhost:3000/produtos/${id}`, {
      method: "PATCH",
      body: JSON.stringify(dadosParaEditar),
    }).then(() => window.location.reload());
  }

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
                    onChange={(e) => setNovoEstoque(Number(e.target.value))}
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
                onClick={() => handleEditEstoque()}
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
