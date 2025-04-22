const prompt = require('prompt-sync')();
const Monitor = require('../modelo/monitor');

function menuMonitor(voltarAoMenu) {
    let sair = false;

    while (!sair) {
        console.log('\nMenu do Monitor:');
        console.log('1 - Visualizar plantões');
        console.log('2 - Voltar ao menu principal');
        console.log('3 - Sair');

        const opcao = parseInt(prompt('Escolha uma opção: '));

        if (opcao === 1) {
            console.log('Plantões:', monitor.plantoes);
        }
        else if (opcao === 2) {
            voltarAoMenu()
            break;
        }
        else if (opcao === 3) {
            sair = true;
            break;
        }
        else {
            console.log('Opção inválida!');
        }
    }
}

module.exports = menuMonitor;
