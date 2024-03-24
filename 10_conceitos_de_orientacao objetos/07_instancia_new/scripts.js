function Cachorro(raca,patas,cor) {
  this.raca = raca;
  this.patas = patas;
  this.cor = cor;
  this.latir = function() {
    console.log("Au au au au au");
  }
}

let husky = new Cachorro('Husky', 4, 'cinza');

husky.latir();