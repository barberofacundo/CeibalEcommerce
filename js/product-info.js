document.addEventListener('DOMContentLoaded', function () {
    let productid = localStorage.getItem("ProdId")
    fetch(PRODUCT_INFO_URL + productid + EXT_TYPE)
        .then(res => res.json())
        .then(datos => {
            let htmlContentToAppend = "";
            htmlContentToAppend += `
            
            <ul class="list-group">
                <li class="list-group-item"><h1> ${datos.name}</h1></li>
                <li class="list-group-item">
                <p>Precio</p>
                ${datos.cost}
                </li>
                <li class="list-group-item">
                <p>Descripcion</p>
                ${datos.description}
                </li>
                <li class="list-group-item">
                <p>Categoria</p>
                ${datos.category}
                </li>
                <li class="list-group-item">
                <p>Cantidad de vendidos</p>
                ${datos.soldCount}
                </li>
                <li class="list-group-item">
                <h5>Imagenes ilustrativas</h5>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src=" ${datos.images[0]}" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src=" ${datos.images[1]}" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src=" ${datos.images[2]}" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src=" ${datos.images[3]}" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
                </li>
            </ul>
          <h2>Comentarios</h2>

            `
            
            document.getElementById("description").innerHTML = htmlContentToAppend;
            console.log(datos)
            
            for(let related of datos.relatedProducts){
            let rproduct = document.createElement("button");
            document.getElementById("related-products").append(rproduct);
            rproduct.innerHTML = 
              `
            
            <div class=" col-3 d-flex">
                <img src="${related.image}" alt="imagen" class="img-thumbnail">
                <h4>${related.name}</h4>
            </div>
            
                 
             `
             rproduct.addEventListener("click", function () {
                localStorage.setItem("ProdId", related.id)
                location.href = ("product-info.html");
            });
        }

        });
    fetch(PRODUCT_INFO_COMMENTS_URL + productid + EXT_TYPE)
        .then(res => res.json())
        .then(info => {
            let htmlContentToAppend2 = "";
            let htmlContentToAppend3 = "";
            for (let coments of info) {
                switch (coments.score) {
                    case 1:
                        htmlContentToAppend3 = `
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star "></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        `
                        break;
                    case 2:
                        htmlContentToAppend3 = `
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        `
                        break;
                    case 3:
                        htmlContentToAppend3 = `
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        `
                        break;
                    case 4:
                        htmlContentToAppend3 = `
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        `
                        break;
                    default:
                        htmlContentToAppend3 = `
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        `
                }
                htmlContentToAppend2 += ` 
                <div class="row flex-column">
                    <div>
                        <ul class="list-group list-group-flush flex-column">
                            <li class="list-group-item"> 
                            ${coments.user} - ${coments.dateTime} - ${htmlContentToAppend3}
                             </br> ${coments.description} 
                            </li>
                        </ul>
                    </div> 
                </div>
            `
            }
            document.getElementById("description2").innerHTML = htmlContentToAppend2;
            let btnAgregar = document.getElementById("agregar");
        let inputItem = document.getElementById("exampleFormControlTextarea1");
        let elContainer = document.getElementById("description4");
        let stars = document.getElementById("stars");
        let newcoment;
        btnAgregar.addEventListener("click", (event)=>{
              // crea un nuevo objeto `Date`
              var today = new Date();
              // obtener la fecha y la hora
              var now = today.toLocaleString();
              newcoment = {
                  user: localStorage.getItem("user"),
                  description : inputItem.value, 
                  score : Number(stars.value), 
                  dateTime : now,
              }
            switch (newcoment.score) {
                case 1:
                    htmlContentToAppend3 = `
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star "></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    `
                    break;
                case 2:
                    htmlContentToAppend3 = `
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    `
                    break;
                case 3:
                    htmlContentToAppend3 = `
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    `
                    break;
                case 4:
                    htmlContentToAppend3 = `
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    `
                    break;
                default:
                    htmlContentToAppend3 = `
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    `
            }

            if ((inputItem.value != null)) {

                elContainer.innerHTML +=  `<div class="row flex-column">
                    <div>
                        <ul class="list-group list-group-flush flex-column">
                            <li class="list-group-item"> 
                            ${newcoment.user} - ${newcoment.dateTime} - ${htmlContentToAppend3}
                             </br> ${newcoment.description} 
                            </li>
                        </ul>
                    </div> 
                </div>
            `
                info.push(newcoment);
                console.log(newcoment);
                console.log(info);
            }
        });
    });
        
        
});