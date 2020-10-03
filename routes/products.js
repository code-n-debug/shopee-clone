const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('products');
});

router.get('/:id', (req, res)=>{
    res.render('product-page');
});


module.exports = router;