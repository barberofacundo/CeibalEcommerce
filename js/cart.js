document.addEventListener('DOMContentLoaded', function () {
    let user = 25801;
    fetch(CART_INFO_URL + user + EXT_TYPE)
        .then(res => res.json())
        .then(datos => {
            let articulos = datos.articles
            let precio = datos.articles[0].unitCost
            let htmlContentToAppend = "";
            htmlContentToAppend += `
            <h1 class="text-center">Carrito</h1>
            <h3>Articulos a comprar</h5>
            <div class="table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nombre</th>
                            <th>Costo</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                            <img src="${articulos[0].image}" alt="imagen"  class="img-thumbnail"></td>
                            <td>${articulos[0].name}</td>
                            <td>${articulos[0].currency} ${articulos[0].unitCost}</td>
                            <td><input type="text" id="cantidad" name="cantidad"></td>
                            <td><p class ="ToUpper"><p></td>
                            <td></td>  
                        </tr>
                    </tbody>
                </table>
            </div>
            <fieldset>
                <legend>Tipo de envio:</legend>

                <div>
                <input type="radio" id="Premium" name="Envio" value="Premium"
                        checked>
                <label for="Premium">Premium 2 a 5 dias (15%)</label>
                </div>

                <div>
                <input type="radio" id="Express" name="Envio" value="Express">
                <label for="Express">Express 5 a 8 dias (7%)</label>
                </div>

                <div>
                <input type="radio" id="standard" name="Envio" value="standard">
                <label for="standard">Standard 12 a 15 dias (5%) </label>
                </div>
            </fieldset>

            <div>
            <h3>Direccion de Envio :</h5>
            <form>
                <label for="street">Calle:</label><br>
                <input type="text" id="street" name="street"><br>
                <label for="number">Numero:</label><br>
                <input type="text" id="number" name="number"><br>
                <label for="Esquina">Esquina:</label><br>
                <input type="text" id="Esquina" name="Esquina">
            </form>
            `
            document.getElementById("buys").innerHTML = htmlContentToAppend;
            document.getElementById("cantidad").addEventListener('keyup',(event)=>{
                var inputText = event.path[0].value;
                console.log(inputText);
               document.querySelector('.ToUpper').innerHTML = precio*inputText ;
            })
        })
});