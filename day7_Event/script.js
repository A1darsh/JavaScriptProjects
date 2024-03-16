console.log("hii.....")

let heading1 = document.querySelector("h1");




//query selector gives one first matching data but query selector all gives me all the matching tags
//3 argument - event type , functionality,useCapture
// heading1.addEventListener('click',function(){
//     alert("hi is being clicked");
// })

heading1.addEventListener('mouseover',function(){
    //alert("hi is being clicked");
    console.log("hii java Script")
})





// function button1(){
    
//     alert("you are pressing button one");
// };

// function button2(){
//     alert("you are pressing button two");
// }

// document.addEventListener("DOMContentLoaded", function() {
//     let data = document.getElementById("button1");
//     console.log(data);
// });
