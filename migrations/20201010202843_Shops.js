
exports.up = function(knex) {
  return knex.schema.createTable('shops', function(table){
    table.increments('id');
    table.string('logo', 255);
    table.string('name', 100);
    table.string('description', 255);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('shops');
};
