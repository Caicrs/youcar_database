// ________________________________ DATABASE ________________________


const Paleta = require('../models/Paleta');
// ________________________________ FIND CAR ________________________
const findCar = async () => {
  const cars = await Paleta.find();
  return cars;
};


// ________________________________ FIND CARS BY ID ________________________
const findCarsByIdService = async (idParam) => {
  const takeCar = await Paleta.findById(idParam);
  return takeCar;


};

// ________________________________ CREATE CAR ________________________
const createCarService = async (newCar) => {

  const CarCriado = await Paleta.create(newCar)
  return CarCriado;
};

// ________________________________ UPDATE CAR ________________________
const updateCarService = async(id, carEdited) => {
  const CarAtualizado = await Paleta.findByIdAndUpdate(id, carEdited);
  return CarAtualizado;
};

// ________________________________ DELETE CAR ________________________
const deleteCarService = async (id) => {
 
  return await Paleta.findByIdAndDelete(id);
};

module.exports = {
  findCar,
  findCarsByIdService,
  createCarService,
  updateCarService,
  deleteCarService,
};
