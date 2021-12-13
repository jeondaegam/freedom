const message = document.querySelector("#message");
const ASK = "ask";
function onclickMessage() {

    if(message.classList.contains(ASK)) {
        message.innerText = "You";
        message.classList.remove(ASK);
    } else {
        message.innerText ="Who is the Best?";
        message.classList.add(ASK)
    }
    console.log(message);
    console.dir(message);
}

// 1.클릭한다.
// question 이면 =>
// 2. you 로 바꿔줌.
// 3. question 제거
// 2. 클릭한다.

// onclickMessage();
message.addEventListener("click", onclickMessage);
// message.addEventListener("mousemove", onclickMessage);