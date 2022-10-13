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
    return;
}

    console.log('el valor del usuario es'+ usuarioVal);
    console.log('el valor del pass es'+ passwordVal);


}