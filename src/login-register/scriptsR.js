document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const conpassword = document.getElementById("conpassword").value;
    const errorMessage = document.getElementById("error-message");

    if (password !== conpassword) {
        errorMessage.textContent = "Las contraseñas no coinciden";
        errorMessage.style.display = "block";
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = "La contraseña debe tener al menos 6 caracteres";
        errorMessage.style.display = "block";
        return;
    }

    alert("Registro exitoso. Ahora puedes iniciar sesión.");

    document.getElementById("registerForm").reset();
    errorMessage.style.display = "none";
});