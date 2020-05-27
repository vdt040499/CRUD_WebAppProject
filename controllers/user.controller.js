const fs = require('fs');

module.exports.contact = (req, res) => {
    res.render('user/contact');
}

module.exports.postContact = (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let message = req.body.message;
    let date = new Date();
    var datetime = date.getDate() + "/"
                + (date.getMonth()+1)  + "/" 
                + date.getFullYear() + " "  
                + date.getHours() + ":"  
                + date.getMinutes() + ":" 
                + date.getSeconds();

    let data = `${name} | ${email} | ${phone} | ${message} | ${datetime}`

    fs.writeFileSync('contact.txt', data);

    res.redirect('/users/contact');
}