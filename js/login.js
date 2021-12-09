const loginForm = document.querySelector("#loginForm");
const InputLogin = document.querySelector("#loginForm input");
const h1 = document.querySelector("h1");

// login 창 submit 발생 시
function loginFormHandler(event) {
    event.preventDefault();
    // const id = loginForm.querySelector("input");
    // id = input.value;
    const id = InputLogin.value;
    localStorage.setItem("id", id);

    loginForm.classList.toggle("hidden");
    h1.innerText = `Hello ${id}, How is it going?`;

}

function isUserId() {
    const id = localStorage.getItem("id");

    if (id !== null) {
        loginForm.classList.toggle("hidden");
        h1.innerText = `Hello ${id}, How is it going?`;
        // console.log(`Hello ${id}`);
    } else {
        console.log("no id");
    }

}

isUserId();
loginForm.addEventListener("submit", loginFormHandler);

