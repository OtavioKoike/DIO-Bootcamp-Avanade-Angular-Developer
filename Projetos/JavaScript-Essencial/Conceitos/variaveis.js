// VAR
var teste = 'Example';

// Funcao de execução imediata
(() => {
    console.log(`Valor dentro da funcao "${teste}"`);

    if(true){
        var teste = "Exemplo";
        console.log(`Valor dentro do if "${teste}"`);
    }

    console.log(`Valor apos o if "${teste}"`);

})();

// -------------------------------------------------------------------
// LET

// Funcao de execução imediata
(() => {
    let testeLet = 'Example Let';
    console.log(`Valor dentro da funcao "${testeLet}"`);

    if(true){
        let testeLet = "Exemplo Let";
        console.log(`Valor dentro do if "${testeLet}"`);
    }

    console.log(`Valor apos o if "${testeLet}"`);

})();

// -------------------------------------------------------------------
// CONST

const name = "Otavio";

// Nao pode alterar o valor
// name = "Koike";

const user = {
    name: "Otavio"
};

// Mas se for um objeto, podemos trocar suas propriedades
user.name = "Koike";

// Nao podemos fazer o objeto apontar para outro lugar
// user = {
//     name: "Koike"
// }

const person = ["Otavio", "Augusto", "Marques"];

// Podemos add novos elementos
person.push("Koike");
// Podemo remover elementos
person.shift();
// Podemos alterar elementos
person[0] = "Otavio";

console.log(person);