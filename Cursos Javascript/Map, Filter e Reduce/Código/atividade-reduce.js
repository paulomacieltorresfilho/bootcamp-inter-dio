const somaDeNumerosArray = (arr) => {
    return arr.reduce((prev, curr) => prev + curr);
}

const array = [1, 2, 3, 4, 5, 6];
console.log('o resultado da soma é: ', somaDeNumerosArray(array));

console.log('//=============================//')
//==============================================================//

const realizarCompras = (precos, saldoDisponivel) => {
    return precos.reduce((prev, curr) => prev - curr, saldoDisponivel);
}

const precos = [12.49, 44.99, 7.49, 10];
const saldo = 90;

console.log('saldo restante: ', realizarCompras(precos, saldo));