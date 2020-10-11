const express = require('express');
const router = express.Router();
const Products = require('../models/Products');
const Shop = require('../models/Shops');

router.get('/:id', async (req, res)=>{
    const shopProducts = await Products.getShopProducts(req.params.id);
    const shopDetails = await Shop.getShop(req.params.id);
    res.render('products', {
        shop: shopDetails,
        products: shopProducts
    });
});

router.get('/:shop_id/product/:product_id', async (req, res)=>{
    const productObject = await Products.getProduct(req.params.shop_id, req.params.product_id);
    res.render('product-page', {
        product: productObject
    });
});


module.exports = router;