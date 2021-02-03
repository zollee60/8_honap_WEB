async function addTodo(){
    const todo = document.querySelector('#todoTB').value;
    const response = await fetch("http://localhost:3000/todo/add",
    {
        method: 'POST',
        
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({todo: todo})
    });

    renderTodoList();
}

function genDelBtn(id){
    let btn = document.createElement('button');
    btn.textContent = "DELETE";
    btn.addEventListener("click", () => {
        fetch(`http://localhost:3000/todo/${id}`, {
            method: 'DELETE'
        }).then(() => {
            const row = document.querySelector(`#todo-${id}`);
            const table = document.querySelector('#todoTable');
            table.removeChild(row);
        })
    });
    return btn;
}

async function renderTodoList(){
    const response = await fetch("http://localhost:3000/todo/all");
    const data = await response.json();
    let todolist = document.querySelector('#todoTable');
    todolist.innerHTML = '';
    data.todos.forEach(
        (todo) => {
            const row = document.createElement("tr");
            row.id = "todo-"+todo.id;
            const td1 = document.createElement("td");
            td1.innerText = todo.todo;
            const td2 = genDelBtn(todo.id);

            row.appendChild(td1);
            row.appendChild(td2);
            todolist.appendChild(row);
        }
    );
}

document.querySelector("#add").addEventListener("click", () => {
    addTodo();
});

renderTodoList();