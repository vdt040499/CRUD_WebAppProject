const express = require('express');
const multer = require('multer');
const router = express.Router();

const productControllers = require('../controllers/product.controller');
const productValidations = require('../validate/product.validate');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg');
    }
});

const upload = multer({ storage: storage });

router.get('/product', productControllers.getProducts);
router.get('/product2', productControllers.getProducts2);
router.get('/create', productControllers.create);
router.post('/create', upload.single('image'), productValidations.create, productControllers.createPost);
router.get('/:productId', productControllers.detail);
router.get('/edit/:productId', productControllers.edit);
router.put('/edit/:productId', productControllers.editPost);

module.exports = router;