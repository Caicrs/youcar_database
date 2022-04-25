const mongoose = require('mongoose');

function connectToDatabase() {
    mongoose.connect('mongodb://0.0.0.0:27017/cars-db', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('MONGO DB CONECTADO');
      })
      .catch((err) => {
        return console.log(`Erro na conexao com o banco: ${err}`);
      });
  }

  module.exports = connectToDatabase;
