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

### 배열 조작
- 배열 길이 
    - 배열.length 
    
- 배열 뒤에서 
    - push() 뒤에 추가 
    - pop() 마지막 삭제
- 배열 앞에서    
    - unshift() 배열의 첫번째 삽입
    - shift() 배열의 첫번째 삭제  
  
~~~
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.pop();
john.shift();
john.unshift('Mr.');

console.log(john);
~~~

- join()
    -  모든 원소를 문자열로 변환하고, 이어붙임 
~~~
var a = [1,2,3] ;
var s = a.join() ; //s == "1,2,3"

console.log(s)
~~~

- sort() 
    - 배열 안의 원소를 정렬 
~~~
var a = new Array("banna", "cherry", "apple");
a.sort();
    
console.log(a) ;
~~~
    
- reverse() 
    - 배열 안의 원소를 반대로 정렬 
~~~
var a = new Array(1,2,3);
a.reverse();
    
console.log(a);
~~~
    
- concat()
    - 배열의 모든 원소를 이어 붙여 새롭게 생성 
~~~
var a = [ 1, 2, 3]
a.concat(4,5) ; // [ 1,2,3,4,5]
a.concat([4,5]) ;// [ 1,2,3,4,5]
a.concat([4,5],[6,7]) ; // [1,2,3,4,5,6,7]
a.concat([4, [5,[ 6,7]]) ; // [1,2,3,4,5,[6,7]] 
~~~
         
- slice()
    - 배열의 일부분을 반환 
~~~
var a = [ 1,2,3,4,5] ;
a.slice(0,3) ; // [1,2,3] 
a.slice(3); // [4,5]
a.slice(1,-1) ; // [ 2,3,4 ]
~~~
              
### change 2
~~~
var years = [2001, 1985, 1994, 2014, 1973 ] ;
var ages = [] ;

for (var i= 0; i < years.length ; i++){
    ages[i] = 2016 - years[i] ;
}
    
for (var i =0  ; i < ages.length ; i++){
    if(ages[i] >= 18) {
         console.log('Person '+(i+1) + 'is ' + ages[i] + 'years old,' +
         'and is of full ages.');
     } else {
        console.log('Person '+(i+1) + 'is '+ ages[i]+ 'years old,'+
        'and is NOT of full age.');
     }
}         
~~~    

~~~
function printFullAge(years){
   //위의 소스를 복사해 넣음  
}
~~~

- 추가 사항 
~~~
function printFullAge(years){
   //위의 소스를 복사해 넣음
   var ages = []
   var fullAges= [] ; 추가   
   
    for(){
        if(){
            ...
            fullAges.push(true); //추가 
        
        } else {
            ...
            fullAges.push(false) ;; //추가 
        }
    }
    
    return fullAges ; //추가 
            
}

var full_1 = 
var full_2 = 
~~~
    
---
### 다차원 배열 
~~~
//다차원 배열 생성 
var table = new Array(10);
              
for(var i=0 ; i < table.length ; i++){
    table[i] = new Array(10);
}
 
//배열 초기화                   
for(var row =0 ; row < table.length ; row++){
    for(col = 0 ; col < table[row].length ; col++) {
        table[row][col] = row * col ;
    }
}

// 5*7 을 계산하기 위해 구구단표를 이용 
var product = table[5][7] ; 35                                  
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

---

### ES2015 , ES2016
- ECMAScript 2015, ECMAScript 2016

     
     




