const reg1 = new RegExp('café');

console.log(reg1.test("Tem café?"));
console.log(reg1.test("Não tem"));

const reg2 = /café/;

let text = 'Tem café na cesta';

console.log(reg2.test("Tem café?"));
console.log(reg2.test("Não tem"));
console.log(reg2.test(text));

console.log(/quadrado/.test("Onde tem um quadrado"));
console.log(/quadrado/.test("3423442323434quadrado2342323424332"));