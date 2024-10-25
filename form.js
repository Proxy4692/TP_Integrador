document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault()

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("result").textContent = "";

    const name = document.getElementById("name").value;
    if(name.trim() === "" || name.length > 50){
        document.getElementById("nameError").textContent = "El nombre es obligatorio y debe tener menos de 50 caracteres.";
        return;
    }

    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailPattern.test(email)){
        document.getElementById("emailError").textContent = "Ingrese un correo electrónico válido.";
        return;
    }

    const phone = document.getElementById("phone").value;
    const phonePattern = /^(\+?\d{1,2}\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;
    if(!phonePattern.test(phone)){
        document.getElementById("phoneError").textContent = "El teléfono debe tener 10 dígitos numéricos.";
        return;
    }

    const resultDiv = document.getElementById("result");
    resultDiv.textContent = ""; //clean anterior

    const nameElement = document.createElement("p");
    nameElement.textContent = `Nombre: ${name}`;
    resultDiv.appendChild(nameElement);

    const emailElement = document.createElement("p");
    emailElement.textContent = `Correo Electrónico: ${email}`;
    resultDiv.appendChild(emailElement);

    const phoneElement = document.createElement("p");
    phoneElement.textContent = `Teléfono: ${phone}`;
    resultDiv.appendChild(phoneElement);

    resultDiv.style.color = "cyan";
});