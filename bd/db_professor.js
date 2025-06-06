const open_connection = require('./db');

const conn = open_connection();

function criar_tabela_professor(connection) {
    const sql = `
        CREATE TABLE IF NOT EXISTS professor  (
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
        console.log('Tabela professor criada com sucesso ou já existente');
    });
}


function criar_tabela_atividades(connection) {
    const sql = `
        CREATE TABLE IF NOT EXISTS atividades  (
            id INT AUTO_INCREMENT PRIMARY KEY,
            conteudo VARCHAR(100)
        )
    `;

    connection.query(sql, function(err) {
        if (err) {
            console.error('Erro ao criar tabela: ' + err.message);
            return;
        }
        console.log('Tabela atividades criada com sucesso ou já existente');
    });
}

function adicionar_aluno(connection,nome,matricula) {
    const sql = `
    INSERT INTO aluno (nome,matricula)
    VALUES (?, ?)
`;

connection.query(sql, [nome,matricula], function(err, results) {
    if (err) {
        console.error('erro ao inserir aluno: ' + err.message);
        return;
    }
    console.log('aluno adicionado com sucesso. ID:', results.insertId);
});
}

function adicionar_atividade(connection,conteudo) {
    const sql = `
    INSERT INTO atividades (conteudo)
    VALUES (?)
`;

connection.query(sql, [conteudo], function(err, results) {
    if (err) {
        console.error('erro ao inserir atividade: ' + err.message);
        return;
    }
    console.log('atividade adicionado com sucesso. ID:', results.insertId);
});
}

function adicionar_monitor(connection,nome,matricula) {
    const sql = `
    INSERT INTO monitor (nome,matricula)
    VALUES (?,?)
`;

connection.query(sql, [nome,matricula], function(err, results) {
    if (err) {
        console.error('erro ao inserir monitor: ' + err.message);
        return;
    }
    console.log('monitor adicionado com sucesso. ID:', results.insertId);
});
}

function apagar_monitor(connection, id) {
    const sql = `
        DELETE FROM monitor
        WHERE id = ?
    `;

    connection.query(sql, [id], function(err) {
        if (err) {
            console.error('Erro ao apagar monitor:', err.message);
            return;
        }
            console.log('Monitor apagado com sucesso.');
    });
}

function apagar_aluno(connection, id) {
    const sql = `
        DELETE FROM aluno
        WHERE id = ?
    `;

    connection.query(sql, [id], function(err) {
        if (err) {
            console.error('Erro ao apagar aluno:', err.message);
            return;
        }
            console.log('aluno apagado com sucesso.');
    });
}
function apagar_atividade(connection, id) {
    const sql = `
        DELETE FROM atividades
        WHERE id = ?
    `;

    connection.query(sql, [id], function(err) {
        if (err) {
            console.error('Erro ao apagar atividade:', err.message);
            return;
        }
            console.log('atividade apagada com sucesso.');
    });
}

function atualizar_nome_monitor(connection,novo_nome,id) {
    const sql = `
        UPDATE MONITOR 
        SET nome = ? 
        WHERE id = ?
    `;

    connection.query(sql, [novo_nome, id], function(err) {
        if (err) {
            console.error('erro ao mudar o nome do monitor:', err.message);
            return;
        }

        console.log('nome do monitor mudado com sucesso.');
})
}


criar_tabela_professor(conn)
criar_tabela_atividades(conn)
adicionar_aluno(conn,'sibaldo',189321)
adicionar_atividade(conn,"faça um apesquisa sobre js")
adicionar_monitor(conn,"malkon",123)
apagar_monitor(conn,2)
apagar_atividade(conn,1)
apagar_aluno(conn,2)
atualizar_nome_monitor(conn,"oi",1)