const numeros = [43, 50, 65, 12]

function somaNumeros(acc, atual){
  return acc+atual;
}

const result = numeros.reduce(somaNumeros, 0);

console.log(result)