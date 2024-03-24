let pessoa = {
  "nome": "Anderson",
  "idade": 35,
  "profissao": "Programador",
  "hobbies": ["Video game", "Football", "Estudar"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);
// console.log(pessoaTexto.nome);

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[0]);

