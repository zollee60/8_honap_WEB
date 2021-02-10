async function addChar(){
    const name = document.getElementById('charTB').value;
    const race = document.getElementById('race').value;
    const gender = document.getElementById('gender').value;
    const caste = document.getElementById('caste').value;

    const char = {
        name: name,
        race: race,
        gender: gender,
        caste: caste
    }
    const response = await fetch("http://localhost:3000/char/add",
    {
        method: 'POST',
        
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(char)
    });

    renderCharList();
}

function DeleteElement(id){
        let btn = document.createElement('button');
        btn.textContent = "DELETE";
        btn.addEventListener("click", () => {
            fetch(`http://localhost:3000/char/${id}`, {
                method: 'DELETE'
            }).then(() => {
                const row = document.querySelector(`#char-${id}`);
                const table = document.querySelector('#cTable');
                table.removeChild(row);
            })
        });
        return btn;
}

async function renderCharList(){
    const response = await fetch("http://localhost:3000/char/all");
    const data = await response.json();
    let todolist = document.querySelector('#cTable');
    todolist.innerHTML = '';
    data.chars.forEach(
        (char) => {
            const row = document.createElement("tr");
            row.id = "char-"+char.id;
            const td1 = document.createElement("td");
            td1.innerText = char.char.name;
            const td2 = document.createElement("td");
            td2.innerText = char.char.gender;
            const td3 = document.createElement("td");
            td3.innerText = char.char.race;
            const td4 = document.createElement("td");
            td4.innerText = char.char.caste;
            const del = DeleteElement(char.id);

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
    addChar();
})

renderCharList();

