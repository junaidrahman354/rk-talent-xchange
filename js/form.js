const formOpenBtn = document.querySelector('#form-open');
const home = document.querySelector('.home');
const formContainer = document.querySelector('.form_container');
const formCloseBtn = document.querySelector('.form_close');
const signupBtn = document.querySelector('#signup');
const loginBtn = document.querySelector('#login');

formOpenBtn.addEventListener('click', () => home.classList.add('show'))
formCloseBtn.addEventListener('click', () => home.classList.remove('show'))

signupBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    formContainer.classList.add('active');
})

loginBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    formContainer.classList.remove('active');
})