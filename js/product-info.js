let productInfoContainer = document.getElementById('product-info')


function manageProductData() {

    fetch(`https://japceibal.github.io/emercado-api/products/${localStorage.getItem('product')}.json`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      let contentToAppend = `
      <div class = "container" id = "title">
      <small><strong>Categoría</strong> : ${data.category}</small>
        <h2 class = "display-6" id = "title-product">${data.name}</h2>
        <p>${data.description}</p>
      </div>
      
      <div class = "container" id = "imgs-container">
      
      
      
      </div>

      <div id="info-extra">
      <p id = "sold-count"><strong>Productos vendidos:</strong> ${data.soldCount}</p>
      <br>
      <h4 id = "price">Precio: <strong>${data.cost} ${data.currency} </strong></h4>
      </div>
      
      
      
      `
      productInfoContainer.innerHTML += contentToAppend

      for(let imgs of data.images){
       let img = document.createElement('img')
       img.setAttribute('src', imgs)
       img.setAttribute('class', 'img-class')
       
       document.getElementById('imgs-container').appendChild(img)
      }

      fetch(`https://japceibal.github.io/emercado-api/products_comments/${localStorage.getItem('product')}.json`)
      .then(response => response.json())
      .then(info => {
        console.log(info)
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
        
    })
    })
}



document.addEventListener('DOMContentLoaded', function(e){
    manageProductData()
})