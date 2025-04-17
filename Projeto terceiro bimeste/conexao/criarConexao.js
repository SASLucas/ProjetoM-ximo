function abrirConexao(config, callbackErro){
    const con = mysql.createConnection(config);
  
    con.connect(callbackErro)
  
    return con
  }

const callbackErro = function(err) {
    if (err) {
      console.error('Erro ao conectar ao banco de dados: ' + err.stack);
      return;
    }
    console.log('Conexão bem-sucedida');
  };

const config = {
    host: '', 
    user: '',
    password: '',
    database: ''
}