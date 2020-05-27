const Product = require('../models/product.model');

module.exports.getProducts = async(req, res) => {
    const products = await Product.find();
    products.sort((a, b) => {
        return a.ID - b.ID;
    });
    var productChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < products.length; i += chunkSize) {
        productChunks.push(products.slice(i, i + chunkSize));
    }
    res.render('product/index', { products: productChunks });
}