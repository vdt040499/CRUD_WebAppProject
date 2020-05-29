module.exports.contact = (req, res, next) => {
    var errors = [];
    if (!req.body.name) {
        errors.push('Vui lòng nhập họ và tên');
    }
    if (!req.body.email) {
        errors.push('Vui lòng nhập địa chỉ email');
    }
    if (!req.body.phone) {
        errors.push('Vui lòng nhập số điện thoại');
    }
    if (!req.body.message) {
        errors.push('Bạn có gì muốn nhắn nhủ với chúng tôi nè');
    }
    if (errors.length) {
        res.render('user/contact', {
            errors: errors,
            values: req.body
        });
        return;
    }
    next();
}