function tipoDado(usu) {
    if (typeof usu === "number") {
        console.log("Esse tipo de dado é Number");
    } else if (typeof usu === "boolean") {
        console.log("esse tipo de dado é um Boolean");
    } else if (typeof usu === "string") {
        console.log("Esse tipo de dado é uma String");
    }
}

tipoDado(18);
tipoDado("Anderson");
tipoDado(true);