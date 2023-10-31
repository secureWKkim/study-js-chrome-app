const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");


// 첫번째 인자는 항상 브라우저에서 방금 벌어진 일에 대한 정보가 전달된다. JS 자체가 그런 거다.
function onLoginSubmit(event) {
    event.preventDefault(); //어떤 이벤트든 기본 행동 즉 폼 제출 후 새.고가 발생하지 않도록 막는 역할
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit)