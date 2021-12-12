const clock = document.querySelector("#clock");


function HelloMessage() {

    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    // 0~9를 00, 01, 02와 같이 나타낸다.

    const time = `${hours}:${minutes}:${seconds}`;
    clock.innerText = time;
}

HelloMessage(); // 페이지 뜨자마자 시간이 나타나도록 처음 1번 미리 호출
setInterval(HelloMessage, 1000);