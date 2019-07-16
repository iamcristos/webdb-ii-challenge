const response = require('../helper/response');
const db = require('../data/db');

async function validateId(req,res,next) {
    const { id } = req.params;
    if(!Number(id)) {
        return response.errorHelper(res, 400, "Invalid Id type")
    };
    try {
        const carDealer = await db.getCardDealer(id)
        if(!carDealer) {
            return response.errorHelper(res, 404, "Car Dealer does not exist")
        }
        req.car = carDealer
    } catch (error) {
        return response.errorHelper(res, 500, "Error cannot find car dealer")
    }

    next()
};

async function validateBody(req, res, next) {
    const { body } = req;
    const {make, vin, model, mileage} = body
    if(!Object.keys(body).length) {
        return response.errorHelper(res, 400, "Empty Body")
    } if(!make || !vin || !model || !mileage) {
        return response.errorHelper(res, 400, "make vin model and mileage are all required")
    } if(typeof(make) !== 'string'|| typeof(model) !== 'string'||
         typeof(mileage) !== 'string' || !Number(vin)) {
             return response.errorHelper(res, 400, "Invalid file type")
    } 
    try {
        const carDealer = await db.getCardDealerVIN(vin)
        if(carDealer.length) {
            return response.errorHelper(res, 400, "Car dealer already exists")
        }
    } catch (error) {
        return response.errorHelper(res, 500, "Error cannot post")
    }

    next()
}

module.exports = {
    validateId,
    validateBody
}