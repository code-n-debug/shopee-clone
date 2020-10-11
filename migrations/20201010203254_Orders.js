
exports.up = function(knex) {
    return knex.schema.createTable('orders', function(table){
        table.increments('id');
        table.integer('product_id');
        table.integer('qty')
        table.string('fullname', 100);
        table.string('cardno', 20);
        table.string('cardexp', 10);
        table.string('cvv', 3);
        table.string('address');
        table.datetime('created_date').defaultTo(knex.fn.now());
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('orders');
};
