### Get Started with Bootstrap 4
1. Get Started with Bootstrap 4
2. A project and text - images basics on Bootstrap4
3. Containers, media break point and grid in Bootstrap
4. Color, navbar, jumbotron and a project
5. Cards, modal, forms and A project
6. Farewell

### 툴 확인 
- chrome 설치 
- pycharm 설치 
    1. pycharm 검색 
    2. https://www.jetbrains.com/pycharm/
    3. community 버전 

### 툴 테스트 
- chapter01/01/index.html

~~~
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatiable" content="ie=edge">
~~~

~~~
<body>
<h1>Hello, world!</h1>
</body>
~~~

### Bootstrap manul install

- Bootstrap 다운로드
    - http://getbootstrap.com/
        - 다운로드 : Compiled CSS and JS
            - bootstrap-4.0.0-beta.2-dist
                - css
                    - bootstrap.css
                    - bootstrap.min.css
                - js
                    - bootstrap.js
                    - bootstrap.min.js
- directory : chapter01/01/
    - css
        - bootstrap.css
    - js
        - bootstrap.js
        
### bootstrap css 적용
- chapter01/01/index.html
    
~~~
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="css/bootstrap.css">
~~~    
~~~
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatiable" content="ie=edge">
    <link rel="stylesheet" href="css/bootstrap.css">
    <title>Title</title>
</head>
~~~        

### Bootstrap CDN 
- 콘텐츠 전송 네트워크(Content delivery network 또는 content distribution network (CDN)
~~~
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
~~~

### Bootstrap introduction 
- js 순서 
    - http://getbootstrap.com/docs/4.0/getting-started/introduction/
~~~
<!doctype html>
<html lang="en">
  <head>
    <title>Hello, world!</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
  </body>
</html>
~~~