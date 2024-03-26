const pontoRegex = /./;

console.log('.');
console.log(pontoRegex.test("asdx"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123sad"));

const dRegex = /\d/; // [0-9]

console.log('d');
console.log(dRegex.test("asdx"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123"));
console.log(dRegex.test("123sad"));

const dRegex2 = /\D/; // [^0-9]

console.log('D');
console.log(dRegex2.test("asdx"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("123"));
console.log(dRegex2.test("123sad"));

const sRegex = /\s/;

console.log('s');
console.log(sRegex.test("asdx"));
console.log(sRegex.test(" "));
console.log(sRegex.test("123"));
console.log(sRegex.test("123sad"));

const wRegex = /\w/;

console.log('w');
console.log(wRegex.test("asdx"));
console.log(wRegex.test(" "));
console.log(wRegex.test("123"));
console.log(wRegex.test("123sad"));