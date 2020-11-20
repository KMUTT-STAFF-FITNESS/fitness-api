exports.up = function (knex) {
  return knex.schema.createTable("notification_news", (table) => {
    table.increments("news_id"),
      table.string("message_title", 100),
      table.string("content", 1000),
      table.timestamp("create_at").defaultTo(knex.fn.now());
    table.string("author", 100);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("notification_news");
};
