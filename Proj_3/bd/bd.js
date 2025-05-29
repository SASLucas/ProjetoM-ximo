const mysql = require('mysql2')

function open_connection(){
    console.log('conectando')
    const connection = mysql.createConnection({
        local:'localhost',
        user:'root',
        password:'root',
        Database:'bd'
    })
    connection.connect(function(err){
        if(err){
            console.error('falha ao conectar'+ err) 
        }
        console.log('sucesso ao conectar')
    })
    return connection
}
function criar_tabela(connection) {
    const sql = `
        CREATE TABLE IF NOT EXISTS usuarios  (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(100),
            email VARCHAR(100)
        )
    `;

    connection.query(sql, function(err) {
        if (err) {
            console.error('Erro ao criar tabela: ' + err.message);
            return;
        }
        console.log('Tabela criada com sucesso ou já existente');
    });
}


open_connection()
const conn = open_connection();
criar_tabela(conn);
