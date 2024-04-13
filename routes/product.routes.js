const express = require('express');
const router = express.Router();
const { getProducts, addProduct, getProduct, updateProduct, deleteProduct } = require('../controllers/product.controller.js');

router.get('/', getProducts);
router.post('/', addProduct);
router.get("/:id", getProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;