exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("payment")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("payment").insert([]);
    });
};