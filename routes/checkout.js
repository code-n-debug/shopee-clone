const express = require('express');
const router = express.Router();
const Products = require('../models/Products');
const Orders = require('../models/Orders');

router.get('/:shop_id/:product_id', async (req, res)=>{
    const productObject = await Products.getProduct(req.params.shop_id, req.params.product_id);

    res.render('checkout', {
        product: productObject,
        qty: req.query.qty
    });
});

router.post('/', async(req, res)=>{
    try{
        const orderObject = await Orders.createOrders(req.body);
        res.render('success');
    }catch(e){
        res.render('fail');
    }
});

module.exports = router;