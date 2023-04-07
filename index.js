const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

password.addEventListener("input", () => {
    if (password === confirmPassword) {
        password.classList.remove("error")
    }
})