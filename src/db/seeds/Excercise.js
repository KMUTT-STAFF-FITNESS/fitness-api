
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('exercise').del()
    .then(function () {
      // Inserts seed entries
      return knex('exercise').insert([
        {
          exercise_id: '1',
          member_id: '1',
          machine_id: '1',
          date: '16/09/2563'
        },
      ]);
    });
};
