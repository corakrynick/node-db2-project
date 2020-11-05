
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '12345678901234567', Make: 'Ford', Model: 'Mustang', Mileage: '10,000'},
        {VIN: '12345678901234568', Make: 'Nissan', Model: 'GTR', Mileage: '1,000'},
        {VIN: '12345678901234569', Make: 'Audi', Model: 'R8', Mileage: '10'}
      ]);
    });
};
