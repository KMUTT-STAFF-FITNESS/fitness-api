exports.seed = function (knex, Promise) {
  return knex("members")
    .del()
    .then(function () {
      return knex("members").insert([
        { member_id: 1, role_id: 1, username: "test", password: "test" },
      ]);
    });
};