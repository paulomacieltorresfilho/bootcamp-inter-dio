const pGeografia = {
    materia: 'Geografia',
    peso: 2,
    data: '18/01/2022'
}
const pMatematica = {
    materia: 'Matemática',
    peso: 3.33,
    data: '20/01/2022'
}

function normalizaNotas(alunos, thisArg) {
    return alunos.map(function (item) {
        return Math.trunc(item.nota * this.peso);
    }, thisArg);
};

const alunos = [
    {
        nome: 'Paulo',
        idade: 19,
        nota: 3.7
    },
    {
        nome: 'Maria',
        idade: 19,
        nota: 5
    },
    {
        nome: 'Cleber',
        idade: 19,
        nota: 4.1
    },
];

console.log('this sendo p. geografia:\t', normalizaNotas(alunos, pGeografia));
console.log('this sendo p. matematica:\t', normalizaNotas(alunos, pMatematica));