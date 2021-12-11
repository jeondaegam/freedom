/*
* 1. 입력 form 필요!
* 2. 입력된 todo를 보여줄 리스트 필요
* 3. todo를 저장한다.
* 4. 삭제한다.
* */

const todoForm = document.querySelector("form#todo-form");
let InputTodo = todoForm.querySelector("input");
const todoList = document.querySelector("ul#todos"); // id가 todos인 ul
let toDos = [];

// delete todo
function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();

    const target = event.target.parentElement.id;
    localStorage.removeItem(target);
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
}

// 화면에 그려줄 tag 생성
function paintTodo(newTodoObj) {
    // new li
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    li.innerText = newTodoObj.todo;

    // add button
    const button = document.createElement("button"); // 버튼을 생성한다.
    button.innerText = "✅";

    // finish todo
    button.addEventListener("click", deleteTodo);

    // append
    li.appendChild(button);
    todoList.appendChild(li);
}

// todo를 local storage에 저장
function onTodoSubmit(event) {
    event.preventDefault();

    const todo = InputTodo.value; // input창에 입력된 todo를 들고온다.
    InputTodo.value = "";

    const newTodoObj = {
        id: Date.now(),
        todo: todo,
    };
    // 저장
    localStorage.setItem("toDos", JSON.stringify(newTodoObj));
    toDos.push(newTodoObj);

    paintTodo(newTodoObj);
}

//입력창에 to-do를 입력하고 submit이 들어왔을 때
todoForm.addEventListener("submit", onTodoSubmit);
