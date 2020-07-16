const express = require('express')
const router = express.Router();

// Import Controllers
const { getAllCars, createCar, deleteSingleCar, updateCarInfo } = require('../controllers/car.controllers.js')

// Return all the cars in our database
router.get('/cars', getAllCars)
router.post('/cars/new', createCar)
router.delete('/cars/delete/:_id', deleteSingleCar)
router.put('/cars/update', updateCarInfo)

module.exports = router;