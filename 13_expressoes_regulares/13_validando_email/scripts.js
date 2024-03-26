const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("anderson.moreton@gmail.com"));
console.log(validarEmail.test("anderson.moreton@gmail"));
console.log(validarEmail.test("gmail.com"));
console.log(validarEmail.test("anderson.moreton@gmail.com.br"));
console.log(validarEmail.test("gmail@gmail.gmail.gmail"));