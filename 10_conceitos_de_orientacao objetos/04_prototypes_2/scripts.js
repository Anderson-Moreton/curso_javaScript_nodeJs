const pessoa = {
  pes: 2,
}

// console.log(Object.getPrototypeOf(pessoa));
// console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

// console.log(pessoa.hasOwnProperty('maos'));

const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.pes);

console.log(pessoaNova.hasOwnProperty('pes'));

console.log(Object.getPrototypeOf(pessoaNova) === pessoa);