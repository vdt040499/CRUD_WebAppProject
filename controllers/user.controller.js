const fs = require('fs');
const bcrypt = require('bcryptjs');

const User = require('../models/user.model');

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

    res.render('user/contact', {
        message: "Chúng tôi đã tiếp nhận yêu cầu!"
    });
}

module.exports.signup = (req, res) => {
    res.render('user/signup');
}

module.exports.signupPost = async(req, res) => {
    let errors = [];
    const user = await User.find({ email: req.body.email });
    if(user.length > 0){
        errors.push('Mail exist');
        res.render('user/signup', {
            errors: errors,
            values: req.body
        });
        return;
    }else{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            username: req.body.username,
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            phone: req.body.phone
        });

        await user.save();

        res.render('user/profile', {
            errors: errors
        });
    }   
}

module.exports.login = async(req, res) => {
    res.render('user/login');
}

module.exports.loginPost = async(req, res) => {
    let errors = [];

    const user = await User.findOne({ email: req.body.email });

    if(!user){
        errors.push('Tài khoản này không tồn tại');
        res.render('user/login', {
            errors: errors,
            values: req.body
        })
    }else{
        const passwordValid = await bcrypt.compare(
            req.body.password,
            user.password
          );
        if(!passwordValid){
            errors.push('Sai mật khẩu');
            res.render('user/login', {
                errors: errors,
                values: req.body
            });
            return;
        }

        res.cookie('cookie', user._id, {
            signed: true
        })

        res.redirect("/users/profile/" + user._id);
    }
}

module.exports.profile = async(req, res) => {
    const user = await User.findById(req.params.userId);
    res.render('user/profile', {
        user: user
    });
}