# Study JS by "nomad coders"' lecture "Building Chrome App Named 'Momentum'"

## 4. LOGIN
### 4.0 Input Values
이름 입력할 때 버튼 클릭해 입력받은 값 저장하는 법을 배움. 폼 즉 html에 input 태그?요소?가 있음. 이걸 querySelector로 찾아와 다음과 같이 처리.
```javascript
function onLoginBtnClick() { console.log("hi", loginInput.value); }
loginButton.addEventListener("click", onLoginBtnClick);
```
<br><br>


### 4.1 Form Submission
데브코스 html 강의에서 들었던 것처럼 input 태그에서 지원하는 옵션 엄청 많고, 그 중 required 란 옵션?기능?도 있고 이에 대해 maxlength(그외에도 type, placeholder 등) 란 옵션도 미리 설정 가능. 이거 사용하면 자스로 인풋값 길이의 유효성 검사 굳이 안해도 되지만, 문제는 이 maxlength라는 유효성 검사 기능 사용하려면 div 안에 있는 input은 안됨. form 안에 있는 것만 가능함. 그래서 기존 index.html 파일에서 "<form id="login-form">" 이렇게 바꿔주면 가능... 그러나 이 때 문제는, maxlength 이상으로 입력 후 제출하면 웹사이트를 맘대로 재시작 해버림 form이 계속 제출돼버리고 있기 때문.
<br><br>


### 4.2 Events
새로고침이 일어나는 건 submit의 기본 옵션이자 동작이다. 브라우저는 엔터 누를 때 새고를 하고 폼을 제출하도록 돼있다. 이 기본 동작을 멈추게 하는 게 목표다.<br>
지금까지 브라우저는 브라우저 내에서 이벤트로부터 정보를 잡아내, onLoginSubmit 함수 실행 버튼을 누르고 있었다. 다음과 같이 그 제출한 이벤트 안의 기본 옵션에 어떤 것들이 있는지 알아볼 수 있다.
```javascript
function onLoginSubmit(tomato) {
    tomato.preventDefault();
    console.log(tomato);
}
loginForm.addEventListener("submit", onLoginSubmit)
```
그 결과는 아래와 같다.<br>
<div align="center">
<img width="70%" src="readme-img/img1.png">
</div>
<br>

