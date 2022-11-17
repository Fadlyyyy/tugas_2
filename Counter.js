function clickCounterLike(){

    if (localStorage.clickcount1) {
        localStorage.clickcount1 = Number(localStorage.clickcount1)+1;
    } else {
        localStorage.clickcount1 = 1;
    }
    document.getElementById("resultLike").innerHTML = localStorage.clickcount1;
}

function clickCounterUnlike(){

    if (localStorage.clickcount2) {
        localStorage.clickcount2 = Number(localStorage.clickcount2)+1;
    } else {
        localStorage.clickcount2 = 1;
    }
    document.getElementById("resultUnlike").innerHTML = localStorage.clickcount2;
}