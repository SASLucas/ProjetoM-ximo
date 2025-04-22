const Monitoria = require('../modelo/monitoria')
const Professor = require('../modelo/professor')

class Admin{
    constructor(user){
        this.user = user
    }
    criarMonitoria(disciplina){
        const novaMonitoria = new Monitoria(disciplina);
        return novaMonitoria
    }
    adicionarProfessor(id, nome){
        const novoProfessor = new Professor(id, nome)
        return novoProfessor
    }
}

module.exports = Admin;