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
    res.render('product/product', { products: productChunks });
}

module.exports.getProducts2 = async(req, res) => {
    const products = await Product.find();
    products.sort((a, b) => {
        return a.ID - b.ID;
    });
    var productChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < products.length; i += chunkSize) {
        productChunks.push(products.slice(i, i + chunkSize));
    }
    res.render('product/product2', { products: productChunks });    
}

module.exports.create = async(req, res) => {
    res.render('product/create');
}

module.exports.createPost = async(req, res) => {
    const product = new Product({
        ID: req.body.id,
        name: req.body.name,
        price: req.body.price,
        brand: req.body.brand,
        amount: req.body.amount,
        description: req.body.description,
        image: req.file.path  
    });

    product.save();

    res.redirect('/products/product2');
}

module.exports.detail = async(req, res) => {
    const product = await Product.findById(req.params.productId);
    res.render('product/detail', { product: product });
}

module.exports.edit = async(req, res) => {
    const product = await Product.findById(req.params.productId);

    res.render('product/edit', { product: product });
}

module.exports.editPost = async(req, res) => {
    res.render('')
}
