const Controller = require('../controle/controleMonitoria')


const controller = new Controller();

// const monitoria = controller.adicionarMonitoria('Matemati');
const monitoria2 = controller.adicionarMonitoria('Matematica');
console.assert(controller.monitorias.length === 1, 'só pode ter uma monitoria');
console.assert(monitoria2.disciplina === 'Matematica', 'a disciplina da monitoria é matematica');


controller.adicionarMonitor(2,'rrr')
//controller.adicionarMonitor(2,'rrr')
console.assert(controller.monitorias[0].monitor.length === 1,'não adicionou apenas o primeiro monitor')
console.assert(controller.monitorias[0].monitor[0].nome === 'rr','rr não foi adicionado')

controller.adicionarAluno(1,'vinicis')
//controller.adicionarAluno(1,'viniciuss')
// controller.adicionarAluno2(2,'lucas')

console.assert(controller.monitorias[0].alunos.length === 1,'não adicionou apenas o primeiro aluno')
console.assert(controller.monitorias[0].alunos[0].nome === 'vinicius','vinicius não foi adicionado')



