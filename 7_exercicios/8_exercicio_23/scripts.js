function verificarString(string) {
    if(string.length > 10) {
        return `Seu texto é muito longo!`
    } else if(string.length <= 10) {
        return `Seu texto esta no padrão!`
    }
}

console.log(verificarString("Olá Anderson"));
console.log(verificarString("Olá"))