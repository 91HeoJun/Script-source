$(function () {
    $("#join").validate({
        // rules : 규칙 정의
        rules:{
            userid:{ //영 대소문자, 숫자, 6-12자리 가능
                required : true,
                validId : true
            },

            userpw:{
                required : true,
                validPw : true
            },

            confirmpwd:{
                required : true,
                validPw : true,
                equalTo : "#userpw"
            },

            gender:{
                required : true
            },

            email:{
                required : true,
                validEmail : true
            },

            mobile:{
                required : true,
                validMobile : true
            },

            hobby:{
                required : true
            }


        },// rulse 종료

        // messages : 규칙에 대한 메시지 정의
        messages:{
            userid:{ //영 대소문자, 숫자, 6-12자리 가능
                required : "아이디는 필수 속성입니다,"
            },

            userpw:{
                required : "비밀번호는 필수 속성입니다,"
            },

            confirmpwd:{
                required : "비밀번호는 필수 속성입니다,",
                equalTo : "이전 비밀번호와 일치하지 않습니다."
            },

            gender:{
                required : "성별을 선택해 주세요"
            },
            
            email:{
                required : "이메일은 필수 속성입니다"
            },

            mobile:{
                required : "핸드폰 번호는 필수 속성입니다."
            },
            
            hobby:{
                required : "취미를 선택해 주세요"
            }


        }// messages 종료

    });
});

$.validator.addMethod("validId", function (value) {
    let regID = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;
    return regID.test(value); // true or false return
}, "아이디를 확인해 주세요");

$.validator.addMethod("validPw", function (value) {
    let regPw = /(?=.*[A-Za-z])(?=.*[\d])(?=.*[!@#$%])[A-Za-z\d!@#$%]{8,15}$/;
    return regPw.test(value); // true or false return
}, "비밀번호를 확인해 주세요");

$.validator.addMethod("validEmail", function (value) {  
    let regMail = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regMail.test(value);
}, "이메일 형식을 확인해주세요");

$.validator.addMethod("validMobile", function (value) {
    let regMobile = /^\d{3}\d{4}\d{4}$/;
    return regMobile.test(value);
}, "핸드폰 번호를 확인하세요");