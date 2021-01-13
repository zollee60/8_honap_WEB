let currentPlayer = "X";

let gameState = ["","","","","","","","",""];

let endGame = false;

let winningStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

function switchPlayer(){
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    document.querySelector("#current").innerHTML = `Active player: ${currentPlayer}`;
}

function handleClick(e){
    let cell = e.target;
    let index = parseFloat(cell.dataset.value);
    if(gameState[index] === ""){
        gameState[index] = currentPlayer;
        cell.innerHTML = `<h1>${currentPlayer}</h1>`;
        checkWinnerBruteForce();
        if(!endGame) switchPlayer();
    }
}

function writeWinner(){
    let container = document.querySelector(".controlls");
    container.innerHTML += `<h1 id="winLabel">The winner is: ${currentPlayer}</h1>`;
}

function checkWinnerBruteForce(){
    let i = -1;
    let first = null;
    let second = null;
    let third = null;
    let notEmpty = null;
    do{
        i++;
        first = gameState[winningStates[i][0]];
        second = gameState[winningStates[i][1]];
        third = gameState[winningStates[i][2]];
        empty = first === "" || second === "" || third === "";
        console.log(notEmpty,i,first,second,third);   
    }while(i < winningStates.length-1 && (first !== second || second !== third || empty));
    if(i < winningStates.length-1){
        endGame = true;
        writeWinner();
    }
}

function clear(){
    for(let i = 0; i < 9; i++){
        let cellData = document.querySelector(`[data-value="${i}"]`).lastChild;
        if(cellData !== null) cellData.remove();
    }
    document.querySelector("#winLabel").remove();
}

function restart(){
    gameState = ["","","","","","","","",""];
    endGame = false;
    clear();
    switchPlayer();
}

document.querySelector(".container").addEventListener("click", (e) => {
    if(!endGame) handleClick(e);
});

document.querySelector("#restart").addEventListener("click", () => {
    restart();
});