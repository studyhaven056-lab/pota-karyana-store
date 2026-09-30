let currentLanguage = "en";

function changeLanguage() {

    const elements = document.querySelectorAll("[data-en]");

    if (currentLanguage === "en") {

        elements.forEach(function(element) {
            element.textContent = element.getAttribute("data-ur");
        });

        document.documentElement.lang = "ur";

        document.body.classList.add("urdu");

        document.getElementById("languageBtn").textContent = "English";

        currentLanguage = "ur";

    } else {

        elements.forEach(function(element) {
            element.textContent = element.getAttribute("data-en");
        });

        document.documentElement.lang = "en";

        document.body.classList.remove("urdu");

        document.getElementById("languageBtn").textContent = "اردو";

        currentLanguage = "en";
    }
}