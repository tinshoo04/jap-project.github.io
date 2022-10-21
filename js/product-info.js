let productInfoContainer = document.getElementById('product-info')
let productList;
let productsInLS = localStorage.getItem('products');




function manageProductData() {

    fetch(`https://japceibal.github.io/emercado-api/products/${localStorage.getItem('product')}.json`)
    .then(res => res.json())
    .then(data => {
      
      let contentToAppend = `
      <div class = "container" id = "title">
      <small><strong>Categoría</strong> : ${data.category}</small>
        <h2 class = "display-6" id = "title-product">${data.name}</h2>
        <p>${data.description}</p>
      </div>
      
      <div class = "container" id = "imgs-container">
      
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="${data.images[0]}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${data.images[1]}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${data.images[2]}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${data.images[3]}" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      
      </div>

      <div id="info-extra">
      <p id = "sold-count"><strong>Productos vendidos:</strong> ${data.soldCount}</p>
      <br>
      <h4 id = "price">Precio: <strong>${data.cost} ${data.currency} </strong></h4>
      </div>
      
      
      
      `
      productInfoContainer.innerHTML += contentToAppend
      


      fetch(`https://japceibal.github.io/emercado-api/products_comments/${localStorage.getItem('product')}.json`)
      .then(response => response.json())
      .then(info => {
        
        for(let comment of info){
          let contentToAppend = 
          `
          <div id = "user-comment">
          <p><strong>${comment.user}</strong> <small>${comment.dateTime}</small> <span id="${comment.user}"></span></p>
          <p>${comment.description}</p>
          </div>
          
          `
          document.getElementById('comments-section').innerHTML += contentToAppend

          
          for(let i = 0; i < comment.score ; i++) {
            let spanStar = document.createElement('span')
            spanStar.setAttribute('class', 'fa fa-star checked')
            document.getElementById(`${comment.user}`).appendChild(spanStar)
          }

          for(let i= 0; i < 5 - comment.score; i++){
            let spanStar = document.createElement('span')
            spanStar.setAttribute('class', 'fa fa-star')
            document.getElementById(`${comment.user}`).appendChild(spanStar)
          }
        }
        
        let comment = {
          user : localStorage.getItem('user'),
          id : 0,
          
        }
        
        document.getElementById('send').addEventListener('click', function(e){
          e.preventDefault()
          
          comment.id = comment.id + 1
          
          let rating = document.getElementById('rating').value
          let contentToAppend = `
          
          
          <div class = "user-comment">
          <p><strong>${localStorage.getItem('user')}</strong> <small></small> <span class="star-rating" id = ${comment.id}></span></p>
          <p>${document.getElementById('text-comment').value}</p>
          </div>
          
          
          
          
          `
          document.getElementById('comments-section').innerHTML += contentToAppend

          for(let i = 0; i < rating ; i++) {
            let spanStar = document.createElement('span')
            spanStar.setAttribute('class', 'fa fa-star checked')
            document.getElementById(`${comment.id}`).appendChild(spanStar)
            
          }

          for(let i= 0; i < 5 - rating; i++){
            let spanStar = document.createElement('span')
            spanStar.setAttribute('class', 'fa fa-star')
            document.getElementById(`${comment.id}`).appendChild(spanStar)
            
          }


          
        })
        
        let relatedProducts = data.relatedProducts
        
        for(let product of relatedProducts) {
          let contentToAppend = `
          
          <div class = "container" id = "container-related">

          <div class = "container" id = "container-info">
          <img id = "${product.id}" src = "${product.image}" class = "img img-thumbnail">
          <h5>${product.name}</h5>
          </div>

          </div> 
          
          `
          document.getElementById('related-products').innerHTML += contentToAppend
          
          document.getElementById(`${product.id}`).addEventListener('click', function(e){
            localStorage.setItem('product', `${product.id}`)
          })
          
        }
        


      document.getElementById('addToCart').addEventListener("click",()=>{
            
        
        
        const items = {name: data.name, img: data.images[0], price: data.cost, currency: data.currency, quantity: 1, id: data.id};
        if (productsInLS) {
            productList = JSON.parse(productsInLS);  
                 
        } else {
            productList = [];
            
        }
        productList.push(items); 
        localStorage.setItem('products', JSON.stringify(productList));
            
            
    });
      
    })
    })
    }




document.addEventListener('DOMContentLoaded', function(e){
    manageProductData()
})

