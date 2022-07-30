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

class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log("As cores são:")
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}

const hat = new ProductWithAttributes("Chapéu", 29.99, ["Azul", "Preto", "Verde"])

console.log(hat.name);
console.log(hat.price);
console.log(hat.colors);

hat.showColors();