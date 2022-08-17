document.addEventListener('DOMContentLoaded', function(){
    const Listado_URL = 'https://japceibal.github.io/emercado-api/cats_products/101.json';

    
    fetch(Listado_URL) 
    .then(respuesta => respuesta.json()) 
    .then(datos => {
         console.log(datos);
         console.log(datos.products[3].cost);

    
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
        });

});



