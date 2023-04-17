function trocaPosicao(lista, analise) {
    let itemAnalisado = lista[analise];
    let itemAnterior = lista[analise -1];

    lista[analise] = itemAnterior;
    lista[analise -1] = itemAnalisado
};

module.exports = trocaPosicao;