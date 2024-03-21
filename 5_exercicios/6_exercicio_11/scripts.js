let age = 17;
let cnh = true;

if(age >= 18 && cnh == true) {
    console.log(`Você tem ${age} anos e tem CNH para girigir!`);
} else if (age >= 18 && cnh == false) {
    console.log(`Você tem ${age} anos e não possui CNH para dirigir!`);
} else {
    console.log("Você não tem idade e nem CNH para dirigir!!");
}