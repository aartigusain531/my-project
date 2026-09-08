const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Basic validation
    if (!name || !email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    // Create user profile
    const user = {
        name: name,
        email: email
    };

    // Save profile in browser
    localStorage.setItem("tragoUser", JSON.stringify(user));

    // Go to dashboard
    window.location.href = "Dashboard.html";
});
