let navItem = document.getElementById("username");
const logout = document.getElementById("logout")


document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });

        let contentToAppend = `
        <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    ${user}
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a href="login.html" class="dropdown-item" id = "logout">Cerrar Sesión</a></li>
    <li><a class="dropdown-item" href="cart.html">Carrito de compras</a></li>
    <li><a class="dropdown-item" href="my-profile.html">Mi Perfil</a></li>
  </ul>
</div>
          
          
        `
         navItem.innerHTML += contentToAppend;
         
    logout.addEventListener('click', function(e) {
        if (user !== null) {
            localStorage.removeItem('user')
            window.location.href = "../login.html"
        }
        }); 

    })

    let user = localStorage.getItem('user')
    if(user == null){location.href = "../login.html"}

