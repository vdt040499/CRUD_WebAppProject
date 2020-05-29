const Product = require('../models/product.model');

module.exports.getProducts = async(req, res) => {
    var products = await Product.find();
    products.sort((a, b) => {
        return a.ID - b.ID;
    });
    var newProducts = products.map(product => ({
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
    const product = await  Product.findById(req.params.productId);
    if (product.name === req.body.name) {
        if (product.price === req.body.price) {
            if (product.brand === req.body.brand) {
                if (product.amount === req.body.amount) {
                    if (product.descript === req.body.descript) {
                        res.redirect('product/detail',
                         { 
                            product: product ,
                            message: 'You changed nothing',
                         });
                    } else {
                        product.descript = req.body.descript;
                        product.save();
                        res.redirect('product/detail',
                            {
                                product: product,
                                message: 'You changed descript successfully',
                            });
                    }
                } else {
                    if (product.descript === req.body.descript) {
                        product.amount = req.body.amount;
                        product.save();
                        res.redirect('product/detail',
                            {
                                product: product,
                                message: 'You changed amount successfully',
                            });
                    } else {
                        product.amount = req.body.amount;
                        product.descript = req.body.descript;
                        product.save();
                        res.redirect('product/detail',
                            {
                                product: product,
                                message: 'You changed amount and descript successfully',
                            });
                    }
                }
            } else {
                if (product.amount === req.body.amount) {
                    if (product.descript === req.body.descript) {
                        product.brand = req.body.brand;
                        product.save();
                        res.redirect('product/detail',
                            {
                                product: product,
                                message: 'You changed brand successfully',
                            });
                    } else {
                        product.brand = req.body.brand;
                        product.descript = req.body.descript;
                        product.save();
                        res.redirect('product/detail',
                            {
                                product: product,
                                message: 'You changed brand and descript successfully',
                            });
                    }
                } else {
                    if (product.descript === req.body.descript) {
                        product.brand = req.body.brand;
                        product.amount = req.body.amount;
                        product.save();
                        res.redirect('product/detail',
                            {
                                product: product,
                                message: 'You changed brand and amount successfully',
                            });
                    } else {
                        product.brand  = req.body.brand;
                        product.amount = req.body.amount;
                        product.descript = req.body.descript;
                        product.save();
                        res.redirect('product/detail',
                            {
                                product: product,
                                message: 'You changed brand, amount and descript successfully',
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
                        res.redirect('product/detail',
                            {
                                product: product,
                                message: 'You changed price successfully',
                            });
                    } else {
                        product.price = req.body.price;
                        product.descript = req.body.descript;
                        product.save();
                        res.redirect('product/detail',
                            {
                                product: product,
                                message: 'You changed price and descript successfully',
                            });
                    }
                } else {
                    if (product.descript === req.body.descript) {
                        product.price = req.body.price;
                        product.amount = req.body.amount;
                        product.save();
                        res.redirect('product/detail',
                            {
                                product: product,
                                message: 'You changed price and amount successfully',
                            });
                    } else {
                        product.price = req.body.price;
                        product.amount = req.body.amount;
                        product.descript = req.body.descript;
                        product.save();
                        res.redirect('product/detail',
                            {
                                product: product,
                                message: 'You changed price, amount and descript successfully',
                            });
                    }
                }
            } else {
                if (product.amount === req.body.amount) {
                    if (product.descript === req.body.descript) {
                        product.price = req.body.price;
                        product.brand = req.body.brand;
                        product.save();
                        res.redirect('product/detail',
                            {
                                product: product,
                                message: 'You changed price and brand successfully',
                            });
                    } else {
                        product.price = req.body.price;
                        product.brand = req.body.brand;
                        product.descript = req.body.descript;
                        product.save();
                        res.redirect('product/detail',
                            {
                                product: product,
                                message: 'You changed price, brand and descript successfully',
                            });
                    }
                } else {
                    if (product.descript === req.body.descript) {
                        product.price = req.body.price;
                        product.brand = req.body.brand;
                        product.amount = req.body.amount;
                        product.save();
                        res.redirect('product/detail',
                            {
                                product: product,
                                message: 'You changed price, brand and amount successfully',
                            });
                    } else {
                        product.price  = req.body.price;
                        product.brand = req.body.brand;
                        product.amount = req.body.amount;
                        product.descript = req.body.descript;
                        product.save();
                        res.redirect('product/detail',
                            {
                                product: product,
                                message: 'You changed price, brand, amount and descript successfully',
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
                        res.redirect('product/detail',
                            {
                                product: product,
                                message: 'You changed name successfully',
                            });
                    } else {
                        product.name = req.body.name;
                        product.descript = req.body.descript;
                        product.save();
                        res.redirect('product/detail',
                            {
                                product: product,
                                message: 'You changed name and descript successfully',
                            });
                    }
                } else {
                    if (product.descript === req.body.descript) {
                        product.name = req.body.name;
                        product.amount = req.body.amount;
                        product.save();
                        res.redirect('product/detail',
                            {
                                product: product,
                                message: 'You changed name and amount successfully',
                            });
                    } else {
                        product.name = req.body.name;
                        product.amount = req.body.amount;
                        product.descript = req.body.descript;
                        product.save();
                        res.redirect('product/detail',
                            {
                                product: product,
                                message: 'You changed name, amount and descript successfully',
                            });
                    }
                }
            } else {
                if (product.amount === req.body.amount) {
                    if (product.descript === req.body.descript) {
                        product.name = req.body.name;
                        product.brand = req.body.brand;
                        product.save();
                        res.redirect('product/detail',
                            {
                                product: product,
                                message: 'You changed name and brand successfully',
                            });
                    } else {
                        product.name = req.body.name;
                        product.brand = req.body.brand;
                        product.descript = req.body.descript;
                        product.save();
                        res.redirect('product/detail',
                            {
                                product: product,
                                message: 'You changed name, brand and descript successfully',
                            });
                    }
                } else {
                    if (product.descript === req.body.descript) {
                        product.name = req.body.name;
                        product.brand = req.body.brand;
                        product.amount = req.body.amount;
                        product.save();
                        res.redirect('product/detail',
                            {
                                product: product,
                                message: 'You changed name, brand and amount successfully',
                            });
                    } else {
                        product.name = req.body.name;
                        product.brand = req.body.brand;
                        product.amount = req.body.amount;
                        product.descript = req.body.descript;
                        product.save();
                        res.redirect('product/detail',
                            {
                                product: product,
                                message: 'You changed name, brand, amount and descript successfully',
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
                        res.redirect('product/detail',
                            {
                                product: product,
                                message: 'You changed name and price successfully',
                            });
                    } else {
                        product.name =req.body.name;
                        product.price = req.body.price;
                        product.descript = req.body.descript;
                        product.save();
                        res.redirect('product/detail',
                            {
                                product: product,
                                message: 'You changed name, price and descript successfully',
                            });
                    }
                } else {
                    if (product.descript === req.body.descript) {
                        product.name = req.body.name;
                        product.price = req.body.price;
                        product.amount = req.body.amount;
                        product.save();
                        res.redirect('product/detail',
                            {
                                product: product,
                                message: 'You changed name, price and amount successfully',
                        });
                    } else {
                        product.name = req.body.name;
                        product.price = req.body.price;
                        product.amount = req.body.amount;
                        product.descript = req.body.descript;
                        product.save();
                        res.redirect('product/detail',
                            {
                                product: product,
                                message: 'You changed name, price, amount and descript successfully',
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
                        res.redirect('product/detail',
                            {
                                product: product,
                                message: 'You changed name, price and brand successfully',
                            });
                    } else {
                        product.name = req.body.name;
                        product.price = req.body.price;
                        product.brand = req.body.brand;
                        product.descript = req.body.descript;
                        product.save();
                        res.redirect('product/detail',
                            {
                                product: product,
                                message: 'You changed name, price, brand and descript successfully',
                            });
                    }
                } else {
                    if (product.descript === req.body.descript) {
                        product.name =  req.body.name;
                        product.price = req.body.price;
                        product.brand = req.body.brand;
                        product.amount = req.body.amount;
                        product.save();
                        res.redirect('product/detail',
                            {
                                product: product,
                                message: 'You changed name, price, brand and amount successfully',
                            });
                    } else {
                        product.name = req.body.name;
                        product.price = req.body.price;
                        product.brand = req.body.brand;
                        product.amount = req.body.amount;
                        product.descript = req.body.descript;
                        product.save();
                        res.redirect('product/detail',
                            {
                                product: product,
                                message: 'You changed price, brand, amount and descript successfully',
                            });
                    }
                }
            }
        }
    }    

}
