// mobile : - 없는 형태로 01065121234(11자리)
//

// hobby : 최소 하나 선택
// required

function checkPass(password) {
    let regPW = /(?=.*[A-Za-z])(?=.*[\d])(?=.*[!@#$%])[A-Za-z\d!@#$%]{8,15}$/;

    if (!regPW.test(password)){
        alert("비밀번호를 확인해 주세요");
        return false; // 조건대로 안만든 경우 
    }
    return true; // 조건대로 만든 경우
}

//register.html 유효성 검증
$(function () {

    // userid : 영, 대소문자 허용, 숫자 허용  6~12자리 가능
    $("#userid").change(function () {
        let regID = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;
        let userid = $("#userid").val();
        if (!regID.test(userid)){
            alert("아이디를 확인해 주세요");
            $("#userid").select();
            return false;
        }
    })
    // password : 영, 대소문자 허용, 숫자 허용, 특수문자(!@#$%^*) 허용, 8~15
    $("#userpw").change(function () {
        let userpw = $("#userpw").val();
        if(!checkPass(userpw)){
            $("#userpw").select();
            return false;
        }
    })

    // confirmpaaswd : 위 규칙과 동일하고, 이전 비밀번호와 일치한지 확인
    
    // ↓ 재확인 필요
    $("#confirmpwd").change(function () {
        let confirmpwd = $("#confirmpwd").val();
       
        if(!checkPass(confirmpwd)){
            alert("이전 비밀번호와 다릅니다.")
            $("#confirmpwd").select();
            return false;
        }
        if($("#userpw").val() !== confirmpwd){
            alert("이전 비밀번호와 다릅니다.")
            $("#confirmpwd").select();
            return false;
        }
    }) // confirmpwd

    // gender : 무조건 하나 선택
    $(":radio[name='gender']").focusout(function () {
        if (!$(this).is(":checked")) {
            alert("성별을 확인해주세요");
            $("#gender_m").prop("checked", true);
            return false;
        }
    }) //gender

    // email : email 형식에 맞는지 확인
    $("#email").change(function () {
        let regMail = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let email = $("#email").val();

        if (!regMail.test(email)) {
            alert("이메일 형식이 다릅니다");
            $("#email").select();
            return false;
        }
    })//email

    $("#mobile").change(function () {
        let regMobile = /^\d{3}\d{4}\d{4}$/;
        let mobile = $("#mobile").val();

        if (!regMobile.test(mobile)) {
            alert("핸드폰 번호가 다릅니다");
            $("#mobile").select();
            return false;
        }
    })//hp

    $("#join").submit(function(e) {
        e.preventDefault();

        if (!$("input[name='hobby']").is(":checked")) {
            alert("취미는 한개 이상 선택해주세요");
            return false
        }
    })


})
