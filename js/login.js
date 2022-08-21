let Formulario = document.getElementById('form');

Formulario.addEventListener('submit', function(event){
    let email= document.getElementById('floatingInput');
    let miInputDeContraseña = document.getElementById('floatingPassword');

    let micontra = miInputDeContraseña.value;
    console.log(micontra);

   
     if (!(email.length >0) && !(micontra.length > 0)) {
         event.preventDefault();
         alert('Debe ingresar al menos 1 caracteres');
        } else {
         event.preventDefault();
         window.location.href = 'index.html';
        }
});

var provider = new firebase.auth.GoogleAuthProvider();

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });