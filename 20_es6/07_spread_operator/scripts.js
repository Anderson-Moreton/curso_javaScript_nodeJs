const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const a3 = [...a1, ...a2]

console.log(a3);

const a4 = [0, ...a1, 4] 

console.log(a4);

const carName = { name: 'Celta' }
const carBrand = { brand: 'GM' }
const otherInfos = { km: 120000, price: 49000 }

const car = { ...carName, ...carBrand, ...otherInfos }

console.log(car);