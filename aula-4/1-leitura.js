// o Require é uma função para puxar o código de algum lugar
const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados);

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof clienteEmString);

console.log(clienteEmString.nome);

const objetoCliente = JSON.parse(clienteEmString);

console.log(objetoCliente);