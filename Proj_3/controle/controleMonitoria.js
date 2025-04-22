const Professor = require('./modelo/professor');
const Admin = require('./modelo/admin');
const Monitoria = require('./modelo/monitoria');

class controleMonitoria{
    constructor(){
        this.monitorias = [];
    }

    adicionarMonitoria(disciplina){
        this.monitorias.push(Admin.criarMonitoria(disciplina));
    }

    adicionarMonitor(monitor){
        this.monitorias
    }
}