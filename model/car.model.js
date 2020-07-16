const mongoose = require('mongoose');
const Schema = mongoose.Schema

const carSchema = new Schema({
    model: {
        type: Number,
        min: 4
    },
    make: {
        type: String,
        min: 3
    },
    colour: {
        type: String,
        min: 3
    }
}, {timestamps: true})

module.exports = mongoose.model('Car', carSchema);