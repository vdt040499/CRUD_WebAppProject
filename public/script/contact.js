
$(document).ready(function () {
    jQuery.validator.addMethod('customphone', function (value, element) {
        return this.optional(element) || /([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})/.test(value);
    }, "Vui lòng nhập số điện thoại hợp lệ");

    $(".needs-validation").validate({
        rules:{
            name :{
                required: true,
            },
            email :{
                required :true,
            },
            phone: {
                required : true,
                customphone: true
            },
            message : {
                required : true,
            }
        },

        messages : {
            name : {
                required : "Vui lòng nhập tên đăng nhập."
            },
            email:{
                required : "Vui lòng email người dùng"
            },

            phone:{
                required :"Vui lòng nhập số điện thoại"
            },

            message: {
                required : "Vui lòng nhập thông điệp"
            }
        }
    })
});