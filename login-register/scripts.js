document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");


    if (email === "alguien@gmail.com" && password === "contra123") {
        alert("Inicio de sesión exitoso");

    } else {
        errorMessage.textContent = "Correo electrónico o contraseña incorrectos";
        errorMessage.style.display = "block";
    }
});