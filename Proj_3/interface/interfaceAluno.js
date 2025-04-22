const prompt = require('prompt-sync')();
const Aluno = require('../modelo/aluno');

function menuAluno(voltarAoMenu) {
    let sair = false;

    while (!sair) {
        console.log('\nMenu do Aluno:');
        console.log('1 - Cadastrar dúvida');
        console.log('2 - Voltar ao menu principal');
        console.log('3 - Sair');

        const opcao = parseInt(prompt('Escolha uma opção: '));

        if (opcao === 1) {
            const duvida = prompt('Digite sua dúvida: ');
            const disciplina = prompt('Digite a disciplina: ');
            aluno.cadastrarDuvida(duvida, disciplina);
            break;
        }
        else if (opcao === 2) {
            sair = true;
            break;
        }
        else if (opcao === 3) {
            voltarAoMenu()
            break;
        }
        else {
            console.log('Opção inválida!');
        }
    }
}


module.exports = menuAluno;