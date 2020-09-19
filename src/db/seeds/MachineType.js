
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('machine_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('machine_type').insert([
        {
          machine_type_id: '1',
          member_type_name: 'running'
        }
      ]);
    });
};
