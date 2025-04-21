const Monitoria = require('../modelo/monitoria')

class Professor{
    constructor(id, nome, disciplina){
        this.id = id,
        this.nome = nome,
        this.disciplina = disciplina
    }
    // cadastrarMonitor(monitoria, novoMonitor){
    //     monitoria.monitor = novoMonitor
    // }
    // cadastrarAluno(monitoria, alunoNovo){
    //     monitoria.aluno.push(alunoNovo)
    // }

    
    cadastrarAtividade(con,conteudo,idatividade) {
        const query = 'INSERT INTO atividades (conteudo,idatividade) VALUES (?, ?);'

        con.query(query, [conteudo,idatividade], (err, results) => {
          if (err) {
            console.error('Erro ao cadastrar atividade:', err);
          } else {
            console.log('atividae cadastrada com sucesso', results);
       }
    });
    }

    
    excluirAtividade(con,idatividade) {
        const excluir_atividade = 'DELETE FROM atividade where idatividade = ?'

        con.query(excluir_atividade, [idatividade], (err, results) => {
          if (err) {
            console.error('Erro ao excluir a atividade:', err);
          } else {
            console.log('atividade excluida com sucessor', results);
       }
    });
    }

    
    cadastrarAluno(con,user) {
        const adicionar_aluno = 'INSERT INTO aluno (user) VALUES (?);'

        con.query(adicionar_aluno, [user], (err, results) => {
          if (err) {
            console.error('Erro ao cadastrar aluno:', err);
          } else {
            console.log('aluno cadastrado com sucesso', results);
       }
    });
    }

    
    excluirAluno(con,user) {
        const excluir_aluno = 'delete from aluno where user = ?;'

        con.query(excluir_aluno, [user], (err, results) => {
          if (err) {
            console.error('Erro ao excluir aluno:', err);
          } else {
            console.log('aluno excluido com sucesso', results);
       }
    });
    }


    analisarRelatorio(con,idRelatorio){
const analisar_Relatorio = 'select relatorio from monitor where idRelatorio = ?'
        con.query(analisar_Relatorio,[idRelatorio], (err, results) => {
              if (err) {
                console.error('Erro ao acessar relatorio:', err);
              } else {
                console.log('relatorio acessado com sucesso', results);
           }
        });
    }

     verFedeback(con,idFedeback){
    const ver_fedeback = 'select fedeback from monitor where idFedeback = ?'
            con.query(ver_fedeback,[idFedeback], (err, results) => {
                  if (err) {
                    console.error('Erro ao ver fedeback:', err);
                  } else {
                    console.log('fedeback acessado com sucesso', results);
               }
            });
        }


    
    
}




module.exports = Professor;