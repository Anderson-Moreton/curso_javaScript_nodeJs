const reg = /\w+: (Anderson|João|Maria)/; // Nome: nadsuasudi

console.log(reg.test("Nome: Anderson"));
console.log(reg.test("Nome: José"));
console.log(reg.test("Nome: Maria"));