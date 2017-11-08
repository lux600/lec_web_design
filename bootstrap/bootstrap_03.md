### Container 

- 03/container.html 
~~~
  <head>
    <title>Document</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
  </head>

~~~

- container 브라우저 크기 조절하면 변경됨 
~~~
  <body>
    <h1>Hello, world!</h1>

    <div class="container">aaa</div>
~~~

- 03/css/style.css 파일 생성 
~~~
.green {
    background-color: green;
    height: 100vh;
}
~~~

- 컨테이터 크기 확인 가능 
~~~
  <body>
    <h1>Hello, world!</h1>

    <div class="container green">aaa</div>
~~~

- class container 삭제할 때 
~~~
  <body>
    <h1>Hello, world!</h1>

    <div class="green">aaa</div>
~~~

- 좌우 
~~~
    <div class="container-fluid green">aaa</div>
~~~   
 
<br/>
 
---
 
### Media break points 
 
- 03/css/style.css
    - 브라우저 화면 크기를 줄이면 red 나옴 
~~~
@media (max-width: 575px) {
    .green {
        background-color: red;
        height: 100vh;
    }
}
~~~ 

- 중간 크기 
~~~
@media (max-width: 575px) {
    .green {
        background-color: red;
        height: 100vh;
    }
}

@media (min-width:576px) and (max-width:767px){
    .green {
        background-color: blue;
        height: 100vh;
    }

}
~~~

- 그 외의 화면 크기 
~~~
/*xs*/
@media (max-width: 575px) {
    .green {
        background-color: red;
        height: 100vh;
    }
}

/*sm*/
@media (min-width:576px) and (max-width:767px){
    .green {
        background-color: blue;
        height: 100vh;
    }

}

/*md*/
@media (min-width:768px) and (max-width:991px){
    .green {
        background-color: black;
        height: 100vh;
    }

}

/*lg*/
@media (min-width:992px) and (max-width:1199px){
    .green {
        background-color: black;
        height: 100vh;
    }

}

/*xl*/
@media (min-width:1200px) {
    .green {
        background-color: #c1c1c1;
        height: 100vh;
    }

}
~~~

<br/>

---

## Grid (grid.html) 14


<br/>

- 03/grid.html
~~~
  <body>

    <div class="container con">

    </div>
~~~

- 03/css/style_grid.css
    - em, vh 
        - https://webdesign.tutsplus.com/ko/articles/7-css-units-you-might-not-know-about--cms-22573
~~~
.con {
    background-color: #a1a1a1;
    height: 100vh;
}
~~~

- row, col 
~~~
    <div class="container con">
      <div class="row">
        <div class="col">column 1 </div>
        <div class="col">column 2</div>

      </div>

    </div>
~~~

- col 색깔 넣기 
~~~
    <div class="container con">
      <div class="row">
        <div class="col grey">column 1 </div>
        <div class="col gr">column 2</div>

      </div>

    </div>
~~~
~~~
.grey {
    background-color: orange;
    height: 200px;
}

.gr {
    background-color: red;
    height: 200px;
}
~~~

- col 추가 
~~~
    <div class="container con">
      <div class="row">
        <div class="col grey">column 1 </div>
        <div class="col gr">column 2</div>
        <div class="col grey">column 3 </div>

      </div>

    </div>
~~~

- col size 늘리기 
~~~
    <div class="container con">
      <div class="row">
        <div class="col-sm-6 grey">column 1 </div>
        <div class="col gr">column 2</div>
        <div class="col grey">column 3 </div>

      </div>

    </div>
~~~

- col size 조정 
~~~
    <div class="container con">
      <div class="row">
        <div class="col-sm-6 grey">column 1 </div>
        <div class="col-sm-3 gr">column 2</div>
        <div class="col-sm-3 grey">column 3 </div>

      </div>

    </div>
~~~

- col 2번째 컬럼 조정하기 (뒤부분 여백)
~~~
    <div class="container con">
      <div class="row">
        <div class="col-sm-6 grey">column 1 </div>
        <div class="col-sm-2 gr">column 2</div>
        <div class="col-sm-3 grey">column 3 </div>

      </div>

    </div>
~~~

---

## variable with content grid 15
- 03/grid_variable.html
- row 추가 
~~~
      <div class="row">
        <div class="col-sm-6 grey">column 1 </div>
        <div class="col-sm-2 gr">column 2</div>
        <div class="col-sm-3 grey">column 3 </div>
      </div>
      <div class="row">
        <div class="col-sm-6 grey">column 1 </div>
        <div class="col-sm-2 gr">column 2</div>
        <div class="col-sm-3 grey">column 3 </div>
      </div>
~~~

- 중간에 row 
~~~
    <div class="container con">

      <div class="row">
        <div class="col-sm-6 grey">column 1 </div>
        <div class="col-sm-2 gr">column 2</div>
        <div class="col-sm-3 grey">column 3 </div>
      </div>
      
      <div class="row">1</div>
      
      <div class="row">
        <div class="col-sm grey">column 1 </div>
        <div class="col-sm-6 gr">column 2</div>
        <div class="col-sm-3 grey">column 3 </div>
      </div>

    </div>
~~~

- 크기 재조정 
    - 1번째 col-sm 조정 
    - 3번째 col-sm 조정 
~~~
    <div class="container con">

      <div class="row">
        <div class="col-sm grey">column 1 </div>
        <div class="col-sm gr">column 2</div>
        <div class="col-sm grey">column 3 </div>
      </div>

      <div class="row">1</div>

      <div class="row">
        <div class="col-sm grey">column 1 </div>
        <div class="col-sm-6 gr">column 2</div>
        <div class="col-sm grey">column 3 </div>
      </div>

    </div>
~~~

- 3번째 row 중간을 6에서 5로 조절
~~~
    <div class="container con">

      <div class="row">
        <div class="col-sm grey">column 1 </div>
        <div class="col-sm gr">column 2</div>
        <div class="col-sm grey">column 3 </div>
      </div>

      <div class="row">1</div>

      <div class="row">
        <div class="col-sm-2 grey">column 1 </div>
        <div class="col-sm-5 gr">column 2</div>
        <div class="col-sm grey">column 3 </div>
      </div>

    </div>
~~~

- 2번째 row 의 2번째 col 를 col-md-auto 추가 
    - 2번째 row justify-content-md-center
    - 브라우저 사이즈에 따라 변동  
~~~
    <div class="container con">

      <div class="row">
        <div class="col-sm grey">column 1 </div>
        <div class="col-sm gr">column 2</div>
        <div class="col-sm grey">column 3 </div>
      </div>

      <div class="row">1</div>

      <div class="row justify-content-md-center">
        <div class="col-sm grey">column 1 </div>
        <div class="col-sm col-md-auto gr">column 2 and something</div>
        <div class="col-sm grey">column 3 </div>
      </div>

    </div>
~~~

- 2번째 row 의 col 변경 
~~~
    <div class="container con">

      <div class="row">
        <div class="col-sm grey">column 1 </div>
        <div class="col-sm gr">column 2</div>
        <div class="col-sm grey">column 3 </div>
      </div>

      <div class="row">1</div>

      <div class="row justify-content-md-center">
        <div class="col-sm-2 grey">column 1 </div>
        <div class="col-sm-5 col-md-auto gr">column 2 and something</div>
        <div class="col-sm grey">column 3 </div>
      </div>

    </div>
~~~

<br/>

---

### change layout with screen size 16
- 03/grid_layout.html
~~~
    <div class="container con">

      <div class="row">
        <div class="col-sm grey">column 1 </div>
        <div class="col-sm gr">column 2</div>
        <div class="col-sm grey">column 3 </div>
      </div>

      <div class="row">1</div>

      <div class="row justify-content-md-center">
        <div class="col-sm-6 grey">column 1 </div>
        <div class="col-sm col-md-auto gr">column 2 and something</div>
        <div class="col-sm grey">column 3 </div>
      </div>


      <div class="row">2</div>

      <div class="row">
        <div class="col-sm grey">column 1 </div>
        <div class="col-sm col-md-auto gr">column 2 and something</div>
        <div class="col-sm grey">column 3 </div>
      </div>

    </div>
~~~

- 4개의 col 
~~~
      <div class="row">2</div>

      <div class="row">
        <div class="col-sm grey">column 1 </div>
        <div class="col-sm gr">column 2 </div>
        <div class="col-sm grey">column 3 </div>
        <div class="col-sm gr">column 4</div>
      </div>
~~~

- w-100 추가 
~~~
      <div class="row">2</div>

      <div class="row">
        <div class="col-sm grey">column 1 </div>
        <div class="col-sm gr">column 2 </div>
        <div class="w-100"></div>
        <div class="col-sm grey">column 3 </div>
        <div class="col-sm gr">column 4</div>
      </div>

    </div>
~~~

- 새로운 row 추가 
~~~
      <div class="row">3</div>

      <div class="row">
        <div class="col-sm grey">column 1 </div>
        <div class="col-sm gr">column 2 </div>
        <div class="col-sm grey">column 3 </div>
        <div class="col-sm gr">column 4</div>
      </div>
~~~

- col 제거 
~~~
      <div class="row">3</div>

      <div class="row">
        <div class="col-sm grey">column 1 </div>
        <div class="col-sm gr">column 2 </div>
        <div class="col-sm grey">column 3 </div>
      </div>
~~~

- col-lg 로 브라우저 크기에 따라 변동 
~~~
      <div class="row">3</div>

      <div class="row">
        <div class="col-lg-6 grey">column 1 </div>
        <div class="col-lg-3 gr">column 2 </div>
        <div class="col-lg-3 grey">column 3 </div>
      </div>
~~~

- col-lg col-md 브라우저 크기에 따라 변동 
~~~
      <div class="row">3</div>

      <div class="row">
        <div class="col-lg-6 col-md-4 grey">column 1 </div>
        <div class="col-lg-3 col-md-4 gr">column 2 </div>
        <div class="col-lg-3 col-md-4 grey">column 3 </div>
      </div>
~~~

- col-sm 추가 
~~~
      <div class="row">3</div>

      <div class="row">
        <div class="col-lg-6 col-md-4 col-sm-6 grey">column 1 </div>
        <div class="col-lg-3 col-md-4 col-sm-3 gr">column 2 </div>
        <div class="col-lg-3 col-md-4 col-sm-3 grey">column 3 </div>
      </div>
~~~

<br/>

---

## flex : 이미지와 텍스트 

- 03/flex.html
~~~
    <div class="container con">

      <div class="row">
        <div class="col blue">column 1 </div>
        <div class="col green">column 2</div>
        <div class="col blue">column 3 </div>
      </div>

    </div>
~~~

- 03/css/style_flex.css
~~~
.con {
    background-color: #95a5a6;
    height: 100vh;
}

.blue {
    background-color: #3498db;
    /*height: 200px;*/
}

.green {
    background-color: #2ecc71;
    /*height: 200px;*/
}

.rowHeight {
    background-color: #000;
    height: 200px;
}
~~~

- row , col 변동 , row item start 위 
~~~
    <div class="container con">

      <div class="row rowHeight align-items-start">
        <div class="col-sm blue">column 1 </div>
        <div class="col-sm green">column 2</div>
        <div class="col-sm blue">column 3 </div>
      </div>

    </div>
~~~

- row item center 
~~~
    <div class="container con">

      <div class="row rowHeight align-items-center">
        <div class="col-sm blue">column 1 </div>
        <div class="col-sm green">column 2</div>
        <div class="col-sm blue">column 3 </div>
      </div>

    </div>
~~~

- row item end
~~~
     <div class="container con">

      <div class="row rowHeight align-items-end">
        <div class="col-sm blue">column 1 </div>
        <div class="col-sm green">column 2</div>
        <div class="col-sm blue">column 3 </div>
      </div>

    </div>
~~~

- col 자체 center 넣기 
~~~
    <!--<div class="container con">-->
      <!--<div class="row rowHeight align-items-center">-->
        <!--<div class="col-sm blue">column 1 </div>-->
        <!--<div class="col-sm green">column 2</div>-->
        <!--<div class="col-sm blue">column 3 </div>-->
      <!--</div>-->
    <!--</div>-->

    <div class="container con">
      <div class="row rowHeight">
        <div class="col-sm blue align-self-center">column 1 </div>
        <div class="col-sm green">column 2</div>
        <div class="col-sm blue">column 3 </div>
      </div>
    </div>
~~~

- col self start, center, end 
~~~
    <div class="container con">
      <div class="row rowHeight">
        <div class="col-sm blue align-self-end">column 1 </div>
        <div class="col-sm green align-self-center">column 2</div>
        <div class="col-sm blue align-self-start">column 3 </div>
      </div>
    </div>
~~~

<br/>

---

### flex justify contents 18 
- 03/flex_jusitify.html
~~~
    <div class="container con">
      <div class="row">
        <div class="col-4 blue">Superman</div>
        <div class="col-4 green">Batman</div>
      </div>
    </div>
~~~

- row center 변경 
~~~
    <div class="container con">
      <div class="row justify-content-center">
        <div class="col-4 blue">Superman</div>
        <div class="col-4 green">Batman</div>
      </div>
    </div>
~~~

- 정렬방식 
    - start
    - center
    - end
    - around
    - between 
    
<br/>
    
- 좌우 공간 나게 justify-content-around
~~~
    <div class="container con">

      <div class="row justify-content-around">
        <div class="col-4 blue">Superman</div>
        <div class="col-4 green">Batman</div>
      </div>

    </div>
~~~    

- 좌우 끝에 배치  justify-content-between
    - 메뉴 리스트 
~~~
    <div class="container con">

      <div class="row justify-content-between">
        <div class="col-4 blue">Superman</div>
        <div class="col-4 green">Batman</div>
      </div>

    </div>
~~~

<br/>

---

### Flex properties and nesting grids 19
- 03/flex_property.html
~~~
    <div class="container con">

      <div class="row">
        <div class="col blue">Superman</div>
        <div class="col green">Batman</div>
        <div class="col blue">Spiderman</div>
      </div>

    </div>
~~~

- 2칸 col 띄우기  
~~~
    <div class="container con">

      <div class="row">
        <div class="col-md-4 blue">Superman</div>
        <div class="col-md-4 offset-md-2 green">Batman</div>
      </div>

    </div>
~~~

- offset 
~~~
    <div class="container con">

      <div class="row">
        <div class="col-md-4 blue">Superman</div>
        <div class="col-md-4 offset-md-4 green">Batman</div>
      </div>

    </div>
~~~

- 첫번째 col를 오른쪽 3개 이동 (? 실행되지 않음)
~~~
    <div class="container con">

      <div class="row">
        <div class="col-md-9 push-md-3 blue">Superman</div>
        <div class="col-md-3 green">Batman</div>
      </div>

    </div>
~~~

- batman 이 앞으로 가야되나 (? 실행되지 않음 )
~~~
    <div class="container con">

      <div class="row">
        <div class="col-md-9 push-md-3 blue">Superman</div>
        <div class="col-md-3 pull-md-9 green">Batman</div>
      </div>

    </div>
~~~

<br/>

---

## nesting 
- 03/nesting.html
~~~
    <div class="container con">

      <div class="row">
        <div class="col-md-9 blue">Superman</div>
        <div class="col-md-3 green">Batman</div>
      </div>

    </div>
~~~

- 내부 추가 
~~~
    <div class="container con">

      <div class="row">
        <div class="col-md-9 blue">

          <div class="row">
            <div class="col-md-6">one</div>
            <div class="col-md-6">two</div>
          </div>

        </div>
        <div class="col-md-3 green">Batman</div>
      </div>

    </div>
~~~

- 03/css/style_flex.css
    - red 추가 
~~~
.red {
    background-color: red;
    /*height: 200px;*/
}
~~~
~~~
    <div class="container con">

      <div class="row">
        <div class="col-md-9 blue">

          <div class="row">
            <div class="col-md-6 green">one</div>
            <div class="col-md-6 red">two</div>
          </div>

        </div>
        <div class="col-md-3 green">Batman</div>
      </div>

    </div>
~~~

<br/>

- 정렬 정리 
    - flex-first
    - flex-last
    - offset-md-4
    - push
    - pull
    - nesting 

---

## Awesome 
- 03/awesome.html
- 03/css/awesome.css
- 이미지 4개 https://pixabay.com
- title 
    - https://ko.wikipedia.org/wiki/%EB%A1%9C%EB%A0%98_%EC%9E%85%EC%88%A8

~~~
<link rel="stylesheet" href="./css/awesome.css">
~~~
~~~
body {
    background: url(../img/coffee.jpg);
}
~~~
~~~
<h1>Lorem ipsum dolor sit amet, consectetur adipisicing</h1>
~~~

- css 백그라운드 이미지 조정 
~~~
body {
    background: url(../img/coffee.jpg) no-repeat center fixed;
}
~~~

- css 백그라운드 이미지 전체로 채움 
~~~
body {
    background: url(../img/coffee.jpg) no-repeat center fixed;
    -webkit-background-size: cover;
    background-size: cover;
}
~~~

<br/>

- font 
    - https://fonts.google.com/
    - 웹폰트 추가 
~~~
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet">
    <link rel="stylesheet" href="./css/awesome.css">
~~~

- css 에 추가 
~~~
body {
    background: url(../img/coffee.jpg) no-repeat center fixed;
    -webkit-background-size: cover;
    background-size: cover;
    font-family: 'Anton', sans-serif;
}
~~~

- div.container 추가 
~~~
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>Code is Awesome</h1>
      </div>
    </div>
  </div>
~~~

- row. col 클래스 설정 
~~~
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <h1>Code is Awesome</h1>
      </div>
    </div>
  </div>
~~~

- col 중앙에 
~~~
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-4 align-self-center">
        <h1>Code is Awesome</h1>
      </div>
    </div>
  </div>
~~~

- 글자를 아래로 약간 내리기 
~~~
.rowHeight {
    height: 500px;
}
~~~
~~~
  <div class="container">
    <div class="row justify-content-center text-center rowHeight">
      <div class="col-md-4 align-self-center">
        <h1>Code is Awesome</h1>
      </div>
    </div>
  </div>
~~~

- 타이틀에 박스 씌우기 
~~~
h1 {
    color : #000;
    font-size: 2.5em;
}

.bg {
    background-color: #c1c1c1;
    opacity: 0.8;
}
~~~
- .bg 
~~~
  <div class="container">
    <div class="row justify-content-center text-center rowHeight">
      <div class="col-md-4 align-self-center bg">
        <h1>Code is Awesome</h1>
      </div>
    </div>
  </div>

~~~

- row 새로운 추가 
~~~
  <div class="container">
    <div class="row justify-content-center text-center rowHeight">
      <div class="col-md-4 align-self-center bg">
        <h1>Code is Awesome</h1>
      </div>
    </div>


    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4"></div>
    </div>
  </div>
~~~

- 이미지 추가 
~~~
    <div class="row text-center">
      <div class="col-md-4">
        <img src="./img/city.jpg" alt="city">
      </div>
      <div class="col-md-4">
        <img src="./img/watch.jpg" alt="car">
      </div>
    </div>
~~~

- 이미지 위치 조정 
~~~
    <div class="row justify-content-center text-center">
      <div class="col-md-4 align-self-center">
        <img src="./img/city.jpg" alt="city">
      </div>
      <div class="col-md-4 align-self-center">
        <img src="./img/parrot.jpg" alt="car">
      </div>
    </div>
~~~

- 이미지 썸네일 추가 
~~~
    <div class="row justify-content-center text-center">
      <div class="col-md-4 align-self-center">
        <img src="./img/city.jpg" class="img-thumbnail" alt="city">
      </div>
      <div class="col-md-4 align-self-center">
        <img src="./img/parrot.jpg" class="img-thumbnail"  alt="car">
      </div>
    </div>
~~~

- footer 
~~~
    <div class="row">
      <div class="col-12 text-center footer">
        <p>some copyright &copy this is footer</p>
      </div>
    </div>
~~~
~~~
.footer {
    background-color: #fff;
    
}
~~~

- footer css 추가 : 맨 밑바닥으로 붙음 
~~~
.footer {
    background-color: #fff;
    position: fixed;
    bottom: 0;

}
~~~

- footer row 를 container 바깥으로 
~~~
  </div>

  <div class="row">
    <div class="col-12 text-center footer">
      <p>some copyright &copy this is footer</p>
    </div>
  </div>
~~~

- footer 의 밑의 흰박스 약간 늘리기 
~~~
p {
    font-size: 18px ;
    padding: 10px;
}
~~~


