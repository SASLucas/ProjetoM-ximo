const Professor = require('../modelo/professor');
const Admin = require('../modelo/admin');
const Monitoria = require('../modelo/monitoria');
const Aluno = require('../modelo/aluno');
const Monitor = require('../modelo/monitor');


class controleMonitoria{
    constructor(){
        this.monitorias = [];
    }
    adicionarMonitoria(disciplina){
            const admin = new Admin();
            const monitoria = admin.criarMonitoria(disciplina);
            this.monitorias.push(monitoria);
            return monitoria;
    }
    adicionarProfessor(id, nome){
        if (this.monitorias.length === 0) {
            console.log("Nenhuma monitoria cadastrada. Cadastre uma monitoria primeiro.");
            console.log(this.monitorias)
            return;
        }

       const adm = new Admin()
     const prof = adm.adicionarProfessor(id,nome)
     const monitoriaAtual = this.monitorias[0];
     monitoriaAtual.alunos.push(prof)
    }

    adicionarMonitor(id, nome){
        if (this.monitorias.length === 0) {
            console.log("Nenhuma monitoria cadastrada. Cadastre uma monitoria primeiro.");
            console.log(this.monitorias)
            return;
        }

       const prof = new Professor()
     const monitor = prof.criarMonitor(id,nome)
     const monitoriaAtual = this.monitorias[0];
     monitoriaAtual.monitor.push(monitor)
    }
    adicionarAluno(id, nome){
        if (this.monitorias.length === 0) {
            console.log("Nenhuma monitoria cadastrada. Cadastre uma monitoria primeiro.");
            console.log(this.monitorias)
            return;
        }

       const prof = new Professor()
     const aluno = prof.criarAluno(id,nome)
     const monitoriaAtual = this.monitorias[0];
     monitoriaAtual.alunos.push(aluno)
    }
    adicionarAtividaed(texto){
        if (this.monitorias.length === 0) {
            console.log("Nenhuma monitoria cadastrada. Cadastre uma monitoria primeiro.");
            console.log(this.monitorias)
            return;
        }

       const prof = new Professor()
     const atividade = prof.criarAtividade(texto)
     const monitoriaAtual = this.monitorias[0];
     monitoriaAtual.atividades.push(atividade)
    }
    verAtividade(){
        const monitoriaAtual = this.monitorias[0];
        return monitoriaAtual.atividades
    }
    mostrar() {
        for(let i = 0; i < this.monitorias.length; i++){
            Monitoria.mostrar(this.monitorias[i])
        }
    }
}

module.exports = controleMonitoria