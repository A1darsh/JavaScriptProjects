let input = document.getElementById("text");
let searchBtn = document.getElementById("searchBtn");

let displayDiv = document.getElementById("displayData");

async function featchData(inputValue){
    displayDiv.innerHTML = "";
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=81f81f85a9c09fb871d461111e65601e`);

    let data = await response.json();

    let name = data.name;
    let cloud = data.weather[0].description
    let temp = data.main.temp
    let maxTemp = data.main.temp_max
    let minTemp = data.main.temp_min
    let humidity = data.main.humidity;

    let div = document.createElement("div");

    div.innerHTML = `
        <p><i class="fas fa-city"></i> Name of City: ${name}</p><br>
        <p><i class="fas fa-cloud"></i> Cloud Type: ${cloud}</p><br>
        <p><i class="fas fa-thermometer-full"></i> Temperature: ${temp}</p><br>
        <p><i class="fas fa-temperature-high"></i> Max Temperature: ${maxTemp}</p><br>
        <p><i class="fas fa-temperature-low"></i> Min Temperature: ${minTemp}</p><br>
        <p><i class="fas fa-tint"></i> Humidity: ${humidity}</p>
    `;

    displayDiv.appendChild(div);

   
}

searchBtn.addEventListener('click',()=>{
    let inputValue = input.value;
    fetchCat();
    featchData(inputValue);
    input.value ="";

})


async function fetchCat(){
    let response = await fetch(`https://api.thecatapi.com/v1/images/0XYvRd7oD`);

    let data = await response.json();
    let url = data.url;
    let bread = data.breeds[0].name;

    let main = document.querySelector(".main");
    main.style.backgroundImage = `url(${url})`;
    main.style.backgroundRepeat = "no-repeat";
    main.style.backgroundSize = "cover";

    console.log(main);
    console.log(url , bread);
    console.log(data)
    
}



