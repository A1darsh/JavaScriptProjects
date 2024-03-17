let pTag = document.getElementById("pTag");
let btn = document.getElementById("button");
pTag.classList.add("format");

let count = 0;

async function featchData(){
    let response = await fetch("https://cat-fact.herokuapp.com/facts");
    let data = await response.json();
    console.log(typeof data)
    console.log(typeof Array.from(data));
    if(count==5){
        pTag.innerText = "i do not have any joke"
        return;
    }
    pTag.innerText = data[count].text;
    count++;
}
btn.addEventListener('click',featchData)



