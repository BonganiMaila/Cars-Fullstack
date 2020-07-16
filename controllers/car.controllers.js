const Car = require('../model/car.model');

// Get all cars from db
const getAllCars = (req, res) => {
    Car.find().exec((err, cars) => {
        if (err) {
            return res.status(400).json({
                error: 'Failed to retrieve cars'
            })
        }

        return res.status(200).json(cars);
    })
}

// Add a car
const createCar = (req, res) => {
    const {model, make, colour} = req.body;

    // create Car instance
    const newCar = new Car({model, make, colour});
    
    newCar.save((err, car) => {
        if (err) {
            return res.status(401).json({
                error: 'Failed to create a car'
            })
        }

        return res.status(200).json({
            message: 'Car created succesfully!'
        })
    })
}

//Delete car
const deleteSingleCar = (req, res) => {
    const {_id} = req.params;

    Car.findByIdAndDelete(_id).exec((err, deletedCar) =>{
        if (err) {
            return res.status(401).json({
                error: 'Failed to delete this car'
            })
        }

        return res.status(200).json({
            message: 'Car delete succesfully!'
        })
    })
}

//Update Car 
const updateCarInfo = (req,res) => {
    const{model, make, colour} = req.params;

    car.save((err, car) => {
        if (err) {
            return res.status(401).json({
                error: 'Failed to update car information'
            })
        }

        return res.status(200).json({
            message: 'Car update car information!'
        })
    })
    
}

module.exports = {
    getAllCars,
    createCar,
    deleteSingleCar,
    updateCarInfo
}