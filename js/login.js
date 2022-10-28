
const loginForm = document.getElementById('login-form');
const email = document.getElementById('email');
const password = document.getElementById('login-password');
let usuario;




document.addEventListener('DOMContentLoaded', function(e){

    loginForm.addEventListener('submit', function(e){
        if(email.value.length < 1 || password.value.length < 1) {
        e.preventDefault();
            password.style.border = 'red solid 2px';
            email.style.border = 'red solid 2px';
        } else {
            e.preventDefault();
            usuario = localStorage.setItem('user', email.value);
            location.href = 'index.html';
        };
    });
});
