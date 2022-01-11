# Funções

## Estrutura
``` Javascript
function nome(parametros) {
    //instruções
}
```
- Variáveis criadas dentro de uma função apenas podem ser utilizadas dentro dela
- Quando invocamos o "return", a função para de ser executada

## Função Anônima
Funções que representam expressões
``` Javascript
const soma = function (a, b) {
    return a + b;
}

soma(1, 2); // 3
soma(5, 4); // 9
```
- Uma variável pode armazenar uma função

## Função Autoinvocável
IIFE (Immediately Invoked Function Expression)
Uma função anônima entre parênteses, seguida por outro par de parênteses que representa sua chamada
``` Javascript
(
    function() {
        let name = 'Digital Innovation One';
        return name;
    }
)();
```

- Também pode ser utilizada com parâmetros ou armazenada em uma variável
``` Javascript
(
    function(a, b) {
        return a + b;
    }
)(1, 2); // 3
```
---
``` Javascript
const soma3 = (
    function() {
        return a + b;
    }
)(1, 2);

console.log(soma3); // 3
```

## Callbacks
Uma função passada como argumento para outra
``` Javascript
const calc = function(operacao, num1, num2) {
    return operacao(num1, num2);
}

const soma = function(a, b) {
    return a + b;
}

const sub = function(x, y) {
    return x - y;
}

const resultSoma = calc(soma, 10, 2);
const resultSub = calc(sub, 12, 2);

console.log(resultSoma);
console.log(resultSub);
```
- Utilizando callbacks, você tem maior controle da ordem de chamadas

# Parâmetros

## Valores padrão

- Pós ES2015
``` Javascript
function exponencial(array, num=1) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(array[i] ** num);
    }
    return result;
}

exponencial([1, 2, 3, 4]);
exponencial([1, 2, 3, 4], 2)
```

## Objeto "arguments"
Um array com todos os parâmetros passados quando a função foi invocada
``` Javascript
function findMax() {
    let max = -Infinity;

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }

    return max;
}
```

## Arrays

### Spread
Uma forma de lidar separadamente com elementos
``` Javascript
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));
```
O que era parte de um array se torna um elemento independente

### Rest
Combina os argumentos em um array
``` Javascript
function confereTamanho(...args) {
    console.log(args.length);
}

confereTamanho() // 0
confereTamanho(1, 2) // 2
confereTamanho(3, 4, 5) // 3
```
O que era um elemento independente se torna parte de um array

## Objetos

### Object Destructuring
``` Javascript
const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

function userId({id}) {
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}

userId(user) // 42
getFullName(user) // John Doe
```
Entre chaves {}, podemos filtrar apenas os dados que nos interessam em um objeto

# Arrow Functions

Exemplos:
``` Javascript
const helloWorld = ( ) => {
    return "Hello World";
}

// Caso exista apenas uma linda, pode dispensar as chaves e o return
const helloWorld = ( ) => "Hello World";

// Caso exista apenas um parâmetro, pode dispensar os parênteses
const somaDez = a => a + 10;
```

## Algumas restrições
- "this" sempre será o objeto global, os métodos **call, apply e bind** não poderão ser utilizados
- Não existe o objeto "arguments"
- O construtor (ex: new MeuObjeto()) também não pode ser utilizado