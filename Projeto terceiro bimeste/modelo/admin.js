const Monitoria = require('../modelo/monitoria')

class Admin{
    constructor(user){
        this.user = user
    }
    criarMonitoria(disciplina){
        const novaMonitoria = new Monitoria(disciplina);
        return novaMonitoria
    }
    cadastrarProfessor(nome, monitoria){
        monitoria.professor = nome
    }
}

module.exports = Admin;