document.addEventListener("DOMContentLoaded", function () {
    // Gestionnaire d'événement pour le bouton "Projets"
    document.getElementById("projet").addEventListener("click", function (e) {
        e.preventDefault(); // Empêcher le comportement par défaut du lien
        document.getElementById("projets").scrollIntoView({ 
            behavior: "smooth" // Défilement en douceur
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Gestionnaire d'événement pour le bouton "accueilBtn"
    document.getElementById("accueilBtn").addEventListener("click", function (e) {
        e.preventDefault(); // Empêcher le comportement par défaut du lien
        document.getElementById("content").scrollIntoView({ 
            behavior: "smooth" // Défilement en douceur
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Gestionnaire d'événement pour le bouton "contactBtn"
    document.getElementById("contactBtn").addEventListener("click", function (e) {
        e.preventDefault(); // Empêcher le comportement par défaut du lien
        document.getElementById("content_contact").scrollIntoView({ 
            behavior: "smooth" // Défilement en douceur
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const button = document.getElementById("toggleTheme");

    let isGradient = false;

    button.addEventListener("click", function () {
        if (isGradient) {
            body.classList.remove("gradient-bg");
            body.classList.add("black-bg");
        } else {
            body.classList.remove("black-bg");
            body.classList.add("gradient-bg");
        }
        isGradient = !isGradient;
    });

    // ✅ Appliquer directement le mode noir au chargement pour éviter un effet visuel incorrect
    body.classList.add("black-bg");
});

