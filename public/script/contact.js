$(document).ready(function () {
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