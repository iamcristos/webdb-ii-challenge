const express = require('express');
const route = express.Router();
const {
    getCarDealers,
    getCarDealer,
    addCarDealer
} = require('../controller/car');

const {
    validateId,
    validateBody
} = require('../middleware/car');


route.get('/', getCarDealers);
route.get('/:id', validateId, getCarDealer);
route.post('/', validateBody, addCarDealer)

module.exports = route