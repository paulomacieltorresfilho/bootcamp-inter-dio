function returnEvenValues(array) {
    let evenNums = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            evenNums.push(array[i]);
        }
    }
    console.log(evenNums);
}

returnEvenValues([12, 5, 12, 77, 82])
