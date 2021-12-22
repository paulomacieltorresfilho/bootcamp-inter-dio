# O que é o JS?
O javascript é uma linguagem de programação de alto nível, que integra o desenvolvimento de apps e páginas web

É uma das linguagens de programação mais usadas no mundo do desenvolvimento

## Onde usar?
Podemos usar o javascript de várias formas, seu uso mais comum se dá no desenvolvimento de apps e páginas web, juntamente com as linguagens HTML e CSS

# Variáveis e valores

## Tipagem?
A tipagem funciona como uma regra de uso de dados, quanto mais forte for a tipagem, mais obrigatório é a declaração do tipo de dado

A tipagem em javascript é fraca, a declaração dos dados acontece de modo dinâmico

Ex: Ao criarmos uma variável com valor entre aspas ("valor"), o javascript já converte o dado para o tipo String

## Tipos primitivos
As variáveis em javascript podem guardar tipos de dados que chamamos de tipos primitivos

Variáveis podem guardar valores dos tipos: Boolean, null, undefined, Number, String, Array, Object, Function

## Declaração de variáveis
Existem 3 modos de declarar as variáveis em javascript

- **var:** escopo global e local, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null
- **let:** escopo local de bloco, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null
- **const** escopo local de bloco, somente leitura, o valor inicial é obrigatório e não pode ser alterado

## Escopo
O escopo em javascript define a limitação e visibilidade de um bloco de código

- **Escopo global:** quando a variável é declarada fora de qualquer bloco, sua visibilidade fica disponível em todo o código
- **Escopo local:** quando a variável é dentro de um bloco, sua visibilidade pode ficar disponível ou não

# Vetores e Objetos

## Vetores ou arrays
Arrays são um tipo de lista, ou matriz de variáveis, onde cada variável possui um índice. Os valores podem ser de vários tipos

O array é como uma caixa com várias outras caixas dentro e cada uma contendo algum valor

### Manipulando arrays
- **forEach()** - itera um array
- **push()** - adicionar item no final do array
- **pop()** - remove item no final do array
- **shift()** - remove item no início do array
- **unshift()** - adicionar item no início do array
- **indexOf()** - retorna o índice de um valor
- **splice()** - remove ou substitui um item pelo índice
- **slice()** - retorna uma parte de um array existente

## Objetos
Dados que possuem propriedades e valores que definem suas características. Deve ser declarado entre chaves "{}".

Ex: Imagine uma xícara azul. Ela tem cor, pode ter vários tamanhos e funções. Pode ser declarada assim:
``` Javascript
var xicara = {
    cor: 'azul',
    tamanho: 'p',
    funcao: tomarCafe()
}
```

### Manipulando Objetos
As propriedades de objetos podem ser atribuídas à variáveis facilitando a manipulação do objeto. Chamamos isso de desestruturação.

Ex:
``` Javascript
var cor = xicara.cor
var tamanho = xicara.tamanho
var funcao = tomarCafe()

var {cor, tamanho} = xicara
// cor = 'azul' e tamanho = 'p'
```

# Funções

## Tipos de funções
### Funções declarativas
``` Javascript
function nome() {
    // instrução
}
```
### Expressões de funções
São funções atribuídas à expressões. A nomeação das funções por expressão é opcional
``` Javascript
// Ex 1
var funcao = function nome() {
    // instrução
}

// Ex 2
var funcao = function() {
    // instrução
}
```
### Arrow Function
São funções de expressão de sintaxe curta. Arrow functions sempre serão anônimas, portanto não podem ser nomeadas. Deve ser declarada com parênteses "()", seguido de "=>" e depois chaves "{}"
``` Javascript
var funcao = () => {
    // instrução
}
```
