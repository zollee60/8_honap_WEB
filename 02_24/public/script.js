async function addBook(){
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const published_at = document.getElementById('published_at').value;
    const finished = document.getElementById('finished').checked;

    const book = {
        title: title,
        author: author,
        published_at: published_at,
        finished: finished
    }
    const response = await fetch("http://localhost:3000/book/add",
    {
        method: 'POST',
        
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });

    renderBookList();
}

function DeleteElement(id){
        let btn = document.createElement('button');
        btn.textContent = "DELETE";
        btn.addEventListener("click", () => {
            fetch(`http://localhost:3000/book/${id}`, {
                method: 'DELETE'
            }).then(() => {
                renderBookList();
            })
        });
        return btn;
}

function genCheckBox(id,finished){
    let cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = finished;
    cb.addEventListener("change", () => {
        fetch(`http://localhost:3000/book/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({finished: cb.checked})
        })
    });
    return cb;
}

async function renderBookList(){
    const response = await fetch("http://localhost:3000/book/all");
    const data = await response.json();
    let todolist = document.querySelector('#cTable');
    todolist.innerHTML = '';
    data.books.forEach(
        (book) => {
            const row = document.createElement("tr");
            row.id = "book-"+book.id;
            const td1 = document.createElement("td");
            td1.innerText = book.title;
            const td2 = document.createElement("td");
            td2.innerText = book.author;
            const td3 = document.createElement("td");
            td3.innerText = book.published_at;
            const td4 = document.createElement("td");
            let cb = genCheckBox(book.id,book.finished);
            td4.appendChild(cb);
            const del = DeleteElement(book.id);

            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
            row.appendChild(td4);
            row.appendChild(del);
            todolist.appendChild(row);
        }
    );
}

document.querySelector('#add').addEventListener('click', () => {
    addBook();
})

renderBookList();

