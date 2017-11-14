
/*
//---함수 테스트
function calculateAge(year) {
    console.log(2016-year);
}

calculateAge(1990);
*/

/*
//---현재연도에서 은퇴할 나이까지는 몇년 남았는지
var retirement = function (year) {
    console.log(65-(2016-year)) ;
}

retirement(1990);
*/

/*
//---scope 정리
var age = 23

function foo() {
    var age = 65;
    console.log(age);
}

foo();
console.log(age);
*/

//---scope chain
/*
var a ='Hello!'
first();

function first() {
    var b = 'Hi!'
    second() ;

    function second() {
        var c ='Hey!' ;
        console.log(a+b+c);
    }
}
*/

//---scope chain2
/*
var a ='Hello!'
first();

function first() {
    var b = 'Hi!'
    second() ;

    function second() {
        var c ='Hey!' ;
        third();
    }
}

function third() {
    var d = 'John' ;
    console.log(a + b+ c +d ) ; //a,d 만 출력
}
*/

//--- this 키워드
/*
console.log(this);
*/

/*
function calculateAge(year) {
    console.log(2016 - year);
    console.log(this) ;
}
calculateAge(2000) ;
*/


var john = {
    name : 'John',
    yearOfBirth : 2000,
    calculateAge : function () {
        console.log(this);
        console.log(2017- this.yearOfBirth);

        // function innerFunction() {
        //     console.log(this);
        // }
        // innerFunction();
    }
}
john.calculateAge();

var mike = {
    name :'Mike',
    yearOfBirth : 1990
};

mike.calculateAge = john.calculateAge ;
mike.calculateAge();