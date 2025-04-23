const prompt = require('prompt-sync')();
const Aluno = require('../modelo/aluno');
const controller = require('../controle/instanciaController');

function menuAluno(voltarAoMenu) {
    let sair = false;

    while (!sair) {
        console.log('\nMenu do Aluno:');
        console.log('1 - ver atividades');
        console.log('2 - Voltar ao menu principal');
        console.log('3 - Sair');

        const opcao = parseInt(prompt('Escolha uma opção: '));

        if (opcao === 1) {
          console.log(controller.verAtividade())
          console.log('atividade vizualizadascom sucesso')
          
        }
        else if (opcao === 2) {
            sair = true;
          
        }
        else if (opcao === 3) {
            voltarAoMenu()
          
        }
        else {
            console.log('Opção inválida!');
        }
    }
}


module.exports = menuAluno;