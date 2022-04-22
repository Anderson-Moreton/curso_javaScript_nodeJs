let nomes = ["Anderson", "Thiago", "Jefferson", "Gabriel", "Brunno", "Otávio"];

let idade = [33, 30, 35,];

function verificacao(arr) {
    if (arr.length >= 5) {
        console.log("Muitos Elementos");
    } else if (arr.length < 5){
        console.log("Poucos elementos");
    }
};

verificacao(nomes);

verificacao(idade);