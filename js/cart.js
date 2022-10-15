console.log(arraybuy)

    let user = 25801;
    fetch(CART_INFO_URL + user + EXT_TYPE)
        .then(res => res.json())
        .then(datos => {

            arraybuy.push(datos.articles[0])

            console.log(arraybuy)
            showproduct();
        })
    
     function showproduct(){
     let htmlContentToAppend = "";

            for (let i = 0; i < arraybuy.length; i++) {

                htmlContentToAppend += `
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
                                <img src="${arraybuy[i].image}" alt="imagen"  class="img-thumbnail"></td>
                                <td>${arraybuy[i].name}</td>
                                <td>${arraybuy[i].currency} ${arraybuy[i].unitCost}</td>
                                <td><input min="1" type="number" id ="${arraybuy[i].id}" name="cantidad" onclick="sub(${arraybuy[i].id},${arraybuy[i].unitCost})" onkeyup="sub(${arraybuy[i].id},${arraybuy[i].unitCost})"></td>
                                <td><p>${arraybuy[i].currency}<p><p class="${arraybuy[i].id}"><p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                `
                document.getElementById("buys").innerHTML = htmlContentToAppend;
            
            }
        }

        function sub(id,costo) {
            document.getElementsByClassName(`${id}`)[0].innerHTML =  costo*document.getElementById(`${id}`).value
        }