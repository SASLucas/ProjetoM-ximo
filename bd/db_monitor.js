const open_connection = require('./db');

const conn = open_connection();


function criar_tabela_monitor(connection) {
    const sql = `
        CREATE TABLE IF NOT EXISTS monitor  (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(100),
            matricula INT
        )
    `;

    connection.query(sql, function(err) {
        if (err) {
            console.error('Erro ao criar tabela: ' + err.message);
            return;
        }
        console.log('Tabela monitor criada com sucesso ou já existente');
    });
}

function criar_tabela_plantao(connection) {
    const sql = `
        CREATE TABLE IF NOT EXISTS plantao  (
            id INT AUTO_INCREMENT PRIMARY KEY,
            data_plantao DATE
        )
    `;

    connection.query(sql, function(err) {
        if (err) {
            console.error('Erro ao criar tabela: ' + err.message);
            return;
        }
        console.log('Tabela plantao criada com sucesso ou já existente');
    });
}

function adicionar_plantao(connection,data) {
    const sql = `
    INSERT INTO plantao (data_plantao)
    VALUES (?)
`;

connection.query(sql, [data], function(err, results) {
    if (err) {
        console.error('erro ao marcar plantao: ' + err.message);
        return;
    }
    console.log('plantao marcado com sucesso. ID:', results.insertId);
});
}

function apagar_plantao(connection, id) {
    const sql = `
        DELETE FROM plantao
        WHERE id = ?
    `;

    connection.query(sql, [id], function(err) {
        if (err) {
            console.error('Erro ao apagar plantao:', err.message);
            return;
        }
            console.log('plantao apagado com sucesso.');
    });
}



criar_tabela_monitor(conn)
criar_tabela_plantao(conn)
adicionar_plantao(conn,'2025-06-06')
apagar_plantao(conn,1)

