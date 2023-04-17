const listaLivros = require('./arrays2');
const trocaLugar = require('./index3');

function quickSort(array, esquerdaPivo, direitaPivo) {

    if(array.length > 1) {
        let indexAtual = particiona(array, esquerdaPivo, direitaPivo);

        if(esquerdaPivo < indexAtual -1) {
            quickSort(array, esquerdaPivo, indexAtual -1)
        }
        if(indexAtual < direitaPivo) {
            quickSort(array, indexAtual, direitaPivo)
        }
    };
    
    return array;
}



function particiona(array, esquerdaPivo, direitaPivo){
    
    let pivoMeio = array[Math.floor((esquerdaPivo + direitaPivo)/2)];

    let atualEsquerda = esquerdaPivo;
    let atualDireita = direitaPivo;

    while (atualEsquerda <= atualDireita) {
        while (array[atualEsquerda].preco < pivoMeio.preco) {
            atualEsquerda++;
        }

        while (array[atualDireita].preco > pivoMeio.preco) {
            atualDireita--;
        }

        if(atualEsquerda <= atualDireita) {
            trocaLugar(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        }
    }

    return atualEsquerda;
}


console.log(quickSort(listaLivros, 0, listaLivros.length - 1))

