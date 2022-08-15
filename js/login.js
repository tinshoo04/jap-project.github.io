
const loginForm = document.getElementById('login-form');
const email = document.getElementById('email');
const password = document.getElementById('login-password');




document.addEventListener('DOMContentLoaded', function(e){

    loginForm.addEventListener('submit', function(e){
        if(email.value.length < 1 || password.value.length < 5) {
        e.preventDefault();
        password.style.border = 'red solid 2px';
        } else {
            e.preventDefault();
            let usuario = localStorage.setItem('user', email.value)
            window.location.href = '../index.html';
        }
    });
    
});

