
exports.up = function(knex) {
  return knex.schema.alterTable('car-dealer', tbl=>{
      tbl.text('type');
      tbl.string('status');
  })
};

exports.down = function(knex) {
  return knex.schema.alterTable('car-dealer', tbl=>{
      tbl.dropColumns('type');
      tbl.dropColumns('status');
  })
};
