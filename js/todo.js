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

// to do가 submit되면 todo의 내용을 저장한다.
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

    // 태그 생성
    // const li = document.createElement("li");
    // li.innerText = todo;
    // li.className = key;
    // const button = document.createElement("button"); // 버튼을 생성한다.
    // button.innerText = "✅";
    //
    // li.appendChild(button);
    // todoList.appendChild(li);
    //
    //
    //
    // button.addEventListener("click", onButtonClick);
    //
    // function onButtonClick(event) {
    //     console.log(event.target.parentElement);
    //     console.dir(event.target);
    // }
}

//입력창에 to-do를 입력하고 submit이 들어왔을 때
todoForm.addEventListener("submit", onTodoSubmit);
