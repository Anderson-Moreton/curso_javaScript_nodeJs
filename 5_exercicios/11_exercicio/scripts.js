let idade = 21;
let cnh = true;

if (idade >= 18 && cnh == false) {
    console.log("Você é maior de idade, porém não tem CNH para dirigir!");
} else if (idade >= 18 && cnh == true) {
    console.log("Parabéns, você é maior de idade e possiu CNH para dirigir!");
} else {
    console.log("Você não é maior de idade e não tem CNH para dirigir!");
}