/* =========================================
   TRAGO - USER DATA
========================================= */


/*
   These values come from the LOGIN page.

   Your login page must save:

   tragoUserName
   tragoLanguage
*/


const loggedInName =
    localStorage.getItem("tragoUserName") || "Learner";


const loggedInLanguage =
    localStorage.getItem("tragoLanguage") || "Korean";


/* =========================================
   LANGUAGE DATA
========================================= */

const languageData = {

    Korean: {

        name: "Korean",

        flag: "🇰🇷",

        native: "한국어",

        foundation:
            "Korean Foundations",

        character:
            "Korean Alphabet",

        vowels:
            "Korean Vowels",

        consonants:
            "Korean Consonants",

        syllables:
            "Korean Syllables",

        reading:
            "Korean Reading",

        writing:
            "Korean Writing",

        conversation:
            "Basic Korean Conversation",

        characterDescription:
            "Learn Hangul and its basic building blocks."

    },


    Japanese: {

        name: "Japanese",

        flag: "🇯🇵",

        native: "日本語",

        foundation:
            "Japanese Foundations",

        character:
            "Japanese Characters",

        vowels:
            "Japanese Vowels",

        consonants:
            "Japanese Consonants",

        syllables:
            "Japanese Syllables",

        reading:
            "Japanese Reading",

        writing:
            "Japanese Writing",

        conversation:
            "Basic Japanese Conversation",

        characterDescription:
            "Start with Japanese writing systems and characters."

    },


    Spanish: {

        name: "Spanish",

        flag: "🇪🇸",

        native: "Español",

        foundation:
            "Spanish Foundations",

        character:
            "Spanish Alphabet",

        vowels:
            "Spanish Vowels",

        consonants:
            "Spanish Consonants",

        syllables:
            "Spanish Syllables",

        reading:
            "Spanish Reading",

        writing:
            "Spanish Writing",

        conversation:
            "Basic Spanish Conversation",

        characterDescription:
            "Learn the Spanish alphabet and its sounds."

    },


    French: {

        name: "French",

        flag: "🇫🇷",

        native: "Français",

        foundation:
            "French Foundations",

        character:
            "French Alphabet",

        vowels:
            "French Vowels",

        consonants:
            "French Consonants",

        syllables:
            "French Syllables",

        reading:
            "French Reading",

        writing:
            "French Writing",

        conversation:
            "Basic French Conversation",

        characterDescription:
            "Learn French letters and their sounds."

    },


    German: {

        name: "German",

        flag: "🇩🇪",

        native: "Deutsch",

        foundation:
            "German Foundations",

        character:
            "German Alphabet",

        vowels:
            "German Vowels",

        consonants:
            "German Consonants",

        syllables:
            "German Syllables",

        reading:
            "German Reading",

        writing:
            "German Writing",

        conversation:
            "Basic German Conversation",

        characterDescription:
            "Learn German letters and pronunciation."

    },


    Chinese: {

        name: "Chinese",

        flag: "🇨🇳",

        native: "中文",

        foundation:
            "Chinese Foundations",

        character:
            "Chinese Characters",

        vowels:
            "Chinese Vowels",

        consonants:
            "Chinese Consonants",

        syllables:
            "Chinese Syllables",

        reading:
            "Chinese Reading",

        writing:
            "Chinese Writing",

        conversation:
            "Basic Chinese Conversation",

        characterDescription:
            "Start learning Chinese characters and sounds."

    }

};


/* =========================================
   CURRENT LANGUAGE
========================================= */

const selectedLanguageData =
    languageData[loggedInLanguage]
    || languageData.Korean;


/* =========================================
   CURRENT USER
========================================= */

let currentUser = {

    name: loggedInName

};


let currentLanguage = {

    name:
        selectedLanguageData.name,

    flag:
        selectedLanguageData.flag,

    level:
        localStorage.getItem("tragoLevel") || "A1",

    levelName:
        localStorage.getItem("tragoLevelName")
        || "Beginner"

};


/* =========================================
   LEVEL NAMES
========================================= */

const levelNames = {

    A1: "Beginner",

    A2: "Elementary",

    B1: "Intermediate",

    B2: "Upper Intermediate",

    C1: "Advanced",

    C2: "Proficient"

};


/* =========================================
   INITIALIZE DASHBOARD
========================================= */

function initialize() {

    const name =
        currentUser.name;


    const firstLetter =
        name.charAt(0).toUpperCase();


    /* USER NAME */

    document.getElementById(
        "welcomeName"
    ).textContent = name;


    document.getElementById(
        "headerUserName"
    ).textContent = name;


    document.getElementById(
        "sidebarUserName"
    ).textContent = name;


    document.getElementById(
        "headerAvatar"
    ).textContent = firstLetter;


    document.getElementById(
        "sidebarAvatar"
    ).textContent = firstLetter;


    /* LANGUAGE */

    updateLanguageUI();


    /* LEARNING PATH */

    updateLearningPath();


    /* RENDER LANGUAGES */

    renderLanguages();

}


/* =========================================
   UPDATE LANGUAGE UI
========================================= */

function updateLanguageUI() {

    const language =
        selectedLanguageData;


    /* SIDEBAR */

    document.getElementById(
        "sidebarFlag"
    ).textContent =
        language.flag;


    document.getElementById(
        "sidebarLanguage"
    ).textContent =
        language.name;


    document.getElementById(
        "sidebarLevel"
    ).textContent =
        `${currentLanguage.level}
         ${currentLanguage.levelName}`;


    /* HEADER */

    document.getElementById(
        "headerFlag"
    ).textContent =
        language.flag;


    document.getElementById(
        "headerLanguage"
    ).textContent =
        language.name;


    document.getElementById(
        "headerLevel"
    ).textContent =
        `${currentLanguage.level}
         ${currentLanguage.levelName}`;


    /* LEARNING LABEL */

    document.getElementById(
        "learningLabel"
    ).textContent =
        `${language.flag}
         ${language.name.toUpperCase()}
         LEARNING`;


    /* SIDEBAR LEARNING ITEMS */

    document.getElementById(
        "vowelsMenu"
    ).textContent =
        language.vowels;


    document.getElementById(
        "consonantsMenu"
    ).textContent =
        language.consonants;


    /* PAGE TITLES */

    document.getElementById(
        "vowelsTitle"
    ).textContent =
        language.vowels;


    document.getElementById(
        "consonantsTitle"
    ).textContent =
        language.consonants;

}


/* =========================================
   UPDATE LEARNING PATH
========================================= */

function updateLearningPath() {

    const language =
        selectedLanguageData;


    document.getElementById(
        "foundationTitle"
    ).textContent =
        language.foundation;


    document.getElementById(
        "foundationDescription"
    ).textContent =
        `Build your ${language.name}
         skills step by step.`;


    document.getElementById(
        "pathCharacter"
    ).textContent =
        language.character;


    document.getElementById(
        "characterDescription"
    ).textContent =
        language.characterDescription;


    document.getElementById(
        "pathVowels"
    ).textContent =
        language.vowels;


    document.getElementById(
        "pathConsonants"
    ).textContent =
        language.consonants;


    document.getElementById(
        "pathSyllables"
    ).textContent =
        language.syllables;


    document.getElementById(
        "pathReading"
    ).textContent =
        language.reading;


    document.getElementById(
        "pathWriting"
    ).textContent =
        language.writing;


    document.getElementById(
        "pathConversation"
    ).textContent =
        language.conversation;

}


/* =========================================
   PAGE NAVIGATION
========================================= */

function showPage(page) {

    document
        .querySelectorAll(".page")
        .forEach(item => {

            item.classList.remove(
                "active-page"
            );

        });


    const target =
        document.getElementById(
            page + "Page"
        );


    if (target) {

        target.classList.add(
            "active-page"
        );

    }


    document
        .querySelectorAll(".nav-item")
        .forEach(item => {

            item.classList.remove(
                "active"
            );


            if (
                item.dataset.page === page
            ) {

                item.classList.add(
                    "active"
                );

            }

        });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   SIDEBAR NAVIGATION
========================================= */

document
    .querySelectorAll(".nav-item")
    .forEach(item => {

        item.addEventListener(
            "click",
            function () {

                const page =
                    this.dataset.page;


                if (page) {

                    showPage(page);

                }

            }
        );

    });


/* =========================================
   OPEN LESSON
========================================= */

function openLesson(page) {

    showPage(page);

}


/* =========================================
   LANGUAGE LIST
========================================= */

let languages = [

    {

        name:
            selectedLanguageData.name,

        flag:
            selectedLanguageData.flag,

        level:
            currentLanguage.level,

        levelName:
            currentLanguage.levelName

    }

];


let selectedLanguage = null;

let selectedLevel = null;


/* =========================================
   SHOW LANGUAGE CHOOSER
========================================= */

function showLanguageChooser() {

    selectedLanguage = null;


    document
        .querySelectorAll(".language-option")
        .forEach(option => {

            option.classList.remove(
                "selected"
            );

        });


    document.getElementById(
        "languageContinue"
    ).disabled = true;


    showPage(
        "chooseLanguage"
    );

}


/* =========================================
   LANGUAGE SELECTION
========================================= */

document
    .querySelectorAll(".language-option")
    .forEach(option => {

        option.addEventListener(
            "click",
            function () {

                document
                    .querySelectorAll(
                        ".language-option"
                    )
                    .forEach(item => {

                        item.classList.remove(
                            "selected"
                        );

                    });


                this.classList.add(
                    "selected"
                );


                selectedLanguage = {

                    name:
                        this.dataset.language,

                    flag:
                        this.dataset.flag

                };


                document.getElementById(
                    "languageContinue"
                ).disabled = false;

            }
        );

    });


/* =========================================
   LANGUAGE CONTINUE
========================================= */

document.getElementById(
    "languageContinue"
).addEventListener(
    "click",
    function () {

        if (!selectedLanguage) {

            return;

        }


        document.getElementById(
            "selectedFlag"
        ).textContent =
            selectedLanguage.flag;


        document.getElementById(
            "selectedLanguage"
        ).textContent =
            selectedLanguage.name;


        selectedLevel = null;


        document
            .querySelectorAll(
                ".level-option"
            )
            .forEach(option => {

                option.classList.remove(
                    "selected"
                );

            });


        document.getElementById(
            "levelContinue"
        ).disabled = true;


        showPage("level");

    }
);


/* =========================================
   LEVEL SELECTION
========================================= */

document
    .querySelectorAll(".level-option")
    .forEach(option => {

        option.addEventListener(
            "click",
            function () {

                document
                    .querySelectorAll(
                        ".level-option"
                    )
                    .forEach(item => {

                        item.classList.remove(
                            "selected"
                        );

                    });


                this.classList.add(
                    "selected"
                );


                selectedLevel =
                    this.dataset.level;


                document.getElementById(
                    "levelContinue"
                ).disabled = false;

            }
        );

    });


/* =========================================
   START NEW LANGUAGE
========================================= */

document.getElementById(
    "levelContinue"
).addEventListener(
    "click",
    function () {

        if (
            !selectedLanguage ||
            !selectedLevel
        ) {

            return;

        }


        const newLanguage = {

            name:
                selectedLanguage.name,

            flag:
                selectedLanguage.flag,

            level:
                selectedLevel,

            levelName:
                levelNames[selectedLevel]

        };


        localStorage.setItem(
            "tragoLanguage",
            newLanguage.name
        );


        localStorage.setItem(
            "tragoLevel",
            newLanguage.level
        );


        localStorage.setItem(
            "tragoLevelName",
            newLanguage.levelName
        );


        /*
           Reload dashboard so all
           language content changes.
        */

        window.location.reload();

    }
);


/* =========================================
   RENDER LANGUAGES
========================================= */

function renderLanguages() {

    const container =
        document.getElementById(
            "myLanguages"
        );


    if (!container) {

        return;

    }


    container.innerHTML = "";


    languages.forEach(language => {

        const card =
            document.createElement("div");


        card.className =
            "my-language-card";


        if (
            language.name ===
            currentLanguage.name
        ) {

            card.classList.add(
                "active"
            );

        }


        card.innerHTML = `

            <span class="flag">
                ${language.flag}
            </span>

            <div>

                <strong>
                    ${language.name}
                </strong>

                <small>
                    ${language.level}
                    ${language.levelName}
                </small>

            </div>

            ${
                language.name ===
                currentLanguage.name
                ?
                `<span class="current-label">
                    CURRENT
                </span>`
                :
                ""
            }

        `;


        container.appendChild(card);

    });

}


/* =========================================
   CHANGE LANGUAGE
========================================= */

document.getElementById(
    "changeLanguage"
).addEventListener(
    "click",
    function () {

        showPage("languages");

    }
);


/* =========================================
   START APP
========================================= */

initialize();