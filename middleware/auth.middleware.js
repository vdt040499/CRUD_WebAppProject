const User = require('../models/user.model');

module.exports.requireAuth = async(req, res, next) => {
    if(!req.signedCookies.cookie){
        res.redirect('/users/login');
        return;
    }

    const user = await User.findById(req.signedCookies.cookie);

    if(!user){
        res.redirect('/users/login');
        return;
    }

    res.locals.user = user;

    next();
}