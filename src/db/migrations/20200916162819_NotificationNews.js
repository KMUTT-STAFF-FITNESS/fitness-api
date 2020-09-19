
exports.up = function(knex) {
  return knex.schema.createTable('notification_news', (table) => {
      table.increments('news_id'),
      table.string('message_title',100),
      table.string('content', 250),
      table.string('create_at',50),
      table.string('author',100)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('notification_news')
};
