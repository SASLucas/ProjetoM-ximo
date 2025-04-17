class Aluno {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
        this.disciplinasCadastradas = []
    }

    cadastrarDisciplina(disciplina) {
        if(disciplina != null){
            this.disciplinasCadastradas.push(disciplina);
        }
        else{
            throw new Error("Você deve digitar a nova disciplina!")
        }
    }

    enviarDuvida(duvida){
        
}
}



module.exports = Aluno;