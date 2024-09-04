import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ClientesProps } from "@/@types";

const SelectRegiao = ({
  novoCliente,
  setNovoCliente,
}: {
  novoCliente: ClientesProps;
  setNovoCliente: React.Dispatch<React.SetStateAction<ClientesProps>>;
}) => {
  return (
    <Select
      onValueChange={(value) =>
        setNovoCliente({ nome: novoCliente.nome, regiao: value })
      }
    >
      <SelectTrigger className="sm:w-[42%] w-[60%] border border-blue-500 text-blue-500 outline-none">
        <SelectValue placeholder="Região do cliente" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Região 1">Região 1</SelectItem>
        <SelectItem value="Região 2">Região 2</SelectItem>
        <SelectItem value="Região 3">Região 3</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectRegiao;
