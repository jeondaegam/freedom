/*
* 1. 입력 form 필요!
* 2. 입력된 todo를 보여줄 리스트 필요
* 3. todo를 저장한다.
* 4. 삭제한다.
* */

const todoForm = document.querySelector("form#todo-form");
let InputTodo = todoForm.querySelector("input");
const todoList = document.querySelector("ul#todos"); // id가 todos인 ul
let toDos= [];

function inputTodoHandler(event) {
    event.preventDefault(); // form에 submit이 발생하면 기본동작인 새로고침을 막는다.

    const todo = InputTodo.value; // input창에 입력된 todo를 들고온다.
    const li = document.createElement("li"); // li 태그를 생성한다.
    li.innerText = todo; // todo 내용을 innerText에 저장한다.
    InputTodo.value = ""; // input창을 비워준다.

    const button = document.createElement("button"); // 버튼을 생성한다.
    button.innerText = "✅";
    li.appendChild(button); // append to li
    todoList.appendChild(li); //

    toDos.push(todo); // 배열에 저장
    localStorage.setItem("toDos", toDos);

}

//입력창에 to-do를 입력하고 submit이 들어왔을 때
todoForm.addEventListener("submit", inputTodoHandler);
