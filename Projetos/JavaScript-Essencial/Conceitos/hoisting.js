// Hoisting de variavel
function fnVariavel(){
    console.log(text);
    var text = "Exemplo";
    console.log(text);
}

fnVariavel();

// function fnVariavel(){
//     var text
//     console.log(text);
//     text = "Exemplo";
//     console.log(text);
// }

// -----------------------------------------------------------------------
// Hoisting de Funçao
// function fn(){
//     log('Hoisting de funcao');
    
//     function log(value){
//         console.log(value);
//     }
// }

fn();

function fn(){
    function log(value){
        console.log(value);
    }

    log('Hoisting de funcao');
}