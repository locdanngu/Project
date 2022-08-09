
//Đăng ký

const signup = document.querySelector('.js-model-help')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')
const Signup = document.querySelector('.js-modal-resiter-help')


function showSignUp() {
    modal.classList.add('open')
    model.classList.remove('open')
}
function hideSignUp() {
    modal.classList.remove('open')
}
function showlogin() {
    model.classList.add('open')
    modal.classList.remove('open')
}
signup.addEventListener('click', showSignUp)
modal.addEventListener('click', hideSignUp)
Signup.addEventListener('click', showlogin)
modalClose.addEventListener('click', hideSignUp)
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})



//Đăng nhập

const login = document.querySelector('.js-login')
const model = document.querySelector('.js-model')
const modelClose = document.querySelector('.js-model-close')
const modelContainer = document.querySelector('.js-model-container')
const modelRegister = document.querySelector('.js-modal-help')

function showLogin() {
    model.classList.add('open')
}
function hideLogin() {
    model.classList.remove('open')
}
function showLoginInRegister() {
    model.classList.add('open')
    modelRegister.classList.remove('open')
}
login.addEventListener('click', showLogin)
modelRegister.addEventListener('click', showLoginInRegister)
modelClose.addEventListener('click', hideLogin)
model.addEventListener('click', hideLogin)
modelContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})



// -------------------SIDEBAR------------------------


document.getElementById("open-navbar").onclick = function () {
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("close-navbar").style.display = "block";
}

document.getElementById("close-navbar").onclick = function () {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("close-navbar").style.display = "none";
}

//-------------------AVARTAR--------------------------
const user = document.getElementsByClassName(".user_img")
const userInfo = document.getElementsByClassName(".sub_user")

user.onclick = function () {
    userInfo.style.display = "block";
}


