exports.up = function(knex) {
    return knex.schema.createTable('profile', (table) => {
        table.increments('profile_id')
        table.string('member_id',50)
        table.string('member_type_id',50)
        table.string('fname',50)
        table.string('lname',50)
        table.string('dob',50)
        table.string('email',100)
        table.enum('gender',['male','female']).notNullable().defaultTo('male')
        table.string('tel_no',50)
        table.string('weight',50)
        table.string('height',50)
        table.string('address',300)
        table.string('department',300)
        table.string('disease',100)
        table.string('disease_detail',300)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('profile')
};