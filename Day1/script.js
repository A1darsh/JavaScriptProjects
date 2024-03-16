console.log("hello world !!!!..");

// node is a software which provides us flexbility to run 
//java script code outside of the browser
// variable - to store the data we use variable
// let , var ,const


let data = "adarsh";
var sum = 30;
const products = true;
//console.log(data, sum, products);


//java script is case sensitive
let Data = 400;
//console.log(data,Data);

// two types of data type we have in java script primitive nad non primitive
// primitive -- (pre defined data type ) number, boolean , String , null , undefined ,Bigint ,symbol
// non premitive - (user defined data type) objects 
let a = 50;
let b = "adarsh mishra"
let c = true;
let d = null;
let e = undefined;
let f = BigInt(345462345); //exactelly same as long in java
let g = Symbol('geekstar');
//console.log(typeof a, typeof b, typeof c,typeof d,typeof f,typeof g);

//if i do not want to give any vlaue inside the variable then we use null , null means nothing
// if we decleared variable but have not initilised then java script take it as undeifend
let dd ;
//console.log(dd);

//object in java script is in key value format
let obj = {
    name: "adarsh mishra",
    job: "software developer",
    marks:75,
    age:21,
    salary:"000"
}

//console.log(obj);
console.log(typeof(obj));

console.log(obj.name);

//add one more entry inside object
obj.location = "lucknow";
console.log(obj);

//update
obj.age = "34";
console.log(obj);

//delete in java script
delete obj.marks;
console.log(obj);

//operator im java script + , - , /,*,% one more is ** is called exponent like 2^3
console.log(2**3);
