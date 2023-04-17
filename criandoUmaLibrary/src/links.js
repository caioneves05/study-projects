import chalk from "chalk";

function extraiLinks(text) {
    // as espressões regulares tem que ser colocadas dentr de /espressão/
    const regexp = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm ;
    // MatchAll é um método próprio do Regex que itera sobre o array retornando TODAS as ocorrências.
    const capturas = [...text.matchAll(regexp)];
    const result = capturas.map(captura => ({ [captura[1]]: [captura[2]] }))
    
    return result.length !== 0 ? result : chalk.red("Não contém links no arquivo.");
}

export default extraiLinks;