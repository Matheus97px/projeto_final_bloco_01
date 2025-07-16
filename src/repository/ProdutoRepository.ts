import { Produto } from "../model/Produto";

export interface ProdutoRepository {

    procurarPorId(id: number): void;
    listarTodos(): void;
    cadastrar(produto: Produto): void;
    atualizar(produto: Produto): void;
    deletar(id: number): void;

    comprar(id: number, quantidade: number): void;
    vender(id: number, quantidade: number): void;
}