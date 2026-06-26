const loginForm = document.getElementById("loginForm")
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")


if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault()

        const email = emailInput.value.trim()
        const password = passwordInput.value.trim()

        if (email === "usuario@gmail.com" && password === "123") {
            window.location.href = "dashboard.html"
        }

    })
}