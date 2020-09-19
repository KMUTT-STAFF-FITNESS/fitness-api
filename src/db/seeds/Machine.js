
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('machine').del()
    .then(function () {
      // Inserts seed entries
      return knex('machine').insert([
        {
          machine_id: '1',
          machine_type_id: '1',
          machine_name: 'mr. running'
        }
      ]);
    });
};
