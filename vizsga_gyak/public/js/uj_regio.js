const sendData = async () => {
    const data = {
        nev: document.querySelector("#rnev").value,
        kod: document.querySelector("#rkod").value
    }
    const res = await fetch("/api/sendR", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const con = document.querySelector(".container");
    const alert = document.createElement("div")

    alert.className = res.status === 200 ? "alert alert-success" : "alert alert-danger";
    alert.innerHTML = res.status === 200 ? "<p>Az új rekord beszúrásra került</p>" : "<p>Az új rekord beszúrása során hiba lépett fel.</p>"

    con.appendChild(alert);
}

document.querySelector(".btn").addEventListener("click", sendData);