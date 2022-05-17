const validarId = /\d+ID\b/;

console.log(validarId.test("384512541ID"));
console.log(validarId.test("384512541"));
console.log(validarId.test("Anderson"));
console.log(validarId.test("AndersonID"));