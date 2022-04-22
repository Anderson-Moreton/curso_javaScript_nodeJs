let calculadora = {
    soma: function (a, b) {
        return a + b;
    },
    subtrair: function (a, b) {
        return a - b;
    },
    multiplicacao: function (a, b) {
        return a * b;
    },
    divisao: function (a, b) {
        return a / b;
    }
}

console.log(caclculadora.soma(5, 5));
console.log(calculadora.subtrair(10, 5));
console.log(calculadora.multiplicacao(10, 2));
console.log(calculadora.divisao(20, 5));