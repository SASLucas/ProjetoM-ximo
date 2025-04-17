const Monitoria = require('../modelo/monitoria')

class Professor{
    constructor(id, nome, disciplina){
        this.id = id,
        this.nome = nome,
        this.disciplina = disciplina
    }
    cadastrarMonitor(monitoria, novoMonitor){
        monitoria.monitor = novoMonitor
    }
    cadastrarAluno(monitoria, alunoNovo){
        monitoria.aluno.push(alunoNovo)
    }

}

module.exports = Professor;