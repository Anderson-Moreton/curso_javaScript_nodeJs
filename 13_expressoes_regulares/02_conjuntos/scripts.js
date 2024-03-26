const reg1 = /[123456]/;

console.log(reg1.test("Temos o número 6"));
console.log(reg1.test("Temos o número 2"));
console.log(reg1.test("Temos o número 23"));
console.log(reg1.test("Temos o número 60"));

const reg2 = /[0-9]/;

console.log(reg1.test("Temos o número 65448484884848484"));
console.log(reg1.test("Temos o número"));
