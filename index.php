<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio - Ryan Germain</title>
    <link rel="stylesheet" href="style.css">
    <script src = "script.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
</head>

<body id="body" onload="loadPage('indexPage.php')">
     <!-- Bannière fixe -->
     <div class="navbar">
        
        <div class="tooltip">
            <button onclick="loadPage('indexPage.php')" class="nav-btn">
                <img src="images/_profile.png" alt="Accueil"> 
            </button>
            <span class="tooltip-text">Accueil</span>
        </div>        
        
        <div class="tooltip">
             <a href="cv.pdf" class="nav-btn"><img src="images/cv.png" alt="CV"></a>
            <span class="tooltip-text">Mon CV</span>
        </div>   
       

        
        <div class="tooltip">
             <a href="#projets" class="nav-btn"><img src="images/folder.png" alt="Projets"></a>
            <span class="tooltip-text">Mes Projets</span>
        </div>   
        
        
       
        

        
        <div class="tooltip">
            <button onclick="loadPage('contact.php')" class="nav-btn">
                <img src="images/_mail.png" alt="Contact">
            </button>
            <span class="tooltip-text">Contactez-moi !</span>
        </div>   
        
        
    </div>

    <div id="content">
    </div>
</body>

</html>
