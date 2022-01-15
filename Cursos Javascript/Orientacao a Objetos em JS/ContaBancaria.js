class ContaBancaria {
    constructor (agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
        console.log(`Parabéns! Sua conta no ${agencia} foi criada!`)
    }

    get saldo() {
        console.log(`Seu saldo é: R$:${this._saldo}`);
        return this._saldo;
    }
    set saldo(val) {
        this._saldo = val;
        console.log('Saldo atualizado!');
        return this._saldo;
    }

    sacar(quantia) {
        if (quantia > this._saldo) return console.log('Operação inválida! Saldo insuficiente');
        console.log(`Você sacou R$:${quantia}`);
        this.saldo = this._saldo - quantia;
        return this._saldo;
    }

    depositar(quantia) {
        console.log(`Você depositou R$:${quantia}`);
        this.saldo = this._saldo + quantia;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor (agencia, numero, cartaoCredito) {
        super(agencia, numero, 'Conta corrente');
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(val) {
        this._cartaoCredito = val;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor (agencia, numero) {
        super(agencia, numero, 'Conta poupança');
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor (agencia, numero) {
        super(agencia, numero, 'Conta universitária');
    }

    sacar(quantia) {
        if (quantia <= 500) super.sacar(quantia);
        else console.log('Operação inválida! O valor do saque não pode ultrapassar 500 reais');
    }
}


const corrente = new ContaCorrente('Nubank', 1230957, 200);
const poupanca = new ContaPoupanca('Banco do Brasil', 6542462);
const universitaria = new ContaUniversitaria('Universidade de Brasília', 6542462);