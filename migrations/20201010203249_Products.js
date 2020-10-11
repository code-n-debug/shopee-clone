
exports.up = function(knex) {
    return knex.schema.createTable('products', function(table){
        table.increments('id');
        table.integer('shop_id');
        table.string('image', 255);
        table.string('name', 100);
        table.integer('qty')
        table.double('price');
        table.string('description', 255);
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('products');
};
