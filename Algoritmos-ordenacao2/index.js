const { edFolha, edGalho } = require('./arrays');

function juntaListas(lista1, lista2) {
    let listaFinal = [];
    
    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 = 0;
    let atual = 0;

    while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length) {
        
        let produtoLista1 = lista1[posicaoAtualLista1];
        let produtoLista2 = lista2[posicaoAtualLista2];
        
        if(produtoLista1.preco < produtoLista2.preco){
            listaFinal[atual] = produtoLista1;
            
            posicaoAtualLista1++;
        } else {
            listaFinal[atual] = produtoLista2;

            posicaoAtualLista2++;
        }

        atual++;
    }

    //Os While's a seguir só vão ser executados quando o primeiro while retornar false e sair do loop.

    while (posicaoAtualLista1 < lista1.length) {
        listaFinal[atual] = lista1[posicaoAtualLista1];

        posicaoAtualLista1++;
        atual++;
    }

    
    while (posicaoAtualLista2 < lista2.length) {
        listaFinal[atual] = lista2[posicaoAtualLista2];

        posicaoAtualLista2++;
        atual++;
    }

    return listaFinal;
};

console.log(juntaListas(edFolha, edGalho));