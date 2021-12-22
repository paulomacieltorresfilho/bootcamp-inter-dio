function calculadora() {
    const operacao = prompt('Digite uma operação:');

    const val1 = prompt('Digite o primeiro valor:')
    const val2 = prompt('Digite o segundo valor:');

    switch (operacao) {
        case '+':
            soma(val1, val2);
            break;
        case '-':
            subtracao(val1, val2);
            break;
        case '*':
            multiplicacao(val1, val2);
            break;
        case '/':
            divisao(val1, val2);
            break;
        default: 
            alert('Operação inválida! Tente novamente');
            calculadora();
            break;
    }
}

function soma(a, b) {
    alert(`O resultado da soma foi: ${a + b}`);
    return a + b;
}

function subtracao(a, b) {
    alert(`O resultado da subtracao foi: ${a - b}`);
    return a - b;
}

function multiplicacao(a, b) {
    alert(`O resultado da multiplicação foi: ${a * b}`)
    return a * b;
}

function divisao(a, b) {
    alert(`O resultado da divisão foi: ${a / b}`);
    return a / b;
}

calculadora();