const getMegyeDataAll = async () => {
    const res = await fetch("/api/getM");
    const data = await res.json();
    return data;
}

const getRegioAll = async () => {
    const res = await fetch("/api/getR");
    const data = await res.json();
    return data;
}

const getRegioFiltered = async (rkod) => {
    const res = await fetch(`/api/getRF/${rkod}`);
    const data = await res.json();
    return data;
}

const showMegyeDataAll = async () => {
    const data = await getMegyeDataAll();
    const table = document.querySelector(".table");
    const tr = document.createElement("tr");
    data.fields.forEach((f) => {
        let fejlec = "";
        if(f.name === "megyekod") fejlec = "Megyekód";
        if(f.name === "megyenev") fejlec = "Megyenév";
        if(f.name === "lakosszam") fejlec = "Lakosszám";
        if(f.name === "regiokod") fejlec = "Régiókód";
        tr.innerHTML += `<th>${fejlec}</th>`
    })
    table.appendChild(tr);
    data.rows.forEach((r) => {
        table.innerHTML +=
        `<tr>
            <td>${r.megyekod}</td>
            <td>${r.megyenev}</td>
            <td>${r.lakosszam}</td>
            <td>${r.regiokod}</td>
        </tr>`
    })
}

const setupSelect = async () => {
    const regions = await getRegioAll();
    const select = document.querySelector(".form-select");
    regions.rows.forEach((r) => {
        select.innerHTML += `<option value="${r.regiokod}">${r.regionev}</option>`
    })
}

const showFilteredData = async () => {
    const rkod = document.querySelector(".form-select").value;
    const data = await getRegioFiltered(rkod);
    const table = document.querySelector(".table");
    table.innerHTML = "";
    const tr = document.createElement("tr");
    data.fields.forEach((f) => {
        let fejlec = "";
        if(f.name === "megyekod") fejlec = "Megyekód";
        if(f.name === "megyenev") fejlec = "Megyenév";
        if(f.name === "lakosszam") fejlec = "Lakosszám";
        if(f.name === "regiokod") fejlec = "Régiókód";
        tr.innerHTML += `<th>${fejlec}</th>`
    })
    table.appendChild(tr);
    data.rows.forEach((r) => {
        table.innerHTML +=
        `<tr>
            <td>${r.megyekod}</td>
            <td>${r.megyenev}</td>
            <td>${r.lakosszam}</td>
            <td>${r.regiokod}</td>
        </tr>`
    })
}

document.querySelector(".btn").addEventListener("click", showFilteredData)

showMegyeDataAll();
setupSelect();