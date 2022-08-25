 let Formulario = document.getElementById('form');

 Formulario.addEventListener('submit', function(event){
     let email= document.getElementById('floatingInput');
     let miInputDeContraseña = document.getElementById('floatingPassword');

     let micontra = miInputDeContraseña.value;
     let miuser = email.value

     localStorage.setItem('user',miuser);
   
      if (!(email.length <0) && !(micontra.length < 0)) {
        
         event.preventDefault();
         window.location.href = 'portada.html';
        }

 });
 window.google = function(){

         window.location.href = 'portada.html';
         };
    

