const validarIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validarIp.test("123.0.0.1"));
console.log(validarIp.test("123.0.0"));
console.log(validarIp.test("12.0.0.1"));