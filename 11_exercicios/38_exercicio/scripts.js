class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua) {
        this.rua = novaRua;
    }

    set novoBairro(novoBairro) {
        this.bairro = novoBairro;
    }

    set novaCidade(novaCidade) {
        this.cidade = novaCidade;
    }

    set novoEstado(novoEstado) {
        this.estado = novoEstado;
    }

}

let endereco = new Endereco("Rua Prof. Nelson de Senna", "Cidade Domitila", "São Paulo", "SP");

console.log(endereco);

endereco.rua = "Rua Prof. Waldomiro Postch";

console.log(endereco);

endereco.bairro = "Jabaquara";

console.log(endereco);