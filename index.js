// Função construtora e objetos
function clientes(Nconta, Titular, TipoConta, Saldo) {
    return {
        Nconta: Nconta,
        Titular: Titular,
        TipoConta: TipoConta,
        Saldo: Saldo,
    };
}
let cliente0 = clientes(5486273622, 'Abigael Natte', 'Conta Corrente', 27771);
let cliente1 = clientes(1183971869, 'Ramon Connell', 'Conta Poupança', 8675);
let cliente2 = clientes(9582019689, 'Jarret Lafuente', 'Conta Poupança', 27363);
let cliente3 = clientes(1761924656, 'Ansel Ardley', 'Conta Poupança', 32415);
let cliente4 = clientes(7401971607, 'Jacki Shurmer', 'Conta Poupança', 18789);
let cliente5 = clientes(630841470, 'Jobi Mawtus', 'Conta Corrente', 28776);
let cliente6 = clientes(4223508636, 'Thomasin Latour', 'Conta Corrente', 2177);
let cliente7 = clientes(185979521, 'Lonnie Verheijden', 'Conta Poupança', 25994);
let cliente8 = clientes(3151956165, 'Alonso Wannan', 'Conta Corrente', 7601);
let cliente9 = clientes(2138105881, 'Bendite Huggett', 'Conta Poupança', 33196);

// Funções do Banco
let banco = {
    clientes: [
        cliente0,
        cliente1,
        cliente2,
        cliente3,
        cliente4,
        cliente5,
        cliente6,
        cliente7,
        cliente8,
        cliente9,
    ],
    consultarCliente(nomeTitular) {
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].Titular == nomeTitular) {
                return this.clientes[i];
            }
        }
    },
    deposito(nomeTitular, deposito) {
        this.consultarCliente(nomeTitular).Saldo += deposito;
        console.log(
            'Depósito realizado, seu novo saldo é:',
            this.consultarCliente(nomeTitular).Saldo
        );
    },
    saque(nomeTitular, valorExtracao) {
        let saldo = this.consultarCliente(nomeTitular).Saldo;
        if (saldo - valorExtracao >= 0) {
            this.consultarCliente(nomeTitular).Saldo -= valorExtracao;
            console.log(
                `Extração feita com sucesso, seu novo saldo é: ${
                    this.consultarCliente(nomeTitular).Saldo
                }`
            );
        } else {
            console.log('Fundos insuficientes');
        }
    },
};

console.log(banco.consultarCliente('Abigael Natte'));
banco.deposito('Jarret Lafuente', 200);
banco.saque('Thomasin Latour', 200);
