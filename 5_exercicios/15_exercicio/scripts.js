let num = 5;
let divisoes = 0;

for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        divisoes++;
    }
}

if (divisoes == 2) {
    console.log(`O númeor ${num} é primo!`);
} else {
    console.log(`O númeor ${num} não é primo!`);
}