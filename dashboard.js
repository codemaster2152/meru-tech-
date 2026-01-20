const email = localStorage.getItem("email");
document.getElementById("userEmail").textContent = email || "User";

document.getElementById("logout").addEventListener("click", () => {
    window.location.href = "index.html";
});
