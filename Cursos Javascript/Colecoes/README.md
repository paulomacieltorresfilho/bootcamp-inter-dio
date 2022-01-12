# Map
## Estrutura
``` Javascript
const myMap = new Map
```

Características:
- Uma coleção de arrays no formato [chave, valor];
- Pode ser iterado por um loop for..of

## Métodos
Adicionar, ler e deletar
``` Javascript
const myMap = new Map();
myMap.set('apple', 'fruit');
// Map(1) {'apple'=>'fruit'}

myMap.get('apple');
// 'fruit'

myMap.delete('apple');
// true

myMap.get('apple');
// undefined
```

## Map vs Objeto
- Maps podem ter chaves de qualquer tipo
- Maps possuem a propriedade length
- Maps são mais fáceis de iterar
- Utilizado quando o valor das chaves é desconhecido
- Os valores tem o mesmo tipo

# Set

## Estrutura
``` Javascript
const myArray = [1, 1, 2, 2, 3, 4, 5, 6, 6, 6, 7, 2, 1];
const mySet = new Set(myArray);
```

Sets são estruturas que armazenam valores únicos

## Métodos
Adicionar, consultar e deletar

``` Javascript
const mySet = new Set();
 mySet.add(1);
 mySet.add(5);

 mySet.has(1);
 // true

 mySet.has(3);
 // false

 mySet.delete(5);
```

## Set vs Array
- Possui valores únicos
- Em vez da propriedade length, consulta-se o número de registros pela propriedade **size**
- Não possui os métodos map, filter, reduce, etc.