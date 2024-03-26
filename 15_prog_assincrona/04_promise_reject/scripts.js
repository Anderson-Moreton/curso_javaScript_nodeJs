function verificarNumero(num) {
  return new Promise((resolve, reject) => {
    if(num == 2) {
      resolve(console.log(`O numero é ${num}`));
    } else {
      reject(new Error("Código Falhou"));
    }
  });
}

verificarNumero(2);
verificarNumero(3);

