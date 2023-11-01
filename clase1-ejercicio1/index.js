document.addEventListener("DOMContentLoaded", function () {
    let desplegableEstado = document.getElementById("campo-estado")
    let selecciondeestado= document.getElementById("estado-seleccionado")

    desplegableEstado.addEventListener("change", function (event) {
        selecciondeestado.innerText= event.target.value
    })
})