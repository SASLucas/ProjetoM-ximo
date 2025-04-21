const Monitoria = require('../modelo/monitoria')

class Admin{
    constructor(user){
        this.user = user
    }
//     criarMonitoria(disciplina){
//         const novaMonitoria = new Monitoria(disciplina);
//         return novaMonitoria
//     }
//     cadastrarProfessor(nome, monitoria){
//         monitoria.professor = nome
//     }
    criarMonitoria(con,disciplina,user) {
        const criar_monitoria = 'INSERT INTO monitorias (disciplina,user) VALUES (?, ?);'
        
        con.query(criar_monitoria, [disciplina,user], (err, results) => {
          if (err) {
            console.error('Erro ao criar monitoria:', err);
          } else {
            console.log('Monitoria de ${disciplina} criada e vinculada ao professor ${user}');
       }
    });
    }
    
    AdiconarProfessor(con,user,idProfessoe){
    cosnt adicionar_prof = 'INSERT INTO profesoor(user,idProfessoe)VALUES(?,?)'

    con.query(adicionar_prof,[user,idProfessoe],((err, results) => {
              if (err) {
                console.error('Erro ao adicioanr professor:', err);
              } else {
                console.log('user ${iuser} adicionado com sucesso');
              }
            });
          }
        }

 }
    

module.exports = Admin;