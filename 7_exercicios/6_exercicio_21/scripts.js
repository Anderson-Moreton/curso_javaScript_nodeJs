function checkingType(type) {
    if(typeof type === "number") {
        return `Esse tipo de dado é um number.`
    } else if(typeof type  === "string"){
        return `Esse tipo de dado é uma String.`
    } else if(typeof type === "boolean"){
        return `Esset tipo de dado é um boolean.`
    }  
}

console.log(checkingType("Anderson Moreton"));
console.log(checkingType(10));
console.log(checkingType(false));