const prompt = require('prompt-sync')();
const Professor = require('../modelo/professor');
const controller = require('../controle/instanciaController');


function menuProf(voltarAoMenu) {
    let sair = false;
    while (!sair) {
        console.log('\nMenu do Professor:');
        console.log('1 - Cadastrar monitor');
        console.log('2 - Cadastrar aluno');
        console.log('3 - Cadastrar atividade');
        console.log('4 - Voltar ao menu principal');
        console.log('5 - Sair');
    

        const opcao = parseInt(prompt('Escolha uma opção: '));

        if (opcao === 1) {
            const nomeMonitor = prompt('Digite o nome do monitor: ');
            const idMonitor = prompt('Digite o ID do monitor: ');
           controller.adicionarMonitor(idMonitor, nomeMonitor);
            console.log("Monitor cadastrado com sucesso!");
        }
        else if (opcao === 2) {
            const nomeAluno = prompt('Digite o nome do aluno: ');
            const idAluno = prompt('Digite o ID do aluno: ');
           controller.adicionarAluno(nomeAluno,idAluno);
            console.log("Aluno cadastrado com sucesso!");
        }
        else if (opcao === 3) {
            const atividade = prompt('Digite a atividade a ser realizada pelo aluno: ');
           controller.adicionarAtividaed(atividade);
            console.log("atividade cadastrado com sucesso!");
        }
        else if (opcao === 4) {
            voltarAoMenu();
            sair = true;
        }
        else if (opcao === 5) {
            sair = true;
        }
        else {
            console.log('Opção inválida!');
        }
    }
}

module.exports = menuProf;

