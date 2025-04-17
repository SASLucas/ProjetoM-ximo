const Aluno = require('../modelo/aluno');

class Monitor extends Aluno {
    constructor(id, nome, disciplinaMonitoria) {
        super(id, nome);
        this.disciplina = disciplinaMonitoria;
        this.plantoes = [];
    }
}

module.exports = Monitor;
