const express = require('express');
const productController = require('./controllers/product.controller');

const router = express.Router();

router.get('/', productController.getProducts);
router.post('/', productController.createProduct);
router.get('/:productId', productController.getProductByID);
router.put('/:productId', productController.updateProduct);
router.delete('/:productId', productController.deleteProduct);

module.exports = router;
