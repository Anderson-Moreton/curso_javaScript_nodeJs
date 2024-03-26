const regId = /\d+ID\b/;

console.log(regId.test("536237ID"));
console.log(regId.test("536237"));
console.log(regId.test("olaMundo"));
console.log(regId.test("ID"));
console.log(regId.test("5362ID"));