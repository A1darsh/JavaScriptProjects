let boxes = document.querySelectorAll(".box");
console.log(boxes)
let resrtBtn = document.querySelector(".reset");

let winMag = document.getElementById("msg");

let msgContainer = document.querySelector(".winnerMag");

let newGame = document.querySelector(".newGame");

function reset(){
    enable();
    msgContainer.classList.add("hide");
}

resrtBtn.addEventListener('click', reset);

let turn = true //flayer 1;
let winnigPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

boxes.forEach(box =>{
    box.addEventListener('click' , ()=>{
        if(turn){
            box.innerText = "X"
            turn = false;
        }else{
            box.innerText = "O";
            turn = true;
        } 
        box.disabled = true;

        checkWinner();
    })
    
})

function enable(){
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

function disable(){
    for(let box of boxes){
        box.disabled = true;
    }
}

function showWinner(p1){
    winMag.innerText = `Congratulations winner is ${p1}`;
    msgContainer.classList.remove("hide");
    disable();
}

function checkWinner(){
    winnigPattern.forEach((pattern)=>{
        let p1 = boxes[pattern[0]].innerText
        let p2 = boxes[pattern[1]].innerText
        let p3 = boxes[pattern[2]].innerText;

        if(p1!="" && p2!="" && p3!=""){
            if(p1===p2 && p2 === p3){
                showWinner(p1);
            }
        }
    })
}


resrtBtn.addEventListener('click' , reset);
newGame.addEventListener('click' , reset);


