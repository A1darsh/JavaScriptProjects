let choise = document.querySelectorAll(".choise");

let finalMsg = document.getElementById("lstPTag");
let user = document.getElementById("your");
let comp = document.getElementById("comp");
let userScore = 0;
let compScore = 0;

function showWinner(userWin,userRes ,compRes){
    if(userWin){
        userScore++;
        user.innerText = userScore;
        finalMsg.innerText = `You Wins! Your ${userRes} beats ${compRes}`
        finalMsg.style.backgroundColor="green"
    }else{
        compScore++;
        comp.innerText = compScore;
        finalMsg.innerText = `you lost! ${compRes} beats ${userRes}` 
        finalMsg.style.backgroundColor="red"
    }
}
function startGame(userRes) {
    console.log(`your response is ${userRes}`);
    let data = ["rock", "paper", "scissors"];
    let compRes = Math.floor(Math.random() * 3);
    console.log(`computer response is ${data[compRes]}`);

    if (userRes === data[compRes]) {
        finalMsg.innerText = "Game draw, Play Again";
        finalMsg.style.backgroundColor = "rgb(3, 3, 10)"
    } else {
        let userWin = true;
        if (userRes === "rock") {
            // scissors , paper
            userWin = data[compRes] === "scissors" ? true : false;
        } else if (userRes === "paper") {
            // scissor rock
            userWin = data[compRes] === "rock" ? true : false;
        } else {
            // paper rock
            userWin = data[compRes] === "paper" ? true : false;
        }
        showWinner(userWin, userRes , data[compRes]);
    }
}

choise.forEach((choise) =>{
    choise.addEventListener('click', ()=>{
        let value = choise.getAttribute("id");
        startGame(value);
    })
})