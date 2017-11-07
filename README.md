### GitHub
- ssh git@github.com:lux600/lec_web_design.git

### …or create a new repository on the command line
- echo "# lec_web_design" >> README.md
- git init
- git add README.md
- git commit -m "first commit"
- git remote add origin git@github.com:lux600/lec_web_design.git
- git push -u origin master

### …or push an existing repository from the command line
- git remote add origin git@github.com:lux600/lec_web_design.git
- git push -u origin master

---

### 반응형 디자인 시작하기 (page2)
- 반응형 웹디장니 정의 
- 브라우저 지원 수준을 결정하는 방법
- 간단한 HTML5 페이지 
- 뷰포트 meta 태그의 중요성 
- 이미지 스케일을 만드는 방법 
- CSS3 미디어 쿼리로 디자인 브레이크 포인트 만들기 
- 기본 예제들 
- 반응형 디자인의 탐구가 더 필요한 이유 
- 코드 다운로드 : https://github.com/benfrain/rwd
### 반응형 웹 디자인의 핵심 (page3)
- 반응형 웹 디자인은 뷰포트와 디바이스에 따라 웹 콘텐츠를 가장 적절한 포맷으로 보여주는 것이다
 
### 브라우저 지원 수준 결정 (page5)
- http://caniuse.com/

---

### 기본파일 chapter1 / index.html 
- head 에서 주석처리 
~~~
	<head>
		<meta charset="utf-8">
		<title>Our first responsive web page with HTML5 and CSS3</title>
		<meta name="description" content="A basic responsive web page – an example from Chapter 1">
		<!--<meta name="viewport" content="width=device-width">-->
		<!--<link rel="stylesheet" href="css/styles.css">-->
	</head>
~~~
 
- 브라우저에서 기본적으로 보이는 영역을 "뷰포트"  
- 이미지의 크기를 최대 100% 
    - 로고 이미지도 100% 될 가능성이 존재 
~~~
	<head>
		<meta charset="utf-8">
		<title>Our first responsive web page with HTML5 and CSS3</title>
		<meta name="description" content="A basic responsive web page – an example from Chapter 1">
		<meta name="viewport" content="width=device-width">
		<link rel="stylesheet" href="css/styles.css">
	</head>
~~~
~~~
img {
    max-width: 100%;
}
~~~

- 확장된 모니터에서 보면 1400px 스크린에서 너무 크게 이미지가 보임 
    - 미디어 쿼리 사용 
    - em (상위기준), rem(root em) 차이 
        - https://webdesign.tutsplus.com/ko/tutorials/comprehensive-guide-when-to-use-em-vs-rem--cms-23984
        - http://indivdot.github.io/css/2016/03/26/emrem.html
 
