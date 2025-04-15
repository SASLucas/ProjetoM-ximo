const Aluno = require('../modelo/aluno');

class Monitor extends Aluno {
    constructor(id, nome, email, disciplinaMonitoria) {
        super(id, nome, email);
        this.disciplina = disciplinaMonitoria;
        this.plantoes = [];
    }

    marcarPlantao(data, horario) {
        this.plantoes.push({ data, horario });
        console.log(`Plantão marcado para ${data} às ${horario}`);
    }

    registrarAtividade(atividade) {
        console.log(`${this.nome} registrou a atividade: ${atividade}`);
    }
}

module.exports = Monitor;
