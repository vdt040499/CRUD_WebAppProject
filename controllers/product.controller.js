const Product = require('../models/product.model');

module.exports.getProducts = async(req, res) => {
    var products = await Product.find();
    products.sort((a, b) => {
        return a.ID - b.ID;
    });
    var newProducts = products.map(product => ({
        _id: product._id,
        ID: product.ID,
        name: product.name,
        price: product.price.toLocaleString('vi', {style : 'currency', currency : 'VND'}),
        brand: product.brand,
        amount: product.amount,
        description: product.description,
        image: product.image
    }));
    var productChunks = [];
    var chunkSize = 3;
    for (let i = 0; i < newProducts.length; i += chunkSize) {
        productChunks.push(newProducts.slice(i, i + chunkSize));
    }
    res.render('product/product', { products: productChunks });
}

module.exports.getProducts2 = async(req, res) => {
    var products = await Product.find();
    products.sort((a, b) => {
        return a.ID - b.ID;
    });
    var newProducts = products.map(product => ({
        _id: product._id,
        ID: product.ID,
        name: product.name,
        price: product.price.toLocaleString('vi', {style : 'currency', currency : 'VND'}),
        brand: product.brand,
        amount: product.amount,
        description: product.description,
        image: product.image
    }));
    var productChunks = [];
    var chunkSize = 3;
    for (let i = 0; i < newProducts.length; i += chunkSize) {
        productChunks.push(newProducts.slice(i, i + chunkSize));
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

module.exports.deleteProduct = async(req,res) => {
    const deleteProduct = await Product.deleteOne({_id: req.params.productId});
    console.log(deleteProduct);
    res.redirect('/products/product2');
}
module.exports.editPost = async(req, res) => {
    const message = [];
    const product = await  Product.findById(req.params.productId);
    if (product.name === req.body.name) {
        if (product.price === parseInt(req.body.price)) {
            if (product.brand === req.body.brand) {
                if (product.amount === parseInt(req.body.amount)) {
                    if (product.description === req.body.description) {
                        message.push('You changed nothing');
                        res.render('product/edit',
                         { 
                            product: product ,
                            message: message
                         });
                    } else {
                        product.description = req.body.description;
                        product.save();
                        message.push('You changed description successfully');
                        res.render('product/detail',
                            {
                                product: product,
                                message: message
                            });
                    }
                } else {
                    if (product.description === req.body.description) {
                        product.amount = req.body.amount;
                        product.save();
                        message.push('You changed amount successfully');
                        res.render('product/detail',
                            {
                                product: product,
                                message: message
                            });
                    } else {
                        product.amount = req.body.amount;
                        product.description = req.body.description;
                        product.save();
                        message.push('You changed amount and description successfully');
                        res.render('product/detail',
                            {
                                product: product,
                                message: message,
                            });
                    }
                }
            } else {
                if (product.amount === parseInt(req.body.amount)) {
                    if (product.description === req.body.description) {
                        product.brand = req.body.brand;
                        product.save();
                        message.push('You changed brand successfully');
                        res.render('product/detail',
                            {
                                product: product,
                                message: message
                            });
                    } else {
                        product.brand = req.body.brand;
                        product.description = req.body.description;
                        product.save();
                        message.push('You changed brand and description successfully');
                        res.render('product/detail',
                            {
                                product: product,
                                message: message
                            });
                    }
                } else {
                    if (product.description === req.body.description) {
                        product.brand = req.body.brand;
                        product.amount = req.body.amount;
                        product.save();
                        message.push('You changed brand and amount successfully');
                        res.render('product/detail',
                            {
                                product: product,
                                message: message
                            });
                    } else {
                        product.brand  = req.body.brand;
                        product.amount = req.body.amount;
                        product.description = req.body.description;
                        product.save();
                        message.push('You changed brand, amount and description successfully')
                        res.render('product/detail',
                            {
                                product: product,
                                message: message
                            });
                    }
                }
            }
        } else {
            if (product.brand === req.body.brand) {
                if (product.amount === parseInt(req.body.amount)) {
                    if (product.description === req.body.description) {
                        product.price = req.body.price;
                        product.save();
                        message.push('You changed price successfully');
                        res.render('product/detail',
                            {
                                product: product,
                                message: message
                            });
                    } else {
                        product.price = req.body.price;
                        product.description = req.body.description;
                        product.save();
                        message.push('You changed price and description successfully')
                        res.render('product/detail',
                            {
                                product: product,
                                message: message
                            });
                    }
                } else {
                    if (product.description === req.body.description) {
                        product.price = req.body.price;
                        product.amount = req.body.amount;
                        product.save();
                        message.push('You changed price and amount successfully');
                        res.render('product/detail',
                            {
                                product: product,
                                message: message
                            });
                    } else {
                        product.price = req.body.price;
                        product.amount = req.body.amount;
                        product.description = req.body.description;
                        product.save();
                        message.push('You changed price, amount and description successfully');
                        res.render('product/detail',
                            {
                                product: product,
                                message: message
                            });
                    }
                }
            } else {
                if (product.amount === parseInt(req.body.amount)) {
                    if (product.description === req.body.description) {
                        product.price = req.body.price;
                        product.brand = req.body.brand;
                        product.save();
                        message.push('You changed price and brand successfully');
                        res.render('product/detail',
                            {
                                product: product,
                                message: message
                            });
                    } else {
                        product.price = req.body.price;
                        product.brand = req.body.brand;
                        product.description = req.body.description;
                        product.save();
                        message.push('You changed price, brand and description successfully');
                        res.render('product/detail',
                            {
                                product: product,
                                message: message
                            });
                    }
                } else {
                    if (product.description === req.body.description) {
                        product.price = req.body.price;
                        product.brand = req.body.brand;
                        product.amount = req.body.amount;
                        product.save();
                        message.push('You changed price, brand and amount successfully');
                        res.render('product/detail',
                            {
                                product: product,
                                message: message
                            });
                    } else {
                        product.price  = req.body.price;
                        product.brand = req.body.brand;
                        product.amount = req.body.amount;
                        product.description = req.body.description;
                        product.save();
                        message.push('You changed price, brand, amount and description successfully');
                        res.render('product/detail',
                            {
                                product: product,
                                message: message
                            });
                    }
                }
            }
        }
    } else {
        if (product.price === parseInt(req.body.price)) {
            if (product.brand === req.body.brand) {
                if (product.amount === parseInt(req.body.amount)) {
                    if (product.description === req.body.description) {
                        product.name = req.body.name;
                        product.save();
                        message.push('You changed name successfully');
                        res.render('product/detail',
                            {
                                product: product,
                                message: message
                            });
                    } else {
                        product.name = req.body.name;
                        product.description = req.body.description;
                        product.save();
                        message.push('You changed name and description successfully');
                        res.render('product/detail',
                            {
                                product: product,
                                message: message
                            });
                    }
                } else {
                    if (product.description === req.body.description) {
                        product.name = req.body.name;
                        product.amount = req.body.amount;
                        product.save();
                        message.push('You changed name and amount successfully');
                        res.render('product/detail',
                            {
                                product: product,
                                message: message
                            });
                    } else {
                        product.name = req.body.name;
                        product.amount = req.body.amount;
                        product.description = req.body.description;
                        product.save();
                        message.push('You changed name, amount and description successfully');
                        res.render('product/detail',
                            {
                                product: product,
                                message: message
                            });
                    }
                }
            } else {
                if (product.amount === parseInt(req.body.amount)) {
                    if (product.description === req.body.description) {
                        product.name = req.body.name;
                        product.brand = req.body.brand;
                        product.save();
                        message.push('You changed name and brand successfully');
                        res.render('product/detail',
                            {
                                product: product,
                                message: message
                            });
                    } else {
                        product.name = req.body.name;
                        product.brand = req.body.brand;
                        product.description = req.body.description;
                        product.save();
                        message.push('You changed name, brand and description successfully');
                        res.render('product/detail',
                            {
                                product: product,
                                message: message
                            });
                    }
                } else {
                    if (product.description === req.body.description) {
                        product.name = req.body.name;
                        product.brand = req.body.brand;
                        product.amount = req.body.amount;
                        product.save();
                        message.push('You changed name, brand and amount successfully');
                        res.render('product/detail',
                            {
                                product: product,
                                message: message
                            });
                    } else {
                        product.name = req.body.name;
                        product.brand = req.body.brand;
                        product.amount = req.body.amount;
                        product.description = req.body.description;
                        product.save();
                        message.push('You changed name, brand, amount and description successfully');
                        res.render('product/detail',
                            {
                                product: product,
                                message: message
                            });
                    }
                }
            }
        } else {
            if (product.brand === req.body.brand) {
                if (product.amount === parseInt(req.body.amount)) {
                    if (product.description === req.body.description) {
                        product.name = req.body.name;
                        product.price = req.body.price;
                        product.save();
                        message.push('You changed name and price successfully');
                        res.render('product/detail',
                            {
                                product: product,
                                message: message
                            });
                    } else {
                        product.name =req.body.name;
                        product.price = req.body.price;
                        product.description = req.body.description;
                        product.save();
                        message.push('You changed name, price and description successfully');
                        res.render('product/detail',
                            {
                                product: product,
                                message: message
                            });
                    }
                } else {
                    if (product.description === req.body.description) {
                        product.name = req.body.name;
                        product.price = req.body.price;
                        product.amount = req.body.amount;
                        product.save();
                        message.push('You changed name, price and amount successfully');
                        res.render('product/detail',
                            {
                                product: product,
                                message: message
                        });
                    } else {
                        product.name = req.body.name;
                        product.price = req.body.price;
                        product.amount = req.body.amount;
                        product.description = req.body.description;
                        product.save();
                        message.push('You changed name, price, amount and description successfully');
                        res.render('product/detail',
                            {
                                product: product,
                                message: message
                            });
                    }
                }
            } else {
                if (product.amount === parseInt(req.body.amount)) {
                    if (product.description === req.body.description) {
                        product.name = req.body.name;
                        product.price = req.body.price;
                        product.brand = req.body.brand;
                        product.save();
                        message.push('You changed name, price and brand successfully');
                        res.render('product/detail',
                            {
                                product: product,
                                message: message
                            });
                    } else {
                        product.name = req.body.name;
                        product.price = req.body.price;
                        product.brand = req.body.brand;
                        product.description = req.body.description;
                        product.save();
                        message.push('You changed name, price, brand and description successfully');
                        res.render('product/detail',
                            {
                                product: product,
                                message: message
                            });
                    }
                } else {
                    if (product.description === req.body.description) {
                        product.name =  req.body.name;
                        product.price = req.body.price;
                        product.brand = req.body.brand;
                        product.amount = req.body.amount;
                        product.save();
                        message.push('You changed name, price, brand and amount successfully');
                        res.render('product/detail',
                            {
                                product: product,
                                message: message
                            });
                    } else {
                        product.name = req.body.name;
                        product.price = req.body.price;
                        product.brand = req.body.brand;
                        product.amount = req.body.amount;
                        product.description = req.body.description;
                        product.save();
                        message.push('You changed all fields successfully');
                        res.render('product/detail',
                            {
                                product: product,
                                message: message
                            });
                    }
                }
            }
        }
    }    
}
