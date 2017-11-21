## Form
- css 링크  
~~~
<link rel="stylesheet" type="text/css" href="./css/form.css">
~~~

- form 
~~~
<form method="POST" name="frm" action="server_send.py" onsubmit="return check()">
~~~
- 기본 아이템
    - form.css 
~~~
.div_height {
    margin-top: 10px;
}
~~~
~~~
<body>
<div>
    <form method="POST" name="frm" action="server_send.py" onsubmit="return check()">
        <div class="div_height">
            가입신청서에 *란은 필수 입니다
        </div>
        <div class="div_height">
            <input type="text"  name="name" placeholder="name">*
        </div>
        <div class="div_height">
            <input type="text"  name="id" placeholder="ID">*
        </div>
        <div class="div_height">
            <input type="password" name="password1" placeholder="비밀번호1">*
        </div>
        <div class="div_height">
            <input type="password" name="password2" placeholder="비밀번호2">*
        </div>
        <div class="div_height">
            <select name="job">
                <option selected>--직업명--</option>
                <option value="worker">회사원</option>
                <option value="officer">공무원</option>
                <option value="student">학생</option>
                <option value="solider">군인</option>

            </select>
        </div >
        <div class="div_height">
            <input type="radio" name="gender" value="man">남
            <input type="radio" name="gender" value="woman">여
        </div>
        <div class="div_height">
            <input type="checkbox" name="hobby" value="reading">독서
            <input type="checkbox" name="hobby" value="hiking">등산
            <input type="checkbox" name="hobby" value="fishing">낚시
        </div>
        <div class="div_height">
            <textarea name="content" rows="5" cols="30"></textarea>
        </div>
        <div class="div_height">
            <input type="submit" value="가입">
            <input type="reset" value="취">
        </div>
    </form>
</div>
</body>
~~~

- form.html
~~~
<script type="text/javascript" src="./js/form.js"></script>
~~~
- form.js 
~~~
function ready() {
    document.frm.name.focus();
}
~~~
~~~
<body onload="ready()">
~~~

<br/>

- form , onsubmit="return check()"
~~~
<form method="POST" name="frm" action="server_send.py" onsubmit="return check()">
~~~

- form.html
~~~
<div>
    <form method="POST" name="frm" action="server_send.py" onsubmit="return check()">
        <div class="div_height">
            가입신청서에 *란은 필수 입니다
        </div>
        <div class="div_height">
            <input type="text"  name="name" placeholder="name">*
        </div>
        <div class="div_height">
            <input type="text"  name="id" placeholder="ID">*
        </div>
        <div class="div_height">
            <input type="password" name="password1" placeholder="비밀번호1">*
        </div>
        <div class="div_height">
            <input type="password" name="password2" placeholder="비밀번호2">*
        </div>
        <div class="div_height">
            <select name="job">
                <option selected>--직업명--</option>
                <option value="worker">회사원</option>
                <option value="officer">공무원</option>
                <option value="student">학생</option>
                <option value="solider">군인</option>

            </select>
        </div >
        <div class="div_height">
            <input type="radio" name="gender" value="man">남
            <input type="radio" name="gender" value="woman">여
        </div>
        <div class="div_height">
            <input type="checkbox" name="hobby" value="reading">독서
            <input type="checkbox" name="hobby" value="hiking">등산
            <input type="checkbox" name="hobby" value="fishing">낚시
        </div>
        <div class="div_height">
            <textarea name="content" rows="5" cols="30"></textarea>
        </div>
        <div class="div_height">
            <input type="submit" value="가입">
            <input type="reset" value="취소">
        </div>
    </form>
</div>
~~~

- form.js
~~~
function check() {
    if(document.frm.name.value ==""){
        alert("이름을 입력해주세요");
        document.frm.name.focus() ;
        return false;
    }
    if(document.frm.id.value ==""){
        alert("아이디를 입력해주세요");
        document.frm.id.focus() ;
        return false;
    }
    if(document.frm.password1.value ==""){
        alert("비밀번호를 입력해주세요");
        document.frm.password1.focus();
        return false;
    }
    if(document.frm.password2.value == ""){
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
        return false;
    }
    alert('입력된 데이터를 서버로 전송합니다');
    document.frm.action="" ;
    document.frm.submit();
}
~~~

- form.js 
    - 별도의 변수로 만들기 
    - var name = document.frm.name.value ;
        - if(name ==""){
~~~
function check() {
    var name = document.frm.name.value ;
    var id = document.frm.id. value ;
    var password1 = document.frm.password1.value ;
    var password2 = document.frm.password2.value ;

    if(name ==""){
        alert("이름을 입력해주세요");
        document.frm.name.focus() ;
        return false;
    }
    if(id ==""){
        alert("아이디를 입력해주세요");
        document.frm.id.focus() ;
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
        return false;
    }
    alert('입력된 데이터를 서버로 전송합니다');
    document.frm.action="" ;
    document.frm.submit();
}
~~~

- form.js 
    - 마지막에 confirm 확인/취소 
~~~
function check() {
    var name = document.frm.name.value ;
    var id = document.frm.id. value ;
    var password1 = document.frm.password1.value ;
    var password2 = document.frm.password2.value ;

    if(name ==""){
        alert("이름을 입력해주세요");
        document.frm.name.focus() ;
        return false;
    }
    if(id ==""){
        alert("아이디를 입력해주세요");
        document.frm.id.focus() ;
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
~~~    

<br/>

- form.html 
    - input 에서 id 추가하기 
        - name, id, password1, password2 
~~~
    <form method="POST" name="frm" action="server_send.py" onsubmit="return check()">
        <div class="div_height">
            가입신청서에 *란은 필수 입니다
        </div>
        <div class="div_height">
            <input type="text"  name="name" id="name" placeholder="name">*
        </div>
        <div class="div_height">
            <input type="text"  name="id" id="id" placeholder="ID">*
        </div>
        <div class="div_height">
            <input type="password" name="password1" id="password1" placeholder="비밀번호1">*
        </div>
        <div class="div_height">
            <input type="password" name="password2" id="password2" placeholder="비밀번호2">*
        </div>
~~~            

- form.js
    - id 에서 값을 가져오기
    - document.getElementById('name').value 
~~~
function check() {

    // var name = document.frm.name.value ;
    var name = document.getElementById('name').value ;
    // var id = document.frm.id. value ;
    var id = document.getElementById('id').value ;
    
    var password1 = document.frm.password1.value ;
    var password2 = document.frm.password2.value ;
~~~     

- form.html 에러 표시하기
    - \<p id="name_error" class="p_error">\</p>
~~~html
    <form method="POST" name="frm" action="server_send.py" onsubmit="return check()">
        <div class="div_height">
            가입신청서에 *란은 필수 입니다
        </div>
        <div class="div_height">
            <input type="text"  name="name" id="name" placeholder="name">*
            <p id="name_error" class="p_error"></p>
        </div>
~~~

- form.css
    - p_error 클래스 추가 
~~~css
.p_error {
    color : #EB4D4D;
    font-size : 10px ;
}
~~~

<br/>

- form.js 
    - 필수입력에 아무값도 없을 때 빨간색 글씨 쓰기 
~~~js
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
~~~        
~~~js
    if(name ===""){
        alert("이름을 입력해주세요");
        document.frm.name.focus() ;
        document.getElementById('name').addEventListener('focus',addFocusName) ;
        document.getElementById('name').addEventListener('blur',addBlurName) ;
        return false;
    }
~~~


- form.html 에서 id_error 추가 
    - \<p id="id_error" class="p_error">\</p>
~~~html
        <div class="div_height">
            <input type="text"  name="id" id="id" placeholder="ID">*
            <p id="id_error" class="p_error"></p>
        </div>
~~~

- form.js 에서 
    - function addFocusId()  추가 
    - function addBlurId()  추가 
~~~js
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
~~~
    

     

 
