const texto1 ="ola, mundo";
const texto2 ='ola, mundo';
const senha = "senhaSuperSegura123!";
const stringDeNumero = "123654789!!";

const citacao = 'o leo disse "oi"';

console.log( texto1,texto2,senha,stringDeNumero,citacao)

//template string ou template literal

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

const cidade = "Belo Horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

console.log('línea 1 de cadena de texto\n' +
'\línea 2 de cadena de texto');
// "línea 1 de cadena de texto
// línea 2 de cadena de texto"

console.log(`línea 1 de la cadena de texto
línea 2 de la cadena de texto`);
// "línea 1 de la cadena de texto
// línea 2 de la cadena de texto";

let a = 5;
let b = 10;
console.log(`Quince es ${a + b} y
no ${2 * a + b}.`);
// "Quince es 15 y
// no 20."