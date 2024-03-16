console.log("Promise and callback");

//amule cheeze dough pizza

function cheeze(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            let cheese = "amul cheese"
            res(cheese);
        },1000)
    }) 
}


function dough(cheese){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            let dough = cheese+" dough"
            res(dough);
        },1000)
    }) 
}

function pizza(dough){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            let pizza = dough+" pizza"
            res(pizza);
        },1000)
    }) 
}

async function printPizza(){
    let cheese = await cheeze();
    let dough1 = await dough(cheese);
    let pizza1 = await pizza(dough1);
    console.log(pizza1);
}

printPizza();
// cheeze().then(msg =>{
//     console.log(msg);
//     return dough(msg)
// }).then((msg)=>{
//     console.log(msg);
//     return pizza(msg);
// }).then(msg =>{
//     console.log(msg);
// })
// .catch((msg) =>{
//     console.log(msg);
// })










// let login = true;

// function logeedIn(){
//     return new Promise((res, rej)=>{
//         setTimeout(() => {
//             if(login){
//                 res("promise is resolved");
//             }else{
//                 rej("promise is not resolved");
//             }
//         }, 5000);
//     })
// }

// logeedIn().then((msg)=>{
//     console.log(msg);
// }).catch((msg)=>{
//     console.log(msg);
// })







// let logIn = true;
// function logedIn(){
//     let p1 = new  Promise((res , rej)=>{
//         setTimeout(()=>{
//             if(logIn){
//                 res();
//             }else{
//                 rej();
//             }
//         }, 5000)
//     })
//     return p1;
// }

// logedIn().then(()=>{
//     console.log("user is logedIn");
// })
// .catch(()=>{
//     console.log("user is not logedIn");
// })

// let count = 1;
// function start(){
//     const id = setInterval(()=>{
//        console.log(count);
//        count++;
//        if(count === 11){
//         clearInterval(id);
//     }
//     },1000);

    
    
// }
// start();