
function validaArray(arr, num) {
    try {
        if (!arr || !num) throw new ReferenceError('Envie os parâmetros');
        if (typeof(arr) !== 'object') throw new TypeError('arr deve ser do tipo object')
        if (typeof(num) !== 'number') throw new TypeError('num deve ser do tipo number')
        if (arr.length !== num) throw new RangeError('Tamanho inválido');
        return arr;
    }
    catch (e) {
        if (e instanceof ReferenceError) console.log('Erro de referência');
        else if (e instanceof TypeError) console.log('Erro de tipo');
        else if (e instanceof RangeError) console.log('Erro de range');
        else console.log('Tipo de erro não esperado: ' + e.name);
        console.log(e.message);
    }
}

console.log(validaArray([1, 2, 3, 4, 5], 5));