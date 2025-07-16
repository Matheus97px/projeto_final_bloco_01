import { Loja } from "../model/Loja";

export class LojaController {
    private loja: Loja;

    constructor() {
        this.loja = new Loja();
    }

    public mostrarSaldo(): void {
        console.log(`Saldo atual da loja: R$${this.loja.saldo.toFixed(2)}`);
    }


    public aumentarSaldo(saldo: number): void {
        this.loja.aumentarSaldo(saldo);
    }

    public diminuirSaldo(saldo: number): void {
        this.loja.diminuirSaldo(saldo);
    }


    public get saldo(): number {
        return this.loja.saldo;
    }


}