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
import { ProdutosPros } from "@/@types";
import { useToast } from "@/hooks/use-toast";

const CardCreateProduto = ({
  novoProduto,
  setNovoProduto,
  produtos,
  setProdutos,
}: {
  novoProduto: ProdutosPros;
  setNovoProduto: React.Dispatch<React.SetStateAction<ProdutosPros>>;
  produtos: ProdutosPros[];
  setProdutos: React.Dispatch<React.SetStateAction<ProdutosPros[]>>;
}) => {
  const { toast } = useToast();

  async function handleCreateProduto() {
    const dadosParaCriar = {
      nome: novoProduto.nome,
      quantidade: novoProduto.quantidade,
      valor: novoProduto.valor,
    };

    if (
      dadosParaCriar.nome === "" ||
      dadosParaCriar.valor === "" ||
      dadosParaCriar.quantidade < 0 ||
      dadosParaCriar.quantidade > 9999
    ) {
      toast({
        title: "Dados inválidos",
        variant: "destructive",
        description:
          "Confira se todos os campos foram preenchidos ou se a quantidade não ultrapassou o limite (9999)",
      });
      return null;
    }

    await fetch("http://localhost:3000/produtos", {
      method: "POST",
      body: JSON.stringify(dadosParaCriar),
    }).then(() => setProdutos([...produtos, novoProduto]));
  }

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
                    placeholder="Produto"
                    type="text"
                    className="outline-none border border-blue-500 w-full rounded-md p-1"
                    onChange={(e) =>
                      setNovoProduto({
                        nome: e.target.value,
                        quantidade: novoProduto.quantidade,
                        valor: novoProduto.valor,
                        id: novoProduto.id,
                      })
                    }
                  />
                </div>
                <div className="flex w-full flex-col">
                  <p>Quantidade em estoque:</p>
                  <input
                    placeholder="10"
                    type="number"
                    className="outline-none border border-blue-500 w-full rounded-md p-1"
                    onChange={(e) =>
                      setNovoProduto({
                        nome: novoProduto.nome,
                        quantidade: e.target.value as unknown as number,
                        valor: novoProduto.valor,
                        id: novoProduto.id,
                      })
                    }
                  />
                </div>
              </div>
              <div className="flex w-full flex-col py-2">
                <p>Valor do produto:</p>
                <input
                  placeholder="100.00"
                  type="number"
                  className="outline-none border border-blue-500 w-full rounded-md p-1"
                  onChange={(e) =>
                    setNovoProduto({
                      nome: novoProduto.nome,
                      quantidade: novoProduto.quantidade,
                      valor: `R$${e.target.value}`,
                      id: novoProduto.id,
                    })
                  }
                />
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose>
              <button
                onClick={() => handleCreateProduto()}
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
