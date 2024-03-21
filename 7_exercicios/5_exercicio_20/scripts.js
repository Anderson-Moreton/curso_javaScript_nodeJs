function cnh(idade) {
    if(idade >= 18) {
        return `Você tem ${idade} e pode dirigir!`;
    } else {
        return `Você é menor de idade e não pode dirigir!`;
    }
}

console.log(cnh(18));
console.log(cnh(22));
console.log(cnh(17));