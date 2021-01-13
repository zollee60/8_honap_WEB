function activate(e){
    let div = e.currentTarget; // Azt az elemet adja vissza, amelyhez az eventListener csatolva van.

    let id = div.id;
    div.style.background = "red";

    let divs = document.querySelectorAll(".cell"); // divs: NodeList
    
    for(let i = 0; i < divs.length; i++){
        if(divs[i].id != id){
            document.querySelector(`#${divs[i].id}`).style.background = "white";
        }
    }

}

document.querySelector("#first").addEventListener("click", (e) => {
    activate(e);
});
document.querySelector("#second").addEventListener("click", (e) => {
    activate(e);
});
document.querySelector("#third").addEventListener("click", (e) => {
    activate(e);
});
document.querySelector("#fourth").addEventListener("click", (e) => {
    activate(e);
});