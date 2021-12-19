const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo-list");
let todos = [];

// todo를 입력받아 화면에 그리기.
function onTodoSubmit(event) {
    event.preventDefault();
    const todo = todoInput.value;
    todoInput.value = "";

    // receive values and create todoObj
    const todoObj = {
        id: Date.now(),
        todo: todo,
    }

    // define li
    const li = document.createElement("li");
    li.innerText = todoObj.todo;
    li.id = todoObj.id;

    // define button
    const button = document.createElement("button");
    button.innerText = "💘";

    // append elements
    li.appendChild(button);
    todoList.appendChild(li);

    button.addEventListener("click", deleteTodo);

    // save the todo
    todos.push(todoObj);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// * 어려움 *
function deleteTodo(event) {
    // remove li
    const li = event.target.parentElement;
    li.remove();

    console.log(`good job you made it! 👍`);

    // define new array
    todos = todos.filter((item) => item.id !== parseInt(li.id));

    // remove the element of localstorage
    localStorage.setItem("todos", JSON.stringify(todos));

}

todoForm.addEventListener("submit", onTodoSubmit);

// 페이지 새로고침 시 저장된 todo list를 가져온다.
function isTodoList() {
    // 1. get todos by local storage
    const savedTodos = localStorage.getItem("todos");

    // 저장된 todo list가 있으면
    // json 으로 파싱 한다.
    // todos array에 저장한다.
    // for each를 돈다.
    // li로 그려준다.

    if (savedTodos !== null) {
        const parsedTodos = JSON.parse(savedTodos);
        todos = parsedTodos;
        console.log(todos);

        todos.forEach((item) => {
            const li = document.createElement("li");
            li.innerText = item.todo;
            li.id = item.id;
            const button = document.createElement("button");
            button.innerText = "✅";

            li.appendChild(button);
            todoList.appendChild(li);
            button.addEventListener("click", deleteTodo);
        });
    }

}

// 페이지 새로고침 시 저장되어있는 todo를 가져오기.
isTodoList();

// 저장은 맨 마지막에 !!