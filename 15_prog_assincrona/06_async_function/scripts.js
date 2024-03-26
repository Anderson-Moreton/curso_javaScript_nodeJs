async function somar(a, b) {
  return a + b;
}

console.log(somar(10,20));

somar(10,20).then(value => console.log(value));