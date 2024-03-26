let elemento = document.querySelector('#titulo-principal');

setTimeout(function() {
  elemento.style.color = 'red';
  elemento.style.backgroundColor = 'yellow';
  elemento.style.width = '400px';
}, 1000);

setTimeout(function() {
  elemento.style.color = 'yellow';
  elemento.style.backgroundColor = 'black';
  elemento.style.width = '400px';
}, 2000);

console.log(document.getElementsByClassName('itens-verdes'));