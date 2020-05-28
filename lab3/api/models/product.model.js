const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ID: { type: Number, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    amount: { type: Number, required: true },
    descript: { type: String, required: true },
    image: { type: String, required: true },
});

module.exports = mongoose.model('Product', productSchema);