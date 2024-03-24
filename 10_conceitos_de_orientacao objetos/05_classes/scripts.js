let cachorro = {
  patas: 4,
  raca: 'SRD',
  latir: function() {
    console.log("Au Au");
  }
}

let beagles = Object.create(cachorro);

cachorro.raca = "Beagles";

console.log(cachorro);

beagles.latir();

console.log(beagles.raca);
console.log(cachorro.raca);

let pastor = Object.create(cachorro);

pastor.raca = "Pastor Alemão";

console.log(pastor.raca);