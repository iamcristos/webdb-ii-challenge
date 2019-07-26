
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('car-dealer').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('car-dealer').insert([
        {make: 'Toyota', vin: '123401', model: 'Camery', mileage: '17000km'}
      ]);
    });
};
