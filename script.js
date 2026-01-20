const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const rememberMe = document.getElementById("rememberMe");

// Load remembered email
window.onload = () => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
        emailInput.value = savedEmail;
        rememberMe.checked = true;
    }
};

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value;
    const password = document.getElementById("password").value;

    // Save or remove email based on Remember Me
    if (rememberMe.checked) {
        localStorage.setItem("email", email);
    } else {
        localStorage.removeItem("email");
    }

    // (Optional) simple validation
    if (email && password) {
        // Redirect to dashboard
        window.location.href = "dashboard.html";
    } else {
        alert("Please enter email and password");
    }
});
