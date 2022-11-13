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
});

let pantalla = localStorage.getItem('user');

let nav = document.getElementById('local');
nav.innerHTML += `
                    <div class="dropdown">
                    <a class="nav-link btn btn-secondary dropdown-toggle" href="sell.html" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    ${pantalla}
                    </a>

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a class="dropdown-item" href="cart.html">Mi Carrito</a></li>
                        <li><a class="dropdown-item" href="my-profile.html">Mi Perfil</a></li>
                        <li id = cerrar><a class="dropdown-item" href="index.html">Cerrar Sesión</a></li>
                    </ul>
                    </div>
 
            `