var scores ;  // score-0, score-1
var roundScore ; // 몇번째 게임인지
var activePlayer ;  // 실행하는 사람
var dice ;

scores = [ 0,0 ] ;
roundScore = 0 ;
activePlayer = 0 ;

/*
dice = Math.floor(Math.random()*6)+1 ; // 1~6 까지 주사위 숫자
console.log("dice="+dice);

//document.querySelector('#score-0').textContent = dice  ;
document.querySelector('#current-'+activePlayer).textContent = dice  ;
//document.querySelector('#current-'+activePlayer).innerHTML ='<em>'+dice+'</em>' ;

var x = document.querySelector('#score-0').textContent ;
*/

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

init() ;

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

//새로운 게임 시작하기
var btn_new = function () {
    //alert('새로운 게임 시작 ') ;

    //기존 정보 초기화
    init();
}
document.querySelector('.btn-new').addEventListener('click', btn_new) ;

