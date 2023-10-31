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
