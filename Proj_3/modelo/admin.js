const Monitoria = require('../modelo/monitoria')

class Admin{
    constructor(user){
        this.user = user
    }
    criarMonitoria(disciplina){
        const novaMonitoria = new Monitoria(disciplina);
        return novaMonitoria
    }
}

module.exports = Admin;