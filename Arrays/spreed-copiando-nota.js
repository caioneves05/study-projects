const notas = [7, 7, 8, 9];

const notasAtualizadas = [...notas, 10];

console.log(notasAtualizadas)
console.log(notas)

//OR 

const arrayOriginal = [7, 7, 8, 9];

function alteraArray(...array) {
  array.push(10);

  console.log(`array do parâmetro é ${array}`);
  console.log(`arrayOriginal é ${arrayOriginal}`);
}

alteraArray(arrayOriginal);