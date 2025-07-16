export class Loja {
    private _saldo: number;
    
    constructor(saldo: number = 1000) {
        this._saldo = saldo;
    }

    public get saldo(): number {
        return this._saldo;
    }


    public aumentarSaldo(valor: number): void {
        this._saldo += valor;
    }

    public diminuirSaldo(valor: number): void {
        if (valor > this._saldo) {
            console.log(`\nSaldo insuficiente`);            
        } else {
            this._saldo -= valor;
        }
    }

   

}