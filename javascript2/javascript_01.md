## DOM
- DOM : Document Object Model 
![](./04/assets/dom.png)
![](./04/assets/dom_interaction.png)

<br/>
- title 
    - \<title>Game\</title>
~~~
<head>
    <meta charset="UTF-8">
    <title>Game</title>
</head>
~~~

- 기본 셋팅 
    - \<link rel="stylesheet" src="./css/game.css">
    - \<script src="./js/game.js">\</script>
~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Game</title>
    <link rel="stylesheet" type="text/css" href="./css/game.css">
    <script type="text/javascript" src="./js/game.js"></script>
</head>
<body>

</body>
</html>
~~~ 

- font
    - https://fonts.googleapis.com/css?family=Lato:100,300,600
~~~
<head>
    <meta charset="UTF-8">
    <title>Game</title>
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Lato:100,300,600" >
    <link rel="stylesheet" type="text/css" href="./css/game.css">
    <script type="text/javascript" src="./js/game.js"></script>
</head>
~~~    
- ionic framework css
    - http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css
~~~
<head>
    <meta charset="UTF-8">
    <title>Game</title>
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Lato:100,300,600" >
    <link rel="stylesheet" type="text/css" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <link rel="stylesheet" type="text/css" href="./css/game.css">
    <script type="text/javascript" src="./js/game.js"></script>
</head>
~~~

- 기본 css
    - game.css
~~~
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
~~~  
- body 
    - game.css
    - background : 선형 그라디언트 (검은색, 흰색)
~~~
body {
    background : linear-gradient(black, white) ;
    font-family: Lato;
    font-weight: 300;
    position: relative;
    height: 100vh;
    color: #555;
}
~~~    
- background-image
~~~
body {
    background-image: url(../img/back.jpg);
    background-position: center;
    font-family: Lato;
    font-weight: 300;
    position: relative;
    height: 100vh;
    color: #555;
}
~~~
- linear-gradient
    - rgba (read, green, blue, alpha) 
        - http://aboooks.tistory.com/279
    - 약간 어두워짐 
~~~
body {
    background-image: linear-gradient(rgba(62, 20, 20, 0.4), rgba(62, 20, 20, 0.4)), url(./img/back.jpg);
    background-position: center;
    font-family: Lato;
    font-weight: 300;
    position: relative;
    height: 100vh;
    color: #555;
}
~~~   
- backtround-size: 
    - cover 
        - 배경이미지로 완전히 채운다 
    - auto : 원래 배경이미지 크기로 채움        
~~~
body {
    background-image: linear-gradient(rgba(62, 20, 20, 0.4), rgba(62, 20, 20, 0.4)), url(./img/back.jpg);
    background-size: cover;
    background-position: center;
    font-family: Lato;
    font-weight: 300;
    position: relative;
    height: 100vh;
    color: #555;
}
~~~   
- background-position 
    - center 
        - 중앙
    - left top : 왼쪽 상단 
    - left center : 왼쪽 중앙 
    - left bottom : 왼쪽 맨 아래 
    - right top : 오른족 상단 
    - right center : 오른쪽 중앙 
    - right bottom : 오른쪽 아래 
    - center top : 가운데 상단 
    - center center : 정 가운데
    - center bottom : 가운데 아래           
~~~
body {
    background-image: linear-gradient(rgba(62, 20, 20, 0.4), rgba(62, 20, 20, 0.4)), url(./img/back.jpg);
    background-size: cover;
    background-position: center;
    font-family: Lato;
    font-weight: 300;
    position: relative;
    height: 100vh;
    color: #555;
}
~~~   

- body : class wrapper
~~~
<body>
<div class="wrapper">
    test
</div>
</body>
~~~
- wrapper .css 
~~~
.wrapper {
    width: 1000px;
    height : 100px;
    position: absolute;
    background-color: red;
}
~~~
- wrapper
    - top : 50%
    - left : 50%
~~~    
.wrapper {
    width: 1000px;
    height : 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: red;
} 
~~~   
- transform : 좌표를 변형 
~~~
.wrapper {
    width: 1000px;
    height : 100px;
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%); 
    background-color: red;
}
~~~
- background-color : #fff (흰색)
- box-shadow : 박스 그림자 
    - 그림자 만들기 
        - https://msdn.microsoft.com/ko-kr/library/gg589484(v=vs.85).aspx
~~~
.wrapper {
    width: 1000px;
    /*height : 100px;*/
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    background-color: #fff;
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
    /*overflow: hidden;*/
}
~~~
- overflow 
    - hidden
        - 넘치면 자른다. 자른 부분은 보이지 않음 
    - auto : 내용이 잘릴 때만 스크롤바가 보인다 
    - scroll : 내용이 넘치지 않아도 스크롤이 보인다 
    - visible : 내용이 더 길어도 그대로 보인다
        -  http://aboooks.tistory.com/84
        - sample: ./04/overflow_sample.html 
~~~
.wrapper {
    width: 1000px;
    height : 700px;
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    background-color: #fff;
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
    overflow: hidden;
}
~~~

<br/>

- wrapper 의 내부 태그 
~~~
<div class="wrapper">
    <div>
        test
    </div>
</div>
~~~
- ::after 
    - 다음에 붙는 것은 
~~~
<div class="wrapper clearfix">
    abcd
    <div>
        test
    </div>
    efgh
</div>
~~~    
~~~
.clearfix::after {
    content: "after내용";
    background-color: red;
}
~~~    
- css 
    - display : 보여지는 방식 
        - table : 테이블 처럼 
    - https://www.w3schools.com/cssref/pr_class_display.asp
~~~
.clearfix::after {
    content: "after내용";
    display: table;
    background-color: red;
}
~~~
- clear 
    - both : float 떠 다니는 것을 좌우 성질 없앰 
        - clear:left => float:left 취소 
        - clear:right => float : right 취소 
~~~
.clearfix::after {
    content: "after";
    display: table;
    clear: both;
    background-color: red;
}
~~~    

<br/>

---

- div : player-0-panel
~~~
<div class="wrapper clearfix">
    <div class="player-0-panel">
        test
    </div>
</div>
~~~
- class : player-0-panel 
~~~
.player-0-panel {
    width:50% ;
    background-color: green;
}
~~~
- float : left 
    - 왼쪽부터 맞추어서 정렬됨 
~~~
.player-0-panel,
.player-1-panel {
    width:50% ;
    float : left ;
    background-color: green;
}
~~~

- player-0-panel, player-1-panel
~~~
<div class="wrapper clearfix">
    <div class="player-0-panel">
        player 0
    </div>
    <div class="player-1-panel">
        player 1
    </div>
</div>
~~~
- css
    - height : 600px
    - padding : 100px 
~~~
.player-0-panel,
.player-1-panel {
    width:50% ;
    float : left ;
    height : 600px ;
    padding : 100px ;
    background-color: green;
}
~~~
- player-0-panel 에
    - class : active 추가 
~~~
<div class="wrapper clearfix">
    <div class="player-0-panel active">
        player 0
    </div>
    <div class="player-1-panel">
        player 1
    </div>
</div>
~~~
- .active
    - 약간 회색 배경   
~~~
.active {
    background-color: #f7f7f7;
}
~~~
- .clearfix::after 필요없는 것 삭제 
~~~
.clearfix::after {
    content: "";
    display: table;
    clear: both;
}
~~~
- .wrapper 의 height 삭제 
~~~
.wrapper {
    width: 1000px;
    /*height : 700px;*/
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    background-color: #fff;
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
    overflow: hidden;
}
~~~

- player1, player2 \<div> 태그 넣기 
~~~
<div class="wrapper clearfix">
    <div class="player-0-panel active">
        <div class="">
            Player 1
        </div>
    </div>
    <div class="player-1-panel">
        <div class="">
            Player 2
        </div>

    </div>
</div>
~~~
- tag > class : player-name 
~~~
<div class="wrapper clearfix">
    <div class="player-0-panel active">
        <div class="player-name">Player 1</div>
    </div>
    <div class="player-1-panel">
        <div class="player-name">Player 2</div>

    </div>
</div>
~~~
- class : player-name 
~~~
.player-name {
    font-size: 40px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 100;
    margin-top: 20px;
    margin-bottom: 10px;
    position: relative;
}
~~~

- font-weight 
    - 범위 : 100 ~ 900 
    - 400 : normal 
    - 700 : bold 
~~~
.active .player-name {
    font-weight: 300;
}
~~~

<br/>

- 태그 추가 class:play-score
~~~
<div class="wrapper clearfix">
    <div class="player-0-panel active">
        <div class="player-name">Player 1</div>
        <div class="player-score">43</div>
    </div>
    <div class="player-1-panel">
        <div class="player-name">Player 2</div>
        <div class="player-score">11</div>

    </div>
</div>
~~~

<br/>

- css : player-score
~~~
.player-score {
    text-align: center;
    font-size: 80px;
    font-weight: 100;
    color: #EB4D4D;
    margin-bottom: 130px;
}
~~~

<br/>

- TAG > player-current-box 추가 
~~~
<div class="wrapper clearfix">
    <div class="player-0-panel active">
        <div class="player-name">Player 1</div>
        <div class="player-score">43</div>
        <div class="player-current-box">
        </div>
    </div>
    <div class="player-1-panel">
        <div class="player-name">Player 2</div>
        <div class="player-score">11</div>
        <div class="player-current-box">
        </div>

    </div>
</div>
~~~

- CSS : .player-current-box 추가 
    - .player-score { 아래에 
~~~
.player-current-box {
    background-color: #EB4D4D;
    color: #fff;
    width: 40%;
    margin: 0 auto;
    padding: 12px;
    text-align: center;
}
~~~  

- TAG : \<div class="player-current-label">Current\</div> 추가
~~~
<div class="wrapper clearfix">
    <div class="player-0-panel active">
        <div class="player-name">Player 1</div>
        <div class="player-score">43</div>
        <div class="player-current-box">
            <div class="player-current-label">Current</div>
        </div>
    </div>
    <div class="player-1-panel">
        <div class="player-name">Player 2</div>
        <div class="player-score">11</div>
        <div class="player-current-box">
            <div class="player-current-label">Current</div>
        </div>

    </div>
</div>
~~~

CSS : .player-current-label 
    - .player-current-box 아래에 
~~~
.player-current-label {
    text-transform: uppercase;
    margin-bottom: 10px;
    font-size: 12px;
    color: #222;
}
~~~ 

- TAG : \<div class="player-current-score">0\</div> 추가 
~~~
<div class="wrapper clearfix">
    <div class="player-0-panel active">
        <div class="player-name">Player 1</div>
        <div class="player-score">43</div>
        <div class="player-current-box">
            <div class="player-current-label">Current</div>
            <div class="player-current-score">11</div>
        </div>
    </div>
    <div class="player-1-panel">
        <div class="player-name">Player 2</div>
        <div class="player-score">11</div>
        <div class="player-current-box">
            <div class="player-current-label">Current</div>
            <div class="player-current-score">0</div>
        </div>

    </div>
</div>
~~~  

- CSS : .player-current-score 추가 
    - .player-current-label 아래에 
~~~ 
.player-current-score {
    font-size: 30px;
}
~~~

- CSS : .active .player-name::after 추가 
    - .player-score 다음에 
~~~
.active .player-name::after {
    content: "\2022";
    font-size: 47px;
    position: absolute;
    color: #EB4D4D;
    top: -7px;
    right: 10px;

}
~~~

TAG : \<button class="btn_new">New Game\</button>
~~~
<div class="wrapper clearfix">
    <div class="player-0-panel active">
        <div class="player-name">Player 1</div>
        <div class="player-score">43</div>
        <div class="player-current-box">
            <div class="player-current-label">Current</div>
            <div class="player-current-score">11</div>
        </div>
    </div>
    <div class="player-1-panel">
        <div class="player-name">Player 2</div>
        <div class="player-score">11</div>
        <div class="player-current-box">
            <div class="player-current-label">Current</div>
            <div class="player-current-score">0</div>
        </div>
    </div>
    <button class="btn-new">New Game</button>
</div>
~~~

- CSS : button, .btn-new 
    - .player-current-score 아래 
~~~
button {
    position: absolute;
    width: 200px;
    left: 50%;
    transform: translateX(-50%);
    color: #555;
    background: none;
    border: none;
    font-family: Lato;
    font-size: 20px;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: 300;
    transition: background-color 0.3s, color 0.3s;
}

button:hover { font-weight: 600; }
button:hover i { margin-right: 20px; }

button:focus {
    outline: none;
}

.btn-new { top : 45px;}
~~~

TAG : \<button class="btn-roll">Roll Dice\</button> 추가 
~~~
<div class="wrapper clearfix">
    <div class="player-0-panel active">
        <div class="player-name">Player 1</div>
        <div class="player-score">43</div>
        <div class="player-current-box">
            <div class="player-current-label">Current</div>
            <div class="player-current-score">11</div>
        </div>
    </div>
    <div class="player-1-panel">
        <div class="player-name">Player 2</div>
        <div class="player-score">11</div>
        <div class="player-current-box">
            <div class="player-current-label">Current</div>
            <div class="player-current-score">0</div>
        </div>
    </div>
    <button class="btn-new">New Game</button>
    <button class="btn-roll">Roll Dice</button>
</div>
~~~

- CSS : .btn-roll { top: 403px;} 추가 
    - .btn-new 아래 
~~~
.btn-roll { top: 403px;}
~~~

- TAG :\<button class="btn-hold">Hold\</button> 추가 
~~~
<div class="wrapper clearfix">
    <div class="player-0-panel active">
        <div class="player-name">Player 1</div>
        <div class="player-score">43</div>
        <div class="player-current-box">
            <div class="player-current-label">Current</div>
            <div class="player-current-score">11</div>
        </div>
    </div>
    <div class="player-1-panel">
        <div class="player-name">Player 2</div>
        <div class="player-score">11</div>
        <div class="player-current-box">
            <div class="player-current-label">Current</div>
            <div class="player-current-score">0</div>
        </div>
    </div>
    <button class="btn-new">New Game</button>
    <button class="btn-roll">Roll Dice</button>
    <button class="btn-hold">Hold</button>
</div>
~~~

- CSS : btn-hold 추가 
    - .btn-roll 아래 
~~~
.btn-hold { top: 467px;}
~~~

- TAG : \<i class="ion-ios-plus-outline">\</i> 추가 
~~~
<button class="btn-new"><i class="ion-ios-plus-outline"></i>New Game</button>
~~~

- TAG : \<i class="ion-ios-loop">\</i>
~~~
<button class="btn-roll"><i class="ion-ios-loop"></i>Roll Dice</button>
~~~

- TAG : \<i class="ion-ios-download-outline">\</i>
~~~
<button class="btn-hold"><i class="ion-ios-download-outline"></i>Hold</button>
~~~

- CSS : i 추가 
    - .btn-hold 아래 
~~~
i {
    color: #EB4D4D;
    display: inline-block;
    margin-right: 15px;
    font-size: 32px;
    line-height: 1;
    vertical-align: text-top;
    margin-top: -4px;
    transition: margin 0.3s;
}
~~~

- CSS : 약간 움직이기 
    - i 아래 
~~~
button:hover { font-weight: 600; }
button:hover i { margin-right: 20px; }

button:focus {
    outline: none;
}
~~~

- TAG : \<input type="text" placeholder="Final score" class="final-score">
~~~
<div class="wrapper clearfix">
    <div class="player-0-panel active">
        <div class="player-name">Player 1</div>
        <div class="player-score">43</div>
        <div class="player-current-box">
            <div class="player-current-label">Current</div>
            <div class="player-current-score">11</div>
        </div>
    </div>
    <div class="player-1-panel">
        <div class="player-name">Player 2</div>
        <div class="player-score">11</div>
        <div class="player-current-box">
            <div class="player-current-label">Current</div>
            <div class="player-current-score">0</div>
        </div>
    </div>
    <button class="btn-new"><i class="ion-ios-plus-outline"></i>New Game</button>
    <button class="btn-roll"><i class="ion-ios-loop"></i>Roll Dice</button>
    <button class="btn-hold"><i class="ion-ios-download-outline"></i>Hold</button>

    <input type="text" placeholder="Final score" class="final-score">
</div>
~~~

- CSS : final-score 
    - 추후에 top:520px 변경 
~~~
.final-score {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 320px;
    color: #555;
    font-size: 18px;
    font-family: 'Lato';
    text-align: center;
    padding: 10px;
    width: 160px;
    text-transform: uppercase;
}
.final-score:focus { outline: none; }
~~~

- TAG : \<img src="./img/dice-5.png" alt="Dice" class="dice"> 추가 
~~~
<div class="wrapper clearfix">
    <div class="player-0-panel active">
        <div class="player-name">Player 1</div>
        <div class="player-score">43</div>
        <div class="player-current-box">
            <div class="player-current-label">Current</div>
            <div class="player-current-score">11</div>
        </div>
    </div>
    <div class="player-1-panel">
        <div class="player-name">Player 2</div>
        <div class="player-score">11</div>
        <div class="player-current-box">
            <div class="player-current-label">Current</div>
            <div class="player-current-score">0</div>
        </div>
    </div>
    <button class="btn-new"><i class="ion-ios-plus-outline"></i>New Game</button>
    <button class="btn-roll"><i class="ion-ios-loop"></i>Roll Dice</button>
    <button class="btn-hold"><i class="ion-ios-download-outline"></i>Hold</button>

    <input type="text" placeholder="Final score" class="final-score">

    <img src="./img/dice-5.png" alt="Dice" class="dice">
</div>
~~~

- CSS : .dice 추가 
    - .final-score 아래에 
~~~
.dice {
    position: absolute;
    left: 50%;
    top: 178px;
    transform: translateX(-50%);
    height: 100px;
    box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.10);
}
~~~

- id 추가 
~~~
    <img src="./img/dice-5.png" alt="Dice" class="dice" id="dice-1">
    <img src="./img/dice-5.png" alt="Dice" class="dice" id="dice-2">
~~~
- CSS : id 추가 
~~~
#dice-1 { top:120px;}
#dice-2 { top:250px;}
~~~ 

- CSS : .winner
~~~
.winner { background-color: #f7f7f7; }
.winner .player-name { font-weight: 300; color: #EB4D4D; }
~~~

<br/>

---
### DOM + Javascript 
- 변수 생성 
- 랜덤 숫자 생성
- DOM 읽기 
- DOM 컨트롤 
- CSS 변경 

<br/>

- id="name-0"
~~~
<div class="player-name" id="name-0">Player 1</div>
~~~

- id="score-0"
~~~
<div class="player-score" id="score-0">43</div>
~~~

- id="name-1"
~~~
<div class="player-name" id="name-1">Player 2</div>
~~~

- id="score-1"
~~~
<div class="player-score" id="score-1">11</div>
~~~

- id="current-0"
~~~
<div class="player-current-score" id="current-0">11</div>
~~~

- id="current-1"
~~~
<div class="player-current-score" id="current-1">0</div>
~~~

<br/>

---

- game.js
    - id : score-0, score-1 
    - 전역변수 
~~~
var scores ;  // score-0, score-1
var roundScore ; // 몇번째 게임인지
var activePlayer ;  // 실행하는 사람

scores = [ 0,0 ] ;
roundScore = 0 ;
activePlayer = 0 ;
~~~

~~~
- Math.random()
    - Math.floor(4.6) = 4 
    - Math.floor(Math.random()*6)+1 ; //1 ~6
~~~

~~~
var scores ;  // score-0, score-1
var roundScore ; // 몇번째 게임인지
var activePlayer ;  // 실행하는 사람
var dice ;

scores = [ 0,0 ] ;
roundScore = 0 ;
activePlayer = 0 ;

dice = Math.floor(Math.random()*6)+1 ; // 1~6 까지 주사위 숫자
console.log("dice="+dice);
~~~
~~~
document.querySelector('#score-0').textContent = dice  ;
~~~

- \</body> 위로 옮김 
~~~
<script type="text/javascript" src="./js/game.js"></script>
~~~

- game.js 
    - #current-0 이 변하게 
~~~
//document.querySelector('#score-0').textContent = dice  ;
document.querySelector('#current-'+activePlayer).textContent = dice  ;
~~~

- game.js
    - innerHTML 
~~~
//document.querySelector('#score-0').textContent = dice  ;
//document.querySelector('#current-'+activePlayer).textContent = dice  ;
document.querySelector('#current-'+activePlayer).innerHTML ='<em>'+dice+'</em>' ;
~~~
- game.js
    - textContent 로 선택 
~~~
//document.querySelector('#score-0').textContent = dice  ;
document.querySelector('#current-'+activePlayer).textContent = dice  ;
//document.querySelector('#current-'+activePlayer).innerHTML ='<em>'+dice+'</em>' ;
~~~    

- #score-0 
    - console에서 x 변수값 체크 
~~~
var x = document.querySelector('#score-0').textContent ;
~~~

<br/>

- 위쪽 주사위 이미지 안 보이게 
~~~
document.querySelector('.dice').style.display = 'none' ; //위쪽 주사위 이미지 안보이게
~~~

<br/>

---

## Events
- events 
    - 웹페이지에 어떤 액션이 일어난 것을 알려준다 
    - 버튼 클릭, 윈도우 사이즈 변화, 스크롤, 키보드 키 
    - 리스너 연동 
        - 이벤트를 계속 기다린다 
        
<br/>

- 스택 : 메소드 
- 큐 : 이벤트 메세지         

![](./04/assets/message_queue.png)   

- .bun-roll 클릭하는 것은
    - Mouse 의 click 이벤트 발생  
    - https://developer.mozilla.org/en-US/docs/Web/Events
~~~
document.querySelector('.btn-roll').addEventListener('click', function(){alert('클릭했습니다.')} ); //callback btn()
~~~    
~~~
//callback 함수 
var btn = function(){
    alert('클릭했습니다.') ;
}
document.querySelector('.btn-roll').addEventListener('click', btn ); //callback btn()
 
~~~

- 윗 부분 주석 처리 
~~~
/*
dice = Math.floor(Math.random()*6)+1 ; // 1~6 까지 주사위 숫자
console.log("dice="+dice);

//document.querySelector('#score-0').textContent = dice  ;
document.querySelector('#current-'+activePlayer).textContent = dice  ;
//document.querySelector('#current-'+activePlayer).innerHTML ='<em>'+dice+'</em>' ;

var x = document.querySelector('#score-0').textContent ;
*/
~~~
      
- 주사위 연동하기 
~~~
var btn = function(){
    //alert('클릭했습니다.') ;
    
    //1. 랜덤한 숫자
    dice = Math.floor(Math.random()*6)+1 ;
    console.log("dice="+dice);
}
document.querySelector('.btn-roll').addEventListener('click', btn ); //callback btn()
~~~ 

- 주사위 그림 
~~~
var btn = function(){
    //alert('클릭했습니다.') ;
    //1. 랜덤한 숫자
    dice = Math.floor(Math.random()*6)+1 ;
    console.log("dice="+dice);

    //2. 결과를 주사위 그림으로 보여주기
    document.querySelector('.dice').style.display = 'block' ;
    
}
~~~

- 주사위 그림 DOM을 변수로 저장하기 
~~~
    //2. 결과를 주사위 그림으로 보여주기
    //document.querySelector('.dice').style.display = 'block' ;
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block' ;
~~~ 

- 클릭했을 때 주사위 그림 변화기 
~~~
var btn = function(){
    //alert('클릭했습니다.') ;
    //1. 랜덤한 숫자
    dice = Math.floor(Math.random()*6)+1 ;
    console.log("dice="+dice);

    //2. 결과를 주사위 그림으로 보여주기
    //document.querySelector('.dice').style.display = 'block' ;
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block' ;
    diceDOM.src = './img/dice-'+ dice +'.png' ;
}
~~~

- getElementById 로 접근 
    - 다음 아래 : document.querySelector('.dice').style.display = 'none' ; //위쪽 주사위 이미지 안보이게
    - 시작할 때 초기값으로 셋팅 
~~~
document.querySelector('.dice').style.display = 'none' ; //위쪽 주사위 이미지 안보이게

document.getElementById('score-0').textContent = '0' ;
document.getElementById('score-1').textContent = '0' ;
document.getElementById('current-0').textContent = '0' ;
document.getElementById('current-1').textContent = '0' ;
~~~

<br/>

---

- 주사위 숫자가 1이면 다음 플레이어로 넘어간다 
~~~
var btn = function(){
    //alert('클릭했습니다.') ;
    //1. 랜덤한 숫자
    dice = Math.floor(Math.random()*6)+1 ;
    console.log("dice="+dice);

    //2. 결과를 주사위 그림으로 보여주기
    //document.querySelector('.dice').style.display = 'block' ;
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block' ;
    diceDOM.src = './img/dice-'+ dice +'.png' ;

    // 3. 주사위 숫자가 1인 아니면 계속 주사위를 굴릴 수 있다
    if(dice !== 1){
        //add score

    } else {
        //next player

    }
}
~~~

- 주사위가 1이 아니면 
    - 기존의 값에 더하고 
    - current- 에 새롭게 숫자를 업데이트 한다 
~~~
    // 3. 주사위 숫자가 1인 아니면 계속 주사위를 굴릴 수 있다
    if(dice !== 1){
        //add score
        roundScore += dice ;
        document.querySelector('#current-'+activePlayer).textContent = roundScore ;

    } else {
        //next player


    }
~~~

- 주사위 1일 나오면 플레이어 변경 
~~~
    // 3. 주사위 숫자가 1인 아니면 계속 주사위를 굴릴 수 있다
    if(dice !== 1){
        //add score
        roundScore += dice ;
        document.querySelector('#current-'+activePlayer).textContent = roundScore ;

    } else {
        //next player
        if(activePlayer === 0){
            activePlayer = 1;
        } else {
            activePlayer = 0 ;
        }
        //activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;

    }
~~~  

- 플레이어가 바뀌면 
    - current-0 , current-1 값 0으로 변경 
~~~
    // 3. 주사위 숫자가 1인 아니면 계속 주사위를 굴릴 수 있다
    if(dice !== 1){
        //add score
        roundScore += dice ;
        document.querySelector('#current-'+activePlayer).textContent = roundScore ;

    } else {
        //next player
        if(activePlayer === 0){
            activePlayer = 1;
        } else {
            activePlayer = 0 ;
        }
        //activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;
        roundScore = 0 ;

        document.getElementById('current-0').textContent = 0 ;
        document.getElementById('current-1').textContent = 0 ;

    }
~~~  

- 플레이어 바뀌면 바탕색 바뀌기 
~~~
    // 3. 주사위 숫자가 1인 아니면 계속 주사위를 굴릴 수 있다
    if(dice !== 1){
        //add score
        roundScore += dice ;
        document.querySelector('#current-'+activePlayer).textContent = roundScore ;

    } else {
        //next player
        if(activePlayer === 0){
            activePlayer = 1;
        } else {
            activePlayer = 0 ;
        }
        //activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;
        roundScore = 0 ;

        //플레이어 바뀔 때 current-0, current-1 값 모두 0으로 바뀌기
        document.getElementById('current-0').textContent = 0 ;
        document.getElementById('current-1').textContent = 0 ;

        //플레이어 해당하는 패널이 배경이 변하기
        document.querySelector('.player-0-panel').classList.remove('active') ;
        document.querySelector('.player-1-panel').classList.add('active') ;

    }
~~~

- 플레이어 바뀔 때 토글로 바탕 변경하기 
~~~
    // 3. 주사위 숫자가 1인 아니면 계속 주사위를 굴릴 수 있다
    if(dice !== 1){
        //add score
        roundScore += dice ;
        document.querySelector('#current-'+activePlayer).textContent = roundScore ;

    } else {
        //next player
        if(activePlayer === 0){
            activePlayer = 1;
        } else {
            activePlayer = 0 ;
        }
        //activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;
        roundScore = 0 ;

        //플레이어 바뀔 때 current-0, current-1 값 모두 0으로 바뀌기
        document.getElementById('current-0').textContent = 0 ;
        document.getElementById('current-1').textContent = 0 ;

        //플레이어 해당하는 패널이 배경이 변하기
        //document.querySelector('.player-0-panel').classList.remove('active') ;
        //document.querySelector('.player-1-panel').classList.add('active') ;
        document.querySelector('.player-0-panel').classList.toggle('active') ;
        document.querySelector('.player-1-panel').classList.toggle('active') ;

    }
~~~       

- 플레이어 바뀔 때 주사위 보이지 않기 
~~~
    // 3. 주사위 숫자가 1인 아니면 계속 주사위를 굴릴 수 있다
    if(dice !== 1){
        //add score
        roundScore += dice ;
        document.querySelector('#current-'+activePlayer).textContent = roundScore ;

    } else {
        //next player
        if(activePlayer === 0){
            activePlayer = 1;
        } else {
            activePlayer = 0 ;
        }
        //activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;
        roundScore = 0 ;

        //플레이어 바뀔 때 current-0, current-1 값 모두 0으로 바뀌기
        document.getElementById('current-0').textContent = 0 ;
        document.getElementById('current-1').textContent = 0 ;

        //플레이어 해당하는 패널이 배경이 변하기
        //document.querySelector('.player-0-panel').classList.remove('active') ;
        //document.querySelector('.player-1-panel').classList.add('active') ;
        document.querySelector('.player-0-panel').classList.toggle('active') ;
        document.querySelector('.player-1-panel').classList.toggle('active') ;

        //플레이어 바뀔 때 주사위 보이지 않기 
        document.querySelector('.dice').style.display = 'none' ;

    }
~~~     

<br/>

---

## Hold 눌렸을 때 
~~~
var hold_btn = function () {
    alert('hold 버튼을 눌렸습니다');
}
document.querySelector('.btn-hold').addEventListener('click',hold_btn) ;
~~~

- 기존의 current 값을 scores 값과 더함 
~~~
var hold_btn = function () {
    //alert('hold 버튼을 눌렸습니다');
    //1. current 값을 scores 에 더함
    scores[activePlayer] += roundScore ;

}
~~~

- btn() 함수의 값을 일부 복사 
~~~
var hold_btn = function () {
    //alert('hold 버튼을 눌렸습니다');
    //1. current 값을 scores 에 더함
    scores[activePlayer] += roundScore ;

    //2. 화면 변경
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer] ;

    //3.

    //4. 다음 플레이어
    if(activePlayer === 0){
        activePlayer = 1;
    } else {
        activePlayer = 0 ;
    }
    //activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;
    roundScore = 0 ;

    //플레이어 바뀔 때 current-0, current-1 값 모두 0으로 바뀌기
    document.getElementById('current-0').textContent = 0 ;
    document.getElementById('current-1').textContent = 0 ;

    //플레이어 해당하는 패널이 배경이 변하기
    //document.querySelector('.player-0-panel').classList.remove('active') ;
    //document.querySelector('.player-1-panel').classList.add('active') ;
    document.querySelector('.player-0-panel').classList.toggle('active') ;
    document.querySelector('.player-1-panel').classList.toggle('active') ;

    //플레이어 바뀔 때 주사위 보이지 않기
    document.querySelector('.dice').style.display = 'none' ;

}
~~~ 

- nextPlayer 함수로 만들기 
~~~
var hold_btn = function () {
    //alert('hold 버튼을 눌렸습니다');
    //1. current 값을 scores 에 더함
    scores[activePlayer] += roundScore ;

    //2. 화면 변경
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer] ;

    //3.
    

    //4. 다음 플레이어
    nextPlayer() ;

}
document.querySelector('.btn-hold').addEventListener('click',hold_btn) ;

//다음 플레이어 바뀔 때 함수로 정리
function nextPlayer() {
    if(activePlayer === 0){
        activePlayer = 1;
    } else {
        activePlayer = 0 ;
    }
    //activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;
    roundScore = 0 ;

    //플레이어 바뀔 때 current-0, current-1 값 모두 0으로 바뀌기
    document.getElementById('current-0').textContent = 0 ;
    document.getElementById('current-1').textContent = 0 ;

    //플레이어 해당하는 패널이 배경이 변하기
    //document.querySelector('.player-0-panel').classList.remove('active') ;
    //document.querySelector('.player-1-panel').classList.add('active') ;
    document.querySelector('.player-0-panel').classList.toggle('active') ;
    document.querySelector('.player-1-panel').classList.toggle('active') ;

    //플레이어 바뀔 때 주사위 보이지 않기
    document.querySelector('.dice').style.display = 'none' ;
}
~~~

- btn() 
    - nextPlayer() 함수로 변경하기 
~~~
var btn = function(){
    //alert('클릭했습니다.') ;
    //1. 랜덤한 숫자
    dice = Math.floor(Math.random()*6)+1 ;
    console.log("dice="+dice);

    //2. 결과를 주사위 그림으로 보여주기
    //document.querySelector('.dice').style.display = 'block' ;
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block' ;
    diceDOM.src = './img/dice-'+ dice +'.png' ;

    // 3. 주사위 숫자가 1인 아니면 계속 주사위를 굴릴 수 있다
    if(dice !== 1){
        //add score
        roundScore += dice ;
        document.querySelector('#current-'+activePlayer).textContent = roundScore ;

    } else {
        //next player
        nextPlayer() ;

    }
}
document.querySelector('.btn-roll').addEventListener('click', btn ); //callback btn()
~~~    
         
- 100보다 점수가 넘으면 처리
    - 3번째 처리 
~~~
var hold_btn = function () {
    //alert('hold 버튼을 눌렸습니다');
    //1. current 값을 scores 에 더함
    scores[activePlayer] += roundScore ;

    //2. 화면 변경
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer] ;

    //3. 100보다 점수가 넘으면 
    if(scores[activePlayer] >= 100) {
        
    }

    //4. 다음 플레이어
    nextPlayer() ;

}
~~~   

- hold-btn 버튼 눌렸을 때 일정한 점수 나오면 winner 
~~~
var hold_btn = function () {
    //alert('hold 버튼을 눌렸습니다');
    //1. current 값을 scores 에 더함
    scores[activePlayer] += roundScore ;

    //2. 화면 변경
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer] ;

    //3. 100보다 점수가 넘으면
    if(scores[activePlayer] >= 20) {
        document.querySelector('#name-'+activePlayer).textContent = 'Winner!' ;

    } else {
        nextPlayer();
    }

    //4. 다음 플레이어
    nextPlayer() ;

}
~~~  
- 주사위 까지 안보이게 
~~~
var hold_btn = function () {
    //alert('hold 버튼을 눌렸습니다');
    //1. current 값을 scores 에 더함
    scores[activePlayer] += roundScore ;

    //2. 화면 변경
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer] ;

    //3. 100보다 점수가 넘으면
    if(scores[activePlayer] >= 20) {
        document.querySelector('#name-'+activePlayer).textContent = 'Winner!' ;
        document.querySelector('.dice').style.display ='none' ; //주사위 안보이게 

    } else {
        nextPlayer();
    }

    //4. 다음 플레이어
    nextPlayer() ;

}
~~~            
- 이겼을 때 클래스 변경 
~~~
var hold_btn = function () {
    //alert('hold 버튼을 눌렸습니다');
    //1. current 값을 scores 에 더함
    scores[activePlayer] += roundScore ;

    //2. 화면 변경
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer] ;

    //3. 100보다 점수가 넘으면
    if(scores[activePlayer] >= 20) {
        document.querySelector('#name-'+activePlayer).textContent = 'Winner!' ;
        document.querySelector('.dice').style.display ='none' ; //주사위 안보이게

        //이겼을 때 클래스 변경
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');

    } else {
        nextPlayer();
    }

    //4. 다음 플레이어
    nextPlayer() ;

}
~~~

<br/>

---

## 새로운 게임 

~~~
//새로운 게임 시작하기
var btn_new = function () {
    alert('새로운 게임 시작 ') ;
}
document.querySelector('.btn-new').addEventListener('click', btn_new) ;
~~~

- 기존 정보 초기화 
~~~
//새로운 게임 시작하기
var btn_new = function () {
    //alert('새로운 게임 시작 ') ;

    //기존 정보 초기화 
    scores = [0,0] ;
    roundScore = 0;
    activePlayer = 0 ;
}
document.querySelector('.btn-new').addEventListener('click', btn_new) ;
~~~

- 초기화 정보 함수 만들기 
~~~
function init() {
    //기존 정보 초기화
    scores = [0,0] ;
    roundScore = 0;
    activePlayer = 0 ;

    document.querySelector('.dice').style.display = 'none' ; //위쪽 주사위 이미지 안보이게

    document.getElementById('score-0').textContent = '0' ;
    document.getElementById('score-1').textContent = '0' ;
    document.getElementById('current-0').textContent = '0' ;
    document.getElementById('current-1').textContent = '0' ;

}

init() ;
~~~

- 초기화 함수로 대체 
~~~
//새로운 게임 시작하기
var btn_new = function () {
    //alert('새로운 게임 시작 ') ;

    //기존 정보 초기화
    init();
}
document.querySelector('.btn-new').addEventListener('click', btn_new) ;
~~~

- 초기화 정보에서 승리했을 때 나타나는 텍스트 바꾸기 
~~~
function init() {
    //기존 정보 초기화
    scores = [0,0] ;
    roundScore = 0;
    activePlayer = 0 ;

    document.querySelector('.dice').style.display = 'none' ; //위쪽 주사위 이미지 안보이게

    document.getElementById('score-0').textContent = '0' ;
    document.getElementById('score-1').textContent = '0' ;
    document.getElementById('current-0').textContent = '0' ;
    document.getElementById('current-1').textContent = '0' ;

    //승리한 winner 텍스트 및 클래스 변경하기 
    document.getElementById('name-0').textContent ='Player 1';
    document.getElementById('name-1').textContent ='Player 2';

}
~~~

- player-0,1-panel 에 대한 클래스 변경하기 
~~~
function init() {
    //기존 정보 초기화
    scores = [0,0] ;
    roundScore = 0;
    activePlayer = 0 ;

    document.querySelector('.dice').style.display = 'none' ; //위쪽 주사위 이미지 안보이게

    document.getElementById('score-0').textContent = '0' ;
    document.getElementById('score-1').textContent = '0' ;
    document.getElementById('current-0').textContent = '0' ;
    document.getElementById('current-1').textContent = '0' ;

    //승리한 winner 텍스트 및 클래스 변경하기
    document.getElementById('name-0').textContent ='Player 1';
    document.getElementById('name-1').textContent ='Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
}
~~~


 


     
