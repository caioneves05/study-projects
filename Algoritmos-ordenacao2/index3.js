const listaLivros = require('./arrays2');

function encontraMenores(pivo, array) {
    
    let menores = 0;

    for(let atual = 0; atual < array.length; atual++) {
        let produtoAtual = array[atual];

        if(produtoAtual.preco < pivo.preco) {
            menores++;
        };
    };

    trocaLugar(array, array.indexOf(pivo), menores);

    return array;
};

function trocaLugar(array, de, para) {
    const primeiroElemento = array[de];
    const segundoElemento = array[para];

    array[para] = primeiroElemento;
    array[de] = segundoElemento;
}

function divideNoPivo(array) {
    
    let valoresMenores = 0; 
    let pivoMeio = array[Math.floor(array.length/2)];

    encontraMenores(pivoMeio, array);

    for (let atual = 0; atual < array.length; atual++) {
        const elementoAtual = array[atual];

        if(elementoAtual.preco <= pivoMeio.preco && elementoAtual !== pivoMeio) {
            trocaLugar(array, atual, valoresMenores)
            valoresMenores++;
        }
    }

    return array;
};

console.log(divideNoPivo(listaLivros));

module.exports = trocaLugar;