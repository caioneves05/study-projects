import chalk from "chalk";
import fs from 'fs';
import pegaArquivo from "./index.js";
import listaValidada from "./http-validacao.js";


const rota = process.argv;

async function imprimeLista(valida, resultado, identificador = '') {
    
    if(valida) {
        console.log(chalk.blue('Lista validada:'),chalk.black.bgWhite(identificador), await listaValidada(resultado));
    } else {
        console.log(chalk.blue('Lista de Links:'),chalk.black.bgWhite(identificador), await listaValidada(resultado));
    }
    
}

async function processaText(argumentos) {
    
    const caminhos = argumentos[2];
    const valida = argumentos[3] === '--valida';

    try {
        fs.lstatSync(caminhos);
    }
    catch(error) {
        if(error.code === 'ENOENT') {
            console.log(chalk.red('ARQUIVO OU DIRETÓRIO NÃO EXISTENTE.'));
            return;
        }
    }
    // SE caminhos for um arquivo
    if(fs.lstatSync(caminhos).isFile()) {

        const result = await pegaArquivo(caminhos);
        
        imprimeLista(valida,result);
    }
    // SE caminhos for um diretório
    else if(fs.lstatSync(caminhos).isDirectory()) {
        //Lendo as informações de um diretório.
        const arquivos = await fs.promises.readdir(caminhos);

        arquivos.forEach(async (nomeDeArquivo) => {
            
            const lista = await pegaArquivo(`${caminhos}/${nomeDeArquivo}`);
            
            imprimeLista(valida, lista, nomeDeArquivo);
        });
    };
};

processaText(rota);