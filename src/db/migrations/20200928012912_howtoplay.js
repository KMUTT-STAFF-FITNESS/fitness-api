const { table } = require("../knex");

exports.up = function (knex) {
  return knex.schema.createTable("howtoplay", (table) => {
    table.increments("howtoplay_id"),
      table.string("machine_group_id", 100),
      table.string("detail", 500),
      table.string("video_path", 250);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("howtoplay");
};
