/**
 * Created by sangjunpark on 2017. 11. 13..
 */
///////////////////////////////////////
// Lecture: Functions

/*
function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);


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
yearsUntilRetirement('Mary', 1948);
*/



///////////////////////////////////////
// Lecture: Statements and expressions
/*
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
*/


///////////////////////////////////////
// Lecture: Arrays
/*
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
*/

//### 배열 조작 javascript_01.md


///////////////////////////////////////
// Lecture: Objects
/*
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

*/



///////////////////////////////////////
// Lecture: Objects and methods

// v1.0
/*
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
*/



///////////////////////////////////////
// Lecture: Loops

/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}
*/

/*
0, true, print 0, update i to 1
1, true, print 1, update i to 2
.
.
.
9, true, print 9, update i to 10
10, FALSE, end loop!
*/

/*
var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

// for loops
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}


// while loops
var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}

// break and continue
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
*/



///////////////////////////////////////
// CODING CHALLENGE 2

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

/*
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
*/


/////////////////////////////////////
// Lecture: Hoisting

/*
// functions
calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}

// retirement(1956);
var retirement = function(year) {
    console.log(65 - (2016 - year));
}


// variables

console.log(age);
var age = 23;

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
*/



/////////////////////////////////////
// Lecture: Scoping

/*
// First scoping example
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(c);
    console.log(a+d);
}
*/



/////////////////////////////////////
// Lecture: The this keyword

/*
//console.log(this);

calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};


mike.calculateAge = john.calculateAge;
mike.calculateAge();
*/


/*
var name = "John" ;

function first(){
    var a = "Hello!" ;
    second();
    var a = a + name ;
    console.log("first.a:"+a);
}

function second(){
    var b = "Hi!" ;
    third();
    var z = b + name ;
    console.log("second.z:"+z) ;
}

function third() {
    var c = "Hey!" ;
    var z = c + name ;
    console.log("third.z:"+z) ;
}

first() ;

// --- 결과
// third.z: Hey! John
// second.z : Hey! John
// first.a : Hello! John
*/

//타이머
//setInterval( function(){ console.log("Hello"); }, 1000) ;

// function randomFunc(){
//     var ran = Math.random() ;
//     var round = Math.round( (ran*10)+1) ;
//     var floor = Math.floor( (ran*10)+1) ;
//     var ceil = Math.ceil( (ran*10)+1) ;
//
//     console.log("random:"+ran+", round:"+round+", floor:"+floor+", ceil:"+ceil);
// }
// randomFunc();

// function getDay(day){
//     var dayStr ;
//     switch(day){
//         case 0 :
//             dayStr = "일" ;
//             break ;
//         case 1 :
//             dayStr = "월" ;
//             break ;
//         case 2 :
//             dayStr = "화" ;
//             break ;
//         case 3 :
//             dayStr = "수" ;
//             break ;
//         case 4 :
//             dayStr = "목" ;
//             break ;
//         case 5 :
//             dayStr = "금" ;
//             break ;
//         case 6 :
//             dayStr = "토" ;
//             break ;
//     }
//     return dayStr
// }
//
// var today = new Date();
// document.write("<h3>Document accessed on: "+today.toString());
// document.write("<br/>") ;
// document.write("오늘은 "+today.getFullYear()+"/"+(today.getMonth()+1)+"/"+today.getDate()) ;
// document.write("<br/>") ;
// document.write(getDay(today.getDay())+"요일") ;
// document.write("<br/>") ;
// document.write(today.getHours()+":"+today.getMinutes()+":"+today.getSeconds());

//시간을 읽어와서 '오전/오후 시:분' 형태로 구해주는 함수
function getTime(){
    var now = new Date()
    var hour = now.getHours() ;
    var minute = now.getMinutes() ;
    var ampm ;

    if(hour >=12){
        hour -= 12 ;
        ampm ="오후" ;
    } else {
        ampm ="오전" ;
    }

    if(hour ==0) {
        hour = 12 ;
    }

    if(minute < 10){
        minute = "0"+minute ;
    }

    return ampm+" "+ hour+":"+minute ;
}
//document.write(getTime());

//년과 월을 받아서 마지막 일을 계산해주는 함수
function getDay(year, month){
    var lastMonth = new Array(31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31) ;
    var mon2 ;
    //윤년 체크
    if(year % 4 ==0) {
        mon2 = true ;
    }
    if(year % 100 == 0) {
        mon2 = false ;
    }
    if(year % 400 == 0) {
        mon2 = true ;
    }

    if(mon2){
        lastMonth[1] = 29 ;
    } else {
        lastMonth[1] = 28 ;
    }

    return lastMonth[month] ;
}

//document.write(getDay(2017,10));

//table 을 이용하여 달력을 만들어 줍니다
function drawCalendar(firstDay, lastDate, date, year, month){
    document.write("firstDay:"+firstDay+", lastDate:"+lastDate+", date:"+date+", year:"+year+",month:"+month);

    var text = "<center>" ;
        text +="    <table border=\'1\'>" ;

        text +="        <th colspan=7 bgcolor=#ffffcc>" ;
        text +="            "+year+"년 "+(month+1)+"월" ;
        text +="         </th>" ;

        text +="        <tr>" ;

        var weekDay = new Array("일","월","화","수","목","금","토") ; //나중에 text 위로 올림
        for (var dayNum=0 ; dayNum <=6 ; dayNum++){
            text += "<td width=\'45\' height=\'40\'>"+weekDay[dayNum]+"</td>";  //width, height 는 나중에
        }

        text +="        </tr>" ;

        var digit = 1 ;  //출력되는 날짜
        var curCell = 1 ; //처음시작할 때 빈공간

        //달력 표를 만들어 준다
        // lastDate(마지막날짜)+ firstDay(첫번째 날짜크기) - 1(처음에 더한것) / 7 (일주일 7요일) = 전체 몇주인지
        //console.log(Math.ceil((lastDate + firstDay -1 )/ 7)) ;
        for(var row = 1 ; row <= Math.ceil( (lastDate + firstDay -1 )/ 7 ) ; row++) {
            text += "<tr>" ;

            //1주일을 주기
            for(var col = 1 ; col <=7 ; col++){

                //마지막에 빈공간
                if(digit > lastDate){

                    //마지막 남은 공간의 갯수
                    // 총갯수 : (Math.ceil((lastDate + firstDay-1)/7))*7
                    // curCell(앞의 갯수) + lastDate(마지막날짜) - 1 (앞의 갯수에서 1개 빼기, curCell 이 1바퀴 더 돌기 때문 )
                    n = (Math.ceil((lastDate + firstDay-1)/7))*7 - (curCell + lastDate-1);

                    for(var i=1 ; i <= n ; i++){
                        text +="<td>&nbsp;</td>" ;
                    }
                    //마지막 날짜 뒤의 빈공간을 채우고 나면, 빠져나옴
                    break ;
                }

                //처음 시작할 때 빈공간, firstDay : 처음 시작요일 + 1
                if(curCell < firstDay){
                    text += "<td>&nbsp;</td>" ;
                    curCell++ ;
                }
                else {

                    if(digit == date){
                        text += "<td height=40>" ;
                        text += "<font color=red>"+digit+"</font>" ;
                        text += "<br/>" ;
                        text += "<font color=purple>"+getTime()+"</font>" ;
                        text += "</td>" ;
                    } else {
                        text += "<td height=40>"+digit+"</td>" ;
                    }
                    digit++ ;
                }
            }



            text += "</tr>" ;

        }

        text +="    </table>" ;
        text += "</center>" ;

    return text ;
}

var now = new Date();
var year = now.getFullYear();
var month = now.getMonth();
var date = now.getDate() ; //날짜

var firstDayInstance = new Date(year, month,1) ;
//첫번째 날짜가 몇번째 칸에 존재하는지 확인, 1일의 요일확인후 + 1
var firstDay = firstDayInstance.getDay() + 1 ;

var days = getDay(year, month) ;
// document.write(year+"/"+month+"/"+date);
// document.write("<br/>") ;
// document.write("firstDay:"+firstDay);

my_calendar = drawCalendar(firstDay, days, date, year, month) ;

//최종적으로 그리기
document.write(my_calendar);
