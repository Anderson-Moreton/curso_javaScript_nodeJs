let idade = [35, 25, 15, 5, 3, 30];

let names = ["Anderson", "Otávio", "Priscila"];

function verificarElementos (arr) {
    if(arr.length >= 5) {
        console.log("Ess array tem muitos elementos.")
    } else {
        console.log("Esse array tem poucos elementos")
    }
}

verificarElementos(names);
verificarElementos(idade);