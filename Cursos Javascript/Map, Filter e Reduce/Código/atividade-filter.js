const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const retornaPares = (arr) => {
    return arr.filter((item) => item % 2 === 0);
}

console.log('array original:', array);
console.log('somente pares:\t', retornaPares(array));