const db = require('../data/db');
const response = require('../helper/response');

async function getCarDealers(req, res) {
    try {
        const carDealer = await db.getCardealers()
        return response.successHelper(res, 200, carDealer)
    } catch (error) {
        return response.errorHelper(res, 500, "Error cannot get car dealers")
    }
}

async function getCarDealer(req, res) {
    return response.successHelper(res, 200, req.car)
}

async function addCarDealer(req, res) {
    const {body} = req;
    try {
        const newCarDealer = await db.addCardDealer(body)
        return response.successHelper(res, 201, newCarDealer)
    } catch (error) {
        return response.errorHelper(res, 500, "Error cannot add car dealer")
    }
}


module.exports = {
    getCarDealers,
    getCarDealer,
    addCarDealer
}