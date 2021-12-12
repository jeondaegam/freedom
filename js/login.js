const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const logoutButton = document.querySelector("#logout");
const message = document.querySelector("span.message");

const HIDDEN_CLASS ="hidden";
const USERNAME_KEY="username";

// login 창 submit 발생 시 => 이미 로그인창이 떠있다는 의미야!!
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    logoutButton.classList.remove(HIDDEN_CLASS);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    message.innerText = `Hello ${username}, How is it going?`;
}

function sayHello(username) {
    const greetings = [`Hello ${username},\n How is it going?`, `Hello ${username},\n How do you feel today?`];
    //배열은 [] object는 {}
    message.innerText = greetings[Math.floor(Math.random()*greetings.length)];
}

function isUserName() {
    const username = localStorage.getItem(USERNAME_KEY);
    if (username === null) {
        loginForm.classList.remove(HIDDEN_CLASS);
        logoutButton.classList.add(HIDDEN_CLASS);
        loginForm.addEventListener("submit", onLoginSubmit);
    } else {
        sayHello(username);
        loginForm.classList.add(HIDDEN_CLASS);
        logoutButton.classList.remove(HIDDEN_CLASS);
    }
}

isUserName();
loginForm.addEventListener("submit", onLoginSubmit);

function onLogoutClick() {
    localStorage.removeItem(USERNAME_KEY);
    loginForm.classList.remove(HIDDEN_CLASS);
    logoutButton.classList.add(HIDDEN_CLASS);
    // todoForm.classList.add(HIDDEN_CLASS); 작동 X
    message.innerText="";
}

logoutButton.addEventListener("click", onLogoutClick);
