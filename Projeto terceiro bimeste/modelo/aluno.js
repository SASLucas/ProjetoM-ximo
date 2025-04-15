class Aluno {
    constructor(id, nome, email, disciplinasCadastradas) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.disciplinasCadastradas = disciplinasCadastradas
    }

    enviarDuvida(duvida) {
        console.log(`${this.nome} enviou a dúvida: ${duvida}`);
    }
}

module.exports = Aluno;
