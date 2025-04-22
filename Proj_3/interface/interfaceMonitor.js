const prompt = require('prompt-sync')();
const Monitor = require('../modelo/monitor');
const ControleMonitor = require('../controle/controleMonitor');

function menuMonitor(voltarAoMenu) {
    let sair = false;
   
    const monitor = new Monitor('monitor123', 'Monitor Exemplo');
    const controller = new ControleMonitor(monitor);

    while (!sair) {
        console.log('\nMenu do Monitor:');
        console.log('1 - Cadastrar plantão');
        console.log('2 - Excluir plantão');
        console.log('3 - Registrar atividade');
        console.log('4 - Visualizar histórico');
        console.log('5 - Voltar ao menu principal');
        console.log('6 - Sair');

        const opcao = parseInt(prompt('Escolha uma opção: '));

        if (opcao === 1) {
            const data = prompt('Digite a data do plantão (DD/MM/AAAA): ');
            const hora = prompt('Digite a hora do plantão (HH:MM): ');
            const local = prompt('Digite o local do plantão: ');
            controller.cadastrarPlantao(data, hora, local);
            console.log('Plantão cadastrado com sucesso!');
        }
        else if (opcao === 2) {
            console.log('Plantões disponíveis:');
            monitor.plantoes.forEach((plantao, index) => {
                console.log($`{index} - ${plantao.data} ${plantao.hora} em ${plantao.local}`);
            });
            const index = parseInt(prompt('Digite o número do plantão a excluir: '));
            if (controller.excluirPlantao(index)) {
                console.log('Plantão excluído com sucesso!');
            } else {
                console.log('Índice inválido!');
            }
        }
        else if (opcao === 3) {
            console.log('Plantões disponíveis:');
            monitor.plantoes.forEach((plantao, index) => {
                console.log(`${index} - ${plantao.data} ${plantao.hora} em ${plantao.local}`);
            });
            const plantaoIndex = parseInt(prompt('Digite o número do plantão: '));
            const descricao = prompt('Digite a descrição da atividade: ');
            if (controller.registrarAtividade(plantaoIndex, descricao)) {
                console.log('Atividade registrada com sucesso!');
            } else {
                console.log('Índice inválido!');
            }
        }
        else if (opcao === 4) {
            const historico = controller.verHistorico();
            console.log('\nHistórico de Plantões:');
            historico.forEach((plantao, index) => {
                console.log(`Plantão ${index + 1}:`);
                console.log(`Data: ${plantao.data} ${plantao.hora}`);
                console.log(`Local: ${plantao.local}`);
                console.log('Atividades:');
                plantao.atividades.forEach((atividade, idx) => {
                    console.log(`  ${idx + 1}. ${atividade.descricao} (${atividade.dataRegistro})`);
                });
                console.log('---------------------');
            });
        }
        else if (opcao === 5) {
            voltarAoMenu();
            sair = true;
        }
        else if (opcao === 6) {
            console.log('Saindo...');
            process.exit(0);
        }
        else {
            console.log('Opção inválida!');
        }
    }
}

module.exports = menuMonitor;
