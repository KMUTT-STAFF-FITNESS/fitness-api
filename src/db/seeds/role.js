exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("role")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("role").insert([
        { role_id: 1, role: "superadmin" },
        { role_id: 2, role: "admin" },
        { role_id: 3, role: "member" },
      ]);
    });
};