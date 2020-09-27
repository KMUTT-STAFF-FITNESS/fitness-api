const { table } = require("../knex");

exports.up = function (knex) {
  return knex.schema.createTable("howtoplay", (table) => {
    table.increments("howtoplay_id"),
      table.string("machine_group_id", 100),
      table.string("detail", 1000),
      table.string("video_path", 250),
      table.string("muscles", 100),
      table.string("note", 100),
      table.string("breath", 100);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("howtoplay");
};
