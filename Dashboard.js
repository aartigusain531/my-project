document.addEventListener("DOMContentLoaded", function () {

    const userEmail = localStorage.getItem("userEmail");
    const userName = localStorage.getItem("userName");
    const userAvatar = localStorage.getItem("userAvatar");

    if (userEmail) {

        // Header profile
        const headerUserName = document.getElementById("headerUserName");
        const headerAvatar = document.getElementById("headerAvatar");

        if (headerUserName) {
            headerUserName.textContent = userName || userEmail;
        }

        if (headerAvatar) {
            headerAvatar.textContent = userAvatar || "A";
        }


        // Sidebar profile
        const sidebarUserName = document.getElementById("sidebarUserName");
        const sidebarAvatar = document.getElementById("sidebarAvatar");

        if (sidebarUserName) {
            sidebarUserName.textContent = userName || userEmail;
        }

        if (sidebarAvatar) {
            sidebarAvatar.textContent = userAvatar || "A";
        }
    }

});