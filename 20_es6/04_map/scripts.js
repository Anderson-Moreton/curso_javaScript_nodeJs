const products = [
    { name: 'Camisa', preco: 19.99, category: 'Roupas' },
    { name: 'Teclado', preco: 89.50, category: 'Eletro' },
    { name: 'Calça', preco: 59.99, category: 'Roupas' },
    { name: 'Monitor', preco: 139.80, category: 'Eletro' },
]

products.map((product) => {
    if(product.category === "Roupas") {
        product.onSale = true
    }
})

console.log(products);