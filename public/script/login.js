$(document).ready(
    function(){
        $('.needs-validation').validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true
                }
            },

            messages: {
                email: {
                    required: "Yêu cầu nhập email",
                    email: "Yêu cầu nhập email hợp lệ"
                },
                password: {
                    required: "Yêu cầu nhập mật khẩu"
                }
            }
        })
    }
);