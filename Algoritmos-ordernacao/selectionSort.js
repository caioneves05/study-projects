const livros = require('./listaLivros');
const menorValor = require('./index');
const trocaPosicao = require('./troca')

for(let i = 0; i < livros.length - 1; i++) {
// Vhamando a função dentro do for depois de importá-la.
    let menor = menorValor(livros, i);
    trocaPosicao(livros, menor)
};

console.log(livros);