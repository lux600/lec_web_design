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
    
### 값을 할당하지 않아서 에러가 남 
~~~
var x ;
console.log(u);  //undefined 아래 존재할 경우 
var u = 3;
~~~


### 연산자 순위 
- https://developer.mozilla.org/en-US/docs/Web/Javascript/Reference/Operators/Operator_Precedence
    
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
   
//먼저 값에 의한 복사 
var n = 1;
var m = n ;   
  
console.log(n);  //1
console.log(m) ; //1
   
m = m + 1 ;
console.log(m) ;  // 2  값 복사 
console.log(n) ;  // 1
   
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
function f(){
    console.log(scope);  //"global"이 아닌 "undefined" 표시 
    var scope = "local" ;  // 이곳에 초기화됐지만, 함수 전체에 걸쳐 정의됨 
    console.log(scope) ;
}
f();     
~~~

     
     




