let validarUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarUsuario.test("anderson_123"));
console.log(validarUsuario.test("an"));