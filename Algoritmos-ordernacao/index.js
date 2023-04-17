const livros = require('./listaLivros');

function menorValor(arrProdutos, posiçãoInit) {
    let maisBarato = posiçãoInit;

    for (let atual = posiçãoInit; atual < arrProdutos.length; atual++) {
        if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
        maisBarato = atual
        }
    }
    return maisBarato;
}

module.exports = menorValor;