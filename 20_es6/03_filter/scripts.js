const arr = [1, 2, 3, 4, 5]

console.log(arr);

const highNumbers = arr.filter((n) =>{
    if(n >= 3) {
        return n
    }
})

console.log(highNumbers)

const users = [
    { name: 'Anderson', available: true },
    { name: 'Priscila', available: false },
    { name: 'Otávio', available : true },
    { name: 'Sueli', available: false },
    { name: 'Alice', available: true },
]

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)

console.log(availableUsers);
console.log(notAvailableUsers);