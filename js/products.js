document.addEventListener('DOMContentLoaded', function(){

    let category = localStorage.getItem('catID');
    console.log(category);
    let Listado_URL = '';

    if (category === 102) {
        Listado_URL = 'https://japceibal.github.io/emercado-api/cats_products/102.json';
    }
    else if (category === 101) {
        Listado_URL = 'https://japceibal.github.io/emercado-api/cats_products/101.json';
    }
    else {
        Listado_URL = 'https://japceibal.github.io/emercado-api/cats_products/103.json';
    }

    fetch(Listado_URL) 
    .then(respuesta => respuesta.json()) 
    .then(datos =>{

    
        let divListaAutos = document.getElementById('lista-autos');
        for (let i=0; i < datos.products.length; i++) {
            divListaAutos.innerHTML += `
            <div class="contenedor de autos">
                <div class="row">
                    <div class="col-3">
                        <img src = "${datos.products[i].image}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <div>
                            <h4> ${datos.products[i].name} - USD ${datos.products[i].cost}</h4> 
                            <p>  ${datos.products[i].description} </p> 
                            </div>
                            <small> ${datos.products[i].soldCount} Vendidos </small> 
                        </div>
    
                    </div>
                </div>
            </div>
            `
        }
        let descrip =  document.getElementById('descri');
        descrip.innerHTML += `Veras aqui todos los productos de la categoria ${datos.catName}`
        });

});



