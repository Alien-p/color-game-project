var squares = document.querySelectorAll("#square");
var pickedColor = squares[Math.round(Math.random() * 5)].style.backgroundColor;
document.querySelector("#quesColor").textContent = pickedColor;
document.getElementById("newGame").addEventListener("click", function(){resetGame();})
var easyBtn = document.getElementById("easyMode");
var hardBtn = document.getElementById("hardMode");
resetGame();


easyBtn.addEventListener("click", function(){
    this.classList.add("selected");
    hardBtn.classList.remove("selected");
    for(var i = 3; i < squares.length; i++) {
        squares[i].style.visibility = "hidden";
    }
});
hardBtn.addEventListener("click", function(){
    this.classList.add("selected");
    easyBtn.classList.remove("selected");
    for(var i = 3; i < squares.length; i++) {
        squares[i].style.visibility = "visible";
    }
});

function randomizeColors(){
    squares.forEach(element => {
        randomColor(element);
        element.addEventListener("click", function() {
            checkColor(this);
        });
    });
}

function randomColor(square) { 
    square.style.backgroundColor = "RGB(" + randomNum() + ", " + randomNum() + ", " + randomNum() + ")";
}

function randomNum() {
    return Math.round(Math.random() * 255);
}


function checkColor(square) {
    if (square.style.backgroundColor !== pickedColor) {
        square.style.backgroundColor = "#232323";
        document.getElementById("result").textContent = "Wrong";
    } else {
        document.getElementById("result").textContent = "Correct";
    }
}

function resetGame(){
    randomizeColors();
    squares.forEach(element => {
        if(element.style.visibility === "hidden") {
            element.style.visibility = "visible";
        }
    });
    pickedColor = squares[Math.round(Math.random() * 5)].style.backgroundColor;
    document.querySelector("#quesColor").textContent = pickedColor;
    document.getElementById("result").textContent = "";
}