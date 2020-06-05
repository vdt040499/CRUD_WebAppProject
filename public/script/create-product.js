$(document).ready(function () {
    $(".needs-validation").validate({
        rules:{
            id :{
                required: true,
            },
            name :{
                required :true,
                minlength : 3
            },
            description: {
                required : true,
                minlength : 10
            },

            image : {
                required: true, 
                // extension: "png|jpe?g|gif", 
                // filesize: 1048576
            },

            price : {
                required : true,
                number: true
            },
            amount :{
                required : true,
                number: true
            },
        },

        messages : {
            id : {
                required : "Vui lòng nhập id sản phẩm",
            },
            name:{
                required: "Vui lòng nhập tên sản phẩm",
                minlength : "Vui lòng nhập tên sản phẩm nhiều hơn 3 kí tự"
            },

            image: {
                required: "Vui lòng chọn một ảnh",
            },

            description:{
                required :"Vui lòng nhập mô tả sản phẩm",
                minlength: "Vui lòng nhập mô tả nhiều hơn 10 kí tự"
            },

            price: {
                required : "Vui lòng nhập giá sản phẩm",
                number: "Giá sản phẩm phải là kiểu số"
            },
            
            amount: {
                required : "Vui lòng nhập số lượng sản phẩm",
                number: "Số lượng sản phẩm phải là kiểu số"
            },
        }
    })
});