const express = require('express');
const port = 3000;
const app = express();
const routes = require('./src/router/cars.route');
const cors = require('cors');
const connectToDatabase = require('./src/database/database')

app.use(cors());
app.use(express.json());

connectToDatabase();

app.use('/cars', routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
