$(document).ready(function () {
    $(".needs-validation").validate({
        rules:{
            username :{
                required: true,
                minlength :4,
            },
            email :{
                required :true,
            },
            password: {
                required : true,
                minlength : 5
            },
            repass : {
                required : true,
                minlength : 5,
                equalTo : "#password"
            },
            phone :{
                minlength : 10,
            },
        },

        messages : {
            username : {
                required : "Vui lòng nhập tên đăng nhập.",
                minlength : "Username quá ngắn"
            },
            phone:{
                minlength : "Số điện thoại không phù hợp",
            },

            email:{
                required :"Vui lòng nhập email đăng ký",
            },

            password: {
                required : "Vui lòng nhập mật khẩu.",
                minlength : "Vui lòng nhập nhiều hơn 5 ký tự."
            },
            repass: {
                required : "Vui lòng nhập lại mật khẩu lần nữa",
                equalTo : "Mật khẩu không trùng nhau.",
                minlength : "Vui lòng nhập nhiều hơn 5 ký tự."
            },
        }
    })
});