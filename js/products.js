const productsURL = "https://japceibal.github.io/emercado-api/cats_products/101.json"

function manageData() {
    fetch(productsURL)
    .then(response => response.json())
    .then(data => {
        const containerCategory = document.querySelector(".container-category");
        let myProducts = data.products;
        for (let i = 0; i < myProducts.length; i++) {
            let contentToAppend = `
            <div id = car-info-container>

            <img id = "car-pic" src = ${myProducts[i].image}>
            
            <h4 id = "title-car-info">${myProducts[i].name} - ${myProducts[i].cost} ${myProducts[i].currency}</h4>
            <br>
            <p> ${myProducts[i].description} </p>
            <p> Este articulo ha sido comprado ${myProducts[i].soldCount} veces </p>
            </div>
            
            `
            containerCategory.innerHTML += contentToAppend;
        }
        
    })
}

document.addEventListener('DOMContentLoaded', function(e){
    manageData()
})

