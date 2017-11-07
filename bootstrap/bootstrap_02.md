## Text
- bootstrap/02/text.html 
    - 01/index.html 를 복사 
    - Content > Typography
        - http://getbootstrap.com/docs/4.0/content/typography/
    - Lorem ipsum dolor sit amet.
        - https://ko.wikipedia.org/wiki/%EB%A1%9C%EB%A0%98_%EC%9E%85%EC%88%A8             
    
~~~
  <body>
    <h1>Lorem ipsum dolor sit amet.</h1>
    <h2>Lorem ipsum dolor sit amet.</h2>
    <h3>Lorem ipsum dolor sit amet.</h3>
~~~    
- \<p> 태그 
~~~
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
~~~
- \<p class="h1">
~~~
    <p class="h1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
      et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
~~~


- \<h3 class="display-1">
~~~
<h3 class="display-1">Lorem ipsum dolor sit amet.</h3>
~~~

- \<h3 class="display-4">
~~~
<h3 class="display-4">Lorem ipsum dolor sit amet.</h3>
~~~

- \<p class="text-muted">
~~~
    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
      labore
      et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
~~~

- \<p class="lead">
~~~
    <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
      labore
      et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
~~~

- \<mark>consectetur adipisicing elit\</mark>
~~~
<p class="lead">Lorem ipsum dolor sit amet, <mark>consectetur adipisicing elit</mark>
~~~

- blockquote
~~~
    <div class="container">
      <blockquote class="blockquote">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor </p>
          <footer class="blockquote-footer">Joh Doe</footer>
      </blockquote>
    </div>
~~~

<br/>

--- 

## More on texts 

~~~
    <div class="container">
      <ul>
        <li>one there</li>
        <li>one there</li>
        <li>one there</li>
        <li>one there</li>
        <li>one there</li>
      </ul>
    </div>
~~~

- 좌우로 리스트 
~~~
      <ul class="list-inline">
        <li>one there</li>
        <li>one there</li>
        <li>one there</li>
        <li>one there</li>
        <li>one there</li>
      </ul>
~~~

~~~
      <ul class="list-inline">
        <li class="list-inline-item">one there</li>
        <li class="list-inline-item">one there</li>
        <li class="list-inline-item">one there</li>
        <li class="list-inline-item">one there</li>
        <li class="list-inline-item">one there</li>
      </ul>
~~~

- blockquote
~~~
    <div class="container">

      <code>&lt;blockquote&gt;</code>
      
    </div>
~~~

- ctrl 검은 배경 박스 
~~~
    <div class="container">

      <code>&lt;blockquote&gt;</code>
      <kbd>ctrl</kbd>
      
    </div>
~~~

<br/>

---

### Image 
 
- 02/images.html
    - 좌우 크기 줄여도 그대로 
    - https://pixabay.com/en/easter-eggs-colorful-easter-2168521/

~~~
    <div class="container">

      <img src="./img/eggs.jpg" alt="eggs">

    </div>
~~~ 

- 좌우 크기 변할 때 이미지 크기도 변동 
~~~
    <div class="container">

      <img class="img-fluid" src="./img/eggs.jpg" alt="eggs">

    </div>
~~~

- 새로운 이미지 추가
    - 곁둘레 박스     
~~~
    <div class="container">

      <img class="img-fluid" src="./img/eggs.jpg" alt="eggs">


      <h2>Lorem ipsum dolor sit amet.</h2>
      <img class="img-fluid img-thumbnail" src="./img/pencils.jpg" alt="pencil">

    </div>
~~~

- 윗 이미지 오른쪽에 배치 
~~~
    <div class="container">

      <img class="img-fluid float-right" src="./img/eggs.jpg" alt="eggs">


      <h2>Lorem ipsum dolor sit amet.</h2>
      <img class="img-fluid img-thumbnail" src="./img/pencils.jpg" alt="pencil">

    </div>
~~~

<br/>

---

### project watch 
- 02/watch.html
~~~
    <div class="container">
        <h1>We are comming with Watches</h1>
    </div>
~~~

- 02/watch.html
~~~
<link rel="stylesheet" href="./css/style.css">
~~~

- 02/css/style.css
~~~
body {
    background: url(../img/watch_blue.jpg) no-repeat center fixed;
}
~~~

- 백그라운드 이미지 전체로 채움  
~~~
body {
    background: url(../img/watch_blue.jpg) no-repeat center fixed;
    background-size: cover;
}
~~~

### 텍스트 class 추가
- watch.html 
~~~
    <div class="container">
        <h1 class="hero">We are comming with Watches</h1>
    </div>
~~~
~~~
.hero {
    color: #fff;
}
~~~

- 텍스트 위의 마진 
~~~
.hero {
    color: #fff;
    margin-top: 20%;
}
~~~

- 텍스트 가운데  
~~~
.hero {
    color: #fff;
    margin-top: 20%;
}
~~~

- 텍스트 조정 
~~~
.hero {
    color: #fff;
    margin-top: 20%;
    text-align: center;
    font-size:75px;
    letter-spacing:-0.05em;
    line-height:1.2em;
}
~~~

## 구글 폰트 
- https://fonts.google.com/
    - import 
    - css
~~~
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Rozha+One" rel="stylesheet">
    <link rel="stylesheet" href="./css/style.css">
~~~
~~~
.hero {
    color: #fff;
    margin-top: 20%;
    text-align: center;
    font-size:75px;
    letter-spacing:-0.05em;
    line-height:1.2em;
    font-family: 'Rozha One', serif;
}
~~~
    
<br/>
    
----

### watch - add thumbnail 
- 이미지 추가 
~~~
    <div class="container">
        <h1 class="hero">We are comming with <span class="display-1">Watches</span> </h1>
        <img src="./img/watch.jpg" alt="watch">
    </div>
~~~

- 이미지 css class 추가 
~~~
    <div class="container">
        <h1 class="hero">We are comming with <span class="display-1">Watches</span> </h1>
        <img class="ima" src="./img/watch.jpg" alt="watch">
    </div>
~~~
~~~
.ima {
    width: 200px;
    height: 100px;
}
~~~

- img thumbnail 
~~~
    <div class="container">
        <h1 class="hero">We are comming with <span class="display-1">Watches</span> </h1>
        <img class="ima img-thumbnail" src="./img/watch.jpg" alt="watch">
    </div>
~~~

- 이미지 위치 변경 : d-block
~~~
    <div class="container">
        <h1 class="hero">We are comming with <span class="display-1">Watches</span> </h1>
        <img class="ima img-thumbnail d-block" src="./img/watch.jpg" alt="watch">
    </div>
~~~

- 이미지 위치 변경 2 : mx-auto
~~~
<img class="ima img-thumbnail d-block mx-auto" src="./img/watch.jpg" alt="watch">
~~~

- 이미지 추가 
~~~
    <div class="container">
        <h1 class="hero">We are comming with <span class="display-1">Watches</span> </h1>
        <img class="ima img-thumbnail d-block mx-auto" src="./img/watch.jpg" alt="watch">

        <div class="text-center">
          <img src="./img/watch.jpg" class="ima img-thumbnail" alt="watch">
        </div>
    </div>
~~~



    
