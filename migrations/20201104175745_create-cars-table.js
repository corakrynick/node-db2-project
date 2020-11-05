
exports.up = function(knex) {
    //the change we want to make to our schema
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.text('VIN', 17)
        .unique()
        .notNullable();
      tbl.text('Make')
        .notNullable();
      tbl.text('Model')
        .notNullable();
      tbl.text('Mileage');
  });
};

exports.down = function(knex) {
    //undoing that change
    return knwx.schema.dropTableIfExists('cars')
};
