const express = require('express');
const router = express.Router();
const path = require('path');
const adminController = require('../controllers/admin');
const products = [];

router.get('/add-product', adminController.getAddProduuct);
router.get('/products', adminController.getProducts);

router.post('/add-product', adminController.postAddProduct);

module.exports = router;