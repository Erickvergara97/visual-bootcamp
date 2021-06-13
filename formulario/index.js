const email = document.getElementById("email");
const password = document.getElementById("password");
const login = document.getElementById("login");
const aviso = document.getElementById("aviso")
const recordarcontraseña = document.getElementById("recordarcontraseña");
let mostrar = true;

const user = {
    email: "pruebasignin@gmail.com",
    password: "123456789"
}

login.addEventListener("click", function(event){
    event.preventDefault()
    comparar()

})
recordarcontraseña.addEventListener("click", function(event){
    event.preventDefault()
    if(mostrar){
        mostraruser()
    }
    else{
        ocultar()
    }
    mostrar = !mostrar

})


function comparar(){
    if(email.value === user.email && password.value ===user.password){
        aviso.innerText="Felicidades, iniciaste sesión!"
    }else{
        aviso.innerText= "Usuario o Contraseña incorrectos"
    }
}

function mostraruser(){
    aviso.innerText=`${user.email}\n${user.password}`
}
function ocultar(){
    aviso.innerText=""
}