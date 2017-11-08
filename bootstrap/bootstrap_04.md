### Button Color
 
- button.html 
~~~
    <link rel="stylesheet" href="./css/style.css">
~~~
~~~
.con {
    background-color: #a1a1a1;
    height: 100vh;
    margin-top: 50px ;
}
~~~

<br/>

- button 
~~~
  <div class="container con">
    <button type="button">Primary</button>

  </div>
~~~     

- button 여러 종류 
~~~
  <div class="container con">
    <button class="btn btn-primary" type="button">Primary</button>
    <button class="btn btn-secondary" type="button">Secondary</button>
    <button class="btn btn-success" type="button">Success</button>
    <button class="btn btn-info" type="button">Info</button>
    <button class="btn btn-danger" type="button">Danger</button>
    <button class="btn btn-link" type="button">Link</button>

  </div>
~~~

- btn-outline-success
~~~
  <div class="container con">
    <button class="btn btn-primary" type="button">Primary</button>
    <button class="btn btn-secondary" type="button">Secondary</button>
    <button class="btn btn-success" type="button">Success</button>
    <button class="btn btn-info" type="button">Info</button>
    <button class="btn btn-danger" type="button">Danger</button>
    <button class="btn btn-link" type="button">Link</button>
    <button class="btn btn-outline-success" type="button">Link</button>

  </div>
~~~

- 새로운 버튼 
~~~
  <div class="container con">
    <button class="btn btn-primary" type="button">Primary</button>
    <button class="btn btn-secondary" type="button">Secondary</button>
    <button class="btn btn-success" type="button">Success</button>
    <button class="btn btn-info" type="button">Info</button>
    <button class="btn btn-danger" type="button">Danger</button>
    <button class="btn btn-link" type="button">Link</button>
    <button class="btn btn-outline-success" type="button">Link</button>

    <br/>
    <div>1</div>
    <button class="btn btn-outline-danger btn-lg" type="button">this is a button</button>
    <button class="btn btn-outline-danger btn-md" type="button">this is a button</button>
    <button class="btn btn-outline-danger btn-sm" type="button">this is a button</button>

  </div>
~~~

- btn-block 
~~~
    <br/>
    <div>1</div>
    <button class="btn btn-outline-danger btn-lg" type="button">this is a button</button>
    <button class="btn btn-outline-danger btn-md" type="button">this is a button</button>
    <button class="btn btn-outline-danger btn-sm" type="button">this is a button</button>

    <br/>
    <div>2</div>
    <button class="btn btn-outline-info btn-block" type="button">this is a button</button>
~~~

- btn active, disabled
~~~
    <br/>
    <div>2</div>
    <button class="btn btn-outline-info btn-block" type="button">this is a button</button>
    <button class="btn btn-outline-info btn-block active" type="button">this is a button</button>
    
    <button class="btn btn-info btn-block disabled" type="button">this is a button</button>
~~~

<br/>

---

### jumbotron 
- jumbotron.html 
    - 전체 채우기 fluid
~~~
  <div class="container-fluid con">

  </div>
~~~    

- jumbotron
~~~
  <div class="container-fluid con">
    <div class="jumbotron"></div>

  </div>
~~~

- h1 추가 
~~~
  <div class="container-fluid con">
    <div class="jumbotron">
      <h1 class="display-3">Lorem ipsum dolor sit amet.</h1>

    </div>
~~~

- p 추가 
~~~
  <div class="container-fluid con">
    <div class="jumbotron">
      <h1 class="display-3">Lorem ipsum dolor sit amet.</h1>
      <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
        labore</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
        labore</p>
~~~

- a 추가 
~~~
  <div class="container-fluid con">
    <div class="jumbotron">
      <h1 class="display-3">Lorem ipsum dolor sit amet.</h1>
      <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
        labore</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
        labore</p>

      <a href="#" class="btn">Buy now !</a>
~~~

- a btn-success 변경 
~~~
      <a href="#" class="btn btn-success btn-lg">Buy now !</a>
~~~    
  
- 04/css/style.css
  - jumbotron 스타일 변경 
~~~
.jumbotron {
    background-color: forestgreen;
    color: #fff;
    text-align : center
}
~~~

- html jumbotron-fluid 
~~~
  <div class="container-fluid con">
    <div class="jumbotron-fluid">
      <h1 class="display-3">Lorem ipsum dolor sit amet.</h1>
      <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
        labore</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
        labore</p>

      <a href="#" class="btn btn-success btn-lg">Buy now !</a>

    </div>
~~~

<br/>

---
## Menu : navbar (navigation var)

- 04/navbars.html 
    - jumbotron.html 에서 계속 진행 
    - https://getbootstrap.com
        - document > Components > Nabvar 
        - 코드 복사  
~~~
<body>
        
..여기에 복사 

<div class="container">
~~~        
~~~
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
~~~  

- 메뉴 바탕 검게 : navbar-dark bg-dark
~~~
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
~~~

- 메뉴 바탕 primary : <nav class="navbar navbar-dark bg-primary">
~~~
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
~~~

- 메뉴 바탕 없애기 
~~~
<nav class="navbar navbar-expand-lg navbar-light bg-light">
~~~

- 타이틀 바꾸기 : ITCOOP
~~~
  <nav class="navbar navbar-expand-lg navbar-light bg-light">

    <a class="navbar-brand" href="#">ITCOOP</a>
~~~

- 오른쪽 search 를 왼쪽으로 붙이기 : mr-auto 제거 
~~~
  <nav class="navbar navbar-expand-lg navbar-light bg-light">

    <a class="navbar-brand" href="#">ITCOOP</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
~~~

- 오른쪽 search 제거 
~~~
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
~~~

----
## navar
- 04/navbars_extend.html
    - p 태그 제거 
    - container 꽉 차지 않게 
~~~
  <div class="container">
    <div class="jumbotron">
      <h1 class="display-3">Our Custom Navbar.</h1>

      <a href="#" class="btn btn-success btn-lg">Buy now !</a>

    </div>
    
  </div>
~~~

- primary 변경 : navbar-dark bg-primary
~~~
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
~~~

- 로고 앞에 로고 이미지 넣기 
~~~
    <a class="navbar-brand" href="#">
      <img src="./img/itcoop_logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
      ITCOOP</a>
~~~

- home 다음 link 를 About Us, Products, Account 로 바꾸기
    - 나머지는 주석처리     
~~~
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Products</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>

        <!--<li class="nav-item">-->
          <!--<a class="nav-link disabled" href="#">Disabled</a>-->
        <!--</li>-->
        
~~~

- dropdown 설명 
    - dropdown 
    - \<li class="nav-item dropdown">
        - 토글 
        - \<a class="nav-link dropdown-toggle">
        
        
- 흰색 : active
~~~
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
~~~

- Account 메뉴 수정 
~~~
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Account
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Sign Up</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Login</a>
          </div>
        </li>
~~~

<br/>

---

### Carousel
- document > Components > Carousel
    - indicators 복사하기 
    - 04/carousel.html
    - 이미지 04/img/에 복사해 넣기 
~~~
  <div class="container">

    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="./img/city.jpg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="./img/coffee.jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="./img/parrot.jpg" alt="Third slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

  </div>
~~~      
    

        


    
