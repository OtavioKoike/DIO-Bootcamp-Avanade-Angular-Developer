// Para Teste Local (Comentar)
let limit = parseInt("3");

// Para Plataforma (Descomentar)
// let limit = parseInt(gets());

for (let i = 0; i < limit; i++) {
    // Para Teste Local (Comentar)
    let line = "3 2".split(" ");
    // Para Plataforma (Descomentar)
    // let line = gets().split(" ");
    let X = parseInt(line[0]);
    let Y = parseInt(line[1]);
    if (Y == 0) {
        console.log("divisao impossivel");
    } else {
        let divisao = parseFloat(X / Y).toFixed(1); //complete com o sinal da operação faltante entre x e y
        console.log(divisao);
    }
}