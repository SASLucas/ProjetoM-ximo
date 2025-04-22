const prompt = require('prompt-sync')();
const Professor = require('../modelo/professor');

function menuProf(voltarAoMenu) {
    let sair = false;
    const Prof = new Professor('admin');

    while (!sair) {
        console.log('\nMenu do Professor:');
        console.log('1 - Cadastrar monitor');
        console.log('2 - Cadastrar aluno');
        console.log('3 - Voltar ao menu principal');
        console.log('4 - Sair');

        const opcao = parseInt(prompt('Escolha uma opção: '));

        if (opcao === 1) {
            const nomeMonitor = prompt('Digite o nome do monitor: ');
            const idMonitor = prompt('Digite o ID do monitor: ');
            const novoMonitor = new Monitor(idMonitor, nomeMonitor, professor.disciplina);
            professor.cadastrarMonitor(monitoria, novoMonitor);
            break;
        }
        else if (opcao === 2) {
            const nomeAluno = prompt('Digite o nome do aluno: ');
            const idAluno = prompt('Digite o ID do aluno: ');
            const novoAluno = new Aluno(idAluno, nomeAluno);
            professor.cadastrarAluno(monitoria, novoAluno);
            break;
        }
        else if (opcao === 3) {
            voltarAoMenu();
            sair = true;
        }
        else if (opcao === 4) {
            sair = true;
            break;
        }
        else {
            console.log('Opção inválida!');
        }
    }
}

module.exports = menuProf;

