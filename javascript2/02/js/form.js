function ready() {
    document.frm.name.focus();
}

function check() {
    if(document.frm.name.value ==""){
        alert("이름을 입력해주세요");
        document.frm.name.focus() ;
        return ;
    }
    if(document.frm.id.value ==""){
        alert("아이디를 입력해주세요");
        document.frm.id.focus() ;
        return ;
    }
    if(document.frm.password1.value ==""){
        alert("비밀번호를 입력해주세요");
        document.frm.password1.focus();
        return ;
    }
    if(document.frm.password2.value == ""){
        alert("비밀번호 확인");
        document.frm.password2.focus();
        return ;
    }
    if(document.frm.password1.value != document.frm.password2.value){
        alert("비밀번호가 다릅니다");
        document.frm.password2.focus()
        return ;
    }

    if(document.frm.job.selectedIndex ==0){
        alert("직업을 선택하세요");
        document.frm.job.focus();
        return ;
    }
    if(document.frm.gender[0].checked == false && document.frm.gender[1].checked == false){
        alert("성별을 선택하세요");
        return ;
    }
    alert('입력된 데이터를 서버로 전송합니다');
    document.frm.action="" ;
    document.frm.submit();
}