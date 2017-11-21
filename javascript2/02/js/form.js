function ready() {
    document.frm.name.focus();
}


function addFocusName() {
    var param = document.getElementById('name').value ;
    if (param === "") {
        document.getElementById('name_error').textContent = "이름을 입력하세요";
    }
}

function addBlurName() {
    var param = document.getElementById('name').value ;
    if(param !== ""){
        document.getElementById('name_error').textContent ="" ;
    }
}

function addFocusId() {
    var param = document.getElementById('id').value ;
    if (param === "") {
        document.getElementById('id_error').textContent = "ID를 입력하세요";
    }
}

function addBlurId() {
    var param = document.getElementById('id').value ;
    if(param !== ""){
        document.getElementById('id_error').textContent ="" ;
    }
}

function check() {

    // var name = document.frm.name.value ;
    var name = document.getElementById('name').value ;
    // var id = document.frm.id. value ;
    var id = document.getElementById('id').value ;

    var password1 = document.frm.password1.value ;
    var password2 = document.frm.password2.value ;

    if(name ===""){
        alert("이름을 입력해주세요");
        document.frm.name.focus() ;
        document.getElementById('name').addEventListener('focus',addFocusName) ;
        document.getElementById('name').addEventListener('blur',addBlurName) ;
        return false;
    }

    if(id ==""){
        alert("아이디를 입력해주세요");
        document.frm.id.focus() ;
        document.getElementById('id').addEventListener('focus',addFocusId) ;
        document.getElementById('id').addEventListener('blur',addBlurId) ;
        return false;
    }
    if(password1 ==""){
        alert("비밀번호를 입력해주세요");
        document.frm.password1.focus();
        return false;
    }
    if(password2 == ""){
        alert("비밀번호 확인");
        document.frm.password2.focus();
        return false;
    }
    if(document.frm.password1.value != document.frm.password2.value){
        alert("비밀번호가 다릅니다");
        document.frm.password2.focus()
        return false;
    }

    if(document.frm.job.selectedIndex ==0){
        alert("직업을 선택하세요");
        document.frm.job.focus();
        return false;
    }
    if(document.frm.gender[0].checked == false && document.frm.gender[1].checked == false){
        alert("성별을 선택하세요");
        return false ;
    }

    var chk = confirm('입력된 데이터를 서버로 전송합니다');
    if(chk){
        document.frm.submit();
    } else {
        return false ;
    }
}


