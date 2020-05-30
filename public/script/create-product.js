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
            price : {
                required : true,
            },
            amount :{
                required : true,
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

            description:{
                required :"Vui lòng nhập mô tả sản phẩm",
                minlength: "Vui lòng nhập mô tả nhiều hơn 10 kí tự"
            },

            price: {
                required : "Vui lòng nhập giá sản phẩm"
            },
            
            amount: {
                required : "Vui lòng nhập số lượng sản phẩm"
            },
        }
    })
});