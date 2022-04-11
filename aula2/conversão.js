//tipo de dados
//booleanos

//conversão implicita

const number= 123;
const numberString= "123";

//console.log(number===numberString);
//compara o que conten a variaveis e o tipo de dado

//console.log(number==numberString);
//compara o que conten as variaveis mais não o tipo de dado

//conversao explicita
//Number();
//String();
const number1= 123;
const numberString1= Number("123");

console.log(number1 + numberString1);

// dessa forma o tipo de dado string passa a ter valor de tipo dado number.

//ou também ser
console.log(number + Number(numberString));