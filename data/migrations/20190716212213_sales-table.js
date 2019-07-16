
exports.up = function(knex) {
    return knex.schema.createTable('sales-table', tbl=>{
        tbl.increments();
        tbl.integer('price', 225).notNullable();
        tbl.integer('carId', 225).notNullable()
            .references('id').inTable('car-dealer')
        tbl.text('description', 225).notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('sales-table')
};
