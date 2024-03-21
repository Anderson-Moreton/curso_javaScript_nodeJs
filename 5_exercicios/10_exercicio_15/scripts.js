let num = 22;
let primo = 0;

for(let i = 1; i <= num; i++) {

    if(num % i == 0) {
        primo++;
    }

}

if(primo == 2) {
    console.log(`O número ${num} é primo!`);
} else {
    console.log(`O número ${num} não é primo!`);
}