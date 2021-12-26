function substituiPares(array) {
    if(!array) return -1;

    for (let i = 0;  i < array.length; i++) {
        array[i] = array[i] % 2 === 0 ? 0 : array[i];
    }
}