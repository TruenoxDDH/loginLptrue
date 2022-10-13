//declarar variables  para vinculos 
const usuario = document.getElementById('user');
const password = document.getElementById('pass');
const formulario = document.getElementById('formLogin');

formulario.addEventListener('submit',login);

function login(e){
    
    e.preventDefault();
    let usuarioVal = usuario.value;
    let passwordVal = password.value;

if(usuarioVal == ''|| passwordVal == ''){
   crearMensaje('verifica tus caampos','danger');
    return;
}

    
if(localStorage.getItem('usuario')){
    let objeto = JSON.parse (localStorage.getItem('usuario'));

    if(usuarioVal == objeto.user && passwordVal== objeto.pass){
        crearMensaje('login correcto','success');
} else {
    crearMensaje('usuaario incorecto','danger');
   }
} else {
crearMensaje('no hay registros','danger');

}

}