const data = require("./cliente.json");

const clienteEmString = JSON.stringify(data);
const clienteEmObjt = JSON.parse(clienteEmString);

console.log(clienteEmObjt);