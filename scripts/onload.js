// ————————————————————[ LOAD-CONFIG ]————————————————————— //
// Load config data when the document is ready
document.addEventListener('DOMContentLoaded', loadConfig);

// Define global variables to store config data
let configLanguage = '';
let configVersion = '';
let configTheme = '';
let selectedLanguage = '';
let selectedTheme = '';

// Function to load and set config data
function loadConfig() {
    fetch('config.json') // Replace with the correct path to your config file
        .then((response) => response.json())
        .then((config) => {
            // Set global variables based on config data
            configLanguage = config.language;
            configVersion = config.version;
            configTheme = config.theme;

            setTimeout(() => {
                const versionPlaceholder = document.getElementById('version_placeholder');
                if (versionPlaceholder) {
                    versionPlaceholder.textContent = configVersion;
                }
                // Translate to the selected language and change the theme using the config values
                translateTo(selectedLanguage); // Use config language
                changeTheme(selectedTheme); // Use config theme
            }, 500); // Adjust the duration as needed

            // Load the selected language and theme from local storage
            selectedLanguage = localStorage.getItem('selectedLanguage')// || configLanguage; // Use config language if not found
            selectedTheme = localStorage.getItem('selectedTheme') //|| configTheme; // Use config theme if not found

        // —————————————————[ DEVELOPER-CONSOLE ]—————————————————— //
        const logEntry445 = document.createElement("div");
        logEntry445.textContent = '[Local] Language: ' + selectedLanguage;
        logEntry445.style.color = "#ffffff";
        consoleLog.appendChild(logEntry445);

        // —————————————————[ DEVELOPER-CONSOLE ]—————————————————— //
        const logEntry44 = document.createElement("div");
        logEntry44.textContent = '[Local] Theme: ' + selectedTheme;
        logEntry44.style.color = "#ffffff";
        consoleLog.appendChild(logEntry44);

        })
        .catch((error) => {
            console.error('Error loading config:', error);
        });
}

// Save the selected theme and language to local storage
function saveSelectedTheme(theme) {
    localStorage.setItem('selectedTheme', theme);
}

function saveSelectedLanguage(language) {
    localStorage.setItem('selectedLanguage', language);
}

// Example of how to change the theme and save it
function changeTheme(theme) {
    changeTheme(selectedTheme)

    // Save the selected theme to local storage
    saveSelectedTheme(theme);
}

// Example of how to change the language and save it
function translateTo(language) {
    translateTo(selectedLanguage)

    // Save the selected language to local storage
    saveSelectedLanguage(language);
}

// ————————————————————[ LOAD-EMOJIS ]————————————————————— //
function onLoadEmojis() {
    page_author_1_emojis();
    written_date_1_emojis();
    full_name_emojis();
    first_name_emojis();
    middle_name_emojis();
    last_name_emojis();
    nickname_emojis();
    alias_emojis();
    alter_ego_emojis();
    prefix_emojis();
    suffix_emojis();
    former_name_emojis();
    name_origin_emojis();
    personal_thoughts_name_emojis();

    // —————————————————[ DEVELOPER-CONSOLE ]—————————————————— //
    const logEntry = document.createElement("div");
    logEntry.textContent = "[Emojis] Loaded: 100%";
    logEntry.style.color = "#0ba206"
    consoleLog.appendChild(logEntry);
}

function onLoadElse() {
    showTextPopup();
}

function onLoadAll() {
    // —————————————————[ DEVELOPER-CONSOLE ]—————————————————— //
    const logEntry4 = document.createElement("div");
    logEntry4.textContent = "[OP5] OpenProfile is loading...";
    logEntry4.style.color = "#ffffff"
    consoleLog.appendChild(logEntry4);
    
    setTimeout(() => {
        onLoadEmojis();
    }, 1000); // Adjust the duration as needed
    onLoadElse();

    // —————————————————[ DEVELOPER-CONSOLE ]—————————————————— //
    const logEntry = document.createElement("div");
    logEntry.textContent = "[Page] Loaded: 100%";
    logEntry.style.color = "#0ba206"
    consoleLog.appendChild(logEntry);

    const logEntry2 = document.createElement("div");
    logEntry2.textContent = "[Page] This is a test error - nothing happened!";
    logEntry2.style.color = "#c60719"
    consoleLog.appendChild(logEntry2);

    const logEntry3 = document.createElement("div");
    logEntry3.textContent = "[Page] This is a test warning - nothing happened!";
    logEntry3.style.color = "#c29d00"
    consoleLog.appendChild(logEntry3);
}

window.onload = onLoadAll;