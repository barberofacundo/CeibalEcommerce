let user = 25801;
fetch(CART_INFO_URL + user + EXT_TYPE)
    .then(res => res.json())
    .then(datos => {
        // arraybuy.push(datos.articles[0])
        showproduct();
        totalcost()
    })

function showproduct() {
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
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                <img src="${arraybuy[i].image}" alt="imagen" class="img-thumbnail" width="150" height="150" id ="profilephoto"></td>
                                <td>${arraybuy[i].name}</td>
                                <td>${arraybuy[i].currency} ${arraybuy[i].unitCost}</td>
                                <td><input min="1" value="1" type="number" id ="${arraybuy[i].id}" name="cantidad" onclick="sub(${arraybuy[i].id},${arraybuy[i].unitCost}),totalcost()" onkeyup="sub(${arraybuy[i].id},${arraybuy[i].unitCost}),totalcost()"></td>
                                <td><p>${arraybuy[i].currency}</p><p class="${arraybuy[i].id}">${arraybuy[i].unitCost}</p></td>
                                <td><button type="button" class="btn btn-danger ${arraybuy[i].id}" onclick="quit(${arraybuy[i].id})">Eliminar</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                `
        document.getElementById("buys").innerHTML = htmlContentToAppend;

    }
}

// Cuando el usuario quiere borrar un articulo del carrito
function quit(id) {
    console.log(`${id}`)
    let i = 0;
    if (arraybuy != []){
        while ((arraybuy[i].id != id)) {
            i++;
        }
        console.log(i)
        if (arraybuy.length == 1){
            document.getElementById("buys").innerHTML = "Carrito vacio";
            document.getElementById('subcost').innerHTML = `USD 0`
            document.getElementById('ship').innerHTML = `USD 0`
            document.getElementById('tot').innerHTML = `USD 0`
            localStorage.clear()
        }
        else{
        arraybuy.splice(i,1);
        console.log(arraybuy)
        showproduct()
        totalcost()
        sub(arraybuy[i].id,arraybuy[i].unitCost)
        localStorage.clear()
        }
    }       
    else{
        document.getElementById("buys").innerHTML = "Carrito vacio";
        localStorage.clear()
    }
    
}

function sub(id, costo) {
    document.getElementsByClassName(`${id}`)[0].innerHTML = costo * document.getElementById(`${id}`).value
}


function totalcost() {
    let cost = 0;
    let cost2 = 0
    for (let i = 0; i < arraybuy.length; i++) {
        if (arraybuy[i].currency === "UYU") {
            cost2 = (parseInt(document.getElementsByClassName(`${arraybuy[i].id}`)[0].textContent) / 40)
            cost += parseInt(cost2)
        }
        else {
            cost2 = parseInt(document.getElementsByClassName(`${arraybuy[i].id}`)[0].textContent)
            cost += parseInt(cost2)
        }
    }
    if (document.getElementById('Premium').checked == true) {
        let cost = 0;
        let shipping = 0;
        let total = 0
        for (let i = 0; i < arraybuy.length; i++) {
            if (arraybuy[i].currency === "UYU") {
                cost2 = (parseInt(document.getElementsByClassName(`${arraybuy[i].id}`)[0].textContent) / 40)
                cost += parseInt(cost2)
            }
            else {
                cost2 = parseInt(document.getElementsByClassName(`${arraybuy[i].id}`)[0].textContent)
                cost += parseInt(cost2)
            }
        }
        shipping = ((cost * 15) / 100)
        total = (shipping + cost)
        document.getElementById('ship').innerHTML = `USD ${shipping}`
        document.getElementById('tot').innerHTML = `USD ${total}`

    }

    if (document.getElementById('Express').checked == true) {
        let cost = 0;
        let shipping = 0;
        let total = 0;
        for (let i = 0; i < arraybuy.length; i++) {
            if (arraybuy[i].currency === "UYU") {
                cost2 = (parseInt(document.getElementsByClassName(`${arraybuy[i].id}`)[0].textContent) / 40)
                cost += parseInt(cost2)
            }
            else {
                cost2 = parseInt(document.getElementsByClassName(`${arraybuy[i].id}`)[0].textContent)
                cost += parseInt(cost2)
            }
        }
        shipping = ((cost * 7) / 100)
        total = (shipping + cost)
        document.getElementById('ship').innerHTML = `USD ${shipping}`
        document.getElementById('tot').innerHTML = `USD ${total}`
    }

    if (document.getElementById('Standard').checked == true) {
        let cost = 0;
        let shipping = 0;
        let total = 0;
        for (let i = 0; i < arraybuy.length; i++) {
            if (arraybuy[i].currency === "UYU") {
                cost2 = (parseInt(document.getElementsByClassName(`${arraybuy[i].id}`)[0].textContent) / 40)
                cost += parseInt(cost2)
            }
            else {
                cost2 = parseInt(document.getElementsByClassName(`${arraybuy[i].id}`)[0].textContent)
                cost += parseInt(cost2)
            }
        }
        shipping = ((cost * 5) / 100)
        total = (shipping + cost)
        document.getElementById('ship').innerHTML = `USD ${shipping}`
        document.getElementById('tot').innerHTML = `USD ${total}`
    }

    document.getElementById('subcost').innerHTML = `USD ${cost}`
}

// Cuando el usuario elije la modalidad Premium 
document.getElementById('Premium').addEventListener('click', function () {
    let cost = 0;
    let shipping = 0;
    let total = 0
    for (let i = 0; i < arraybuy.length; i++){
        if (arraybuy[i].currency === "UYU") {
            cost2 = (parseInt(document.getElementsByClassName(`${arraybuy[i].id}`)[0].textContent)/40)
            cost += parseInt(cost2) 
        }
        else{
        cost2 = parseInt(document.getElementsByClassName(`${arraybuy[i].id}`)[0].textContent)
        cost += parseInt(cost2) 
        }
    }
    shipping = ((cost*15)/100) 
    total = (shipping+cost)
    document.getElementById('ship').innerHTML = `USD ${shipping}`
    document.getElementById('tot').innerHTML = `USD ${total}`
  });

// Cuando el usuario elije la modalidad Express
document.getElementById('Express').addEventListener('click', function(e) {
    let cost = 0;
    let shipping = 0;
    let total = 0;
    for (let i = 0; i < arraybuy.length; i++){
        if (arraybuy[i].currency === "UYU") {
            cost2 = (parseInt(document.getElementsByClassName(`${arraybuy[i].id}`)[0].textContent)/40)
            cost += parseInt(cost2) 
        }
        else{
        cost2 = parseInt(document.getElementsByClassName(`${arraybuy[i].id}`)[0].textContent)
        cost += parseInt(cost2) 
        }
    }
    shipping =((cost*7)/100)
    total = (shipping+cost)
    document.getElementById('ship').innerHTML = `USD ${shipping}`
    document.getElementById('tot').innerHTML =`USD ${total}`

  });

// Cuando el usuario elije la modalidad Standard
document.getElementById('Standard').addEventListener('click', function(e) {
    let cost = 0;
    let shipping = 0;
    let total = 0;
    for (let i = 0; i < arraybuy.length; i++){
        if (arraybuy[i].currency === "UYU") {
            cost2 = (parseInt(document.getElementsByClassName(`${arraybuy[i].id}`)[0].textContent)/40)
            cost += parseInt(cost2) 
        }
        else{
        cost2 = parseInt(document.getElementsByClassName(`${arraybuy[i].id}`)[0].textContent)
        cost += parseInt(cost2) 
        }
    }
    shipping = ((cost*5)/100)
    total = (shipping+cost)
    document.getElementById('ship').innerHTML = `USD ${shipping}`
    document.getElementById('tot').innerHTML = `USD ${total}`
  });
  


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("metododepago");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// When the user clicks on buttom (id = "guardar"), close the modal
document.getElementById("guardar").addEventListener("click", function (){
    modal.style.display = "none";    
    console.log(document.querySelector('input[name="pago"]:checked').value) 
    document.getElementById("selltype").innerHTML = document.querySelector('input[name="pago"]:checked').value
    }
)

// evento para deshabilitar campos cuándo se selecciona transferencia
document.getElementById('Transferencia').addEventListener('click', function(e) {
    document.getElementById('vencimiento').disabled = true;
    document.getElementById('CodSeg').disabled = true;
    document.getElementById('NumeroTarjeta').disabled = true;
    document.getElementById('NumeroCuenta').disabled = false;

  });

  // evento para deshabilitar campos cuándo se selecciona Tarjeta
    document.getElementById('Tarjeta').addEventListener('click', function(e) {
    document.getElementById('vencimiento').disabled = false;
    document.getElementById('CodSeg').disabled = false;
    document.getElementById('NumeroTarjeta').disabled = false;
    document.getElementById('NumeroCuenta').disabled = true;

  });

    // eventos para dar feedback sobre el modal
    document.getElementById('Finish').addEventListener("click", event => {
        let metododepago = document.getElementById('metododepago');
        let tarjeta = document.getElementById('Tarjeta')
        let transferencia = document.getElementById('Transferencia')
    
        
        if (!tarjeta.checkValidity() || !transferencia.checkValidity()) {
            metododepago.classList.add('is-invalid')
          } else {
            metododepago.classList.remove('is-invalid')
          }
      });

      document.getElementById('Tarjeta').addEventListener("click", event => {
        if (document.getElementById('Tarjeta').checkValidity()) {
            document.getElementById('metododepago').classList.remove('is-invalid')
        } else {
            document.getElementById('metododepago').classList.add('is-invalid')
        }
      
      });

      document.getElementById('Transferencia').addEventListener("click", event => {
        if (document.getElementById('Transferencia').checkValidity()) {
            document.getElementById('metododepago').classList.remove('is-invalid')
        } else {
            document.getElementById('metododepago').classList.add('is-invalid')
        }
      
      });


  // evento para desplegar mensaje push
  let AdressForm = document.forms['Adressform'];          
  const thankYouMessage = document.querySelector('#thank-you-message');
    AdressForm.addEventListener('submit', (e) => {
    e.preventDefault();
    thankYouMessage.classList.add('show');
    localStorage.clear();
    arraybuy = [];
    showproduct();
    document.getElementById("buys").innerHTML = "Carrito vacio";
    setTimeout(() => AdressForm.submit(), 2000);
  });
  
  
   