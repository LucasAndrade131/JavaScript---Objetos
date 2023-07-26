const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo ) {
            cliente.saldo -= valor;
            console.log(`Saldo Insuficiente. Seu saldo é de ${this.saldo}`);
        }else{ 
            cliente.saldo -= valor;
            console.log(`Pagamento realizado. Novo Saldo ${this.saldo}`)
        }
    }
};

cliente.efetuaPagamento(300)