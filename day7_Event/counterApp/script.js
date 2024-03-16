
let deBtn = document.querySelector(".decrement-button")

let inBtn = document.querySelector(".increment-button")

let para = document.getElementById("quantitiy")
let count = 0;

deBtn.addEventListener('click',function(){
    if(count>0){
        count--;
        para.innerText = count;
    }
    console.log(count);
})

inBtn.addEventListener('click',function(){
    count++;
    para.innerText = count;
    console.log(count);
})