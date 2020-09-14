exports.up = function (knex) {
    return knex.schema.createTable("membertype", (table) => {
      table.increments("member_type_id");
      table.string("member_type", 50);
      table.string("cost", 50);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("membertype");
  };