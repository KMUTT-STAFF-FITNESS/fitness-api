
exports.up = function(knex) {
  return knex.schema.createTable("nfc",(table) =>{
     table.string('nfc_id',50) 
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('nfc')
};
