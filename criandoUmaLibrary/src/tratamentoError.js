import chalk from "chalk";

function trataErro(error) {
    // Instanciado um novo Objeto error
    throw new Error(chalk.red(error.code, ': Não há nenhum arquivo.'));
}

function manegaErroLink(erro) {
    if(erro.cause.code === 'ENOTFOUND') {
        return `LINK NÃO ENCONTRADO`;
    } else {
        return `Ocorreu algum erro`;
    };
};


export { trataErro, manegaErroLink };