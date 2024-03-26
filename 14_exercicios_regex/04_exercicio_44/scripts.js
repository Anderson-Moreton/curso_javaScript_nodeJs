const validarIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validarIP.test("127.0.0.1"));
console.log(validarIP.test("127.01.01.01"));
console.log(validarIP.test("12.0.0.1"));
console.log(validarIP.test("12534.123.01.1.12222"));
console.log(validarIP.test("Ola"));