function Aluno(nome, nota, turma) {
    return {
        nome: nome,
        nota: nota,
        turma: turma
    }
}


const alunos = [
    Aluno('João', 5, '1B'),
    Aluno('Sofia', 9, '1B'),
    Aluno('Paulo', 6, '2C'),
    Aluno('Fernanda', 3, '2C'),
];


function alunosAprovados(arr, media){
    let aprovados = [];
    for (let i = 0; i < arr.length; i++) {
        let {nome, nota} = arr[i];
        if (nota >= media) aprovados.push(nome);
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5));