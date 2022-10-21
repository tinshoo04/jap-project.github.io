



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
        <th><input type = "number" id = "${product.id}" min = 1></input></th>
        <th id = "${product.name}">${product.price * product.quantity} ${product.currency}</th>
        </tr>
        `

        document.getElementById('t-body-products').innerHTML += innerInfo


        /* let imgTh = document.createElement('th')
        item.setAttribute('id', `${product.id}`)
        trProducts.appendChild(imgTh)
        let imgProd = document.createElement('img')
        imgProd.setAttribute('src', `${product.img}`)
        imgTh.appendChild(imgProd) */

    } 
    for (let product of products){

    

        document.getElementById(`${product.id}`).addEventListener('change', e => {
        
            product.quantity = document.getElementById(`${product.id}`).value 
            document.getElementById(`${product.name}`).innerHTML = product.price * product.quantity + " " + product.currency
       })
    }


    
    })

    
