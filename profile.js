const photoInput = document.getElementById("photoInput");
const profilePhoto = document.getElementById("profilePhoto");


// Profile picture

photoInput.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) {
        return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {

        profilePhoto.innerHTML =
            `<img src="${event.target.result}" alt="Profile Picture">`;

    };

    reader.readAsDataURL(file);
});


// Enable editing

function toggleEdit() {

    const fields = [
        "nameInput",
        "emailInput",
        "languageInput",
        "levelInput",
        "goalInput"
    ];

    fields.forEach(function (id) {

        document.getElementById(id).disabled = false;

    });

    document.getElementById("saveBtn").style.display = "block";
}


// Save profile

function saveProfile() {

    const name =
        document.getElementById("nameInput").value;

    const email =
        document.getElementById("emailInput").value;

    document.getElementById("displayName").textContent = name;

    document.getElementById("displayEmail").textContent = email;

    const fields = [
        "nameInput",
        "emailInput",
        "languageInput",
        "levelInput",
        "goalInput"
    ];

    fields.forEach(function (id) {

        document.getElementById(id).disabled = true;

    });

    document.getElementById("saveBtn").style.display = "none";

    alert("Profile updated successfully! ✨");
}


// Change language

function changeLanguage() {

    document.getElementById("languageInput").disabled = false;

    document.getElementById("languageInput").focus();

}


// Change password

function changePassword() {

    alert("Password change feature will be connected later.");
}


// Logout

function logout() {

    const confirmLogout =
        confirm("Are you sure you want to logout?");

    if (confirmLogout) {

        window.location.href = "home.html";

    }
}