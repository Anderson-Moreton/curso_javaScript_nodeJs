function criaCachorro(raca, patas, cor) {
  let cachorro = Object.create({});
  cachorro.raca = raca;
  cachorro.patas = patas;
  cachorro.cor = cor;
  cachorro.latir = function() {
    console.log("Au au");
  }
  return cachorro;
}

let beagles = criaCachorro('Beagles', 4, 'Preto, Branco e Castanho');

console.log(beagles);

console.log(beagles.cor);

beagles.latir();