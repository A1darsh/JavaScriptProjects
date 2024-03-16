let fiterCategory = document.getElementById("category-filter")


let listOfProduct = document.getElementById("product-list");
//console.log(typeof fiterCategory, typeof listOfProduct)

fiterCategory.addEventListener('change' , function(){
    let selectedByUser = fiterCategory.value;
    //console.log(selectedByUser)

    let products = document.querySelectorAll(".product")
    products.forEach(product =>{
        //console.log(product)
        let data = product.getAttribute('catogeryType')
        //console.log(data)

        if(selectedByUser == 'all' || selectedByUser===data){
            product.style.display = 'block'
        }else{
            product.style.display = 'none'
        }
    })

})



