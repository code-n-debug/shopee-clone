const db = require('../lib/database');

module.exports = {
    // get shop 
    getShop : function(id){
        return db('shops').where({id}).first();
    },
    // get all shops
    getAllShop : function(){
        return db('shops');
    },
    // create a shop
    createShop : function(shop){
        return db('shops').insert(shop);
    },
    // update a shop
    createShop : function(id, shop){
        return db('shops').where({
            id
        }).update(shop);
    },
    // delete a shop
    deleteShop : function(id){
        return db('shops').where({id}).delete();
    }
};