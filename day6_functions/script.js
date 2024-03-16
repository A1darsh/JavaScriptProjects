//functions

function sum(a,b){
    console.log(a+b);
}

//sum(2,4);

//annonimus function

let add = function (a,b){
    console.log(a+b);
}
//console.log(add);
//add(2,6);

//HOF (Heigher order function)

//if a fuction is taking another function as a arguments or if a funcition return another function 
//is called heigher order function
function calculator(addition){
    console.log(addition);
    addition(4,5);
}
function addition(a,b){
    console.log(a+b);
}

//calculator(addition);

function substration(){
    return function(a,b){
        console.log("i am performing substraction task");
    }
}
let ans = substration();
//console.log(ans);
//ans();


//arrow functions
//it is used to remove the line of codes 

//let ans1 = (a,b)=>a+b;
//console.log(ans1(2,9));

let ans1 = (a,b)=>{
    return a+b;
}

console.log(ans1(9,9));


//IIFE (immediately invoked function expression)

//IIFE they are self called functions we do not need to call it.

(function (){
   console.log("hii java Script");
})();