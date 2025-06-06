const open_connection = require('./db');

const conn = open_connection();

function criar_tabela_monitoria(connection) {
    const sql = `
        CREATE TABLE IF NOT EXISTS monitoria  (
            id INT AUTO_INCREMENT PRIMARY KEY,
            Materia VARCHAR(100),
            monitor_id INTEGER REFERENCES aluno(id),
           professor_id INTEGER REFERENCES professor(id)
        )
    `;

    connection.query(sql, function(err) {
        if (err) {
            console.error('Erro ao criar tabela: ' + err.message);
            return;
        }
        console.log('Tabela monitoria criada com sucesso ou já existente');
    });
}

function adicionar_professor(connection,nome,matricula) {
    const sql = `
    INSERT INTO professor (nome,matricula)
    VALUES (?,?)
`;

connection.query(sql, [nome,matricula], function(err, results) {
    if (err) {
        console.error('erro ao inserir professor: ' + err.message);
        return;
    }
    console.log('professor adicionado com sucesso. ID:', results.insertId);
});
}

function adicionar_monitoria(connection,Materia,monitor_id,professor_id) {
    const sql = `
    INSERT INTO monitoria (Materia,monitor_id,professor_id)
    VALUES (?,?,?)
`;

connection.query(sql, [Materia,monitor_id,professor_id], function(err, results) {
    if (err) {
        console.error('erro ao inserir monitoria: ' + err.message);
        return;
    }
    console.log('monitoria adicionado com sucesso. ID:', results.insertId);
});
}
function apagar_professor(connection, id) {
    const sql = `
        DELETE FROM professor
        WHERE id = ?
    `;

    connection.query(sql, [id], function(err) {
        if (err) {
            console.error('Erro ao apagar professor:', err.message);
            return;
        }
            console.log('profesoor apagado com sucesso.');
    });
}

adicionar_professor(conn,"rr",12345)
criar_tabela_monitoria(conn)
adicionar_monitoria(conn,"matematica",3,4)
apagar_professor(conn,1)