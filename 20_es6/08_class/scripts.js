class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    productDiscount(discount) {
        return this.price * ((100 - discount) / 100);
    }
}

const camisa = new Product('Camisa da Puma' , 650);

console.log(camisa.name);
console.log(camisa.productDiscount(10));
console.log(camisa.productDiscount(50));