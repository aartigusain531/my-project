// ================= USER PROFILE =================

const savedUser = localStorage.getItem("tragoUser");

if (!savedUser) {

    // User is not logged in
    window.location.href = "login.html";
    return;

}

const user = JSON.parse(savedUser);

const userName = user.name || "Learner";
const userEmail = user.email || "";

// Get first letter for avatar
const avatarLetter = userName.charAt(0).toUpperCase();

// Sidebar profile
const sidebarUserName = document.getElementById("sidebarUserName");
const sidebarAvatar = document.getElementById("sidebarAvatar");

if (sidebarUserName) {
    sidebarUserName.textContent = userName;
}

if (sidebarAvatar) {
    sidebarAvatar.textContent = avatarLetter;
}


// Header profile
const headerUserName = document.getElementById("headerUserName");
const headerAvatar = document.getElementById("headerAvatar");

if (headerUserName) {
    headerUserName.textContent = userName;
}

if (headerAvatar) {
    headerAvatar.textContent = avatarLetter;
}


// Welcome message
const welcomeName = document.getElementById("welcomeName");

if (welcomeName) {
    welcomeName.textContent = userName;
}


// ================= PAGE NAVIGATION =================

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const page = item.dataset.page;

        if (!page) {
            return;
        }

        showPage(page);

    });

});


// ================= LANGUAGE SELECTION =================

const languageOptions =
    document.querySelectorAll(".language-option");

const languageContinue =
    document.getElementById("languageContinue");

const levelOptions =
    document.querySelectorAll(".level-option");

const levelContinue =
    document.getElementById("levelContinue");

let selectedLanguage = null;
let selectedFlag = null;
let selectedLevel = null;


languageOptions.forEach(function (option) {

    option.addEventListener("click", function () {

        languageOptions.forEach(function (item) {
            item.classList.remove("selected");
        });

        option.classList.add("selected");

        selectedLanguage =
            option.dataset.language;

        selectedFlag =
            option.dataset.flag;

        if (languageContinue) {
            languageContinue.disabled = false;
        }

    });

});


if (languageContinue) {

    languageContinue.addEventListener("click", function () {

        if (!selectedLanguage) {
            return;
        }

        document.getElementById("selectedLanguage")
            .textContent = selectedLanguage;

        document.getElementById("selectedFlag")
            .textContent = selectedFlag;

        showPage("level");

    });

}


// ================= LEVEL SELECTION =================

levelOptions.forEach(function (option) {

    option.addEventListener("click", function () {

        levelOptions.forEach(function (item) {
            item.classList.remove("selected");
        });

        option.classList.add("selected");

        selectedLevel =
            option.dataset.level;

        if (levelContinue) {
            levelContinue.disabled = false;
        }

    });

});


if (levelContinue) {

    levelContinue.addEventListener("click", function () {

        if (!selectedLanguage || !selectedLevel) {
            return;
        }

        // Save language information
        const languageData = {
            language: selectedLanguage,
            flag: selectedFlag,
            level: selectedLevel
        };

        localStorage.setItem(
            "tragoLanguage",
            JSON.stringify(languageData)
        );

        updateLanguageUI();

        showPage("home");

    });

}


// ================= CHANGE LANGUAGE =================

const changeLanguage =
    document.getElementById("changeLanguage");

if (changeLanguage) {

    changeLanguage.addEventListener("click", function () {
        showLanguageChooser();
    });

}


// ================= LOAD SAVED LANGUAGE =================

updateLanguageUI();


// ================= SHOW PAGE =================

window.showPage = function (pageName) {

    const pages =
        document.querySelectorAll(".page");

    pages.forEach(function (page) {
        page.classList.remove("active-page");
    });


    const selectedPage =
        document.getElementById(pageName + "Page");

    if (selectedPage) {
        selectedPage.classList.add("active-page");
    }


    // Update sidebar active state
    navItems.forEach(function (item) {

        item.classList.remove("active");

        if (item.dataset.page === pageName) {
            item.classList.add("active");
        }

    });

};


// ================= LANGUAGE CHOOSER =================

window.showLanguageChooser = function () {
    showPage("chooseLanguage");
};


// ================= LESSON =================

window.openLesson = function (lesson) {

    const page =
        document.getElementById(lesson + "Page");

    if (page) {
        showPage(lesson);
    }

};


// ================= UPDATE LANGUAGE UI =================

function updateLanguageUI() {

    const savedLanguage =
        localStorage.getItem("tragoLanguage");

    if (!savedLanguage) {
        return;
    }

    const language =
        JSON.parse(savedLanguage);


    // Sidebar
    const sidebarFlag =
        document.getElementById("sidebarFlag");

    const sidebarLanguage =
        document.getElementById("sidebarLanguage");

    const sidebarLevel =
        document.getElementById("sidebarLevel");


    if (sidebarFlag) {
        sidebarFlag.textContent = language.flag;
    }

    if (sidebarLanguage) {
        sidebarLanguage.textContent =
            language.language;
    }

    if (sidebarLevel) {
        sidebarLevel.textContent =
            language.level + " Beginner";
    }


    // Header
    const headerFlag =
        document.getElementById("headerFlag");

    const headerLanguage =
        document.getElementById("headerLanguage");

    const headerLevel =
        document.getElementById("headerLevel");


    if (headerFlag) {
        headerFlag.textContent =
            language.flag;
    }

    if (headerLanguage) {
        headerLanguage.textContent =
            language.language;
    }

    if (headerLevel) {
        headerLevel.textContent =
            language.level + " Beginner";
    }


    // Learning label
    const learningLabel =
        document.getElementById("learningLabel");

    if (learningLabel) {
        learningLabel.textContent =
            language.flag + " " +
            language.language.toUpperCase() +
            " LEARNING";
    }


    // Foundation title
    const foundationTitle =
        document.getElementById("foundationTitle");

    if (foundationTitle) {
        foundationTitle.textContent =
            language.language +
            " Foundations";
    }


    // Path items
    const pathCharacter =
        document.getElementById("pathCharacter");

    const pathVowels =
        document.getElementById("pathVowels");

    const pathConsonants =
        document.getElementById("pathConsonants");

    const pathSyllables =
        document.getElementById("pathSyllables");

    const pathReading =
        document.getElementById("pathReading");

    const pathWriting =
        document.getElementById("pathWriting");

    const pathConversation =
        document.getElementById("pathConversation");


    if (pathCharacter) {
        pathCharacter.textContent =
            language.language + " Alphabet";
    }

    if (pathVowels) {
        pathVowels.textContent =
            language.language + " Vowels";
    }

    if (pathConsonants) {
        pathConsonants.textContent =
            language.language + " Consonants";
    }

    if (pathSyllables) {
        pathSyllables.textContent =
            language.language + " Syllables";
    }

    if (pathReading) {
        pathReading.textContent =
            language.language + " Reading";
    }

    if (pathWriting) {
        pathWriting.textContent =
            language.language + " Writing";
    }

    if (pathConversation) {
        pathConversation.textContent =
            "Basic " +
            language.language +
            " Conversation";
    }


    // Sidebar menu
    const vowelsMenu =
        document.getElementById("vowelsMenu");

    const consonantsMenu =
        document.getElementById("consonantsMenu");


    if (vowelsMenu) {
        vowelsMenu.textContent =
            language.language + " Vowels";
    }

    if (consonantsMenu) {
        consonantsMenu.textContent =
            language.language + " Consonants";
    }

}
