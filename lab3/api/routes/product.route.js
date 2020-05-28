const express = require('express');
const router = express.Router();
const multer = require('multer');

const Product = require('../models/product.model');
const ProductController = require('../controllers/product.controller');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Images');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg');
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});


router.post('/:productId/uploadimage', upload.single('Image'), ProductController.uploadImage);

router.get('/getall', ProductController.getall);

router.patch('/edit', ProductController.edit);

router.get('/details/:productId', ProductController.details);

router.delete('/delete/:productId', ProductController.delete);

router.post('/create', multer({storage: storage}).single('image'), ProductController.create);

module.exports = router;