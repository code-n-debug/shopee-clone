const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index');
});

router.use('/products', require('./products'));

router.get('/shops', (req, res)=>{
    res.render('shops');
});

router.get('/checkout', (req, res)=>{
    res.render('checkout');
});


module.exports = router;