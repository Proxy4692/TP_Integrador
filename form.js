document.getElementById('formContacto').addEventListener('submit', function(event){
    event.preventDefault()

    const nombre = document.getElementById('nombre').value
    const telefono = document.getElementById('telefono').value
    const email = document.getElementById('email').value

    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    const telefonoRegex = /^[0-9]{9}$/;

    let errores = []

    if(nombre.length === 0){
        errores.push('El nombre es obligatorio.')
    }

    if(!emailRegex.test(email)){
        errores.push('El correo electronico no es valido.')
    }

    if(!telefonoRegex.test(telefono)){
        errores.push('El telefono debe tener 9 digitos.')
    }

    const resultadoDiv = document.getElementById('formResult')
    resultadoDiv.innerHTML = ''

    if(errores.length > 0){
        errores.forEach(error => {
            const errorParrafo = document.createElement('p')
            errorParrafo.textContent = error
            resultadoDiv.appendChild(errorParrafo)
        })
    }else{
        const exitoParrafo = document.createElement('p')
        exitoParrafo.textContent = 'Formulario enviado con exito. Nombre: ${nombre}, Correo: ${email}, Telefono: ${telefono}'
        resultadoDiv.appendChild(exitoParrafo)
    }
})