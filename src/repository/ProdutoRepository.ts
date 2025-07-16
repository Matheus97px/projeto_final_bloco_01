import { Produto } from "../model/Produto";

export interface ProdutoRepository {

    procurar(id: number): void;
    listarTodos(): void;
    cadastrar(produto: Produto): void;
    atualizar(produto: Produto): void;
    deletar(id: number): void;

    Comprar(id: number, quantidade: number): void;
    Vender(id: number, quantidade: number): void;
}