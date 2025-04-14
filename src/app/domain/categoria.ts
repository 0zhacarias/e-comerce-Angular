export interface Categorias
{
    value: string;
    label: string;
    opcoes: Opcao[];
}
interface Opcao {
    designacao: string;
    image: string;
    preco: number;
    desconto: number;
  }
/* export interface Produto{
    id?: string;
    nome?: string;
    descricao?: string;
    preco?: number;
    quantidade?: number;
    status?: string;
    categoria?: string;
    imagem?: string;
    avaliacao?: number;
    desconto?: number;
    cor?: string;
    tamanho?: string;
    marca?: string;
    peso?: string;

} */