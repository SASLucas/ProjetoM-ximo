const prompt = require('prompt-sync')();
const Admin = require('../modelo/admin');


function menuAdmin(voltarAoMenu) {
    let sair = false;
    const admin = new Admin('admin');

    while (!sair) {
        console.log('\nMenu do admin:');
        console.log('1 - Cadastrar Monitoria');
        console.log('2 - Voltar ao menu principal');
        console.log('3 - Sair');

        const opcao = parseInt(prompt('Escolha uma opção: '));

        if (opcao === 1) {
            const disciplina = prompt('Digite a disciplina da monitoria: ');
            const monitoria = admin.criarMonitoria(disciplina);
            console.log(`Monitoria de ${monitoria.disciplina} criada com sucesso!`);
        } 
        else if (opcao === 2) {
            voltarAoMenu();
            sair = true;
        } 
        else if (opcao === 3) {
            console.log('Saindo...');
            process.exit(0);
        } 
        else {
            console.log('Opção inválida!');
        }
    }
}

module.exports = menuAdmin;