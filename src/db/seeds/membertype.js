exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('membertype').del()
    .then(function () {
      // Inserts seed entries
      return knex('membertype').insert([
        {member_type_id: 1, member_type: 'รายปี', cost: '100'},
        {member_type_id: 2, member_type: 'ตลอดชีพ',cost: '500'},
        
      ]);
    });
};