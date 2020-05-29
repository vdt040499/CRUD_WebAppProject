const express = require('express');
const app = express();
const cookieParser = require('cookie-parser'); 
const methodOverride = require('method-override');
var expressHbs =  require('express-handlebars');
const Handlebars = require('handlebars');
// Handlebars.registerHelper('ternary', require('handlebars-helper-ternary'));
Handlebars.registerHelper('ternary', function(cond, v1, v2) {
    return cond ? v1 : v2;
 });
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

const fs = require('fs');
const mongoose = require('mongoose');

const Product = require('./models/product.model');

const productRoutes = require('./routes/product.route');
const userRoutes = require('./routes/user.route');

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/bai1_lab1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err
    console.log('Connect MongoDB Successfully!')
});

app.engine('.hbs', expressHbs({
    defaultLayout: 'layout',
    // ...implement newly added insecure prototype access
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    extname:'.hbs'
    })
  );
  app.set('view engine', '.hbs');
app.use('/public', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.secret));
app.use(methodOverride('_method'));
// var data = fs.readFileSync('./Products.txt', 'utf8');

// var plitedProductString = data.split('\r\n');

// for(let i = 0; i < plitedProductString.length; i++){
//     var plitedProductField = plitedProductString[i].split('|');
//     var product = new Product({
//         _id: new mongoose.Types.ObjectId(),
//         name: plitedProductField[1],
//         price: parseInt(plitedProductField[2]),
//         brand: plitedProductField[3],
//         amount: parseInt(plitedProductField[4]),
//         description: plitedProductField[5],
//         image: plitedProductField[6]
//     });
//     product.save();
// }


app.use('/products', productRoutes);
app.use('/users', userRoutes);

module.exports = app;

