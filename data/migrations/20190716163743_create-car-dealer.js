
exports.up = function(knex) {
  return knex.schema.createTable('car-dealer', tbl=>{
      tbl.increments();
      tbl.text('make', 225).notNullable();
      tbl.integer('vin', 225).unique().notNullable();
      tbl.text('model', 225).notNullable();
      tbl.text('mileage', 225).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('accounts');
};
