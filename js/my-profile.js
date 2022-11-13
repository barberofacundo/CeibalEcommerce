let mail = localStorage.getItem('user');
let imageBinary = null
console.log(mail)

//Autocompleta los datos que extrae desde el local storage
function autocomplete() {
  if (localStorage.getItem('foto') != undefined) {
    let foto = localStorage.getItem('foto')
    document.getElementById("pfoto").setAttribute('src', foto)
  }

  document.getElementById('name').value = localStorage.getItem('nombre')
  document.getElementById('2name').value = localStorage.getItem('nombre2')
  document.getElementById('surname').value = localStorage.getItem('apellido')
  document.getElementById('secondsurname').value = localStorage.getItem('apellido2')
  document.getElementById('number').value = localStorage.getItem('tel')
}
//CAPTURAMOS LA IMAGEN SELECCIONADA
  function ImageCapture() {
  document.getElementById("profile").addEventListener("change", (e) => {
  console.log(e.target.files[0]);
  let imageBinary = null
  //LEEMOS EL BINARIO DE LA IMAGEN
  const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        e.preventDefault();
        document.getElementById("pfoto").setAttribute('src', e.target.result)
        localStorage.setItem('foto',e.target.result)
       };
     });
  }

document.addEventListener('DOMContentLoaded', function () {
  let htmlContentToAppend = "";
  htmlContentToAppend += `
            <form id = "form" novalidate >
            <div class="form-row">
              <div class="col-md-4 mb-3">
                <label for="name">Nombre</label>
                <input type="text" class="form-control" id="name" name="nombre" value="" required>
              </div>
              <div class="col-md-4 mb-3">
                <label for="2name">Segundo Nombre</label>
                <input type="text" class="form-control" name="secondname" id="2name"  value="">
              </div>
              <div class="col-md-4 mb-3">
                <label for="surname">Apellido</label>
                <input type="text" class="form-control" name="surname" id="surname" value="" required>
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-4 mb-3">
                <label for="2surname">Segundo Apellido</label>
                <input type="text" class="form-control" name = "secondsurname" id="secondsurname" value="">
              </div>
                <div class="col-md-4 mb-3">
                   <label for="mail">Email</label>
                  <input type="email" class="form-control" id="email" name ="email" value="${mail}" required>
                </div>
              <div class="col-md-3 mb-3">
                <label for="number">Núnero de contacto</label>
                <input type="text" class="form-control" name="number" id="number"  value="">
              </div>
              <div class="col-md-3 mb-3">
                <label for="profile" class="form-label">Foto de perfil</label>
                <input type="file" class="form-control" id="profile">
              </div>
            </div>
            <button class="btn btn-primary" id="save" type="submit">Guardar cambios</button>
          </form>
          
                                 `
  document.getElementById("formulario").innerHTML = htmlContentToAppend;
  
  let form = document.forms['form'];
  form.addEventListener('submit', function (e) {
    let validityStateDeNombre = form.nombre.validity;
    if (validityStateDeNombre.valueMissing) {
      e.preventDefault();
      form.nombre.setCustomValidity('Tienes que rellenar con tu nombre');
      form.nombre.reportValidity();
    }
  });
  form.addEventListener('submit', function (e) {
    let validityStateDeApellido = form.surname.validity;
    if (validityStateDeApellido.valueMissing) {
      e.preventDefault();
      form.surname.setCustomValidity('Tienes que rellenar con tu apellido');
      form.surname.reportValidity();
    }

  });

  let Formulario = document.getElementById('form');
  Formulario.addEventListener('submit', function (event) {
    let nombre = document.getElementById('name');
    let nombre2 = document.getElementById('2name');
    let apellido = document.getElementById('surname');
    let apellido2 = document.getElementById('secondsurname');
    let tel = document.getElementById('number');
    let perfil = document.getElementById('profile');
    let minombre = nombre.value;
    let minombre2 = nombre2.value
    let miapellido = apellido.value
    let miapellido2 = apellido2.value
    let mitel = tel.value
    localStorage.setItem('nombre', minombre);
    localStorage.setItem('nombre2', minombre2);
    localStorage.setItem('apellido', miapellido);
    localStorage.setItem('apellido2', miapellido2);
    localStorage.setItem('tel', mitel);
  });
  
  ImageCapture()
  autocomplete()
     
});
