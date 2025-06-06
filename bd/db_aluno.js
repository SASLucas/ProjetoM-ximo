const open_connection = require('./db');

const conn = open_connection();

function criar_tabela_aluno(connection) {
    const sql = `
        CREATE TABLE IF NOT EXISTS aluno  (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(100),
            matricula int
        )
    `;

    connection.query(sql, function(err) {
        if (err) {
            console.error('Erro ao criar tabela: ' + err.message);
            return;
        }
        console.log('Tabela aluno criada com sucesso ou já existente');
    });
}

criar_tabela_aluno(conn);