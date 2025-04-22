const Monitoria = require('../modelo/monitoria');
const Monitor = require('../modelo/monitor');
const Aluno = require('../modelo/aluno');

class Professor{
    constructor(id, nome){
        this.id = id,
        this.nome = nome
    }
    criarMonitor(id, nome){
        const novoMonitor = new Monitor(id, nome)
        return novoMonitor
    }
    criarAluno(id,nome){
        const novoAluno = new Aluno(id,nome)
        return novoAluno
    }
    criarAtividade(texto){
       const atividade = texto
       return atividade
    }

}

module.exports = Professor;