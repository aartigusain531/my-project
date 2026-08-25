const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const language =
        document.getElementById("language").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    if (password.length < 6) {
        alert("Password should be at least 6 characters.");
        return;
    }

    if (!language) {
        alert("Please choose a language.");
        return;
    }

    alert(
        "Welcome to TRAGO, " +
        name +
        "! Your account has been created."
    );

    window.location.href = "login.html";
});