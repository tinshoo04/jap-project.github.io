const productsURL = "https://japceibal.github.io/emercado-api/cats_products/101.json"
const sortAsc = document.getElementById('sortAsc')
let myProducts;

function manageData() {
    fetch(productsURL)
    .then(response => response.json())
    .then(data => {
        const containerCategory = document.querySelector(".container-category");
        myProducts = data.products;
        for (let i = 0; i < myProducts.length; i++) {
            let contentToAppend = `
            <div  class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${myProducts[i].image}" alt="Imagen de un ${myProducts[i].name}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${myProducts[i].name} - ${myProducts[i].cost} ${myProducts[i].currency}</h4>
                            <small class="text-muted">Este articulo ha sido comprado ${myProducts[i].soldCount} veces</small>
                        </div>
                        <p class="mb-1">${myProducts[i].description}</p>
                    </div>
                </div>
            </div>
            `
            containerCategory.innerHTML += contentToAppend;
        }
        sortItems(myProducts)
        
    })
}

function sortItems(e){
console.log(e)
}

document.addEventListener('DOMContentLoaded', function(e){
    manageData()
    })


