const sum = function sum(a, b) {
    return a + b;
}

const arrowSum = (a, b) => a + b;

console.log(sum(5, 5));
console.log(arrowSum(5, 5));

const greeting = (name)=> {
    if(name) {
        return "Olá " + name + " Seja bem-vindo!";
    } else {
        return "Olá, qual o seu nome?";
    }
}

console.log(greeting("Anderson"));
console.log(greeting());

const user = {
    name: "Anderson",
    sayUserName() {
        var self = this
        setTimeout(function () {
            console.log(self)
            console.log("Username: " + self.name);
        }, 500)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log("Username: " + this.name);
        }, 800)
    },
}

user.sayUserName();
user.sayUserNameArrow();