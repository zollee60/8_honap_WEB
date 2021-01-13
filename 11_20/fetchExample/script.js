let state = {
    shows: [],
}

const render = async (state) => {
    if(state.shows.length !== 0){
        let resultHTML = "";

        state.shows.forEach((value) => {
            resultHTML += createMovieTile(value.show);
        });

        document.querySelector(".results").innerHTML = resultHTML;
    }
}

const search = async (queryString) => {
    let response = await fetch(`http://api.tvmaze.com/search/shows?q=${queryString}`)
                .then(response => response.json());
    console.log(response);
    return response;
}

const createMovieTile = (show) => {
    return `
        <div>
            <img src=${show.image !== null ? show.image.medium : "#"}>
            <h3>${show.name}</h3>
            <h5>Értékelés: ${show.rating.average !== null ? show.rating.average : "Nincs adat"}</h5>
        </div>
    `
}

document.querySelector("#b").addEventListener("click", async () => {
    let queryString = document.querySelector("#s").value;

    state.shows = await search(queryString);
    render(state);
});

try{

}
catch (err) {
    console.error(err);
}
finally{
    
}