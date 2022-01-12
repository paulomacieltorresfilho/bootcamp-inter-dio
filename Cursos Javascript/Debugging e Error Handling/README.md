# Tipos de Erros
## ECMAScript Error
Erros que ocorrem em tempo de execução

**Composto por:**
- Mensagem
- Nome
- Linha
- Call Stack 

## DOMException
Erros relacionados ao Document Object Model (DOM)

# Tratando Erros

## Throw
``` Javascript
// Sem throw
function verificaPalindromo(string) {
    if (!string) return 'String Inválida';
    return string === string.split('').reverse().join('');
}

// Com throw
function verificaPalindromo(string) {
    if (!string) throw 'String Inválida';
    return string === string.split('').reverse().join('');
}
```

## Try/Catch
``` Javascript
function verificaPalindromo(string) {
    if (!string) throw 'String Inválida';
    return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string) {
    try {
        verificaPalindromo(string);
    }
    catch (e) {
        console.log(e);
    }
}

tryCatchExemplo('');
```

# Criando Erros 

## Objeto Error

``` Javascript
const MeuErro = new Error('Mensagem Inválida');
MeuErro.name = 'Invalid Message';
throw MeuErro;
```