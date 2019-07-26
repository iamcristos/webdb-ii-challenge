const db = require('./dbConfig');

function getCardealers() {
    return db('car-dealer')
};

function getCardDealer(id) {
    return db('car-dealer')
            .where({id})
            .first()
}

function getCardDealerVIN(vin) {
    return db('car-dealer')
            .where({vin})
}

function addCardDealer(cardDealer) {
    return db('car-dealer')
            .insert(cardDealer)
            .then(id=> getCardDealer(id[0]))
}
module.exports = {
    getCardealers,
    getCardDealer,
    getCardDealerVIN,
    addCardDealer
}