const calculadora = {
    soma: function (a, b) {
        return a + b;
    },
    dividir: function(a, b) {
        return a / b;
    },
    subtratir: function(a, b) {
        return a - b;
    },
    multiplicar: function(a,b ) {
        return a * b;
    }
}

console.log(calculadora.soma(5,2));
console.log(calculadora.dividir(5,2));
console.log(calculadora.subtratir(5,2));
console.log(calculadora.multiplicar(5,2));

