const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  
    next();


  
};

const validObjectBody = (req, res, next) => {
  const car = req.body;
  if (
    !car ||
    !car.modelo ||
    !car.ano ||
    !car.km ||
    !car.combustivel ||
    !car.cambio ||
    !car.localizacao ||
    !car.descricao ||
    !car.foto ||
    !car.preco
  ) {
 
    return res.status(400).send({ message: 'Envie o todos os campos do carro!' })
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
