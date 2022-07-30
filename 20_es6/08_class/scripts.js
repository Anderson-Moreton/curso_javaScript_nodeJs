class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product('Camisa do Palmeiras' , 249)

console.log(shirt.name)
console.log(shirt.productDiscount(10))
console.log(shirt.productDiscount(50))