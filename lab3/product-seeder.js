var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ShoppingCart',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
);

var products = [
    new Product({
    imagePath: 'https://bigboo.vn/upload/product/889449987080.jpg',
    title: ' Cute Qoobee',
    description: 'Cute !!!',
    price: 10
    }),
    new Product({
    imagePath: 'https://bigboo.vn/upload/product/889449987080.jpg',
    title: ' Cute Qoobee',
    description: 'Cute !!!',
    price: 10
    }),
    new Product({
    imagePath: 'https://bigboo.vn/upload/product/889449987080.jpg',
    title: ' Cute Qoobee',
    description: 'Cute !!!',
    price: 10
    }),
    new Product({
    imagePath: 'https://bigboo.vn/upload/product/889449987080.jpg',
    title: ' Cute Qoobee',
    description: 'Cute !!!',
    price: 10
    }),
];

var done = 0;
for (var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if (done == products.lenght){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}