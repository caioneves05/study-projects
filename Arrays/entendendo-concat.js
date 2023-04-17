
const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])

console.log(arrayConcat)
console.log(arrayOriginal)

//Podemos passar mais de um array como parâmetro para que seus elementos sejam concatenados em um único array, junto com o que está sendo chamado com o método (no caso, arrayOriginal.

const arrayOriginal1 = [50, 60, 70]
const arrayConcat1 = arrayOriginal.concat([80, [90, 100]])

console.log(arrayConcat1);
console.log(arrayOriginal1);

/* [ 50, 60, 70, 80, [ 90, 100 ] ]
[ 50, 60, 70 ]

Vimos anteriormente que, quando recebe um array como parâmetro, concat() vai concatenar apenas os elementos. Porém, este método não extrai os elementos do array de forma recursiva; ou seja, não vai extrair os elementos de arrays que estejam “aninhados”. Dessa forma, 80 foi extraído do array com sucesso, porém 90 e 100 não, o método considerou [90, 100] como um único elemento.
*/