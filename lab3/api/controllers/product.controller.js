const mongoose = require('mongoose');
const async = require('async');
const multer = require('multer');


const Product = require('../models/product.model')

exports.uploadImage = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        product.image = req.file.path;
        product.save();
        return res.status(200).json({
            message: 'Uploaded image successfully',
        });
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }
}

exports.details = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        return res.status(200).json({
            product: product
        });
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }
}

exports.edit = async (req, res) => {
    try {
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
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }
}

exports.delete = async (req, res) => {
    try {
        const deletedProduct = await Product.deleteOne({ _id: req.params.productId }); // { n: 1, ok: 1, deletedCount: 1 }
        console.log(deletedProduct);
        if (deletedProduct.deletedCount === 0) {
            res.status(400).json({
                message: 'Product does not exists'
            });
        } else {
            res.status(200).json({
                message: 'Deleted Product'
            });
        }
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }
}

exports.create = async (req, res) => {
    try {
        const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        brand: req.body.brand,
        amount: req.body.amount,
        descript: req.body.descript,
        image: req.file.path,
        });

        product.save();
        res.status(200).json({
            message: 'Created successfully',
            product: product
        });
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }
}

exports.getall = async (req, res) => {
    const products = await Product.find();

    return res.status(200).json(products);
}

