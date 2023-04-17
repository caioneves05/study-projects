import { manegaErroLink } from './tratamentoError.js';
function pegaListaLinks(arrLinks) {
    // Extraindo apenas os valores de cada objeto
    //O JOIN pega o conteúdo de um Array e converte em String.
    return arrLinks.map((link) => Object.values(link).join());
};

async function checkStatus(listaURLS) {
    //Resolve todas as promises por vez fazendo com que o fetch tenha que lidar apenas com um link de cada vez.
    const arrayStatus = await Promise.all(
        listaURLS.map( async (url) =>{
            
            try{
                //O retorno do fetch é uma promise
                const res = await fetch(url)
                return `${res.status} - ${res.statusText}`;
            } 
            catch (error) {
               return manegaErroLink(error)
            }
        })
    )

    return arrayStatus;
};

export default async function listaValidada(listaLinks) {
    const links = pegaListaLinks(listaLinks);
    const status =  await checkStatus(links);
    //RETORNANDO UM OBJETO COM O MAP
    return listaLinks.map((objeto, indice)=> ({
        ...objeto, 
        status: status[indice]

    }));
};

