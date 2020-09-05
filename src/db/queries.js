const knex = require("./knex");

module.exports = {
  users: {
    getAll: function () {
      return knex("profile")
        .join("members", "profile.member_id", "=", "members.member_id")
        .join(
          "membertype",
          "profile.member_type_id",
          "=",
          "membertype.member_type_id"
        )
        .orderBy("profile.member_id");
    },
    getById: function (id) {
      return knex("profile")
        .join("members", "profile.member_id", "=", "members.member_id")
        .join(
          "membertype",
          "profile.member_type_id",
          "=",
          "membertype.member_type_id"
        )
        .where("profile.member_id", id)
        .first();
    },
    createUser: function (user) {
      return knex("profile").insert(user).returning("*");
    },
    // editUser: function (user) {
    //   return knex("members");
    // },
  },
};
