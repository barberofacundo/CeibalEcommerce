document.addEventListener('DOMContentLoaded', function () {
    let productid = localStorage.getItem("ProdId")
    function newcoment(){
        let btnAgregar = document.getElementById("agregar");
        btnAgregar.addEventListener("click", function(){
        let newcoment = info[0];
        let inputItem = document.getElementById("exampleFormControlTextarea1");
        let stars = document.getElementById("stars");
        console.log(newcoment);
        newcoment.description = inputItem.value;
        newcoment.user = localStorage.getItem("user")
        newcoment.score = Number(stars.value);
        let date = new Date();
        console.log(date.toISOString().split('T')[0]);
        newcoment.dateTime = date.toISOString().split('T')[0]
        console.log(newcoment);
        info.push(newcoment);
        console.log(info);
    });
    }
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
            <div class="col-3 d-flex">
            <img src="${datos.images[0]}" alt="imagen" class="img-thumbnail">
            <img src="${datos.images[1]}" alt="imagen" class="img-thumbnail">
            <img src="${datos.images[2]}" alt="imagen" class="img-thumbnail">
            <img src="${datos.images[3]}" alt="imagen" class="img-thumbnail">
            </div>
            </li>
          </ul>
          <h2>Comentarios</h2>

            `
            document.getElementById("description").innerHTML = htmlContentToAppend;

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
            // btnAgregar.addEventListener("click", function(){
            let newcoment = info[0];
            let inputItem = document.getElementById("exampleFormControlTextarea1");
            let stars = document.getElementById("stars");
            newcoment.description = inputItem.value;
            newcoment.user = localStorage.getItem("user")
            newcoment.score = Number(stars.value);
            let date = new Date();
            console.log(date.toISOString().split('T')[0]);
            newcoment.dateTime = date.toISOString().split('T')[0]
            console.log(newcoment);
            info.push(newcoment);
            console.log(info);
        // });
        console.log(info);   
    });
    
});