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

    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    localStorage.setItem("todos", JSON.stringify(toDos));
    // Q. 왜 localStorage.remove()가 아닌가?
    // todos는 값이 배열이기 때문에, key인 todos를 삭제하면 배열 전체가 삭제되고,
    // 배열 전체가 하나의 string으로 저장되어있기때문에 json object내의 id만 select 불가능하다.

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
    paintTodo(newTodoObj);
    toDos.push(newTodoObj); // 1 배열에 저장한다.
    localStorage.setItem("todos", JSON.stringify(toDos));   // 2. 배열을 storage에 저장한다.
}

//입력창에 to-do를 입력하고 submit이 들어왔을 때
todoForm.addEventListener("submit", onTodoSubmit);
