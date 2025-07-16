import { Produto } from "./Produto";

export class JogoRetro extends Produto {
    private _anoLancamento: number;
    private _console: string;
    private _categoria: string;

    constructor(id: number, nome: string, preco: number, quantidade: number, anoLancamento: number, console: string, categoria: string) {
        super(id, nome, preco, quantidade);
        this._anoLancamento = anoLancamento;
        this._console = console;
        this._categoria = categoria;
    }

    public get anoLancamento(): number {
        return this._anoLancamento;
    }
    public set anoLancamento(value: number) {
        this._anoLancamento = value;
    }
    public get console(): string {
        return this._console;
    }
    public set console(value: string) {
        this._console = value;
    }
    public get categoria(): string {
        return this._categoria;
    }
    public set categoria(value: string) {
        this._categoria = value;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Ano de Lancamento: ${this._anoLancamento}`);
        console.log(`Console: ${this._console}`);
        console.log(`Categoria: ${this._categoria}`);
        console.log(`*********************************************\n`);
    }

}