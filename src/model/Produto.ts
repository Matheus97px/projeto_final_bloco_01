export abstract class Produto {
    private _id: number;
    private _nome: string;
    private _preco: number;
    private _quantidade: number;

    constructor(id: number, nome: string, preco: number, quantidade: number) {
        this._id = id;
        this._nome = nome;
        this._preco = preco;  
        this._quantidade = quantidade;  
    }

     public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }

    public get preco(): number {
        return this._preco;
    }
    public set preco(value: number) {
        this._preco = value;
    }

    public visualizar(): void {
        console.log(`*********************************************`);
        console.log(`Informações do Game`);
        console.log(`*********************************************`);
        console.log(`Id: ${this._id}`);
        console.log(`Nome: ${this._nome}`);
        console.log(`Preço: R$${this._preco.toFixed(2)}`);
        console.log(`Quantidade: ${this._quantidade}`);
    }

    public vender(quantidade: number): boolean {
        if (this._quantidade >= quantidade) {
            this._quantidade -= quantidade;
            return true;
        } else {
            console.log(`\nQuantidade insuficiente`);
            return false;
        }
    }

    public comprar(quantidade: number): void {
        this._quantidade += quantidade;
    }

}