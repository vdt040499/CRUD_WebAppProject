const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    ID: { type: Number, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: false },
    amount: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }
}); 
 
module.exports = mongoose.model('Product', productSchema);