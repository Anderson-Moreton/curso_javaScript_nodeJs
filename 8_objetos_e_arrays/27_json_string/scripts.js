let pessoa = {
  "nome": "Anderson",
  "idade": 33,
  "profissao": "Programador",
  "hobbies": ["Video game", "Leitura", "Correr"]
}

let pessoaTexto = JSON.stringify(pessoa); //Converte o JSON para um texto

console.log(pessoaTexto);
// console.log(pessoaTexto.nome);

let pessoaJSON = JSON.parse(pessoaTexto); //Converte uma string para um JSON

console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[0]);

