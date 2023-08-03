var bg = document.getElementById('bg')

const switchPage = document.querySelector('.switch')

const regImg = document.getElementById('registerImg')
const logImg = document.getElementById('loginImg')

const inputs = document.querySelectorAll('input')

const changeRegister = () => {
    switchPage.classList.remove('login')
    switchPage.classList.add('register')

    logImg.classList.remove('active')
    regImg.classList.add('active')

    bg.classList.remove('login-bg')
    bg.classList.add('register-bg')
}

const changeLogin = () => {
    
    switchPage.classList.remove('register')
    switchPage.classList.add('login')
    
    regImg.classList.remove('active')
    logImg.classList.add('active')

    bg.classList.remove('register-bg')
    bg.classList.add('login-bg')
}

inputs.forEach(input => {

    const label = document.querySelector(`label[for="${input.id}"]`)

    input.addEventListener('focus', () => {

        input.style.border = "2px solid #ffc148"
        input.style.borderRadius ="10px"
        
        label.style.transform =  "translate(25% , -60%)"
    })

    input.addEventListener('blur', () => {

        if(input.value) {
            label.style.transform = "translate(25%, -60%)";
        }
        else {
            label.style.transform = "translateY(0)";
            input.style.border = "none"
            input.style.borderBottom = "2px solid #ffc148"
        }
    })
})