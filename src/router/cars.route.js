const route = require('express').Router();
const controllerCars = require('../controllers/cars.controller');
const { validId, validObjectBody } = require('../middlewares/cars.middleware');

route.get('/all-car', controllerCars.findCarsController);

route.get('/find-car/:id',validId, controllerCars.findCarsByIdController);

route.post('/create-car',validObjectBody, controllerCars.createCarController);

route.put('/update-car/:id', validId,validObjectBody,controllerCars.updateCarController);

route.delete('/delete-car/:id',validId, controllerCars.deleteCarController);

module.exports = route;


