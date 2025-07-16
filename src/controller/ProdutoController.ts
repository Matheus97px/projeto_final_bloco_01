import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { colors } from "../util/Colors";

export class ProdutoController implements ProdutoRepository {

    private saldo: number = 1000;
    private listaProdutos: Array<Produto> = new Array<Produto>();
    numero: number = 0;

    procurarPorId(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto !== null) {
            buscaProduto.visualizar();
        } else {
            console.log(colors.fg.red,`Produto nao encontrado`, colors.reset);
        }
    }

    listarTodos(): void {
        for (let produto of this.listaProdutos) {
            produto.visualizar();
        }
    }

    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log(colors.fg.green,`\nProduto cadastrado com sucesso`, colors.reset);
    }

    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.id);

        if (buscaProduto != null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log(colors.fg.green,`\nProduto atualizado com sucesso`, colors.reset);
        } else {
            console.log(colors.fg.red,`\nProduto nao encontrado`, colors.reset);
        }
    }

    deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto != null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log(colors.fg.green,`\nProduto deletado com sucesso`, colors.reset);
        } else {
            console.log(colors.fg.red,`\nProduto nao encontrado`, colors.reset);
        }

    }

    comprar(id: number, quantidade: number): void {
        let produto = this.buscarNoArray(id);

        if (quantidade <= 0) {
            console.log(colors.fg.red,`\nQuantidade nao pode ser menor ou igual a zero`, colors.reset);
            return;
        }

        if (produto != null) {
            const custo = quantidade * (produto.preco * 0.5);
            if (custo > this.saldo) {
                console.log(colors.fg.red,`\nSaldo insuficiente`, colors.reset);
                return;
            }

            produto.comprar(quantidade);
            this.saldo -= custo;
            console.log(colors.fg.green,`\nCompra realizada com sucesso`, colors.reset);

        } else {
            console.log(colors.fg.red,`\nProduto nao encontrado`, colors.reset);
        }
    }


    vender(id: number, quantidade: number): void {
        let produto = this.buscarNoArray(id);

        if (quantidade <= 0) {
            console.log(colors.fg.red,`\nQuantidade nao pode ser menor ou igual a zero`, colors.reset);
            return;
        }

        if (produto != null) {
            if (produto.vender(quantidade) == true) {
                const valor = produto.preco * quantidade;
                this.saldo += valor;
                console.log(colors.fg.green,`\nVenda realizada com sucesso`,colors.reset);
            }
        } else {
            console.log(colors.fg.red,`\nProduto nao encontrado`, colors.reset);
        }
    }

    public mostrarSaldo(): void {
        console.log(colors.fg.green,`\nSaldo atual da loja: R$${this.saldo.toFixed(2)}`, colors.reset);
    }



    public gerarId(): number {
        return ++this.numero;
    }

    public buscarNoArray(id: number): Produto | null {
        for (let produto of this.listaProdutos) {
            if (produto.id === id) {
                return produto;
            }
        }
        return null;
    }

}