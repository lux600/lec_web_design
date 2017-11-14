### Lecture: Functions
~~~
function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);


function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement >= 0) {
        console.log(name + ' retires in ' + retirement + ' years.');
    } else {
        console.log(name + ' is already retired.');
    }
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
~~~

### 함수가 스택에 쌓이는 구조 

~~~
var name = "John" ;

function first(){
    var a = "Hello!" ;
    second();
    var a = a + name ;
}

function second(){
    var b = "Hi!" ;
    third();
    var z = b + name ;
}

function third() {
    var c = "Hey!" ;
    var z = c + name ;
}

first() ;

// --- 결과 
// third.z: Hey! John
// second.z : Hey! John
// first.a : Hello! John
~~~

![](./02/assets/function.png)

### Lecture: Statements and expressions
~~~
function someFun(par) {
    //code
}

var someFun = function(par) {
    //code
}

//Expressions
3 + 4;
var x = 3;

//statements
if (x === 5) {
    //do soemthing
}
~~~

<br/>

----
### 배열 
~~~
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names) ;
console.log(names[2]);
names[1] = 'Ben';
console.log(names);


var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.pop();
john.shift();
john.unshift('Mr.');

console.log(john);

console.log(john.indexOf('Smith') ; // 1

if (john.indexOf('teacher') === -1) {
    console.log('John is NOT a teacher.');
}
~~~

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

<br/>
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

<br/>

---
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

var full_1 = printFullAge(years)
var full_2 = printFullAge(years)
~~~
    
<br/>

----
### 객체 

~~~
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);




var jane = new Object();

jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
~~~

### Lecture: Objects and methods
~~~
// v1.0

var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    //calculateAge : function(yearOfBirth) { return 2016 - yearOfBrith); }
    calculateAge: function() {
        return 2016 - this.yearOfBirth;
    }
};

console.log(john.family) ;
console.log(john.family[1]) ;

//console.log(john.calculateAge(1970));

console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);


//v2.0

var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
    }
};

john.calculateAge();
console.log(john);


var mike = {
    yearOfBirth: 1950,
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
    }
};

mike.calculateAge();
console.log(mike);
~~~

<br/>

---
### 무한루프 
~~~
for (var i = 0; i < 10; i++) {
    console.log(i);
}

//결과 
0, true, print 0, update i to 1
1, true, print 1, update i to 2
.
.
.
9, true, print 9, update i to 10
10, FALSE, end loop!

~~~

~~~
var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

// for loops
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}
~~~

### while 
~~~
var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}
~~~

### break and continue 
- break 
    - for 
    - while
    - switch
~~~
for (var i = 1; i <= 5; i++) {
    console.log(i);

    if (i === 3) {
        break;
    }
}

for (var i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}
~~~

### CODING CHALLENGE 2
~~~
//### change 2

/*
1. Create an array with some years where persons were born
2. Create an empty array (just [] )
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of full age (18 or older), as well as their age

5. Finally, create a function called printFullAge which receives the array of years as an argument, executes the steps 2., 3. and 4. and returns an array of true/false boolean values: true if the person is of full age (>= 18 years) and false if not (< 18 years)
6. Call the function with two different arrays and store the results in two variables: full_1 and full_2

Example input:  [1965, 2008, 1992]
Example output: [true, false, true]

Hint: you can use a loop not only to read from an array, like y[i], but also to set values in an array, like y[i] = ... You can also use the specific array methods.
*/
~~~
~~~
function printFullAge(years) {
    var ages = [];
    var fullAges = [];

    for (var i = 0; i < years.length; i++) {
        ages[i] = 2016 - years[i];
    }

    for (i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age.');
            fullAges.push(true);
        } else {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is NOT of full age.');
            fullAges.push(false);
        }
    }

    return fullAges;
}

var years = [2001, 1985, 1994, 2014, 1973];  // 처음에는 var ages=[] 선언
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);
~~~    






