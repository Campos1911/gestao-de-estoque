import React from "react";
import { GoPackage } from "react-icons/go";
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

const CardCreateProduto = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger className="w-full outline-none border border-blue-500 flex justify-between items-center rounded-md p-3 shadow-md cursor-pointer duration-200 group gap-4 bg-blue-500 hover:bg-white">
          <div
            className={`flex rounded-full bg-white group-hover:bg-blue-500 w-10 h-10 items-center justify-center`}
          >
            <GoPackage />
          </div>
          <div>
            <p className="text-white group-hover:text-blue-500">
              Adicionar um produto
            </p>
          </div>
          <div></div> {/*Apenas para colocar o texto centralizado*/}
        </DialogTrigger>
        <DialogContent className="w-[90%]">
          <DialogHeader>
            <DialogTitle>Insira as informações do produto</DialogTitle>
            <DialogDescription className="flex flex-col w-full">
              <div className="flex sm:flex-row flex-col w-full sm:items-end items-center justify-between gap-2 ">
                <div className="flex w-full flex-col">
                  <p>Nome do produto:</p>
                  <input
                    type="text"
                    className="outline-none border border-blue-500 w-full rounded-md p-1"
                  />
                </div>
                <div className="flex w-full flex-col">
                  <p>Quantidade em estoque:</p>
                  <input
                    type="number"
                    className="outline-none border border-blue-500 w-full rounded-md p-1"
                  />
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose>
              <button
                onClick={() => console.log("teste")}
                className="bg-blue-500 border border-blue-500 px-10 py-1 rounded-full text-white hover:bg-white hover:text-blue-500 duration-200"
              >
                Criar
              </button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CardCreateProduto;
