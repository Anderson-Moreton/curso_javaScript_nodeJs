const validarMarca = /Marca: (Adidas|Nike|Puma|Asics)/;

console.log(validarMarca.test("Marca: Puma"));
console.log(validarMarca.test("Marca: Pameiras"));
console.log(validarMarca.test("Marca: Nike"));
console.log(validarMarca.test("Programador"));