var bg = document.getElementById('bg')
var active = document.getElementById('active-form')

const changeRegister = () => {
    active.classList.remove('login-page')
    active.classList.add('register-page')

    bg.classList.remove('login-bg')
    bg.classList.add('register-bg')
    bg.innerHTML = "<img src='./img/register.png'></img>"
}

const changeLogin = () => {
    active.classList.remove('register-page')
    active.classList.add('login-page')
    
    bg.classList.remove('register-bg')
    bg.classList.add('login-bg')
    bg.innerHTML = "<img src='./img/login.png'></img>"
}