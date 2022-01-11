const pessoa1 = {
    nome: 'Paulo',
    idade: 19
}
const pessoa2 = {
    nome: 'Felipe',
    idade: 10
}
const pessoa3 = {
    nome: 'Neymar',
    idade: 29
}


function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(pessoa1, 10))
console.log(calculaIdade.apply(pessoa2, [10]))
console.log(calculaIdade.call(pessoa3, 10))