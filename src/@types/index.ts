import { IconType } from "react-icons";

export interface NavsProps {
  icon: IconType;
  link: string;
  titulo: string;
}

export interface FuncionariosProps {
  nome: string;
  cargo: string;
}

export interface ClientesProps {
  nome: string;
  regiao: string;
}
