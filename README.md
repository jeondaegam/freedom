# freedom
자유롭게 코딩하는 프로젝트


#### What is a 'span' ?
아무런 의미를 가지지 않는 태그이다.  
텍스트를 블럭 단위로 잡아 CSS 처리 등을 해야할 때 사용한다.  

#### li 안에 span을 사용하는 이유 ?


### Filter
조건에 맞는 값들을 filter 해서 새로운 array를 만든다.
```javascript
toDos = toDos.filter((toDo) => 
    toDo.id !== parseInt(li.id));
```

### For Each
```javascript
parsedTodos.forEach((todo) => paintTodo(todo));
```

```javascript
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
```