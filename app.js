const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

require('dotenv').config();

// Init App
const app = express();

// Import Routes
const carRoutes = require('./routes/car.routes');

// App middlewear
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors());
app.use(morgan('dev'));


// Connect to DB
mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log('DB Connected...'))
    .catch(error => console.log('DB connection error', error))

// Use Routes
app.use('/api', carRoutes);

// Port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));