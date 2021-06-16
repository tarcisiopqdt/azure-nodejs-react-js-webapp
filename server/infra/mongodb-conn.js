const mongoose = require('mongoose')
const { DB_CONN } = process.env

function connect() {

  const conn = mongoose.connect(DB_CONN, { useUnifiedTopology: true, useNewUrlParser: true })
  conn.then(() => { console.log('Conectado ao MongoDB com sucesso!!!') }).catch(err => console.error('ERRO ao connectar ao MongoDB', err))
  return conn;
}

module.exports = {
  connect,
  mongoose
};
