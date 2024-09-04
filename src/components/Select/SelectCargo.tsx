import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FuncionariosProps } from "@/@types";

const SelectCargo = ({
  novoFuncionario,
  setNovoFuncionario,
}: {
  novoFuncionario: FuncionariosProps;
  setNovoFuncionario: React.Dispatch<React.SetStateAction<FuncionariosProps>>;
}) => {
  return (
    <Select
      onValueChange={(value) =>
        setNovoFuncionario?.({
          nome: novoFuncionario.nome,
          cargo: value,
        })
      }
    >
      <SelectTrigger className="sm:w-[42%] w-[60%] border border-blue-500 text-blue-500 outline-none">
        <SelectValue placeholder="Cargo do funcionário" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Admin">Admin</SelectItem>
        <SelectItem value="Gestor">Gestor</SelectItem>
        <SelectItem value="Repositor">Repositor</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectCargo;
