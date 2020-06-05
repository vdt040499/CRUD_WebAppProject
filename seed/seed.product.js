const fs = require('fs');
const mongoose = require('mongoose');

const Product = require('../models/product.model');

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/LAB3', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err
    console.log('Connect MongoDB Successfully!')
});

var data = fs.readFileSync('./Products.txt', 'utf8');

var plitedProductString = data.split('\r\n');

for(let i = 0; i < plitedProductString.length; i++){
    var plitedProductField = plitedProductString[i].split('|');
    var product = new Product({
        _id: new mongoose.Types.ObjectId(),
        ID: plitedProductField[0],
        name: plitedProductField[1],
        price: parseInt(plitedProductField[2]),
        brand: plitedProductField[3],
        amount: parseInt(plitedProductField[4]),
        description: plitedProductField[5],
        image: plitedProductField[6]
    });
    product.save();
}



