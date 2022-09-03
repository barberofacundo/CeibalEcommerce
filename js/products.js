const ORDER_ASC_BY_NAME = "AZ";
const ORDER_DESC_BY_NAME = "ZA";
const ORDER_BY_PROD_COUNT = "Precio";
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;
let ArrayList = [];

function showList(){

    let htmlContentToAppend = "";
    for(let i = 0; i < ArrayList.length; i++){
        let product = ArrayList[i];

        if (((minCount == undefined) || (minCount != undefined && parseInt(product.cost) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(product.cost) <= maxCount))){

            htmlContentToAppend += `
            
                <div class="row">
                    <div class="col-3">
                        <img src="${product.image}" alt="imagen" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <div>
                            <h4> ${product.name} - ${product.currency} ${product.cost}</h4> 
                            <p>  ${product.description} </p> 
                            </div>
                            <small> ${product.soldCount} Vendidos </small> 
                        </div>
                    </div>
                </div>
            
            `
        }

        document.getElementById("listado").innerHTML = htmlContentToAppend;
    }
}     

function sortCategories(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_NAME)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_NAME){
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_COUNT){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result; 
}



function sortAndShowCategories(sortCriteria, categoriesArray){
    currentSortCriteria = sortCriteria;

    if(categoriesArray != undefined){
        currentCategoriesArray = categoriesArray;
    }

    currentCategoriesArray = sortCategories(currentSortCriteria, ArrayList);

    //Muestro las categorías ordenadas
    showList();
}


document.addEventListener('DOMContentLoaded', function(){

    let category = localStorage.getItem('catID');
    let Listado_URL = '';

      if (category == 102) {
          Listado_URL = 'https://japceibal.github.io/emercado-api/cats_products/102.json';
      }
      else if (category == 101) {
          Listado_URL = 'https://japceibal.github.io/emercado-api/cats_products/101.json';
      }
      else if (category == 103){
          Listado_URL = 'https://japceibal.github.io/emercado-api/cats_products/103.json';
      }
      else if (category == 104){
        Listado_URL = 'https://japceibal.github.io/emercado-api/cats_products/104.json';
     }
     else if (category == 105){
        Listado_URL = 'https://japceibal.github.io/emercado-api/cats_products/105.json';
     }
     else if (category == 106){
        Listado_URL = 'https://japceibal.github.io/emercado-api/cats_products/106.json';
     }
     else if (category == 107){
        Listado_URL = 'https://japceibal.github.io/emercado-api/cats_products/107.json';
     }
     else if (category == 108){
        Listado_URL = 'https://japceibal.github.io/emercado-api/cats_products/108.json';
     }
     else {
        Listado_URL = 'https://japceibal.github.io/emercado-api/cats_products/109.json';
     }
    
    fetch(Listado_URL) 
    .then(respuesta => respuesta.json()) 
    .then(datos =>{

        let divListaAutos = document.getElementById('listado');
        for (let i=0; i < datos.products.length; i++) {

            ArrayList[i] = datos.products[i];
            showList();
            // divListaAutos.innerHTML += `
            // <div class="contenedor de autos">
            //     <div class="row">
            //         <div class="col-3">
            //             <img src = "${datos.products[i].image}" class="img-thumbnail">
            //         </div>
            //         <div class="col">
            //             <div class="d-flex w-100 justify-content-between">
            //                 <div>
            //                 <h4> ${datos.products[i].name} - ${datos.products[i].currency} ${datos.products[i].cost}</h4> 
            //                 <p>  ${datos.products[i].description} </p> 
            //                 </div>
            //                 <small> ${datos.products[i].soldCount} Vendidos </small> 
            //             </div>
    
            //         </div>
            //     </div>
            // </div>
            // `
        }
        let descrip =  document.getElementById('descri');
        descrip.innerHTML += `Veras aqui todos los productos de la categoria ${datos.catName}`
        });


        document.getElementById("sortAsc").addEventListener("click", function(){
            sortAndShowCategories(ORDER_ASC_BY_NAME);
        });
    
        document.getElementById("sortDesc").addEventListener("click", function(){
            sortAndShowCategories(ORDER_DESC_BY_NAME);
        });
    
        document.getElementById("sortByCount").addEventListener("click", function(){
            sortAndShowCategories(ORDER_BY_PROD_COUNT);
        });
    
        document.getElementById("clearRangeFilter").addEventListener("click", function(){
            document.getElementById("rangeFilterCountMin").value = "";
            document.getElementById("rangeFilterCountMax").value = "";
    
            minCount = undefined;
            maxCount = undefined;
            
            showList();
        });
    
        document.getElementById("rangeFilterCount").addEventListener("click", function(){
            //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
            //de productos por categoría.
            minCount = document.getElementById("rangeFilterCountMin").value;
            maxCount = document.getElementById("rangeFilterCountMax").value;
    
            if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
                minCount = parseInt(minCount);
            }
            else{
                minCount = undefined;
            }
    
            if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
                maxCount = parseInt(maxCount);
            }
            else{
                maxCount = undefined;
            }
    
            showList();
        });

        document.getElementById("buscar").addEventListener("input", function(){
            let results = ArrayList.filter(item => {
                let itemUpperCase = item.name.toUpperCase();
                return itemUpperCase.includes(document.getElementById("buscar").value.toUpperCase());
            });
            let htmlContentToAppend = "";
            for(let i = 0; i < results.length; i++){
                let product = results[i];
                htmlContentToAppend += `
            
                <div class="row">
                    <div class="col-3">
                        <img src="${product.image}" alt="imagen" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <div>
                            <h4> ${product.name} - ${product.currency} ${product.cost}</h4> 
                            <p>  ${product.description} </p> 
                            </div>
                            <small> ${product.soldCount} Vendidos </small> 
                        </div>
                    </div>
                </div>
            
            `
            }
            document.getElementById("listado").innerHTML = htmlContentToAppend;
            
        });
       
    
});



