const notas = [10, 6.5, 8, 7.5];

let somaNotas = 0;

notas.forEach(function (nota, indice, todasNotas) {
  somaNotas += nota;
});

const media = somaNotas/ notas.length;
console.log(`A média de todas as notas é ${media}`)

// o forEach() não retorna nenhum tipo de valor, apenas executa o que está dentro do bloco da função callback