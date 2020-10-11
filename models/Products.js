const db = require('../lib/database');

module.exports = {
    // get product
    getProduct : function(shop_id, product_id){
        return db('products').where({
            shop_id: shop_id, //search for shop id and
            id: product_id    //search for product id
        }).first();
    },
    // get all products
    getShopProducts : function(id){
        return db('products').where({shop_id: id});
    },
    // get all products
    getAllProducts : function(){
        return db('products');
    },
    // create a Products
    createProducts : function(Products){
        return db('products').insert(Products);
    },
    // update a Products
    updateProducts : function(id, Products){
        return db('products').where({
            id
        }).update(Products);
    },
    // delete a Products
    deleteProducts : function(id){
        return db('products').where({id}).delete();
    }
};