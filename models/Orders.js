const db = require('../lib/database');

module.exports = {
    // get all orders
    getAllOrders : function(){
        return db('orders');
    },
    // create a Orders
    createOrders : function(order){
        return db('orders').insert(order);
    },
    // update a Orders
    updateOrders : function(id, order){
        return db('orders').where({
            id
        }).update(order);
    },
    // delete a Orders
    deleteOrders : function(id){
        return db('orders').where({id}).delete();
    }
};