# Paradigmas e Pilares

## Paradigmas

### Imperativos
- Procedural
- Orientado a Objetos
- Processamento Paralelo

### Declarativos
- Banco de dados
- Programação funcional

## Orientação a Objetos
Os programas são "objetos" que possuem uma série de propriedades
### Pilares:
- Herança
- Polimorfismo
- Encapsulamento
- Abstração

## Pilares
### Abstração
"Processo mental que consiste em isolar um aspecto determinado de um estado de coisas relativamente complexo, a fim de simplificar a sua avaliação, classificação ou para permitir a comunicação do mesmo."

### Herança
O objeto filho herda propriedades e métodos do objeto pai

### Encapsulamento
Cada classe tem propriedades e métodos independentes do restante do código

### Polimorfismo
Objetos podem herdar a mesma classe pai, mas se comportarem de forma diferente quando invocamos seus métodos

# Javascript Orientado a Objetos

## Protótipos
Todos os objetos javascript herdam propriedades e métodos de um prototype. O objeto Object.prototype está no topo desta cadeia.

## Classes
**Syntatic sugar:** uma sintaxe feita para facilitar a escrita
``` Javascript
// Antigo
var Meal = function(food) {
    this.food = food;
}

Meal.prototype.eat = function() {
    return 'nhom nhom';
}
```
---
``` Javascript
// Novo
class Meal {
    constructor (food) {
        this.food = food;
    }
    eat() {
        return 'nhom nhom';
    }
}
```

Javascript não possui classes nativamente. Todas as classes são objetos e a herança se dá por protótipos.

``` Javascript
class Animal {
    constructor (type='animal') { // construtor
        this.type = type;
    }

    // getter e setter
    get type() {
        return this._type;
    }
    set type(val) {
        this._type = val.toUpperCase();
    }

    makeSound() {
        console.log('Making animal sound');
    }
}

let a = new Animal();
console.log(a.type) // ANIMAL
```

``` Javascript
class Cat extends Animal {
    constructor () {
        super('cat');
    }

    makeSound() {
        super.makeSound();
        console.log('MIAU!');
        
}

let b = new Cat();
console.log(b.type) // CAT
```