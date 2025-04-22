const Aluno = require('../modelo/aluno');

class Monitor extends Aluno {
    constructor(id, nome) {
        super(id, nome);
        this.plantoes = [];
    }
    
}

module.exports = Monitor;
