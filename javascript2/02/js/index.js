/*
var john = {
    name: 'John',
    yearOfBirth : 1998,
    job : 'teacher'
};

var Person = function (name,yearOfBirth, job) {
    this.name = name ;
    this.yearOfBirth = yearOfBirth ;
    this.job = job ;
}

Person.prototype.calculateAge = function () {
    console.log(2017-this.yearOfBirth);
}

Person.prototype.lastName = 'Smith' ;

var john = new Person('John',1990, 'teacher');
var jane = new Person('Jane',1969, 'designer');
var mark = new Person('Mark',1948, 'retired') ;

john.calculateAge() ;
jane.calculateAge() ;
mark.calculateAge() ;

console.log(john.lastName);
console.log(jane.lastName) ;
console.log(mark.lastName) ;
*/

/*
//Object create
var personProto = {
    calculateAge : function () {
        console.log(2017- this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = 'John' ;
john.yearOfBirth = 1990 ;
john.job ='teacher' ;

var jane = Object.create(personProto, {
    name : {value :'Jane'},
    yearOfBirth : { value : 1969},
    job : { value : 'designer'}
});
*/

/*
// Primitives vs objects ;
var a = 23 ;
var b = a ;
a = 46 ;
console.log(a) ; //46
console.log(b) ; //23

var obj1 = {
    name : 'John',
    age : 26
}

var obj2 = obj1 ;
obj1.age = 30 ;
console.log(obj1.age) ; // 30
console.log(obj2.age) ; // 30

//Functions
var age = 27 ;
var obj = {
    name : 'Jonas',
    city : 'Lisbon'
};

function change(a,b) {
    a = 30 ;
    b.city = 'San Francisco';
}

change(age, obj) ;

console.log(age);  // 27
console.log(obj.city) ;  // San Francisco
*/

/*
var yearsArr = [1990, 1965, 1937, 2005, 1998] ;

function arrayCalc(arr, fn) {
    var resultArr = [] ;
    for(var i=0 ; i < arr.length ; i++){
        resultArr.push(  fn(arr[i]) )
    }

    return resultArr ;
}

function calculateAge(year) {
    return 2017 - year ;
}

function isFullAge(age) {
    return age >= 18 ;
}

function maxHeartRate(age) {
    if(age >= 18 && age <= 81){
        var check = 206.9 - (0.67 * age)
        return Math.round(check) ;  //소수점 반올림
    } else {
        return -1 ;
    }
}

var ages = arrayCalc(yearsArr, calculateAge) ;
console.log(ages)

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges)

var rates = arrayCalc(ages, maxHeartRate) ;
console.log(rates)

*/

/*
//함수를 리턴하기
function interViewQuestion(job) {
    if(job ==="designer"){
        return function (name) {
            console.log(name + ', 어떠한 종류의 UX 디자이너입니까?');
        }

    } else if(job === "teacher") {
        return function (name) {
            console.log(name + ", 무슨 과목을 가르치십니까?") ;
        }

    } else {
        return function (name) {
            console.log(name+', 무슨 일을 하십니까?') ;
        }
    }
}

var teacherQuestion = interViewQuestion('teacher') ;
teacherQuestion('John');

var designerQuestion = interViewQuestion('designer') ;
designerQuestion('Jane') ;
designerQuestion('John') ;

var programmerQuestion = interViewQuestion('programmer');
programmerQuestion('Peter') ;

interViewQuestion('teacher')('Mark') ;

*/

/*
//함수 선언 및 실행 한번에 하기
function game() {
    var score = Math.random() * 10 ;
    console.log( score >=5 ) ;
}
game() ;

(function () {
    var score = Math.random() * 10 ;
    console.log( score >=5 ) ;
})();


(function (goodLuck) {
    var score = Math.random() * 10 ;
    console.log("score="+score) ;
    console.log( score >= ( 5 - goodLuck)  ) ;
})(1);

*/

/*
//클로저
function retirement(retireAge) {
    return function (birthYear) {
        var age = 2017 - birthYear ;
        var remainYear = retireAge - age ;
        console.log('은퇴까지 ' +remainYear +' 년 남았습니다' ) ;
    }
}

var retireKorea = retirement(65) ;
retireKorea(1990) ;

retirement(66)(2000) ;

var retireUS = retirement(60);



function interviewQuestion(job) {
    return function(name) {
        if(job === 'designer'){
            console.log(name + ', 어떠한 종류의 UX 디자이너입니까?');
        } else if( job == 'teacher'){
            console.log(name + ", 무슨 과목을 가르치십니까?") ;
        } else {
            console.log(name+', 무슨 일을 하십니까?') ;
        }
    }
}

interviewQuestion('teacher')('John') ;
*/

var john = {
    name : 'John',
    age : 26,
    job: 'teacher',
    presentation : function (style, timeOfDay) {
        if(style === 'formal'){
            console.log('Good '+timeOfDay+' , 저의 이름은 '+this.name+ ', 직업은 '+this.job+', 나이는 '+this.age+ ' 입니다');

        } else if(style === 'friendly'){
            console.log('Good '+timeOfDay+' What\'s up, 저의 이름은 '+this.name+ ', 직업은 '+this.job+', 나이는 '+this.age+' 입니다');
        }
    }
}

var emily = {
    name :'Emily',
    age : 20,
    job : 'designer'
}

john.presentation('formal','morning');

john.presentation.call(emily, 'friendly','afternoon' ) ;
john.presentation.apply(emily, ['friendly','afternoon'] ) ;

var johnFriendly = john.presentation.bind(john, 'friendly') ;
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal') ;
emilyFormal('afternoon') ;



var yearsArr = [1990, 1965, 1937, 2005, 1998] ;

function arrayCalc(arr, fn) {
    var resultArr = [] ;
    for(var i=0 ; i < arr.length ; i++){
        resultArr.push(  fn(arr[i]) )
    }

    return resultArr ;
}

function calculateAge(year) {
    return 2017 - year ;
}

function isFullAge(limit, age) {
    return age >= limit ;
}

var ages = arrayCalc(yearsArr, calculateAge) ;
console.log(ages);

var fullChina = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(fullChina);



