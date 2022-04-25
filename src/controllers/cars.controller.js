const carsService = require('../services/cars.service');
const mongoose = require('mongoose');
// ________________________________ FIND CARS CONTROLLER ________________________
const findCarsController = async (req, res) => {
  const allCars = await carsService.findCar();

  if (allCars.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum carro cadastrado !' });
  }

  res.send(allCars);

};
// ________________________________ FIND CARS BY ID CONTROLLER ________________________
const findCarsByIdController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res.status(404).send({ message: 'Id Invalido!' });
    return;
   
  }
  
  
  const chosenCar = await carsService.findCarsByIdService(idParam);
  if (!chosenCar) {
    return res.status(404).send({ message: 'Carro não encontrado!' });
  }

 

  res.send(chosenCar);

  

};
// ________________________________ CREATE CAR CONTROLLER ________________________
const createCarController = async (req, res) => {
  const car = req.body;
  const newCar = await carsService.createCarService(car);
  console.log(newCar)
  res.status(201).send(newCar);

 

};
// ________________________________ UPDATE CAR CONTROLLER ________________________
const updateCarController = async (req, res) => {
  const idParam = req.params.id;
  const carEdit = req.body;

  const updatedCar = await carsService.updateCarService(idParam, carEdit);
  res.send(updatedCar);

};
// ________________________________ DELETE CAR CONTROLLER ________________________
const deleteCarController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res.status(404).send({ message: 'Id inválido!' });
    return ;
  }
  const chosenCar = await carsService.findCarsByIdService(idParam);

  if (!chosenCar) {
    return res.status(404).send({ message: 'Carro não encontrado!' });
  }
  
  await carsService.deleteCarService(idParam);

  res.send({ message: 'Carro deletado com sucesso!' });


};

module.exports = {
  findCarsController,
  findCarsByIdController,
  createCarController,
  updateCarController,
  deleteCarController,
};
