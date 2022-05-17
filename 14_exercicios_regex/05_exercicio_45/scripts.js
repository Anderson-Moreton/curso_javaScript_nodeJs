const validarNome = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarNome.test("anderson_123"));
console.log(validarNome.test("anderson"));
console.log(validarNome.test("an"));
