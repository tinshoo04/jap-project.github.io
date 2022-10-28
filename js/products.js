const sortAscByPrice = document.getElementById('sortAsc')
const sortDescByPrice = document.getElementById('sortDesc')
const sortDescByRelevance = document.getElementById('descByRelevance')
const filterBtn = document.getElementById('rangeFilterCount')
const clearFilter = document.getElementById('clearRangeFilter')
let searchBar = document.getElementById('search')
let filterSearch = []
let myProducts;
let containerCategory = document.querySelector(".container-category");
let filterResult;





function manageData() {
    fetch(`https://japceibal.github.io/emercado-api/cats_products/${localStorage.getItem('catID')}.json`)
    .then(response => response.json())
    .then(data => {
        myProducts = data.products;
        let unmodifiedProducts = data.products
        showData(myProducts)


        sortAscByPrice.addEventListener('click', function(e){
            containerCategory.innerHTML = ""
             myProducts.sort(function(a,b){
              if (a.cost < b.cost) {
                  return -1
              }
              if (a.cost > b.cost) {
                  return 1;
              }
              return 0;
             })
             showData(myProducts)
             
            })


            sortDescByPrice.addEventListener('click', function(e){
                containerCategory.innerHTML = ""
                 myProducts.sort(function(a,b){
                  if (a.cost < b.cost) {
                      return 1
                  }
                  if (a.cost > b.cost) {
                      return -1;
                  }
                  return 0;
                 })
                 showData(myProducts)
                 
                })


                sortDescByRelevance.addEventListener('click', function(e){
                    containerCategory.innerHTML = ""
                     myProducts.sort(function(a,b){
                      if (a.soldCount < b.soldCount) {
                          return 1
                      }
                      if (a.soldCount > b.soldCount) {
                          return -1;
                      }
                      return 0;
                     })
                     showData(myProducts)
                     
                    })

                    filterBtn.addEventListener('click', function(){
                    
                    filterResult = myProducts.filter(product => product.cost <= parseInt(document.getElementById("rangeFilterCountMax").value) || document.getElementById("rangeFilterCountMax").value == undefined && product.cost >= parseInt(document.getElementById("rangeFilterCountMin").value) || document.getElementById("rangeFilterCountMin").value == undefined )
                    if(filterResult.length == 0){
                        containerCategory.innerHTML = `<p class = "text-center text-muted"> No hay productos en el rango de precio ingresado </p>`
                        
                    } else {
                        showData(filterResult)
                    }
                    
    })
                    clearFilter.addEventListener('click',function(e){
                        document.getElementById("rangeFilterCountMax").value = ""
                        document.getElementById("rangeFilterCountMin").value = ""
                        showData(myProducts)
                    })

                    searchBar.addEventListener('keyup', e => {
                        filterSearch = myProducts.filter(product => product.name.toLowerCase().includes(searchBar.value.toLowerCase()))
                        showData(filterSearch)
                    })

                    for(let product of unmodifiedProducts) {
                        document.getElementById(`${product.name}`).addEventListener('click',function(e){
                            localStorage.setItem('product', `${product.id}`)
                            window.location.href = "product-info.html"
                        })
                        
                    }
})

                }


function showData(data) {
    containerCategory.innerHTML = ""
        for (let i = 0; i < myProducts.length; i++) {
            let contentToAppend = `
            <div  class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${data[i].image}" alt="Imagen de un ${data[i].name}" class="img-thumbnail">
                    </div>
                    <div class="col" id= "${data[i].name}" >
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${data[i].name} - ${data[i].cost} ${data[i].currency}</h4>
                            <small class="text-muted">Este articulo ha sido comprado ${data[i].soldCount} veces</small>
                        </div>
                        <p class="mb-1">${data[i].description}</p>
                    </div>
                </div>
            </div>
            `
            containerCategory.innerHTML += contentToAppend;
}
}

document.addEventListener('DOMContentLoaded', function(e){
    manageData()
    
    })


