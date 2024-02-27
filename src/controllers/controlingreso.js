//DECLARANDO VARIABLES CON JS DESDE EL DOM

/*let nombreUsuario="Oscar Andres Rodriguez"
let edadUsuario=38
let estaturaUsuario=1.75
let estaLloviendo=false
let rh="A+"*/

let usuarioBaseDatos="oscarocr"
let password="sura2024"
let correoBaseDatos="andresrc2005@gmail.com"


let botonFormulario=document.getElementById("botoningreso")
let cajaFormularioNombre=document.getElementById("name")
let cajaFormularioCorreo=document.getElementById("email")
let cajaFormularioPassword=document.getElementById("password")

//DETECTANDO EVENTOS CON JS
botonFormulario.addEventListener("click",function(evento){
    alert("Estas intentando ingresar al sistema")

        evento.preventDefault()

    //1.capturamos la informacion del formulario
    let nombreUsuario=cajaFormularioNombre.value
    /*console.log("El nombre de usuario es: "+nombreUsuario)*/

    let correoUsuario=cajaFormularioCorreo.value
    /*console.log("El nombre de usuario es: "+correoUsuario)*/

    let passwordUsuario=cajaFormularioPassword.value
    /*console.log("El nombre de usuario es: "+passwordUsuario)*/

    //validando los datos del usuario
    if(usuarioBaseDatos==nombreUsuario){
        /*alert("bienvenido "+nombreUsuario)*/
        Swal.fire({
            title: "Bienvenido "+nombreUsuario,
            text: "Tus credenciales son correctas ",
            icon: "success"
          })

          window.location.href="./src/views/home.html"

    }else{
        /*alert("Usuario incorrecto")*/
        Swal.fire({
            icon: "error",
            title: "Oops... "+nombreUsuario,
            text: "Verifica tus credenciales!",
            footer: '<a href="#">Why do I have this issue?</a>'
          })
    }    

})






/*cajaFormularioNombre.addEventListener("click",function(){
    alert("Digite su nombre")
})
cajaFormularioCorreo.addEventListener("click",function(){
    alert("Digite su correo")
})
cajaFormularioPassword.addEventListener("click",function(){
    alert("Digite su password")
})*/