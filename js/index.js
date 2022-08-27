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
          <a href="login.html" class="nav-link" id = "logout">${user}</a>
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

