const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("h2");

const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden";


function sayHello(username) {
    greeting.innerText = `Hello ${username}, How is it going?`;
}

function onLoginSubmit(event) {
    // submit 의 기본동작인 새로고침을 방지한다.
    event.preventDefault();
    const username = loginInput.value;
    sayHello(username);
    loginForm.classList.add(HIDDEN_CLASS);
    localStorage.setItem(USERNAME_KEY, username);
}

// 페이지 새로 열었을 때 유저정보 확인!
isUser();
// 로그인 기능!
loginForm.addEventListener("submit", onLoginSubmit);


function isUser() {
    const savedUsername = localStorage.getItem(USERNAME_KEY);
    if (savedUsername !== null) {
        // input 창을 숨긴상태 그대로 둔다.
        sayHello(savedUsername);
        loginForm.classList.add(HIDDEN_CLASS);
    } else {
        // input 창을 보여준다
        loginForm.classList.remove(HIDDEN_CLASS);
    }

}

/*
* JS 동작의 흐름
*
* 1. element를 가져온다.
* 2. element의 이벤트를 감지한다.
* 3. element에 이벤트가 발생하면 function을 작동시킨다!!
* */
