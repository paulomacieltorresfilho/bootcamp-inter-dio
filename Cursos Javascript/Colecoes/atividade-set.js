function getUniqueValues(arr) {
    const mySet = Set(arr);
    return [...mySet];
}

const myArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

console.log(getUniqueValues(myArray));