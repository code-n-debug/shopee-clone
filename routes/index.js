const express = require('express');
const router = express.Router();
const Shops = require('../models/Shops');

router.get('/', async (req, res)=>{
    const allShops = await Shops.getAllShop();
    res.render('index', {
        shops: allShops
    });
});

router.use('/shops', require('./products'));
router.use('/checkout', require('./checkout'));


module.exports = router;