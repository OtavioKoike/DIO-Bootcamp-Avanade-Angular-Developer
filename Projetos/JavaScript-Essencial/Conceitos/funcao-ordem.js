function getName(){
    return 'Otavio Koike';
}

// Funçao de Primeira classe
function logFn(fn){
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);
