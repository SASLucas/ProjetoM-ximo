const mysql = require('mysql2')

function open_connection(){
    console.log('conectando')
    const connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        database:'db'
    })
    connection.connect(function(err){
        if(err){
            console.error('falha ao conectar'+ err) 
        }
        console.log('sucesso ao conectar')
    })
    return connection
}

module.exports = open_connection;