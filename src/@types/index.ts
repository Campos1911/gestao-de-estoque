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

export interface ProdutosPros {
  nome: string;
  valor: string;
  quantidade: number;
  id: string;
}

export interface DashboardProps {
  titulo: string;
  dado: string;
}

export interface GraficosProps {
  corHex: string;
  tema: string;
  porcentagem: number;
}

export interface UserProps {
  nome: string;
  email: string;
  permissao: string;
}
