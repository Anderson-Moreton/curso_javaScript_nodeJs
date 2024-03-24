class Conta {
    constructor(saldo) {
        this.saldo = saldo;
    }

    deposito(valor) {
        this.saldo += valor;
    }

    saque(valor) {
        this.saldo -= valor;
    }
}

let conta = new Conta(250);

conta.deposito(150);

console.log(conta.saldo);

conta.saque(50);

console.log(conta.saldo)