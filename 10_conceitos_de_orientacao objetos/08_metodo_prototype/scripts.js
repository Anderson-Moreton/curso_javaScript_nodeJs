function Cachorro(raca,patas,cor) {
  this.raca = raca;
  this.patas = patas;
  this.cor = cor;
}

Cachorro.prototype.uivar = function() {
  console.log("Auuuuuuuu");
}

Cachorro.prototype.latir = function() {
  console.log("Au au au au");
}

let husky = new Cachorro('Husky', 4, 'cinza');

husky.uivar();
husky.latir();