import fs from 'fs';
import extraiLinks from './links.js';
import { trataErro } from './tratamentoError.js';

async function pegaArquivo(data) {
    try {
        const encoding ='utf-8'
        const text = await fs.promises.readFile(data, encoding);
    
        return extraiLinks(text);

    } catch(error) {
        trataErro(error)
    }
}

export default pegaArquivo;

