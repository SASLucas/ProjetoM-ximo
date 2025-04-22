const prompt = require('prompt-sync')();
const menuAluno = require('../interface/interfaceAluno');
const menuMonitor = require('../interface/interfaceMonitor');
const menuProf = require('../interface/interfaceProf');
const menuAdm = require('../interface/interfaceAdm');
const Aluno = require('../modelo/aluno');
const Monitor = require('../modelo/monitor');
const Professor = require('../modelo/professor');
const Admin = require('../modelo/admin');

console.log('Bem-vindo!');

function mostrarMenuPrincipal() {
    let sair = false;
    
    while (!sair) {
        console.log('\nMenu Principal:');
        console.log('1 - Administrador');
        console.log('2 - Professor');
        console.log('3 - Monitor');
        console.log('4 - Aluno');
        console.log('5 - Sair');

        const opcao = parseInt(prompt('Escolha uma opção: '));

        if (opcao === 1) {
            console.log('Você escolheu Administrador');
            menuAdm(mostrarMenuPrincipal);
        } 
        else if (opcao === 2) {
            console.log('Você escolheu Professor');
            menuProf(mostrarMenuPrincipal);
        } 
        else if (opcao === 3) {
            console.log('Você escolheu Monitor');
            menuMonitor(mostrarMenuPrincipal);
        } 
        else if (opcao === 4) {
            console.log('Você escolheu Aluno');
            menuAluno(mostrarMenuPrincipal);
        } 
        else if (opcao === 5) {
            sair = true;
            console.log('Saindo...');
        } 
        else {
            console.log('Opção inválida!');
        }
    }
}

module.exports = mostrarMenuPrincipal;
