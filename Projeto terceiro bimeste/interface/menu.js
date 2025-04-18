const prompt = require('prompt-sync')();

console.log('Bem-vindo!');

function escolha() {
    let valido = false;
    let identidade;

    while (valido !== true) {
        identidade = prompt('Você é(digite o número):\n 1 - Professor\n 2 - Monitor\n 3 - Aluno');

        if (identidade === '1') {
            console.log('Você escolheu Professor.');
            valido = true;
            return 1
        } else if (identidade === '2') {
            console.log('Você escolheu Monitor.');
            valido = true;
            return 2
        } else if (identidade === '3') {
            console.log('Você escolheu Aluno.');
            valido = true;
            return 3
        } else {
            console.log('Escolha inválida. Tente novamente.');
        }
    }
}

function irNovaInterface(){
    const novaInterce = escolha()
    if(escolha === 1){
        //Não sei mudar de interface
    }
    else if(escolha === 2){
        //Não sei mudar de interface
    }
    else if(escolha === 3){
        //Não sei mudar de interface
    }
}
