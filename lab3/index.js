const Products = require ('./api/models/product.model');

var fs = require ("fs");


try {
    var data = fs.readFileSync('./Products.txt','utf8');

    var dataline = data.split('\r\n');

    //var datalinelength = dataline.length;
    
    for (let i = 0; i < dataline.length; i++ ){
        var datasplit = dataline[i].split('|');
        var product = new Products({
            ID: datasplit[0],
            name: datasplit[1],
            price: datasplit[2],
            brand: datasplit[3],
            amount: datasplit[4],
            descript: datasplit[5],
            image: datasplit[6],
        });
        product.save();
        console.log(product);
    }    

    //console.log(dataline);

    //console.log(datalinelength);

    //console.log(splitdata);

    
    //for ( let i = 0 ; i < )
} catch (error) {
    console.log('Error:', error.stack);
}