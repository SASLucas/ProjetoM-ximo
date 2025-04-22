const prompt = require('prompt-sync')();
const Admin = require('../modelo/admin');
const controller = require('../controle/instanciaController');

function menuAdmin(voltarAoMenu) {
    let sair = false;

    while (!sair) {
        console.log('\nMenu do admin:');
        console.log('1 - Cadastrar monitoria');
        console.log('2 - Cadastrar professor na monitoria');
        console.log('3 - Ver monitorias');
        console.log('4 - Voltar ao menu principal');
        console.log('5 - Sair');

        const opcao = parseInt(prompt('Escolha uma opção: '));

        if (opcao === 1) {
            const disciplina = prompt('Digite a disciplina da monitoria: ');
            const monitoria = controller.adicionarMonitoria(disciplina)
            console.log(`Monitoria de ${monitoria.disciplina} criada com sucesso!`);
        } 
        else if (opcao === 2) {
            const nome = prompt('Digite o nome do professor: ');
            const id = prompt('Digite o id do professor: ');
            controller.adicionarProfessor(nome, id);
        } 
        else if (opcao === 3) {
            controller.mostrar()
        } 
        else if (opcao === 4) {
            voltarAoMenu();
            sair = true;
        } 
        else if (opcao === 5) {
            console.log('Saindo...');
            process.exit(0);
        } 
        else {
            console.log('Opção inválida!');
        }
    }
}

module.exports = menuAdmin;