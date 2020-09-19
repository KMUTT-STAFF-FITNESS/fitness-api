
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('nfc').del()
    .then(function () {
      // Inserts seed entries
      return knex('nfc').insert([
        {nfc_id: '1234'}
        
      ]);
    });
};
