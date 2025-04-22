class Monitoria {
    constructor(disciplina, professor) {
        this.disciplina = disciplina;
        this.professor = null;
        this.alunos = [];
        this.monitor = [];
        this.atividades = []
    }
    static mostrar(monitoria) {
        console.log(`Monitoria: ${monitoria.disciplina}`);
        console.log("Alunos:");
        console.log(monitoria.alunos);
        console.log("Monitores:");
        console.log(monitoria.monitor);
        console.log("Atividades:");
        console.log(monitoria.atividades);
    }
}

module.exports = Monitoria;
