const clientes = require("./clientes2.json");

function encontrar(data, chave, valor) {
    return data.find((item) => item[chave].includes(valor));
};

const encontrado = encontrar(clientes, "nome", "Kirby")

console.log(encontrado);