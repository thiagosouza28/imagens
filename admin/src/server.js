const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db-moura'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

app.get('/services', (req, res) => {
  connection.query('SELECT * FROM services', (err, results) => {
    if (err) {
      console.error('Erro ao buscar serviços do banco de dados:', err);
      res.status(500).json({ error: 'Erro ao buscar serviços' });
      return;
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
