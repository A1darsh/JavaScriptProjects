//type conversion -- converting one data type into another
//two types of conversion -- implecit and explecit 
//Implict -- language is conveting one data type into other
//explicit -- we are converting one data type into another

//+ -- in js + workes as concatination
// rest of the airthmatic operator will be same

//console.log(2 == "2"); // true because == compaires only value not data type internally it checks data as well, but here implecit type conversion is done by javaScript .
//console.log(2 === "2"); // false because here we are compairing data type and value both
// == only matches the value
// === matches the value ,data type both

let a3 = 10;
let a3Stirng = String(a3);
//console.log(a3Stirng);
//console.log(typeof a3Stirng);

let b3Number = Number(a3);
//console.log(b3Number);
//console.log(typeof b3Number);

// switch in java Script
let shippingOption = "Exprec";

switch(shippingOption){
    case 'Express':
        console.log('your package is being delevired via Express in 1-2 days');
        break;
    case 'normal Delevery':
        console.log("package delevered in 5-7 days");
        break;
    default:
        console.log("Invalid Shipping Option");
}


let arr = [
    {name:"product1" , price:300},
    {name:"product2" , price:400},
    {name:"product3" , price:500},
    {name:"product4" , price:600},
    {name:"product5" , price:700},
    {name:"product6" , price:800},
]

let total = 0;
for(let i = 0 ;i <arr.length ; i++){
    total+=arr[i].price;
}

//console.log(total);

let i = 0; 
while(i<10){
    //console.log(i);
    i++;
}

//function in js
// here a , b are parameter and 12,34 are arguments 
function sum(a,b){
    console.log(a+b);
}
//sum(12,34);

function mul(a,b){
    return a*b;
}

let ans = mul(23,45);
console.log(ans); 

//prime number
function prime(a){
    if (a < 2) {
        return false; 
    }
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
            return false;
        }
    }
    return true;
}

let test = prime(7);
console.log(test);


//var let const
// var -- globle ,function scope
// let -- local , function
//const -- function 

let d12 =12;
function asdf(){
    let d11 = 23;
    d12 = 3;
    console.log(d12);
    return d12;
}
console.log(asdf());
console.log(d12);

// Using let
let x = 10;
if (true) {
    let x = 20;
    console.log(x); // Output: 20
}
console.log(x); // Output: 10

// Using const
const y = 10;
// y = 20; // This will cause an error because y cannot be reassigned

// Using var
var z = 10;
if (true) {
    var z = 20;
    console.log(z); // Output: 20
}
console.log(z); // Output: 20







