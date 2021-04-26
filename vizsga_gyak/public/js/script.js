const getFoglalkozasok = async () => {
    const res = await fetch("/api/getF");
    const data = await res.json();
    return data;
}

const showFoglalkozasok = async () => {
    const data = await getFoglalkozasok();

    const table = document.querySelector(".table");
    const tr = document.createElement("tr");
    data.fields.forEach((f) => {
        let fejlec = "";
        if(f.name === "megyekod") fejlec = "Megyekód";
        if(f.name === "mezogazdasag") fejlec = "Mezőgazdaság";
        if(f.name === "ipar") fejlec = "Ipar";
        if(f.name === "szolgaltatas") fejlec = "Szolgáltatás";
        tr.innerHTML += `<th>${fejlec}</th>`
    })
    table.appendChild(tr);
    data.rows.forEach((r) => {
        table.innerHTML +=
        `<tr>
            <td>${r.fkod}</td>
            <td>${r.megyekod}</td>
            <td>${r.mezogazdasag}</td>
            <td>${r.ipar}</td>
            <td>${r.szolgaltatas}</td>
        </tr>`
    })
}

showFoglalkozasok();