



fetch(`https://japceibal.github.io/emercado-api/user_cart/25801.json`)
.then(response => response.json())
.then(data => {
    console.log(data.articles[0])
    let products = JSON.parse(localStorage.getItem('products'))
    let peugeot = {
    id : data.articles[0].id ,
    name : data.articles[0].name,
    price : data.articles[0].unitCost,
    quantity : 1,
    img : data.articles[0].image ,   
    currency: data.articles[0].currency
    }
    
    products.push(peugeot)
    console.log(products)

    /* let trProducts = document.createElement('tr')
    document.getElementById('t-body-products').appendChild(trProducts) */

    for (let product of products) {
        
        let innerInfo = `
        
        <tr>
        <th><img src = "${product.img}" class = "img img-thumbnail"></img></th>
        <th>${product.name}</th>
        <th>${product.price} ${product.currency}</th>
        <th><input type = "number" id = "${product.id}-input" min = 1 value = "1"></input></th>
        <th>  <p class = "subtotal" id = "${product.id}-subtotal"> ${product.price * product.quantity}</p> ${product.currency}</th>
        </tr>
        `

        document.getElementById('t-body-products').innerHTML += innerInfo

    } 
    for (let product of products){

    

        document.getElementById(`${product.id}-input`).addEventListener('change', e => {
        
            product.quantity = document.getElementById(`${product.id}-input`).value 
            document.getElementById(`${product.id}-subtotal`).innerHTML = product.price * product.quantity + " " + product.currency

            calcularTotal(products)
            
       })

       

    }

        
    
    
})
    

function calcularTotal(products) {

    document.getElementById('sub-total').innerHTML.innerHTML = " "
    let sum = 0
    let subtotal = document.getElementsByClassName('subtotal')
    console.log(subtotal)
    let subList = []
    console.log(subtotal)

     for(let elemento of subtotal){
        console.log(elemento)
     subList.push(parseInt(elemento.innerText))
     
        }
        console.log(subList)
    

    


}

calcularTotal()

