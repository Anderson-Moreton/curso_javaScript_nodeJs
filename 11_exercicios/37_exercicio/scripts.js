class Carrinho {
    constructor(itens, qtd, valorTotal) {
        this.itens = itens;
        this.qtd = qtd;
        this.valorTotal = valorTotal;
    }
}

let carrinho = new Carrinho([
    {
        id: 1,
        nome: "Camisa",
        quantidade: 1,
        valor: 15
    },
    {
        id: 2,
        nome: "Calça",
        quantidade: 2,
        valor: 50
    }
], 3, 120);

console.log(carrinho);