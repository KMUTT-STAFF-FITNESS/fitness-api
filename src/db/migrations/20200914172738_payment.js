exports.up = function (knex) {
    return knex.schema.createTable("payment", (table) => {
      table.increments("payment_id");
      table.string("member_id", 50);
      table.string("receipt_path", 50);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("payment");
  };