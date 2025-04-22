const Professor = require('../modelo/professor');
const Admin = require('../modelo/admin');
const Monitoria = require('../modelo/monitoria');

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

    adicionarMonitor(monitor){
        this.monitorias
    }
    mostrar(){
        console.log(this.monitorias);
    }
}

module.exports = controleMonitoria