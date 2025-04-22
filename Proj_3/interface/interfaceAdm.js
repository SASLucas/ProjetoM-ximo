const prompt = require('prompt-sync')();
const Admin = require('../modelo/admin');
const Controller = require('../controle/controleMonitoria')


function menuAdmin(voltarAoMenu) {
    let sair = false;
    const controller = new Controller

    while (!sair) {
        console.log('\nMenu do admin:');
        console.log('1 - Cadastrar monitoria');
        console.log('2 - Ver monitorias');
        console.log('3 - Voltar ao menu principal');
        console.log('4 - Sair');

        const opcao = parseInt(prompt('Escolha uma opção: '));

        if (opcao === 1) {
            const disciplina = prompt('Digite a disciplina da monitoria: ');
            const monitoria = controller.adicionarMonitoria(disciplina)
            console.log(`Monitoria de ${monitoria.disciplina} criada com sucesso!`);
        } 
        else if (opcao === 2) {
            controller.mostrar()
        } 
        else if (opcao === 3) {
            voltarAoMenu();
            sair = true;
        } 
        else if (opcao === 4) {
            console.log('Saindo...');
            process.exit(0);
        } 
        else {
            console.log('Opção inválida!');
        }
    }
}

module.exports = menuAdmin;