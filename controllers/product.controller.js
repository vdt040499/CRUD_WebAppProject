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
    const product = await  Product.findById(req.params.productId);
        if (product.name === req.body.name) {
            if (product.price === req.body.price) {
                if (product.brand === req.body.brand) {
                    if (product.amount === req.body.amount) {
                        if (product.descript === req.body.descript) {
                            return res.status(200).json({
                                message: 'You changed nothing',
                                product: product
                            });
                        } else {
                            product.descript = req.body.descript;
                            product.save();
                            return res.status(200).json({
                                message: 'You changed descript successfully',
                                product: product
                            });
                        }
                    } else {
                        if (product.descript === req.body.descript) {
                            product.amount = req.body.amount;
                            product.save();
                            return res.status(200).json({
                                message: 'You changed amount successfully',
                                product: product
                            });
                        } else {
                            product.amount = req.body.amount;
                            product.descript = req.body.descript;
                            product.save();
                            return res.status(200).json({
                                message: 'You changed amount and descript successfully',
                                product: product
                            });
                        }
                    }
                } else {
                    if (product.amount === req.body.amount) {
                        if (product.descript === req.body.descript) {
                            product.brand = req.body.brand;
                            product.save();
                            return res.status(200).json({
                                message: 'You changed brand successfully',
                                product: product
                            });
                        } else {
                            product.brand = req.body.brand;
                            product.descript = req.body.descript;
                            product.save();
                            return res.status(200).json({
                                message: 'You changed brand and descript successfully',
                                product: product
                            });
                        }
                    } else {
                        if (product.descript === req.body.descript) {
                            product.brand = req.body.brand;
                            product.amount = req.body.amount;
                            product.save();
                            return res.status(200).json({
                                message: 'You changed brand and amount successfully',
                                product: product
                            });
                        } else {
                            product.brand  = req.body.brand;
                            product.amount = req.body.amount;
                            product.descript = req.body.descript;
                            product.save();
                            return res.status(200).json({
                                message: 'You changed brand, amount and descript successfully',
                                product: product
                            });
                        }
                    }
                }
            } else {
                if (product.brand === req.body.brand) {
                    if (product.amount === req.body.amount) {
                        if (product.descript === req.body.descript) {
                            product.price = req.body.price;
                            product.save();
                            return res.status(200).json({
                                message: 'You changed price successfully',
                                product: product
                            });
                        } else {
                            product.price = req.body.price;
                            product.descript = req.body.descript;
                            product.save();
                            return res.status(200).json({
                                message: 'You changed price and descript successfully',
                                product: product
                            });
                        }
                    } else {
                        if (product.descript === req.body.descript) {
                            product.price = req.body.price;
                            product.amount = req.body.amount;
                            product.save();
                            return res.status(200).json({
                                message: 'You changed price and amount successfully',
                                product: product
                            });
                        } else {
                            product.price = req.body.price;
                            product.amount = req.body.amount;
                            product.descript = req.body.descript;
                            product.save();
                            return res.status(200).json({
                                message: 'You changed price, amount and descript successfully',
                                product: product
                            });
                        }
                    }
                } else {
                    if (product.amount === req.body.amount) {
                        if (product.descript === req.body.descript) {
                            product.price = req.body.price;
                            product.brand = req.body.brand;
                            product.save();
                            return res.status(200).json({
                                message: 'You changed price and brand successfully',
                                product: product
                            });
                        } else {
                            product.price = req.body.price;
                            product.brand = req.body.brand;
                            product.descript = req.body.descript;
                            product.save();
                            return res.status(200).json({
                                message: 'You changed price, brand and descript successfully',
                                product: product
                            });
                        }
                    } else {
                        if (product.descript === req.body.descript) {
                            product.price = req.body.price;
                            product.brand = req.body.brand;
                            product.amount = req.body.amount;
                            product.save();
                            return res.status(200).json({
                                message: 'You changed price, brand and amount successfully',
                                product: product
                            });
                        } else {
                            product.price  = req.body.price;
                            product.brand = req.body.brand;
                            product.amount = req.body.amount;
                            product.descript = req.body.descript;
                            product.save();
                            return res.status(200).json({
                                message: 'You changed price, brand, amount and descript successfully',
                                product: product
                            });
                        }
                    }
                }
            }
        } else {
            if (product.price === req.body.price) {
                if (product.brand === req.body.brand) {
                    if (product.amount === req.body.amount) {
                        if (product.descript === req.body.descript) {
                            product.name = req.body.name;
                            product.save;
                            return res.status(200).json({
                                message: 'You changed name successfully',
                                product: product
                            });
                        } else {
                            product.name = req.body.name;
                            product.descript = req.body.descript;
                            product.save();
                            return res.status(200).json({
                                message: 'You changed name and descript successfully',
                                product: product
                            });
                        }
                    } else {
                        if (product.descript === req.body.descript) {
                            product.name = req.body.name;
                            product.amount = req.body.amount;
                            product.save();
                            return res.status(200).json({
                                message: 'You changed name and amount successfully',
                                product: product
                            });
                        } else {
                            product.name = req.body.name;
                            product.amount = req.body.amount;
                            product.descript = req.body.descript;
                            product.save();
                            return res.status(200).json({
                                message: 'You changed name, amount and descript successfully',
                                product: product
                            });
                        }
                    }
                } else {
                    if (product.amount === req.body.amount) {
                        if (product.descript === req.body.descript) {
                            product.name = req.body.name;
                            product.brand = req.body.brand;
                            product.save();
                            return res.status(200).json({
                                message: 'You changed name and brand successfully',
                                product: product
                            });
                        } else {
                            product.name = req.body.name;
                            product.brand = req.body.brand;
                            product.descript = req.body.descript;
                            product.save();
                            return res.status(200).json({
                                message: 'You changed name, brand and descript successfully',
                                product: product
                            });
                        }
                    } else {
                        if (product.descript === req.body.descript) {
                            product.name = req.body.name;
                            product.brand = req.body.brand;
                            product.amount = req.body.amount;
                            product.save();
                            return res.status(200).json({
                                message: 'You changed name, brand and amount successfully',
                                product: product
                            });
                        } else {
                            product.name = req.body.name;
                            product.brand = req.body.brand;
                            product.amount = req.body.amount;
                            product.descript = req.body.descript;
                            product.save();
                            return res.status(200).json({
                                message: 'You changed name, brand, amount and descript successfully',
                                product: product
                            });
                        }
                    }
                }
            } else {
                if (product.brand === req.body.brand) {
                    if (product.amount === req.body.amount) {
                        if (product.descript === req.body.descript) {
                            product.name = req.body.name;
                            product.price = req.body.price;
                            product.save();
                            return res.status(200).json({
                                message: 'You changed name and price successfully',
                                product: product
                            });
                        } else {
                            product.name =req.body.name;
                            product.price = req.body.price;
                            product.descript = req.body.descript;
                            product.save();
                            return res.status(200).json({
                                message: 'You changed name, price and descript successfully',
                                product: product
                            });
                        }
                    } else {
                        if (product.descript === req.body.descript) {
                            product.name = req.body.name;
                            product.price = req.body.price;
                            product.amount = req.body.amount;
                            product.save();
                            return res.status(200).json({
                                message: 'You changed name, price and amount successfully',
                                product: product
                            });
                        } else {
                            product.name = req.body.name;
                            product.price = req.body.price;
                            product.amount = req.body.amount;
                            product.descript = req.body.descript;
                            product.save();
                            return res.status(200).json({
                                message: 'You changed name, price, amount and descript successfully',
                                product: product
                            });
                        }
                    }
                } else {
                    if (product.amount === req.body.amount) {
                        if (product.descript === req.body.descript) {
                            product.name = req.body.name;
                            product.price = req.body.price;
                            product.brand = req.body.brand;
                            product.save();
                            return res.status(200).json({
                                message: 'You changed name, price and brand successfully',
                                product: product
                            });
                        } else {
                            product.name = req.body.name;
                            product.price = req.body.price;
                            product.brand = req.body.brand;
                            product.descript = req.body.descript;
                            product.save();
                            return res.status(200).json({
                                message: 'You changed name, price, brand and descript successfully',
                                product: product
                            });
                        }
                    } else {
                        if (product.descript === req.body.descript) {
                            product.name =  req.body.name;
                            product.price = req.body.price;
                            product.brand = req.body.brand;
                            product.amount = req.body.amount;
                            product.save();
                            return res.status(200).json({
                                message: 'You changed name, price, brand and amount successfully',
                                product: product
                            });
                        } else {
                            product.name = req.body.name;
                            product.price = req.body.price;
                            product.brand = req.body.brand;
                            product.amount = req.body.amount;
                            product.descript = req.body.descript;
                            product.save();
                            return res.status(200).json({
                                message: 'You changed price, brand, amount and descript successfully',
                                product: product
                            });
                        }
                    }
                }
            }
        }
}
