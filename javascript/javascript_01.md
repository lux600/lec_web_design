### 1996 javascript 
- 1996 : LiveScript --> Javascript : Java developer 관심 
- 1997 : ECMAScript 1
    - ECMAScript : The language Standard 
    - Javascript : The language in practice
- 2009 : 많은 기능 
- 2015 :ECMAScript 2015 (ES2015)  
    - big update 
- 2016 :ECMAScript 2016 (ES2016)

### 변수(Variables)의 데이터 타입 Data Types
- Number 
- String
- Boolean 
- Undifined
    - 변수 선언만 하고 값을 넣지(할당) 않은 상태 
- Null 
    - 아예 존재하지 않음 
    - 아무런 값도 나타내지 않는 특수한 값 
    - 숫자 데이터 타입에서는 0으로 반환 
    - 문자열 데이터 타입에서는 null 반환 
    - 불리언 데이터 타입에서는 false 반환 
    
### 변수 출력 
~~~
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
~~~
    
## 변수와 연산자 
- 문자열을 합할 때는 + 기호 
- 숫자는 단순 합산 
~~~
var name = 'John';
var age = 26;

console.log(name + age);  //John26
console.log(age + age);   //52
~~~        
~~~
var name = 'John';
var age = 26;

var job, isMarried;

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

//결과 
John 26 teacher false. Is he married? false
~~~
~~~
var name = 'Jane';
var age, job ;

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

//결과  
Jane is a thirty six years old driver. Is he married? false
~~~
~~~
var lastName = prompt('What is the last name?');
console.log(lastName);

var age = 20 ;
var job = 'driver' ;


alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');
~~~
    
### 값을 할당하지 않아서 에러가 남 
~~~
var x ;
console.log(u);  //undefined 아래 존재할 경우 
var u = 3;
~~~

~~~
var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 * 2;
//2016 - 52
//1964

console.log(birthYear);
~~~

~~~
var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26
//ageJohn = 26

ageJohn++;
ageMark *= 2;
ageMark = ageMark * 2;

console.log(ageJohn);
console.log(ageMark);
~~~

### 연산자 순위 
- https://developer.mozilla.org/en-US/docs/Web/Javascript/Reference/Operators/Operator_Precedence
~~~
var num1 = 10 ;
var num2 = 20 ;
var name = 'John' ;
    
var sum = name + ( num1 + num2) ;
console.log(sum)
~~~    
    
---

### 지역변수, 전역변수
- 지역변수 : 함수 내부에서만 사용하는 변수
    - var 필요 
    
~~~
var scope = "global" ;

functin checkscope(){
    var scope = "local" ;
    console.log(scope) ; //
}

checkscope() ; // "local"
~~~

- 지역변수에 var 안 쓸 경우
~~~
scope = "global" ;

functin checkscope(){
    scope = "local" ;
    console.log("scope:"+scope) ; //
    
    myscope = "local" ;
    console.log("myscope:"+myscope) ;
}

checkscope() ; // "scope:localmyscope:local"
console.log(scope) ; //"local"
console.log(myscope) : //local
~~~

<br/>

- 어디 곳인지 모르는 경우를 대비해서 모두 var 를 붙여주어서 스코프내에 지역변수화 시킴 

<br/>

~~~
var scope = "global scope" ;

function checkscope(){
    var scope = 'local scope' ;
    
    function nested(){
        var scope = 'nested scope' ;
        console.log(scope) ; // 'nested scope'
    }
    
    nested() ; //'nested scope' 
}

checkscope() ; // 'local scope' 
~~~

### 블록 단위 유효 범위가 없다 
- 함수 안에서 정의된 변수는 함수 전체에 걸쳐 유효하다 
    - 변수 i,j,k 의 유효범위는 모두 같다 
~~~
function test(o) {
    var i = 0 ;
    
    if(typeof o == "object"){
        var j = 0; 
        
        for (var k=0 ; k < 10 ; k++){
            console.log(k) ;
        }
        
        console.log(k); //10
    }
    console.log(j) ; //초기화 되지 않을 가능성이 존재 
}     
~~~

~~~
var scope  ="global" ;
function foo(){
    console.log(scope);  //"global"이 아닌 "undefined" 표시 
    var scope = "local" ;  // 이곳에 초기화됐지만, 함수 전체에 걸쳐 정의됨 
    console.log(scope) ;
}
foo();     
~~~

---

### if/else 

~~~
var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes') {
    console.log(name + ' is married!');
} else {
    console.log(name + ' will hopefully marry soon :)');
}
~~~

~~~
var isMarried = true;

if(isMarried) {
    console.log('YES!');
} else {
    console.log('NO!');
}
~~~

    
### 관계연산자에서 ==와 ===의 차이

- ==와 ===는 제법 큰 차이가 있는것으로 알고 있는데요

-  ==는 타입과 상관없이 비교하고 ===는 타입까지 비교한다 
    - "185.3" == 185.3 => true
    - "185.3" === 185.3 => false

- undefined와 null 의 비교 
    - undefined == null => true undefined === null => false
    
### 값에 의한(by value) 조작과 참조에 의한(by reference) 조작 
- 조작 
    - 값을 복사
    - 값을 함수나 메서드의 전달인자로 넘겨줄 때 
    - 두 값이 동일한지를 알아보기 위해 한 값과 다른 값을 비교 
- 타입에 따라서 
    - 기본 타입 
    - 참조 타입
        - 객체, 배열 
~~~
if (23 == "23") {
    console.log('23 == 23 ');  //printed
}

if (23 === "23") {
    console.log('23 === 23');
}
~~~

~~~
var married1 ="yes" ;
var married2 ="yes" ;

if(married1 == married2){
    console.log("married1 ==  married2")
}

if(married1 === married2){
    console.log("married1 === married2") ;
}
~~~

### if/else if/else 
~~~
var age = 20;

// if(age=20) , else 먼저
// if(age <=20)
// and(&&), or(||) 관계
// not(!)

if (age < 20) {
    console.log('John is a teenager');
} else if (age >= 20 && age < 30) {
    console.log('John is a young man.');
} else {
    console.log('John is a man.');
}
~~~

### switch 
~~~
var number ;

number = prompt('What is your favorite number?');

switch (number) {
    case '1':
        console.log('Your favorite number 1');
        break;
    case '2':
        console.log('Your favorite number 2');
        break;
    case '3':
        console.log('Your favorite number 3');
        break;
    default:
        console.log('기타 번호');
}
~~~
   
## code challenge
~~~
/*
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game :)

1. Create variables for the heights and ages of two friends and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score).

4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)


// SOLUTION:
var heightJohn = 170;
var heightMike = 195;
var ageJohn = 36;
var ageMike = 29;

var scoreJohn = heightJohn + 5 * ageJohn;
var scoreMike = heightMike + 5 * ageMike;


if (scoreJohn > scoreMike) {
    console.log('John wins the game with ' + scoreJohn + ' points!');
} else if (scoreMike > scoreJohn) {
    console.log('Mike wins the game with ' + scoreMike + ' points!');
} else if (scoreJohn === scoreMike) {
    console.log('There is a draw.');
}

var heightMary = 158;
var ageMary = 31;
var scoreMary = heightMary + 5 * ageMary;


if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John wins the game with ' + scoreJohn + ' points!');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike wins the game with ' + scoreMike + ' points!');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary wins the game with ' + scoreMary + ' points!');
} else {
    console.log('It\'s a draw.');
}
~~~
     
     




