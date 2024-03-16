//strings in js
//there is lots of data present in website in the from of words and character for that i want string

// 3 ways we can declare string in js

let s1 = "Adarsh";
let s2 = 'Mishra';
let s3 = `Web Developement is learning by adarsh misrha in 8 to 10 pm`;
let age = 27;
let degree = 'Btech';
//console.log(s1,s2,s3);
//console.log(s1[3]);
//console.log(s2.charAt(2));

for(let i =0 ; i<s1.length ;i++){
    //console.log(s1[i]);
}

//console.log(s1+" "+s2);

//concatination by using es6 string litrals

let newStr = `${s1} ${s2} age is ${age} and the degree is ${degree}` ;
//console.log(newStr);

let s4 = 'asd  lshf os hso\ ifh ohsvsl owes fhsl\ wes '

//console.log(s3.toUpperCase());
//console.log(s3.toLowerCase());

//if present in string we get index of first string else we get -1
//console.log(s3.search("sad life !!!"));
//console.log(s3.search("is"));

let text = 'is';
let replaceText = 'handeled';

//console.log(s3.replace(text,replaceText));

// strings in javaScripts is immutable 
// replace method gives us new string because string is js is immutable

//slice ,substring ,substr

let str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada proin libero nunc consequat interdum. Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium. Varius vel pharetra vel turpis. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Non enim praesent elementum facilisis leo vel. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Odio eu feugiat pretium nibh ipsum consequat. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Risus sed vulputate odio ut enim blandit volutpat maecenas volutpat. Eget est lorem ipsum dolor. Tristique senectus et netus et malesuada fames ac turpis. Mattis enim ut tellus elementum. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. At auctor urna nunc id cursus metus aliquam';
              

let newStr1 = str.slice(0,151);
//console.log(newStr1 + ' Read More.....')

let newStirng = 'hello world !!!';
let newStr2 = str.substring(4);

//slice will take negative index from it will start from left side 
// but in case of substring when we give negative index then it will convert into 0 ..



    let str111 = 'adarsh';
    console.log(str111.charAt(0).toLocaleUpperCase);
