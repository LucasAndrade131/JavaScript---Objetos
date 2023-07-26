const clientes = require("./clientes.json");
//Lógica para encontrar determinado objeto
function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor));
}

const encontado = encontrar(clientes, "nome", "Kirby");

const encontado2 = encontrar(clientes, "telefone", "1918820860")

console.log(encontado2, encontado);