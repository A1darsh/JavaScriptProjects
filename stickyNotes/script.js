let text = document.getElementsByTagName("textarea")[0];
let color = document.getElementById("color");
let btn = document.getElementById("addBtn");

let rightp = document.getElementById("right_p");
let rightDiv = document.getElementById("right");



btn.addEventListener('click' , ()=>{
    if(text.value === ""){
        alert("enter some text");
        return;
    }else{
        let div = document.createElement("div");
        let ptag = document.createElement("p");
        let button = document.createElement("button");
         
        div.setAttribute("id" , "jsDiv")
        div.appendChild(button);
        div.appendChild(ptag);
        
        ptag.innerText = text.value
        button.innerText = "X";
        div.style.backgroundColor = color.value;
        
        div.style.height = "200px"
        div.style.width = "250px"
        div.style.display = "wrap"
        rightDiv.appendChild(div);
        
        rightp.innerText = "";

        button.addEventListener('click' ,()=>{
            div.style.display = "none";
        })
    }   
})

color.addEventListener('change', () => {
    text.style.backgroundColor = color.value;
});
