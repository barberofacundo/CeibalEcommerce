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
console.log(pantalla);

let nav = document.getElementById('local');
nav.innerHTML += `
                 <a class="nav-link" href="sell.html">${pantalla}</a>
                
            `
        