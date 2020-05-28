module.exports.create = (req, res, next) => {
    var errors = [];
    if(!req.body.id){
        errors.push('Vui lòng nhập ID');
    }
    if(!req.body.name){
        errors.push('Vui lòng nhập tên sản phẩm');
    }
    if(!req.body.description || req.body.description.length < 20){
        errors.push('Mô tả sản phẩm còn trống hoặc mô tả sản phẩm của bạn quá ngắn');
    }
    if(!req.file.path){
        errors.push('Vui lòng chọn hình cho sản phẩm');
    }
    if(!req.body.price){
        errors.push('Vui lòng nhập giá sản phẩm');
    }
    if(!req.body.amount){
        errors.push('Vui lòng nhập số lượng sản phẩm')
    }

    if(errors.length){
        res.render('product/create', {
            errors: errors,
            values: req.body
        });
        return;
    }
    next();
}