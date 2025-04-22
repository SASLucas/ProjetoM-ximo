const Monitoria = require('../modelo/monitoria');
const Monitor = require('./monitor');

class Professor{
    constructor(id, nome){
        this.id = id,
        this.nome = nome
    }
    criarMonitor(id, nome){
        const novoMonitor = new Monitor(id, nome)
    }

}

module.exports = Professor;