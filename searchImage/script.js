let searchValue = document.getElementById("searchBox");
let btn = document.getElementById("btn")
let mainDiv = document.getElementById("show");
let showMore = document.getElementById("showmoreBtn")
console.log(btn);

let inputData = "";
let page = 1;
const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";
let previousValue ="";
async function featchData(){
    inputData = searchValue.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    const response = await fetch(url);
    let data = await response.json();
    let results = data.results;

    if (previousValue!=inputData) {
        mainDiv.innerHTML = "";
    }

    results.map((result) =>{
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("cardDiv");
        cardDiv.innerHTML=`
        <img src="${result.urls.small}" alt="${result.alt_description}" class="image" ">
        <a href="${result.links.html}" target="_blank" class="aTag">${result.alt_description}</a>
        `
        mainDiv.appendChild(cardDiv);   
    }) 

    page++;
    if(page>1){
        showMore.classList.remove("hide");
        showMore.style.display = "block";
    }
}

btn.addEventListener('click',featchData)


showMore.addEventListener('click', ()=>{
    featchData();
})


