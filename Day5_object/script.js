//objects in js

let obj = {
    name: 'adarsh',
    age:27,
    marks:70,
    rollNo:28,
    getMarks:function(){
        console.log("makrs of student is 90");
    }

}

//console.log(obj['name']);
//console.log(obj);
//console.log(obj.getMarks());
//undefiend is comming because we are not returning any thing from the function

//addition
obj.phone= 9670125209;

//updation
obj.age = 28;

//delete
delete obj; //delete whole object

//delete any property
delete obj.getMarks;

//console.log(obj);

let obj1 = {
    "name_first": 'adarsh',
    age:27,
    marks:70,
    rollNo:28,
    getMarks:function(){
        console.log("makrs of student is 90");
    }

}

//console.log(obj1.name_first);

let obj2 = {
    "fist name": 'adarsh',
    age:27,
    marks:70,
    rollNo:28,
    getMarks:function(){
        console.log("makrs of student is 90");
    }

}


//console.log(obj2["first name"]);

//when we know key we use . notation
//when we do not know key then we use [] method

for (const key in obj2) {
    console.log(key + " -- " + obj2[key]);
}

//3 -tier architecture
//client --- server---dataBase

//json is for storing the data
//console.log(JSON.parse(json));
//here this parse is used to parse the json data and by doing this we are converting json to javaScript object;
let obj = {
    name: 'adarsh',
    age:27,
    marks:70,
    rollNo:28,
    getMarks:function(){
        console.log("makrs of student is 90");
    }

}

