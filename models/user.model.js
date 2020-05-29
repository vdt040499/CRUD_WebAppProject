const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: { type: String, required: true},
    email: { 
        type: String, 
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ 
    },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true}
})

module.exports = mongoose.model('Users', userSchema);